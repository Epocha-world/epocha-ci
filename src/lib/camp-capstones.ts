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
  kind?: "document-listing";
  age?: string;
  workshopAddon?: string;
  logo?: "qualitax" | "seagull" | "candon";
  fieldLabel?: string;
  track: (typeof capstoneTracks)[number];
  field: (typeof capstoneFields)[number];
  title: string;
  partner: string;
  summary: string;
  brief: string;
  deliverables?: string[];
  skills: string[];
  format: string;
  location: string;
  dates?: string;
  fees: string;
  registrationUrl?: string;
  verifiedAt?: string;
  closesAt?: string;
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
  const displayOnly = item.kind === "document-listing";
  const required = displayOnly
    ? requiredText.filter(
        (key) => !["dates", "registrationUrl", "verifiedAt", "closesAt"].includes(key),
      )
    : requiredText;
  if (required.some((key) => typeof item[key] !== "string" || !(item[key] as string).trim()))
    return false;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id as string)) return false;
  if (
    !(capstoneTracks as readonly unknown[]).includes(item.track) ||
    !(capstoneFields as readonly unknown[]).includes(item.field)
  )
    return false;
  if (
    (displayOnly ? ["skills"] : ["skills", "deliverables"]).some(
      (key) =>
        !Array.isArray(item[key]) ||
        !(item[key] as unknown[]).length ||
        !(item[key] as unknown[]).every((value) => typeof value === "string" && value.trim()),
    )
  )
    return false;
  if (item.kind === "document-listing") {
    // The user supplied display briefs but no application URL or intake dates.
    if (
      ["registrationUrl", "verifiedAt", "closesAt", "dates", "deliverables"].some(
        (key) => item[key] !== undefined,
      )
    )
      return false;
    return (
      ["age", "workshopAddon"].every(
        (key) => typeof item[key] === "string" && (item[key] as string).trim(),
      ) && ["qualitax", "seagull", "candon"].includes(item.logo as string)
    );
  }
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
 * Display briefs supplied in the 2026-09-21 document are explicitly marked document-listing.
 * They do not imply a verified registration endpoint, intake dates or remaining seats.
 */
const verifiedPublicRecords: readonly CampCapstone[] = [
  {
    id: "mapping-ai-risk",
    track: "Semester",
    field: "AI, Technology & Product Design",
    title: "Mapping the Risk: Classifying AI Systems Under the EU AI Act and Korea's AI Basic Act",
    partner: "QualitaX",
    logo: "qualitax",
    summary:
      "Take on the role of a junior policy researcher. Choose an industry (from medical, education, HR, finance, legal, film production, or automotive), identify companies deploying AI and classify their applications under the EU AI Act and Korea's newly enforced AI Basic Act…",
    skills: [
      "Research",
      "Critical thinking",
      "Presentation",
      "AI Governance",
      "AI Foundation & Ethics",
    ],
    age: "17-18",
    location: "Online",
    format: "Online",
    fees: "₩ 300,000",
    workshopAddon: "N/A",
    kind: "document-listing",
    brief:
      "Take on the role of a junior policy researcher. Choose an industry (from medical, education, HR, finance, legal, film production, or automotive), identify companies deploying AI and classify their applications under the EU AI Act and Korea's newly enforced AI Basic Act…",
  },
  {
    id: "bridging-cultures-through-film",
    track: "International",
    field: "Media & Film Production",
    fieldLabel: "Media, entertainment & film production",
    title: "Staying Connected: Bridging Cultures Through Film in the Age of AI",
    partner: "The Seagull Films",
    logo: "seagull",
    summary:
      "Explore film production as a way to practice bridging cultures and fostering genuine dialogue between young people. Frame filmmaking as a tool for empathy and peacebuilding helping youth mobilize around causes as AI reshapes how we connect and communicate…",
    skills: [
      "Storytelling",
      "Critical thinking",
      "Presentation",
      "AI Governance",
      "Intercultural dialogue",
    ],
    age: "14-18",
    location: "Hybrid",
    format: "Hybrid",
    fees: "₩ 690,000",
    workshopAddon: "N/A",
    kind: "document-listing",
    brief:
      "Explore film production as a way to practice bridging cultures and fostering genuine dialogue between young people. Frame filmmaking as a tool for empathy and peacebuilding helping youth mobilize around causes as AI reshapes how we connect and communicate…",
  },
  {
    id: "filipino-heritage-book-launch",
    track: "International",
    field: "Arts & Cultural Heritage",
    title: "Organizing a Book Launch: Celebrating Filipino Heritage",
    partner: "Candon Youth Movement",
    logo: "candon",
    summary:
      "Step in as an event organizer and plan a book launch to celebrates Filipino heritage. You will decide how to promote the event, design the guest experience, and add cultural touches (like Filipino music, dance, art, or food) that bring the books’ stories to life…",
    skills: [
      "Event management",
      "Program design",
      "Intercultural dialogue",
      "Marketing",
      "Strategic communication",
    ],
    age: "14-18",
    location: "Hybrid",
    format: "Hybrid",
    fees: "₩ 650,000",
    workshopAddon: "N/A",
    kind: "document-listing",
    brief:
      "Step in as an event organizer and plan a book launch to celebrates Filipino heritage. You will decide how to promote the event, design the guest experience, and add cultural touches (like Filipino music, dance, art, or food) that bring the books’ stories to life…",
  },
];
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
          item.fieldLabel ?? capstoneFieldLabel(item.field),
          ...item.skills,
        ]
          .flatMap((text) => [text, translate(text)])
          .join(" ")
          .toLocaleLowerCase()
          .includes(word),
      ),
  );
}
