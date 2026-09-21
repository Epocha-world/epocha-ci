import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Globe,
  Bot,
  HeartPulse,
  Target,
  Clock,
  FileBadge,
  UsersRound,
  Building2,
} from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/practicum/leadership-tracks")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Leadership tracks — Start-up Lab Camp — EPOCHA",
      description: "Explore Semester, International and Summer tracks at Start-up Lab Camp.",
      path: "/practicums/startup-lab-camp/practicum/leadership-tracks",
    }),
  component: LeadershipTracksPage,
});

const DARK = "var(--ink)";
const GOLD = "var(--lime)";
const GOLD_DEEP = "var(--muted-foreground)";
const GOLD_TEXT = "var(--ink)";
const LIGHT_ON_DARK = "var(--cream)";
const CREAM_BG = "var(--background)";

function LeadershipTracksPage() {
  const { t } = useI18n();
  return (
    <>
      <section
        id="leadership-tracks"
        className="scroll-mt-36 border-t border-border"
        style={{ background: CREAM_BG }}
      >
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD_DEEP }}>
            {t("Leadership tracks")}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold md:text-5xl">
            {t("Turn your education into real experience before you graduate")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-foreground/80">
            {t(
              "Give your applications an edge — for college, university, scholarships, and internships.",
            )}
          </p>
          <Link
            to="/practicums/startup-lab-camp/how-it-works"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold hover:opacity-90"
            style={{ background: GOLD, color: GOLD_TEXT }}
          >
            {t("How it works")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section
        className="border-t"
        style={{
          background: DARK,
          color: LIGHT_ON_DARK,
          borderColor: "color-mix(in oklch, var(--cream) 10%, transparent)",
        }}
      >
        <div className="container-x py-20">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD }}>
              {t("Semester track")}
            </p>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                borderColor: "color-mix(in oklch, var(--lime) 45%, transparent)",
                background: "color-mix(in oklch, var(--lime) 12%, transparent)",
                color: GOLD,
              }}
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {t("Online")}
            </span>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-cream">
            {t("Shape the future you want to work in.")}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed" style={{ color: LIGHT_ON_DARK }}>
            {t(
              "Trainees learn to work with AI and lead with what makes them amazing human in a safe, guided environment. The theme AI-Human Collaboration challenges them to design and deliver projects putting hybrid intelligence at the centre.",
            )}
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-cream/15 bg-white/5 p-6">
              <h3 className="font-semibold text-cream">{t("Schedule")}</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("September to June")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("Once a week during term time")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("Tuesday, Wednesday or Friday")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("3:30 pm to 5:00 pm KST")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-cream/15 bg-white/5 p-6">
              <h3 className="font-semibold text-cream">{t("Program details")}</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <Users
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                  <span>{t("Small cohort")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                  <span>{t("Location: online")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileBadge
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                  <span>{t("Individual and institutional registrations available")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Building2
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                  <span>{t("Industry collaboration")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-cream/15 bg-white/5 p-6">
              <h3 className="font-semibold text-cream">{t("Training")}</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <Bot className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("AI in the workplace")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <HeartPulse className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("EPOCH awareness training")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("Leadership workshop")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("Intercultural dialogues")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-light border-t border-border text-foreground">
        <div className="container-x py-20">
          <div className="flex flex-wrap items-center gap-3">
            <p
              className="text-xs uppercase tracking-[0.2em] font-bold"
              style={{ color: "var(--foreground)" }}
            >
              {t("International track")}
            </p>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                borderColor: "color-mix(in oklch, var(--lime) 45%, transparent)",
                background: "color-mix(in oklch, var(--lime) 12%, transparent)",
                color: "var(--foreground)",
              }}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              {t("Hybrid")}
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            {t("Build with teams around the world.")}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed" style={{ color: "var(--foreground)" }}>
            {t(
              "The international track is a high-accelerator program where teens work in teams to identify a real-world problem, validate it through early research, and develop a business concept, prototype, or MVP.",
            )}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-semibold text-foreground">{t("Schedule")}</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: "var(--foreground)" }}
              >
                <li className="flex items-start gap-2">
                  <Calendar
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("September to June")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("Once a week during term time")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("Saturdays or Sundays")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("Time varies (9 am - 1 pm)")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-semibold text-foreground">{t("Program details")}</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: "var(--foreground)" }}
              >
                <li className="flex items-start gap-2">
                  <Users
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("Small cohort")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("Location: hybrid")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileBadge
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("Individual and institutional registrations available")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Building2
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("Industry collaboration")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-semibold text-foreground">{t("Training")}</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: "var(--foreground)" }}
              >
                <li className="flex items-start gap-2">
                  <Bot className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--foreground)" }} />
                  <span>{t("AI in the workplace")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <HeartPulse
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("EPOCH awareness training")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("Leadership workshop")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--foreground)" }}
                  />
                  <span>{t("Intercultural dialogues")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t"
        style={{
          background: DARK,
          color: LIGHT_ON_DARK,
          borderColor: "color-mix(in oklch, var(--cream) 10%, transparent)",
        }}
      >
        <div className="container-x py-20">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: GOLD }}>
              {t("Summer track")}
            </p>
            {[{ icon: MapPin, label: "Seoul, Korea" }].map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
                style={{
                  borderColor: "color-mix(in oklch, var(--lime) 45%, transparent)",
                  background: "color-mix(in oklch, var(--lime) 12%, transparent)",
                  color: GOLD,
                }}
              >
                <tag.icon className="h-4 w-4" aria-hidden="true" />
                {t(tag.label)}
              </span>
            ))}
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-cream">
            {t("Build the peace you want to see.")}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed" style={{ color: LIGHT_ON_DARK }}>
            {t(
              "For four weeks, trainees make peace their business by building ventures that serve people and communities. The 2027 theme, Social Entrepreneurship, challenges them to identify solutions the world needs to heal.",
            )}
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-cream/15 bg-white/5 p-6">
              <h3 className="font-semibold text-cream">{t("Schedule")}</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <UsersRound className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("Cohort A: June 28 – July 23")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <UsersRound className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("Cohort B: July 26 to August 20")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("Monday to Friday")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("9 am to 3 pm KST")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-cream/15 bg-white/5 p-6">
              <h3 className="font-semibold text-cream">{t("Program details")}</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <Calendar
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                  <span>{t("4 weeks, 20 sessions")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                  <span>{t("Small cohort")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                  <span>{t("Location: Seoul")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileBadge
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: GOLD }}
                    aria-hidden="true"
                  />
                  <span>{t("Individual and institutional registrations available")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-cream/15 bg-white/5 p-6">
              <h3 className="font-semibold text-cream">{t("Training")}</h3>
              <ul
                className="mt-3 space-y-2 text-sm leading-relaxed"
                style={{ color: LIGHT_ON_DARK }}
              >
                <li className="flex items-start gap-2">
                  <Bot className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("AI in the workplace")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <HeartPulse className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("EPOCH awareness training")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("Leadership workshop")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <span>{t("Intercultural dialogues")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-x py-20">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <div className="rounded-lg border border-cream/20 bg-white/5 p-6 md:p-8">
              <h3 className="text-xl font-bold">{t("4-Week Schedule")}</h3>
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
                    className="border-t border-cream/20 pt-5 first:border-t-0 first:pt-0"
                  >
                    <div className="text-xs uppercase tracking-wider text-cream/60 font-semibold">
                      {t(p.week)}
                    </div>
                    <h4 className="mt-2 font-semibold">{t(p.title)}</h4>
                    <p className="mt-2 text-sm text-cream/75 leading-relaxed">{t(p.desc)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-cream/20 bg-white/5 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" style={{ color: GOLD }} />
                <h3 className="text-xl font-bold">{t("Typical Day")}</h3>
              </div>
              <div className="mt-6 divide-y divide-cream/20 overflow-hidden rounded-lg border border-cream/20">
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
                    className={`grid grid-cols-[8.5rem_1fr] gap-4 px-4 py-3 text-sm ${item.isBreak ? "bg-lime text-black" : "bg-black text-white"}`}
                  >
                    <div className="font-semibold">{item.time}</div>
                    <div>{t(item.label)}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-cream/75 leading-relaxed">
                <span className="font-semibold text-cream">{t("Why reflections matter:")}</span>{" "}
                {t(
                  "each day ends with time to step back and connect the day's work to what was learned — building the self-awareness that helps trainees apply these lessons long after the camp ends.",
                )}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-cream/80">
                {[
                  "Mini-breaks built into each session",
                  "Refreshments and lunch provided throughout the day",
                ].map((note) => (
                  <li key={note} className="flex gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: GOLD_DEEP }}
                    />
                    <span>{t(note)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border" style={{ background: GOLD, color: GOLD_TEXT }}>
        <div className="container-x py-16">
          <h2 className="text-3xl font-bold md:text-5xl">{t("Your career starts now")}</h2>
          <p className="mt-5 max-w-3xl text-lg">
            {t(
              "Gain hands-on experience, build a professional portfolio, and stand out to future employers.",
            )}
          </p>
          <Link
            to="/practicums/startup-lab-camp/open-capstones"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold hover:opacity-90"
            style={{ background: DARK, color: GOLD }}
          >
            {t("Browse capstones")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
