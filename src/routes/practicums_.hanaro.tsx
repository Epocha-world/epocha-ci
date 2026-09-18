import { useI18n } from "@/i18n";
import student from "@/assets/student.jpg";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Bot,
  Briefcase,
  Compass,
  FileBadge,
  Globe,
  Heart,
  MapPin,
  Network,
  Target,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/hanaro")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Hanaro Practicum — EPOCHA",
      description:
        "Hanaro Creative Arts Practicum — complete a supported capstone project and build career-ready experience.",
      path: "/practicums/hanaro",
      image: student,
      socialDescription:
        "Complete a Creative Arts capstone project with expert guidance and career coaching.",
    }),
  component: HanaroPage,
});

function HanaroPage() {
  const { t } = useI18n();
  return (
    <>
      {/* Section 1 — LIGHT */}
      <section className="bg-background text-foreground">
        <div className="container-x pt-20 pb-16">
          <h1 className="text-6xl font-bold leading-[0.95] md:text-9xl">{t("Hanaro")}</h1>
          <p className="mt-8 text-lg text-foreground/80 max-w-2xl leading-relaxed">
            {t(
              "As an Hanaro leader, you will work directly alongside NGOs and charities too address current social issues in your community. You will play an active role in planning and running advocacy campaigns, building partnerships, and championing a cause that genuinely matters to you. Along the way, you will develop practical skills in event organizing, project management, and public advocacy, all while creating tangible impact on the ground.",
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Users, label: "Ages 19–29" },
              { icon: Award, label: "All degrees welcome" },
              { icon: MapPin, label: "Multiple locations" },
            ].map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-sm text-foreground/80"
              >
                <p.icon className="w-4 h-4" /> {t(p.label)}
              </span>
            ))}
          </div>
          <a
            href="https://forms.gle/sKxTLz7F79wnDsno6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex mt-10"
          >
            {t("Share your interest")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Section 2 — LIGHT · Creative Arts banner */}
      <section
        aria-label={t("Creative Arts practicum")}
        className="border-y border-border bg-background text-foreground"
      >
        <div className="container-x py-10">
          <div className="relative overflow-hidden rounded-3xl border border-cream/15 surface-dark bg-ink p-8 text-cream shadow-sm md:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-lime/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-32 right-24 h-72 w-72 rounded-full border border-lime/25"
            />
            <div className="relative z-10 max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
                {t("Registration open")}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "AI & socio-cultural project",
                  "Live online workshops & training",
                  "Group & 1-to-1 career coaching",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink"
                  >
                    {t(item)}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-5xl font-bold leading-[0.9] md:text-7xl">
                    {t("Creative")} <span className="text-lime">{t("Arts")}</span>
                  </h2>
                  <p className="mt-4 max-w-md text-lg leading-snug text-cream/75">
                    {t("Visual, Performing, Literary, and Media Arts")}
                  </p>
                  <p className="mt-8 font-semibold text-cream">{t("Capstone project on campus")}</p>
                  <a
                    href="/practicums/hanaro-marketing/voices-in-motion"
                    className="btn-primary mt-4 inline-flex"
                  >
                    {t("Learn more")} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
                <div className="max-w-sm rounded-2xl border border-lime/30 surface-light bg-cream p-5 text-ink">
                  <p className="font-bold">{t("Interested in a career in Asia?")}</p>
                  <p className="mt-1 text-sm leading-relaxed">
                    {t(
                      "Enhance your employability and build your portfolio with Hanaro - Voices in Motion",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — DARK · What you'll gain */}
      <section
        id="what-youll-gain"
        className="surface-dark bg-ink text-cream border-t border-cream/15"
      >
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-lime">
            {t("What you'll gain")}
          </p>
          <p className="mt-4 max-w-3xl text-cream/80 leading-relaxed">
            {t(
              "You will collaborate with peers to lead and complete capstone projects or develop a business concept supported by industry experts, with structured guiding workshops and project milestones built into the planning process. You’ll gain the practical experience, industry credentials, and strategic direction needed to advance your career.",
            )}
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: FileBadge,
                title: "Portfolio Piece",
                desc: "Evidence for your career portfolio — useful for college, higher or further education applications, jobs, or future learning programmes.",
              },
              {
                icon: Globe,
                title: "PEN-Worldwide Credentials",
                desc: "Internationally recognised Practice Enterprise Network certification, valued across 40+ countries.",
              },
              {
                icon: Wrench,
                title: "Work Experience",
                desc: "Real, hands-on experience running a project with a partner organisation — something concrete to point to on any application.",
              },
              {
                icon: Compass,
                title: "Sense of Direction & Motivation",
                desc: "Clarity on what you want to do next, and the motivation that comes from seeing a real project through to the end.",
              },
              {
                icon: Network,
                title: "Networking Opportunities",
                desc: "Connect with mentors, peers, and partner organisations across the PEN Worldwide network.",
              },
              {
                icon: Wallet,
                title: "Job-Ready Skills",
                desc: "Receive seed funding to develop your project and gain practical skills — leadership, project management, public advocacy.",
              },
            ].map((g) => (
              <div key={g.title} className="rounded-2xl border border-cream/15 bg-white/5 p-6">
                <g.icon className="w-6 h-6 text-lime" />
                <h3 className="mt-4 font-semibold text-cream">{t(g.title)}</h3>
                <p className="mt-2 text-sm text-cream/80 leading-relaxed">{t(g.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — LIGHT · Training */}
      <section className="border-t border-border bg-background text-foreground">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-lime">
            {t("What you'll learn")}
          </p>
          <p className="mt-4 max-w-3xl text-foreground/80 leading-relaxed">
            {t(
              "Alongside running your project, a structured training program builds the professional and human skills employers look for.",
            )}
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Briefcase,
                name: "Career readiness workshops",
                desc: "Industry-specific sessions on professional skills, job-market readiness, and career pathways in the social impact sector.",
              },
              {
                icon: Target,
                name: "Leadership workshops",
                desc: "Frameworks and practices for leading yourself and others, making decisions under pressure, and motivating others toward a shared goal.",
              },
              {
                icon: Heart,
                name: "EPOCH awareness training",
                desc: "Structured introduction to the five EPOCH capabilities that define effective, human-centered leadership in a world increasingly shaped by AI.",
              },
              {
                icon: Bot,
                name: "AI training",
                desc: "Professional training in AI Foundations and Ethics building the literacy and critical thinking you need in professional and social contexts.",
              },
              {
                icon: Globe,
                name: "Cross-cultural competencies training",
                desc: "Develop the awareness, sensitivity, and communication skills needed to collaborate effectively across cultures, languages, and worldviews.",
              },
              {
                icon: Users,
                name: "Social impact",
                desc: "Learn how to design, measure, and communicate meaningful social impact — turning your project into tangible change for the communities you serve.",
              },
            ].map((training) => (
              <div
                key={training.name}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <training.icon className="w-5 h-5 text-lime shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">{t(training.name)}</div>
                  <p className="mt-1 text-sm text-foreground/75 leading-relaxed">
                    {t(training.desc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
