import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Dock, Calendar, Clock, MapPin, Languages, MessageCircle, ClipboardList, Send, Users, Award, FileBadge, Globe, Wrench, MessagesSquare, Briefcase, Target, Heart, Cpu, Bot, CheckCircle2, Megaphone, Wallet, Compass, BellRing, Network } from "lucide-react";
import student from "@/assets/student.jpg";
import advisoryBoard from "@/assets/practicum-advisory-board.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/practicums_/hanaro-marketing")({
  head: () => ({
    meta: [
      { title: "Hanaro Marketing Practicum — EPOCHA" },
      { name: "description", content: "Hanaro Marketing and Advertising Practicum — become a Hanaro leader in your community." },
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
            As an Hanaro leader, you will work directly alongside NGOs and charities too address current social issues in your community. You will play an active role in planning and running advocacy campaigns, building partnerships, and championing a cause that genuinely matters to you. Along the way, you will develop practical skills in event organizing, project management, and public advocacy, all while creating tangible impact on the ground.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Users, label: "Ages 19–29" },
              { icon: Award, label: "All degrees welcome" },
              { icon: MapPin, label: "Seoul, South Korea" },
              { icon: Calendar, label: "July–August 2026" },
            ].map((p) => (
              <span key={p.label} className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-sm text-foreground/80">
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
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#F2C766]">What you'll gain</p>
          <p className="mt-4 max-w-3xl text-[#F5E4C2] leading-relaxed">
            Beyond completing the project deliverables, you gain the practical experience, industry credentials, and strategic direction needed to advance your career.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: FileBadge, title: "Portfolio Piece", desc: "Evidence for your career portfolio — useful for college, higher or further education applications, jobs, or future learning programmes." },
              { icon: Globe, title: "PEN-Worldwide Credentials", desc: "Internationally recognised Practice Enterprise Network certification, valued across 40+ countries." },
              { icon: Wrench, title: "Work Experience", desc: "Real, hands-on experience running a project with a partner organisation — something concrete to point to on any application." },
              { icon: Compass, title: "Sense of Direction & Motivation", desc: "Clarity on what you want to do next, and the motivation that comes from seeing a real project through to the end." },
              { icon: Network, title: "Networking Opportunities", desc: "Connect with mentors, peers, and partner organisations across the PEN Worldwide network." },
              { icon: Award, title: "Job-Ready Skills", desc: "Practical skills — leadership, project management, public advocacy — built through real work, not theory." },
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
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#B07A1A]">What you'll be doing</p>
          <p className="mt-4 text-foreground/80 max-w-2xl">
            A maximum of 10 participants team up to develop and lead their own project, moving through three structured phases with coaching and mentor support at every step.
          </p>

          <h3 className="mt-12 text-2xl md:text-3xl font-bold">6-Week Schedule</h3>
          <div className="mt-6 divide-y divide-border border-t border-b border-border">
            {[
              { week: "Weeks 1–2 · Foundation & Design", title: "Foundation & Design", desc: "Identify your cause, connect with an NGO or charity partner, and shape your project concept. Define goals, stakeholders, and a realistic plan for the weeks ahead.", tags: ["Ideation", "Partner outreach", "Planning"] },
              { week: "Weeks 3–5 · Development & Execution", title: "Development & Project Execution", desc: "Run your campaign or initiative, manage logistics, coordinate with your partner organisation, and adapt in real time. This is where you put leadership into practice.", tags: ["Campaign execution", "Community engagement"] },
              { week: "Week 6 · Closing", title: "Closing & Presentation", desc: "Present your project outcomes to mentors, peers, and partner organisations. Reflect on what you built, document your impact, and receive your PEN-Worldwide credentials.", tags: ["Presentation", "Certification", "Reflection"] },
            ].map((p) => (
              <div key={p.week} className="grid md:grid-cols-12 gap-2 md:gap-3 py-6">
                <div className="md:col-span-4 text-xs uppercase tracking-wider text-foreground/70 font-semibold">{p.week}</div>
                <div className="md:col-span-8">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="inline-block text-xs px-3 py-1 rounded-full bg-[#FBE8C6] text-[#8C5A12] font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#B07A1A]" />
              <h3 className="text-xl font-bold">Typical Day</h3>
            </div>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground/85">
              <li><span className="font-semibold">11:00 – 12:30</span> · Session 1</li>
              <li><span className="font-semibold">12:30 – 13:20</span> · Lunch</li>
              <li><span className="font-semibold">13:20 – 14:30</span> · Session 2</li>
              <li><span className="font-semibold">14:30 – 14:40</span> · Break</li>
              <li><span className="font-semibold">14:40 – 15:30</span> · Session 3</li>
              <li><span className="font-semibold">15:30 – 16:00</span> · Daily Debrief</li>
            </ul>
            <p className="mt-4 text-sm text-foreground/75 leading-relaxed">
              Each day closes with a debrief: presenting the day's output, agreeing next steps, and reflecting on what was learned — keeping the project on track and the learning visible.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/80">
              <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B07A1A] mt-2 shrink-0" /> Mini-breaks built into each session</li>
              <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B07A1A] mt-2 shrink-0" /> Refreshments provided throughout the day</li>
              <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B07A1A] mt-2 shrink-0" /> Welcome lunch and end-of-practicum lunch provided</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 — DARK · Training */}
      <section className="bg-[#2A1B08] text-white border-t border-white/15">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#F2C766]">What you'll learn</p>
          <p className="mt-4 max-w-3xl text-[#F5E4C2] leading-relaxed">
            Alongside running your project, a structured training program builds the professional and human skills employers look for.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Briefcase, name: "Career readiness workshops", desc: "Industry-specific sessions on professional skills, job-market readiness, and career pathways in the social impact sector." },
              { icon: Target, name: "Leadership workshops", desc: "Frameworks and practices for leading yourself and others, making decisions under pressure, and motivating others toward a shared goal." },
              { icon: Heart, name: "EPOCH awareness training", desc: "Structured introduction to the five EPOCH capabilities that define effective, human-centered leadership in a world increasingly shaped by AI." },
              { icon: Bot, name: "AI training", desc: "Professional training in AI Foundations and Ethics building the literacy and critical thinking you need in professional and social contexts." },
            ].map((t) => (
              <div key={t.name} className="flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-5">
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
              "You can commit to the full 6-week program in Seoul, South Korea.",
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
          <div className="max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-10 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#FBE8C6] shrink-0">
              <BellRing className="w-6 h-6 text-[#B07A1A]" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Notice</h2>
              <p className="mt-3 text-base md:text-lg text-foreground/80 leading-relaxed">
                Details for the next Hanaro Leadership Practicum cohort will be announced soon.
              </p>
            </div>
          </div>

          {false && (
          <div className="mt-14 grid lg:grid-cols-12 gap-12 items-start">
            {/* LEFT: card */}
            <div className="lg:col-span-5">
              <article className="rounded-3xl border border-border bg-card text-foreground overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={advisoryBoard}
                    alt="Hanaro Leadership practicum students"
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 flex flex-col">
                  <span className="inline-block self-start text-xs px-3 py-1 rounded-full bg-[#FAC775] text-[#412402] font-semibold">
                    19–29 years old
                  </span>
                  <h3 className="mt-4 text-2xl font-bold"></h3>
                  <p className="mt-3 text-xs uppercase tracking-wider text-[#B07A1A] font-bold">
                    Industry: Marketing and Advertising
                  </p>
                  <p className="mt-3 text-foreground/70 text-sm leading-relaxed">
                    Participants form a Practice Enterprise and collaborate to lead a brand awareness campaign for a cause they care about.
                  </p>
                  <p className="mt-5 text-sm text-[#B07A1A] uppercase font-bold tracking-wider">
                    REGISTRATIONS OPEN
                  </p>
                </div>
              </article>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs uppercase font-bold tracking-wider text-[#F2C766]">How to REGISTER</p>
                <p className="mt-2 text-sm text-[#F5E4C2] leading-relaxed">
                  Submit your registration form. Limited seats available.
                </p>
                <div className="mt-4">
                  <a
                    href="https://tally.so/r/gD78al"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Register now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs uppercase font-bold tracking-wider text-[#F2C766]">Practicum details</p>
                <ul className="mt-3 space-y-2 text-sm text-[#F5E4C2]">
                  <li className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#FAC775] shrink-0" />
                    <span>Mon-Fri, July 20 – August 28</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#FAC775] shrink-0" />
                    <span>11:00 – 16:00 KST</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#FAC775] shrink-0" />
                    <span>Seoul, South Korea</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Languages className="w-4 h-4 text-[#FAC775] shrink-0" />
                    <span>English</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wallet className="w-4 h-4 text-[#FAC775] shrink-0 mt-0.5" />
                    <span>₩3,500,000 KRW (≈ $2,245 USD / £1,680 GBP)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs uppercase font-bold tracking-wider text-[#F2C766]">NGO PARTNER</p>
                <div className="mt-4 rounded-xl bg-white/5 p-4 flex items-center justify-center h-24">
                  <span className="text-xs uppercase tracking-wider text-[#F5E4C2] font-semibold">Partner logo</span>
                </div>
                <p className="mt-4 text-sm font-semibold text-white">Industry partner</p>
                <p className="mt-2 text-sm text-[#F5E4C2] leading-relaxed">
                  Partner details coming soon.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs uppercase font-bold tracking-wider text-[#F2C766]">Questions?</p>
                <p className="mt-2 text-sm text-[#F5E4C2] leading-relaxed">
                  Message us on WhatsApp for any queries.
                </p>
                <div className="mt-4">
                  <a
                    href="https://wa.me/447801202799"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    className="btn-primary inline-flex"
                  >
                    <MessageCircle className="w-4 h-4" /> +44 7801 202 799
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: details */}
            <div className="lg:col-span-7">
              <p className="text-lg text-[#F5E4C2]">
                For 6 weeks in Seoul, run a brand awareness campaign and explore
                diverse roles across the marketing and advertising industry from
                creative and strategic to communications and leadership
                positions. 
              </p>


              <ol className="mt-8 space-y-4">
                {[
                  { icon: ClipboardList, title: "Register your interest", desc: "Fill out and submit the short registration form to let us know you're in." },
                  { icon: Dock, title: "Receive the practicum information", desc: "We'll send you the practicum prospectus including, schedule, fees, and what to expect in Seoul." },
                  { icon: Send, title: "Confirm your spot", desc: "If you like what you see, pay the practicum fee to secure one of the 30 trainee seats." },
                  { icon: Megaphone, title: "Lead a brand awareness campaign", desc: "Collaborate with nine other trainees to develop and execute a brand awareness campaign for an NGO partner." },
                  { icon: GraduationCap, title: "Earn verified credentials", desc: "Earn your PEN Worldwide credential and update your portfolio with us." },
                ].map((step, i) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FAC775] text-[#412402] shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <step.icon className="w-4 h-4 text-[#FAC775]" />
                        <h4 className="font-semibold">{step.title}</h4>
                      </div>
                      <p className="mt-1 text-sm text-[#F5E4C2] leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <p className="text-xs uppercase font-bold tracking-wider text-[#F2C766]">FAQ</p>
                <h3 className="mt-2 text-2xl font-bold">Frequently asked questions</h3>
                <Accordion type="single" collapsible className="mt-4">
                  {[
                  {
                    q: "What does Hanaro mean?",
                    a: "The name Hanaro ( 하나로 ) is drawn directly from the Korean language. 하나 (hana) means one, and 로 (ro) is a directional particle meaning toward, into, or by way of. Together, 하나로 carries the meaning of into one evoking convergence, unity, and the idea of many people and perspectives coming together as a single force. The name was chosen deliberately. For young adults navigating the transition from education into professional life, often across cultures, borders, and identities, the experience of finding a single path forward, a unified sense of direction and purpose, is both deeply personal and profoundly relevant. Hanaro names that journey.",
                  },
                  {
                    q: "Who is the Hanaro Leadership practicum for?",
                    a: "Students and young professionals (19–29) who want to develop leadership skills and lead real projects in their community or organization.",
                  },
                    {
                      q: "What is the time commitment?",
                      a: "The practicum runs over six weeks with a mix of workshops, coaching sessions, and project work. Exact schedule shared in the practicum prospectus.",
                    },
                    {
                      q: "Do I receive a certificate?",
                      a: "Yes. Upon completion you receive a certificate recognized by PEN Worldwide.",
                    },
                    {
                      q: "What is a Practice Enterprise (PE)?",
                      a: "A Practice Enterprise is a trainee-run company that operates like a real business. It silhouettes a real enterprise's business procedures, products and services. Under the guidance of a trainer and business mentors, trainees create their Practice Enterprises, from product development, production and distribution to marketing, sales, human resources, finance and web design.",
                    },
                    {
                      q: "How does the project work? Who do I work with?",
                      a: "You join or form a Practice Enterprise, a team of up to 10 trainees who work together. Your Practice Enterprise operates with the same structure and accountability you would find in any professional setting, within the safety net of Epocha's guidance throughout.",
                    },
                    {
                      q: "Can a Practice Enterprise earn real money?",
                      a: "Yes. Your Practice Enterprise operates in the real world — which means the work your team does can generate genuine revenue. This is not a simulation. If your work creates value, that value is real.",
                    },
                    {
                      q: "What happens to the money the Practice Enterprise earns?",
                      a: "Revenue generated during a practicum stays within the Epocha ecosystem. At the end of the practicum, your team decides together how to put it to work. You have three options: \n\n1. Pay it forward: contribute to the Epocha Scholarship Fund, opening the door for the next cohort of young people. \n\n2. Invest in yourselves: apply it toward the cost of a future Epocha practicum. \n\n3. Keep building: continue running your Practice Enterprise under Epocha's guidance and grow what you started.",
                    },
                    {
                      q: "What happens to money the Practice Enterprise earns after the practicum ends?",
                      a: "Once your practicum is complete, anything your Practice Enterprise generates beyond that point is entirely yours and your team's — full stop. Epocha takes nothing. No cut. No conditions. No hidden terms. What we ask in return is simple and it has nothing to do with money: Pay it forward: when the time comes, show up for the next generation the way someone showed up for you. Mentor a future trainee, open a door, share what you know. Carry the standard: represent what Epocha stands for in everything you build next. Your success is our proof of concept. Stay connected: remain part of the Epocha community. The network you build here grows more valuable the more people invest in it together.",
                    },
                    {
                      q: "Do I need a degree or prior experience to join?",
                      a: "No. What matters is not what is on your resume. What matters is that you show up ready to contribute, work as part of a team, and take your role seriously. Everything else is what the practicum is here to build.",
                    },
                    {
                      q: "Who owns the work created during the practicum?",
                      a: "Great question, and an important one. Any intellectual property developed during a practicum is jointly owned by Epocha, the Practice Enterprise, and the industry partner involved. Both Epocha and the industry partner hold a non-exclusive license to use that work for commercial purposes.",
                    },
                    {
                      q: "Is accommodation included in the practicum fee?",
                      a: "Accommodation is not included in the practicum fee. Trainees are responsible for arranging and funding their own housing.",
                    },
                    {
                      q: "Do I need a visa to participate?",
                      a: "For most international participants, completing a practicum in South Korea do not require a visa — most nationalities are permitted to complete short training programs when entering South Korea visa-free for stays of up to 90 days, which comfortably covers the full range of Hanaro practicum durations.\n\nThat said, entry requirements vary by nationality and are subject to change. Each trainee remains solely responsible for verifying their own visa and entry requirements before the program begins.\n\nWe recommend:\n\n• Confirming your country's visa-free status for South Korea before registering\n• Ensuring your passport is valid for the full duration of your stay\n• Checking official government or embassy sources for the most up to date entry requirements",
                    },
                  ].map((item, i) => (
                    <AccordionItem
                      key={item.q}
                      value={`hanaro-faq-${i}`}
                      className="border-white/15"
                    >
                      <AccordionTrigger className="hover:no-underline text-base font-semibold py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#F5E4C2] text-sm leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>

    </>
  );
}