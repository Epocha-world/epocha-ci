import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ShieldCheck, Brain, Eye, MessageSquare, Lightbulb, Clock, Users, Sparkles, FileCheck2, UserCheck, Briefcase, MessageCircle, Bot } from "lucide-react";
import hero from "@/assets/employability.jpg";
import bannerBg from "@/assets/hero-banner.jpg";

export const Route = createFileRoute("/how-hpi-works")({
  head: () => ({
    meta: [
      { title: "How the Human Premium Index Works — Peer & Coach Verified" },
      { name: "description", content: "The HPI is earned through structured peer and coach reviews — not self-tests. See how reviewers, evidence, and calibration produce a credential others trust." },
      { property: "og:title", content: "How the Human Premium Index Works" },
      { property: "og:description", content: "A peer and coach reviewed credential for the human capabilities AI can't replicate." },
      { property: "og:image", content: hero },
    ],
  }),
  component: HowHpiWorksPage,
});

function HowHpiWorksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bannerBg})` }} aria-hidden />
        <div className="absolute inset-0 bg-black/65" aria-hidden />
        <div className="container-x relative py-28 md:py-36 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">How it works</p>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-5xl mx-auto">
            A credential <span className="text-lime">others vouch for.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            The Human Premium Index is earned through structured peer and coach reviews — not self-assessments. Here's how it works.
          </p>
        </div>
      </section>

      {/* WHY EPOCH MATTERS (moved from About) */}
      <section className="bg-ink text-cream">
        <div className="container-x py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">Why EPOCH matters</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Bet on the skills that <span className="text-lime">don't expire.</span>
            </h2>
            <p className="mt-5 text-cream/70">
              Tools change every year. EPOCH skills compound — and that's what careers are really built on.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: Bot, title: "What AI can't do", desc: "Empathy, judgment, creativity, presence. The skills no algorithm can replicate." },
              { icon: Users, title: "What employers pay for", desc: "The gap between technical ability and human effectiveness is what top teams hire for." },
              { icon: Sparkles, title: "What compounds forever", desc: "Tools update every year. Human skills get stronger with every project and team." },
            ].map((c) => {
              const I = c.icon;
              return (
                <div key={c.title} className="rounded-3xl border border-cream/15 bg-white/5 p-8 transition-all hover:border-lime hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-lime/20 flex items-center justify-center text-lime mb-5">
                    <I className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm text-cream/70 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT IS HPI */}
      <section className="bg-background">
        <div className="container-x py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">Why peer & coach review?</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-ink leading-tight">
              EPOCH skills live in <span className="text-lime">how others experience you.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Empathy, presence, opinion, creation, and hindsight can't be measured by a quiz. They show up in real collaboration — in how teammates feel heard, in how coaches see you adapt under pressure, in the artifacts you ship together.
            </p>
            <p className="mt-4 text-muted-foreground">
              That's why the HPI is built from <strong className="text-ink">structured peer reviews</strong> from people you actually work with, plus <strong className="text-ink">certified coach evaluations</strong> grounded in observed behavior and evidence — never self-rating.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={hero} alt="A person reviewing their verified HPI credential" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* THE 5 EPOCH DIMENSIONS */}
      <section className="bg-ink text-cream">
        <div className="container-x py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">What we measure</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              The five <span className="text-lime">EPOCH dimensions.</span>
            </h2>
            <p className="mt-5 text-cream/70">
              Every HPI score is built from five weighted dimensions, each evaluated through behavioral tasks, situational judgment, and verified project work.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Brain, letter: "E", title: "Empathy", desc: "Reading emotion, perspective-taking, and relational intelligence." },
              { icon: Eye, title: "Presence", letter: "P", desc: "Focus, executive attention, and grounded composure under pressure." },
              { icon: MessageSquare, letter: "O", title: "Opinion", desc: "Reasoned judgment, persuasive communication, and intellectual courage." },
              { icon: Lightbulb, letter: "C", title: "Creativity", desc: "Original thinking, imaginative problem-solving, and the ability to generate novel ideas and approaches." },
              { icon: Clock, letter: "H", title: "Hope", desc: "Forward-looking resilience, optimism in adversity, and the energy to inspire progress." },
            ].map((d) => {
              const I = d.icon;
              return (
                <div key={d.title} className="rounded-3xl border border-cream/15 bg-white/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-lime text-ink flex items-center justify-center font-bold text-lg">{d.letter}</div>
                    <I className="w-5 h-5 text-lime" />
                  </div>
                  <h3 className="text-xl font-bold">{d.title}</h3>
                  <p className="mt-2 text-sm text-cream/70 leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE PROCESS — 4 STEPS */}
      <section className="bg-background">
        <div className="container-x py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">The review process</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-ink">
              Four steps to your <span className="text-lime">peer-verified badge.</span>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, step: "01", title: "Do real work", desc: "Join a practicum, project, or workplace cohort. Your EPOCH skills are observed in genuine collaboration — not staged tests." },
              { icon: Users, step: "02", title: "Peer reviews", desc: "Teammates you worked with submit structured, anonymous reviews across each EPOCH dimension, anchored to specific moments and behaviors." },
              { icon: UserCheck, step: "03", title: "Coach evaluation", desc: "A certified coach observes you across sessions, reviews evidence, and writes a calibrated evaluation against our global rubric." },
              { icon: BadgeCheck, step: "04", title: "Verified badge", desc: "Peer and coach inputs combine into your HPI score with written highlights. Issued as a tamper-proof badge for LinkedIn, resumes, and HR systems." },
            ].map((s) => {
              const I = s.icon;
              return (
                <div key={s.step} className="rounded-3xl border border-border bg-card p-7 relative">
                  <span className="absolute top-6 right-6 text-xs font-bold text-muted-foreground tabular-nums">{s.step}</span>
                  <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center text-lime mb-5">
                    <I className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCORING BREAKDOWN */}
      <section className="bg-gradient-to-br from-lime/10 via-background to-coral/10">
        <div className="container-x py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">How reviews become a score</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-ink leading-tight">
              From <span className="text-lime">real reviews</span> to a single, trusted number.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Each EPOCH dimension blends weighted peer ratings, coach evaluations, and evidence quality. The composite HPI is normalized against our global cohort so an 87 in Seoul means the same thing as an 87 in Berlin.
            </p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex gap-3"><Sparkles className="w-5 h-5 text-lime shrink-0 mt-0.5" /> Minimum 8 peer reviewers and 2 coach evaluations to be issued.</li>
              <li className="flex gap-3"><Sparkles className="w-5 h-5 text-lime shrink-0 mt-0.5" /> Outlier detection and reviewer-calibration to control bias.</li>
              <li className="flex gap-3"><Sparkles className="w-5 h-5 text-lime shrink-0 mt-0.5" /> Renewed annually as you gather new reviews from new contexts.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-lime flex items-center justify-center text-ink">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">Sample report · Peer + Coach verified</p>
                  <p className="text-sm font-bold text-ink">Human Premium Index</p>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-lime" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-muted/40 p-3 text-center">
                <Users className="w-4 h-4 text-lime mx-auto" />
                <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Peer reviews</p>
                <p className="text-xl font-bold text-ink tabular-nums">12</p>
              </div>
              <div className="rounded-xl bg-muted/40 p-3 text-center">
                <UserCheck className="w-4 h-4 text-coral mx-auto" />
                <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Coach reviews</p>
                <p className="text-xl font-bold text-ink tabular-nums">3</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Composite HPI</p>
              <p className="mt-2 text-7xl font-bold text-ink tabular-nums">87<span className="text-3xl text-muted-foreground">/100</span></p>
              <p className="mt-2 text-sm text-lime font-bold">Top 12% globally</p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                { label: "Empathy", value: 92 },
                { label: "Presence", value: 84 },
                { label: "Opinion", value: 88 },
                { label: "Creativity", value: 81 },
                { label: "Hope", value: 90 },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-ink font-medium">{s.label}</span>
                    <span className="text-muted-foreground tabular-nums">{s.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-lime to-coral" style={{ width: `${s.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-border bg-muted/30 p-4">
              <MessageCircle className="w-4 h-4 text-coral" />
              <p className="mt-2 text-xs italic text-muted-foreground">"Consistently brings empathy and clear judgment to every project. Made the team better."</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground font-bold">— Verified coach review</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-background">
        <div className="container-x py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">Who uses the HPI</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-ink">
              A trusted signal for <span className="text-lime">every stakeholder.</span>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { title: "Individuals", desc: "Stand out with a credential that quantifies your human edge — for jobs, grad school, and career pivots." },
              { title: "Employers", desc: "Hire and develop for the capabilities that compound — beyond resumes and degrees." },
              { title: "Institutions", desc: "Benchmark and certify student outcomes with a globally calibrated standard." },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl border border-border bg-card p-7">
                <FileCheck2 className="w-7 h-7 text-lime mb-4" />
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-cream">
        <div className="container-x py-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold text-center">Common questions</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-center">
              Good to <span className="text-lime">know.</span>
            </h2>
            <div className="mt-12 space-y-6">
              {[
                { q: "Who can review me?", a: "Peers must be people you've actually worked with in a practicum, project, or workplace cohort — verified by the program. Coaches are independently certified by EPOCHA." },
                { q: "Can I self-rate?", a: "No. The HPI is intentionally not a self-assessment. Your own reflection is welcomed in your portfolio, but the score itself comes only from peers and coaches." },
                { q: "How is bias controlled?", a: "We require a minimum of 8 peer reviewers and 2 coaches, apply reviewer calibration, and run outlier detection. Coach evaluations are audited quarterly." },
                { q: "Is my score permanent?", a: "Your score is valid for 12 months. As you gather reviews from new projects and contexts, your HPI updates to reflect continued growth." },
                { q: "Where can I display my HPI?", a: "Anywhere — LinkedIn, your resume, email signature, portfolio, and corporate HR systems via verifiable digital badge standards (Open Badges 3.0)." },
              ].map((f) => (
                <div key={f.q} className="rounded-2xl border border-cream/15 bg-white/5 p-6">
                  <h3 className="text-lg font-bold text-cream">{f.q}</h3>
                  <p className="mt-2 text-cream/70">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container-x py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-ink max-w-3xl mx-auto">
            Ready to earn your <span className="text-lime">Human Premium?</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Start your HPI assessment and join a global cohort proving they can out-think and out-adapt automation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/hpi-assessment" className="btn-primary">Begin your HPI assessment <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/connect" className="btn-outline">Talk to us</Link>
          </div>
        </div>
      </section>
    </>
  );
}