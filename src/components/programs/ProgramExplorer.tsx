import { filterProgramsByAge, type ProgramAge } from "@/lib/programs";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import leadershipCamp from "@/assets/practicum-leadership-camp.jpg";
import advisoryBoard from "@/assets/practicum-advisory-board.jpg";
import hanaro from "@/assets/practicum-hanaro.jpg";
import { useI18n } from "@/i18n";

const images = { camp: leadershipCamp, hanaro, mirae: advisoryBoard };

export function ProgramExplorer({ home = false }: { home?: boolean }) {
  const { t } = useI18n();
  const [age, setAge] = useState<ProgramAge>("all");
  const visiblePrograms = filterProgramsByAge(age);
  return (
    <section
      id={home ? "learn-by-doing" : "choose-your-practicum"}
      className="bg-background text-foreground scroll-mt-28"
    >
      {home && <span id="choose-your-practicum" className="block scroll-mt-28" />}
      <div className="container-x pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
              {t("Learn by doing")}
            </p>
            <h2 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight leading-[1.05] md:text-7xl">
              {t(home ? "Your next chapter starts with experience." : "Choose your practicum.")}
            </h2>
          </div>
          <div className="max-w-md md:justify-self-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t(
                "Real projects. Personal coaching. A clearer sense of where you want to go. Find the practicum that fits your next step.",
              )}
            </p>
            <a
              href={home ? "/practicums" : "#training-offer"}
              className="mt-6 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
            >
              {t(home ? "Explore our training approach" : "Training program")}
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
                onClick={() => setAge(filter.value as ProgramAge)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${age === filter.value ? "border-foreground bg-foreground text-background" : "border-border bg-background text-foreground hover:bg-muted"}`}
              >
                {t(filter.label)}
              </button>
            ))}
          </div>
        </div>
        <div className="divide-y divide-border" aria-live="polite">
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
                  src={images[program.image]}
                  alt=""
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                />
              </Link>
              <div className="self-center">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/70">
                  {t(program.focus)}
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight">
                  <Link to={program.to} className="hover:underline underline-offset-4">
                    {t(program.title)}
                  </Link>
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t(program.desc)}</p>
              </div>
              <div className="flex flex-col justify-center gap-5 md:col-start-2 lg:col-start-auto">
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">{t("Who it's for")}</dt>
                    <dd className="mt-1 font-semibold">{t(`Ages ${program.age}`)}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{t("Registrations")}</dt>
                    <dd className="mt-1">
                      {t(
                        home && program.image === "camp"
                          ? "Winter registration open soon"
                          : program.status,
                      )}
                    </dd>
                  </div>
                </dl>
                <Link
                  to={program.to}
                  className="inline-flex items-center gap-2 font-bold underline underline-offset-4"
                >
                  {t("Explore")}
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
        <p className="mt-6 text-sm text-muted-foreground">
          {t(
            "Schedules, fees, and eligibility vary by project. Visit a practicum page for the latest details.",
          )}
        </p>
      </div>
    </section>
  );
}
