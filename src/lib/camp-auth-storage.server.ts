import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";
import type { AuthStore, SqlValue } from "./camp-auth-store.ts";

/** Local Node adapter. The Sites build aliases this module to the D1 adapter. */
export function openAuthStore(_request: Request): AuthStore {
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
  return {
    hashConcurrency: 4,
    async first<T>(sql: string, values: SqlValue[]) {
      return db.prepare(sql).get(...values) as T | undefined;
    },
    async run(sql, values = []) {
      return { changes: Number(db.prepare(sql).run(...values).changes) };
    },
    async batch(statements) {
      db.exec("BEGIN IMMEDIATE");
      try {
        for (const { sql, values } of statements) db.prepare(sql).run(...values);
        db.exec("COMMIT");
      } catch (error) {
        db.exec("ROLLBACK");
        throw error;
      }
    },
    close() {
      db.close();
    },
  };
}
