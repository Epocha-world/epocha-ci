import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";
import { publishedCapstones } from "../src/lib/camp-capstones.ts";
import { publishedNews } from "../src/lib/news.ts";

function declaredRoutes() {
  const routes = new Set<string>();
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
        node.expression.text === "createFileRoute" &&
        node.arguments[0] &&
        ts.isStringLiteral(node.arguments[0])
      ) {
        const path = node.arguments[0].text.replace(/_\//g, "/").replace(/\/$/, "") || "/";
        routes.add(path);
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }
  return routes;
}

test("hidden content and retired aliases are not registered or advertised", () => {
  const routes = declaredRoutes();
  const sitemap = readFileSync("src/routes/sitemap[.]xml.ts", "utf8");
  for (const hidden of [
    "/home-demo",
    "/how-hpi-works",
    "/hpi-assessment",
    "/events",
    "/events/launch-event",
    "/about/partnerships",
    "/practicums/hanaro-marketing",
  ]) {
    assert.equal(routes.has(hidden), false, `Hidden route is still registered: ${hidden}`);
    assert.equal(
      sitemap.includes(`path: "${hidden}"`),
      false,
      `Hidden route in sitemap: ${hidden}`,
    );
  }
});

test("all user-facing destinations retain route implementations", () => {
  const routes = declaredRoutes();
  for (const path of [
    "/",
    "/practicums",
    "/practicums/hanaro",
    "/practicums/mirae-industry",
    "/practicums/hanaro-marketing/voices-in-motion",
    "/practicums/startup-lab-camp",
    "/practicums/startup-lab-camp/practicum/leadership-tracks",
    "/practicums/startup-lab-camp/practicum/coaching-program",
    "/practicums/startup-lab-camp/how-it-works",
    "/practicums/startup-lab-camp/open-capstones",
    "/practicums/startup-lab-camp/capstones/$capstoneId",
    "/news",
    "/about",
    "/about/our-story",
    "/about/sparked",
    "/grow-with-us",
    "/connect",
    "/privacy",
    "/terms",
    "/refund-policy",
    "/safeguarding",
  ])
    assert.ok(routes.has(path), `Missing exposed route: ${path}`);
  for (const article of publishedNews())
    assert.ok(routes.has(article.href), `Missing article route: ${article.href}`);
  assert.equal(publishedCapstones().length, 3);
});
