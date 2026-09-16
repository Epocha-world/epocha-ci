import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import test from "node:test";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

async function sourceFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(
    entries.map(async (entry) => {
      const filename = path.join(directory, entry.name);
      return entry.isDirectory()
        ? sourceFiles(filename)
        : /\.tsx?$/.test(entry.name)
          ? [filename]
          : [];
    }),
  );
  return groups.flat();
}

test("Korean messages are nonempty and preserve interpolation variables", async () => {
  const directory = path.join(root, "src/i18n/messages");
  for (const filename of await sourceFiles(directory)) {
    const messages = (await import(pathToFileURL(filename).href)).default as Record<string, string>;
    for (const [english, korean] of Object.entries(messages)) {
      assert.ok(korean.trim(), `${filename}: empty translation for ${english}`);
      const variables = (value: string) =>
        [...value.matchAll(/{{\s*([^},]+)(?:,[^}]+)?\s*}}/g)]
          .map((match) => match[1].trim())
          .sort();
      assert.deepEqual(variables(korean), variables(english), `Interpolation mismatch: ${english}`);
    }
  }
});

test("every literal translation call has a Korean catalog entry", async () => {
  const catalog = new Set<string>();
  for (const filename of await sourceFiles(path.join(root, "src/i18n/messages"))) {
    const messages = (await import(pathToFileURL(filename).href)).default as Record<string, string>;
    Object.keys(messages).forEach((key) => catalog.add(normalize(key)));
  }
  const missing: string[] = [];
  for (const filename of await sourceFiles(path.join(root, "src"))) {
    if (filename.includes(`${path.sep}messages${path.sep}`)) continue;
    const source = ts.createSourceFile(
      filename,
      await readFile(filename, "utf8"),
      ts.ScriptTarget.Latest,
      true,
    );
    const visit = (node: ts.Node) => {
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === "t"
      ) {
        const arg = node.arguments[0];
        if (arg && ts.isStringLiteralLike(arg) && !catalog.has(normalize(arg.text))) {
          const line = source.getLineAndCharacterOfPosition(node.getStart()).line + 1;
          missing.push(`${path.relative(root, filename)}:${line}: ${arg.text}`);
        }
      }
      ts.forEachChild(node, visit);
    };
    visit(source);
  }
  assert.deepEqual(missing, [], `Missing Korean messages:\n${missing.join("\n")}`);
});
