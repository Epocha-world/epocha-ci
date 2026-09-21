import test from "node:test";
import assert from "node:assert/strict";
import { filterNews, isPublishableNews, publishedNews, type NewsArticle } from "../src/lib/news.ts";

// Test fixtures only: these records are never included in the public catalogue.
const fixture: NewsArticle = {
  id: "test-community-story",
  title: "Test community story",
  summary: "A test-only summary.",
  category: "sparked",
  publishedAt: "2026-09-18",
  href: "https://example.com/story",
};

test("the supplied Yan Paul article is published without an invented publication date", () => {
  const articles = publishedNews();
  assert.equal(articles.length, 1);
  assert.equal(
    articles[0].title,
    "Digital Media and Drone Show Technology with Yan Paul Dubbelman",
  );
  assert.equal(articles[0].publishedAt, undefined);
  assert.equal(
    articles[0].href,
    "/news/digital-media-and-drone-show-technology-with-yan-paul-dubbelman",
  );
});

test("Sparked category filters actual records and all news includes every category", () => {
  const epocha: NewsArticle = { ...fixture, id: "test-practicum-story", category: "epocha" };
  const records = Object.freeze([fixture, epocha]);
  assert.deepEqual(filterNews(records), [fixture, epocha]);
  assert.deepEqual(filterNews(records, "sparked"), [fixture]);
  assert.deepEqual(filterNews(records, "epocha"), [epocha]);
  assert.deepEqual(filterNews([epocha], "sparked"), []);
  assert.deepEqual(records, [fixture, epocha]);
});

test("publication excludes invalid text, dates, categories and unsafe article links", () => {
  assert.equal(isPublishableNews(fixture), true);
  assert.equal(isPublishableNews({ ...fixture, href: "/about/our-story" }), true);
  assert.equal(isPublishableNews(null), false);
  for (const patch of [
    { title: "  " },
    { summary: "" },
    { id: "" },
    { category: "unknown" },
    { publishedAt: "invalid" },
    { publishedAt: "2026-02-30" },
    { publishedAt: "2026-09-18T00:00:00Z" },
    { href: "javascript:alert(1)" },
    { href: "http://example.com/story" },
    { href: "//example.com/story" },
    { href: "/\\example.com/story" },
    { href: "https://user:secret@example.com/story" },
    { href: " https://example.com/story" },
  ])
    assert.equal(isPublishableNews({ ...fixture, ...patch }), false, JSON.stringify(patch));
});

test("published news excludes duplicates and invalid records and orders newest first", () => {
  const older: NewsArticle = { ...fixture, id: "test-older-story", publishedAt: "2026-09-01" };
  const records = Object.freeze([older, fixture, fixture, { ...fixture, title: "" }]);
  assert.deepEqual(publishedNews(records), [fixture, older]);
  assert.equal(records[0], older);
});
