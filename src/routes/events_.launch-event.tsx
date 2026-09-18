import { createFileRoute, Link } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { useI18n } from "@/i18n";

const goneMiddleware = createMiddleware().server(async ({ next }) => {
  const result = await next();
  return new Response(result.response.body, {
    status: 410,
    statusText: "Gone",
    headers: result.response.headers,
  });
});

export const Route = createFileRoute("/events_/launch-event")({
  head: () => ({
    meta: [{ title: "Page removed — EPOCHA" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  server: {
    middleware: [goneMiddleware],
  },
  component: RemovedEventPage,
});

function RemovedEventPage() {
  const { t } = useI18n();
  return (
    <section className="container-x py-24 md:py-32">
      <p className="text-sm font-semibold text-muted-foreground">410</p>
      <h1 className="mt-4 text-4xl md:text-6xl font-bold">{t("This page has been removed.")}</h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/75">
        {t(
          "The launch event page is no longer available. Visit News for published updates from EPOCHA.",
        )}
      </p>
      <Link to="/news" className="btn-primary mt-8 inline-flex">
        {t("Visit News")}
      </Link>
    </section>
  );
}
