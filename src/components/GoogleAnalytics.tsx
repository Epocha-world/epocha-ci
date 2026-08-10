import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  ANALYTICS_CONSENT_EVENT,
  getAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics-consent";

type Gtag = (...args: unknown[]) => void;

type AnalyticsWindow = Window &
  typeof globalThis & {
    dataLayer?: unknown[][];
    gtag?: Gtag;
  };

const rawMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const measurementId = rawMeasurementId?.match(/^G-[A-Z0-9]+$/) ? rawMeasurementId : null;
const SCRIPT_ID = "google-analytics-script";

function setGoogleAnalyticsDisabled(disabled: boolean) {
  if (!measurementId) return;
  (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = disabled;
}

function deleteGoogleAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=", 1)[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith("_ga")));
  const hostnameParts = window.location.hostname.split(".");
  const domains = new Set(["", window.location.hostname]);

  for (let index = 1; index < hostnameParts.length - 1; index += 1) {
    domains.add(`.${hostnameParts.slice(index).join(".")}`);
  }

  for (const name of cookieNames) {
    for (const domain of domains) {
      const domainAttribute = domain ? ` domain=${domain};` : "";
      document.cookie = `${name}=; Max-Age=0; path=/;${domainAttribute} SameSite=Lax`;
    }
  }
}

function initialiseGoogleAnalytics() {
  if (!measurementId) return;

  setGoogleAnalyticsDisabled(false);
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer ??= [];
  analyticsWindow.gtag ??= (...args: unknown[]) => analyticsWindow.dataLayer?.push(args);
  analyticsWindow.gtag("js", new Date());
  analyticsWindow.gtag("consent", "update", { analytics_storage: "granted" });
  analyticsWindow.gtag("config", measurementId, { send_page_view: false });

  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }
}

export function GoogleAnalytics() {
  const routeHref = useRouterState({ select: (state) => state.location.href });
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);

  useEffect(() => {
    setConsent(getAnalyticsConsent());

    const handleConsent = (event: Event) => {
      setConsent((event as CustomEvent<AnalyticsConsent>).detail);
    };
    window.addEventListener(ANALYTICS_CONSENT_EVENT, handleConsent);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, handleConsent);
  }, []);

  useEffect(() => {
    if (!measurementId || consent === null) return;

    if (consent === "granted") {
      initialiseGoogleAnalytics();
    } else {
      setGoogleAnalyticsDisabled(true);
      (window as AnalyticsWindow).gtag?.("consent", "update", {
        analytics_storage: "denied",
      });
      deleteGoogleAnalyticsCookies();
    }
  }, [consent]);

  useEffect(() => {
    if (!measurementId || consent !== "granted") return;

    (window as AnalyticsWindow).gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: routeHref,
      page_title: document.title,
    });
  }, [consent, routeHref]);

  return null;
}
