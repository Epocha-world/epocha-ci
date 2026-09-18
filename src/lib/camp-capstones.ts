export const capstoneTracks = ["Semester", "International", "Summer"] as const;
// Preserve existing field IDs; labels may evolve independently.
export const capstoneFields = [
  "Business & Retail Strategy",
  "Media & Film Production",
  "AI, Technology & Product Design",
  "Marketing & Brand Communications",
  "Social Impact & NGO Work",
  "Sustainability",
  "Hospitality & Events",
  "Finance & Entrepreneurship",
  "Arts & Cultural Heritage",
  "Health & Wellness Innovation",
  "Law & Policy",
] as const;
export const capstoneFieldLabel = (field: string) =>
  field === "Media & Film Production" ? "Media, entertainment, and film production" : field;
export type CampCapstone = {
  id: string;
  track: (typeof capstoneTracks)[number];
  field: (typeof capstoneFields)[number];
  title: string;
  partner: string;
  summary: string;
  brief: string;
  deliverables: string[];
  skills: string[];
  format: string;
  location: string;
  dates: string;
  fees: string;
  registrationUrl: string;
  verifiedAt: string;
  closesAt: string;
};
const requiredText = [
  "id",
  "title",
  "partner",
  "summary",
  "brief",
  "format",
  "location",
  "dates",
  "fees",
  "registrationUrl",
  "verifiedAt",
  "closesAt",
] as const;
export function isPublishableCapstone(value: unknown, now = Date.now()): value is CampCapstone {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  if (requiredText.some((key) => typeof item[key] !== "string" || !(item[key] as string).trim()))
    return false;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id as string)) return false;
  if (
    !(capstoneTracks as readonly unknown[]).includes(item.track) ||
    !(capstoneFields as readonly unknown[]).includes(item.field)
  )
    return false;
  if (
    ["skills", "deliverables"].some(
      (key) =>
        !Array.isArray(item[key]) ||
        !(item[key] as unknown[]).length ||
        !(item[key] as unknown[]).every((value) => typeof value === "string" && value.trim()),
    )
  )
    return false;
  const verified = Date.parse(item.verifiedAt as string),
    closes = Date.parse(item.closesAt as string);
  if (
    !Number.isFinite(verified) ||
    !Number.isFinite(closes) ||
    verified > now ||
    closes <= now ||
    closes <= verified
  )
    return false;
  try {
    const url = new URL(item.registrationUrl as string);
    if (url.protocol !== "https:" || url.username || url.password) return false;
  } catch {
    return false;
  }
  return true;
}
/** Operator-maintained public records only. Add records after verifying the brief,
 * partner, dates, fee and HTTPS registration destination. No demo opportunities.
 * This static catalogue does not claim live availability or remaining seat counts.
 */
const verifiedPublicRecords: readonly CampCapstone[] = [];
export function publishedCapstones(
  records: readonly unknown[] = verifiedPublicRecords,
  now = Date.now(),
): CampCapstone[] {
  const seen = new Set<string>();
  return records.filter((record): record is CampCapstone => {
    if (!isPublishableCapstone(record, now) || seen.has(record.id)) return false;
    seen.add(record.id);
    return true;
  });
}
export type CapstoneFilters = { query: string; track: string; field: string };
export function filterCapstones(
  records: readonly CampCapstone[],
  { query, track, field }: CapstoneFilters,
  translate: (text: string) => string = (text) => text,
): CampCapstone[] {
  const words = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  return records.filter(
    (item) =>
      (!track || item.track === track) &&
      (!field || item.field === field) &&
      words.every((word) =>
        [
          item.title,
          item.partner,
          item.summary,
          item.location,
          item.track,
          capstoneFieldLabel(item.field),
          ...item.skills,
        ]
          .flatMap((text) => [text, translate(text)])
          .join(" ")
          .toLocaleLowerCase()
          .includes(word),
      ),
  );
}
