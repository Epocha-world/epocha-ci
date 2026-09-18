import test from "node:test";
import assert from "node:assert/strict";
import { normalizeMessageKey, translateMessage } from "../src/i18n/translate.ts";

test("English and untranslated fallback preserve paragraph breaks and spacing", () => {
  const source = "First paragraph.\n\nSecond paragraph.\n  • Third line.";
  assert.equal(translateMessage("en", source, {}), source);
  assert.equal(translateMessage("ko", source, {}), source);
});

test("multiline source keys match normalized catalog entries without flattening Korean copy", () => {
  const source = "First paragraph.\n\nSecond paragraph.";
  const korean = "첫 번째 문단.\n\n두 번째 문단.";
  const catalog = { [normalizeMessageKey(source)]: korean };
  assert.equal(translateMessage("ko", source, catalog), korean);
  assert.equal(translateMessage("ko", "First paragraph. Second paragraph.", catalog), korean);
});

test("interpolation preserves paragraph breaks and leaves unknown variables intact", () => {
  const source = "Hello {{name}}.\n\n{{missing}}";
  assert.equal(translateMessage("en", source, {}, { name: "Sam" }), "Hello Sam.\n\n{{missing}}");
  const catalog = { [normalizeMessageKey(source)]: "안녕하세요 {{name}}.\n\n{{missing}}" };
  assert.equal(
    translateMessage("ko", source, catalog, { name: "Sam" }),
    "안녕하세요 Sam.\n\n{{missing}}",
  );
});
