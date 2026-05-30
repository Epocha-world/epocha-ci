import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  ExternalLink,
  HandHeart,
  Handshake,
  Lightbulb,
  Linkedin,
  Quote,
  Rocket,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import aboutHero from "@/assets/about-hero.jpg";
import maevaPortrait from "@/assets/maeva-caricature.png";
import jessPortrait from "@/assets/jess-caricature.png";

import logoQualitax from "@/assets/logos/qualitax.svg";
import logoKoreaPen from "@/assets/logos/koreapen.png";
import logoPenWw from "@/assets/logos/pen-worldwide.png";

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
    ],
  }),
  component: AboutPage,
});

function CountUp({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1800,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(value * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src={aboutHero}
          alt="Young professionals collaborating"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="container-x relative h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-cream max-w-4xl leading-[1]">
            <span className="text-coral">No more NEET.</span>
            <span className="block mt-4">Every young person in motion.</span>
          </h1>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="container-x pt-20 pb-12">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">Who we serve</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Built for youth <span className="text-lime">and</span> industry leaders.
          </h2>
          <p className="mt-4 text-foreground/70">
            Whether you're a young person ready to lead, an institution investing in talent, or an
            organisation driving social impact, EPOCHA is built for you.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              tag: "Youths · Students",
              title: "EPOCHA Practicums",
              desc: "Work on real projects, build your network, jumpstart your career while earning recognized credentials.",
              cta: "Learn more",
              to: "/practicums",
            },
            {
              icon: Building2,
              tag: "BUSINESSES AND EDUCATIONAL INSTITUTIONS",
              title: "Industry Practicums",
              desc: "Bring fresh ideas into your organization. Tap into motivated talent and help shape the future of work.",
              cta: "Learn more",
              to: "/partner",
            },
            {
              icon: HandHeart,
              tag: "Non-profits",
              title: "Leadership Practicums",
              desc: "Engage passionate young talent ready to contribute, lead, and grow. Discover how trainee collaboration can help your organization.",
              cta: "Learn more",
              to: "/partner",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative rounded-3xl border border-border bg-muted/30 p-8 transition-all hover:border-lime hover:-translate-y-1"
            >
              <c.icon className="w-8 h-8 text-lime" />
              <p className="mt-6 text-[11px] uppercase tracking-widest text-foreground/60">
                {c.tag}
              </p>
              <h3 className="mt-2 text-2xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.desc}</p>
              <Link
                to={c.to}
                className="mt-6 inline-flex items-center gap-2 text-lime text-sm font-medium"
              >
                {c.cta}{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-x py-20 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-coral text-black font-bold">
              The challenge
            </p>
            <h2 className="mt-3 text-4xl font-bold">A global employability crisis.</h2>
            <p className="mt-5 text-cream/70 leading-relaxed">
              Young talent today enters a landscape where the odds are stacked against them. Beyond
              high unemployment, many are stuck in 'gig' roles without security because they haven't
              been given the tools to prove the high-level skills employers demand.
            </p>
            <p className="mt-4 text-cream/70 leading-relaxed">
              EPOCHA exists to change that. We help international and diverse communities of young
              learners move from the challenges of entering the job market to thriving,
              fast-tracking careers with verified skills, real experience, and a genuine edge.
            </p>
          </div>
          <div className="grid gap-6 self-center">
            {[
              {
                key: "youth",
                num: <CountUp value={1.8} decimals={1} suffix="B" />,
                l: "Youth aged 14–29 globally",
              },
              {
                key: "unemp",
                num: <CountUp value={4} suffix="×" />,
                l: "Higher youth unemployment vs adults",
              },
              {
                key: "roles",
                num: <CountUp value={170} suffix="M" />,
                l: "New AI-era roles by 2030",
              },
            ].map((s) => (
              <div
                key={s.key}
                className="rounded-2xl border border-cream/15 bg-white/5 p-6 flex items-center gap-6"
              >
                <div className="text-5xl font-display font-bold text-lime min-w-[120px]">
                  {s.num}
                </div>
                <p className="text-cream/80">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="container-x py-20 grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Lightbulb,
              title: "Our Approach",
              desc: "Connecting those who are learning, those who are teaching, and those who are building through practicum experiences. Because none of them should have to do it alone.",
            },
            {
              icon: Rocket,
              title: "What We Want",
              desc: "To create a unified ecosystem where students learn by doing, businesses access job-ready talent, institutions cultivate leaders, and organizations increase their impact together.",
            },
            {
              icon: Handshake,
              title: "Who We Work With",
              desc: "We partner with forward-thinking organizations across education, marketing, business, social enterprise, creative industries, sustainability and environment, cultural entertainment and tourism.",
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

      {/* CREATIVE BANNER — Our Story Intro */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-lime/30 blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-coral/25 blur-[100px]" />
        </div>
        <div className="container-x relative py-20 md:py-28 flex flex-col items-center text-center">
          <div className="w-16 h-[2px] bg-coral mb-8" />
          <blockquote className="max-w-4xl">
            <p className="text-3xl md:text-5xl font-bold text-cream leading-[1.15]">
              We didn't build Epocha to fix a system.{" "}
              <span className="text-lime">
                We built it for people because lost potential is humanity's greatest waste.
              </span>{" "}
              Not resources. Not time. People. People deserve better and better is still possible.
            </p>
          </blockquote>
          <p className="mt-8 text-cream/50 text-sm uppercase tracking-[0.2em]">
            The people behind the mission
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="container-x py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">Our story</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Built on the power of <span className="text-lime">connection</span>.
          </h2>
          <p className="mt-4 text-foreground/70">
            Maeva and Jess founded EPOCHA on a shared conviction: that real growth happens when
            people are genuinely connected — to themselves, to each other, and to the work that
            matters. Every practicum, coaching session, and partnership we build is designed to turn
            that belief into lived experience.
          </p>
        </div>

        {/* CO-FOUNDERS */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Maeva Ofranc",
              role: "Co-Founder & CEO",
              img: maevaPortrait,
              bio: "Generalist and systems thinker, Maeva designs and builds high-impact coaching and mentoring programs. She believes every young person deserves a runway, not a ladder. Rooted in Caribbean French heritage and shaped by many cultures, she brings a depth of perspective that makes her work truly borderless.",
              linkedin: "https://www.linkedin.com/in/maeva-ofranc-49b96b24/",
            },
            {
              name: "Jess Ng",
              role: "Co-Founder & CMO",
              img: jessPortrait,
              bio: "Founder of Upleash and Impact Comedy, Jess is a soft-skills coach who helps people communicate with clarity, lead with self-awareness, and build genuine connection at work. She bridges the gap between what businesses need and what young talent is ready to bring.",
              linkedin: "https://www.linkedin.com/in/jesschingwa/",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="rounded-3xl border border-border bg-muted/30 p-8 flex gap-6 items-start"
            >
              <img
                src={p.img}
                alt={`${p.name} caricature portrait`}
                loading="lazy"
                width={96}
                height={96}
                className="w-24 h-24 rounded-2xl object-cover bg-gradient-to-br from-lime/40 to-coral/40 shrink-0"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 text-foreground/60 hover:text-lime transition" />
                  </a>
                </div>
                <p className="text-sm text-coral font-semibold mt-1">{p.role}</p>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* OTHER PROJECTS */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-lime" />
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-bold">
              Other ventures
            </p>
          </div>
          <h3 className="mt-3 text-3xl font-bold">What else we're working on.</h3>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {[
              {
                founder: "Maeva Ofranc",
                projects: [
                  {
                    name: "Youth for Peace: UNESCO Intercultural Leadership Programme",
                    desc: "A UNESCO programme developing intercultural leadership in young people through dialogue, collaboration, and peace-building.",
                    href: "https://www.unesco.org/en/interculturaldialogue/youthforpeace?hub=181405",
                    cta: "Learn more",
                  },
                  {
                    name: "Virtual Entrepreneurship Program (VEP) with KoreaPEN",
                    desc: "A Practice Enterprise-based after-school program building career readiness and college competitiveness through global peer collaboration and experiential learning.",
                    href: "https://vep-info-english-vks96vv.gamma.site/",
                    cta: "Learn more",
                  },
                ],
              },
              {
                founder: "Jess Ng",
                projects: [
                  {
                    name: "Impact Comedy — Improv Training",
                    desc: "A creative approach to building confidence and communication through improvisational theater.",
                    href: "https://impactcomedy.co/",
                    cta: "Visit website",
                  },
                  {
                    name: "Upleash",
                    desc: "A transformative coaching practice unlocking personal and professional potential through guided experiences.",
                    href: "https://upleash.co/",
                    cta: "Visit website",
                  },
                ],
              },
            ].map((group) => (
              <div key={group.founder} className="flex flex-col gap-4">
                <div className="rounded-2xl bg-ink text-cream p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-lime font-bold">
                    Coaching by
                  </p>
                  <h4 className="mt-1 text-xl font-bold">{group.founder}</h4>
                </div>
                {group.projects.map((proj) => (
                  <a
                    key={proj.name}
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-border p-6 hover:border-lime transition block"
                  >
                    <h4 className="font-bold">{proj.name}</h4>
                    <p className="mt-2 text-sm text-foreground/70">{proj.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-lime">
                      {proj.cta || "Visit website"}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Quote className="w-5 h-5 text-lime" />
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-bold">
              Coaching testimonials
            </p>
          </div>
          <h3 className="mt-3 text-3xl font-bold">What people say about working with us.</h3>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "Due to the programme I am in, I am interacting with an even more diverse group of the population, hence learning about perspectives taking and managing tensions are definitely the most valuable insights I have learned from our coaching sessions. I find that I am better able to take a step back and see things from a wider perspective, this helps in negotiation and navigating for an outcome that benefits the parties involved. ",
                author:
                  "Sharon, Singapore, Youth for Peace: UNESCO Intercultural Leadership Programme, Cohort of 2026",
                cta: "See what Sharon is up to",
                href: "https://www.youthcirclessg.org/",
              },
              {
                quote:
                  "Throughout our collaboration, Maeva has demonstrated exceptional skill and dedication to her cohort. She facilitates peer exchange sessions and monthly one-on-one coaching meetings with care and rigour, consistently creating spaces where Young Leaders feel both supported and challenged. Her reports to MLI reflect a nuanced understanding of each leader’s growth trajectory, and she has shown real creativity in adapting her approach to the diverse cultural contexts of her cohort. Among the coaches we work with through this programme, Maeva stands out for her ability to empathetically lead her cohort members to implement successful projects.",
                author: "Program Director, The Marshall Legacy Institute ",
              },
              {
                quote:
                  "Connection matters more than I thought. Not just in theory, but in how you actually show up. I felt that a lot through our Youth for Peace work. Maeva made it easy to open up and think things through. She answers everything. Honest, direct, but still respectful. That really helped me see things more clearly. I became more intentional with how I engage. Before, I was focused on getting things done. Now, I pay more attention to how I build relationships, especially with the youth we work with.",
                author:
                  "Joanne, Philippines, Youth for Peace: UNESCO Intercultural Programme, Cohort of 2026",
                cta: "See what Joanne is up to",
                href: "https://www.facebook.com/CandonYouthMovement/",
              },
              {
                quote:
                  "Maeva consistently demonstrated outstanding organisational skills, responsiveness, intercultural sensitivity, and a genuine commitment to empowering young people.\nShe developed an exceptionally clear and well-organised tracking system for her one-to-one mentoring sessions to the extent that her template became the model we used across the programme for other coaches and mentors.\nShe consistently went above and beyond in supporting participants, ensuring that young leaders felt heard, encouraged, and guided. Her warmth and professionalism helped create an environment of trust and motivation.\nMaeva combines creativity with rigour, strategic thinking with empathy, and excellent project management skills with a deeply collaborative spirit.",
                author: "Project Appointee, UNESCO",
              },
              {
                quote:
                  "Working with Maeva has been an absolutely incredible journey.  As our project mentor, Coach Maeva was instrumental in helping us navigate key challenges. She ran dedicated sessions and simulations on intercultural communication specifically tailored for migrant-dense communities. Through her honest and sometimes tough feedback, I came to a profound realization: we all have a passion to change the world in our own unique ways, but that dream can only become reality when we take healthy steps; steps that are intentional, disciplined, and guided. Having someone like her hold my hands through that journey meant everything. Maeva didn't just teach me this theory; she walked my team and I through simulations, real scenarios, and honest reflections that prepared me for the ground reality. Her guidance transformed our challenges into actionable solutions. I am deeply grateful for her support.",
                author:
                  "Dennis, Liberia, Youth for Peace: UNESCO Intercultural Leadership Programme, Cohort of 2026",
              },
              {
                quote:
                  "During our sessions, I received very important advice and insights for my project.  Maeva always explained things clearly, helped me navigate challenges. The most significant outcome is that my project was successfully implemented.",
                author:
                  "Nazgul, Kyrgyzstan, Youth for Peace: UNESCO Intercultural Programme, Cohort of 2026",
                cta: "See what Nazgul is up to",
                href: "https://www.instagram.com/nazgul_dolotkeldieva?igsh=MWp5bnFtY3ZlNHZrNA==",
              },
            ]
              .filter((t) => t.quote)
              .map((t, i) => (
                <figure key={i} className="rounded-3xl bg-muted/30 border border-border p-8">
                  <blockquote className="text-foreground/80 leading-relaxed italic whitespace-pre-line">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-foreground/60">— {t.author}</figcaption>
                  {t.cta && t.href && (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                    >
                      {t.cta}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </figure>
              ))}
          </div>
        </div>

        {/* WHO WE WORK WITH — animated logo marquee */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Handshake className="w-5 h-5 text-lime" />
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-bold">
              Who we work with
            </p>
          </div>
          <div className="mt-8 relative overflow-hidden rounded-3xl border border-border bg-muted/30 py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track gap-16 pr-16">
              {[...Array(2)].map((_, dup) => (
                <div
                  key={dup}
                  className="flex items-center gap-16 shrink-0"
                  aria-hidden={dup === 1}
                >
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
                      <img
                        src={l.src}
                        alt={l.alt}
                        className="h-14 w-auto object-contain"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="rounded-[2.5rem] bg-ink text-cream p-12 md:p-20 relative overflow-hidden">
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold">Ready to lead what's next?</h2>
            <p className="mt-5 text-cream/80 text-lg">
              Join thousands of young leaders building real experience, real networks, and a real
              edge in an AI-driven world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/practicums"
                className="inline-flex items-center gap-2 bg-lime text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-lime/90 transition"
              >
                Find your practicum <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/partner"
                className="inline-flex items-center gap-2 border border-cream text-cream font-medium px-6 py-3.5 rounded-full hover:bg-cream hover:text-ink transition"
              >
                For organizations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
