import { PracticumGains } from "@/components/home/PracticumGains";
import { LearningJourney } from "@/components/home/LearningJourney";
import { ProgramExplorer } from "@/components/programs/ProgramExplorer";
import { PracticumHero } from "@/components/home/PracticumHero";
import { useI18n } from "@/i18n";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ArrowUpRight,
  UserCheck,
  Globe,
  Users,
  RefreshCw,
  Cpu,
  Eye,
  Frown,
  Shield,
  Sparkles,
  Wrench,
  FileText,
  Download,
} from "lucide-react";
import leadershipCamp from "@/assets/practicum-leadership-camp.jpg";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Practicums — EPOCHA",
      description:
        "EPOCHA training: the Practice Enterprise model, MIT-research-backed EPOCH awareness, AI fluency with QualitaX, and career-readiness skills that don't expire.",
      path: "/practicums",
      image: leadershipCamp,
      socialDescription:
        "Boosting your employability through Practice Enterprise, EPOCH awareness, AI fluency, and career readiness.",
    }),
  component: TrainingPage,
});

const AMBER = "var(--text-accent)";
const PILL_BG = "#FFF4AD";
const PILL_TEXT = "#544800";

const learningTabByHash: Record<string, string> = {
  "#career-readiness-workshops": "le1",
  "#epoch-awareness-training": "le2",
  "#ai-fluency-training": "le3",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();
  return (
    <p className="text-xs uppercase tracking-[0.22em] font-semibold text-foreground/55">
      {typeof children === "string" ? t(children) : children}
    </p>
  );
}

function Card({
  icon: Icon,
  title,
  desc,
  iconBg,
  iconColor,
  step,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  desc: string;
  iconBg?: string;
  iconColor?: string;
  step?: string;
}) {
  const { t } = useI18n();
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col h-full">
      {step && (
        <div className="flex justify-end text-xs text-foreground/50 font-medium mb-2">{step}</div>
      )}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: iconBg ?? "transparent" }}
      >
        <Icon className="w-5 h-5" style={{ color: iconColor ?? AMBER }} />
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{t(title)}</h3>
      <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{t(desc)}</p>
    </div>
  );
}

function LetterCard({
  letter,
  title,
  desc,
  color,
  bg,
}: {
  letter: string;
  title: string;
  desc: string;
  color: string;
  bg: string;
}) {
  const { t } = useI18n();
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col h-full">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
        style={{ background: bg, color }}
      >
        {letter}
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{t(title)}</h3>
      <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{t(desc)}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();
  return (
    <span className="inline-flex items-center text-xs px-3 py-1.5 rounded-full bg-muted border border-border text-foreground/80">
      {typeof children === "string" ? t(children) : children}
    </span>
  );
}

function LinkPill({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();
  return (
    <span
      className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-semibold"
      style={{ background: PILL_BG, color: PILL_TEXT }}
    >
      <ArrowUpRight className="w-3.5 h-3.5" />
      {typeof children === "string" ? t(children) : children}
    </span>
  );
}

function TrainingPage() {
  const { t } = useI18n();
  const [learningTab, setLearningTab] = useState("le1");

  useEffect(() => {
    const syncTabFromHash = () => {
      setLearningTab(learningTabByHash[window.location.hash] ?? "le1");
    };

    syncTabFromHash();
    window.addEventListener("hashchange", syncTabFromHash);
    return () => window.removeEventListener("hashchange", syncTabFromHash);
  }, []);

  return (
    <>
      <PracticumHero />
      {/* 1b. WHY PRACTICUM TRAINING MATTERS — LIGHT */}
      <section className="bg-muted/30 text-foreground border-t border-border">
        <div className="container-x py-24 md:py-28">
          <SectionLabel>{t("Why practicum training matters")}</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-[1.05]">
            {t("Gen Z challenges are real.")}{" "}
            <span style={{ color: AMBER }}>{t("So is our response.")}</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75 max-w-3xl leading-relaxed">
            {t(
              "Our practicum training starts from the real obstacles young people face and what it actually takes to overcome them. We don't see young people as problems to fix. We see them as people ready to contribute, given the right conditions.",
            )}
          </p>

          <Tabs defaultValue="t1" className="mt-12 w-full">
            <TabsList className="grid h-auto w-full grid-cols-1 gap-2 rounded-xl border border-border bg-background/60 p-2 md:grid-cols-3">
              <TabsTrigger
                value="t1"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-foreground/75 md:text-base data-[state=active]:border-lime data-[state=active]:bg-lime data-[state=active]:text-ink data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-[#2A1B08]/10"
              >
                {t("Mental health & burnout")}
              </TabsTrigger>
              <TabsTrigger
                value="t2"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-foreground/75 md:text-base data-[state=active]:border-lime data-[state=active]:bg-lime data-[state=active]:text-ink data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-[#2A1B08]/10"
              >
                {t("Financial & economic uncertainty")}
              </TabsTrigger>
              <TabsTrigger
                value="t3"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-foreground/75 md:text-base data-[state=active]:border-lime data-[state=active]:bg-lime data-[state=active]:text-ink data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-[#2A1B08]/10"
              >
                {t("Identity & social pressures")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="t1" className="mt-8">
              <ChallengeResponse
                challengeTitle="Anxiety, burnout, and disengagement"
                challengeText="Constant comparison, academic pressure, and an uncertain future have left many young people feeling like they're falling behind before they've even started, exhausted by expectations they had no part in setting."
                responseTitle="A supportive cohort and visible progress"
                responseText="Practicums place participants in a supported cohort with coaching built in. Progress is tracked and made visible, so it feels real rather than performative. Small, genuine wins rebuild confidence and momentum."
              />
            </TabsContent>
            <TabsContent value="t2" className="mt-8">
              <ChallengeResponse
                challengeTitle="Rising costs, and shrinking opportunities"
                challengeText="An unstable job market and shrinking entry-level roles make it harder than ever to get started. Many can't afford unpaid internships and lack the support to articulate the experience they gain through gig work. This leaves them struggling to showcase the exact skills employers are looking for."
                responseTitle="Verified credentials and access"
                responseText="Practicums build a verified portfolio and skills profile that shortens the path to paid work. Meanwhile, lower pricing and scholarships reduce financial barriers to participation. Finally, AI fluency training future-proofs participants for a fast-changing labor market."
              />
            </TabsContent>
            <TabsContent value="t3" className="mt-8">
              <ChallengeResponse
                challengeTitle="Pressure to have it all figured out"
                challengeText="Constant social comparison and the fear of failing in public make it hard for young people to take risks, be authentic, or admit they don't yet know who they want to be."
                responseTitle="A safe space to grow on your own terms"
                responseText="Practicums are a space for young people to experiment and fail without judgement. Our training program centers on personal growth, where learning in a cohort allows them to collaborate in a supportive environment that channels healthy competition for mutual growth."
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <LearningJourney />
      <PracticumGains />

      {/* 1c. QUOTE */}
      <section className="bg-ink text-white border-t border-white/10">
        <div className="container-x py-16 md:py-20">
          <h2 className="text-center text-4xl md:text-5xl font-bold leading-[1.05]">
            {t("Boosting your")} <span style={{ color: AMBER }}>{t("employability.")}</span>
          </h2>
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="mt-8 text-2xl md:text-3xl font-semibold italic leading-snug text-white/90">
              {t(
                "Less confusion about where you're headed means less fear of stepping into the job market. Less fear means a better start.",
              )}
            </p>
          </blockquote>
        </div>
      </section>

      {/* 2. TRAINING CONCEPT — Practice Enterprise model — LIGHT */}
      <section className="bg-background text-foreground">
        <div className="container-x py-24 md:py-28">
          <SectionLabel>{t("Training concept")}</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-[1.05]">
            {t("The Practice Enterprise model.")}
          </h2>
          <p className="mt-6 text-lg text-foreground/75 max-w-3xl leading-relaxed">
            {t(
              "An internationally proven, award-winning training model where you don't just learn about work. You do it.",
            )}
          </p>

          <blockquote className="mt-8 border-l-4 pl-6" style={{ borderColor: AMBER }}>
            <p className="italic text-foreground/85 leading-relaxed">
              {t(
                "A Practice Enterprise is a trainee-run company that operates like a real business — from product development and marketing to finance and human resources. Trainees are the employees and managers.",
              )}
            </p>
            <footer className="mt-3 text-sm text-foreground/55">
              {t("— PEN Worldwide, Practice Enterprise Training Concept")}
            </footer>
          </blockquote>

          <div className="mt-8">
            <a
              href="https://penworldwide.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <LinkPill>{t("PEN Worldwide — Practice Enterprise concept")}</LinkPill>
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Card
              icon={UserCheck}
              title="Ownership"
              desc="You take responsibility for your own learning and work at your own pace within a real structure."
            />
            <Card
              icon={Globe}
              title="Experience"
              desc="Dive into authentic, practical work. We trade hypothetical case studies and staged tests for real industry experience."
            />
            <Card
              icon={Users}
              title="Cooperation"
              desc="You work alongside peers, learning the real demands of teamwork and cross-functional collaboration."
            />
            <Card
              icon={RefreshCw}
              title="Reflection"
              desc="You experience the consequences of your decisions and apply that learning to future challenges."
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Pill>{t("ETF 3-star excellent practice")}</Pill>
            <Pill>{t("40+ countries")}</Pill>
            <Pill>{t("PEN Worldwide network")}</Pill>
            <Pill>{t("Work-based learning")}</Pill>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
            <p className="font-semibold text-foreground flex items-center gap-2">
              <Download className="w-5 h-5" style={{ color: AMBER }} />
              {t("Download PEN Worldwide Fact sheets to learn more.")}
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
              {[
                {
                  label: "2025 PEN Worldwide Fact Sheet — General (EN)",
                  href: "/downloads/2025-PEN-Worldwide-Fact-Sheet-General-English.pdf",
                },
                {
                  label: "2025 PEN Worldwide Fact Sheet — Skill Development (EN)",
                  href: "/downloads/2025-PEN-Worldwide-Fact-Sheet-Skill-Development-English.pdf",
                },
                {
                  label: "2025 PEN Worldwide Mentor Company Flyer (EN)",
                  href: "/downloads/2025-PEN-Worldwide-Mentor-Company-Flyer-English.pdf",
                },
                {
                  label: "2025 PEN Worldwide PE4Entrepreneurship One Pager (EN)",
                  href: "/downloads/2025-PEN-Worldwide-PE4Entrepreneurship-One-Pager-English.pdf",
                },
                {
                  label: "PEN Worldwide General Lingo Short",
                  href: "/downloads/PEN-Worldwide-General-Lingo-Short.pdf",
                },
                {
                  label: "PEN Worldwide Poster Vertical",
                  href: "/downloads/PEN-Worldwide-Poster-Vertical.pdf",
                },
              ].map((d) => (
                <li key={t(d.label)}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 text-foreground/80 hover:text-foreground"
                  >
                    <FileText className="w-4 h-4 mt-0.5 shrink-0" style={{ color: AMBER }} />
                    <span>{t(d.label)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. LEARNING ENVIRONMENT — tabbed */}
      <section id="training-offer" className="bg-ink text-white border-t border-white/10">
        <span id="career-readiness-workshops" className="block scroll-mt-28" />
        <span id="epoch-awareness-training" className="block scroll-mt-28" />
        <span id="ai-fluency-training" className="block scroll-mt-28" />
        <div className="container-x py-24 md:py-28">
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-white/55">
            {t("TRAINING OFFER")}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-[1.05]">
            {t("Career-readiness built on real practice.")}
          </h2>

          <Tabs value={learningTab} onValueChange={setLearningTab} className="mt-10 w-full">
            <TabsList className="grid h-auto w-full grid-cols-1 gap-2 rounded-xl border border-white/10 bg-white/10 p-2 md:grid-cols-3">
              <TabsTrigger
                value="le1"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-white/75 md:text-base data-[state=active]:border-lime data-[state=active]:bg-lime data-[state=active]:text-ink data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-white/20"
              >
                {t("Career-readiness workshops")}
              </TabsTrigger>
              <TabsTrigger
                value="le2"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-white/75 md:text-base data-[state=active]:border-lime data-[state=active]:bg-lime data-[state=active]:text-ink data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-white/20"
              >
                {t("EPOCH awareness training")}
              </TabsTrigger>
              <TabsTrigger
                value="le3"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-white/75 md:text-base data-[state=active]:border-lime data-[state=active]:bg-lime data-[state=active]:text-ink data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-white/20"
              >
                {t("AI fluency training")}
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Career-readiness */}
            <TabsContent value="le1" className="mt-8">
              <p className="text-white/80 max-w-3xl leading-relaxed">
                {t(
                  "We skip the generic resume advice. Instead, you build core meta-skills tested in live scenarios and optimized through personalized reflection.",
                )}
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-5">
                <Card
                  icon={UserCheck}
                  title="Self-leadership"
                  desc="Focus, integrity, adaptability, and the initiative to act without being directed."
                />
                <Card
                  icon={Users}
                  title="Social intelligence"
                  desc="Communicating clearly, reading people, and leading across cultures and difference."
                />
                <Card
                  icon={Sparkles}
                  title="Innovation"
                  desc="Curiosity, sense-making, creativity, and the critical thinking to solve real problems."
                />
              </div>
              <p className="mt-6 text-sm italic text-white/70 leading-relaxed">
                {t(
                  "Every completed project becomes a proven success story you can share with absolute confidence in any interview.",
                )}
              </p>
            </TabsContent>

            {/* Tab 2: EPOCH */}
            <TabsContent value="le2" className="mt-8">
              <p className="text-white/80 max-w-3xl leading-relaxed">
                {t(
                  "Five human-centred skills, identified by MIT Sloan as the capabilities that complement — rather than compete with — AI.",
                )}
              </p>
              <div className="mt-6">
                <a
                  href="https://mitsloan.mit.edu/ideas-made-to-matter/these-human-capabilities-complement-ais-shortcomings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <LinkPill>
                    {t("MIT Sloan — These human capabilities complement AI's shortcomings")}
                  </LinkPill>
                </a>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                <LetterCard
                  letter="E"
                  title="Empathy"
                  desc="Empathy and emotional intelligence."
                  color="#2F8C6B"
                  bg="#D9EFE6"
                />
                <LetterCard
                  letter="P"
                  title="Presence"
                  desc="Presence, networking, and connectedness."
                  color="#1B5FA5"
                  bg="#DCE9F6"
                />
                <LetterCard
                  letter="O"
                  title="Opinion"
                  desc="Opinion, judgment, and ethics."
                  color="#C2792A"
                  bg="#F6E4CB"
                />
                <LetterCard
                  letter="C"
                  title="Creativity"
                  desc="Creativity and imagination."
                  color="#B6442C"
                  bg="#F4D9D2"
                />
                <LetterCard
                  letter="H"
                  title="Hope"
                  desc="Hope, vision, and leadership."
                  color="#7B4FA2"
                  bg="#E6DCF1"
                />
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-6">
                <p
                  className="text-xs uppercase tracking-[0.18em] font-bold"
                  style={{ color: AMBER }}
                >
                  {t("Interview ready")}
                </p>
                <p className="mt-3 text-white/85 leading-relaxed">
                  {t(
                    "EPOCH helps you visualise and articulate answers to behavioural interview questions — which remain the gold standard for how top employers assess human potential.",
                  )}
                </p>
              </div>
              <p className="mt-6 text-sm italic text-white/70 leading-relaxed">
                {t(
                  "Every completed project becomes a proven success story you can share with absolute confidence in any interview.",
                )}
              </p>
            </TabsContent>

            {/* Tab 3: AI fluency */}
            <TabsContent value="le3" className="mt-8">
              <p className="text-white/80 max-w-3xl leading-relaxed">
                {t(
                  "There's a lot of noise around AI right now — fear of being replaced, guilt about using it, distrust of what it produces. EPOCHA doesn't ask you to pick a side. We give you the judgment to navigate all of it — critically, ethically, and confidently.",
                )}
              </p>
              <div className="mt-6">
                <a
                  href="https://www.qualitax.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <LinkPill>{t("AI fluency training in partnership with QualitaX")}</LinkPill>
                </a>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <Card
                  icon={Cpu}
                  title="Understanding AI"
                  desc="Know what AI is, how it works, and what it can and cannot do — so you use it with clarity, not blind trust."
                  iconBg="#FAEEDA"
                  iconColor="#854F0B"
                />
                <Card
                  icon={Wrench}
                  title="Using AI tools"
                  desc="Fluently operate generative AI, automation, and data tools to boost personal and professional output."
                  iconBg="#FAEEDA"
                  iconColor="#854F0B"
                />
                <Card
                  icon={Eye}
                  title="Critical AI thinking"
                  desc="Evaluate AI outputs for bias, accuracy, and reliability. Never accept results without human judgement."
                  iconBg="#FAEEDA"
                  iconColor="#854F0B"
                />
              </div>
              <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <Card
                  icon={Shield}
                  title="Ethics & responsibility"
                  desc="Navigate privacy, intellectual property, fairness, and accountability when working with AI systems."
                  iconBg="#FAEEDA"
                  iconColor="#854F0B"
                />
                <Card
                  icon={Users}
                  title="Human-AI collaboration"
                  desc="Know when to use AI and when not to. Combine human creativity and empathy with AI efficiency."
                  iconBg="#FAEEDA"
                  iconColor="#854F0B"
                />
                <Card
                  icon={RefreshCw}
                  title="Lifelong adaptability"
                  desc="Stay current as AI evolves rapidly. Build the habit of continuous learning in a changing digital landscape."
                  iconBg="#FAEEDA"
                  iconColor="#854F0B"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ProgramExplorer />
    </>
  );
}

function ChallengeResponse({
  challengeTitle,
  challengeText,
  responseTitle,
  responseText,
}: {
  challengeTitle: string;
  challengeText: string;
  responseTitle: string;
  responseText: string;
}) {
  const { t } = useI18n();
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "#F6E4CB" }}
          >
            <Frown className="w-5 h-5" style={{ color: "#C2792A" }} />
          </div>
          <p className="text-xs uppercase tracking-[0.18em] font-bold text-foreground/55">
            {t("The challenge")}
          </p>
        </div>
        <h3 className="mt-4 text-xl md:text-2xl font-bold">{t(challengeTitle)}</h3>
        <p className="mt-3 text-foreground/75 leading-relaxed">{t(challengeText)}</p>
      </div>
      <div
        className="surface-light rounded-2xl border p-6 md:p-8"
        style={{ background: "#FBF3E0", borderColor: "#E8C97A" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "var(--lime)" }}
          >
            <Users className="w-5 h-5 text-ink" />
          </div>
          <p className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: PILL_TEXT }}>
            {t("Our response")}
          </p>
        </div>
        <h3 className="mt-4 text-xl md:text-2xl font-bold">{t(responseTitle)}</h3>
        <p className="mt-3 text-foreground/80 leading-relaxed">{t(responseText)}</p>
      </div>
    </div>
  );
}
