import { createInstance } from "i18next";
import type { Locale } from "@/lib/preferences";

const dictionaries = import.meta.glob<{ default: Record<string, string> }>("./messages/*.ts", {
  eager: true,
});
const korean = Object.assign(
  {},
  ...Object.values(dictionaries).map((module) => module.default),
) as Record<string, string>;
const english = Object.fromEntries(Object.keys(korean).map((key) => [key, key]));

export function createI18n(locale: Locale) {
  const instance = createInstance();
  // Bundled resources initialize synchronously, separately for every rendered request.
  void instance.init({
    lng: locale,
    fallbackLng: "en",
    supportedLngs: ["en", "ko"],
    keySeparator: false,
    nsSeparator: false,
    initAsync: false,
    interpolation: { escapeValue: false },
    resources: { en: { translation: english }, ko: { translation: korean } },
  });
  return instance;
}

/** Pure lookup for route metadata; never changes another request's language. */
export function translate(locale: Locale, message: string): string {
  const key = message.replace(/\s+/g, " ").trim();
  return locale === "ko" ? (korean[key] ?? key) : key;
}
