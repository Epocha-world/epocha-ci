import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/practicums_/startup-lab-camp/practicum/")({
  beforeLoad: ({ location }) => {
    const to =
      location.hash === "live-opportunities"
        ? "/practicums/startup-lab-camp/practicum/live-opportunities"
        : location.hash === "coaching-program"
          ? "/practicums/startup-lab-camp/practicum/coaching-program"
          : "/practicums/startup-lab-camp/practicum/leadership-tracks";
    throw redirect({ to, replace: true });
  },
});
