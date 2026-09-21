import { useI18n } from "@/i18n";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePartners } from "@/components/home/HomePartners";
import { ProgramExplorer } from "@/components/programs/ProgramExplorer";
import { createFileRoute, Link } from "@tanstack/react-router";

import {
  ArrowRight,
  Check,
  X,
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
import hero from "@/assets/hero.jpg";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "EPOCHA — The #1 practicum experience for youth 14–29",
      description:
        "Turn knowledge into real experience. Project-based practicums with recognized credentials, coaching, and a global network.",
      path: "/",
      image: hero,
      ogTitle: "EPOCHA — Project-based practicums for youth",
      socialDescription: "Real projects. Real coaching. Recognized credentials.",
    }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();
  return (
    <>
      <HomeHero />
      <ProgramExplorer home />

      {/* INTERNSHIP VS PRACTICUM — own section, dark mode */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-cream">
              {t("Not all internship experience is")} <br />
              <span className="text-lime">{t("created equal.")}</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/70">
              {t(
                "EPOCHA is a project-based learning hub where youth aged 14-29 build their career portfolio through practicums, businesses access job-ready talent, institutions cultivate leaders, and organizations increase their impact together.",
              )}
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-cream/15 p-8 bg-white/5">
              <h3 className="text-xl font-bold text-cream/60">{t("Traditional Internship")}</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Company-driven agenda",
                  "Tasks vary by employer mood and need",
                  "Little to no coaching",
                  "Just a reference letter",
                  "Outcomes depend on where you land",
                ].map((c) => (
                  <li key={t(c)} className="flex gap-3 text-cream/60">
                    <X className="w-5 h-5 text-lime shrink-0 mt-0.5" /> {t(c)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-lime p-8 bg-white/5">
              <h3 className="text-xl font-bold text-lime">{t("Our Practicums")}</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Youth-centered design",
                  "Project-based with clear deliverables",
                  "Coaching and mentoring throughout",
                  "Recognized & certified credentials",
                  "Progress you can actually measure",
                ].map((c) => (
                  <li key={t(c)} className="flex gap-3 text-cream">
                    <Check className="w-5 h-5 text-lime shrink-0 mt-0.5" /> {t(c)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-background">
        <div className="container-x py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t(
                "All practicum experiences include self-development coaching, AI training and career-readiness workshops.",
              )}
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "EPOCH Awareness Training",
                desc: "We embed MIT Sloan's EPOCH Framework across all our practicums to help young people develop the essential human capabilities that AI cannot replace.",
                icon: HeartPulse,
              },
              {
                title: "AI Fluency Training",
                desc: "We partner with QualitaX to offer practical AI training that gives young people the fluency to step confidently and responsibly in the modern workforce.",
                icon: Atom,
              },
              {
                title: "Career-readiness Workshops",
                desc: "We empower young people to build critical life skills they need to solve real-world problems, tackle academic and professional challenges while driving meaningful changes.",
                icon: Users,
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
                  <h3 className="text-2xl font-bold">{t(c.title)}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {c.title === "AI Fluency Training" ? (
                      <>
                        {t("We partner with")}{" "}
                        <a
                          href="https://www.qualitax.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lime hover:underline font-medium"
                        >
                          {t("QualitaX")}
                        </a>{" "}
                        {t(
                          "to offer practical AI training that gives young people the fluency to step confidently and responsibly in the modern workforce.",
                        )}
                      </>
                    ) : (
                      t(c.desc)
                    )}
                  </p>
                </div>
              );
            })}
          </div>
          <a href="/practicums#training-offer" className="btn-primary mt-9">
            {t("Training program")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* WHAT IS A PRACTICUM — separate section */}
      <section className="bg-background text-foreground">
        <div className="container-x py-20">
          <div id="what-is-a-practicum" className="scroll-mt-24">
            <div className="relative overflow-hidden rounded-3xl bg-ink text-cream border border-cream/10 p-10 md:p-14">
              <div
                aria-hidden="true"
                className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-lime opacity-20"
              />
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-lime opacity-20"
              />
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] text-white">
                  {t("What is a")} <br />
                  <span className="text-white">{t("Practicum?")}</span>
                </h2>
              </div>
              <div className="relative z-10 mt-10" data-practicum-answer>
                <Quote className="w-8 h-8 text-white" />
                <p className="mt-6 text-lg md:text-xl text-cream/90 leading-relaxed max-w-3xl">
                  {t(
                    "EPOCHA practicums are structured learning experiences where trainees apply their knowledge to real projects under the coaching, mentoring, and guidance of professionals and mentor companies. You learn by doing — taking real roles and solving real problems.",
                  )}
                </p>
              </div>
            </div>

            <div className="mt-14">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-bold">
                {t("How you learn")}
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
                    <h3 className="mt-4 font-bold text-cream">{t(item.title)}</h3>
                    <p className="mt-2 text-sm text-cream/70 leading-relaxed">{t(item.desc)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-bold">
                {t("Who supports you")}
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
                      <h3 className="font-bold text-cream">{t(item.title)}</h3>
                      <p className="mt-1 text-sm text-cream/70 leading-relaxed">{t(item.desc)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-ink text-cream border border-cream/10 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-lime">{t("Why it matters")}</h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Hands-on experience is exactly what employers look for — a practicum gives you that before you graduate or enter the job market.",
                  "It is the best preparation if you want to start your own small business — you learn how real operations, teams, and decisions work.",
                  "You learn how to show up, contribute, and lead — skills that no classroom can fully teach.",
                ].map((reason) => (
                  <li key={reason} className="flex gap-3 text-cream/90">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lime shrink-0" />
                    <span className="leading-relaxed">{t(reason)}</span>
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
            {t("A practicum is not a course. It is not an internship. It is")}{" "}
            <span className="text-lime">{t("learning that leaves something behind.")}</span>
          </p>
        </div>
      </section>

      <HomePartners />

      {/* ORIGINAL HERO moved here */}
      <section className="bg-ink text-cream relative overflow-hidden">
        <div className="container-x relative pt-20 pb-24 md:pt-32 md:pb-36 text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lime"></span>
          <h2 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            {t("The #1")} <span className="text-lime">{t("project-based")}</span>{" "}
            {t("practicum experience.")}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-xl mx-auto my-[27px]">
            {t("Turn your knowledge into real-world experience.")}
            <br />
            {t("Build verified portfolios. Earn credentials that employers actually want.")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/practicums" className="btn-primary">
              {t("Explore practicums")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-cream text-cream font-medium px-6 py-3.5 rounded-full hover:bg-cream hover:text-ink transition"
            >
              {t("About us")}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border">
        <div className="container-x py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">{t("FAQ")}</h2>
            <Link
              to="/connect"
              className="mt-5 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
            >
              {t("Ask us a question")}
              <ArrowRight className="size-4" />
            </Link>
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
                      {t("Download PEN Worldwide Fact sheets to learn more.")}{" "}
                      <a
                        href="/downloads/2025-PEN-Worldwide-Fact-Sheet-General-English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        {t("2025 PEN Worldwide Fact Sheet General English")}
                      </a>
                      {" · "}
                      <a
                        href="/downloads/2025-PEN-Worldwide-Fact-Sheet-Skill-Development-English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        {t("2025 PEN Worldwide Fact Sheet Skill Development English")}
                      </a>
                      {" · "}
                      <a
                        href="/downloads/2025-PEN-Worldwide-Mentor-Company-Flyer-English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        {t("2025 PEN Worldwide Mentor Company Flyer English")}
                      </a>
                      {" · "}
                      <a
                        href="/downloads/2025-PEN-Worldwide-PE4Entrepreneurship-One-Pager-English.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        {t("2025 PEN Worldwide PE4Entrepreneurship One Pager English")}
                      </a>
                      {" · "}
                      <a
                        href="/downloads/PEN-Worldwide-General-Lingo-Short.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        {t("PEN Worldwide General Lingo Short")}
                      </a>
                      {" · "}
                      <a
                        href="/downloads/PEN-Worldwide-Poster-Vertical.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime underline"
                      >
                        {t("PEN Worldwide Poster Vertical")}
                      </a>
                    </span>
                  ),
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-lg font-semibold text-foreground py-5 hover:no-underline hover:text-lime transition-colors [&[data-state=open]>svg]:text-lime">
                    {t(faq.q)}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
                    {typeof faq.a === "string" ? t(faq.a) : faq.a}
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
