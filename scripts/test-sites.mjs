import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
const pluginRequire = createRequire(import.meta.resolve("@cloudflare/vite-plugin"));
const { Miniflare } = await import(pathToFileURL(pluginRequire.resolve("miniflare")).href);
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import assert from "node:assert/strict";
const mf = new Miniflare({
  modules: true,
  scriptPath: resolve("dist/server/index.js"),
  modulesRules: [{ type: "ESModule", include: ["**/*.mjs", "**/*.js"] }],
  compatibilityDate: "2025-09-24",
  compatibilityFlags: ["nodejs_compat"],
  d1Databases: ["DB"],
  assets: {
    directory: resolve("dist/client"),
    binding: "ASSETS",
    routerConfig: { has_user_worker: true, invoke_user_worker_ahead_of_assets: true },
  },
});
try {
  const db = await mf.getD1Database("DB");
  for (const file of (await readdir("drizzle")).filter((f) => f.endsWith(".sql")).sort()) {
    for (const sql of (await readFile("drizzle/" + file, "utf8"))
      .split("--> statement-breakpoint")
      .filter((x) => x.trim()))
      await db.prepare(sql).run();
  }
  const origin = "https://worker.test";
  const send = (path, body, cookie) =>
    mf.dispatchFetch(origin + path, {
      method: body ? "POST" : "GET",
      headers: {
        Origin: origin,
        "Content-Type": "application/json",
        "Accept-Language": "ko-KR",
        ...(cookie ? { Cookie: cookie } : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
  const home = await send("/");
  assert.equal(home.status, 200);
  assert.match(await home.text(), /<html[^>]*lang="ko"/);
  const protectedPath = "/api/camp-capstones/lower-waste-event-model";
  assert.equal((await send(protectedPath)).status, 401);
  const started = Date.now();
  const registration = await send("/api/camp-auth", {
    action: "register",
    email: "sites-smoke@example.test",
    password: "Sites test-only secure password 123",
  });
  const body = await registration.json();
  assert.equal(registration.status, 200, JSON.stringify(body));
  const cookie = registration.headers.get("set-cookie").split(";")[0];
  assert.equal((await send(protectedPath, undefined, cookie)).status, 200);
  assert.equal(
    (
      await send("/api/camp-auth", {
        action: "login",
        email: "sites-smoke@example.test",
        password: "Incorrect test password 123",
      })
    ).status,
    401,
  );
  assert.equal((await send("/api/camp-auth", { action: "logout" }, cookie)).status, 200);
  assert.equal((await send(protectedPath, undefined, cookie)).status, 401);
  console.log(
    JSON.stringify({
      workerSSR: "pass",
      d1Migrations: "pass",
      signup: "pass",
      protectedCapstone: "pass",
      wrongPassword: "pass",
      logoutRevocation: "pass",
      authFlowWallMs: Date.now() - started,
    }),
  );
} finally {
  await mf.dispose();
}
