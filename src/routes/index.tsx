import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Trophy, Users, Briefcase, Heart, Zap, Brain, Wrench } from "lucide-react";
import hero from "@/assets/hero.jpg";
import pattern from "@/assets/pattern.jpg";
import leadership from "@/assets/leadership.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EPOCHA — The #1 practicum experience for youth 14–29" },
      { name: "description", content: "Turn knowledge into real experience. Project-based practicums with recognized credentials, coaching, and a global network." },
      { property: "og:title", content: "EPOCHA — Project-based practicums for youth" },
      { property: "og:description", content: "Real projects. Real coaching. Recognized credentials." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "cover", mixBlendMode: "screen" }}
        />
        <div className="container-x relative pt-20 pb-24 md:pt-32 md:pb-36 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lime">
              <Sparkles className="w-4 h-4" /> For youth aged 14–29
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
              The #1 <span className="text-lime">project-based</span> practicum experience.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl">
              Turn your knowledge into real-world experience. Build verified portfolios.
              Earn credentials that employers actually want.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/practicums" className="btn-primary">
                Explore practicums <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="btn-outline">About us</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-border">
              <img src={hero} alt="Young learners collaborating on real-world projects" width={1600} height={1200} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="container-x py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">Who we serve</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Built for youth <span className="text-lime">and</span> industry leaders.</h2>
          <p className="mt-4 text-foreground/70">
            Whether you're a young person ready to lead, an institution investing in talent,
            or an organisation driving social impact, EPOCHA is built for you.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { icon: Users, tag: "Youths · Students", title: "EPOCHA Practicums", desc: "Work on real projects, build your network, jumpstart your career — and earn recognized credentials.", cta: "Learn more", to: "/practicums" },
            { icon: Briefcase, tag: "Educational Institutions", title: "Industry Practicums", desc: "Bring fresh ideas into your organization. Tap into student talent and shape the next generation of leaders.", cta: "Partner with us", to: "/partner" },
            { icon: Heart, tag: "Non-profits", title: "Leadership Practicums", desc: "Engage passionate young talent ready to contribute, lead, and grow with your organization.", cta: "Support youth", to: "/partner" },
          ].map((c) => (
            <div key={c.title} className="group relative rounded-3xl border border-border bg-card p-8 transition-all hover:border-lime hover:-translate-y-1">
              <c.icon className="w-8 h-8 text-lime" />
              <p className="mt-6 text-[11px] uppercase tracking-widest text-muted-foreground">{c.tag}</p>
              <h3 className="mt-2 text-2xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.desc}</p>
              <Link to={c.to} className="mt-6 inline-flex items-center gap-2 text-lime text-sm font-medium">
                {c.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-x py-16 grid md:grid-cols-3 gap-10">
          {[
            { n: "1.8B", l: "Youth aged 14–29 globally" },
            { n: "3–4×", l: "Higher youth unemployment vs adults" },
            { n: "170M", l: "New AI-era roles by 2030" },
          ].map((s) => (
            <div key={s.n}>
              <div className="text-6xl md:text-7xl font-bold text-lime font-display">{s.n}</div>
              <p className="mt-3 text-foreground/80 max-w-xs">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GAIN */}
      <section className="container-x py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">What you gain</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Experience, credentials, coaching & competencies <span className="text-lime">employers actually want.</span>
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            { icon: Wrench, title: "Practice-first learning", desc: "Every practicum is built on the 'learning-by-doing' Practice Enterprise methodology where you run simulated business functions and solve real problems." },
            { icon: Trophy, title: "Recognized credentials", desc: "Certified as 'Good Practice' by the European Training Foundation (ETF), an EU agency active in 90+ countries." },
            { icon: Briefcase, title: "Career-ready portfolio", desc: "Build verified experience and jumpstart your career with long-term flexibility and impact." },
            { icon: Users, title: "Coaching & mentoring", desc: "Structured around timeless skills demanded by today's and tomorrow's labor market." },
          ].map((f) => (
            <div key={f.title} className="rounded-3xl border border-border p-8 bg-card">
              <f.icon className="w-8 h-8 text-coral" />
              <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING */}
      <section className="container-x py-24">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-coral">Upcoming experiences</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">2026 Intake</h2>
          </div>
          <Link to="/practicums" className="btn-outline text-sm">View all</Link>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { age: "14–18", title: "International Youth Leadership Camp", color: "lime" },
            { age: "19–29", title: "EPOCHA Practicums & Youth Advisory Board", color: "coral" },
            { age: "19–24", title: "Hanaro Emerging Leadership Practicum", color: "lime" },
          ].map((p) => (
            <article key={p.title} className="group rounded-3xl border border-border bg-card overflow-hidden transition-all hover:border-lime">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={leadership} alt="" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <span className={`inline-block text-xs px-3 py-1 rounded-full ${p.color === "lime" ? "bg-lime text-ink" : "bg-coral text-cream"}`}>{p.age} years old</span>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">2026 Intake</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t border-border">
        <div className="container-x py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-coral">Our approach</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Not just educated. <span className="text-lime">Be career-ready.</span></h2>
              <p className="mt-6 text-foreground/70">
                Structured, project-based practicum experiences. Built on core frameworks ensuring
                you develop EPOCH competencies, AI fluency, and leadership skills.
              </p>
              <blockquote className="mt-8 border-l-2 border-lime pl-5 italic text-foreground/80">
                "Anyone can learn to use AI. We coach AI Fluency alongside what it can never replace —
                the empathy, presence, and creativity that define irreplaceable leaders."
              </blockquote>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {[
                { n: "01", icon: Heart, title: "EPOCH Skills", desc: "MIT-backed framework — Empathy, Presence, Opinion, Creativity, Hope. The five capabilities AI cannot replicate." },
                { n: "02", icon: Brain, title: "AI Fluency", desc: "Knowledge, critical judgment, and practical skills to engage with AI purposefully and responsibly." },
                { n: "03", icon: Zap, title: "Project-Based Learning", desc: "Hands-on coaching, expert mentoring, and guided networking. Lead real projects. Build verified portfolios." },
              ].map((s) => (
                <div key={s.n} className="rounded-3xl bg-card border border-border p-6 flex flex-col">
                  <span className="text-coral text-sm font-display">{s.n}</span>
                  <s.icon className="mt-4 w-7 h-7 text-lime" />
                  <h3 className="mt-4 font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="rounded-[2.5rem] bg-lime text-ink p-12 md:p-20 relative overflow-hidden">
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold">Ready to lead what's next?</h2>
            <p className="mt-5 text-ink/80 text-lg">
              Join thousands of young leaders building real experience, real networks,
              and a real edge in an AI-driven world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/practicums" className="inline-flex items-center gap-2 bg-ink text-cream font-semibold px-6 py-3.5 rounded-full hover:bg-ink/90 transition">
                Find your practicum <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/partner" className="inline-flex items-center gap-2 border border-ink text-ink font-medium px-6 py-3.5 rounded-full hover:bg-ink hover:text-cream transition">
                For organizations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}