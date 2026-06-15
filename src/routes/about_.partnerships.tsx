import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap, HandHeart } from "lucide-react";
import { Handshake } from "lucide-react";
import logoQualitax from "@/assets/logos/qualitax.svg";
import logoKoreaPen from "@/assets/logos/koreapen.png";
import logoPenWw from "@/assets/logos/pen-worldwide.png";

export const Route = createFileRoute("/about_/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships — EPOCHA" },
      { name: "description", content: "Partnerships with EPOCHA. Bring fresh ideas into your organization through industry and leadership practicums with talented youth aged 14–29." },
      { property: "og:title", content: "Partnerships — EPOCHA" },
      { property: "og:description", content: "Tap into student talent. Shape the next generation of leaders." },
    ],
  }),
  component: PartnershipsPage,
});

function PartnershipsPage() {
  return (
    <>
      <section className="container-x pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-coral text-black font-bold">Partner with us</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold max-w-4xl leading-[1]">
          Engage the <span className="text-lime">next generation</span> of leaders.
        </h1>
        <p className="mt-6 text-xl text-foreground/80 max-w-2xl">
          Build a career-ready talent pipeline tailored to your needs. Help create a unified 
          ecosystem where students learn by doing, institutions cultivate future talent, 
          and organizations increase their impact.
        </p>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-x py-16 grid md:grid-cols-3 gap-6">
        {[
          { icon: Building2, title: "Businesses", desc: "Get real work done by motivated student teams. Strengthen your employer brand while supporting youth employability." },
          { icon: GraduationCap, title: "Educational Institutions", desc: "Embed EPOCHA practicums into your curriculum. Offer your students globally recognized credentials." },
          { icon: HandHeart, title: "Non-profits", desc: "Mobilize passionate young talent ready to contribute to your mission and grow as leaders." },
        ].map((p) => (
          <div key={p.title} className="rounded-3xl border border-cream/15 bg-white/5 p-8">
            <p.icon className="w-9 h-9 text-lime" />
            <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
            <p className="mt-3 text-cream/70 leading-relaxed">{p.desc}</p>
          </div>
        ))}
        </div>
      </section>

      {/* PARTNER LOGO BANNER — animated marquee */}
      <section className="container-x py-20">
        <div className="flex items-center gap-3">
          <Handshake className="w-5 h-5 text-lime" />
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-bold">Who we work with</p>
        </div>
        <div className="mt-8 relative overflow-hidden rounded-3xl border border-border bg-muted/30 py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track gap-16 pr-16">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-16 shrink-0" aria-hidden={dup === 1}>
                {[
                  { src: logoQualitax, alt: "QualitaX", href: "https://www.qualitax.io/" },
                  { src: logoKoreaPen, alt: "Korea PEN", href: "https://koreapen.org/" },
                  { src: logoPenWw, alt: "PEN Worldwide", href: "https://penworldwide.org/" },
                ].map((l) => (
                  <a
                    key={l.alt + dup}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition"
                  >
                    <img src={l.src} alt={l.alt} className="h-14 w-auto object-contain" loading="lazy" />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-[2.5rem] bg-coral text-cream p-12 md:p-20">
          <h2 className="text-4xl md:text-6xl font-bold max-w-3xl">Let's build something together.</h2>
          <p className="mt-5 text-cream/85 text-lg max-w-2xl">
            Reach out to discuss how a customized EPOCHA practicum can deliver value
            for your organization and the next generation of leaders.
          </p>
          <Link to="/connect" className="mt-8 inline-flex items-center gap-2 bg-ink text-cream font-semibold px-6 py-3.5 rounded-full hover:bg-ink/90 transition">
            Start the conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}