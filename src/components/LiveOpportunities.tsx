import { useI18n } from "@/i18n";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { capstoneFields, capstoneTracks, filterCapstones } from "@/lib/camp-capstones";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LiveOpportunities() {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState("all");
  const [field, setField] = useState("all");
  const searchTerms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const capstones = filterCapstones({ track, field }).filter((capstone) => {
    const fields = [capstone.title, capstone.partner, ...capstone.skills];
    const searchable = fields
      .flatMap((value) => [value, t(value)])
      .join(" ")
      .toLocaleLowerCase();
    return searchTerms.every((term) => searchable.includes(term));
  });
  const filtered = Boolean(query || track !== "all" || field !== "all");

  function clearFilters() {
    setQuery("");
    setTrack("all");
    setField("all");
  }

  return (
    <section id="live-opportunities" className="scroll-mt-36 bg-background text-foreground">
      <header className="surface-inverse text-cream">
        <div className="container-x py-16 md:py-24">
          <h1 className="editorial-heading">{t("Live opportunities")}</h1>
          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-cream/80 md:text-2xl">
            {t(
              "Explore real briefs from partner organisations and find a project where your team can turn learning into practical work.",
            )}
          </p>
        </div>
      </header>

      <div className="container-x py-10 md:py-14">
        <div
          role="search"
          aria-label={t("Search capstone opportunities")}
          className="grid gap-5 md:grid-cols-[2fr_1fr_1fr]"
        >
          <div className="min-w-0">
            <label
              htmlFor="capstone-search"
              className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] sm:text-sm"
            >
              {t("Search opportunities")}
            </label>
            <Input
              id="capstone-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("Search by title, skill, or partner")}
            />
          </div>
          <div className="min-w-0">
            <label
              id="capstone-track-label"
              htmlFor="capstone-track"
              className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] sm:text-sm"
            >
              {t("Track")}
            </label>
            <Select value={track} onValueChange={setTrack}>
              <SelectTrigger id="capstone-track" aria-labelledby="capstone-track-label">
                <SelectValue>{t(track === "all" ? "All tracks" : track)}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">{t("All tracks")}</SelectItem>
                  {capstoneTracks.map((value) => (
                    <SelectItem key={value} value={value}>
                      {t(value)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="min-w-0">
            <label
              id="capstone-field-label"
              htmlFor="capstone-field"
              className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] sm:text-sm"
            >
              {t("Field")}
            </label>
            <Select value={field} onValueChange={setField}>
              <SelectTrigger id="capstone-field" aria-labelledby="capstone-field-label">
                <SelectValue>{t(field === "all" ? "All fields" : field)}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">{t("All fields")}</SelectItem>
                  {capstoneFields.map((value) => (
                    <SelectItem key={value} value={value}>
                      {t(value)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="my-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <p role="status" aria-live="polite">
            {capstones.length} {capstones.length === 1 ? t("opportunity") : t("opportunities")}
          </p>
          {filtered && (
            <Button type="button" onClick={clearFilters} variant="ghost" size="sm">
              {t("Clear filters")}
            </Button>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capstones.map((capstone) => (
            <article
              key={capstone.id}
              className="ds-card relative flex flex-col p-6 transition-colors hover:border-ring sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-lime px-4 py-1 text-sm font-semibold text-ink">
                  {t(capstone.track)}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  #{capstone.number}
                </span>
              </div>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {t(capstone.category)}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-foreground lg:text-[1.75rem]">
                <Link
                  to="/practicums/startup-lab-camp/capstones/$capstoneId"
                  params={{ capstoneId: capstone.id }}
                  className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {t(capstone.title)}
                </Link>
              </h2>
              <p className="mt-3 text-base font-medium text-foreground">{t(capstone.partner)}</p>
              <p className="my-7 text-base leading-relaxed text-muted-foreground">
                {t(capstone.summary)}
              </p>
              <ul aria-label={t("Skills")} className="mt-auto flex flex-wrap gap-2">
                {capstone.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-border px-3 py-1 text-sm">
                    {t(skill)}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
                <span>{t(capstone.format)}</span>
                <span className="text-right">{t(capstone.location)}</span>
              </div>
            </article>
          ))}
        </div>

        {capstones.length === 0 && (
          <div className="ds-card px-6 py-14 text-center">
            <h2 className="text-2xl font-bold">{t("No matching opportunities")}</h2>
            <p className="mt-3 text-muted-foreground">
              {t(
                "Try another title, skill, or partner, or clear your filters to see all capstones.",
              )}
            </p>
            <Button type="button" onClick={clearFilters} className="mt-6">
              {t("Clear filters")}
            </Button>
          </div>
        )}

        <p className="mt-6 text-sm text-muted-foreground">
          <a
            href="/practicums/startup-lab-camp/account?returnTo=%2Fpracticums%2Fstartup-lab-camp%2Fpracticum%2Flive-opportunities"
            className="font-semibold underline underline-offset-4"
          >
            {t("My account")}
          </a>
          {" — "}
          {t("Create a free account or sign in to view capstone details.")}
        </p>
        <aside className="mt-12 flex flex-col items-start justify-between gap-7 surface-inverse px-6 py-9 text-cream md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{t("Want to open a capstone?")}</h2>
            <p className="mt-3 text-cream/80">
              {t("Bring a real business challenge to a motivated trainee team.")}
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link to="/practicums/startup-lab-camp/sparked/become-a-sponsor">
              {t("Become a sponsor")}
            </Link>
          </Button>
        </aside>
      </div>
    </section>
  );
}
