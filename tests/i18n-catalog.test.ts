import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { test } from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

async function filesIn(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(
    entries.map((entry) => {
      const filename = path.join(directory, entry.name);
      return entry.isDirectory() ? filesIn(filename) : Promise.resolve([filename]);
    }),
  );
  return groups.flat();
}

test("every explicit translated UI message has a Korean catalog entry", async () => {
  const directory = path.join(root, "src/i18n/messages");
  const catalog: Record<string, string> = {};
  for (const filename of (await readdir(directory)).filter((name) => name.endsWith(".ts")).sort()) {
    const module = await import(pathToFileURL(path.join(directory, filename)).href);
    for (const [key, value] of Object.entries(module.default))
      catalog[normalize(key)] = value as string;
  }
  const missing: string[] = [];
  for (const filename of (await filesIn(path.join(root, "src"))).filter((name) =>
    name.endsWith(".tsx"),
  )) {
    const content = await readFile(filename, "utf8");
    const source = ts.createSourceFile(
      filename,
      content,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );
    function visit(node: ts.Node) {
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === "t"
      ) {
        const message = node.arguments[0];
        if (message && ts.isStringLiteralLike(message)) {
          const key = normalize(message.text);
          if (key && !catalog[key]) missing.push(`${path.relative(root, filename)}: ${key}`);
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }
  assert.deepEqual(missing, [], `Untranslated UI messages:\n${missing.join("\n")}`);
});

test("new translation dictionaries preserve interpolation variables", async () => {
  const directory = path.join(root, "src/i18n/messages");
  for (const filename of (await readdir(directory)).filter(
    (name) => name.startsWith("v1-") && name.endsWith(".ts"),
  )) {
    const { default: dictionary } = await import(
      pathToFileURL(path.join(directory, filename)).href
    );
    for (const [english, korean] of Object.entries(dictionary) as [string, string][]) {
      const placeholders = (text: string) =>
        [...text.matchAll(/\{\{(\w+)\}\}/g)].map((match) => match[1]).sort();
      assert.deepEqual(placeholders(korean), placeholders(english), `${filename}: ${english}`);
      assert.ok(korean.trim(), `${filename}: empty translation for ${english}`);
    }
  }
});
