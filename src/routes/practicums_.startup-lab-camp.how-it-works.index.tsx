import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/practicums_/startup-lab-camp/how-it-works/")({
  beforeLoad: () => {
    throw redirect({ to: "/practicums/startup-lab-camp/how-it-works/admissions", replace: true });
  },
});
