import { createFileRoute } from "@tanstack/react-router";
import { LiveOpportunities } from "@/components/LiveOpportunities";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/practicum/live-opportunities")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Open capstones — Start-up Lab Camp — EPOCHA",
      description: "Browse Start-up Lab Camp capstones by leadership track and field.",
      path: "/practicums/startup-lab-camp/practicum/live-opportunities",
    }),
  component: LiveOpportunities,
});
