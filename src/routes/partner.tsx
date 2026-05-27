import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap, Heart } from "lucide-react";

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
        <p className="text-xs uppercase tracking-[0.2em] text-coral">Partner with us</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold max-w-4xl leading-[1]">
          Engage the <span className="text-lime">next generation</span> of leaders.
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-2xl">
          Build a career-ready talent pipeline tailored to your needs. Help create a unified
          ecosystem where students learn by doing, institutions cultivate future talent, and
          organizations increase their impact.
        </p>
      </section>

      <section className="container-x py-16 grid md:grid-cols-3 gap-6">
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
            icon: Heart,
            title: "Non-profits",
            desc: "Mobilize passionate young talent ready to contribute to your mission and grow as leaders.",
          },
        ].map((p) => (
          <div key={p.title} className="rounded-3xl border border-border bg-card p-8">
            <p.icon className="w-9 h-9 text-lime" />
            <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
            <p className="mt-3 text-foreground/70 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </section>

      <section className="container-x py-20">
        <div className="rounded-[2.5rem] bg-coral text-cream p-12 md:p-20">
          <h2 className="text-4xl md:text-6xl font-bold max-w-3xl">Our Partners</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "PEN Worldwide — Practice Enterprise Network",
                desc: "PEN Worldwide is a non-profit organization and the coordinating body of the international Practice Enterprise (PE) network. Established in 1993 as a European Union-funded initiative and formalised as an independent association from 1997, PEN Worldwide today administers a global network of over 7,000 Practice Enterprises operating in schools, universities, vocational training institutions, companies, and training centres across more than 40 countries.",
              },
              {
                title: "KoreaPEN — PEN Worldwide Central Office in South Korea",
                desc: "KoreaPEN is the PEN Worldwide Central Office in South Korea. Established at the end of 2011, with its first Practice Enterprise activities launched in 2013 under the mentorship of the German Central Office, KoreaPEN has grown to become one of Asia's leading Practice Enterprise organisations, connecting participants to a worldwide network of over 7,000 Practice Enterprises across countries.",
              },
              {
                title: "QualitaX",
                desc: "QualitaX builds practical AI capability by delivering AI systems, governance frameworks and AI training to organisations worldwide. By aligning technology, governance, and human capability, they help organisations worldwide build resilient AI ecosystems that are safe, effective, and built to last. Their approach is holistic: they start by embedding robust governance for safety and compliance, then deploy custom AI that streamlines and automates workflows, and finally equip teams with domain-specific training that turns hesitation into capability.",
              },
              {
                title: "UpperClass",
                desc: "UpperClass connects universities, brands, and students through creator-powered campaigns. It is where student voices become a career launchpad. Students create content, build their brand, and unlock real opportunities while helping universities fill seats and brands reach Gen Z in the most authentic way possible: through the people already living the experience.",
              },
              {
                title: "The Seagull Films Korea",
                desc: "The Seagull Films is an international production company dedicated to socially impactful, culturally rich cinema. With a strong focus on Asian-European co-productions and voices worldwide, they champion stories that explore freedom, identity, and human rights tackling themes of censorship, oppression, and resistance. Driven by artistic integrity and a belief in film as a force for change, The Seagull Films brings together filmmakers and producers across borders to create work that is both artistically ambitious and deeply resonant.",
              },
            ].map((partner) => (
              <div
                key={partner.title}
                className="rounded-3xl border border-cream/20 bg-cream/10 p-6"
              >
                <h3 className="text-2xl font-bold">{partner.title}</h3>
                <p className="mt-4 text-cream/85 leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/connect"
            className="mt-8 inline-flex items-center gap-2 bg-ink text-cream font-semibold px-6 py-3.5 rounded-full hover:bg-ink/90 transition"
          >
            Partner with us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
