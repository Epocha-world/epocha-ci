import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/Logo.svg";
import { PreferencesControls } from "@/components/PreferencesControls";
import { useI18n } from "@/i18n";

interface NavItem {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
}

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/practicums",
    label: "Practicums",
    children: [
      { to: "/practicums/hanaro", label: "Hanaro Leadership Practicum" },
      { to: "/practicums/startup-lab-camp", label: "Start-up Lab Camp" },
      { to: "/practicums/mirae-industry", label: "Mirae Industry Practicum" },
    ],
  },
  { to: "/news", label: "News" },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about/our-story", label: "Our Story" },
      { to: "/about/sparked", label: "Sparked!" },
      { to: "/grow-with-us", label: "Work with us" },
      { to: "/connect", label: "Contact Us" },
    ],
  },
];

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const close = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="surface-dark sticky top-0 z-50 border-b border-border bg-ink/95 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between gap-3">
        <Link
          to="/"
          onClick={close}
          className="flex shrink-0 items-center"
          aria-label={t("EPOCHA home")}
        >
          <img
            src={logo}
            alt="EPOCHA"
            width={140}
            height={56}
            className="h-14 w-auto max-[360px]:max-w-24"
          />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label={t("Main navigation")}>
          {nav.map((item) => (
            <div
              key={item.to}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null);
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  event.stopPropagation();
                  setOpenDropdown(null);
                  event.currentTarget.querySelector("button")?.focus();
                }
              }}
            >
              <div className="flex items-center">
                <Link
                  to={item.to}
                  onClick={close}
                  className="py-3 text-sm text-foreground/85 transition-colors hover:text-lime"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-lime" }}
                >
                  {t(item.label)}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    className="flex size-10 items-center justify-center rounded-md hover:bg-secondary"
                    aria-label={t("Toggle {{name}} menu", { name: t(item.label) })}
                    aria-expanded={openDropdown === item.label}
                    aria-controls={`desktop-${item.label}`}
                    onClick={() =>
                      setOpenDropdown((value) => (value === item.label ? null : item.label))
                    }
                  >
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </button>
                )}
              </div>
              {item.children && openDropdown === item.label && (
                <div id={`desktop-${item.label}`} className="absolute left-0 top-full w-64 pt-2">
                  <ul className="overflow-hidden rounded-xl border border-border bg-popover py-2 shadow-xl">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          onClick={close}
                          className="block px-4 py-3 text-sm text-popover-foreground hover:bg-secondary hover:text-lime"
                          activeProps={{ className: "text-lime" }}
                        >
                          {t(child.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-3">
          <PreferencesControls compact />
          <Link
            to="/practicums"
            hash="choose-your-practicum"
            className="btn-primary hidden text-sm xl:inline-flex"
          >
            {t("Explore practicums")}
          </Link>
          <button
            ref={menuButton}
            type="button"
            onClick={() => {
              setOpen(!open);
              setOpenDropdown(null);
            }}
            className="flex size-11 items-center justify-center rounded-lg lg:hidden"
            aria-label={t(open ? "Close menu" : "Open menu")}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border lg:hidden"
          aria-label={t("Mobile navigation")}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              close();
              menuButton.current?.focus();
            }
          }}
        >
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <div key={item.to}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    onClick={close}
                    className="flex-1 py-3 text-foreground hover:text-lime"
                  >
                    {t(item.label)}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      className="flex size-11 items-center justify-center"
                      aria-label={t("Toggle {{name}} menu", { name: t(item.label) })}
                      aria-expanded={openDropdown === item.label}
                      aria-controls={`mobile-${item.label}`}
                      onClick={() =>
                        setOpenDropdown((value) => (value === item.label ? null : item.label))
                      }
                    >
                      <ChevronDown aria-hidden="true" className="size-4" />
                    </button>
                  )}
                </div>
                {item.children && openDropdown === item.label && (
                  <ul id={`mobile-${item.label}`} className="mb-2 border-l border-border pl-4">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          onClick={close}
                          className="block py-3 text-sm text-foreground/85 hover:text-lime"
                        >
                          {t(child.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
