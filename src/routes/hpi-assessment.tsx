import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Brain,
  CheckCircle2,
  Clock,
  Eye,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import bannerBg from "@/assets/hero-banner.jpg";

export const Route = createFileRoute("/hpi-assessment")({
  head: () => ({
    meta: [
      { title: "Begin your HPI Assessment — EPOCHA" },
      {
        name: "description",
        content:
          "Start your Human Premium Index baseline assessment. A guided, 10-minute reflection across the five EPOCH dimensions.",
      },
      { property: "og:title", content: "Begin your HPI Assessment — EPOCHA" },
      {
        property: "og:description",
        content:
          "Start your Human Premium Index baseline assessment with EPOCHA.",
      },
    ],
  }),
  component: HpiAssessmentPage,
});

type Dimension = {
  key: "E" | "P" | "O" | "C" | "H";
  title: string;
  icon: typeof Brain;
  blurb: string;
  questions: string[];
};

const DIMENSIONS: Dimension[] = [
  {
    key: "E",
    title: "Empathy",
    icon: Brain,
    blurb: "Reading emotion, perspective-taking, and relational intelligence.",
    questions: [
      "I notice when a teammate's mood or energy shifts and adjust how I show up.",
      "Before reacting, I try to understand what someone else is feeling and why.",
      "I actively seek out perspectives that differ from my own before forming an opinion.",
      "People I work with tell me they feel heard around me.",
    ],
  },
  {
    key: "P",
    title: "Presence",
    icon: Eye,
    blurb: "Focus, executive attention, and grounded composure under pressure.",
    questions: [
      "I can stay focused on one important task without drifting to my phone.",
      "Under pressure I stay calm enough to think clearly and make good decisions.",
      "In conversations I am fully present rather than planning what to say next.",
      "I notice when I am stressed or distracted and have ways to reset.",
    ],
  },
  {
    key: "O",
    title: "Opinion",
    icon: MessageSquare,
    blurb: "Reasoned judgment, persuasive communication, and intellectual courage.",
    questions: [
      "I form my own views from evidence rather than defaulting to the group.",
      "I am comfortable sharing a respectful but unpopular opinion when it matters.",
      "I can explain my reasoning clearly enough for others to challenge it.",
      "I change my mind when better evidence shows up.",
    ],
  },
  {
    key: "C",
    title: "Creativity",
    icon: Lightbulb,
    blurb: "Original thinking, imaginative problem-solving, novel ideas and approaches.",
    questions: [
      "When I get stuck I generate multiple different options before picking one.",
      "I make connections between ideas from different fields or experiences.",
      "I am willing to try an unproven approach if the upside is worth it.",
      "I create things — write, build, design, perform — on a regular basis.",
    ],
  },
  {
    key: "H",
    title: "Hope",
    icon: Clock,
    blurb: "Forward-looking resilience, optimism in adversity, energy to inspire progress.",
    questions: [
      "When something goes wrong I keep moving toward a workable next step.",
      "I can name a clear vision of the future I'm working toward.",
      "I encourage people around me when the path ahead feels uncertain.",
      "I bounce back from setbacks faster than I used to.",
    ],
  },
];

type Profile = { name: string; email: string; role: string; consent: boolean };

const LIKERT = [
  { v: 1, label: "Strongly disagree" },
  { v: 2, label: "Disagree" },
  { v: 3, label: "Neutral" },
  { v: 4, label: "Agree" },
  { v: 5, label: "Strongly agree" },
];

function HpiAssessmentPage() {
  // step 0 = intro, 1 = profile, 2..6 = dimensions (E,P,O,C,H), 7 = reflection, 8 = results
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    role: "",
    consent: false,
  });
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [reflection, setReflection] = useState({ strength: "", growth: "", evidence: "" });

  const totalSteps = 9;
  const progress = Math.round((step / (totalSteps - 1)) * 100);

  const dimensionScores = useMemo(() => {
    return DIMENSIONS.map((d) => {
      const vals = d.questions.map((_, i) => answers[`${d.key}-${i}`]).filter(Boolean) as number[];
      const avg = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
      const pct = Math.round((avg / 5) * 100);
      return { ...d, score: pct, answered: vals.length, total: d.questions.length };
    });
  }, [answers]);

  const composite = useMemo(() => {
    const scored = dimensionScores.filter((d) => d.answered > 0);
    if (!scored.length) return 0;
    return Math.round(scored.reduce((a, b) => a + b.score, 0) / scored.length);
  }, [dimensionScores]);

  function dimensionComplete(d: Dimension) {
    return d.questions.every((_, i) => answers[`${d.key}-${i}`]);
  }

  function setAnswer(key: string, v: number) {
    setAnswers((a) => ({ ...a, [key]: v }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, totalSteps - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const profileValid =
    profile.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email) &&
    profile.consent;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden />
        <div className="container-x relative py-20 md:py-24 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">
            HPI Assessment
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-[1.05] max-w-4xl mx-auto">
            Begin your <span className="text-lime">HPI baseline.</span>
          </h1>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto">
            A guided 10-minute reflection across the five EPOCH dimensions. Your
            baseline unlocks a peer- and coach-verified score during your practicum.
          </p>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="bg-background border-b border-border sticky top-16 z-30">
        <div className="container-x py-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="uppercase tracking-[0.2em] font-bold text-ink">
              Step {Math.min(step + 1, totalSteps)} of {totalSteps}
            </span>
            <span className="tabular-nums">{progress}%</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-lime to-coral transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="bg-background">
        <div className="container-x py-16 max-w-3xl mx-auto">
          {step === 0 && (
            <IntroStep onStart={next} />
          )}

          {step === 1 && (
            <ProfileStep
              profile={profile}
              setProfile={setProfile}
              onBack={back}
              onNext={next}
              valid={profileValid}
            />
          )}

          {step >= 2 && step <= 6 && (
            <DimensionStep
              dimension={DIMENSIONS[step - 2]}
              answers={answers}
              setAnswer={setAnswer}
              onBack={back}
              onNext={next}
              canContinue={dimensionComplete(DIMENSIONS[step - 2])}
              index={step - 1}
              total={5}
            />
          )}

          {step === 7 && (
            <ReflectionStep
              reflection={reflection}
              setReflection={setReflection}
              onBack={back}
              onSubmit={next}
            />
          )}

          {step === 8 && (
            <ResultsStep
              profile={profile}
              dimensionScores={dimensionScores}
              composite={composite}
            />
          )}
        </div>
      </section>
    </>
  );
}

function IntroStep({ onStart }: { onStart: () => void }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">
        What to expect
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
        Your baseline in <span className="text-lime">five short sections.</span>
      </h2>
      <p className="mt-5 text-muted-foreground">
        This assessment establishes your starting point across the five EPOCH
        dimensions. It's a self-reflection — the final HPI score is later verified
        by peers and coaches inside a practicum. Be honest; there are no wrong
        answers.
      </p>

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {[
          { icon: Clock, title: "10 minutes", desc: "20 short statements + a brief reflection." },
          { icon: ShieldCheck, title: "Private", desc: "Your responses are never shared without your consent." },
          { icon: Sparkles, title: "Personalised", desc: "Get a baseline report and recommended next steps." },
        ].map((c) => {
          const I = c.icon;
          return (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-5">
              <I className="w-5 h-5 text-lime" />
              <p className="mt-3 font-bold text-ink">{c.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-5">
        <p className="text-sm text-muted-foreground">
          <strong className="text-ink">Heads up:</strong> The HPI you can display
          publicly is only issued after peer + coach reviews inside a practicum.
          This baseline helps you and your coach see where to focus first.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <button onClick={onStart} className="btn-primary">
          Start assessment <ArrowRight className="w-4 h-4" />
        </button>
        <Link to="/how-hpi-works" className="btn-outline">
          Learn how HPI works
        </Link>
      </div>
    </div>
  );
}

function ProfileStep({
  profile,
  setProfile,
  onBack,
  onNext,
  valid,
}: {
  profile: Profile;
  setProfile: (p: Profile) => void;
  onBack: () => void;
  onNext: () => void;
  valid: boolean;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">
        About you
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
        Tell us who's <span className="text-lime">taking the assessment.</span>
      </h2>
      <p className="mt-4 text-muted-foreground">
        We use this to send your baseline report and match you to the right cohort.
      </p>

      <div className="mt-10 space-y-5">
        <Field label="Full name">
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-ink placeholder:text-muted-foreground focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition-colors"
            placeholder="Jane Park"
            maxLength={100}
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-ink placeholder:text-muted-foreground focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition-colors"
            placeholder="jane@example.com"
            maxLength={200}
          />
        </Field>
        <Field label="Current role or status (optional)">
          <input
            type="text"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-ink placeholder:text-muted-foreground focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition-colors"
            placeholder="University student, intern, career changer…"
            maxLength={120}
          />
        </Field>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={profile.consent}
            onChange={(e) => setProfile({ ...profile, consent: e.target.checked })}
            className="mt-1 w-4 h-4 accent-lime"
          />
          <span className="text-sm text-muted-foreground">
            I agree to EPOCHA storing my responses to generate my baseline HPI report.
          </span>
        </label>
      </div>

      <NavButtons onBack={onBack} onNext={onNext} canContinue={valid} />
    </div>
  );
}

function DimensionStep({
  dimension,
  answers,
  setAnswer,
  onBack,
  onNext,
  canContinue,
  index,
  total,
}: {
  dimension: Dimension;
  answers: Record<string, number>;
  setAnswer: (k: string, v: number) => void;
  onBack: () => void;
  onNext: () => void;
  canContinue: boolean;
  index: number;
  total: number;
}) {
  const I = dimension.icon;
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-lime text-ink flex items-center justify-center font-bold text-lg">
          {dimension.key}
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">
            Dimension {index} of {total}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-ink flex items-center gap-2">
            <I className="w-6 h-6 text-lime" />
            {dimension.title}
          </h2>
        </div>
      </div>
      <p className="mt-4 text-muted-foreground">{dimension.blurb}</p>

      <div className="mt-8 space-y-6">
        {dimension.questions.map((q, i) => {
          const k = `${dimension.key}-${i}`;
          const val = answers[k];
          return (
            <div key={k} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-ink font-medium">
                <span className="text-muted-foreground mr-2 tabular-nums">
                  {i + 1}.
                </span>
                {q}
              </p>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {LIKERT.map((opt) => {
                  const active = val === opt.v;
                  return (
                    <button
                      key={opt.v}
                      type="button"
                      onClick={() => setAnswer(k, opt.v)}
                      className={`rounded-xl border px-2 py-3 text-xs font-medium transition-all ${
                        active
                          ? "border-lime bg-lime/10 text-ink"
                          : "border-border bg-background text-muted-foreground hover:border-lime/50"
                      }`}
                      aria-pressed={active}
                    >
                      <span className="block text-lg font-bold tabular-nums">{opt.v}</span>
                      <span className="block mt-1 leading-tight">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <NavButtons onBack={onBack} onNext={onNext} canContinue={canContinue} />
    </div>
  );
}

function ReflectionStep({
  reflection,
  setReflection,
  onBack,
  onSubmit,
}: {
  reflection: { strength: string; growth: string; evidence: string };
  setReflection: (r: { strength: string; growth: string; evidence: string }) => void;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const ready =
    reflection.strength.trim().length > 5 &&
    reflection.growth.trim().length > 5;
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">
        Reflection
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
        Tell us, in your <span className="text-lime">own words.</span>
      </h2>
      <p className="mt-4 text-muted-foreground">
        Two short paragraphs help us calibrate your baseline and prepare your coach.
      </p>

      <div className="mt-10 space-y-6">
        <Field label="Where do you think you're already strong?">
          <textarea
            value={reflection.strength}
            onChange={(e) => setReflection({ ...reflection, strength: e.target.value })}
            rows={4}
            maxLength={600}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-ink placeholder:text-muted-foreground focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition-colors resize-none"
            placeholder="Describe a moment that shows one of the EPOCH dimensions in action…"
          />
        </Field>
        <Field label="Where do you most want to grow?">
          <textarea
            value={reflection.growth}
            onChange={(e) => setReflection({ ...reflection, growth: e.target.value })}
            rows={4}
            maxLength={600}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-ink placeholder:text-muted-foreground focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition-colors resize-none"
            placeholder="What feels hardest right now? What's getting in the way?"
          />
        </Field>
        <Field label="A link to evidence (optional)">
          <input
            type="url"
            value={reflection.evidence}
            onChange={(e) => setReflection({ ...reflection, evidence: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-ink placeholder:text-muted-foreground focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 transition-colors"
            placeholder="LinkedIn, portfolio, project, video…"
            maxLength={300}
          />
        </Field>
      </div>

      <NavButtons onBack={onBack} onNext={onSubmit} canContinue={ready} nextLabel="Submit assessment" />
    </div>
  );
}

function ResultsStep({
  profile,
  dimensionScores,
  composite,
}: {
  profile: Profile;
  dimensionScores: (Dimension & { score: number })[];
  composite: number;
}) {
  const band =
    composite >= 80
      ? "Strong baseline"
      : composite >= 60
        ? "Solid foundation"
        : composite >= 40
          ? "Emerging"
          : "Early stage";

  return (
    <div>
      <div className="flex items-center gap-3">
        <CheckCircle2 className="w-7 h-7 text-lime" />
        <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">
          Assessment complete
        </p>
      </div>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
        Nice work{profile.name ? `, ${profile.name.split(" ")[0]}` : ""}.
      </h2>
      <p className="mt-4 text-muted-foreground">
        Here's your self-reported baseline. A verified HPI score is issued after
        peer and coach reviews inside a practicum.
      </p>

      <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-lime flex items-center justify-center text-ink">
              <BadgeCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                Baseline · self-reported
              </p>
              <p className="text-sm font-bold text-ink">Human Premium Index</p>
            </div>
          </div>
          <ShieldCheck className="w-6 h-6 text-lime" />
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Baseline composite
          </p>
          <p className="mt-2 text-7xl font-bold text-ink tabular-nums">
            {composite}
            <span className="text-3xl text-muted-foreground">/100</span>
          </p>
          <p className="mt-2 text-sm text-lime font-bold">{band}</p>
        </div>

        <div className="mt-8 space-y-3">
          {dimensionScores.map((s) => (
            <div key={s.key}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-ink font-medium">
                  {s.key} · {s.title}
                </span>
                <span className="text-muted-foreground tabular-nums">{s.score}</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-lime to-coral"
                  style={{ width: `${s.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border bg-card p-5">
          <Sparkles className="w-5 h-5 text-lime" />
          <p className="mt-3 font-bold text-ink">What happens next</p>
          <p className="mt-1 text-sm text-muted-foreground">
            We'll email your full baseline report and recommended practicum tracks
            within 24 hours.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <BadgeCheck className="w-5 h-5 text-coral" />
          <p className="mt-3 font-bold text-ink">Earn a verified HPI</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Join a practicum to unlock peer and coach reviews that produce your
            shareable, verified credential.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/practicums" className="btn-primary">
          Explore practicums <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/connect" className="btn-outline">
          Talk to an advisor
        </Link>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-2">{label}</span>
      {children}
    </label>
  );
}

function NavButtons({
  onBack,
  onNext,
  canContinue,
  nextLabel = "Continue",
}: {
  onBack: () => void;
  onNext: () => void;
  canContinue: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="mt-10 flex items-center justify-between gap-4">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canContinue}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {nextLabel} <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}