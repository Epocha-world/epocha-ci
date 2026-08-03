import teamPhoto from "@/assets/practicum-hanaro.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Clapperboard,
  ClipboardList,
  Clock,
  CreditCard,
  GraduationCap,
  Languages,
  MapPin,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/practicums_/hanaro-marketing_/voices-in-motion")({
  head: () => ({
    meta: [
      { title: "Hanaro — Voices in Motion Practicum — EPOCHA" },
      {
        name: "description",
        content:
          "하나로 Hanaro Marketing and Advertising Practicum: team up with nine others to develop, produce and showcase a short documentary or film in Seoul.",
      },
      {
        property: "og:title",
        content: "Hanaro — Voices in Motion Practicum — EPOCHA",
      },
      {
        property: "og:description",
        content:
          "Become a Hanaro leader in your community. Explore career pathways across the film and production industry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VoicesInMotionPage,
});

const steps = [
  {
    icon: ClipboardList,
    title: "Download and read the practicum guide",
    desc: "Get the full rundown of what the practicum involves before you commit.",
  },
  {
    icon: CreditCard,
    title: "Register and secure your spot",
    desc: "Submit the short registration form and pay the practicum fee to claim one of the 30 trainee seats.",
  },
  {
    icon: Clapperboard,
    title: "Lead a 45-hour capstone project",
    desc: "Work alongside fellow trainees to develop, produce, and showcase a creative project from first idea to final presentation.",
  },
  {
    icon: GraduationCap,
    title: "Earn verified credentials",
    desc: "Boost your portfolio with certified recognition from EPOCHA and leading industry partners.",
  },
];

const faqs = [
  {
    q: "What does Hanaro mean?",
    a: "The name Hanaro (하나로) is drawn directly from the Korean language. 하나 (hana) means one, and 로 (ro) is a directional particle meaning toward, into, or by way of. Together, 하나로 carries the meaning of into one — evoking convergence, unity, and the idea of many people and perspectives coming together as a single force. The name was chosen deliberately. For young adults navigating the transition from education into professional life, often across cultures, borders, and identities, the experience of finding a single path forward, a unified sense of direction and purpose, is both deeply personal and profoundly relevant. Hanaro names that journey.",
  },
  {
    q: "Who is the Hanaro — Voices in Motion for?",
    a: "Students and young professionals (19–24) passionate about visual, performing, literary, or media arts and who want to develop leadership skills and lead real projects in their community or organization.",
  },
  {
    q: "What is the time commitment?",
    a: "The 45-hour practicum spans 15 Saturday sessions, combining interactive workshops, group coaching, and hands-on project work.",
  },
  {
    q: "Do I receive a certificate?",
    a: "Yes. Upon completion you receive a certificate recognized by the industry partners, EPOCHA, and supporters.",
  },
  {
    q: "How does the project work? Who do I work with?",
    a: "You join or form a Practice Enterprise, a team of up to 10 trainees who work together. Your Practice Enterprise operates with the same structure and accountability you would find in any professional setting, within the safety net of Epocha's guidance throughout.",
  },
  {
    q: "Do I need a degree or prior experience to join?",
    a: "No. What matters is not what is on your resume. What matters is that you show up ready to contribute, work as part of a team, and take your role seriously. Everything else is what the practicum is here to build.",
  },
  {
    q: "Can a Practice Enterprise earn real money?",
    a: "Yes. Your Practice Enterprise operates in the real world — which means the work your team does can generate genuine revenue. If your work creates value, that value is real.",
  },
  {
    q: "What happens to the money the Practice Enterprise earns?",
    a: "Revenue generated during a practicum stays within the Epocha ecosystem. At the end of the practicum, your team decides together how to put it to work. You have three options: 1. Pay it forward: contribute to the Epocha Scholarship Fund, opening the door for the next cohort of young people. 2. Invest in yourselves: apply it toward the cost of a future Epocha practicum. 3. Keep building: continue running your Practice Enterprise under Epocha's guidance and grow what you started.",
  },
  {
    q: "What happens to money the Practice Enterprise earns after the practicum ends?",
    a: "If you choose to continue working as a team after your practicum ends, anything your Practice Enterprise generates beyond that point is entirely yours and your team's — full stop. Epocha takes nothing. No cut. No conditions. No hidden terms. What we ask in return is simple and it has nothing to do with money: Pay it forward — when the time comes, show up for the next generation the way someone showed up for you. Mentor a future trainee, open a door, share what you know. Carry the standard — represent what Epocha stands for in everything you build next. Your success is our proof of concept. Stay connected — remain part of the Epocha community. The network you build here grows more valuable the more people invest in it together.",
  },
  {
    q: "Who owns the work created during the practicum?",
    a: "Great question, and an important one. Any intellectual property developed during a practicum is jointly owned with us. Both Epocha and the industry partner hold a non-exclusive license to use that work for commercial purposes.",
  },
];

function VoicesInMotionPage() {
  return (
    <>
      {/* Hero + main content — LIGHT */}
      <section className="bg-background text-foreground">
        <div className="container-x pt-20 pb-20">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
            Become a <span className="text-[#C9821B]">Hanaro leader</span> in your community.
          </h1>

          <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
            {/* Left column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-3xl border border-border overflow-hidden bg-card">
                <img
                  src={teamPhoto}
                  alt="Trainees collaborating around laptops during the Hanaro practicum"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="inline-block rounded-full bg-[#C9821B] text-white text-xs font-bold px-3 py-1">
                    19–24 years old
                  </span>
                  <h2 className="mt-4 text-2xl font-bold leading-snug">
                    하나로 · Hanaro Voices in Motion
                  </h2>
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-[#C9821B]">
                    Registrations open
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9821B]">
                  Practicum details
                </p>
                <ul className="mt-4 space-y-3 text-foreground/80">
                  {[
                    { icon: Calendar, label: "Rolling start dates" },
                    { icon: Clock, label: "8:00 am – 11:00 am UK time" },
                    { icon: MapPin, label: "Remote" },
                    { icon: Languages, label: "English" },
                  ].map((d) => (
                    <li key={d.label} className="flex items-center gap-3">
                      <d.icon className="w-4 h-4 text-[#C9821B]" />
                      {d.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9821B]">
                  Industry partners
                </p>
                <div className="mt-4 space-y-6">
                  <div>
                    <a
                      href="https://www.facebook.com/CandonYouthMovement/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-background border border-border p-6 flex items-center justify-center hover:border-[#C9821B] transition-colors"
                    >
                      <span className="text-lg font-bold text-[#C9821B] text-center">
                        Candon Youth Movement
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.youthcirclessg.org/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-background border border-border p-6 flex items-center justify-center hover:border-[#C9821B] transition-colors"
                    >
                      <span className="text-lg font-bold text-[#C9821B]">Youth Circles</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9821B]">
                  Questions?
                </p>
                <p className="mt-3 text-foreground/75">Message us on WhatsApp for any queries.</p>
                <a
                  href="https://wa.me/447801202799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex mt-5"
                >
                  <MessageCircle className="w-4 h-4" /> +44 7801 202 799
                </a>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-7">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Join Hanaro — Voices in Motion and team up with fellow trainees to explore the
                importance of Human-AI collaboration in shaping youth social dynamics and social
                integration through creative arts.
              </p>

              <div className="mt-8 space-y-4">
                {steps.map((s, i) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-border bg-card p-6 flex gap-5"
                  >
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[#C9821B] text-white font-bold grid place-items-center">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        <s.icon className="w-4 h-4 text-[#C9821B]" /> {s.title}
                      </h3>
                      {s.desc && (
                        <p className="mt-2 text-foreground/75 leading-relaxed">{s.desc}</p>
                      )}
                      {i === 0 && (
                        <a
                          href="https://drive.google.com/file/d/1vOMBhYQy0frmf1RXTXLv2BhZ8la25ABr/view"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex mt-4"
                        >
                          Download guide <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-14">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9821B]">FAQ</p>
                <h2 className="mt-3 text-3xl font-bold">Frequently asked questions</h2>
                <Accordion type="single" collapsible className="mt-4">
                  {faqs.map((f) => (
                    <AccordionItem key={f.q} value={f.q}>
                      <AccordionTrigger className="text-left text-base font-semibold">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/75 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA — DARK */}
      <section className="bg-[#0F0A03] text-white">
        <div className="container-x py-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1]">
            Ready to turn knowledge into a{" "}
            <span className="text-[#FAC775]">verified portfolio?</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="https://forms.gle/p8jq3WTskKgA5fRy7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Register now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://forms.gle/sKxTLz7F79wnDsno6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
