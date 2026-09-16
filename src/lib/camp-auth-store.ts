export type SqlValue = string | number | null;
export type AuthStatement = { sql: string; values: SqlValue[] };

export interface AuthStore {
  hashConcurrency: number;
  first<T>(sql: string, values: SqlValue[]): Promise<T | undefined>;
  run(sql: string, values?: SqlValue[]): Promise<{ changes: number }>;
  batch(statements: AuthStatement[]): Promise<void>;
  close(): void;
}
