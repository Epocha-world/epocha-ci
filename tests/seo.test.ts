import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { runInNewContext } from "node:vm";
import ts from "typescript";
import { normalizeMessageKey, translateMessage } from "../src/i18n/translate.ts";

const catalog: Record<string, string> = {};
for (const filename of readdirSync("src/i18n/messages").sort()) {
  const { default: entries } = await import(
    pathToFileURL(`${process.cwd()}/src/i18n/messages/${filename}`).href
  );
  for (const [key, value] of Object.entries(entries))
    catalog[normalizeMessageKey(key)] = String(value);
}

test("metadata generation keeps successive English and Korean requests independent", () => {
  // Load the production generator with its Vite-only resource loader supplied by the real pure translator.
  const source = readFileSync("src/lib/seo.ts", "utf8").replace(
    "import.meta.env.VITE_SITE_URL",
    "undefined",
  );
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  const exports: Record<
    string,
    (...args: unknown[]) => { meta: Record<string, string>[]; scripts: { children: string }[] }
  > = {};
  runInNewContext(outputText, {
    exports,
    URL,
    require: (name: string) => {
      assert.equal(name, "@/i18n/resources");
      return {
        translate: (locale: "en" | "ko", message: string) =>
          translateMessage(locale, message, catalog),
      };
    },
  });
  const options = {
    title: "News — EPOCHA",
    description:
      "News from EPOCHA and Sparked!: practicum updates, community stories and opportunities to get involved.",
    path: "/news",
  };
  const korean = exports.createSeoHead({ ...options, locale: "ko" });
  const english = exports.createSeoHead({ ...options, locale: "en" });
  assert.equal(korean.meta.find((meta) => meta.title)?.title, "소식 — EPOCHA");
  assert.equal(english.meta.find((meta) => meta.title)?.title, options.title);
  assert.equal(korean.meta.find((meta) => meta.property === "og:locale")?.content, "ko_KR");
  assert.equal(english.meta.find((meta) => meta.property === "og:locale")?.content, "en_US");
  assert.equal(JSON.parse(korean.scripts[0].children).inLanguage, "ko");
  assert.equal(JSON.parse(english.scripts[0].children).inLanguage, "en");
  assert.equal(korean.meta.find((meta) => meta.title)?.title, "소식 — EPOCHA");
});

test("every route supplies the request locale and every static metadata message is translated", () => {
  const errors: string[] = [];
  for (const filename of readdirSync("src/routes").filter((name) => name.endsWith(".tsx"))) {
    const source = ts.createSourceFile(
      filename,
      readFileSync(`src/routes/${filename}`, "utf8"),
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );
    function visit(node: ts.Node) {
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === "createSeoHead"
      ) {
        const options = node.arguments[0];
        assert.ok(ts.isObjectLiteralExpression(options), filename);
        const locale = options.properties.find(
          (property) => property.name?.getText(source) === "locale",
        );
        if (
          !locale ||
          !ts.isPropertyAssignment(locale) ||
          locale.initializer.getText(source) !== "match.context.preferences.locale"
        )
          errors.push(`${filename}: request locale missing`);
        for (const property of options.properties) {
          if (
            !ts.isPropertyAssignment(property) ||
            !["title", "description", "ogTitle", "socialDescription"].includes(
              property.name.getText(source),
            )
          )
            continue;
          if (
            ts.isStringLiteral(property.initializer) &&
            !catalog[normalizeMessageKey(property.initializer.text)]
          )
            errors.push(`${filename}: untranslated ${property.initializer.text}`);
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }
  assert.deepEqual(errors, []);
});
