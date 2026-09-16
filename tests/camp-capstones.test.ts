import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, test } from "node:test";
import { campCapstones, capstoneFields, filterCapstones } from "../src/lib/camp-capstones.ts";
import { getCapstoneResponse } from "../src/lib/camp-capstones.server.ts";
import { handleCampAuth } from "../src/lib/camp-auth.server.ts";

const folder = mkdtempSync(join(tmpdir(), "epocha-capstones-"));
process.env.CAMP_AUTH_DB_PATH = join(folder, "accounts.sqlite");
process.env.CAMP_AUTH_ORIGIN = "https://camp.example";
after(() => rmSync(folder, { recursive: true, force: true }));

test("all six supplied public cards appear without filters with complete fields", () => {
  assert.equal(filterCapstones().length, 6);
  assert.equal(capstoneFields.length, 11);
  assert.deepEqual(
    campCapstones.map((item) => item.number),
    ["01", "02", "03", "04", "05", "06"],
  );
  for (const item of campCapstones) {
    assert.equal(item.skills.length, 3);
    assert.ok(item.partner && item.summary && item.title);
    if (item.track === "Semester")
      assert.deepEqual([item.format, item.location], ["Online", "Global"]);
    if (item.track === "International")
      assert.deepEqual([item.format, item.location], ["Hybrid", "Seoul / Online"]);
  }
});

test("search handles title, skill, partner, case and whitespace", () => {
  assert.deepEqual(
    filterCapstones({ query: "  WASTE  " }).map((item) => item.number),
    ["01"],
  );
  assert.deepEqual(
    filterCapstones({ query: "audience insight" }).map((item) => item.number),
    ["02"],
  );
  assert.deepEqual(
    filterCapstones({ query: "Digital Services" }).map((item) => item.number),
    ["03"],
  );
  assert.deepEqual(
    filterCapstones({ query: "process workflow" }).map((item) => item.number),
    ["06"],
  );
  assert.equal(filterCapstones({ query: "  " }).length, 6);
});

test("track, exact field and search combine and produce real empty states", () => {
  assert.deepEqual(
    filterCapstones({ track: "Summer" }).map((item) => item.number),
    ["01", "04"],
  );
  assert.deepEqual(
    filterCapstones({
      track: "International",
      field: "AI, Technology & Product Design",
      query: "accessibility",
    }).map((item) => item.number),
    ["03"],
  );
  assert.deepEqual(
    filterCapstones({ track: "Semester", field: "Social Impact & NGO Work" }).map(
      (item) => item.number,
    ),
    ["05"],
  );
  assert.equal(filterCapstones({ track: "Semester", field: "Hospitality & Events" }).length, 0);
  assert.equal(filterCapstones({ field: "Law & Policy" }).length, 0);
  assert.equal(filterCapstones({ query: "no-such-capstone" }).length, 0);
});

test("detail API rejects anonymous and forged sessions without exposing brief or existence", async () => {
  for (const id of [campCapstones[0].id, "unknown-capstone"]) {
    for (const cookie of ["", "camp_session=forged"]) {
      const response = getCapstoneResponse(
        new Request("https://camp.example/api/camp-capstones/" + id, { headers: { cookie } }),
        id,
      );
      assert.equal(response.status, 401);
      assert.equal(response.headers.get("cache-control"), "private, no-store");
      assert.equal(response.headers.get("vary"), "Cookie");
      assert.deepEqual(await response.json(), { error: "Sign in to view capstone details." });
    }
  }
});

test("free account accesses supplied brief; logout immediately revokes API access", async () => {
  const registration = await handleCampAuth(
    new Request("https://camp.example/api/camp-auth", {
      method: "POST",
      headers: { Origin: "https://camp.example", "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "register",
        email: "capstone-reader@example.test",
        password: "Capstone test password 123!",
      }),
    }),
  );
  assert.equal(registration.status, 200);
  const cookie = registration.headers.get("set-cookie")!.split(";")[0];
  const request = new Request("https://camp.example/api/camp-capstones/" + campCapstones[0].id, {
    headers: { cookie },
  });
  const response = getCapstoneResponse(request, campCapstones[0].id);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "private, no-store");
  const body = await response.json();
  assert.deepEqual(body.capstone, campCapstones[0]);
  assert.equal(body.applicationUrl, "https://forms.gle/r3r36oZY15A2qUsL9");
  assert.equal(getCapstoneResponse(request, "missing").status, 404);
  await handleCampAuth(
    new Request("https://camp.example/api/camp-auth", {
      method: "POST",
      headers: { Origin: "https://camp.example", "Content-Type": "application/json", cookie },
      body: JSON.stringify({ action: "logout" }),
    }),
  );
  assert.equal(getCapstoneResponse(request, campCapstones[0].id).status, 401);
});
