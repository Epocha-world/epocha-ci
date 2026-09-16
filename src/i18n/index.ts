import { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { PreferencesContext } from "./context";
export { PreferencesProvider } from "./provider";

export function useI18n() {
  const preferences = useContext(PreferencesContext);
  const { t: translate } = useTranslation();
  const t = useCallback(
    (message: string, options?: Record<string, unknown>) => {
      const key = message.replace(/\s+/g, " ").trim();
      return String(translate(key, { ...options, defaultValue: key }));
    },
    [translate],
  );
  if (!preferences) throw new Error("useI18n requires PreferencesProvider");
  return { ...preferences, t };
}
