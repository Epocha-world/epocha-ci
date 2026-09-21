import test from "node:test";
import assert from "node:assert/strict";
import {
  isPublishableCapstone,
  publishedCapstones,
  filterCapstones,
  capstoneFieldLabel,
  type CampCapstone,
} from "../src/lib/camp-capstones.ts";
const now = Date.parse("2026-09-18T00:00:00Z");
const fixture: CampCapstone = {
  id: "test-film-brief",
  track: "Semester",
  field: "Media & Film Production",
  title: "Film a community story",
  partner: "Test partner",
  summary: "Research and produce a short film",
  brief: "Test-only project brief",
  deliverables: ["A short film"],
  skills: ["Interviewing"],
  format: "Online",
  location: "Seoul",
  dates: "October 2026",
  fees: "Test fee",
  registrationUrl: "https://example.com/register",
  verifiedAt: "2026-09-01T00:00:00Z",
  closesAt: "2026-10-01T00:00:00Z",
};
test("the three document-supplied briefs retain exact ages, locations and fees without invented registration data", () => {
  const records = publishedCapstones(undefined, now);
  assert.deepEqual(
    records.map((item) => [
      item.partner,
      item.track,
      item.age,
      item.location,
      item.fees,
      item.workshopAddon,
    ]),
    [
      ["QualitaX", "Semester", "17-18", "Online", "₩ 300,000", "N/A"],
      ["The Seagull Films", "International", "14-18", "Hybrid", "₩ 690,000", "N/A"],
      ["Candon Youth Movement", "International", "14-18", "Hybrid", "₩ 650,000", "N/A"],
    ],
  );
  for (const item of records) {
    assert.equal(item.kind, "document-listing");
    assert.equal(item.registrationUrl, undefined);
    assert.equal(item.dates, undefined);
    assert.equal(item.closesAt, undefined);
  }
  assert.equal(filterCapstones(records, { query: "", track: "Semester", field: "" }).length, 1);
  assert.equal(
    filterCapstones(records, { query: "", track: "International", field: "" }).length,
    2,
  );
  assert.equal(
    filterCapstones(records, { query: "Filipino", track: "", field: "" })[0].partner,
    "Candon Youth Movement",
  );
});
test("publication rejects missing fields, unsafe registration links and closed or future verification", () => {
  assert.equal(isPublishableCapstone(fixture, now), true);
  for (const patch of [
    { brief: "" },
    { registrationUrl: "javascript:alert(1)" },
    { registrationUrl: "http://example.com" },
    { registrationUrl: "https://user:secret@example.com" },
    { verifiedAt: "invalid" },
    { verifiedAt: "2026-12-01" },
    { closesAt: "2026-09-17" },
    { track: "Unknown" },
    { deliverables: [] },
    { id: "../private" },
  ])
    assert.equal(
      isPublishableCapstone({ ...fixture, ...patch }, now),
      false,
      JSON.stringify(patch),
    );
});
test("public records deduplicate IDs and exclude invalid entries", () =>
  assert.deepEqual(
    publishedCapstones(
      [fixture, fixture, { ...fixture, id: "closed", closesAt: "2020-01-01" }],
      now,
    ),
    [fixture],
  ));
test("search combines words, case-insensitive skill and partner search, track and stable field ID", () => {
  const records = [
    fixture,
    { ...fixture, id: "test-summer", track: "Summer" as const, field: "Sustainability" as const },
  ];
  assert.equal(
    filterCapstones(records, {
      query: "  FILM  interviewing ",
      track: "Semester",
      field: "Media & Film Production",
    }).length,
    1,
  );
  assert.equal(filterCapstones(records, { query: "test partner", track: "", field: "" }).length, 2);
  assert.equal(
    filterCapstones(records, { query: "entertainment", track: "", field: "" }).length,
    1,
  );
  assert.equal(filterCapstones(records, { query: "missing", track: "", field: "" }).length, 0);
  assert.equal(filterCapstones(records, { query: "", track: "", field: "" }).length, 2);
  assert.equal(
    capstoneFieldLabel("Media & Film Production"),
    "Media, entertainment, and film production",
  );
});

test("localized search retains English matching and stable filter IDs", () => {
  const translate = (text: string) =>
    ({
      "Film a community story": "지역 이야기 영화",
      "Media, entertainment, and film production": "미디어 엔터테인먼트 영화 제작",
    })[text] ?? text;
  assert.equal(
    filterCapstones(
      [fixture],
      { query: "지역 영화", track: "Semester", field: "Media & Film Production" },
      translate,
    ).length,
    1,
  );
  assert.equal(
    filterCapstones([fixture], { query: "엔터테인먼트", track: "", field: "" }, translate).length,
    1,
  );
  assert.equal(
    filterCapstones([fixture], { query: "community", track: "", field: "" }, translate).length,
    1,
  );
});
