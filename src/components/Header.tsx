import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { PreferencesControls } from "@/components/PreferencesControls";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useI18n } from "@/i18n";

const groups = [
  {
    label: "Programs",
    children: [
      { to: "/practicums", label: "Explore all programs" },
      { to: "/practicums/startup-lab-camp", label: "Start-up Lab Camp" },
      { to: "/practicums/hanaro", label: "Hanaro Leadership Practicum" },
      { to: "/practicums/mirae-industry", label: "Mirae Industry Practicum" },
    ],
  },
  {
    label: "About",
    children: [
      { to: "/about", label: "Our approach" },
      { to: "/about/our-story", label: "Our story" },
      { to: "/about/partnerships", label: "Partnerships" },
      { to: "/grow-with-us", label: "Grow with us" },
    ],
  },
] as const;

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-lg">
      <div className="container-x flex h-20 items-center justify-between gap-4 lg:h-24">
        <Link to="/" aria-label={t("EPOCHA home")} className="shrink-0 rounded-sm">
          <BrandLogo />
        </Link>
        <nav
          aria-label={t("Main navigation")}
          className="hidden items-center gap-2 xl:gap-5 lg:flex"
        >
          {groups.map((group) => (
            <DropdownMenu key={group.label}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  {t(group.label)}
                  <ChevronDown aria-hidden="true" data-icon="inline-end" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={16} className="min-w-64 p-2">
                <DropdownMenuGroup>
                  {group.children.map((item) => (
                    <DropdownMenuItem key={item.to} asChild>
                      <Link
                        to={item.to}
                        className="min-h-11"
                        activeProps={{ className: "bg-accent font-semibold" }}
                      >
                        {t(item.label)}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          <Link to="/events" className="nav-link" activeProps={{ className: "nav-link-active" }}>
            {t("Events")}
          </Link>
          <Link to="/connect" className="nav-link" activeProps={{ className: "nav-link-active" }}>
            {t("Connect")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <PreferencesControls compact />
          <Link to="/practicums" className="btn-primary hidden xl:inline-flex">
            {t("Find your program")}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label={t("Open menu")}
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[min(92vw,420px)] flex-col overflow-y-auto"
            >
              <SheetTitle>{t("Explore EPOCHA")}</SheetTitle>
              <SheetDescription>{t("Real experience starts here.")}</SheetDescription>
              <nav aria-label={t("Mobile navigation")} className="mt-3 flex flex-col gap-6">
                {groups.map((group) => (
                  <div key={group.label} className="flex flex-col gap-1">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {t(group.label)}
                    </p>
                    {group.children.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="flex min-h-11 items-center justify-between gap-3 border-b border-border py-3 text-base"
                        activeProps={{ className: "font-semibold text-brand-accent" }}
                      >
                        {t(item.label)}
                        <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <Link to="/events" onClick={() => setOpen(false)} className="nav-link">
                    {t("Events")}
                  </Link>
                  <Link to="/connect" onClick={() => setOpen(false)} className="nav-link">
                    {t("Connect")}
                  </Link>
                  <Link
                    to="/practicums/startup-lab-camp/account"
                    search={{
                      returnTo: "/practicums/startup-lab-camp/practicum/live-opportunities",
                    }}
                    onClick={() => setOpen(false)}
                    className="nav-link"
                  >
                    {t("Your account")}
                  </Link>
                </div>
              </nav>
              <div className="mt-auto border-t border-border pt-5">
                <PreferencesControls />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
