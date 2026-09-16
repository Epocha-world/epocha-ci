import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import hero from "@/assets/hero.webp";
import {
  absoluteUrl,
  createStructuredDataScripts,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { PreferencesProvider, useI18n } from "@/i18n";
import { translate } from "@/i18n/resources";
import type { Preferences } from "@/lib/preferences";

function NotFoundComponent() {
  const { t } = useI18n();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("Page not found")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("The page you're looking for doesn't exist or has been moved.")}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("Go home")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const { t } = useI18n();
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("This page didn't load")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("Something went wrong on our end. You can try refreshing or head back home.")}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("Try again")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("Go home")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  preferences: Preferences;
}>()({
  head: ({ match }) => {
    const locale = match.context.preferences.locale;
    const t = (message: string) => translate(locale, message);
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: t("EPOCHA — Project-based practicums for youth aged 14–29") },
        {
          name: "description",
          content: t(
            "EPOCHA Learning Hub turns academic effort into career momentum through guided, project-based practicums with recognized credentials.",
          ),
        },
        { name: "author", content: "EPOCHA Learning Hub" },
        { property: "og:title", content: t("EPOCHA — Project-based practicums for youth") },
        {
          property: "og:description",
          content: t(
            "Real projects. Real coaching. Recognized credentials. The #1 practicum experience for youth aged 14–29.",
          ),
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "EPOCHA Learning Hub" },
        { property: "og:locale", content: locale === "ko" ? "ko_KR" : "en_US" },
        { property: "og:image", content: absoluteUrl(hero) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: absoluteUrl(hero) },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;600;700&display=swap",
        },
      ],
      scripts: createStructuredDataScripts([
        organizationJsonLd,
        { ...websiteJsonLd, inLanguage: locale },
      ]),
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <PreferencesProvider initialPreferences={router.options.context.preferences}>
      <RootDocument>{children}</RootDocument>
    </PreferencesProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const { locale, localePreference, themePreference } = useI18n();
  return (
    <html lang={locale} data-theme={themePreference} data-locale-preference={localePreference}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { t } = useI18n();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-background focus:p-3 focus:text-foreground"
        >
          {t("Skip to content")}
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
      </div>
      <Analytics />
      <GoogleAnalytics />
    </QueryClientProvider>
  );
}
