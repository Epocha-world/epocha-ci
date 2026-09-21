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
              {column.title === "Connect" && (
                <div className="mt-4 flex items-center gap-2">
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
                    aria-label={t("WhatsApp")}
                    className="flex size-11 items-center justify-center rounded-full border border-border hover:text-lime"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              )}
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
