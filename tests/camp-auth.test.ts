import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { spawnSync } from "node:child_process";
import { after, test } from "node:test";
import { handleCampAuth, getCampUser } from "../src/lib/camp-auth.server.ts";
import { safeCampReturnTo } from "../src/lib/camp-auth.ts";

const folder = mkdtempSync(join(tmpdir(), "epocha-auth-"));
process.env.CAMP_AUTH_DB_PATH = join(folder, "accounts.sqlite");
process.env.CAMP_AUTH_ORIGIN = "https://camp.example";
after(() => rmSync(folder, { recursive: true, force: true }));
const password = "Test-only secure password 123";
const email = "reader@example.test";

function request(body?: object, cookie?: string, origin = "https://camp.example") {
  return new Request("https://camp.example/api/camp-auth", {
    method: body ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      Origin: origin,
      ...(cookie ? { Cookie: cookie } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
}

test("accounts persist, authenticate, expire, rotate and revoke without leaking secrets", async () => {
  assert.deepEqual(await (await handleCampAuth(request())).json(), { user: null });
  const forbidden = await handleCampAuth(
    request({ action: "register", email, password }, undefined, "https://attacker.test"),
  );
  assert.equal(forbidden.status, 403);
  const missingOrigin = request({ action: "register", email, password });
  missingOrigin.headers.delete("origin");
  assert.equal((await handleCampAuth(missingOrigin)).status, 403);
  assert.equal(
    (await handleCampAuth(request({ action: "register", email, password: "short" }))).status,
    400,
  );

  const registration = await handleCampAuth(request({ action: "register", email, password }));
  assert.equal(registration.status, 200);
  const body = await registration.json();
  assert.deepEqual(Object.keys(body.user).sort(), ["email", "id"]);
  assert.equal(body.user.email, email);
  assert.equal(registration.headers.get("cache-control"), "private, no-store");
  const setCookie = registration.headers.get("set-cookie")!;
  for (const flag of ["HttpOnly", "SameSite=Strict", "Secure", "Max-Age=604800"])
    assert.ok(setCookie.includes(flag));
  const cookie = setCookie.split(";")[0];
  assert.deepEqual(getCampUser(request(undefined, cookie)), body.user);
  assert.equal(getCampUser(request(undefined, "camp_session=forged")), null);

  // A separate process reads the same persistent database and authenticates this session.
  const authModule = new URL("../src/lib/camp-auth.server.ts", import.meta.url).href;
  const child = spawnSync(
    process.execPath,
    [
      "--input-type=module",
      "-e",
      `import {getCampUser} from ${JSON.stringify(authModule)}; const user = getCampUser(new Request('https://camp.example', {headers:{cookie:process.env.TEST_COOKIE}})); process.stdout.write(JSON.stringify(user));`,
    ],
    {
      env: { ...process.env, TEST_COOKIE: cookie },
      encoding: "utf8",
    },
  );
  assert.equal(child.status, 0, child.stderr);
  assert.deepEqual(JSON.parse(child.stdout), body.user);

  const db = new DatabaseSync(process.env.CAMP_AUTH_DB_PATH!);
  const saved = db
    .prepare("SELECT password_hash, salt FROM camp_users WHERE email = ?")
    .get(email)!;
  assert.notEqual(saved.password_hash, password);
  assert.equal(String(saved.salt).length, 64);
  const session = db.prepare("SELECT token_hash FROM camp_sessions").get()!;
  assert.notEqual(session.token_hash, cookie.split("=")[1]);
  assert.equal(
    (await handleCampAuth(request({ action: "login", email, password: "incorrect password 123" })))
      .status,
    401,
  );
  const login = await handleCampAuth(request({ action: "login", email, password }, cookie));
  assert.equal(login.status, 200);
  assert.equal(getCampUser(request(undefined, cookie)), null);
  const newCookie = login.headers.get("set-cookie")!.split(";")[0];
  const blockedLogout = await handleCampAuth(
    request({ action: "logout" }, newCookie, "https://attacker.test"),
  );
  assert.equal(blockedLogout.status, 403);
  assert.deepEqual(getCampUser(request(undefined, newCookie)), body.user);
  const logout = await handleCampAuth(request({ action: "logout" }, newCookie));
  assert.equal(logout.status, 200);
  assert.ok(logout.headers.get("set-cookie")!.includes("Max-Age=0"));
  assert.equal(getCampUser(request(undefined, newCookie)), null);

  const again = await handleCampAuth(request({ action: "login", email, password }));
  const expiredCookie = again.headers.get("set-cookie")!.split(";")[0];
  db.prepare("UPDATE camp_sessions SET expires_at = ?").run(Date.now() - 1);
  assert.equal(getCampUser(request(undefined, expiredCookie)), null);
  db.close();
});

test("input is bounded and repeated sign-in attempts are persistently limited", async () => {
  assert.equal(
    (
      await handleCampAuth(
        request({ action: "register", email: "short", password: "x".repeat(5000) }),
      )
    ).status,
    400,
  );
  const malformed = request({});
  malformed.headers.set("Content-Type", "text/plain");
  assert.equal((await handleCampAuth(malformed)).status, 400);
  for (let i = 0; i < 8; i++) {
    assert.equal(
      (await handleCampAuth(request({ action: "login", email: "unknown-user", password }))).status,
      401,
    );
  }
  assert.equal(
    (await handleCampAuth(request({ action: "login", email: "unknown-user", password }))).status,
    429,
  );
  const db = new DatabaseSync(process.env.CAMP_AUTH_DB_PATH!);
  assert.ok(Number(db.prepare("SELECT COUNT(*) AS count FROM camp_auth_limits").get()!.count) >= 2);
  db.close();
});

test("return locations remain within camp paths", () => {
  const fallback = "/practicums/startup-lab-camp/practicum/live-opportunities";
  for (const value of [
    "https://evil.test",
    "//evil.test",
    "/practicums/startup-lab-camp/../../evil",
    "/practicums/startup-lab-camp/account",
    "/practicums/startup-lab-camp/\\evil",
    undefined,
  ]) {
    assert.equal(safeCampReturnTo(value), fallback);
  }
  assert.equal(
    safeCampReturnTo("/practicums/startup-lab-camp/capstones/sample"),
    "/practicums/startup-lab-camp/capstones/sample",
  );
});

test("concurrent password work is bounded without locking out other identities", async () => {
  const responses = await Promise.all(
    Array.from({ length: 6 }, (_, index) =>
      handleCampAuth(request({ action: "login", email: `concurrent-user-${index}`, password })),
    ),
  );
  assert.equal(responses.filter((result) => result.status === 429).length, 2);
  assert.equal(responses.filter((result) => result.status === 401).length, 4);
  assert.equal(
    (await handleCampAuth(request({ action: "login", email: "another-reader", password }))).status,
    401,
  );
});
