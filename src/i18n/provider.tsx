import { useCallback, useMemo, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
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
  const current = useRef(initialPreferences);

  const updatePreferences = useCallback(
    (next: Preferences) => {
      current.current = next;
      setPreferences(next);
      router.update({ context: { ...router.options.context, preferences: next } });
    },
    [router],
  );

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
      updatePreferences({ ...current.current, locale, localePreference });
      document.documentElement.lang = locale;
      document.documentElement.dataset.localePreference = localePreference;
      // Refresh route metadata without navigation or resetting local form state.
      void router.invalidate();
    },
    [router, updatePreferences],
  );

  const setThemePreference = useCallback(
    (themePreference: ThemePreference) => {
      savePreferenceCookie(
        document,
        "epocha_theme",
        themePreference,
        location.protocol === "https:",
      );
      updatePreferences({ ...current.current, themePreference });
      document.documentElement.dataset.theme = themePreference;
    },
    [updatePreferences],
  );

  const value = useMemo(
    () => ({ ...preferences, setLocale, setThemePreference }),
    [preferences, setLocale, setThemePreference],
  );
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
