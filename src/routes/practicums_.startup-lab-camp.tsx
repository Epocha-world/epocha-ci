import { useI18n } from "@/i18n";
import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/practicums_/startup-lab-camp")({
  component: StartupLabCampLayout,
});

const base = "/practicums/startup-lab-camp";
const menus = [
  {
    label: "Practicum",
    prefix: `${base}/practicum`,
    items: [
      { label: "Leadership tracks", to: `${base}/practicum/leadership-tracks` },
      { label: "Coaching program", to: `${base}/practicum/coaching-program` },
      { label: "Live opportunities", to: `${base}/practicum/live-opportunities` },
    ],
  },
  {
    label: "How it works",
    prefix: `${base}/how-it-works`,
    items: [
      { label: "Admissions", to: `${base}/how-it-works/admissions` },
      { label: "Fees and funding", to: `${base}/how-it-works/fees-and-funding` },
      { label: "FAQ", to: `${base}/how-it-works/faq` },
    ],
  },
  {
    label: "Sparked!",
    prefix: `${base}/sparked`,
    items: [
      { label: "Overview", to: `${base}/sparked` },
      { label: "Become a sponsor", to: `${base}/sparked/become-a-sponsor` },
      { label: "Volunteer with us", to: `${base}/sparked/volunteer-with-us` },
      { label: "News", to: `${base}/sparked/news` },
    ],
  },
];

function StartupLabCampLayout() {
  const { t } = useI18n();
  const [open, setOpen] = useState<string | null>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <>
      <nav
        aria-label={t("Start-up Lab Camp")}
        className="relative z-30 border-b border-border bg-card text-foreground"
      >
        <div className="container-x flex flex-wrap items-center gap-x-5 gap-y-2 py-3 md:gap-x-8">
          <Link
            to={base}
            onClick={() => setOpen(null)}
            className="mr-1 py-2 text-sm font-bold text-foreground md:mr-3 md:border-r md:border-border md:pr-6"
          >
            {t("Start-up Lab Camp")}
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-7">
            {menus.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget))
                    setOpen((current) => (current === menu.label ? null : current));
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setOpen(null);
                    event.currentTarget.querySelector("button")?.focus();
                  }
                }}
              >
                <button
                  type="button"
                  aria-expanded={open === menu.label}
                  aria-controls={`camp-menu-${menu.label.replaceAll(" ", "-")}`}
                  className="flex min-h-11 items-center gap-1.5 rounded-sm py-2 text-sm transition-colors hover:text-brand-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  style={{
                    color: pathname.startsWith(menu.prefix) ? "var(--brand-accent)" : undefined,
                  }}
                  onClick={() => setOpen((current) => (current === menu.label ? null : menu.label))}
                >
                  {t(menu.label)}
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-4 transition-transform ${open === menu.label ? "rotate-180" : ""}`}
                  />
                </button>
                {open === menu.label && (
                  <div
                    id={`camp-menu-${menu.label.replaceAll(" ", "-")}`}
                    className={`absolute top-full min-w-52 overflow-hidden border border-border bg-card py-2 shadow-xl sm:right-auto sm:left-0 ${menu.label === "Sparked!" ? "right-0" : "left-0"}`}
                  >
                    {menu.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        activeOptions={{ exact: true }}
                        onClick={() => setOpen(null)}
                        className="block px-5 py-3 text-sm hover:bg-muted hover:text-brand-accent focus-visible:bg-muted focus-visible:outline-none"
                        activeProps={{ className: "bg-muted text-brand-accent" }}
                      >
                        {t(item.label)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
