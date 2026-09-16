import test from "node:test";
import assert from "node:assert/strict";
import {
  negotiateLocale,
  readBrowserCookies,
  readCookie,
  resolvePreferences,
  savePreferenceCookie,
} from "../src/lib/preferences.ts";
import { renderErrorPage } from "../src/lib/error-page.ts";

test("denied browser cookie access cannot prevent in-memory preference changes", () => {
  const denied = {
    get cookie(): string {
      throw new Error("Cookies blocked");
    },
    set cookie(_value: string) {
      throw new Error("Cookies blocked");
    },
  };
  assert.equal(readBrowserCookies(denied), "");
  assert.equal(resolvePreferences(readBrowserCookies(denied), "ko-KR").locale, "ko");
  let inMemoryLocale = "en";
  assert.doesNotThrow(() => {
    savePreferenceCookie(denied, "epocha_locale", "ko");
    inMemoryLocale = "ko";
    savePreferenceCookie(denied, "epocha_theme", "dark");
    savePreferenceCookie(denied, "epocha_locale", null);
  });
  assert.equal(inMemoryLocale, "ko");
});

test("manual preferences persist while automatic language removes the cookie", () => {
  const browser = { cookie: "" };
  savePreferenceCookie(browser, "epocha_locale", "ko", true);
  assert.match(
    browser.cookie,
    /^epocha_locale=ko; Path=\/; Max-Age=31536000; SameSite=Lax; Secure$/,
  );
  savePreferenceCookie(browser, "epocha_locale", null);
  assert.match(browser.cookie, /^epocha_locale=; Path=\/; Max-Age=0; SameSite=Lax$/);
});

test("minimal server fallback respects resolved language and theme", () => {
  assert.match(renderErrorPage("ko", "dark"), /<html lang="ko" data-theme="dark">/);
  assert.match(renderErrorPage("ko", "dark"), /페이지를 불러오지 못했습니다/);
  assert.match(renderErrorPage(), /<html lang="en" data-theme="system">/);
});

test("locale negotiation respects quality, regional variants, stable ties, and unsupported fallback", () => {
  assert.equal(negotiateLocale("ko-KR, en-US;q=0.8"), "ko");
  assert.equal(negotiateLocale("ko;q=0.4,en-US;q=0.9"), "en");
  assert.equal(negotiateLocale("fr-FR,ko-KR;q=0.5,en;q=0.3"), "ko");
  assert.equal(negotiateLocale("ko;q=0.8,en;q=0.8"), "ko");
  assert.equal(negotiateLocale("ja-JP,fr;q=0.9,*;q=0.5"), "en");
  assert.equal(negotiateLocale(), "en");
});

test("invalid or zero quality cannot select Korean", () => {
  for (const quality of ["0", "-1", "1.1", "bogus", "", "0.1234", "Infinity"]) {
    assert.equal(negotiateLocale(`ko;q=${quality},en;q=0.1`), "en", quality);
  }
  assert.equal(negotiateLocale("KO-kr;q=1.000,en;q=0.5"), "ko");
});

test("validated preference cookies override detection independently", () => {
  assert.deepEqual(resolvePreferences("epocha_locale=en; epocha_theme=dark", "ko-KR"), {
    locale: "en",
    localePreference: "en",
    themePreference: "dark",
  });
  assert.deepEqual(resolvePreferences("epocha_locale=ko; epocha_theme=light", "en-US"), {
    locale: "ko",
    localePreference: "ko",
    themePreference: "light",
  });
  assert.deepEqual(resolvePreferences("epocha_locale=xx; epocha_theme=invalid", "ko-KR"), {
    locale: "ko",
    localePreference: "auto",
    themePreference: "system",
  });
  assert.deepEqual(resolvePreferences(), {
    locale: "en",
    localePreference: "auto",
    themePreference: "system",
  });
});

test("malformed or similarly named cookies do not throw or override preferences", () => {
  assert.equal(readCookie("epocha_locale=%E0%A4%A", "epocha_locale"), undefined);
  assert.equal(resolvePreferences("not_epocha_locale=ko", "en").locale, "en");
  assert.equal(resolvePreferences("epocha_locale=%6bo", "en").locale, "ko");
  assert.equal(
    resolvePreferences("epocha_locale; epocha_theme=system", "en").localePreference,
    "auto",
  );
});
