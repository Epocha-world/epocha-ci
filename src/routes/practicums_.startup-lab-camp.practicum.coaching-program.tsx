import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Users,
  Globe,
  Bot,
  HeartPulse,
  Target,
  MessagesSquare,
  Briefcase,
  FileBadge,
  Network,
} from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/practicum/coaching-program")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Coaching program — Start-up Lab Camp — EPOCHA",
      description:
        "Explore AI, EPOCH awareness, leadership and intercultural coaching at Start-up Lab Camp.",
      path: "/practicums/startup-lab-camp/practicum/coaching-program",
    }),
  component: CoachingProgramPage,
});

const DARK = "var(--ink)";
const GOLD = "var(--lime)";
const GOLD_DEEP = "var(--muted-foreground)";
const GOLD_TEXT = "var(--ink)";
const LIGHT_ON_DARK = "var(--cream)";
const CREAM_BG = "var(--background)";

function CoachingProgramPage() {
  const { t } = useI18n();
  return (
    <>
      <section id="coaching-program" className="scroll-mt-36" style={{ background: CREAM_BG }}>
        <div className="container-x py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD_DEEP }}>
            {t("What trainees learn")}
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] md:text-7xl">
            {t("Coaching program.")}
          </h1>
          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            {t(
              "Trainees take part in a comprehensive program that covers AI in the workplace (foundations and ethics), EPOCH awareness training (Empathy, Presence, Opinion, Creativity, and Hope), and leadership development including career-readiness workshops and intercultural dialogues.",
            )}
          </p>
        </div>
      </section>
      <section style={{ background: DARK, color: LIGHT_ON_DARK }}>
        <div className="container-x py-16 md:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: Bot,
                name: "AI in the Workplace",
                desc: "Foundations and ethics of artificial intelligence — how it's changing work, and how to use it responsibly and effectively.",
              },
              {
                icon: HeartPulse,
                name: "EPOCH Awareness Training",
                desc: "Build the five human capabilities most resilient to AI: Empathy, Presence, Opinion, Creativity, and Hope — grounded in MIT Sloan research.",
              },
              {
                icon: Target,
                name: "Leadership Workshops",
                desc: "Practical leadership sessions covering communication, decision-making, team dynamics, and leading with purpose.",
              },
              {
                icon: Globe,
                name: "Intercultural Dialogues",
                desc: "Structured conversations that build cross-cultural awareness, perspective-taking, and the ability to collaborate across difference.",
              },
            ].map((topic) => (
              <article
                key={topic.name}
                className="flex gap-5 rounded-3xl border border-cream/15 bg-white/5 p-6 md:p-8"
              >
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: GOLD, color: GOLD_TEXT }}
                >
                  <topic.icon className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-cream">{t(topic.name)}</h2>
                  <p className="mt-2 leading-relaxed">{t(topic.desc)}</p>
                </div>
              </article>
            ))}
          </div>
          <article className="mt-12 rounded-3xl border border-cream/15 bg-white/5 p-7 md:p-10">
            <h2 className="text-xl font-bold text-cream md:text-2xl">
              {t("Pitching and rewards opportunities")}
            </h2>
            <p className="mt-5 leading-relaxed">
              {t(
                "All trainees can pitch their projects and startups at local and global events. These platforms allow them to showcase their innovations, gain industry visibility, and earn valuable rewards.",
              )}
            </p>
          </article>
        </div>
      </section>
      <section className="border-t border-border" style={{ background: CREAM_BG }}>
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD_DEEP }}>
            {t("What trainees gain")}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            {t("Skills. Confidence. Real-world experience.")}
          </h2>
          <p className="mt-4 text-foreground/80 max-w-3xl leading-relaxed">
            {t(
              "Start-up Lab Camp gives young people hands-on experience of how businesses operate, developing skills, competencies and experience employers consistently look for.",
            )}
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: MessagesSquare,
                title: "Communication & confidence",
                desc: "Confidence presenting their ideas clearly, pitching to stakeholders, and speaking up in a team.",
              },
              {
                icon: Globe,
                title: "Cross-cultural fluency",
                desc: "Collaboration and cooperation skills necessary to navigate different perspectives and intercultural dialogues.",
              },
              {
                icon: Briefcase,
                title: "Business fundamentals",
                desc: "Practical understanding of how a business works — from defining a product or service to managing roles, operations, and budgets.",
              },
              {
                icon: Users,
                title: "Teamwork & leadership",
                desc: "Leadership experience taking on a real role, sharing responsibility, and leading a team through real decisions.",
              },
              {
                icon: FileBadge,
                title: "Training certificate",
                desc: "A certificate of completion and evidence for their portfolio useful for college applications, jobs, or future programs.",
              },
              {
                icon: Network,
                title: "Networking Opportunities",
                desc: "Access to a global community of practice enterprises and young entrepreneurs through the PEN Worldwide network.",
              },
            ].map((g) => (
              <div key={g.title} className="rounded-3xl border border-border bg-card p-7 md:p-8">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: GOLD }}
                >
                  <g.icon className="w-5 h-5" style={{ color: GOLD_TEXT }} />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{t(g.title)}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{t(g.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background text-foreground">
        <div className="container-x py-16">
          <h2 className="text-3xl font-bold md:text-4xl">{t("Ready to find your capstone?")}</h2>
          <p className="mt-5 max-w-3xl text-lg text-foreground/80">
            {t(
              "New capstone opportunities will be published here when available. Contact us to discuss upcoming intakes.",
            )}
          </p>
          <Link
            to="/practicums/startup-lab-camp/open-capstones"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold hover:opacity-90"
            style={{ background: GOLD, color: GOLD_TEXT }}
          >
            {t("Browse capstones")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
