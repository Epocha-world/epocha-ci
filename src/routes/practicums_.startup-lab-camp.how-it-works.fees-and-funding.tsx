import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, UsersRound, Wallet } from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/how-it-works/fees-and-funding")(
  {
    head: ({ match }) =>
      createSeoHead({
        locale: match.context.preferences.locale,
        title: "Fees and funding — Start-up Lab Camp — EPOCHA",
        description:
          "Individual and institutional registration fees, included coaching and funding support for Start-up Lab Camp.",
        path: "/practicums/startup-lab-camp/how-it-works/fees-and-funding",
      }),
    component: FeesAndFundingPage,
  },
);

const included = [
  "Coaching program: AI in the workplace, EPOCH awareness, leadership and intercultural dialogues",
  "All sessions with EPOCHA mentors",
  "Certificate of achievement",
  "Refreshment and/or lunch on in-person camp days",
  "When applicable: corporate visit, micro placement, and Practice Enterprise (Stage 2) materials and training platform access",
];

function FeesAndFundingPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-background text-foreground">
        <div className="container-x py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {t("Fees and funding")}
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] md:text-7xl">
            {t("What a place costs.")}
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-relaxed md:text-xl">
            {t(
              "Fees cover the full practicum, including training, mentoring and certification. Individual and institutional registrations are both available.",
            )}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-border bg-card p-7 md:p-9">
              <div className="inline-flex rounded-2xl bg-lime p-3 text-ink">
                <UsersRound aria-hidden="true" className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">{t("Individual registration")}</h2>
              <p className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                {t("From ₩300,000")}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {t(
                  "Parents or guardians can register a teen directly. Payment secures the place for the chosen cohort.",
                )}
              </p>
            </article>
            <article className="rounded-[2rem] border border-border bg-card p-7 md:p-9">
              <div className="inline-flex rounded-2xl bg-lime p-3 text-ink">
                <Building2 aria-hidden="true" className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">{t("Institutional registration")}</h2>
              <p className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                {t("On request")}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {t(
                  "Schools running a dedicated cohort receive a tailored quote based on group size, format and scheduling.",
                )}
              </p>
            </article>
          </div>
          <div className="mt-7 rounded-[2rem] border border-border p-7 md:p-9">
            <h2 className="flex items-center gap-3 text-xl font-bold">
              <Wallet aria-hidden="true" className="h-5 w-5 text-muted-foreground" />
              {t("What’s included")}
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed marker:text-muted-foreground">
              {included.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="surface-inverse text-cream">
        <div className="container-x py-16 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">{t("Funding and support")}</h2>
          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-cream">
            {t(
              "A limited number of partial bursaries is available each intake for trainees who would otherwise be unable to take part. Schools and sponsors can also fund places for a group. Get in touch to discuss options before you register.",
            )}
          </p>
          <Link
            to="/connect"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 font-semibold text-ink transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {t("Ask about funding")}
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
      </section>
      <section className="bg-background text-foreground">
        <div className="container-x py-16 md:py-20">
          <div className="max-w-3xl rounded-[2rem] bg-lime p-8 md:p-12 text-ink">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              {t("Want to bring a capstone to your campus?")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed md:text-xl">
              {t(
                "Sponsor a cohort’s registration and give your students a real practicum, matched to an industry partner.",
              )}
            </p>
            <a
              href="https://forms.gle/ZcU4C9MGLRqP4xc48"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full surface-inverse px-7 py-4 font-semibold text-cream transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {t("Fund a capstone")}
            </a>
            <p className="mt-3 text-sm">{t("External form · English")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
