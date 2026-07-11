import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  FileBadge,
  Globe,
  Wrench,
  Briefcase,
  Target,
  Heart,
  Bot,
  CheckCircle2,
  Wallet,
  Compass,
  BellRing,
  Network,
} from "lucide-react";
import student from "@/assets/student.jpg";

export const Route = createFileRoute("/practicums_/hanaro-marketing")({
  head: () => ({
    meta: [
      { title: "Hanaro Marketing Practicum — EPOCHA" },
      {
        name: "description",
        content:
          "Hanaro Marketing and Advertising Practicum — become a Hanaro leader in your community.",
      },
      { property: "og:title", content: "Hanaro Marketing Practicum — EPOCHA" },
      { property: "og:description", content: "Become a Hanaro leader in your community." },
      { property: "og:image", content: student },
    ],
  }),
  component: HanaroMarketingPage,
});

function HanaroMarketingPage() {
  return (
    <>
      {/* Section 1 — LIGHT */}
      <section className="bg-background text-foreground">
        <div className="container-x pt-20 pb-16">
          <h1 className="text-6xl font-bold leading-[0.95] md:text-9xl">Hanaro</h1>
          <p className="mt-8 text-lg text-foreground/80 max-w-2xl leading-relaxed">
            As an Hanaro leader, you will work directly alongside NGOs and charities too address
            current social issues in your community. You will play an active role in planning and
            running advocacy campaigns, building partnerships, and championing a cause that
            genuinely matters to you. Along the way, you will develop practical skills in event
            organizing, project management, and public advocacy, all while creating tangible impact
            on the ground.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Users, label: "Ages 19–29" },
              { icon: Award, label: "All degrees welcome" },
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
            href="https://tally.so/r/gD78al"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex mt-10"
          >
            Register your interest <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Section 2 — DARK · What you'll gain */}
      <section className="bg-[#2A1B08] text-white border-t border-white/15">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#F2C766]">
            What you'll gain
          </p>
          <p className="mt-4 max-w-3xl text-[#F5E4C2] leading-relaxed">
            Beyond completing the project deliverables, you gain the practical experience, industry
            credentials, and strategic direction needed to advance your career.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: FileBadge,
                title: "Portfolio Piece",
                desc: "Evidence for your career portfolio — useful for college, higher or further education applications, jobs, or future learning programmes.",
              },
              {
                icon: Globe,
                title: "PEN-Worldwide Credentials",
                desc: "Internationally recognised Practice Enterprise Network certification, valued across 40+ countries.",
              },
              {
                icon: Wrench,
                title: "Work Experience",
                desc: "Real, hands-on experience running a project with a partner organisation — something concrete to point to on any application.",
              },
              {
                icon: Compass,
                title: "Sense of Direction & Motivation",
                desc: "Clarity on what you want to do next, and the motivation that comes from seeing a real project through to the end.",
              },
              {
                icon: Network,
                title: "Networking Opportunities",
                desc: "Connect with mentors, peers, and partner organisations across the PEN Worldwide network.",
              },
              {
                icon: Wallet,
                title: "Job-Ready Skills",
                desc: "Receive seed funding to develop your project and gain practical skills — leadership, project management, public advocacy.",
              },
            ].map((g) => (
              <div key={g.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <g.icon className="w-6 h-6 text-[#FAC775]" />
                <h3 className="mt-4 font-semibold text-white">{g.title}</h3>
                <p className="mt-2 text-sm text-[#F5E4C2] leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — LIGHT · What you'll be doing */}
      <section className="bg-background text-foreground">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#B07A1A]">
            What you'll be doing
          </p>
          <p className="mt-4 text-foreground/80 max-w-2xl">
            You will collaborate with peers to lead a project, progressing through three structured
            phases with dedicated coaching and mentor support at every step.
          </p>

          <div className="mt-12">
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#B07A1A]" />
                <h3 className="text-xl font-bold">6-Month Practicum</h3>
              </div>
              <div className="mt-6 space-y-2 text-foreground/80">
                <p>
                  <span className="font-semibold text-foreground">Time commitment:</span> 200 hours
                  across 6 months
                </p>
                <p>
                  <span className="font-semibold text-foreground">Timeframe:</span> January – June
                  2027
                </p>
              </div>
              <div className="mt-8 space-y-6">
                {[
                  {
                    period: "Months 1–2",
                    title: "Foundation & Design",
                    desc: "Build the foundations of your project, define your cause, and connect with partners. Set clear goals, roles, and a roadmap for the months ahead.",
                  },
                  {
                    period: "Months 3–4",
                    title: "Development & Project Execution",
                    desc: "Lead your campaign or initiative in real time, manage stakeholders, and adapt as you go. Turn plans into measurable community impact.",
                  },
                  {
                    period: "Months 5–6",
                    title: "Closing & Presentation",
                    desc: "Finalise your deliverables, present your outcomes, and reflect on your growth. Receive your PEN-Worldwide credentials and update your portfolio.",
                  },
                ].map((p) => (
                  <div
                    key={p.period}
                    className="grid gap-3 border-t border-border pt-6 first:border-t-0 first:pt-0 md:grid-cols-[14rem_1fr]"
                  >
                    <div className="text-xs uppercase tracking-wider text-foreground/60 font-semibold">
                      {p.period}
                    </div>
                    <div>
                      <h4 className="font-semibold">{p.title}</h4>
                      <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-lg border border-border bg-muted/35 p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#B07A1A]" />
                  <h4 className="font-semibold">Format</h4>
                </div>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">
                  A mix of self-paced training and 5-hour practical training sessions on Saturdays,
                  11 am – 4 pm KST. Training sessions are held online and in person.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — DARK · Training */}
      <section className="bg-[#2A1B08] text-white border-t border-white/15">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#F2C766]">
            What you'll learn
          </p>
          <p className="mt-4 max-w-3xl text-[#F5E4C2] leading-relaxed">
            Alongside running your project, a structured training program builds the professional
            and human skills employers look for.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Briefcase,
                name: "Career readiness workshops",
                desc: "Industry-specific sessions on professional skills, job-market readiness, and career pathways in the social impact sector.",
              },
              {
                icon: Target,
                name: "Leadership workshops",
                desc: "Frameworks and practices for leading yourself and others, making decisions under pressure, and motivating others toward a shared goal.",
              },
              {
                icon: Heart,
                name: "EPOCH awareness training",
                desc: "Structured introduction to the five EPOCH capabilities that define effective, human-centered leadership in a world increasingly shaped by AI.",
              },
              {
                icon: Bot,
                name: "AI training",
                desc: "Professional training in AI Foundations and Ethics building the literacy and critical thinking you need in professional and social contexts.",
              },
              {
                icon: Globe,
                name: "Cross-cultural competencies training",
                desc: "Develop the awareness, sensitivity, and communication skills needed to collaborate effectively across cultures, languages, and worldviews.",
              },
              {
                icon: Users,
                name: "Social impact",
                desc: "Learn how to design, measure, and communicate meaningful social impact — turning your project into tangible change for the communities you serve.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <t.icon className="w-5 h-5 text-[#FAC775] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <p className="mt-1 text-sm text-[#F5E4C2] leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — LIGHT · Who this is for */}
      <section className="bg-background text-foreground">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#B07A1A]">Eligibility</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">This is for you if...</h2>
          <ul className="mt-8 space-y-4 max-w-3xl">
            {[
              "You're between 19 and 29 years old — any degree or field of study is welcome.",
              "You care about social issues and want to make changes.",
              "You're ready to take ownership of a real project and see it through from start to finish.",
              "You're looking to build professional skills, including leadership, project management, public advocacy, in a hands-on setting.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-[#B07A1A] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 6 — DARK */}
      <section id="hanaro-leadership" className="bg-background text-foreground scroll-mt-20">
        <div className="container-x py-24">
          <div className="max-w-3xl rounded-3xl border border-white/10 bg-[#2A1B08] p-8 md:p-10 flex gap-5 items-start text-white">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#E89A2B] shrink-0">
              <BellRing className="w-6 h-6 text-[#2A1B08]" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Notice</h2>
              <p className="mt-3 text-base md:text-lg text-white/80 leading-relaxed">
                Registrations will open soon! Register your interest today to secure early access to
                the practicum information pack.
              </p>
              <a
                href="https://tally.so/r/gD78al"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex mt-6"
              >
                Register your interest <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
