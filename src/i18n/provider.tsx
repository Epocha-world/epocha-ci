import { useCallback, useMemo, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { useRouter } from "@tanstack/react-router";
import { createI18n } from "./resources";
import { PreferencesContext } from "./context";
import {
  negotiateLocale,
  savePreferenceCookie,
  type Locale,
  type Preferences,
  type ThemePreference,
} from "@/lib/preferences";

export function PreferencesProvider({
  initialPreferences,
  children,
}: {
  initialPreferences: Preferences;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [preferences, setPreferences] = useState(initialPreferences);
  const [i18n] = useState(() => createI18n(initialPreferences.locale));

  const setLocale = useCallback(
    (localePreference: Locale | "auto") => {
      const locale =
        localePreference === "auto"
          ? negotiateLocale(navigator.languages.join(","))
          : localePreference;
      savePreferenceCookie(
        document,
        "epocha_locale",
        localePreference === "auto" ? null : localePreference,
        location.protocol === "https:",
      );
      const next = { ...preferences, locale, localePreference };
      void i18n.changeLanguage(locale);
      setPreferences(next);
      document.documentElement.lang = locale;
      document.documentElement.dataset.localePreference = localePreference;
      router.update({ context: { ...router.options.context, preferences: next } });
      // Refresh route metadata in place, without navigating or resetting form state.
      void router.invalidate();
    },
    [i18n, preferences, router],
  );

  const setThemePreference = useCallback(
    (themePreference: ThemePreference) => {
      savePreferenceCookie(
        document,
        "epocha_theme",
        themePreference,
        location.protocol === "https:",
      );
      const next = { ...preferences, themePreference };
      setPreferences(next);
      document.documentElement.dataset.theme = themePreference;
      router.update({ context: { ...router.options.context, preferences: next } });
    },
    [preferences, router],
  );

  const value = useMemo(
    () => ({ ...preferences, setLocale, setThemePreference }),
    [preferences, setLocale, setThemePreference],
  );
  return (
    <I18nextProvider i18n={i18n}>
      <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
    </I18nextProvider>
  );
}
