import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { resolvePreferences } from "./lib/preferences";

const privateHtmlMiddleware = createMiddleware().server(async ({ next }) => {
  const result = await next();
  if (result.response.headers.get("content-type")?.includes("text/html")) {
    result.response.headers.set("Cache-Control", "private, no-store");
    const vary = new Set(
      (result.response.headers.get("Vary") ?? "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean),
    );
    vary.add("Cookie");
    vary.add("Accept-Language");
    result.response.headers.set("Vary", [...vary].join(", "));
  }
  return result;
});

const errorMiddleware = createMiddleware().server(async ({ next, request }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    const preferences = resolvePreferences(
      request.headers.get("cookie") ?? "",
      request.headers.get("accept-language") ?? "",
    );
    return new Response(renderErrorPage(preferences.locale, preferences.themePreference), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "private, no-store" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, privateHtmlMiddleware],
}));
