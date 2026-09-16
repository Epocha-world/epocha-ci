import { translate } from "@/i18n/resources";
import { useI18n } from "@/i18n";
import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { CampCapstone } from "@/lib/camp-capstones";

export const Route = createFileRoute("/practicums_/startup-lab-camp/capstones/$capstoneId")({
  head: ({ match }) => ({
    meta: [
      {
        title: translate(
          match.context.preferences.locale,
          "Capstone details — Start-up Lab Camp — EPOCHA",
        ),
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CapstoneDetails,
});

type DetailState =
  | { status: "loading" }
  | { status: "unauthenticated" }
  | { status: "error"; message: string }
  | { status: "ready"; capstone: CampCapstone; applicationUrl: string };

function CapstoneDetails() {
  const { t } = useI18n();
  const { capstoneId } = Route.useParams();
  const [state, setState] = useState<DetailState>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading" });
    fetch(`/api/camp-capstones/${encodeURIComponent(capstoneId)}`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then(async (response) => {
        if (response.status === 401) {
          setState({ status: "unauthenticated" });
          return;
        }
        if (!response.ok)
          throw new Error(
            response.status === 404
              ? "This capstone could not be found."
              : "We couldn't load this capstone. Please try again.",
          );
        const data = await response.json();
        setState({ status: "ready", capstone: data.capstone, applicationUrl: data.applicationUrl });
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted)
          setState({
            status: "error",
            message: error instanceof Error ? error.message : "Unable to load capstone.",
          });
      });
    return () => controller.abort();
  }, [capstoneId, attempt]);

  const returnTo = `/practicums/startup-lab-camp/capstones/${encodeURIComponent(capstoneId)}`;
  return (
    <section className="bg-background text-foreground">
      <div className="container-x py-14 md:py-20">
        <a
          href="/practicums/startup-lab-camp/practicum/live-opportunities"
          className="text-sm font-semibold underline underline-offset-4"
        >
          {t("Back to live opportunities")}
        </a>
        {state.status === "loading" && (
          <p className="mt-10" role="status">
            {t("Loading capstone details…")}
          </p>
        )}
        {state.status === "unauthenticated" && (
          <div className="mt-10 max-w-2xl border border-border bg-card p-8">
            <h1 className="text-3xl font-bold">{t("View capstone details")}</h1>
            <p className="mt-5 leading-relaxed">
              {t(
                "Create a free account or sign in to explore this capstone and register your interest.",
              )}
            </p>
            <a
              href={`/practicums/startup-lab-camp/account?returnTo=${encodeURIComponent(returnTo)}`}
              className="mt-7 inline-flex rounded-full bg-lime px-6 py-3 font-semibold text-ink"
            >
              {t("Create a free account / Sign in")}
            </a>
          </div>
        )}
        {state.status === "error" && (
          <div className="mt-10" role="alert">
            <h1 className="text-3xl font-bold">{t("Capstone unavailable")}</h1>
            <p className="mt-4">{t(state.message)}</p>
            <button
              type="button"
              onClick={() => setAttempt((value) => value + 1)}
              className="mt-6 rounded-full bg-lime px-6 py-3 font-semibold text-ink"
            >
              {t("Try again")}
            </button>
          </div>
        )}
        {state.status === "ready" && (
          <article className="mt-10 max-w-4xl border border-border bg-card p-6 md:p-10">
            <a
              href={`/practicums/startup-lab-camp/account?returnTo=${encodeURIComponent(returnTo)}`}
              className="mb-6 inline-block text-sm font-semibold underline underline-offset-4"
            >
              {t("My account")}
            </a>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {t(state.capstone.category)} · {t(state.capstone.track)} {t("track")}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              {t(state.capstone.title)}
            </h1>
            <p className="mt-5 text-xl font-medium">{t(state.capstone.partner)}</p>
            <h2 className="mt-10 text-2xl font-bold">{t("Project brief")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {t(state.capstone.summary)}
            </p>
            <h2 className="mt-9 text-2xl font-bold">{t("Skills")}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {state.capstone.skills.map((skill) => (
                <li key={skill} className="rounded-full border border-border px-4 py-2">
                  {t(skill)}
                </li>
              ))}
            </ul>
            <dl className="mt-9 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
              <div>
                <dt className="font-semibold">{t("Track")}</dt>
                <dd className="mt-2">{t(state.capstone.track)}</dd>
              </div>
              <div>
                <dt className="font-semibold">{t("Format")}</dt>
                <dd className="mt-2">{t(state.capstone.format)}</dd>
              </div>
              <div>
                <dt className="font-semibold">{t("Location")}</dt>
                <dd className="mt-2">{t(state.capstone.location)}</dd>
              </div>
            </dl>
            <a
              href={state.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full bg-lime px-7 py-4 font-semibold text-ink"
            >
              {t("Register your interest")}
            </a>
          </article>
        )}
      </div>
    </section>
  );
}
