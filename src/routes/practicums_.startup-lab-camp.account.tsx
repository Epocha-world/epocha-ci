import { translate } from "@/i18n/resources";
import { useI18n } from "@/i18n";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { safeCampReturnTo } from "@/lib/camp-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/practicums_/startup-lab-camp/account")({
  head: ({ match }) => ({
    meta: [
      {
        title: translate(
          match.context.preferences.locale,
          "Free account — Start-up Lab Camp — EPOCHA",
        ),
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    returnTo: safeCampReturnTo(search.returnTo),
  }),
  component: CampAccountPage,
});

function CampAccountPage() {
  const { t } = useI18n();
  const { returnTo } = Route.useSearch();
  const [mode, setMode] = useState<"login" | "register">("register");
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/camp-auth", { signal: controller.signal, cache: "no-store" })
      .then(async (result) => {
        const data = await result.json();
        if (!result.ok) throw new Error(data.error || "Unable to check your account.");
        setUser(data.user);
      })
      .catch((failure) => {
        if (!controller.signal.aborted)
          setError(failure.message || "Unable to check your account.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    try {
      const result = await fetch("/api/camp-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          user
            ? { action: "logout" }
            : { action: mode, email: form.get("email"), password: form.get("password") },
        ),
      });
      const data = await result.json();
      if (!result.ok) throw new Error(data.error || "Unable to update your account.");
      setUser(data.user);
      if (data.user) window.location.assign(returnTo);
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "Unable to connect. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container-x max-w-xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {t("Start-up Lab Camp")}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {user
            ? t("Your free account")
            : mode === "register"
              ? t("Create your free account")
              : t("Welcome back")}
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {t("Explore the full details behind our capstone projects with a free account.")}
        </p>
        {loading ? (
          <p className="mt-8" role="status">
            {t("Checking your account…")}
          </p>
        ) : (
          <form onSubmit={submit} className="ds-card mt-8 flex flex-col gap-5 p-6 sm:p-8">
            {user ? (
              <>
                <p>
                  {t("Signed in as")} <strong>{user.email}</strong>.
                </p>
                <Button asChild>
                  <a href={returnTo}>{t("Continue to capstones")}</a>
                </Button>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="camp-identity" className="block text-sm font-semibold">
                    {t("Email or username")}
                  </label>
                  <Input
                    id="camp-identity"
                    name="email"
                    type="text"
                    autoComplete="username"
                    required
                    maxLength={254}
                    disabled={busy}
                    className="mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="camp-password" className="block text-sm font-semibold">
                    {t("Password")}
                  </label>
                  <Input
                    id="camp-password"
                    name="password"
                    type="password"
                    autoComplete={mode === "register" ? "new-password" : "current-password"}
                    required
                    minLength={12}
                    maxLength={128}
                    disabled={busy}
                    aria-describedby="camp-password-help"
                    className="mt-2"
                  />
                  <p id="camp-password-help" className="mt-2 text-xs text-muted-foreground">
                    {t("Use 12–128 characters.")}
                  </p>
                </div>
              </>
            )}
            {error && (
              <p role="alert" className="text-sm text-destructive">
                {t(error)}
              </p>
            )}
            <Button type="submit" disabled={busy} className="w-full">
              {busy
                ? t("Please wait…")
                : user
                  ? t("Sign out")
                  : mode === "register"
                    ? t("Create free account")
                    : t("Sign in")}
            </Button>
            {!user && (
              <Button
                type="button"
                disabled={busy}
                variant="ghost"
                onClick={() => {
                  setMode(mode === "register" ? "login" : "register");
                  setError("");
                }}
                className="w-full"
              >
                {mode === "register"
                  ? t("Already have an account? Sign in")
                  : t("New here? Create a free account")}
              </Button>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
