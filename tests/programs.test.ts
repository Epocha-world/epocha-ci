import test from "node:test";
import assert from "node:assert/strict";
import { filterProgramsByAge, programs } from "../src/lib/programs.ts";

test("teen visitors see only the age-appropriate camp", () => {
  assert.deepEqual(
    filterProgramsByAge("14–18").map((p) => p.to),
    ["/practicums/startup-lab-camp"],
  );
});

test("young adult visitors see both community and industry options", () => {
  assert.deepEqual(
    filterProgramsByAge("19–29").map((p) => p.to),
    ["/practicums/hanaro", "/practicums/mirae-industry"],
  );
});

test("reset restores all practicums without modifying the shared source", () => {
  filterProgramsByAge("14–18");
  assert.equal(filterProgramsByAge("all").length, 3);
  assert.equal(programs.length, 3);
  assert.equal(new Set(programs.map((p) => p.to)).size, 3);
});
