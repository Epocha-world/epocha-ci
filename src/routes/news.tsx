import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Newspaper } from "lucide-react";
import { createSeoHead } from "@/lib/seo";
import { publishedNews, filterNews } from "@/lib/news";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/news")({
  validateSearch: (search: Record<string, unknown>): { category?: "sparked" } => ({
    category: search.category === "sparked" ? "sparked" : undefined,
  }),
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "News — EPOCHA",
      description:
        "News from EPOCHA and Sparked!: practicum updates, community stories and opportunities to get involved.",
      path: "/news",
    }),
  component: NewsPage,
});

function NewsPage() {
  const { t, locale } = useI18n();
  const { category } = Route.useSearch();
  const articles = filterNews(publishedNews(), category);
  const dateFormat = new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  });
  return (
    <section className="container-x py-20 md:py-24">
      <h1 className="text-5xl md:text-7xl font-bold">{t("News")}</h1>
      <p className="mt-5 max-w-2xl text-xl text-foreground/75">
        {t("Updates from our practicums and the people who make them possible.")}
      </p>
      <nav aria-label={t("News categories")} className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/news"
          search={{ category: undefined }}
          aria-current={!category ? "page" : undefined}
          className={
            "rounded-full px-5 py-3 font-semibold border border-border " +
            (!category ? "bg-lime text-ink" : "bg-card hover:bg-muted")
          }
        >
          {t("All news")}
        </Link>
        <Link
          to="/news"
          search={{ category: "sparked" }}
          aria-current={category === "sparked" ? "page" : undefined}
          className={
            "rounded-full px-5 py-3 font-semibold border border-border " +
            (category === "sparked" ? "bg-lime text-ink" : "bg-card hover:bg-muted")
          }
        >
          Sparked!
        </Link>
      </nav>
      {articles.length > 0 ? (
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <li key={article.id}>
              <article className="h-full rounded-3xl border border-border bg-card p-7 md:p-8 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="font-semibold">
                    {article.category === "sparked" ? "Sparked!" : t("EPOCHA news")}
                  </span>
                  {article.publishedAt && (
                    <time dateTime={article.publishedAt}>
                      {dateFormat.format(new Date(article.publishedAt + "T00:00:00Z"))}
                    </time>
                  )}
                </div>
                <h2 className="mt-5 text-2xl font-bold">
                  <a href={article.href} className="hover:underline underline-offset-4">
                    {t(article.title)}
                  </a>
                </h2>
                <p className="mt-4 text-foreground/75 leading-relaxed">{t(article.summary)}</p>
                <a
                  href={article.href}
                  className="mt-auto pt-6 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
                  aria-label={`${t("Read story")}: ${t(article.title)}`}
                >
                  {t("Read story")} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="mt-10 rounded-3xl border border-border bg-card px-6 py-16 md:p-16 text-center"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <Newspaper aria-hidden="true" className="h-10 w-10 mx-auto text-muted-foreground" />
          <h2 className="mt-6 text-2xl md:text-3xl font-bold">
            {t(category === "sparked" ? "No Sparked! news yet." : "No news published yet.")}
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-foreground/70">
            {t(
              "New stories will appear here when they are published. In the meantime, explore how you can get involved.",
            )}
          </p>
          <Link to="/about/sparked" className="btn-primary mt-8 inline-flex">
            {t("Explore Sparked!")} <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
