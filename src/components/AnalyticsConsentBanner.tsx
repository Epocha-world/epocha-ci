import { useEffect, useState } from "react";
import {
  ANALYTICS_SETTINGS_EVENT,
  getAnalyticsConsent,
  setAnalyticsConsent,
} from "@/lib/analytics-consent";

export function AnalyticsConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(getAnalyticsConsent() === null);

    const showSettings = () => setIsVisible(true);
    window.addEventListener(ANALYTICS_SETTINGS_EVENT, showSettings);
    return () => window.removeEventListener(ANALYTICS_SETTINGS_EVENT, showSettings);
  }, []);

  if (!isVisible) return null;

  const choose = (consent: "granted" | "denied") => {
    setAnalyticsConsent(consent);
    setIsVisible(false);
  };

  return (
    <aside
      aria-label="Analytics preferences"
      className="fixed bottom-4 left-4 right-4 z-50 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-lg md:left-auto md:right-4 md:max-w-md"
    >
      <p className="text-sm font-semibold">Analytics preferences</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        We use cookie-free Vercel Analytics for basic traffic insights. With your permission, Google
        Analytics helps us understand campaigns and improve programme journeys. Read our{" "}
        <a href="/privacy" className="text-lime underline hover:opacity-80">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-md border border-input px-3 py-2 text-xs font-semibold transition-colors hover:bg-accent"
        >
          Reject optional analytics
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-md bg-lime px-3 py-2 text-xs font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Allow Google Analytics
        </button>
      </div>
    </aside>
  );
}
