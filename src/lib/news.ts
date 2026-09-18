export type NewsCategory = "epocha" | "sparked";
export type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  category: NewsCategory;
  /** Publication date in YYYY-MM-DD format. */
  publishedAt: string;
  /** A verified article URL: same-site path or HTTPS URL. */
  href: string;
};

/** Add real, published articles here after verifying their content, date and link.
 * Use category "sparked" for the Sparked! filter. Add Korean title/summary entries
 * to src/i18n/messages/v1-about.ts using the exact English text as the key.
 * This catalogue is deployed with the site; it has no CMS or scheduled publishing.
 */
export const newsArticles: readonly NewsArticle[] = [];

export function isPublishableNews(value: unknown): value is NewsArticle {
  if (!value || typeof value !== "object") return false;
  const article = value as Record<string, unknown>;
  for (const key of ["id", "title", "summary", "href", "publishedAt"])
    if (typeof article[key] !== "string" || !article[key].trim()) return false;
  if (article.category !== "epocha" && article.category !== "sparked") return false;
  const date = article.publishedAt as string;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const timestamp = Date.parse(date + "T00:00:00Z");
  if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== date)
    return false;
  const href = article.href as string;
  if (href.includes("\\") || [...href].some((character) => character.charCodeAt(0) <= 32))
    return false;
  if (href.startsWith("/") && !href.startsWith("//")) return true;
  try {
    const url = new URL(href);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}

/** Exclude incomplete records and duplicate IDs; show newest published articles first. */
export function publishedNews(records: readonly unknown[] = newsArticles): NewsArticle[] {
  const ids = new Set<string>();
  return records
    .filter(isPublishableNews)
    .filter((article) => {
      if (ids.has(article.id)) return false;
      ids.add(article.id);
      return true;
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function filterNews(
  records: readonly NewsArticle[],
  category?: NewsCategory,
): NewsArticle[] {
  return records.filter((article) => !category || article.category === category);
}
