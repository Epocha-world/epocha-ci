import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Briefcase, Building2, School, Sparkles, ShieldCheck, BadgeCheck, Rocket, UserCheck, Users, Brain, Bot, Lightbulb, Wrench, Heart, Eye, MessageSquare, PenTool, History } from "lucide-react";
import hero from "@/assets/hero.jpg";
import hanaro from "@/assets/practicum-hanaro.jpg";
import bannerBg from "@/assets/hero-banner.jpg";

export const Route = createFileRoute("/home-demo")({
  head: () => ({
    meta: [
      { title: "EPOCHA Demo — From practicums to lifelong learning" },
      { name: "description", content: "From youth practicums to EPOCH skills and lifelong learning — for youth, corporates, and schools. Get your verified Human Premium Index (HPI)." },
      { property: "og:title", content: "EPOCHA Demo — The Human Premium Credential" },
      { property: "og:description", content: "A standardized index that measures and certifies your un-automatable human capabilities." },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomeDemoPage,
});

function HomeDemoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bannerBg})` }} aria-hidden />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="container-x relative py-28 md:py-40 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">EPOCH human skills</p>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-5xl mx-auto">
            Build the human skills that make you <span className="text-lime">irreplaceable.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Master EPOCH — Empathy, Presence, Opinion, Creativity, Hope. The five skills AI can't replace.
          </p>
        </div>
      </section>

      {/* EPOCH FRAMEWORK — CURRICULUM */}
      <section className="bg-ink text-cream">
        <div className="container-x py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">Curriculum</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Master the five human advantages <span className="text-lime">AI can't fake.</span>
            </h2>
            <p className="mt-5 text-cream/70">
              Train every dimension that makes you irreplaceable — and prove it through real work.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Heart, letter: "E", title: "Build Empathy", desc: "Reading others' emotions and needs — the foundation of trust and collaboration." },
                { icon: Eye, letter: "P", title: "Master Presence", desc: "Full engagement in the moment. Listening, noticing, and responding with intention." },
                { icon: MessageSquare, letter: "O", title: "Judge with Conviction", desc: "Independent judgment and the courage to take a stand." },
                { icon: PenTool, letter: "C", title: "Create Fearlessly", desc: "Original ideas that turn constraints into breakthroughs." },
                { icon: History, letter: "H", title: "Lead with Hope", desc: "Forward-looking resilience that sustains effort and inspires others." },
              ].map((c) => {
                const I = c.icon;
                return (
                  <div key={c.title} className="rounded-3xl border border-cream/15 bg-white/5 p-8 transition-all hover:border-lime hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-ink font-bold text-xl">
                        {c.letter}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-lime/20 flex items-center justify-center text-lime">
                        <I className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{c.title}</h3>
                    <p className="mt-3 text-sm text-cream/70 leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* AI LITERACY — CURRICULUM */}
      <section className="bg-ink text-cream">
        <div className="container-x py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">Curriculum</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Use AI. <span className="text-lime">Don't fear it.</span>
            </h2>
            <p className="mt-5 text-cream/70">
              Learn to wield AI as an amplifier — responsibly, ethically, and effectively.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "Understand AI", desc: "Know where it excels and where it fails — and when to intervene." },
              { icon: Bot, title: "Prompt & Steer", desc: "Craft clear prompts and iterate toward better outputs." },
              { icon: Lightbulb, title: "Critical Judgment", desc: "Check AI for bias and accuracy. You stay the decision-maker." },
              { icon: Wrench, title: "Workflow Integration", desc: "Embed AI into real work to multiply your productivity." },
            ].map((c) => {
              const I = c.icon;
              return (
                <div key={c.title} className="rounded-3xl border border-cream/15 bg-white/5 p-8 transition-all hover:border-lime hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center text-coral mb-5">
                    <I className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm text-cream/70 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI LITERACY + EPOCH — HIGHLIGHT */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
            AI Literacy <span className="text-lime">+</span> EPOCH <span className="text-lime">= unstoppable.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-cream/70 max-w-2xl mx-auto">
            Wield the tools. Keep the judgment no algorithm can replicate.
          </p>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-ink text-cream">
        <div className="container-x py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">Who we serve</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Find your <span className="text-lime">path forward.</span>
            </h2>
            <p className="mt-5 text-cream/70">
              Starting a career, hiring leaders, or teaching the next generation — pick your program.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, audience: "Youth (14–29)", title: "Launch your career", desc: "Practicums and coaching that turn potential into a verified portfolio." },
              { icon: Briefcase, audience: "Job Seekers", title: "Re-skill & re-enter", desc: "Bootcamps and a verified HPI that prove you're future-ready." },
              { icon: Building2, audience: "Corporates", title: "Develop your people", desc: "Upskilling and talent decisions backed by structured peer review." },
              { icon: School, audience: "Schools & Universities", title: "Future-ready students", desc: "Plug our practicums and EPOCH curriculum into your programs." },
            ].map((c) => {
              const I = c.icon;
              return (
                <div key={c.audience} className="rounded-3xl border border-cream/15 bg-white/5 p-7 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-lime/20 flex items-center justify-center text-lime mb-5">
                    <I className="w-6 h-6" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">{c.audience}</p>
                  <h3 className="mt-2 text-xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm text-cream/70 leading-relaxed flex-1">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HANARO LEADERSHIP — YOUTH */}
      <section className="bg-ink text-cream">
        <div className="container-x py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden order-2 lg:order-1">
              <img src={hanaro} alt="Hanaro Leadership Practicum" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">For youth · Flagship program</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                Launch your career with <span className="text-lime">Hanaro.</span>
              </h2>
              <p className="mt-5 text-cream/80">
                Build a verified portfolio and earn credentials through real industry projects. Our flagship for ages 19–29.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Real projects with verified outcomes",
                  "Coaching and mentoring",
                  "Credentials backed by KoreaPEN",
                  "Portfolio for employers",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-cream/80">
                    <BadgeCheck className="w-5 h-5 text-lime shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/practicums/hanaro-marketing" className="btn-primary">
                  Explore Hanaro Practicum <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HUMAN PREMIUM INDEX — PEER & COACH REVIEW BADGE */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lime/10 via-background to-coral/10">
        <div className="container-x py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">The Human Premium Credential</p>
              <h2 className="mt-3 text-4xl md:text-6xl font-bold text-ink leading-[1.05]">
                Earn a badge <span className="text-lime">others</span> vouch for.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Forget self-tests. The <strong className="text-ink">Human Premium Index (HPI)</strong> is earned through structured feedback from <strong className="text-ink">peers</strong> and <strong className="text-ink">certified coaches</strong> on real projects.
              </p>
              <p className="mt-4 text-muted-foreground">
                Get measured by how others experience you — not how you rate yourself.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/how-hpi-works" className="btn-primary">
                  See how reviews work <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/practicums" className="btn-outline">Join a practicum</Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-lime flex items-center justify-center text-ink">
                      <BadgeCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">Peer + Coach verified</p>
                      <p className="text-sm font-bold text-ink">Human Premium Index</p>
                    </div>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-lime" />
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-muted/40 p-4 text-center">
                    <Users className="w-5 h-5 text-lime mx-auto" />
                    <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground font-bold">Peer reviews</p>
                    <p className="mt-1 text-2xl font-bold text-ink tabular-nums">12</p>
                  </div>
                  <div className="rounded-2xl bg-muted/40 p-4 text-center">
                    <UserCheck className="w-5 h-5 text-coral mx-auto" />
                    <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground font-bold">Coach reviews</p>
                    <p className="mt-1 text-2xl font-bold text-ink tabular-nums">3</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Verified HPI</p>
                  <p className="mt-1 text-6xl font-bold text-ink tabular-nums">87<span className="text-2xl text-muted-foreground">/100</span></p>
                </div>
                <p className="mt-6 text-center text-xs text-muted-foreground italic">
                  "Consistently brings empathy and clear judgment to every project." — Coach review
                </p>
              </div>
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
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/practicums" className="btn-primary">Explore programs <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/connect" className="btn-outline">Talk to us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
