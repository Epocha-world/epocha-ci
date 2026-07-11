import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import launchEventBackground from "@/assets/launch-event-background.webp";

export const Route = createFileRoute("/events_/launch-event")({
  head: () => ({
    meta: [
      { title: "Launch Event — EPOCHA" },
      {
        name: "description",
        content: "EPOCHA Launch Event. We are live, with more details coming soon.",
      },
      { property: "og:title", content: "Launch Event — EPOCHA" },
      {
        property: "og:description",
        content: "We are live. More Launch Event details are coming soon.",
      },
    ],
  }),
  component: LaunchEventPage,
});

function LaunchEventPage() {
  return (
    <section
      data-testid="launch-event-page"
      className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[#fff8eb] lg:aspect-[1744/902] lg:min-h-0"
    >
      <img
        src={launchEventBackground}
        alt=""
        aria-hidden="true"
        width={1744}
        height={902}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover lg:object-fill"
      />

      <div className="absolute inset-x-4 top-[24%] text-center text-black sm:top-[26%]">
        <h1 className="font-sans text-[clamp(3.5rem,7.35vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.055em]">
          We are live!
        </h1>
        <p className="mt-[clamp(1.5rem,3vw,3.125rem)] font-sans text-[clamp(1.35rem,2.2vw,2.25rem)] leading-none">
          Coming soon...
        </p>
      </div>

      <Link
        to="/events"
        className="absolute bottom-[10%] left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap font-sans text-base text-[#373737] transition-colors hover:text-black focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-xl"
      >
        <ArrowLeft aria-hidden="true" className="h-[1em] w-[1em]" strokeWidth={1.75} />
        Back to events
      </Link>
    </section>
  );
}
