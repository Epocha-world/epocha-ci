import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/practicums_/startup-lab-camp")({ component: CampLayout });
function CampLayout() {
  const { t } = useI18n();
  const item =
    "block rounded-full px-4 py-3 text-sm font-semibold hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
  return (
    <>
      <nav
        aria-label={t("Start-up Lab Camp navigation")}
        className="relative z-20 border-b border-border bg-background text-foreground"
      >
        <div className="container-x flex flex-wrap items-center gap-1 py-3">
          <Link
            to="/practicums/startup-lab-camp"
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-lime text-ink" }}
            className={item}
          >
            {t("Overview")}
          </Link>
          <details
            className="group relative"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.currentTarget.removeAttribute("open");
                event.currentTarget.querySelector("summary")?.focus();
              }
            }}
          >
            <summary className={item + " flex cursor-pointer list-none items-center gap-2"}>
              {t("Practicum")}
              <ChevronDown className="size-4 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div
              className="absolute left-0 top-full z-30 min-w-56 rounded-2xl border border-border bg-background p-2 shadow-lg"
              onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
            >
              <Link
                to="/practicums/startup-lab-camp/practicum/leadership-tracks"
                activeProps={{ className: "bg-lime text-ink" }}
                className={item}
              >
                {t("Leadership tracks")}
              </Link>
              <Link
                to="/practicums/startup-lab-camp/practicum/coaching-program"
                activeProps={{ className: "bg-lime text-ink" }}
                className={item}
              >
                {t("Coaching program")}
              </Link>
            </div>
          </details>
          <Link
            to="/practicums/startup-lab-camp/how-it-works"
            activeProps={{ className: "bg-lime text-ink" }}
            className={item}
          >
            {t("How it works")}
          </Link>
          <Link
            to="/practicums/startup-lab-camp/open-capstones"
            activeProps={{ className: "bg-lime text-ink" }}
            className={item}
          >
            {t("Open capstones")}
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
