export const programs = [
  {
    age: "14–18",
    title: "Start-up Lab Camp",
    desc: "Build confidence, find your voice, and develop cross-cultural fluency by working on capstones, launching your very own Practice Enterprise and Start-Up concept.",
    focus: "Entrepreneurship & cross-cultural collaboration",
    status: "winter registration open soon",
    to: "/practicums/startup-lab-camp",
    image: "camp",
  },
  {
    age: "19–29",
    title: "Hanaro Leadership Project",
    desc: "Partner with NGOs and charities to drive meaningful change within your community. Lead campaigns and champion a cause that matters to you.",
    focus: "Leadership & social impact",
    status: "Voices in Motion open",
    to: "/practicums/hanaro",
    image: "hanaro",
  },
  {
    age: "19–29",
    title: "Mirae Industry Project",
    desc: "Work directly with businesses, grow a career portfolio you're proud of, and build the strategic leadership skills that set you apart.",
    focus: "Industry experience & career development",
    status: "Next cohort details coming soon",
    to: "/practicums/mirae-industry",
    image: "mirae",
  },
] as const;

export type ProgramAge = "all" | "14–18" | "19–29";
export function filterProgramsByAge(age: ProgramAge) {
  return programs.filter((program) => age === "all" || program.age === age);
}
