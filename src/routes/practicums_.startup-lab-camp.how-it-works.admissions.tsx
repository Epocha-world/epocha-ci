import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/how-it-works/admissions")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Admissions — Start-up Lab Camp — EPOCHA",
      description:
        "Find your capstone, choose a leadership track and register for EPOCHA Start-up Lab Camp.",
      path: "/practicums/startup-lab-camp/how-it-works/admissions",
    }),
  component: AdmissionsPage,
});

const steps = [
  { title: "Browse Live Opportunities", description: "Explore all open capstones in one place." },
  {
    title: "Pick Your Capstone",
    description: "Click into any listing to see everything you need to choose the right fit.",
  },
  {
    title: "Register & Reserve Your Spot",
    description: "Fill out the form and complete payment to lock in your place.",
  },
];

function AdmissionsPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="relative overflow-hidden surface-inverse text-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-lime/25 to-transparent"
        />
        <div className="container-x relative py-16 md:py-20">
          <p className="inline-flex rounded-full border border-cream/20 bg-white/10 px-5 py-2 text-sm font-semibold text-lime">
            {t("Admissions now open")}
          </p>
          <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[1.08] md:text-7xl">
            {t("Find your capstone. Start building your career.")}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-cream md:text-xl">
            {t(
              "Spaces for 2027 are filling on a first-come basis. Browse open capstones and register while your track of choice still has room.",
            )}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/practicums/startup-lab-camp/practicum/live-opportunities"
              className="inline-flex items-center justify-center rounded-full bg-lime px-7 py-4 font-semibold text-ink transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {t("Browse Capstones")}
            </Link>
            <a
              href="#admissions-steps"
              className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-4 font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {t("See how it works")}
            </a>
          </div>
        </div>
      </section>

      <section id="admissions-steps" className="scroll-mt-36 bg-background text-foreground">
        <div className="container-x py-16 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">{t("Admissions")}</h2>
          <ol className="mt-9 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[2rem] border border-border bg-card p-7 md:p-8"
              >
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {t("Step")} {index + 1}
                </p>
                <h3 className="mt-5 text-xl font-bold">{t(step.title)}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t(step.description)}</p>
              </li>
            ))}
          </ol>
          <p className="mt-9 max-w-4xl text-lg leading-relaxed">
            {t(
              "Capstones run on our official calendar, with term dates listed below. Registration cost varies by leadership track, plus optional add-ons if you want to customize your experience.",
            )}
          </p>
          <Link
            to="/practicums/startup-lab-camp/how-it-works/fees-and-funding"
            className="mt-6 inline-flex items-center gap-2 rounded-full surface-inverse px-6 py-3 font-semibold text-lime transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {t("Fees and funding")}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="surface-inverse text-cream">
        <div className="container-x py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
            {t("EPOCHA Calendar")}
          </p>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">{t("2026–27 term dates")}</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-cream">
            {t(
              "We operate on a 20-session-per-term basis from September to June. Sessions run according to the calendar dates below.",
            )}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { term: "Fall", dates: "Tuesday 1 September to Friday 18 December" },
              { term: "Winter", dates: "Monday 4 January to Friday 26 March" },
              { term: "Spring", dates: "Monday 5 April to Friday 25 June" },
            ].map((term) => (
              <div key={term.term} className="rounded-[2rem] border border-cream/20 bg-white/5 p-7">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-lime">
                  {t(term.term)}
                </h3>
                <p className="mt-4 leading-relaxed text-cream">{t(term.dates)}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-12 text-2xl font-bold">{t("Summer track")}</h3>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {[
              { term: "Summer cohort A", dates: "June 28 to July 23" },
              { term: "Summer cohort B", dates: "July 26 to August 20" },
            ].map((term) => (
              <div key={term.term} className="rounded-[2rem] border border-cream/20 bg-white/5 p-7">
                <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-lime">
                  {t(term.term)}
                </h4>
                <p className="mt-4 leading-relaxed text-cream">{t(term.dates)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background text-foreground">
        <div className="container-x py-16 md:py-20">
          <div className="rounded-[2rem] bg-lime px-6 py-14 text-center md:px-12 md:py-20 text-ink">
            <h2 className="text-3xl font-bold md:text-4xl">{t("Ready to find your capstone?")}</h2>
            <p className="mt-6 text-lg leading-relaxed">
              {t(
                "Open spaces are shown live on every listing — the sooner you look, the more choice you’ll have.",
              )}
            </p>
            <Link
              to="/practicums/startup-lab-camp/practicum/live-opportunities"
              className="mt-9 inline-flex items-center justify-center rounded-full surface-inverse px-7 py-4 font-semibold text-cream transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {t("Browse Capstones")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
