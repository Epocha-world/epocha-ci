import { CapstonePartner } from "@/components/camp/CapstonePartner";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { createSeoHead } from "@/lib/seo";
import { publishedCapstones, capstoneFieldLabel } from "@/lib/camp-capstones";
export const Route = createFileRoute("/practicums_/startup-lab-camp/capstones/$capstoneId")({
  loader: ({ params }) => {
    const capstone = publishedCapstones().find((item) => item.id === params.capstoneId);
    if (!capstone) throw notFound();
    return capstone;
  },
  head: ({ loaderData, match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: loaderData ? loaderData.title + " — EPOCHA" : "Capstone unavailable — EPOCHA",
      description: loaderData?.summary ?? "This capstone is not currently published.",
      path: "/practicums/startup-lab-camp/capstones/" + (loaderData?.id ?? "unavailable"),
      noIndex: !loaderData,
    }),
  component: CapstoneDetail,
  notFoundComponent: CapstoneUnavailable,
});
function CapstoneUnavailable() {
  const { t } = useI18n();
  return (
    <section className="container-x py-24">
      <h1 className="text-4xl font-bold">{t("Capstone unavailable")}</h1>
      <p className="mt-6">{t("This capstone is not currently published.")}</p>
      <Link
        className="mt-8 inline-flex rounded-full bg-lime px-6 py-3 font-semibold text-ink"
        to="/practicums/startup-lab-camp/open-capstones"
      >
        {t("Browse capstones")}
      </Link>
    </section>
  );
}
function CapstoneDetail() {
  const item = Route.useLoaderData();
  const { t } = useI18n();
  return (
    <section className="bg-background text-foreground">
      <div className="container-x py-16 md:py-24">
        <Link
          to="/practicums/startup-lab-camp/open-capstones"
          className="font-semibold underline underline-offset-4"
        >
          {t("Back to open capstones")}
        </Link>
        <p className="mt-10 text-sm text-muted-foreground">
          {t(item.track)} · {t(item.fieldLabel ?? capstoneFieldLabel(item.field))}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">{t(item.title)}</h1>
        <CapstonePartner item={item} />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed">{t(item.summary)}</p>
        <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            {item.brief !== item.summary && (
              <>
                <h2 className="text-2xl font-bold">{t("Project brief")}</h2>
                <p className="mt-5 whitespace-pre-line leading-relaxed">{t(item.brief)}</p>
              </>
            )}
            {item.deliverables && (
              <>
                <h2 className="mt-10 text-2xl font-bold">{t("What you will deliver")}</h2>
                <ul className="mt-5 list-disc space-y-3 pl-5">
                  {item.deliverables.map((text) => (
                    <li key={text}>{t(text)}</li>
                  ))}
                </ul>
              </>
            )}
            <h2 className="mt-10 text-2xl font-bold">{t("Skills")}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <li className="rounded-full border border-border px-4 py-2" key={skill}>
                  {t(skill)}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl border border-border bg-card p-7">
            <dl className="space-y-6">
              {[
                ["Age", item.age],
                ["Format", item.kind === "document-listing" ? undefined : item.format],
                ["Location", item.location],
                ["Dates", item.dates],
                ["Fees", item.fees],
                ["w/h add on", item.workshopAddon],
              ]
                .filter(([, value]) => value)
                .map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-sm text-muted-foreground">{t(label!)}</dt>
                    <dd className="mt-2 font-semibold">{t(value!)}</dd>
                  </div>
                ))}
            </dl>
            {item.registrationUrl && (
              <>
                <a
                  href={item.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-lime px-6 py-3 font-semibold text-ink"
                >
                  {t("Register for this capstone")}
                </a>
                <p className="mt-3 text-sm text-muted-foreground">
                  {t("Opens the registration provider in a new tab.")}
                </p>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
