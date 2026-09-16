export const capstoneTracks = ["Semester", "International", "Summer"] as const;

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

export type CampCapstone = {
  id: string;
  number: string;
  track: (typeof capstoneTracks)[number];
  field: (typeof capstoneFields)[number];
  category: string;
  title: string;
  partner: string;
  summary: string;
  skills: string[];
  format: string;
  location: string;
};

// Public card copy supplied in the Start-up Lab Camp reference document (image 27).
export const campCapstones: CampCapstone[] = [
  {
    id: "lower-waste-event-model",
    number: "01",
    track: "Summer",
    field: "Sustainability",
    category: "Sustainability",
    title: "Design a lower-waste event model",
    partner: "Community Events Partner",
    summary:
      "Research event waste, identify practical reductions, and propose a model the partner can test at its next public programme.",
    skills: ["Research", "Service design", "Presentation"],
    format: "In person",
    location: "Seoul",
  },
  {
    id: "youth-audience-campaign",
    number: "02",
    track: "Semester",
    field: "Marketing & Brand Communications",
    category: "Marketing",
    title: "Build a youth audience campaign",
    partner: "Creative Industry Partner",
    summary:
      "Develop a focused campaign concept that helps an established organisation communicate more clearly with young audiences.",
    skills: ["Brand strategy", "Content", "Audience insight"],
    format: "Online",
    location: "Global",
  },
  {
    id: "accessible-customer-journey",
    number: "03",
    track: "International",
    field: "AI, Technology & Product Design",
    category: "Technology",
    title: "Map an accessible customer journey",
    partner: "Digital Services Partner",
    summary:
      "Review a digital service through an accessibility lens and present a prioritised set of experience improvements.",
    skills: ["UX research", "Accessibility", "Prototyping"],
    format: "Hybrid",
    location: "Seoul / Online",
  },
  {
    id: "neighbourhood-food-concept",
    number: "04",
    track: "Summer",
    field: "Hospitality & Events",
    category: "Hospitality",
    title: "Create a neighbourhood food concept",
    partner: "Hospitality Partner",
    summary:
      "Explore local customer needs and shape a viable food concept, from value proposition through to a simple launch plan.",
    skills: ["Customer discovery", "Finance", "Pitching"],
    format: "In person",
    location: "Seoul",
  },
  {
    id: "volunteer-welcome-journey",
    number: "05",
    track: "Semester",
    field: "Social Impact & NGO Work",
    category: "Social impact",
    title: "Improve a volunteer welcome journey",
    partner: "Social Impact Partner",
    summary:
      "Find the friction in a volunteer's first month and design a clearer, more welcoming onboarding experience.",
    skills: ["Interviewing", "Operations", "Communication"],
    format: "Online",
    location: "Global",
  },
  {
    id: "ai-ready-team-workflow",
    number: "06",
    track: "International",
    field: "AI, Technology & Product Design",
    category: "Technology",
    title: "Prototype an AI-ready team workflow",
    partner: "Future of Work Partner",
    summary:
      "Identify a repetitive team task and prototype a responsible AI-assisted workflow with clear human checkpoints.",
    skills: ["Process mapping", "AI literacy", "Testing"],
    format: "Hybrid",
    location: "Seoul / Online",
  },
];

export function filterCapstones({
  query = "",
  track = "all",
  field = "all",
}: { query?: string; track?: string; field?: string } = {}) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return campCapstones.filter((capstone) => {
    const searchText = [capstone.title, capstone.partner, ...capstone.skills]
      .join(" ")
      .toLocaleLowerCase();
    return (
      (track === "all" || capstone.track === track) &&
      (field === "all" || capstone.field === field) &&
      terms.every((term) => searchText.includes(term))
    );
  });
}
