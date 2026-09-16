export type Locale = "en" | "ko";
export type ThemePreference = "system" | "light" | "dark";
export type Preferences = {
  locale: Locale;
  localePreference: Locale | "auto";
  themePreference: ThemePreference;
};

/** Browser privacy settings may deny cookie access entirely. Preferences still work in memory. */
export function readBrowserCookies(source: { cookie: string }): string {
  try {
    return source.cookie;
  } catch {
    return "";
  }
}

export function savePreferenceCookie(
  target: { cookie: string },
  name: "epocha_locale" | "epocha_theme",
  value: string | null,
  secure = false,
): void {
  try {
    target.cookie = `${name}=${value ?? ""}; Path=/; Max-Age=${value === null ? 0 : 31536000}; SameSite=Lax${secure ? "; Secure" : ""}`;
  } catch {
    // Persistence is optional; callers continue updating the live preference.
  }
}

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "ko";
}

export function isThemePreference(value: unknown): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

/** Ignore malformed qualities and explicitly excluded languages; preserve tie order. */
export function negotiateLocale(acceptLanguage = ""): Locale {
  const candidates = acceptLanguage.split(",").map((entry, index) => {
    const [language, ...parameters] = entry.trim().toLowerCase().split(";");
    const quality = parameters.find((parameter) => parameter.trim().startsWith("q="));
    const value = quality?.trim().slice(2);
    const q =
      value === undefined
        ? 1
        : /^(?:0(?:\.\d{0,3})?|1(?:\.0{0,3})?)$/.test(value)
          ? Number(value)
          : 0;
    return { locale: language.split("-")[0], q, index };
  });
  candidates.sort((a, b) => b.q - a.q || a.index - b.index);
  return (
    (candidates.find(({ locale, q }) => q > 0 && isLocale(locale))?.locale as Locale | undefined) ??
    "en"
  );
}

export function readCookie(cookieHeader: string, name: string): string | undefined {
  for (const entry of cookieHeader.split(";")) {
    const separator = entry.indexOf("=");
    if (entry.slice(0, separator).trim() !== name) continue;
    try {
      return decodeURIComponent(entry.slice(separator + 1).trim());
    } catch {
      return undefined;
    }
  }
  return undefined;
}

export function resolvePreferences(cookieHeader = "", acceptLanguage = ""): Preferences {
  const localeCookie = readCookie(cookieHeader, "epocha_locale");
  const themeCookie = readCookie(cookieHeader, "epocha_theme");
  return {
    locale: isLocale(localeCookie) ? localeCookie : negotiateLocale(acceptLanguage),
    localePreference: isLocale(localeCookie) ? localeCookie : "auto",
    themePreference: isThemePreference(themeCookie) ? themeCookie : "system",
  };
}
