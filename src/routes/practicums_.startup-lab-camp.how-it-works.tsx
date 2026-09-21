import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { createSeoHead } from "@/lib/seo";
import { CampFees } from "@/components/camp/CampFees";
import { CampFaq } from "@/components/camp/CampFaq";
export const Route = createFileRoute("/practicums_/startup-lab-camp/how-it-works")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "How it works — Start-up Lab Camp — EPOCHA",
      description: "Calendar, admissions, fees and funding for Start-up Lab Camp.",
      path: "/practicums/startup-lab-camp/how-it-works",
    }),
  component: HowItWorks,
});
const terms = [
  { term: "Fall", dates: "Tuesday 1 September to Friday 18 December" },
  { term: "Winter", dates: "Monday 4 January to Friday 26 March" },
  { term: "Spring", dates: "Monday 5 April to Friday 25 June" },
  { term: "Summer", dates: "Monday 28 June to Friday 20 August" },
];
const steps = [
  {
    title: "Browse capstones",
    description:
      "Explore open capstones. Registration fees depend on your selected tracks and any custom add-ons.",
  },
  {
    title: "Pick your capstone",
    description:
      "Click on any listing to see everything you need to know. Find the right fit and register to reserve your spot.",
  },
  {
    title: "Secure your spot.",
    description:
      "Finalize your payment to confirm your registration and secure your spot. Funding options may be available.",
  },
];
function HowItWorks() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-background text-foreground">
        <div className="container-x py-16 md:py-24">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            {t("How it works")}
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            {t("Find your capstone. Start building your career.")}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-foreground/80">
            {t(
              "Explore leadership tracks, review the calendar and find the capstone that fits your goals.",
            )}
          </p>
          <Link
            to="/practicums/startup-lab-camp/open-capstones"
            className="mt-9 inline-flex rounded-full bg-lime px-7 py-4 font-semibold text-ink"
          >
            {t("Browse capstones")}
          </Link>
        </div>
      </section>
      <section className="bg-background text-foreground border-t border-border">
        <div className="container-x py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            {t("EPOCHA Calendar")}
          </p>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">{t("2026–27 term dates")}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            {t("Sessions run according to the calendar dates below.")}
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {terms.map((term) => (
              <article key={term.term} className="rounded-3xl border border-border bg-card p-7">
                <h3 className="text-sm font-bold uppercase tracking-widest">{t(term.term)}</h3>
                <p className="mt-4 leading-relaxed">{t(term.dates)}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {t(
              "Summer dates are provisional. Confirm the year, schedule and fees with EPOCHA before registration.",
            )}
          </p>
        </div>
      </section>
      <section id="admissions" className="scroll-mt-36 bg-ink text-cream">
        <div className="container-x py-20">
          <h2 className="text-3xl font-bold md:text-4xl">{t("Admissions")}</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-3xl border border-cream/20 bg-white/5 p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-lime">
                  {t("Step")} {index + 1}
                </p>
                <h3 className="mt-5 text-2xl font-bold">{t(step.title)}</h3>
                <p className="mt-4 leading-relaxed text-cream/85">{t(step.description)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CampFees />
      <CampFaq />
    </>
  );
}
