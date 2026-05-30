import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  FileText,
  Sparkles,
  CheckCircle2,
  Send,
  Gift,
  GraduationCap,
  Dock,
  Calendar,
  Clock,
  MapPin,
  Languages,
  MessageCircle,
  TvMinimalPlay,
  ClipboardList,
  Clapperboard,
} from "lucide-react";
import student from "@/assets/student.jpg";
import epochaXUpperclassQR from "@/assets/epocha-x-upperclass-qr.png";
import advisoryBoard from "@/assets/practicum-advisory-board.jpg";
import seagullLogo from "@/assets/the-seagull-films-logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/practicums")({
  head: () => ({
    meta: [
      { title: "Practicums — EPOCHA" },
      {
        name: "description",
        content:
          "Project-based practicums boosting your employability — real experience, recognized credentials, coaching, and competencies employers want.",
      },
      { property: "og:title", content: "EPOCHA Practicums" },
      { property: "og:description", content: "Turn academic effort into career momentum." },
      { property: "og:image", content: student },
    ],
  }),
  component: PracticumsPage,
});

function PracticumsPage() {
  return (
    <>
      <section className="container-x pt-20 pb-16 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-coral text-black font-bold">​</p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1]">
            Boosting your <span className="text-lime">employability.</span>
          </h1>
          <p className="mt-6 text-xl text-foreground/80 max-w-xl">
            EPOCHA transforms how you leverage experiential learning. We help you turn academic
            efforts into career momentum, with the real-world experience, connections, and
            confidence to thrive from day one.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden border border-border aspect-[4/5]">
            <img
              src={student}
              alt="EPOCHA student"
              width={1200}
              height={1400}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="epocha-x-upperclass" className="bg-ink text-cream scroll-mt-20">
        <div className="container-x py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">
              EPOCHA X UpperClass
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
              Join us as&nbsp;
              <span className="text-lime">content creator</span>
              <br />
              for EPOCHA.
            </h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-12 gap-12 items-start">
            {/* LEFT: card */}
            <div className="lg:col-span-5">
              <article className="rounded-3xl border border-cream/15 bg-cream text-ink overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={advisoryBoard}
                    alt="EPOCHA X UpperClass students collaborating"
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 flex flex-col">
                  <span className="inline-block self-start text-xs px-3 py-1 rounded-full bg-lime text-ink font-semibold">
                    19–29 years old
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">EPOCHA X UpperClass</h3>
                  <p className="mt-3 text-ink/70 text-sm leading-relaxed">
                    Lead real projects, run marketing campaigns or business operations, and shape
                    the EPOCHA experience for future cohorts.
                  </p>
                  <p className="mt-5 text-sm text-coral uppercase font-bold tracking-wider">
                    Submission period: june 1 - july 1 2026
                  </p>
                </div>
              </article>

              <div className="mt-6 rounded-2xl border border-cream/10 bg-white/5 p-5">
                <p className="text-xs uppercase font-bold tracking-wider text-lime">How to apply</p>
                <p className="mt-2 text-sm text-cream/80 leading-relaxed">
                  Apply on UpperClass or scan the QR code to start building your creator portfolio.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="bg-cream p-3 rounded-xl w-fit shrink-0">
                    <img
                      src={epochaXUpperclassQR}
                      alt="QR code to apply for EPOCHA X UpperClass practicum"
                      width={160}
                      height={160}
                      loading="lazy"
                      className="w-32 h-32"
                    />
                  </div>
                  <a
                    href="https://upperclass.app/i/epocha/join"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Apply on UpperClass <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: details */}
            <div className="lg:col-span-7">
              <p className="text-lg text-cream/80">
                Join the EPOCHA X UpperClass practicum and turn your ideas into content, campaigns,
                and campus impact.
              </p>

              <ol className="mt-8 space-y-4">
                {[
                  {
                    icon: FileText,
                    title: "Receive the brief",
                    desc: "Get an EPOCHA campaign brief with the goal, message, and creative direction.",
                  },
                  {
                    icon: Sparkles,
                    title: "Create authentic content",
                    desc: "Produce short-form content for Instagram, TikTok, LinkedIn, or Facebook.",
                  },
                  {
                    icon: Send,
                    title: "Submit for approval",
                    desc: "Send your draft for a quick review by the EPOCHA team.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Publish if approved",
                    desc: "Once approved, publish on your channels and tag EPOCHA.",
                  },
                  {
                    icon: Gift,
                    title: "Earn your reward",
                    desc: "Get rewarded when your content is approved and live.",
                  },
                ].map((step, i) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-cream/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lime text-ink shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <step.icon className="w-4 h-4 text-lime" />
                        <h4 className="font-semibold">{step.title}</h4>
                      </div>
                      <p className="mt-1 text-sm text-cream/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <p className="text-xs uppercase font-bold tracking-wider text-coral">FAQ</p>
                <h3 className="mt-2 text-2xl font-bold">Frequently asked questions</h3>
                <Accordion type="single" collapsible className="mt-4">
                  {[
                    {
                      q: "What do I walk away with?",
                      a: "A verified creator portfolio with published campaigns, hands-on experience producing short-form content across Instagram, TikTok, LinkedIn, and Facebook, plus rewards for every approved and live piece of content. 2026 submission rewards includes cash, and points redeemable to UpperClass marketplace, and/or gift cards.",
                    },
                    {
                      q: "Do I need a large following to apply?",
                      a: "No. EPOCHA X UpperClass is about authentic ideas and execution, not follower count. We care about your creativity, voice, and willingness to learn.",
                    },
                    {
                      q: "Will EPOCHA tell me exactly what to do?",
                      a: "You'll receive a clear campaign brief with goals, key messages, and creative direction — but the ideas, format, and voice are yours. We review and approve before you publish.",
                    },
                  ].map((item, i) => (
                    <AccordionItem key={item.q} value={`faq-${i}`} className="border-cream/10">
                      <AccordionTrigger className="text-cream hover:no-underline text-base font-semibold py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-cream/70 text-sm leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hanaro-leadership" className="bg-background text-foreground scroll-mt-20">
        <div className="container-x py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">
              하나로 - Hanaro Leadership
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
              Become a <span className="text-coral">Hanaro leader</span>
              <br />
              in your community.
            </h2>
          </div>

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
                  <span className="inline-block self-start text-xs px-3 py-1 rounded-full bg-coral text-cream font-semibold">
                    19–29 years old
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">하나로 - Hanaro Leadership Practicum</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    Team up with nine others to develop, produce, and showcase a short documentary
                    or film in collaboration with The Seagull Films, Korea.
                  </p>
                  <p className="mt-5 text-sm text-coral uppercase font-bold tracking-wider">
                    Registration period: JUNE 1 TO JULY 10
                  </p>
                </div>
              </article>

              <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                <p className="text-xs uppercase font-bold tracking-wider text-coral">
                  How to REGISTER
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Submit your registration form. We accept a maximum of 30 trainees.
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

              <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                <p className="text-xs uppercase font-bold tracking-wider text-coral">
                  Practicum details
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-coral shrink-0" />
                    <span>July 20 – August 28</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-coral shrink-0" />
                    <span>9:00 AM – 1:00 PM KST</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-coral shrink-0" />
                    <span>Seoul, South Korea</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Languages className="w-4 h-4 text-coral shrink-0" />
                    <span>English</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                <p className="text-xs uppercase font-bold tracking-wider text-coral">
                  Industry Partner
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src={seagullLogo}
                    alt="The Seagull Films logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <h4 className="text-lg font-bold">The Seagull Films, Korea</h4>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  The Seagull Films is an international production company dedicated to socially
                  impactful, culturally rich cinema. With a strong focus on Asian–European
                  co-productions and voices worldwide, they champion stories that explore freedom,
                  identity, and human rights tackling themes of censorship, oppression, and
                  resistance. Driven by artistic integrity and a belief in film as a force for
                  change, The Seagull Films brings together filmmakers and producers across borders
                  to create work that is both artistically ambitious and deeply resonant.
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.theseagullfilms.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                <p className="text-xs uppercase font-bold tracking-wider text-coral">Questions?</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
              <p className="text-lg text-muted-foreground">
                Become a Hanaro Leader in your community. Explore diverse career pathways across the
                film and production industry, from creative and technical roles to business and
                leadership positions.
              </p>

              <ol className="mt-8 space-y-4">
                {[
                  {
                    icon: ClipboardList,
                    title: "Register your interest",
                    desc: "Fill out and submit the short registration form to let us know you're in.",
                  },
                  {
                    icon: Dock,
                    title: "Receive the practicum information",
                    desc: "We'll send you the practicum prospectus including, schedule, fees, and what to expect in Seoul.",
                  },
                  {
                    icon: Send,
                    title: "Confirm your spot",
                    desc: "If you like what you see, pay the practicum fee to secure one of the 30 trainee seats.",
                  },
                  {
                    icon: Clapperboard,
                    title: "Produce a short film",
                    desc: "Collaborate with nine other trainees and The Seagull Films, Korea to develop, produce, and showcase a short documentary or film.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Earn verified credentials",
                    desc: "Earn your PEN Worldwide credential and update your portfolio with us.",
                  },
                ].map((step, i) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-coral text-cream shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <step.icon className="w-4 h-4 text-coral" />
                        <h4 className="font-semibold">{step.title}</h4>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <p className="text-xs uppercase font-bold tracking-wider text-coral">FAQ</p>
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
                    <AccordionItem key={item.q} value={`hanaro-faq-${i}`} className="border-border">
                      <AccordionTrigger className="hover:no-underline text-base font-semibold py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-x py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
            Ready to turn knowledge into a <span className="text-lime">verified portfolio?</span>
          </h2>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link to="/connect" className="btn-primary">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-cream text-cream font-medium px-6 py-3.5 rounded-full hover:bg-cream hover:text-ink transition"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
