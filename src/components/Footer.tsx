import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { PreferencesControls } from "@/components/PreferencesControls";
import { AnalyticsConsentBanner } from "@/components/AnalyticsConsentBanner";
import { openAnalyticsSettings } from "@/lib/analytics-consent";
import { useI18n } from "@/i18n";

const columns = [
  {
    title: "Explore",
    links: [
      ["/practicums", "Programs"],
      ["/about", "Our approach"],
      ["/about/our-story", "Our story"],
      ["/events", "Events"],
    ],
  },
  {
    title: "Your next step",
    links: [
      ["/practicums/startup-lab-camp", "Start-up Lab Camp"],
      ["/practicums/hanaro", "Hanaro Practicum"],
      ["/practicums/mirae-industry", "Mirae Practicum"],
      ["/practicums/startup-lab-camp/practicum/live-opportunities", "Open capstones"],
      ["/practicums/startup-lab-camp/account", "Your account"],
    ],
  },
  {
    title: "Together",
    links: [
      ["/about/partnerships", "Partner with us"],
      ["/grow-with-us", "Grow with us"],
      ["/connect", "Let's talk"],
    ],
  },
] as const;

export function Footer() {
  const { t, locale } = useI18n();
  return (
    <>
      <footer className="border-t border-border bg-secondary/45">
        <div className="container-x grid items-start gap-12 py-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 lg:py-20">
          <div className="max-w-sm lg:col-span-2">
            <Link to="/" aria-label={t("EPOCHA home")} className="inline-block rounded-sm">
              <BrandLogo />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
              {t(
                "A project-based learning hub connecting education and real-world experience for young people aged 14–29.",
              )}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                className="social-link"
                href="https://www.instagram.com/learnwithepocha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("EPOCHA on Instagram")}
              >
                <Instagram aria-hidden="true" className="size-5" />
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/company/epocha-world/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("EPOCHA on LinkedIn")}
              >
                <Linkedin aria-hidden="true" className="size-5" />
              </a>
              <a
                href="https://wa.me/447801202799"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4"
              >
                {t("Chat on WhatsApp")}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold">{t(column.title)}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map(([to, label]) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="inline-flex min-h-8 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t(label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container-x border-t border-border py-7">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              {[
                ["/privacy", "Privacy Policy"],
                ["/terms", "Terms of Service"],
                ["/refund-policy", "Refund Policy"],
                ["/safeguarding", "Safeguarding"],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="py-2 hover:text-foreground">
                  {t(label)}
                </Link>
              ))}
              <button
                type="button"
                onClick={openAnalyticsSettings}
                className="py-2 text-left hover:text-foreground"
              >
                {t("Cookie settings")}
              </button>
            </div>
            <PreferencesControls compact />
          </div>
          <div className="mt-6 flex flex-col gap-2 text-xs leading-5 text-muted-foreground">
            <span>{t("© 2026 EPOCHA. All rights reserved.")}</span>
            <span>
              {locale === "ko"
                ? "에포차(EPOCHA) · 대표 Ofranc Maeva Aurelie 외 1명(박주원) · 사업자등록번호 708-53-00997"
                : "EPOCHA · Representatives: Ofranc Maeva Aurelie and Juwon Park · Business registration 708-53-00997"}
            </span>
            <span>{t("R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, South Korea")}</span>
          </div>
        </div>
      </footer>
      <AnalyticsConsentBanner />
    </>
  );
}
