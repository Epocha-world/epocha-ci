import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useI18n } from "@/i18n";
import camp from "@/assets/practicum-leadership-camp.webp";
import hanaro from "@/assets/practicum-hanaro.webp";
import industry from "@/assets/practicum-advisory-board.webp";

const programs = [
  {
    name: "Start-up Lab Camp",
    age: "14–18",
    category: "Entrepreneurship",
    description:
      "Turn an idea into a business concept. Build with a team, learn from coaches, and find your voice.",
    detail: "Multiple locations · All experience levels",
    output: "A trainee-run enterprise and a startup concept",
    image: camp,
    to: "/practicums/startup-lab-camp",
  },
  {
    name: "Hanaro Leadership Project",
    age: "19–29",
    category: "Leadership & social impact",
    description:
      "Champion a cause that matters to you. Collaborate with peers and organisations on projects with a purpose.",
    detail: "Remote · Project-specific schedules",
    output: "A community project and portfolio evidence",
    image: hanaro,
    to: "/practicums/hanaro",
  },
  {
    name: "Mirae Industry Project",
    age: "19–29",
    category: "Industry experience",
    description:
      "Explore business challenges and career-building project work. Details for the next cohort will be announced soon.",
    detail: "Next cohort · Details coming soon",
    output: "Project scope to be announced",
    image: industry,
    to: "/practicums/mirae-industry",
  },
] as const;

export function ProgramFinder() {
  const { t } = useI18n();
  const [age, setAge] = useState("all");
  const filtered = programs.filter((program) => age === "all" || program.age === age);
  return (
    <section id="choose-your-practicum" className="section-padding scroll-mt-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t("Built around your next step")}
            </p>
            <h2 className="editorial-heading mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {t("Find your next step.")}
            </h2>
          </div>
          <Link
            to="/practicums"
            className="inline-flex items-center gap-3 text-sm font-semibold underline-offset-4 hover:underline"
          >
            {t("Compare all practicums")}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <ToggleGroup
            type="single"
            value={age}
            onValueChange={(value) => setAge(value || "all")}
            aria-label={t("Filter programs by age")}
            className="justify-start gap-2"
          >
            {[
              { value: "all", label: "All programs" },
              { value: "14–18", label: "Ages 14–18" },
              { value: "19–29", label: "Ages 19–29" },
            ].map((filter) => (
              <ToggleGroupItem
                key={filter.value}
                value={filter.value}
                className="min-h-11 rounded-none border-b-2 border-transparent px-3 text-xs data-[state=on]:border-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground sm:px-4 sm:text-sm"
              >
                {t(filter.label)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <p aria-live="polite" aria-atomic="true" className="text-xs text-muted-foreground">
            {t(filtered.length === 1 ? "{{count}} program" : "{{count}} programs", {
              count: filtered.length,
            })}
          </p>
        </div>
        <div>
          {filtered.map((program) => (
            <Link
              key={program.name}
              to={program.to}
              className="group grid grid-cols-[1fr_auto] items-center gap-5 border-b border-border py-7 md:grid-cols-[200px_1fr_auto] md:gap-8 lg:grid-cols-[240px_1fr_48px] lg:py-8"
            >
              <img
                src={program.image}
                width={400}
                height={280}
                loading="lazy"
                alt=""
                className="col-span-2 aspect-[16/8] w-full rounded-sm object-cover md:col-span-1 md:aspect-[4/3]"
              />
              <div className="min-w-0">
                <p className="text-xs font-medium text-muted-foreground">
                  {t(`Ages ${program.age}`)}
                  <span aria-hidden="true" className="mx-2">
                    /
                  </span>
                  {t(program.category)}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl lg:text-[1.75rem]">
                  {t(program.name)}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t(program.description)}
                </p>
                <p className="mt-4 text-xs font-medium text-muted-foreground">
                  {t(program.detail)}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  <span className="font-semibold">{t("Project focus")}: </span>
                  {t(program.output)}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-muted/60 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <ArrowRight className="size-5" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          {t(
            "Schedules, fees, and eligibility vary by project. Visit a program page for the latest details.",
          )}
        </p>
      </div>
    </section>
  );
}
