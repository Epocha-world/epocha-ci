CREATE TABLE `camp_auth_limits` (
	`key` text PRIMARY KEY NOT NULL,
	`attempts` integer NOT NULL,
	`reset_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `camp_auth_limits_reset_at_idx` ON `camp_auth_limits` (`reset_at`);--> statement-breakpoint
CREATE TABLE `camp_sessions` (
	`token_hash` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `camp_users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `camp_sessions_expires_at_idx` ON `camp_sessions` (`expires_at`);--> statement-breakpoint
CREATE TABLE `camp_users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`salt` text NOT NULL,
	`password_hash` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `camp_users_email_unique` ON `camp_users` (`email`);