export type AnalyticsConsent = "granted" | "denied";

const STORAGE_KEY = "epocha.analytics-consent";

export const ANALYTICS_CONSENT_EVENT = "epocha:analytics-consent";
export const ANALYTICS_SETTINGS_EVENT = "epocha:analytics-settings";

export function getAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setAnalyticsConsent(consent: AnalyticsConsent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, consent);
  } catch {
    // Consent still applies for this page when browser storage is unavailable.
  }

  window.dispatchEvent(
    new CustomEvent<AnalyticsConsent>(ANALYTICS_CONSENT_EVENT, { detail: consent }),
  );
}

export function openAnalyticsSettings() {
  window.dispatchEvent(new Event(ANALYTICS_SETTINGS_EVENT));
}
