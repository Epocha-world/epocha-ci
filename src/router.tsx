import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import {
  isLocale,
  isThemePreference,
  readBrowserCookies,
  resolvePreferences,
} from "./lib/preferences";

const initialPreferences = createIsomorphicFn()
  .server(() => resolvePreferences(getRequestHeader("cookie"), getRequestHeader("accept-language")))
  .client(() => {
    const html = document.documentElement;
    const fallback = resolvePreferences(
      readBrowserCookies(document),
      navigator.languages.join(","),
    );
    // Hydrate exactly the language selected by the server, even when browser lists differ.
    return {
      locale: isLocale(html.lang) ? html.lang : fallback.locale,
      localePreference:
        isLocale(html.dataset.localePreference) || html.dataset.localePreference === "auto"
          ? html.dataset.localePreference
          : fallback.localePreference,
      themePreference: isThemePreference(html.dataset.theme)
        ? html.dataset.theme
        : fallback.themePreference,
    };
  });

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient, preferences: initialPreferences() },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
