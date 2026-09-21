import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, Rocket, HandHeart } from "lucide-react";
import globalBg from "@/assets/global-network-bg.jpg";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "About — EPOCHA Learning Hub",
      description:
        "EPOCHA is part of PEN Worldwide, the international network setting the benchmark for experiential, enterprise-based learning across 40+ countries.",
      path: "/about",
      ogTitle: "About EPOCHA Learning Hub",
      socialDescription:
        "We help youth move from challenges of entering the job market to thriving professionally with verified skills and real experience.",
    }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      {/* OPENING QUOTE — light mode */}
      <section className="surface-dark">
        <div className="container-x py-20 md:py-28 flex flex-col items-center text-center">
          <div className="w-16 h-[2px] bg-coral mb-8" />
          <h1 className="max-w-4xl">
            <span className="block text-2xl md:text-4xl font-bold text-foreground leading-[1.2]">
              {t("EPOCHA transforms how young people aged 14–29 leverage experiential learning,")}{" "}
              <span className="text-coral">
                {t("turning academic effort into real career momentum.")}
              </span>{" "}
              {t(
                "We give them the hands-on experience, professional connections, and confidence to thrive from day one.",
              )}
            </span>
          </h1>
        </div>
      </section>

      {/* MISSION — THE CHALLENGE */}
      <section className="surface-light">
        <div className="container-x py-20 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">
              {t("The challenge")}
            </p>
            <h2 className="mt-3 text-4xl font-bold">{t("A global employability crisis.")}</h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              {t(
                "Young talent today enters a landscape where the odds are stacked against them. Beyond high unemployment, many are stuck in 'gig' roles without security because they haven't been given the tools to prove the high-level skills employers demand.",
              )}
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              {t(
                "EPOCHA exists to change that. We help international and diverse communities of young learners move from the challenges of entering the job market to thriving, fast-tracking careers with verified skills, real experience, and a genuine edge.",
              )}
            </p>
          </div>
          <div className="grid gap-6 self-center">
            {[
              { key: "youth", label: "1.8B", l: "Youth aged 14–29 globally" },
              { key: "unemp", label: "4×", l: "Higher youth unemployment vs adults" },
              { key: "roles", label: "170M", l: "New AI-era roles by 2030" },
            ].map((s) => (
              <div
                key={s.key}
                className="rounded-2xl border border-foreground/15 bg-card p-6 flex items-center gap-6"
              >
                <div className="text-5xl font-display font-bold text-lime min-w-[120px]">
                  {t(s.label)}
                </div>
                <p className="text-foreground/80">{t(s.l)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION — APPROACH / WANT / WHO */}
      <section className="border-y border-border surface-dark">
        <div className="container-x py-20 grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Lightbulb,
              title: "Our Approach",
              desc: "We reduce youth unemployment by creating project-based practicums that connect young people aged 14-29 with opportunities they need to turn learning experiences into a career portfolio.",
            },
            {
              icon: Rocket,
              title: "What We Want",
              desc: "We create a unified ecosystem where students learn by doing, businesses access job-ready talent, institutions cultivate leaders, and organizations increase their impact together.",
            },
            {
              icon: HandHeart,
              title: "Who We Work With",
              desc: "We partner with forward-thinking organizations across education, marketing, business, social enterprise, creative industries, sustainability and environment, cultural entertainment and tourism.",
            },
          ].map((b) => (
            <div key={b.title}>
              <b.icon className="w-9 h-9 text-lime" />
              <h3 className="mt-5 text-2xl font-bold">{t(b.title)}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{t(b.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL STANDARD (moved from About) */}
      <section className="relative surface-light overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${globalBg})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/70 to-cream/90"
          aria-hidden
        />
        <div className="container-x py-24 relative">
          <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">
            {t("Global standard")}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold max-w-3xl">
            {t("Backed by a")} <span className="text-lime">{t("global network.")}</span>
          </h2>
          <p className="mt-5 text-foreground/70 max-w-2xl whitespace-pre-line">
            {t(
              "EPOCHA is part of PEN Worldwide, the international network setting the benchmark for experiential and work-based across the globe operating in 40 countries.",
            )}
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Practice Enterprise",
                q: "Our trainees don't just learn locally; they compete, collaborate, and connect on an international stage.",
                d: "We follow PEN Worldwide's Practice Enterprise ‘learning-by-doing’ concept certified by the European Training Foundation active in 90+ countries.",
                link: { label: "Visit PEN Worldwide", href: "https://penworldwide.org/" },
              },
              {
                t: "KoreaPEN Membership",
                q: "Through our association to the network, our trainees earn verified credentials they can include in their portfolio.",
                d: "We are a proud member of KoreaPEN, the Central Office for PEN Worldwide in South Korea. We empower partners to deliver evidence-based work experiences locally.",
                link: { label: "Visit KoreaPEN", href: "https://www.koreapen.org/" },
              },
              {
                t: "Events Calendar",
                d: "Discover upcoming international events, training opportunities, and global competitions across the PEN Worldwide network.",
                link: {
                  label: "View Events Calendar",
                  href: "https://penworldwide.org/events-calendar/list/",
                },
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-3xl border border-foreground/15 bg-card backdrop-blur-sm p-8"
              >
                <h3 className="text-xl font-bold">{t(c.t)}</h3>
                {c.d && <p className="mt-4 text-foreground/70 text-sm leading-relaxed">{t(c.d)}</p>}
                {c.q && <p className="mt-6 italic text-lime text-sm">"{t(c.q)}"</p>}
                {c.link && (
                  <a
                    href={c.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-lime text-sm font-medium hover:underline"
                  >
                    {t(c.link.label)} <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEN WORLDWIDE COMMUNITY — ANIMATED BANNER */}
      <section className="surface-dark border-y border-border">
        <div className="container-x py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("PEN Worldwide Community")}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto">
            {[
              { value: 30, suffix: "+", label: "Years of Experience" },
              { value: 35, suffix: "+", label: "Yearly Intl. Events" },
              { value: 40, suffix: "", label: "Member Countries" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-foreground leading-none tabular-nums">
                  {s.value.toLocaleString("en-US")}
                  {s.suffix}
                </span>
                <span className="mt-3 text-sm md:text-base text-muted-foreground">
                  {t(s.label)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 max-w-3xl mx-auto">
            {[
              { value: 7000, suffix: "+", label: "Practice Enterprises" },
              { value: 200000, suffix: "+", label: "Trainees per Year" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-foreground leading-none tabular-nums">
                  {s.value.toLocaleString("en-US")}
                  {s.suffix}
                </span>
                <span className="mt-3 text-sm md:text-base text-muted-foreground">
                  {t(s.label)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY — link to sub-page */}
      <section className="container-x py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">
            {t("Our story")}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            {t("Built on the power of")} <span className="text-lime">{t("connection")}</span>.
          </h2>
          <p className="mt-4 text-foreground/70">
            {t(
              "EPOCHA started on a shared conviction: that real growth happens when people are genuinely connected — to themselves, to each other, and to the work that matters. Every practicum, coaching session, and partnership we build is designed to turn that belief into lived experience.",
            )}
          </p>
          <Link
            to="/about/our-story"
            className="mt-8 inline-flex items-center gap-2 bg-lime text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-lime/90 transition"
          >
            {t("Read our full story")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="rounded-[2.5rem] bg-ink text-cream p-12 md:p-20 relative overflow-hidden">
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold">{t("Ready to lead what's next?")}</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/practicums"
                className="inline-flex items-center gap-2 bg-lime text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-lime/90 transition"
              >
                {t("Find your practicum")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about/sparked"
                className="inline-flex items-center gap-2 border border-cream text-cream font-medium px-6 py-3.5 rounded-full hover:bg-cream hover:text-ink transition"
              >
                {t("For organizations")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
