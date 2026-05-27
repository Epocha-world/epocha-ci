import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Sparkles, Target } from "lucide-react";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EPOCHA Learning Hub" },
      {
        name: "description",
        content:
          "EPOCHA is part of PEN Worldwide, the international network setting the benchmark for experiential, enterprise-based learning across 40+ countries.",
      },
      { property: "og:title", content: "About EPOCHA Learning Hub" },
      {
        property: "og:description",
        content:
          "We help youth move from challenges of entering the job market to thriving professionally with verified skills and real experience.",
      },
      { property: "og:image", content: team },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-x pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-coral">WHO WE ARE</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold max-w-4xl leading-[1]">
          Bridging <span className="text-lime">education</span> and employment.
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-2xl">
          We are making employability the global standard, ensuring every young professional is
          equipped to thrive in a competitive AI-driven market.
        </p>
      </section>

      <section className="container-x py-12">
        <div className="rounded-3xl overflow-hidden border border-border">
          <img
            src={team}
            alt="EPOCHA team collaborating"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-coral">The challenge</p>
          <h2 className="mt-3 text-4xl font-bold">A global employability crisis.</h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Young talent today enters a landscape where the odds are stacked against them. Beyond
            high unemployment, many are stuck in 'gig' roles without security because they haven't
            been given the tools to prove the high-level skills employers demand.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            EPOCHA exists to change that. We help international and diverse communities of young
            learners move from the challenges of entering the job market to thriving, fast-tracking
            careers with verified skills, real experience, and a genuine edge.
          </p>
        </div>
        <div className="grid gap-6 self-center">
          {[
            { n: "1.8B", l: "Youth aged 14–29 globally" },
            { n: "3–4×", l: "Higher youth unemployment vs adults" },
            { n: "170M", l: "New AI-era roles by 2030" },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border bg-card p-6 flex items-center gap-6"
            >
              <div className="text-5xl font-display font-bold text-lime min-w-[120px]">{s.n}</div>
              <p className="text-foreground/80">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="container-x py-20 grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Target,
              title: "What we do",
              desc: "We are making employability the global standard, ensuring every young professional is equipped to thrive in a competitive AI-driven market.",
            },
            {
              icon: Sparkles,
              title: "What We Want",
              desc: "A world where every young person has access to transformative learning experiences that equip them with the skills, networks, and confidence to shape their future.",
            },
            {
              icon: Globe,
              title: "Who We Work With",
              desc: "We partner with top institutions and employers to shape career-ready talent by advancing youth engagement and leadership.",
            },
          ].map((b) => (
            <div key={b.title}>
              <b.icon className="w-9 h-9 text-lime" />
              <h3 className="mt-5 text-2xl font-bold">{b.title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-coral">Global standard</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold max-w-3xl">
          Backed by a <span className="text-lime">global network.</span>
        </h2>
        <p className="mt-5 text-foreground/70 max-w-2xl">
          EPOCHA is part of PEN Worldwide, the international network setting the benchmark for
          experiential, enterprise-based learning across the globe operating in 40+ countries.
        </p>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Global Network",
              q: "Our learners don't just learn locally — they compete, collaborate, and connect on an international stage.",
              d: "Our practicums are grounded in global best practice shaped by decades of expertise in youth leadership and employability.",
            },
            {
              t: "Experiential Learning Hub",
              q: "Doing is the curriculum.",
              d: "Built on the PE model, EPOCHA places participants in dynamic professional environments to take on real roles.",
            },
            {
              t: "Digital Platform",
              q: "A credential that opens doors worldwide.",
              d: "A project-based learning platform that empowers partners to deliver evidence-based work experiences.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold">{c.t}</h3>
              <p className="mt-4 text-foreground/70 text-sm leading-relaxed">{c.d}</p>
              <p className="mt-6 italic text-lime text-sm">"{c.q}"</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link to="/connect" className="btn-primary">
            Our value <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
