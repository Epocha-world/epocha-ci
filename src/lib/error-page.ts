import type { Locale, ThemePreference } from "./preferences";

export function renderErrorPage(locale: Locale = "en", theme: ThemePreference = "system"): string {
  const title = locale === "ko" ? "페이지를 불러오지 못했습니다" : "This page didn't load";
  const description =
    locale === "ko"
      ? "오류가 발생했습니다. 다시 시도하거나 홈으로 이동해 주세요."
      : "Something went wrong on our end. You can try refreshing or head back home.";
  return `<!doctype html>
<html lang="${locale}" data-theme="${theme}">
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light; --background: #f7f5ef; --foreground: #191a17; --muted: #666b61; }
      html[data-theme="dark"] { color-scheme: dark; --background: #151714; --foreground: #f5f5ef; --muted: #aaafa5; }
      @media (prefers-color-scheme: dark) { html[data-theme="system"] { color-scheme: dark; --background: #151714; --foreground: #f5f5ef; --muted: #aaafa5; } }
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: var(--background); color: var(--foreground); display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; box-sizing: border-box; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: var(--muted); margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #ffd21f; color: #191a17; }
      .secondary { background: var(--background); color: var(--foreground); border-color: var(--muted); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>${title}</h1>
      <p>${description}</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">${locale === "ko" ? "다시 시도" : "Try again"}</button>
        <a class="secondary" href="/">${locale === "ko" ? "홈으로" : "Go home"}</a>
      </div>
    </div>
  </body>
</html>`;
}
