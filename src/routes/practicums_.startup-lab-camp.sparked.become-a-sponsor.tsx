import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/sparked/become-a-sponsor")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Become a sponsor — Sparked! — EPOCHA",
      description: "Contact EPOCHA to discuss Sparked! sponsorship.",
      path: "/practicums/startup-lab-camp/sparked/become-a-sponsor",
    }),
  component: SponsorPage,
});

function SponsorPage() {
  const { t } = useI18n();
  return (
    <section className="bg-background text-foreground">
      <div className="container-x py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {t("Sparked!")}
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">
          {t("Become a sponsor")}
        </h1>
        <div className="mt-10 max-w-3xl rounded-2xl bg-background p-7 text-foreground md:p-10">
          <h2 className="text-2xl font-bold">{t("Start a conversation with EPOCHA.")}</h2>
          <p className="mt-5 leading-relaxed">
            {t(
              "Partner with us as a company: open a capstone project, host a trainee on a micro placement, or arrange a corporate visit.",
            )}
          </p>
          <Link
            to="/connect"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {t("Discuss sponsorship")}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
