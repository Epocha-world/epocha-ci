import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap, HandHeart } from "lucide-react";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — EPOCHA" },
      {
        name: "description",
        content:
          "Partner with EPOCHA. Bring fresh ideas into your organization through industry and leadership practicums with talented youth aged 14–29.",
      },
      { property: "og:title", content: "Partner with EPOCHA" },
      {
        property: "og:description",
        content: "Tap into student talent. Shape the next generation of leaders.",
      },
    ],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  return (
    <>
      <section className="container-x pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-coral text-black font-bold">
          Partner with us
        </p>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold max-w-4xl leading-[1]">
          Engage the <span className="text-lime">next generation</span> of leaders.
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-2xl">
          Build a career-ready talent pipeline tailored to your needs. Help create a unified
          ecosystem where students learn by doing, institutions cultivate future talent, and
          organizations increase their impact.
        </p>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-x py-16 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              title: "Businesses",
              desc: "Get real work done by motivated student teams. Strengthen your employer brand while supporting youth employability.",
            },
            {
              icon: GraduationCap,
              title: "Educational Institutions",
              desc: "Embed EPOCHA practicums into your curriculum. Offer your students globally recognized credentials.",
            },
            {
              icon: HandHeart,
              title: "Non-profits",
              desc: "Mobilize passionate young talent ready to contribute to your mission and grow as leaders.",
            },
          ].map((p) => (
            <div key={p.title} className="rounded-3xl border border-cream/15 bg-white/5 p-8">
              <p.icon className="w-9 h-9 text-lime" />
              <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-cream/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-[2.5rem] bg-coral text-cream p-12 md:p-20">
          <h2 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Let's build something together.
          </h2>
          <p className="mt-5 text-cream/85 text-lg max-w-2xl">
            Reach out to discuss how a customized EPOCHA practicum can deliver value for your
            organization and the next generation of leaders.
          </p>
          <Link
            to="/connect"
            className="mt-8 inline-flex items-center gap-2 bg-ink text-cream font-semibold px-6 py-3.5 rounded-full hover:bg-ink/90 transition"
          >
            Start the conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
