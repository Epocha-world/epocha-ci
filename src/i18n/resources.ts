import type { Locale } from "@/lib/preferences";
import { normalizeMessageKey, translateMessage } from "./translate";

const dictionaries = import.meta.glob<{ default: Record<string, string> }>("./messages/*.ts", {
  eager: true,
});
const korean: Record<string, string> = Object.assign(
  {},
  ...Object.entries(dictionaries)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, module]) =>
      Object.fromEntries(
        Object.entries(module.default).map(([key, value]) => [normalizeMessageKey(key), value]),
      ),
    ),
);

/** Stateless lookup: each request supplies its own locale. React escapes the result. */
export function translate(
  locale: Locale,
  message: string,
  values?: Record<string, unknown>,
): string {
  return translateMessage(locale, message, korean, values);
}
