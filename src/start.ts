import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

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

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "private, no-store" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, privateHtmlMiddleware],
}));
