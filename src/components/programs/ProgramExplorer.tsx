import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import leadershipCamp from "@/assets/practicum-leadership-camp.webp";
import advisoryBoard from "@/assets/practicum-advisory-board.webp";
import hanaro from "@/assets/practicum-hanaro.webp";
import { useI18n } from "@/i18n";

const programs = [
  {
    age: "14–18",
    title: "Start-up Lab Camp",
    desc: "Build confidence, find your voice, and develop cross-cultural fluency by launching your very own Practice Enterprise, a trainee-run company that operates like a real business.",
    focus: "Entrepreneurship & cross-cultural collaboration",
    outcome: "A trainee-run Practice Enterprise",
    status: "Explore camp details",
    to: "/practicums/startup-lab-camp",
    image: leadershipCamp,
  },
  {
    age: "19–29",
    title: "Hanaro Leadership Project",
    desc: "Partner with NGOs and charities to drive meaningful change within your community. Lead campaigns and champion a cause that matters to you.",
    focus: "Leadership & social impact",
    outcome: "A community capstone project",
    status: "Explore Voices in Motion",
    to: "/practicums/hanaro",
    image: hanaro,
  },
  {
    age: "19–29",
    title: "Mirae Industry Project",
    desc: "Work directly with businesses, grow a career portfolio you're proud of, and build the strategic leadership skills that set you apart.",
    focus: "Industry experience & career development",
    outcome: "A career portfolio",
    status: "Next cohort details coming soon",
    to: "/practicums/mirae-industry",
    image: advisoryBoard,
  },
] as const;

export function ProgramExplorer() {
  const { t } = useI18n();
  const [age, setAge] = useState("all");
  const visiblePrograms = programs.filter((program) => age === "all" || program.age === age);
  return (
    <section id="choose-your-practicum" className="bg-background text-foreground scroll-mt-28">
      <div className="container-x pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              {t("Learn by doing")}
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight leading-[1.05] md:text-7xl">
              {t("Your next chapter starts with experience.")}
            </h1>
          </div>
          <div className="max-w-md md:justify-self-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t(
                "Real projects. Personal coaching. A clearer sense of where you want to go. Find the practicum that fits your next step.",
              )}
            </p>
            <a
              href="#training-concept"
              className="mt-6 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
            >
              {t("Explore our learning approach")}
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
          <div
            role="group"
            aria-label={t("Filter programs by age")}
            className="flex flex-wrap gap-2"
          >
            {[
              { value: "all", label: "All programs" },
              { value: "14–18", label: "Ages 14–18" },
              { value: "19–29", label: "Ages 19–29" },
            ].map((filter) => (
              <button
                type="button"
                key={filter.value}
                aria-pressed={age === filter.value}
                onClick={() => setAge(filter.value)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${age === filter.value ? "border-foreground bg-foreground text-background" : "border-border bg-background text-foreground hover:bg-muted"}`}
              >
                {t(filter.label)}
              </button>
            ))}
          </div>
          <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
            {t("Programs found")}: {visiblePrograms.length}
          </p>
        </div>
        <div className="divide-y divide-border">
          {visiblePrograms.map((program) => (
            <article
              key={program.title}
              className="grid gap-6 py-8 md:grid-cols-[0.8fr_1.3fr] lg:grid-cols-[0.8fr_1.1fr_0.7fr] lg:gap-10"
            >
              <Link
                to={program.to}
                aria-label={t(program.title)}
                className="group block overflow-hidden rounded-xl"
              >
                <img
                  src={program.image}
                  alt=""
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                />
              </Link>
              <div className="self-center">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-accent">
                  {t(program.focus)}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  <Link to={program.to} className="hover:underline underline-offset-4">
                    {t(program.title)}
                  </Link>
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t(program.desc)}</p>
              </div>
              <div className="flex flex-col justify-center gap-5 md:col-start-2 lg:col-start-auto">
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">{t("Who it's for")}</dt>
                    <dd className="mt-1 font-semibold">{t(`Ages ${program.age}`)}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{t("What you'll create")}</dt>
                    <dd className="mt-1 font-semibold">{t(program.outcome)}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{t("Participation")}</dt>
                    <dd className="mt-1">{t(program.status)}</dd>
                  </div>
                </dl>
                <Link
                  to={program.to}
                  className="inline-flex items-center gap-2 font-bold underline underline-offset-4"
                >
                  {t("Explore program")}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </article>
          ))}
          {visiblePrograms.length === 0 && (
            <div className="py-16 text-center">
              <p>{t("No programs match this selection.")}</p>
              <button type="button" onClick={() => setAge("all")} className="btn-secondary mt-5">
                {t("Show all programs")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
