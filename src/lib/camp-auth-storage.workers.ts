import type { AuthStore, SqlValue } from "./camp-auth-store.ts";

type D1Statement = {
  bind(...values: SqlValue[]): D1Statement;
  first<T>(): Promise<T | null>;
  run(): Promise<{ meta: { changes: number } }>;
};
type D1Binding = {
  prepare(sql: string): D1Statement;
  batch(statements: D1Statement[]): Promise<unknown>;
};

/** Nitro attaches these request-scoped bindings before invoking TanStack Start. */
export function openAuthStore(request: Request): AuthStore {
  const db = (
    request as Request & {
      runtime?: { cloudflare?: { env?: { DB?: D1Binding } } };
    }
  ).runtime?.cloudflare?.env?.DB;
  if (!db) throw new Error("Account database binding is unavailable");
  return {
    // scrypt needs ~32 MiB: leave room for rendering within a 128 MiB isolate.
    hashConcurrency: 1,
    async first<T>(sql: string, values: SqlValue[]) {
      return (
        (await db
          .prepare(sql)
          .bind(...values)
          .first<T>()) ?? undefined
      );
    },
    async run(sql, values = []) {
      return {
        changes: (
          await db
            .prepare(sql)
            .bind(...values)
            .run()
        ).meta.changes,
      };
    },
    async batch(statements) {
      await db.batch(statements.map(({ sql, values }) => db.prepare(sql).bind(...values)));
    },
    close() {
      /* Bindings are managed by the Workers runtime. */
    },
  };
}
