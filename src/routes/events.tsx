import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import launchEventBackground from "@/assets/launch-event-background.webp";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/events")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Events — EPOCHA",
      description: "Discover upcoming EPOCHA events and announcements.",
      path: "/events",
      image: launchEventBackground,
    }),
  component: EventsPage,
});

function EventsPage() {
  const { t } = useI18n();
  return (
    <section className="container-x py-20 md:py-24">
      <h1 className="text-5xl font-bold leading-none md:text-7xl">{t("Events")}</h1>

      <Link
        to="/events/launch-event"
        className="group mt-12 grid overflow-hidden rounded-3xl border border-border bg-card transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:grid-cols-[1.35fr_1fr]"
      >
        <div className="aspect-[16/9] overflow-hidden md:aspect-auto">
          <img
            src={launchEventBackground}
            alt={t("Pastel megaphone sending a rainbow through a field of stars and confetti")}
            width={1744}
            height={902}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/55">
            {t("Coming soon")}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">{t("Launch Event")}</h2>
          <ArrowRight
            aria-hidden="true"
            className="mt-8 h-6 w-6 transition-transform group-hover:translate-x-1"
          />
        </div>
      </Link>
    </section>
  );
}
