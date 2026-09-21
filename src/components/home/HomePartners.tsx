import { PartnerLogoBanner } from "@/components/PartnerLogoBanner";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HandHeart,
  Handshake,
  Gift,
  Megaphone,
} from "lucide-react";
import { useI18n } from "@/i18n";

const partners = [
  {
    icon: Building2,
    title: "Businesses",
    desc: "Get real work done by motivated student teams. Strengthen your employer brand while supporting youth employability.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    desc: "Turn classroom learning into active leadership. Your students graduate career-ready with workplace experience.",
  },
  {
    icon: HandHeart,
    title: "Non-profits",
    desc: "Mobilize passionate young talent ready to contribute to your mission and grow as leaders.",
  },
];
const opportunities = [
  {
    icon: Handshake,
    desc: "Partner with us as a company: open a capstone project, host a trainee on a micro placement, or arrange a corporate visit.",
    label: "Become a sponsor",
    href: "/about/sparked#sponsor",
  },
  {
    icon: Megaphone,
    desc: "Give a career talk or become a mentor and share your professional journey with the next generation.",
    label: "Volunteer with us",
    href: "/about/sparked#volunteer",
  },
  {
    icon: Gift,
    desc: "Share rewards and practical resources to help young people launch their careers (toolkits, events, programs, opportunities or stipends.",
    label: "Give and share",
    href: "/about/sparked#give-and-share",
  },
];

export function HomePartners() {
  const { t } = useI18n();
  return (
    <>
      <section id="partner-with-us" className="surface-light scroll-mt-28 bg-cream text-ink">
        <div className="container-x py-20 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">{t("Partner with us")}</p>
          <h2 className="mt-4 max-w-4xl text-4xl md:text-6xl font-bold leading-[1.05]">
            {t("Engage the next generation of leaders.")}
          </h2>
          <p className="mt-6 text-lg text-ink/75 max-w-2xl">
            {t(
              "Build a career-ready talent pipeline tailored to your needs. Help create a unified ecosystem where students learn by doing, institutions cultivate future talent, and organizations increase their impact.",
            )}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {partners.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-3xl bg-ink text-cream p-8">
                <Icon className="size-9 text-lime" aria-hidden="true" />
                <h3 className="mt-6 text-2xl font-bold">{t(title)}</h3>
                <p className="mt-3 text-cream/75 leading-relaxed">{t(desc)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink text-cream">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-lime">
            {t("Get involved")}
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-3xl">
            {t("Help us shape the future of work with Sparked!")}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {opportunities.map(({ icon: Icon, desc, label, href }) => (
              <div
                key={label}
                className="rounded-3xl border border-cream/15 bg-white/5 p-8 flex flex-col"
              >
                <div className="mb-6 w-12 h-12 rounded-2xl bg-lime text-ink grid place-items-center">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <p className="leading-relaxed text-cream/85 flex-1">{t(desc)}</p>
                <a href={href} className="btn-primary mt-7 self-start">
                  {t(label)} <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
          <a
            href="/news?category=sparked"
            className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-lime underline underline-offset-4"
          >
            {t("Read Sparked! news")} <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <PartnerLogoBanner />
    </>
  );
}
