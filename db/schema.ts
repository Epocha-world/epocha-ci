import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const campUsers = sqliteTable(
  "camp_users",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    salt: text("salt").notNull(),
    passwordHash: text("password_hash").notNull(),
  },
  (table) => [uniqueIndex("camp_users_email_unique").on(table.email)],
);

export const campSessions = sqliteTable(
  "camp_sessions",
  {
    tokenHash: text("token_hash").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => campUsers.id),
    expiresAt: integer("expires_at").notNull(),
  },
  (table) => [index("camp_sessions_expires_at_idx").on(table.expiresAt)],
);

export const campAuthLimits = sqliteTable(
  "camp_auth_limits",
  {
    key: text("key").primaryKey(),
    attempts: integer("attempts").notNull(),
    resetAt: integer("reset_at").notNull(),
  },
  (table) => [index("camp_auth_limits_reset_at_idx").on(table.resetAt)],
);
