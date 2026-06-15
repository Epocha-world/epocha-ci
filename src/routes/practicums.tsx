import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ArrowRight,
  ArrowUpRight,
  UserCheck,
  Globe,
  Users,
  RefreshCw,
  Briefcase,
  Cpu,
  Eye,
  Frown,
  Shield,
  Wallet,
  Sparkles,
  Wrench,
  FileText,
  Download,
} from "lucide-react";
import leadershipCamp from "@/assets/practicum-leadership-camp.jpg";
import advisoryBoard from "@/assets/practicum-advisory-board.jpg";
import hanaro from "@/assets/practicum-hanaro.jpg";

export const Route = createFileRoute("/practicums")({
  head: () => ({
    meta: [
      { title: "Training — EPOCHA" },
      {
        name: "description",
        content:
          "EPOCHA training: the Practice Enterprise model, MIT-research-backed EPOCH awareness, AI fluency with QualitaX, and career-readiness skills that don't expire.",
      },
      { property: "og:title", content: "Training — EPOCHA" },
      {
        property: "og:description",
        content:
          "Boosting your employability through Practice Enterprise, EPOCH awareness, AI fluency, and career readiness.",
      },
    ],
  }),
  component: TrainingPage,
});

const NAVY = "#2A1B08";
const AMBER = "#E89A2B";
const PILL_BG = "#FBE8C6";
const PILL_TEXT = "#8C5A12";

const trackImages = [leadershipCamp, advisoryBoard, hanaro];

const learningTabByHash: Record<string, string> = {
  "#career-readiness-workshops": "le1",
  "#epoch-awareness-training": "le2",
  "#ai-fluency-training": "le3",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.22em] font-semibold text-foreground/55">
      {children}
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
      <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{desc}</p>
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
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col h-full">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
        style={{ background: bg, color }}
      >
        {letter}
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-xs px-3 py-1.5 rounded-full bg-cream/60 border border-border text-foreground/80">
      {children}
    </span>
  );
}

function LinkPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-semibold"
      style={{ background: PILL_BG, color: PILL_TEXT }}
    >
      <ArrowUpRight className="w-3.5 h-3.5" />
      {children}
    </span>
  );
}

function TrainingPage() {
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
      {/* 1b. WHY PRACTICUM TRAINING MATTERS — LIGHT */}
      <section className="bg-cream/40 text-foreground border-t border-border">
        <div className="container-x py-24 md:py-28">
          <SectionLabel>Why practicum training matters</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-[1.05]">
            Gen Z challenges are real. <span style={{ color: AMBER }}>So is our response.</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75 max-w-3xl leading-relaxed">
            Our practicum training starts from the real obstacles young people face and what it
            actually takes to overcome them. We don't see young people as problems to fix. We see
            them as people ready to contribute, given the right conditions.
          </p>

          <Tabs defaultValue="t1" className="mt-12 w-full">
            <TabsList className="grid h-auto w-full grid-cols-1 gap-2 rounded-xl border border-border bg-background/60 p-2 md:grid-cols-3">
              <TabsTrigger
                value="t1"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-foreground/75 md:text-base data-[state=active]:border-[#B87517] data-[state=active]:bg-[#E89A2B] data-[state=active]:text-[#2A1B08] data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-[#2A1B08]/10"
              >
                Mental health & burnout
              </TabsTrigger>
              <TabsTrigger
                value="t2"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-foreground/75 md:text-base data-[state=active]:border-[#B87517] data-[state=active]:bg-[#E89A2B] data-[state=active]:text-[#2A1B08] data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-[#2A1B08]/10"
              >
                Financial & economic uncertainty
              </TabsTrigger>
              <TabsTrigger
                value="t3"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-foreground/75 md:text-base data-[state=active]:border-[#B87517] data-[state=active]:bg-[#E89A2B] data-[state=active]:text-[#2A1B08] data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-[#2A1B08]/10"
              >
                Identity & social pressures
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

      {/* 1c. QUOTE */}
      <section className="bg-[#2A1B08] text-white border-t border-white/10">
        <div className="container-x py-16 md:py-20">
          <h2 className="text-center text-4xl md:text-5xl font-bold leading-[1.05]">
            Boosting your <span style={{ color: AMBER }}>employability.</span>
          </h2>
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="mt-8 text-2xl md:text-3xl font-semibold italic leading-snug text-white/90">
              Less confusion about where you're headed means less fear of stepping into the job
              market. Less fear means a better start.
            </p>
          </blockquote>
        </div>
      </section>

      {/* 2. TRAINING CONCEPT — Practice Enterprise model — LIGHT */}
      <section className="bg-background text-foreground">
        <div className="container-x py-24 md:py-28">
          <SectionLabel>Training concept</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-[1.05]">
            The <span style={{ color: AMBER }}>Practice Enterprise</span> model.
          </h2>
          <p className="mt-6 text-lg text-foreground/75 max-w-3xl leading-relaxed">
            At the heart of every EPOCHA practicum is the Practice Enterprise — an internationally
            proven, award-winning training model where you don't just learn about work. You do it.
          </p>

          <blockquote className="mt-8 border-l-4 pl-6" style={{ borderColor: AMBER }}>
            <p className="italic text-foreground/85 leading-relaxed">
              A Practice Enterprise is a trainee-run company that operates like a real business —
              from product development and marketing to finance and human resources. Trainees are
              the employees and managers.
            </p>
            <footer className="mt-3 text-sm text-foreground/55">
              — PEN Worldwide, Practice Enterprise Training Concept
            </footer>
          </blockquote>

          <div className="mt-8">
            <a
              href="https://penworldwide.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <LinkPill>PEN Worldwide — Practice Enterprise concept</LinkPill>
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
            <Pill>ETF 3-star excellent practice</Pill>
            <Pill>40+ countries</Pill>
            <Pill>PEN Worldwide network</Pill>
            <Pill>Work-based learning</Pill>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-cream/40 p-6 md:p-8">
            <p className="font-semibold text-foreground flex items-center gap-2">
              <Download className="w-5 h-5" style={{ color: AMBER }} />
              Download PEN Worldwide Fact sheets to learn more.
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
                <li key={d.label}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 text-foreground/80 hover:text-foreground"
                  >
                    <FileText className="w-4 h-4 mt-0.5 shrink-0" style={{ color: AMBER }} />
                    <span>{d.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. LEARNING ENVIRONMENT — tabbed */}
      <section className="bg-[#2A1B08] text-white border-t border-white/10">
        <div className="container-x py-24 md:py-28">
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-white/55">
            Learning environment
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-[1.05]">
            Career-readiness <span style={{ color: AMBER }}>built on real practice.</span>
          </h2>

          <Tabs value={learningTab} onValueChange={setLearningTab} className="mt-10 w-full">
            <TabsList className="grid h-auto w-full grid-cols-1 gap-2 rounded-xl border border-white/10 bg-white/10 p-2 md:grid-cols-3">
              <TabsTrigger
                value="le1"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-white/75 md:text-base data-[state=active]:border-[#B87517] data-[state=active]:bg-[#E89A2B] data-[state=active]:text-[#2A1B08] data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-white/20"
              >
                Career-readiness workshops
              </TabsTrigger>
              <TabsTrigger
                value="le2"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-white/75 md:text-base data-[state=active]:border-[#B87517] data-[state=active]:bg-[#E89A2B] data-[state=active]:text-[#2A1B08] data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-white/20"
              >
                EPOCH awareness training
              </TabsTrigger>
              <TabsTrigger
                value="le3"
                className="min-h-14 w-full border border-transparent px-4 py-3 text-center text-sm font-semibold text-white/75 md:text-base data-[state=active]:border-[#B87517] data-[state=active]:bg-[#E89A2B] data-[state=active]:text-[#2A1B08] data-[state=active]:shadow-md data-[state=active]:ring-2 data-[state=active]:ring-white/20"
              >
                AI fluency training
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Career-readiness */}
            <TabsContent value="le1" className="mt-8">
              <p className="text-white/80 max-w-3xl leading-relaxed">
                We skip the generic resume advice. Instead, you build core meta-skills tested in
                live scenarios and optimized through personalized reflection.
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
                Every completed project becomes a proven success story you can share with absolute
                confidence in any interview.
              </p>
            </TabsContent>

            {/* Tab 2: EPOCH */}
            <TabsContent value="le2" className="mt-8">
              <p className="text-white/80 max-w-3xl leading-relaxed">
                Five human-centred skills, identified by MIT Sloan as the capabilities that
                complement — rather than compete with — AI.
              </p>
              <div className="mt-6">
                <a
                  href="https://mitsloan.mit.edu/ideas-made-to-matter/these-human-capabilities-complement-ais-shortcomings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <LinkPill>
                    MIT Sloan — These human capabilities complement AI's shortcomings
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
                  Interview ready
                </p>
                <p className="mt-3 text-white/85 leading-relaxed">
                  EPOCH helps you visualise and articulate answers to behavioural interview
                  questions — which remain the gold standard for how top employers assess human
                  potential.
                </p>
              </div>
              <p className="mt-6 text-sm italic text-white/70 leading-relaxed">
                Every completed project becomes a proven success story you can share with absolute
                confidence in any interview.
              </p>
            </TabsContent>

            {/* Tab 3: AI fluency */}
            <TabsContent value="le3" className="mt-8">
              <p className="text-white/80 max-w-3xl leading-relaxed">
                There's a lot of noise around AI right now — fear of being replaced, guilt about
                using it, distrust of what it produces. EPOCHA doesn't ask you to pick a side. We
                give you the judgment to navigate all of it — critically, ethically, and
                confidently.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.qualitax.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <LinkPill>AI fluency training in partnership with QualitaX</LinkPill>
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

      {/* 4. CHOOSE YOUR PRACTICUM (duplicated from HOME) */}
      <section
        id="choose-your-practicum"
        className="bg-background text-foreground border-t border-border scroll-mt-20"
      >
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: AMBER }}>
            Available now
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Choose your <span style={{ color: AMBER }}>practicum.</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                age: "14–18",
                title: "Start-up Lab Camp",
                desc: "Build confidence, find your voice, and develop cross-cultural fluency by launching your very own Practice Enterprise, a trainee-run company that operates like a real business.",
                to: "/practicums/startup-lab-camp",
              },
              {
                age: "19–29",
                title: "Hanaro Leadership Project",
                desc: "Partner with NGOs and charities to drive meaningful change within your community. Lead campaigns and champion a cause that matters to you.",
                to: "/practicums/hanaro-marketing",
              },
              {
                age: "19–29",
                title: "Mirae Industry Project",
                desc: "Work directly with businesses, grow a career portfolio you're proud of, and build the strategic leadership skills that set you apart.",
                to: "/practicums/mirae-industry",
              },
            ].map((p, i) => (
              <Link
                key={p.title}
                to={p.to}
                className="rounded-3xl border border-border bg-card overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={trackImages[i]}
                    alt=""
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <span
                    className="inline-block self-start text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ background: PILL_BG, color: PILL_TEXT }}
                  >
                    {p.age} years old
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <p
                    className="mt-5 text-sm uppercase font-bold tracking-wider"
                    style={{ color: AMBER }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
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
            The challenge
          </p>
        </div>
        <h3 className="mt-4 text-xl md:text-2xl font-bold">{challengeTitle}</h3>
        <p className="mt-3 text-foreground/75 leading-relaxed">{challengeText}</p>
      </div>
      <div
        className="rounded-2xl border p-6 md:p-8"
        style={{ background: "#FBF3E0", borderColor: "#E8C97A" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: AMBER }}
          >
            <Users className="w-5 h-5 text-white" />
          </div>
          <p className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: PILL_TEXT }}>
            Our response
          </p>
        </div>
        <h3 className="mt-4 text-xl md:text-2xl font-bold">{responseTitle}</h3>
        <p className="mt-3 text-foreground/80 leading-relaxed">{responseText}</p>
      </div>
    </div>
  );
}
