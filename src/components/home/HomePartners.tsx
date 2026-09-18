import { ArrowRight, Building2, GraduationCap, HandHeart, Handshake, Gift } from "lucide-react";
import { useI18n } from "@/i18n";
import logoQualitax from "@/assets/logos/qualitax.svg";
import logoKoreaPen from "@/assets/logos/koreapen.png";
import logoPenWw from "@/assets/logos/pen-worldwide.png";
import logoCandon from "@/assets/logos/candon-youth.jpg";

const partners = [
  {
    icon: Building2,
    title: "Businesses",
    desc: "Get real work done by motivated student teams. Strengthen your employer brand while supporting youth employability.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    desc: "Turn classroom learning into active leadership. Your students graduate career-ready with workplace experience already behind them.",
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
    icon: HandHeart,
    desc: "Give a career talk or become a mentor and share your professional journey with the next generation.",
    label: "Volunteer with us",
    href: "/about/sparked#volunteer",
  },
  {
    icon: Gift,
    desc: "Share rewards and practical resources to help young people launch their careers - including toolkits, networking events, educational programs, career opportunities or stipends.",
    label: "Give and share",
    href: "/about/sparked#give-and-share",
  },
];
const logos = [
  { src: logoQualitax, alt: "QualitaX", href: "https://www.qualitax.io/" },
  { src: logoKoreaPen, alt: "Korea PEN", href: "https://koreapen.org/" },
  { src: logoPenWw, alt: "PEN Worldwide", href: "https://penworldwide.org/" },
  { src: logoCandon, alt: "Candon Youth for Empowerment Movement, Inc.", href: undefined },
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
          <div className="mt-12 grid gap-6 border-t border-ink/15 pt-10 md:grid-cols-2 md:items-center">
            <h3 className="text-3xl font-bold">{t("Let's build something together.")}</h3>
            <div>
              <p className="text-ink/75 leading-relaxed">
                {t(
                  "Reach out to discuss how a customized EPOCHA practicum can deliver value for your organization and the next generation of leaders.",
                )}
              </p>
              <a href="/connect" className="btn-primary mt-5">
                {t("Start the conversation")} <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
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
      <section className="container-x py-16">
        <div className="flex items-center gap-3">
          <Handshake className="size-5" aria-hidden="true" />
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">
            {t("Who we work with")}
          </h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white py-10">
          <div className="marquee-track gap-16 pr-16 motion-reduce:animate-none motion-reduce:w-full motion-reduce:justify-center motion-reduce:pr-0 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
            {[0, 1].map((duplicate) => (
              <div
                key={duplicate}
                aria-hidden={duplicate === 1 ? true : undefined}
                className={`flex items-center gap-16 shrink-0 ${duplicate ? "motion-reduce:hidden" : "motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8 motion-reduce:shrink motion-reduce:px-6"}`}
              >
                {logos.map((logo) =>
                  logo.href ? (
                    <a
                      key={logo.alt}
                      href={logo.href}
                      tabIndex={duplicate ? -1 : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <img
                        src={logo.src}
                        alt={duplicate ? "" : logo.alt}
                        className="h-16 max-w-52 object-contain"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img
                      key={logo.alt}
                      src={logo.src}
                      alt={duplicate ? "" : logo.alt}
                      className="h-20 w-20 object-contain"
                      loading="lazy"
                    />
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
