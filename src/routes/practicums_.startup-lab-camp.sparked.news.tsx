import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/sparked/news")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "News — Sparked! — EPOCHA",
      description: "News and updates from Sparked! at EPOCHA.",
      path: "/practicums/startup-lab-camp/sparked/news",
    }),
  component: SparkedNewsPage,
});

function SparkedNewsPage() {
  const { t } = useI18n();
  return (
    <section className="bg-background text-foreground">
      <div className="container-x py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {t("Sparked!")}
        </p>
        <h1 className="mt-5 text-5xl font-bold leading-[1.05] md:text-7xl">{t("News")}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-foreground/80">
          {t(
            "Stories and updates from Sparked — talks, visits, placements and the partners making them happen.",
          )}
        </p>
        <div className="mt-10 max-w-3xl rounded-2xl border border-border p-7 md:p-10">
          <h2 className="text-2xl font-bold">{t("No news published yet.")}</h2>
          <p className="mt-5 leading-relaxed text-foreground/75">
            {t(
              "Sparked! updates will appear here. For enquiries, get in touch with the EPOCHA team.",
            )}
          </p>
          <Link
            to="/connect"
            className="mt-7 inline-flex items-center gap-2 font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {t("Contact EPOCHA")}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
