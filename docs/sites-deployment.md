# Sites deployment

The Sites build keeps TanStack Start and the EPOCHA interface. Production account/session persistence uses the logical D1 binding `DB`; local development continues using the existing Node SQLite database. Existing local account data is not uploaded or migrated automatically.

## Commands

- `pnpm dev`: local Node development with `.camp-data.local/accounts.sqlite`.
- `pnpm build:node`: traditional Node/Nitro build in `.output/`.
- `pnpm build`: Sites-compatible Worker and static assets in `dist/`.
- `pnpm db:generate`: generate append-only D1 schema migrations from `db/schema.ts`.
- `pnpm test`: Node account, session, capstone, preference and localization tests.
- `pnpm test:sites`: test the built Worker in local Miniflare with an isolated D1 database. It verifies SSR, migrations, signup, protected content, wrong-password rejection and session revocation without modifying production data.

## Runtime boundaries

`camp-auth-storage.server.ts` is the local SQLite adapter. The Sites Vite build aliases that import to `camp-auth-storage.workers.ts`, which obtains `DB` from Nitro's request-scoped Cloudflare runtime. Both implement the narrow async `AuthStore` interface. No Node SQLite or filesystem module is included in the Worker authentication bundle.

Password hashing remains salted scrypt with the existing parameters. The Worker limits simultaneous hashes to one per isolate to accommodate the 128 MiB memory budget; Node keeps its existing four-hash limit. Rate limiting is persistent and its upsert handles expiry atomically. Session rotation uses a transactional batch. No credentials or local account database are packaged with source or assets.

Sites applies the generated schema migrations before publishing. Keep applied SQL and journal history immutable; add a new migration for later changes. Static assets use `dist/client`, the Worker entry is `dist/server/index.js`, and hosting metadata/migrations are copied under `dist/.openai` during build.

The canonical URL is set for the registered Site by the build script and may be overridden with `VITE_SITE_URL`. The separate Node build retains the original site origin unless an override is provided. Site access controls are independent of the application's camp account login.

Publish through the Sites connector. The source revision must be committed and pushed to that Site's source repository before its matching built archive is saved and deployed. Keep source credentials out of Git configuration, files, remote URLs and logs.
