import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { cp, mkdir, writeFile } from "node:fs/promises";

const require = createRequire(import.meta.url);
const vite = join(dirname(require.resolve("vite/package.json")), "bin/vite.js");
const result = spawnSync(process.execPath, [vite, "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    EPOCHA_SITES: "1",
    VITE_SITE_URL:
      process.env.VITE_SITE_URL || "https://epocha-learning-hub-v2.lupang77.chatgpt.site",
  },
});
if (result.status !== 0) process.exit(result.status ?? 1);
await mkdir("dist/.openai", { recursive: true });
await cp(".openai/hosting.json", "dist/.openai/hosting.json");
await cp("drizzle", "dist/.openai/drizzle", { recursive: true });
// Sites accepts this stable Worker entrypoint; Nitro keeps its module graph intact.
await writeFile("dist/server/index.js", 'export { default } from "./index.mjs";\n');
