import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import launchEventBackground from "@/assets/launch-event-background.webp";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/events_/launch-event")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Launch Event — EPOCHA",
      description: "EPOCHA Launch Event. We are live, with more details coming soon.",
      path: "/events/launch-event",
      image: launchEventBackground,
      socialDescription: "We are live. More Launch Event details are coming soon.",
    }),
  component: LaunchEventPage,
});

function LaunchEventPage() {
  const { t } = useI18n();
  return (
    <section data-testid="launch-event-page" className="container-x py-16 md:py-24">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {t("Launch Event")}
        </p>
        <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          {t("We are live!")}
        </h1>
        <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{t("Coming soon...")}</p>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-border">
        <img
          src={launchEventBackground}
          alt={t("Pastel megaphone sending a rainbow through a field of stars and confetti")}
          width={1744}
          height={902}
          fetchPriority="high"
          className="aspect-[1744/902] w-full object-cover"
        />
      </div>

      <Link
        to="/events"
        className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-3 font-medium text-foreground transition-colors hover:bg-muted"
      >
        <ArrowLeft aria-hidden="true" className="h-[1em] w-[1em]" strokeWidth={1.75} />
        {t("Back to events")}
      </Link>
    </section>
  );
}
