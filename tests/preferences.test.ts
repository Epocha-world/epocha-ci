import test from "node:test";
import assert from "node:assert/strict";
import {
  negotiateLocale,
  resolvePreferences,
  readCookie,
  readBrowserCookies,
  savePreferenceCookie,
} from "../src/lib/preferences.ts";

test("language negotiation honors quality, exclusion, regions, and stable order", () => {
  assert.equal(negotiateLocale("fr, ko-KR;q=0.9, en-US;q=0.7"), "ko");
  assert.equal(negotiateLocale("ko;q=0, en;q=0.5"), "en");
  assert.equal(negotiateLocale("en;q=0.8, ko;q=0.8"), "en");
  assert.equal(negotiateLocale("ko;q=bogus, en;q=1"), "en");
  assert.equal(negotiateLocale("ko;q=2, en;q=0.5"), "en");
  assert.equal(negotiateLocale("fr-FR"), "en");
});

test("saved language and theme override browser defaults independently for each request", () => {
  const korean = resolvePreferences("epocha_locale=ko; epocha_theme=dark", "en-US");
  const english = resolvePreferences("epocha_locale=en; epocha_theme=light", "ko-KR");
  assert.deepEqual(korean, { locale: "ko", localePreference: "ko", themePreference: "dark" });
  assert.deepEqual(english, { locale: "en", localePreference: "en", themePreference: "light" });
  assert.deepEqual(resolvePreferences("", "ko-KR"), {
    locale: "ko",
    localePreference: "auto",
    themePreference: "system",
  });
  assert.equal(korean.locale, "ko");
});

test("invalid preferences and malformed cookies fail safely", () => {
  assert.deepEqual(resolvePreferences("epocha_locale=fr; epocha_theme=sepia", "ko-KR"), {
    locale: "ko",
    localePreference: "auto",
    themePreference: "system",
  });
  assert.equal(readCookie("epocha_locale=%broken; irrelevant=yes", "epocha_locale"), undefined);
  assert.equal(readCookie("other=ko; epocha_locale=en", "epocha_locale"), "en");
});

test("preference cookies persist site-wide and auto locale clears the override", () => {
  const browser = { cookie: "" };
  savePreferenceCookie(browser, "epocha_theme", "dark", true);
  assert.equal(browser.cookie, "epocha_theme=dark; Path=/; Max-Age=31536000; SameSite=Lax; Secure");
  savePreferenceCookie(browser, "epocha_locale", null);
  assert.equal(browser.cookie, "epocha_locale=; Path=/; Max-Age=0; SameSite=Lax");
});

test("blocked browser storage does not prevent in-memory preference selection", () => {
  const blocked = {
    get cookie(): string {
      throw new Error("Storage blocked");
    },
    set cookie(_value: string) {
      throw new Error("Storage blocked");
    },
  };
  assert.equal(readBrowserCookies(blocked), "");
  assert.doesNotThrow(() => savePreferenceCookie(blocked, "epocha_locale", "ko"));
});
