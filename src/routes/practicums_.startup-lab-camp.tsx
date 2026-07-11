import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Award,
  Globe,
  Bot,
  HeartPulse,
  Target,
  Plus,
  ArrowUpRight,
  Clock,
  MessagesSquare,
  Briefcase,
  FileBadge,
  Network,
  UsersRound,
} from "lucide-react";
import student from "@/assets/student.jpg";

export const Route = createFileRoute("/practicums_/startup-lab-camp")({
  head: () => ({
    meta: [
      { title: "Start-up Lab Camp — EPOCHA" },
      {
        name: "description",
        content:
          "Start-up Lab Camp practicum — build and pitch a real venture in an immersive entrepreneurship sprint.",
      },
      { property: "og:title", content: "Start-up Lab Camp — EPOCHA" },
      {
        property: "og:description",
        content:
          "An immersive entrepreneurship sprint where teams build, test, and pitch real ventures.",
      },
      { property: "og:image", content: student },
    ],
  }),
  component: StartupLabCampPage,
});

const DARK = "#2A1B08";
const GOLD = "#FAC775";
const GOLD_DEEP = "#B07A1A";
const GOLD_TEXT = "#412402";
const LIGHT_ON_DARK = "#F5E4C2";
const PILL_BG = "#FBE8C6";
const PILL_TEXT = "#8C5A12";
const CREAM_BG = "#FAF4E8";

function StartupLabCampPage() {
  return (
    <>
      {/* Section 1 — BANNER (LIGHT) */}
      <section className="bg-background text-foreground">
        <div className="container-x pt-20 pb-16">
          <h1 className="text-6xl font-bold leading-[0.95] md:text-9xl whitespace-pre-line">
            Start-up{"\n"}Lab Camp
          </h1>
          <p className="mt-8 text-lg text-foreground/80 max-w-2xl leading-relaxed">
            An immersive entrepreneurship sprint where young people work in teams to build, test and
            pitch a real start-up concept. Participants form a Practice Enterprise (PE) taking on
            real company roles, managing day-to-day operations, and trading with other enterprises
            across a global network, all within a structured, mentor-supported environment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Users, label: "Ages 14–18" },
              { icon: Award, label: "All experience levels welcome" },
              { icon: MapPin, label: "Multiple locations" },
            ].map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-sm text-foreground/80"
              >
                <p.icon className="w-4 h-4" /> {p.label}
              </span>
            ))}
          </div>
          <a
            href="#startup-lab"
            className="inline-flex items-center gap-2 mt-10 rounded-full px-6 py-3 font-semibold transition-colors hover:opacity-90"
            style={{ background: GOLD, color: GOLD_TEXT }}
          >
            Apply now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Section 2 — DARK · Summer track */}
      <section
        className="border-t"
        style={{ background: DARK, color: LIGHT_ON_DARK, borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="container-x py-20">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD }}>
              Summer track
            </p>
            {[
              { icon: MapPin, label: "Seoul, Korea" },
              { icon: Globe, label: "Access to global events" },
            ].map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
                style={{
                  borderColor: "rgba(250,199,117,0.45)",
                  background: "rgba(250,199,117,0.12)",
                  color: GOLD,
                }}
              >
                <tag.icon className="h-4 w-4" aria-hidden="true" />
                {tag.label}
              </span>
            ))}
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Build the peace you want to see.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed" style={{ color: LIGHT_ON_DARK }}>
            For four weeks, trainees make peace their business by building ventures that serve
            people and communities. The 2027 theme, Social Entrepreneurship, challenges them to
            identify solutions the world needs to heal.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <h3 className="font-semibold text-white">Schedule</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <UsersRound className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>Cohort A: June 21 – July 17</span>
                </li>
                <li className="flex items-start gap-2">
                  <UsersRound className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>Cohort B: July 19 – August 13</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>Monday to Friday</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>9 am to 3 pm KST</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <h3 className="font-semibold text-white">Program details</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <span className="shrink-0">📚</span>
                  <span>4 weeks, 20 sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">👥</span>
                  <span>Minimum 6 trainees, maximum 10 trainees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">📍</span>
                  <span>Location: Yongsan, Mapo, or Itaewon areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">📝</span>
                  <span>Individual and institutional registrations available</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <h3 className="font-semibold text-white">Training</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <Bot className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>AI in the workplace</span>
                </li>
                <li className="flex items-start gap-2">
                  <HeartPulse className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>EPOCH awareness training</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>Leadership workshop</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>Intercultural dialogues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — LIGHT · Practicum at a glance */}
      <section className="bg-background text-foreground">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD_DEEP }}>
            Practicum at a glance
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Practicum information</h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <h3 className="text-xl font-bold">4-Week Schedule</h3>
              <div className="mt-6 space-y-5">
                {[
                  {
                    week: "Weeks 1–2 · Foundation",
                    title: "Build the Brand",
                    desc: "Trainees define their product or service, establish team roles and responsibilities, develop their brand identity, and map out their business model from the ground up.",
                  },
                  {
                    week: "Weeks 3–4 · Operations",
                    title: "Build & Operate",
                    desc: "The business goes live. Trainees finalise their offering, serve real or simulated customers, manage their operations day-to-day, and respond to real-world challenges.",
                  },
                  {
                    week: "Final Days · Closing",
                    title: "Pitch, Reflect & Celebrate",
                    desc: "Teams present to a panel, sharing results and lessons learned. The camp closes with structured reflection and a celebration of what each trainee has accomplished.",
                  },
                ].map((p) => (
                  <div
                    key={p.week}
                    className="border-t border-border pt-5 first:border-t-0 first:pt-0"
                  >
                    <div className="text-xs uppercase tracking-wider text-foreground/60 font-semibold">
                      {p.week}
                    </div>
                    <h4 className="mt-2 font-semibold">{p.title}</h4>
                    <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" style={{ color: GOLD_DEEP }} />
                <h3 className="text-xl font-bold">Typical Day</h3>
              </div>
              <div className="mt-6 divide-y divide-border overflow-hidden rounded-lg border border-border">
                {[
                  { time: "9:00 – 10:30", label: "Session 1" },
                  { time: "10:30 – 10:40", label: "Break", isBreak: true },
                  { time: "10:40 – 12:10", label: "Session 2" },
                  { time: "12:10 – 1:00", label: "Lunch (provided)", isBreak: true },
                  { time: "1:00 – 2:30", label: "Session 3" },
                  { time: "2:30 – 3:00", label: "Learning reflections", isBreak: true },
                ].map((item) => (
                  <div
                    key={`${item.time}-${item.label}`}
                    className={`grid grid-cols-[8.5rem_1fr] gap-4 px-4 py-3 text-sm ${item.isBreak ? "bg-muted/45" : "bg-background"}`}
                  >
                    <div className="font-semibold text-foreground">{item.time}</div>
                    <div className="text-foreground/75">{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-foreground/75 leading-relaxed">
                <span className="font-semibold text-foreground">Why reflections matter:</span> each
                day ends with time to step back and connect the day's work to what was learned —
                building the self-awareness that helps trainees apply these lessons long after the
                camp ends.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                {[
                  "Mini-breaks built into each session",
                  "Refreshments and lunch provided throughout the day",
                ].map((note) => (
                  <li key={note} className="flex gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: GOLD_DEEP }}
                    />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — DARK · Semester track */}
      <section
        className="border-t"
        style={{ background: DARK, color: LIGHT_ON_DARK, borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="container-x py-20">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD }}>
              Semester track
            </p>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                borderColor: "rgba(250,199,117,0.45)",
                background: "rgba(250,199,117,0.12)",
                color: GOLD,
              }}
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Online
            </span>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Shape the future you want to work in.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed" style={{ color: LIGHT_ON_DARK }}>
            Trainees learn to work with AI and lead with what makes them amazing human in a safe,
            guided environment. The theme AI-Human Collaboration challenges them to design and
            deliver projects putting hybrid intelligence at the centre.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <h3 className="font-semibold text-white">Schedule</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <UsersRound className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>September to June</span>
                </li>
                <li className="flex items-start gap-2">
                  <UsersRound className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>Once a week during term time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>Tuesday, Wednesday or Friday</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>3:30 pm to 5:00 pm KST</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <h3 className="font-semibold text-white">Program details</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <span className="shrink-0">👥</span>
                  <span>Minimum 6 trainees, maximum 10 trainees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">📍</span>
                  <span>Location: online</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">📝</span>
                  <span>Individual and institutional registrations available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">📚</span>
                  <span>Summer Track add on available</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <h3 className="font-semibold text-white">Training</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <Bot className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>AI in the workplace</span>
                </li>
                <li className="flex items-start gap-2">
                  <HeartPulse className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>EPOCH awareness training</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>Leadership workshop</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>Intercultural dialogues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — CREAM · What trainees learn */}
      <section className="border-t border-border" style={{ background: CREAM_BG }}>
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD_DEEP }}>
            What trainees learn
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Training Program</h2>
          <p className="mt-4 text-foreground/80 max-w-3xl leading-relaxed">
            Alongside building their venture, trainees take part in a training program covering AI
            in the workplace (foundations and ethics), EPOCH awareness training (the five human
            capabilities most resilient to AI: Empathy, Presence, Opinion, Creativity, and Hope),
            leadership workshops, and intercultural dialogues.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: Bot,
                name: "AI in the Workplace",
                desc: "Foundations and ethics of artificial intelligence — how it's changing work, and how to use it responsibly and effectively.",
              },
              {
                icon: HeartPulse,
                name: "EPOCH Awareness Training",
                desc: "Build the five human capabilities most resilient to AI: Empathy, Presence, Opinion, Creativity, and Hope — grounded in MIT Sloan research.",
              },
              {
                icon: Target,
                name: "Leadership Workshops",
                desc: "Practical leadership sessions covering communication, decision-making, team dynamics, and leading with purpose.",
              },
              {
                icon: Globe,
                name: "Intercultural Dialogues",
                desc: "Structured conversations that build cross-cultural awareness, perspective-taking, and the ability to collaborate across difference.",
              },
            ].map((t) => (
              <div key={t.name} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: GOLD }}
                >
                  <t.icon className="w-5 h-5" style={{ color: GOLD_TEXT }} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <p className="mt-1 text-sm text-foreground/75 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/practicums"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold hover:opacity-90 transition-colors"
              style={{ background: GOLD, color: GOLD_TEXT }}
            >
              Learn more about our Training Program <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 — LIGHT · How trainees learn */}
      <section className="bg-background text-foreground border-t border-border">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD_DEEP }}>
            How trainees learn
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Practice enterprise — learning by doing.
          </h2>
          <p className="mt-4 text-foreground/80 max-w-3xl leading-relaxed">
            A Practice Enterprise is a real business built for learning. Instead of studying
            entrepreneurship, trainees form a team, take on real roles, and run an actual venture
            for four weeks — facing real decisions and real deadlines, and walking away with real
            work to show for it.
          </p>
          <div className="mt-10">
            <Link
              to="/practicums"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold hover:opacity-90 transition-colors"
              style={{ background: DARK, color: GOLD }}
            >
              Learn more about Practice Enterprise <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7 — CREAM · What trainees gain */}
      <section className="border-t border-border" style={{ background: CREAM_BG }}>
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD_DEEP }}>
            What trainees gain
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Skills. Confidence. Real-world experience.
          </h2>
          <p className="mt-4 text-foreground/80 max-w-3xl leading-relaxed">
            Start-up Lab Camp gives young people hands-on experience of how businesses operate,
            developing skills, competencies and experience employers consistently look for.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: MessagesSquare,
                title: "Communication & confidence",
                desc: "Confidence presenting their ideas clearly, pitching to stakeholders, and speaking up in a team.",
              },
              {
                icon: Globe,
                title: "Cross-cultural fluency",
                desc: "Collaboration and cooperation skills necessary to navigate different perspectives and intercultural dialogues.",
              },
              {
                icon: Briefcase,
                title: "Business fundamentals",
                desc: "Practical understanding of how a business works — from defining a product or service to managing roles, operations, and budgets.",
              },
              {
                icon: Users,
                title: "Teamwork & leadership",
                desc: "Leadership experience taking on a real role, sharing responsibility, and leading a team through real decisions.",
              },
              {
                icon: FileBadge,
                title: "Training certificate",
                desc: "A certificate of completion and evidence for their portfolio useful for college applications, jobs, or future programs.",
              },
              {
                icon: Network,
                title: "Networking Opportunities",
                desc: "Access to a global community of practice enterprises and young entrepreneurs through the PEN Worldwide network.",
              },
            ].map((g) => (
              <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: GOLD }}
                >
                  <g.icon className="w-5 h-5" style={{ color: GOLD_TEXT }} />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{g.title}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — LIGHT · How to apply */}
      <section
        id="startup-lab"
        className="bg-background text-foreground border-t border-border scroll-mt-20"
      >
        <div className="container-x py-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05]">How to apply</h2>
          <p className="mt-6 text-foreground/80 max-w-2xl leading-relaxed">
            Start-up Lab Camp is open to young people aged 14–18. Applications can be submitted by a
            parent or guardian on behalf of their teens, or by an educator looking to bring the
            practicum to a full student cohort at their school or institution.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              {
                tag: "On behalf of a teen",
                title: "Parents & guardians",
                desc: "Apply on behalf of your teen. We'll walk you through what the practicum involves and what to expect.",
                cta: "Register my teen",
                href: "https://forms.gle/r3r36oZY15A2qUsL9",
              },
              {
                tag: "Institutional application",
                title: "Schools & institutions",
                desc: "Bring Start-up Lab Camp to your students. Schools can register to run a dedicated cohort for their student group.",
                cta: "Register as a school",
                href: "https://forms.gle/ZcU4C9MGLRqP4xc48",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl bg-card p-7 flex flex-col border border-border"
              >
                <span
                  className="inline-block self-start text-xs px-3 py-1 rounded-full font-semibold"
                  style={{ background: PILL_BG, color: PILL_TEXT }}
                >
                  {c.tag}
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.desc}</p>
                <div className="mt-auto pt-7">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-2xl px-5 py-3 font-semibold hover:opacity-90 transition-colors"
                    style={{ background: DARK, color: GOLD }}
                  >
                    {c.cta} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/practicums"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold hover:opacity-90 transition-colors"
              style={{ background: GOLD, color: GOLD_TEXT }}
            >
              Back to all practicums <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9 — FAQ */}
      <section className="bg-background text-foreground border-t border-border">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD_DEEP }}>
            FAQ
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Common questions</h2>
          <div className="mt-10 divide-y divide-border border-t border-b border-border">
            {[
              {
                q: "Who is the Start-up Lab Camp for?",
                a: "The camp is open to young people aged 14 to 18. No prior business experience is needed; just curiosity, a willingness to collaborate, and an interest in building something real. All sessions are conducted in English.",
              },
              {
                q: 'What does "practicum" mean — how is this different from a class?',
                a: "EPOCHA practicums are structured learning experiences where trainees apply their knowledge to real projects under the coaching, mentoring, and guidance of EPOCHA professionals and mentor companies.",
              },
              {
                q: "What is the 2027 theme, and will it change each year?",
                a: (
                  <>
                    <p>We change the theme annually for both the Summer and Semester track.</p>
                    <p className="mt-3">
                      <span className="font-semibold text-foreground">Summer track:</span> The theme
                      is Social Entrepreneurship. Trainees will build businesses designed to create
                      social or community value. The annual theme shifts each year to reflect
                      current global conversations, giving returning trainees a fresh challenge.
                    </p>
                    <p className="mt-3">
                      <span className="font-semibold text-foreground">Semester track:</span> The
                      theme AI-Human Collaboration challenges them to design and deliver projects
                      putting hybrid intelligence at the centre.
                    </p>
                  </>
                ),
              },
              {
                q: "How many trainees are in each cohort?",
                a: "We keep cohorts small with a maximum of 10 trainees. This means every participant gets meaningful mentor time, a real team role, and genuine responsibility within their business.",
              },
              {
                q: "What are the EPOCH capabilities, and why do they matter?",
                a: "EPOCH stands for Empathy, Presence, Opinion, Creativity, and Hope — five human capabilities identified by MIT Sloan researchers as most resilient to AI substitution. As automation reshapes work, these are the skills that will distinguish people in any career. Our training programme is built around developing them deliberately.",
              },
              {
                q: "Is the programme suitable for students without business or tech experience?",
                a: "Yes, completely. We design the practicum to be accessible to motivated students at any starting point. Trainees come with different strengths — creative, analytical, social, technical — and teams are built to reflect that diversity. We meet participants where they are.",
              },
              {
                q: "What language is the programme delivered in?",
                a: "All sessions are conducted in English. This makes the practicum particularly well-suited to students at international schools and those looking to develop professional English in a working context.",
              },
              {
                q: "How do I enrol — and what's the difference between parent and school registration?",
                a: "Parents or guardians can register their teen using the parent registration form. Schools and institutions can use the school registration form to register a dedicated cohort; the EPOCHA team will then contact them to confirm format and scheduling.",
              },
              {
                q: "How does the school registration work?",
                a: "Schools can register to run a dedicated cohort for their students. Once the registration is submitted, the EPOCHA team will reach out to discuss format, scheduling, and how the practicum fits into your institution's calendar.",
              },
              {
                q: "Will trainees receive a certificate?",
                a: "Summer Track trainees who complete the four-week programme receive a certificate of completion from EPOCHA / PEN Worldwide. Completion work also contributes to a professional portfolio trainees can use in future applications and interviews for Higher/Further Education.",
              },
              {
                q: "Where is each track held?",
                a: "The Summer Track venue is in central Seoul, in areas such as Yongsan, Mapo, or Itaewon, with easy subway access from across the city. The Semester Track is delivered online.",
              },
              {
                q: "What does a typical week look like?",
                a: "Each week combines workshops, team work sessions, and structured tasks tied to each participant's role. Expect a mix of learning, doing, and reflecting.",
              },
            ].map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold pr-6">{f.q}</span>
                  <Plus
                    aria-hidden="true"
                    className="w-5 h-5 text-foreground/60 shrink-0 transition-transform group-open:rotate-45"
                  />
                </summary>
                <div className="mt-3 text-sm text-foreground/80 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
