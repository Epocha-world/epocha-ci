import { createContext } from "react";
import type { Locale, Preferences, ThemePreference } from "@/lib/preferences";

type PreferencesContextValue = Preferences & {
  setLocale: (locale: Locale | "auto") => void;
  setThemePreference: (theme: ThemePreference) => void;
};

export const PreferencesContext = createContext<PreferencesContextValue | null>(null);
