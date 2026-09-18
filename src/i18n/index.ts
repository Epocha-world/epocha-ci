import { useCallback, useContext } from "react";
import { PreferencesContext } from "./context";
import { translate } from "./resources";
export { PreferencesProvider } from "./provider";
export { translate } from "./resources";

export function useI18n() {
  const preferences = useContext(PreferencesContext);
  const locale = preferences?.locale ?? "en";
  const t = useCallback(
    (message: string, values?: Record<string, unknown>) => translate(locale, message, values),
    [locale],
  );
  if (!preferences) throw new Error("useI18n requires PreferencesProvider");
  return { ...preferences, t };
}
