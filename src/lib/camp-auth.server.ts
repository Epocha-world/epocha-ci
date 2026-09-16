import { createHash, randomBytes, randomUUID, scrypt, timingSafeEqual } from "node:crypto";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";

type CampUser = { id: string; email: string };
type Account = CampUser & { salt: string; password_hash: string };

const COOKIE = "camp_session";
const SESSION_SECONDS = 7 * 24 * 60 * 60;
const RATE_WINDOW = 15 * 60 * 1000;
const SCRYPT_OPTIONS = { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 };

function database() {
  const path = resolve(process.env.CAMP_AUTH_DB_PATH || ".camp-data.local/accounts.sqlite");
  mkdirSync(dirname(path), { recursive: true, mode: 0o700 });
  const db = new DatabaseSync(path);
  db.exec(`
    PRAGMA busy_timeout = 5000;
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS camp_users (
      id TEXT PRIMARY KEY, email TEXT NOT NULL UNIQUE,
      salt TEXT NOT NULL, password_hash TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS camp_sessions (
      token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES camp_users(id),
      expires_at INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS camp_auth_limits (
      key TEXT PRIMARY KEY, attempts INTEGER NOT NULL, reset_at INTEGER NOT NULL
    );
  `);
  return db;
}

function digest(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function sessionHash(request: Request) {
  const token = request.headers
    .get("cookie")
    ?.split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${COOKIE}=`))
    ?.slice(COOKIE.length + 1);
  return token && /^[a-f0-9]{64}$/.test(token) ? digest(token) : null;
}

export function getCampUser(request: Request): CampUser | null {
  const tokenHash = sessionHash(request);
  if (!tokenHash) return null;
  const db = database();
  try {
    const row = db
      .prepare(
        `SELECT u.id, u.email FROM camp_users u
      JOIN camp_sessions s ON u.id = s.user_id
      WHERE s.token_hash = ? AND s.expires_at > ?`,
      )
      .get(tokenHash, Date.now());
    return row ? { id: String(row.id), email: String(row.email) } : null;
  } finally {
    db.close();
  }
}

let activeHashes = 0;

function passwordHash(password: string, salt: string): Promise<Buffer | null> {
  // Bound expensive work without imposing a site-wide timed account lockout.
  if (activeHashes >= 4) return Promise.resolve(null);
  activeHashes++;
  return new Promise((resolveHash, reject) => {
    scrypt(password, salt, 64, SCRYPT_OPTIONS, (error, key) => {
      activeHashes--;
      if (error) reject(error);
      else resolveHash(key);
    });
  });
}

function response(body: object, status = 200, cookie?: string) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
      ...(cookie ? { "Set-Cookie": cookie } : {}),
    },
  });
}

function sessionCookie(request: Request, token: string, maxAge: number) {
  const secure = new URL(process.env.CAMP_AUTH_ORIGIN || request.url).protocol === "https:";
  return `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure ? "; Secure" : ""}`;
}

function rateLimited(db: DatabaseSync, key: string, limit: number) {
  const now = Date.now();
  db.prepare("DELETE FROM camp_auth_limits WHERE reset_at <= ?").run(now);
  const row = db
    .prepare(
      `INSERT INTO camp_auth_limits (key, attempts, reset_at)
    VALUES (?, 1, ?) ON CONFLICT(key) DO UPDATE SET attempts = attempts + 1
    RETURNING attempts`,
    )
    .get(key, now + RATE_WINDOW);
  return Number(row?.attempts) > limit;
}

async function readBody(request: Request): Promise<Record<string, unknown> | null> {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json"))
    return null;
  const reader = request.body?.getReader();
  if (!reader) return null;
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 4096) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
    const value: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    return value !== null && typeof value === "object" && !Array.isArray(value)
      ? (value as Record<string, unknown>)
      : null;
  } catch {
    return null;
  }
}

/** Node 22.13+ with persistent writable storage; never import this module in client code. */
export async function handleCampAuth(request: Request): Promise<Response> {
  try {
    if (request.method === "GET") return response({ user: getCampUser(request) });
    if (request.method !== "POST") return response({ error: "Method not allowed." }, 405);
    const origin = new URL(process.env.CAMP_AUTH_ORIGIN || request.url).origin;
    if (
      request.headers.get("origin") !== origin ||
      request.headers.get("sec-fetch-site") === "cross-site"
    ) {
      return response({ error: "Please submit this form from this website." }, 403);
    }
    const body = await readBody(request);
    if (!body || !["register", "login", "logout"].includes(String(body.action))) {
      return response({ error: "Invalid account request." }, 400);
    }
    const db = database();
    try {
      db.prepare("DELETE FROM camp_sessions WHERE expires_at <= ?").run(Date.now());
      if (body.action === "logout") {
        const tokenHash = sessionHash(request);
        if (tokenHash) db.prepare("DELETE FROM camp_sessions WHERE token_hash = ?").run(tokenHash);
        return response({ user: null }, 200, sessionCookie(request, "", 0));
      }
      const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
      const password = typeof body.password === "string" ? body.password : "";
      const validIdentity =
        /^[a-z0-9][a-z0-9._-]{2,39}$/.test(email) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!validIdentity || email.length > 254 || password.length < 12 || password.length > 128) {
        return response(
          {
            error:
              "Use a valid email or a 3–40 character username, and a password with 12–128 characters.",
          },
          400,
        );
      }
      // Identity limits survive restarts; concurrency separately bounds invented usernames.
      if (rateLimited(db, digest(email), 8)) {
        return response({ error: "Too many attempts. Please try again in 15 minutes." }, 429);
      }
      let account = db
        .prepare("SELECT id, email, salt, password_hash FROM camp_users WHERE email = ?")
        .get(email) as Account | undefined;
      if (body.action === "register") {
        if (account)
          return response({ error: "This email or username is unavailable. Try signing in." }, 409);
        const salt = randomBytes(32).toString("hex");
        const hash = await passwordHash(password, salt);
        if (!hash) return response({ error: "Accounts are busy. Please try again shortly." }, 429);
        account = { id: randomUUID(), email, salt, password_hash: hash.toString("hex") };
        const result = db
          .prepare(
            "INSERT OR IGNORE INTO camp_users (id, email, salt, password_hash) VALUES (?, ?, ?, ?)",
          )
          .run(account.id, account.email, account.salt, account.password_hash);
        if (!result.changes)
          return response({ error: "This email or username is unavailable. Try signing in." }, 409);
      } else {
        const hash = await passwordHash(password, account?.salt || "0".repeat(64));
        if (!hash) return response({ error: "Accounts are busy. Please try again shortly." }, 429);
        if (!account || !timingSafeEqual(hash, Buffer.from(account.password_hash, "hex"))) {
          return response({ error: "Email, username, or password is incorrect." }, 401);
        }
      }
      const previous = sessionHash(request);
      if (previous) db.prepare("DELETE FROM camp_sessions WHERE token_hash = ?").run(previous);
      const token = randomBytes(32).toString("hex");
      db.prepare(
        "INSERT INTO camp_sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)",
      ).run(digest(token), account.id, Date.now() + SESSION_SECONDS * 1000);
      return response(
        { user: { id: account.id, email: account.email } },
        200,
        sessionCookie(request, token, SESSION_SECONDS),
      );
    } finally {
      db.close();
    }
  } catch {
    return response(
      { error: "Accounts are temporarily unavailable. Please try again later." },
      503,
    );
  }
}
