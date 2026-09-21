import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { yanPaulBlocks } from "../src/lib/yan-paul-story.ts";
import { isPublishableCapstone, publishedCapstones } from "../src/lib/camp-capstones.ts";
const sha = (value: string | Buffer) => createHash("sha256").update(value).digest("hex");

test("the complete supplied article text matches the Word source, without omissions or invented copy", () => {
  const text = yanPaulBlocks
    .flatMap((block) => ("text" in block ? [block.text] : []))
    .join("")
    .replace(/\s+/g, "");
  assert.equal(sha(text), "5e2cab2cbd24f28c567c0e491e6548bacac224db1fc75bb439592b400b16aa9d");
});
test("all five supplied article images are retained in their original order and bytes", () => {
  const images = yanPaulBlocks.filter((block) => block.type === "image");
  assert.deepEqual(
    images.map((image) => image.src),
    [
      "/news/yan-paul-image3.png",
      "/news/yan-paul-image5.png",
      "/news/yan-paul-image7.png",
      "/news/yan-paul-image4.png",
      "/news/yan-paul-image6.png",
    ],
  );
  assert.deepEqual(
    images.map((image) => sha(readFileSync("public" + image.src))),
    [
      "bb3e929f7a18a465973649507628f45819edd19189eb64dc3d56e6144750dbbf",
      "78dcfc90d75670139c374c9f825ea924796ee995186e19f75c5619b82cc6c4a7",
      "f9f155a7070ff97f2d7e1a6580889d35e566f18b0a904d5fa00fad6a86ae0412",
      "642b3c572fef68920f621c47c13ea2289e8434881757574f93c94cf6d3c9e0ed",
      "f742ccba82607ca69dbaddc4bee208e4233281c78c895e63200f48117b5ba7e1",
    ],
  );
});
test("document display briefs cannot accidentally advertise an invented registration URL", () => {
  const brief = publishedCapstones()[0];
  assert.equal(isPublishableCapstone(brief), true);
  assert.equal(isPublishableCapstone({ ...brief, registrationUrl: "javascript:alert(1)" }), false);
  assert.equal(
    isPublishableCapstone({ ...brief, registrationUrl: "https://example.com/not-provided" }),
    false,
  );
});
