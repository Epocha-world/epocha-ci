import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/Logo.svg";
import { AnalyticsConsentBanner } from "@/components/AnalyticsConsentBanner";
import { PreferencesControls } from "@/components/PreferencesControls";
import { openAnalyticsSettings } from "@/lib/analytics-consent";
import { useI18n } from "@/i18n";

const columns = [
  {
    title: "Explore",
    links: [
      ["/", "Home"],
      ["/practicums", "Practicums"],
      ["/news", "News"],
      ["/about", "About"],
    ],
  },
  {
    title: "Practicums",
    links: [
      ["/practicums/hanaro", "Hanaro Practicum"],
      ["/practicums/startup-lab-camp", "Start-up Lab Camp"],
      ["/practicums/mirae-industry", "Mirae Practicum"],
      ["/practicums/startup-lab-camp/open-capstones", "Open Capstones"],
    ],
  },
  {
    title: "Connect",
    links: [
      ["/about/sparked", "Sparked!"],
      ["/grow-with-us", "Work with us"],
      ["/connect", "Let's talk"],
    ],
  },
  {
    title: "KR Legal",
    links: [
      ["/privacy", "Privacy Policy"],
      ["/terms", "Terms of Service"],
      ["/refund-policy", "Refund Policy"],
      ["/safeguarding", "Safeguarding"],
    ],
  },
];

export function Footer() {
  const { t, locale } = useI18n();
  return (
    <>
      <footer className="surface-dark border-t border-border">
        <div className="container-x grid items-start gap-12 py-16 md:grid-cols-12">
          <div className="max-w-md md:col-span-4">
            <Link to="/" className="inline-flex items-center" aria-label={t("EPOCHA home")}>
              <img
                src={logo}
                alt="EPOCHA"
                width={280}
                height={112}
                className="h-28 w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t(
                "A project-based learning hub dedicated to closing the gap between education and employability for youth aged 14–29 worldwide.",
              )}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.instagram.com/learnwithepocha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("EPOCHA on Instagram")}
                className="flex size-11 items-center justify-center rounded-full border border-border hover:text-lime"
              >
                <Instagram aria-hidden="true" className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/epocha-world/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("EPOCHA on LinkedIn")}
                className="flex size-11 items-center justify-center rounded-full border border-border hover:text-lime"
              >
                <Linkedin aria-hidden="true" className="size-5" />
              </a>
              <a
                href="https://wa.me/447801202799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm hover:text-lime"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                {t("Chat on WhatsApp")}
              </a>
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <h2 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
                {t(column.title)}
              </h2>
              <ul className="flex flex-col gap-2 text-sm">
                {column.links.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="inline-flex min-h-8 items-center hover:text-lime">
                      {t(label)}
                    </Link>
                  </li>
                ))}
                {column.title === "KR Legal" && (
                  <li>
                    <button
                      type="button"
                      onClick={openAnalyticsSettings}
                      className="min-h-8 hover:text-lime"
                    >
                      {t("Cookie settings")}
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border">
          <div className="container-x flex flex-col gap-4 py-6 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2">
              <span>{t("© 2026 EPOCHA. All rights reserved.")}</span>
              <span>
                {locale === "ko"
                  ? "에포차(EPOCHA) · 대표 Ofranc Maeva Aurelie 외 1명(박주원) · 사업자등록번호 708-53-00997"
                  : "EPOCHA · Representatives: Ofranc Maeva Aurelie and Juwon Park · Business registration 708-53-00997"}
              </span>
              <span>{t("R214, 10 Yeonmujang 11-gil, Seongdong-gu, Seoul, South Korea")}</span>
            </div>
            <PreferencesControls />
          </div>
        </div>
      </footer>
      <AnalyticsConsentBanner />
    </>
  );
}
