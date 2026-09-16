import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/sparked/volunteer-with-us")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Volunteer with us — Sparked! — EPOCHA",
      description: "Contact EPOCHA to share your interest in volunteering with Sparked!",
      path: "/practicums/startup-lab-camp/sparked/volunteer-with-us",
    }),
  component: VolunteerPage,
});

function VolunteerPage() {
  const { t } = useI18n();
  return (
    <section className="bg-background text-foreground">
      <div className="container-x py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {t("Sparked!")}
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">
          {t("Volunteer with us")}
        </h1>
        <div className="mt-10 max-w-3xl rounded-2xl bg-background p-7 text-foreground md:p-10">
          <h2 className="text-2xl font-bold">{t("Tell us how you’d like to get involved.")}</h2>
          <p className="mt-5 leading-relaxed">
            {t(
              "Give a career talk or become a mentor and share your professional journey with the next generation.",
            )}
          </p>
          <Link
            to="/connect"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {t("Get in touch about volunteering")}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
