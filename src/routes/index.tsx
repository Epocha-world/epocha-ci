import { createFileRoute, Link } from "@tanstack/react-router";

import {
  ArrowRight,
  Check,
  X,
  HandHeart,
  Users,
  Building2,
  HeartPulse,
  Atom,
  Quote,
  Zap,
  UserCheck,
  PencilRuler,
  BarChart3,
  MessagesSquare,
  Briefcase,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero.jpg";
import bannerBg from "@/assets/hero-banner.jpg";
import leadershipCamp from "@/assets/practicum-leadership-camp.jpg";
import advisoryBoard from "@/assets/practicum-advisory-board.jpg";
import hanaro from "@/assets/practicum-hanaro.jpg";
import globalBg from "@/assets/global-network-bg.jpg";
const trackImages = [leadershipCamp, advisoryBoard, hanaro];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.floor(eased * end));
              if (p < 1) requestAnimationFrame(tick);
              else setValue(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EPOCHA — The #1 practicum experience for youth 14–29" },
      {
        name: "description",
        content:
          "Turn knowledge into real experience. Project-based practicums with recognized credentials, coaching, and a global network.",
      },
      { property: "og:title", content: "EPOCHA — Project-based practicums for youth" },
      {
        property: "og:description",
        content: "Real projects. Real coaching. Recognized credentials.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const rotatingWords = ["experience", "network", "edge"];
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % rotatingWords.length), 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {/* HERO — rotating words banner */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="container-x relative py-28 md:py-40 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-5xl mx-auto">
            Build real{" "}
            <span key={wordIdx} className="text-lime inline-block animate-fade-in">
              {rotatingWords[wordIdx]}
            </span>{" "}
            in an AI-driven world.
          </h1>
        </div>
      </section>

      {/* WHO WE SERVE (moved from About) */}
      <section className="container-x pt-20 pb-12">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">Who we serve</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Built for youth and industry leaders.
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
              tag: "YOUTHS · STUDENTS",
              title: "\n",
              desc: "Work on real projects, build your network, jumpstart your career while earning recognized credentials.",
              cta: "Learn more",
              to: "/practicums",
            },
            {
              icon: Building2,
              tag: "BUSINESSES · EDUCATIONAL INSTITUTIONS",
              title: "\n",
              desc: "Bring fresh ideas into your organization. Tap into motivated talent and help shape the future of work.",
              cta: "Learn more",
              to: "/about/partnerships",
            },
            {
              icon: HandHeart,
              tag: "NON-PROFITS · CHARITIES",
              title: "\n",
              desc: "Engage passionate young talent ready to contribute, lead, and grow. Discover how trainee collaboration can help your organization.",
              cta: "Learn more",
              to: "/about/partnerships",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative rounded-3xl border border-border bg-muted/30 p-8 transition-all hover:border-lime hover:-translate-y-1"
            >
              <c.icon className="w-8 h-8 text-lime" />
              <p className="mt-6 text-xs uppercase tracking-widest text-foreground font-bold">
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

      {/* INTERNSHIP VS PRACTICUM — own section, dark mode */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-cream">
              Not all internship experience is <br />
              <span className="text-lime">created equal.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/70">
              EPOCHA is a project-based learning hub where youth aged 14-29 build their career
              portfolio through practicums, businesses access job-ready talent, institutions
              cultivate leaders, and organizations increase their impact together.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-cream/15 p-8 bg-white/5">
              <h3 className="text-xl font-bold text-cream/60">Traditional Internship</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Company-driven agenda",
                  "Tasks vary by employer mood and need",
                  "Little to no coaching",
                  "Just a reference letter",
                  "Outcomes depend on where you land",
                ].map((c) => (
                  <li key={c} className="flex gap-3 text-cream/60">
                    <X className="w-5 h-5 text-lime shrink-0 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-lime p-8 bg-white/5">
              <h3 className="text-xl font-bold text-lime">Our Practicums</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Youth-centered design",
                  "Project-based with clear deliverables",
                  "Coaching and mentoring throughout",
                  "Recognized & certified credentials",
                  "Progress you can actually measure",
                ].map((c) => (
                  <li key={c} className="flex gap-3 text-cream">
                    <Check className="w-5 h-5 text-lime shrink-0 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS A PRACTICUM — separate section */}
      <section className="bg-background text-foreground">
        <div className="container-x py-20">
          <div id="what-is-a-practicum" className="scroll-mt-24">
            <div className="relative overflow-hidden rounded-3xl bg-ink text-cream border border-cream/10 p-10 md:p-14">
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#B07A1A]/40" />
              <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-[#B07A1A]/40" />
              <div className="relative">
                <h2 className="text-5xl md:text-7xl font-bold leading-[0.95]">
                  What is a <br />
                  <span className="text-lime">Practicum?</span>
                </h2>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-ink text-cream p-8 md:p-12">
              <Quote className="w-8 h-8 text-cream/40" />
              <p className="mt-6 text-lg md:text-xl text-cream/90 leading-relaxed max-w-3xl">
                EPOCHA practicums are{" "}
                <span className="font-bold">structured learning experiences</span> where trainees
                apply their knowledge to <span className="font-bold">real projects</span> under the
                coaching, mentoring, and guidance of{" "}
                <span className="font-bold">professionals and mentor companies</span>. You learn by
                doing — taking real roles and solving real problems.
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-[#B07A1A]/80 text-ink p-5 flex items-center gap-3">
              <Zap className="w-6 h-6 shrink-0" fill="currentColor" />
              <p className="font-bold text-base md:text-lg">
                The fastest way we know to turn potential into evidence of work.
              </p>
            </div>

            <div className="mt-14">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-bold">
                How you learn
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-5">
                {[
                  {
                    icon: UserCheck,
                    title: "Real roles",
                    desc: "You hold an actual position with genuine responsibilities — not a simulation.",
                  },
                  {
                    icon: PencilRuler,
                    title: "Real problems",
                    desc: "You work on live projects with actual outcomes, decisions, and stakes.",
                  },
                  {
                    icon: BarChart3,
                    title: "Real evidence",
                    desc: "You leave with a documented portfolio — proof of what you did and how you showed up.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-cream/10 bg-ink text-cream p-7 text-center"
                  >
                    <item.icon className="w-6 h-6 mx-auto text-lime" />
                    <h3 className="mt-4 font-bold text-cream">{item.title}</h3>
                    <p className="mt-2 text-sm text-cream/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-bold">
                Who supports you
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: MessagesSquare,
                    title: "Coaching",
                    desc: "Ongoing, personalised guidance that helps you improve your performance in real time throughout the practicum.",
                  },
                  {
                    icon: Users,
                    title: "Mentoring",
                    desc: "Relationship-based support focused on your longer-term professional development and growth.",
                  },
                  {
                    icon: Building2,
                    title: "EPOCHA professionals",
                    desc: "Internal expertise that ensures quality, consistency, and structure across your learning experience.",
                  },
                  {
                    icon: Briefcase,
                    title: "Mentor companies",
                    desc: "External industry partners who bring real-world perspective, professional networks, and business context.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-ink text-cream p-6 flex gap-4">
                    <item.icon className="w-6 h-6 text-lime shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-cream">{item.title}</h3>
                      <p className="mt-1 text-sm text-cream/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-ink text-cream border border-cream/10 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-lime">Why it matters</h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Hands-on experience is exactly what employers look for — a practicum gives you that before you graduate or enter the job market.",
                  "It is the best preparation if you want to start your own small business — you learn how real operations, teams, and decisions work.",
                  "You learn how to show up, contribute, and lead — skills that no classroom can fully teach.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-cream/90">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B07A1A] shrink-0" />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE — separate section */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 md:py-24">
          <p className="max-w-4xl mx-auto text-center text-2xl md:text-4xl font-bold leading-snug text-cream">
            A practicum is not a course. It is not an internship. It is{" "}
            <span className="text-lime">learning that leaves something behind.</span>
          </p>
        </div>
      </section>

      {/* THREE PRACTICUM TRACKS */}
      <section id="choose-your-practicum" className="bg-background text-foreground scroll-mt-20">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">Available now</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Choose your <span className="text-lime">practicum.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-3xl">
            <br />
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                age: "14–18",
                title: "Start-up Lab Camp",
                desc: "Build confidence, find your voice, and develop cross-cultural fluency by launching your very own Practice Enterprise, a trainee-run company that operates like a real business.",
                to: "/practicums/startup-lab-camp",
                hash: null,
              },
              {
                age: "19–29",
                title: "Hanaro Leadership Project",
                desc: "Partner with NGOs and charities to drive meaningful change within your community. Lead campaigns and champion a cause that matters to you.",
                to: "/practicums/hanaro",
                hash: null,
              },
              {
                age: "19–29",
                title: "Mirae Industry Project",
                desc: "Work directly with businesses, grow a career portfolio you're proud of, and build the strategic leadership skills that set you apart.",
                to: "/practicums/mirae-industry",
                hash: null,
              },
            ].map((p, i) => {
              const inner = (
                <>
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
                    <span className="inline-block self-start text-xs px-3 py-1 rounded-full bg-lime text-ink">
                      {p.age} years old
                    </span>
                    <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1">
                      {p.desc}
                    </p>
                    <p className="mt-5 text-lime" aria-label={`Open ${p.title}`}>
                      <ArrowRight className="w-5 h-5" />
                    </p>
                  </div>
                </>
              );
              const baseCls =
                "rounded-3xl border border-border bg-card overflow-hidden flex flex-col";
              if (p.to) {
                return (
                  <Link
                    key={p.title}
                    to={p.to}
                    hash={p.hash ?? undefined}
                    className={`${baseCls} transition-transform hover:-translate-y-1`}
                  >
                    {inner}
                  </Link>
                );
              }
              return (
                <article key={p.title} className={baseCls}>
                  {inner}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* What you will gain */}
      <section className="bg-ink text-cream">
        <div className="container-x py-28 md:py-36">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">
              What you will gain
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
              Walk away with <span className="text-lime">work experience.</span>
            </h2>
            <p className="mt-6 text-lg text-cream/80">
              Every EPOCHA practicum is built on the Practice Enterprise (PE) model. You leave with
              tangible outcomes you can use immediately whether you're applying for jobs,
              university, or starting something of your own.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "A skills-based portfolio",
                desc: "A portfolio of evidence that curates your best work, demonstrates what you can do, and your career readiness.",
              },
              {
                title: "Recognised credential",
                desc: "A PEN Worldwide credential that signals to employers you've trained in a real-world environment.",
              },
              {
                title: "Workplace training",
                desc: "The human competencies, leadership skills, and AI fluency that modern hiring managers actively screen for.",
              },
              {
                title: "A global network",
                desc: "Connections with peers, mentors, and industry partners that last well beyond your time with us.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-cream/10 bg-white/5 p-8">
                <h3 className="text-xl font-bold text-cream">{item.title}</h3>
                <p className="mt-3 text-sm text-cream/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/practicums"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-lime text-ink font-semibold hover:bg-lime/90 transition-colors"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-background">
        <div className="container-x py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">TRAINING OFFER</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-ink">
              Not just educated. <br />
              <span className="text-lime">Career-ready.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              &nbsp;All practicum experience includes self-development coaching, AI training and
              career-readiness workshops.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "EPOCH Awareness Training",
                desc: "We embed MIT Sloan's EPOCH Framework across all our practicums to help young people develop the essential human capabilities that AI cannot replace.",
                icon: HeartPulse,
                link: { label: "Learn more", href: "/practicums#epoch-awareness-training" },
              },
              {
                title: "AI Fluency Training",
                desc: "We partner with QualitaX to offer practical AI training that gives young people the fluency to step confidently and responsibly in the modern workforce.",
                icon: Atom,
                link: { label: "Learn more", href: "/practicums#ai-fluency-training" },
              },
              {
                title: "Career-readiness Workshops",
                desc: "We empower young people to build critical life skills they need to solve real-world problems, tackle academic and professional challenges while driving meaningful changes.",
                icon: Users,
                link: { label: "Learn more", href: "/practicums#career-readiness-workshops" },
              },
            ].map((c) => {
              const CardIcon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group relative flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:border-lime hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center text-lime mb-5">
                    <CardIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {c.title === "AI Fluency Training" ? (
                      <>
                        We partner with{" "}
                        <a
                          href="https://www.qualitax.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lime hover:underline font-medium"
                        >
                          QualitaX
                        </a>{" "}
                        to offer practical AI training that gives young people the fluency to step
                        confidently and responsibly in the modern workforce.
                      </>
                    ) : (
                      c.desc
                    )}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href={c.link.href}
                      target={c.link.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm font-medium text-lime hover:underline"
                    >
                      {c.link.label} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GLOBAL STANDARD (moved from About) */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${globalBg})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/90"
          aria-hidden
        />
        <div className="container-x py-24 relative">
          <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">Global standard</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold max-w-3xl">
            Backed by a <span className="text-lime">global network.</span>
          </h2>
          <p className="mt-5 text-cream/70 max-w-2xl whitespace-pre-line">
            EPOCHA is part of PEN Worldwide, the international network setting the benchmark for
            experiential and work-based across the globe operating in 40 countries.
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Practice Enterprise",
                q: "Our trainees don't just learn locally; they compete, collaborate, and connect on an international stage.",
                d: "We follow PEN Worldwide's Practice Enterprise ‘learning-by-doing’ concept certified by the European Training Foundation active in 90+ countries.",
                link: { label: "Visit PEN Worldwide", href: "https://penworldwide.org/" },
              },
              {
                t: "KoreaPEN Membership",
                q: "Through our association to the network, our trainees earn verified credentials they can include in their portfolio.",
                d: "We are a proud member of KoreaPEN, the Central Office for PEN Worldwide in South Korea. We empower partners to deliver evidence-based work experiences locally.",
                link: { label: "Visit KoreaPEN", href: "https://www.koreapen.org/" },
              },
              {
                t: "Events Calendar",
                d: "Discover upcoming international events, training opportunities, and global competitions across the PEN Worldwide network.",
                link: {
                  label: "View Events Calendar",
                  href: "https://penworldwide.org/events-calendar/list/",
                },
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-3xl border border-cream/15 bg-white/5 backdrop-blur-sm p-8"
              >
                <h3 className="text-xl font-bold">{c.t}</h3>
                {c.d && <p className="mt-4 text-cream/70 text-sm leading-relaxed">{c.d}</p>}
                {c.q && <p className="mt-6 italic text-lime text-sm">"{c.q}"</p>}
                {c.link && (
                  <a
                    href={c.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-lime text-sm font-medium hover:underline"
                  >
                    {c.link.label} <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEN WORLDWIDE COMMUNITY — ANIMATED BANNER */}
      <section className="bg-white border-y border-border">
        <div className="container-x py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">PEN Worldwide Community</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto">
            {[
              { value: 30, suffix: "+", label: "Years of Experience" },
              { value: 35, suffix: "+", label: "Yearly Intl. Events" },
              { value: 40, suffix: "", label: "Member Countries" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-ink leading-none tabular-nums">
                  <CountUp end={s.value} />
                  {s.suffix}
                </span>
                <span className="mt-3 text-sm md:text-base text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 max-w-3xl mx-auto">
            {[
              { value: 7000, suffix: "+", label: "Practice Enterprises" },
              { value: 200000, suffix: "+", label: "Trainees per Year" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-ink leading-none tabular-nums">
                  <CountUp end={s.value} />
                  {s.suffix}
                </span>
                <span className="mt-3 text-sm md:text-base text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGINAL HERO moved here */}
      <section className="bg-ink text-cream relative overflow-hidden">
        <div className="container-x relative pt-20 pb-24 md:pt-32 md:pb-36 text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lime"></span>
          <h2 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            The #1&nbsp;<span className="text-lime">project-based</span> practicum experience.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-xl mx-auto my-[27px]">
            Turn your knowledge into real-world experience.
            <br />
            Build verified portfolios.&nbsp;Earn credentials that employers actually want.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/practicums" className="btn-primary">
              Explore practicums <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-cream text-cream font-medium px-6 py-3.5 rounded-full hover:bg-cream hover:text-ink transition"
            >
              About us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border">
        <div className="container-x py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">FAQ</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="mt-16 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What is a practicum?",
                  a: "A practicum is a structured, hands-on learning experience; a course or exercise designed to apply theoretical knowledge in a real or simulated practical setting.\n\nEpocha Practicum: A structured learning experience where trainees apply their knowledge to real projects under the coaching, mentoring, and guidance of Epocha professionals and mentor companies.",
                },
                {
                  q: "What industries are involved and why?",
                  a: "Education and Training: To develop future educators and trainers who can shape the next generation of learners.\n\nMarketing and Communications: To build strategic thinking, brand storytelling, and audience engagement skills essential in a digital-first world.\n\nBusiness and Entrepreneurship: To cultivate innovative thinkers and problem-solvers who can launch ventures and drive economic growth.\n\nSocial Enterprises and NGOs: To empower changemakers committed to addressing social and environmental challenges.\n\nCreative Industries: To nurture artistic talent, design thinking, and cultural expression that drives innovation.\n\nSustainability and Environment: To prepare leaders who can tackle climate change and promote sustainable practices.\n\nCultural Entertainment and Tourism: To develop professionals who can create meaningful experiences and preserve cultural heritage.",
                },
                {
                  q: "What credentials do modern employers actually look for?",
                  a: "Employers look for four things.\n\n1. Formal Education\n\nA degree or diploma still opens doors but it rarely closes the deal on its own. It tells an employer you can learn. It does not always tell them you can perform.\n\n2. Professional Training & Industry-Backed Certification\n\nIncreasingly, employers value proof that you have trained in the real world. Industry-recognized certifications and non-traditional training programs carry serious weight precisely because they are grounded in what the workplace actually demands. This is where Epocha comes in.\n\n3. Micro-Credentials\n\nShorter, sharper, and highly specific micro-credentials prove competence in a particular skill or area without requiring years of study. They are stackable, portable, and increasingly recognized by employers who want to know exactly what you can do. This is where Epocha comes in.\n\n4. Core Skills & Competencies\n\nCall them soft skills, interpersonal skills, human skills, or EPOCH competencies — these are the capabilities that determine how someone actually performs in a team, under pressure, and in the face of the unexpected. Communication, critical thinking, emotional intelligence, adaptability, leadership. No degree automatically builds them. This is where Epocha comes in.\n\nRemember, a degree tells employers you can learn. The rest show them you are ready.",
                },
                {
                  q: "Can practicums replace a university degree?",
                  a: "No. It was never designed to. A degree gives you the theory. Our practicums give you the practical application, micro-credentials, and human skills that make that theory useful in the real world. Think of it as the layer that enhances your education; the part that turns a graduate into someone employers want to hire.",
                },
                {
                  q: "What is the difference between mentoring and coaching?",
                  a: "Mentoring (Relational): A mentor shares industry insights, sector expertise, and job market realities based on their own experiences. They offer guidance to help you build self-awareness and make informed career decisions.\n\nCoaching (Action-Driven): A coach helps you identify specific challenges and maps out how to get from Point A to Point B. They focus on accountability, competence, and building your confidence through action.",
                },
                {
                  q: "Why would I learn leadership? How do I become career/future ready?",
                  a: "Learning leadership help you build critical life skills to thrive as individuals and professionals. Those skills and competencies empower you to solve real-world problems, tackle academic and professional challenges, drive changes within your community, and integrate society and the job market. It gives you agency over their own future.",
                },
                {
                  q: "What is the biggest misconception about leadership?",
                  a: "People often think leadership means being in charge of others, which causes a fear of commitment or pressure. The truth is, self-management is far more important. True leadership is about self-leadership, innovation, and connection, rather than just managing a workplace.",
                },
                {
                  q: "How much does a practicum cost?",
                  a: "Epocha offers both free and paid practicums. We believe access should never be the barrier between a young person and a transformative experience.\n\nPaid practicums range from 1 million Korean Won to 5 million Korean Won depending on the duration, type, and level of mentorship involved. Regardless of cost, every practicum is designed to deliver real value in skills, credentials, and experience.",
                },
                {
                  q: "What sets us apart?",
                  a: "We focus on holistic development. We don't just teach technical skills; we prioritize the whole person by focusing on:\n\nYouth-centered self-awareness and purpose.\n\nCore human skills and hands-on experiences.\n\nEmotional wellbeing and mental resilience.",
                },
                {
                  q: "How long is a practicum?",
                  a: "Practicums run between 4 and 12 weeks. They are structured to be long enough to do work that genuinely matters, and focused enough to fit around your studies, commitments, and life. The exact duration depends on the type of practicum, the project scope, and the industry partner involved.",
                },
                {
                  q: "What will I do during a practicum?",
                  a: "We partner with businesses, institutions, and nonprofits to deliver two distinct types of practicum experiences:\n\nLeadership Practicum\n\nYou and your team identify a cause worth fighting for and build your own project around it from the ground up. You use your creativity to increase social impact within diverse communities.\n\nIndustry Practicum\n\nYou and your team are given a real challenge or project by a business partner and your job is to solve it. You work together to deliver tangible solutions, outputs, and results directly to the organization that needs them.",
                },
                {
                  q: "What is the Practice Enterprise concept?",
                  a: (
                    <span>
                      Download PEN Worldwide Fact sheets to learn more.{" "}
                      <a
                        href="/downloads/2025-PEN-Worldwide-Fact-Sheet-General-English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        2025 PEN Worldwide Fact Sheet General English
                      </a>
                      {" · "}
                      <a
                        href="/downloads/2025-PEN-Worldwide-Fact-Sheet-Skill-Development-English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        2025 PEN Worldwide Fact Sheet Skill Development English
                      </a>
                      {" · "}
                      <a
                        href="/downloads/2025-PEN-Worldwide-Mentor-Company-Flyer-English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        2025 PEN Worldwide Mentor Company Flyer English
                      </a>
                      {" · "}
                      <a
                        href="/downloads/2025-PEN-Worldwide-PE4Entrepreneurship-One-Pager-English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        2025 PEN Worldwide PE4Entrepreneurship One Pager English
                      </a>
                      {" · "}
                      <a
                        href="/downloads/PEN-Worldwide-General-Lingo-Short.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        PEN Worldwide General Lingo Short
                      </a>
                      {" · "}
                      <a
                        href="/downloads/PEN-Worldwide-Poster-Vertical.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        PEN Worldwide Poster Vertical
                      </a>
                    </span>
                  ),
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-lg font-semibold text-foreground py-5 hover:no-underline hover:text-lime transition-colors [&[data-state=open]>svg]:text-lime">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
