import type { Locale } from "../lib/preferences";

export function normalizeMessageKey(message: string): string {
  return message.replace(/\s+/g, " ").trim();
}

/** Normalize only lookup keys. Paragraph spacing belongs to the displayed copy. */
export function translateMessage(
  locale: Locale,
  message: string,
  korean: Record<string, string>,
  values?: Record<string, unknown>,
): string {
  const translated = locale === "ko" ? (korean[normalizeMessageKey(message)] ?? message) : message;
  return translated.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (match, name: string) =>
    values && Object.hasOwn(values, name) ? String(values[name]) : match,
  );
}
