import { CapstonePartner } from "@/components/camp/CapstonePartner";
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { createSeoHead } from "@/lib/seo";
import {
  capstoneFields,
  capstoneTracks,
  capstoneFieldLabel,
  filterCapstones,
  publishedCapstones,
} from "@/lib/camp-capstones";
import { ArrowRight, Search } from "lucide-react";
export const Route = createFileRoute("/practicums_/startup-lab-camp/open-capstones")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Open capstones — Start-up Lab Camp — EPOCHA",
      description: "Explore partner briefs by leadership track and field.",
      path: "/practicums/startup-lab-camp/open-capstones",
    }),
  loader: () => publishedCapstones(),
  component: OpenCapstones,
});
function OpenCapstones() {
  const { t } = useI18n();
  const records = Route.useLoaderData();
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState("");
  const [field, setField] = useState("");
  const results = filterCapstones(records, { query, track, field }, t);
  const reset = () => {
    setQuery("");
    setTrack("");
    setField("");
  };
  const control =
    "mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
  return (
    <section className="bg-background text-foreground">
      <div className="container-x py-16 md:py-24">
        <h1 className="mt-5 text-5xl font-bold md:text-7xl">{t("Open capstones")}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-foreground/80">
          {t(
            "Explore real briefs from partner organisations and find a project where you and your team can turn learning into practical work.",
          )}
        </p>
        <form
          onSubmit={(event) => event.preventDefault()}
          role="search"
          aria-label={t("Find a capstone")}
          className="mt-12 grid items-end gap-5 rounded-3xl border border-border bg-card p-6 md:grid-cols-[2fr_1fr_1.4fr_auto]"
        >
          <label className="text-sm font-semibold">
            <span className="inline-flex items-center gap-2">
              <Search className="size-4" aria-hidden="true" />
              {t("Search capstones")}
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("Search projects, partners or skills")}
              className={control}
            />
          </label>
          <label className="text-sm font-semibold">
            {t("Track")}
            <select
              aria-label={t("Track")}
              value={track}
              onChange={(event) => setTrack(event.target.value)}
              className={control}
            >
              <option value="">{t("All tracks")}</option>
              {capstoneTracks.map((item) => (
                <option key={item} value={item}>
                  {t(item)}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold">
            {t("Field")}
            <select
              aria-label={t("Field")}
              value={field}
              onChange={(event) => setField(event.target.value)}
              className={control}
            >
              <option value="">{t("All fields")}</option>
              {capstoneFields.map((item) => (
                <option key={item} value={item}>
                  {t(capstoneFieldLabel(item))}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={reset}
            className="min-h-12 rounded-full bg-lime px-5 py-3 font-semibold text-ink"
          >
            {t("Reset filters")}
          </button>
        </form>
        <p role="status" aria-live="polite" className="mt-6 text-sm text-muted-foreground">
          {t("Capstones found")}: {results.length}
        </p>
        {results.length ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <article
                key={item.id}
                className="flex flex-col rounded-3xl border border-border bg-card p-7"
              >
                <p className="text-sm text-muted-foreground">
                  {t(item.track)} ·{" "}
                  <span className="uppercase">
                    {t(item.fieldLabel ?? capstoneFieldLabel(item.field))}
                  </span>
                </p>
                <h2 className="mt-5 text-2xl font-bold">{t(item.title)}</h2>
                <CapstonePartner item={item} />
                <p className="mt-4 leading-relaxed text-foreground/80">{t(item.summary)}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {item.skills.map((skill) => t(skill)).join(" · ")}
                </p>
                <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                  {[
                    ["Age", item.age],
                    ["Location", item.location],
                    ["Cost", item.fees],
                    ["w/h add on", item.workshopAddon],
                  ]
                    .filter(([, value]) => value)
                    .map(([label, value]) => (
                      <div key={label} className="contents">
                        <dt>{t(label!)}</dt>
                        <dd className="text-right font-semibold">{t(value!)}</dd>
                      </div>
                    ))}
                </dl>
                <Link
                  to="/practicums/startup-lab-camp/capstones/$capstoneId"
                  params={{ capstoneId: item.id }}
                  className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold underline underline-offset-4"
                >
                  {t("View capstone details")}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold">
              {t(records.length ? "No matching capstones" : "No currently published opportunities")}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
              {t(
                records.length
                  ? "Try a different search or clear your filters to explore other capstones."
                  : "New capstone opportunities will be published here when available. Contact us to discuss upcoming intakes.",
              )}
            </p>
            {records.length ? (
              <button
                type="button"
                className="mt-7 font-semibold underline underline-offset-4"
                onClick={reset}
              >
                {t("Reset filters")}
              </button>
            ) : (
              <Link
                to="/connect"
                className="mt-7 inline-flex rounded-full bg-lime px-6 py-3 font-semibold text-ink"
              >
                {t("Contact us")}
              </Link>
            )}
          </div>
        )}
        <aside className="mt-14 rounded-3xl bg-lime p-8 text-ink md:p-12">
          <h2 className="text-3xl font-bold">{t("Want to open a capstone?")}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed">
            {t("Bring a real business challenge to a motivated trainee team.")}
          </p>
          <Link
            to="/about/sparked"
            hash="sponsor"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-4 font-semibold text-cream"
          >
            {t("Become a sponsor")}
          </Link>
        </aside>
      </div>
    </section>
  );
}
