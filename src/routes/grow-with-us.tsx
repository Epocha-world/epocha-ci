import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  FileText,
  Sparkles,
  CheckCircle2,
  Send,
  Gift,
  Globe2,
  Megaphone,
  Users,
  Lightbulb,
  Coins,
  Video,
  UserPlus,
  Instagram,
  InstagramIcon,
} from "lucide-react";
import epochaXUpperclassQR from "@/assets/epocha-x-upperclass-qr.png";
import advisoryBoard from "@/assets/practicum-advisory-board.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/grow-with-us")({
  head: () => ({
    meta: [
      { title: "Work With Us — EPOCHA" },
      {
        name: "description",
        content: "Join EPOCHA as a freelance content creator and help shape our next big campaign.",
      },
      { property: "og:title", content: "Work With Us — EPOCHA" },
      { property: "og:description", content: "Love storytelling? Join our creator network today." },
    ],
  }),
  component: GrowWithUsPage,
});

function GrowWithUsPage() {
  return (
    <>
      {/* HERO — dark */}
      <section id="epocha-x-upperclass" className="bg-ink text-cream scroll-mt-20">
        <div className="container-x py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">
              EPOCHA X UpperClass
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
              Join us as&nbsp;
              <span className="text-lime">
                Freelance Content Creator for the new EPOCHA campaign.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ABOUT UPPERCLASS + PROCESS — light */}
      <section className="bg-background text-foreground">
        <div className="container-x py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* LEFT: card */}
            <div className="lg:col-span-5">
              <article className="rounded-3xl border border-border bg-muted/30 overflow-hidden flex flex-col">
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
                  <h2 className="mt-4 text-2xl font-bold">EPOCHA X UpperClass</h2>
                  <p className="mt-3 text-foreground/70 text-sm leading-relaxed">
                    Let's create together! We are looking for talented, independent storytellers,
                    videographers, and designers to bring the EPOCHA vision to life. Partner with us
                    as a freelance content creator and help us shape our next big project. Whether
                    you specialize in short-form video, high-end photography, or engaging
                    copywriting, we want to hear from you.
                  </p>
                  <p className="mt-5 text-sm text-coral uppercase font-bold tracking-wider">
                    Submission period: OPEN
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/80 leading-relaxed">
                    <li>
                      💰 <span className="font-semibold">Pay rate:</span> $25.00 per approved and
                      published content piece
                    </li>
                    <li>
                      🎁 <span className="font-semibold">Reward:</span> Marketplace redeemable
                      points (gift cards, practicum discounts)
                    </li>
                    <li>
                      📢 <span className="font-semibold">Notice:</span> This is a freelance
                      opportunity. Creators are welcome to undertake similar activities or
                      collaborations with other companies alongside this role.
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            {/* RIGHT: details */}
            <div className="lg:col-span-7">
              <p className="text-lg text-foreground/80">
                Love storytelling? Join our creator network today. Turn your ideas into buzz-worthy
                campus campaigns that shape our trainees' experience.
              </p>

              <ol className="mt-8 space-y-4">
                {[
                  {
                    icon: InstagramIcon,
                    title: "Follow us on Instagram",
                    desc: "Follow @learnwithepocha on Instagram to stay connected with the creator community and catch new campaign drops first.",
                  },
                  {
                    icon: UserPlus,
                    title: "Sign up",
                    desc: "Create your free account on the UpperClass platform to join the EPOCHA creator network.",
                  },
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
                    className="flex gap-4 rounded-2xl border border-border bg-muted/30 p-5"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lime text-ink shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <step.icon className="w-4 h-4 text-coral" />
                        <h4 className="font-semibold">{step.title}</h4>
                      </div>
                      <p className="mt-1 text-sm text-foreground/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO APPLY + FAQ — dark */}
      <section className="bg-ink text-cream">
        <div className="container-x py-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* How to apply */}
            <div className="rounded-3xl border border-cream/15 bg-white/5 p-8 md:p-10">
              <p className="text-xs uppercase font-bold tracking-wider text-coral">How to apply</p>
              <p className="mt-4 text-cream/80 text-base leading-relaxed">
                Apply to start building your creator portfolio.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <div className="bg-white p-3 rounded-2xl shrink-0 shadow-sm">
                  <img
                    src={epochaXUpperclassQR}
                    alt="QR code to apply for the EPOCHA creator network"
                    width={140}
                    height={140}
                    loading="lazy"
                    className="w-32 h-32"
                  />
                </div>
                <a
                  href="https://forms.gle/UWujWAnT3Mc8MDvGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Apply now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-coral">FAQ</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
              <Accordion type="single" collapsible className="mt-6">
                {[
                  {
                    q: "What do I walk away with?",
                    a: "A verified creator portfolio with published campaigns, hands-on experience producing short-form content across Instagram, TikTok, LinkedIn, and Facebook, plus rewards for every approved and live piece of content.",
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
      </section>

      {/* WHY JOIN — light */}
      <section className="bg-background text-foreground">
        <div className="container-x py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">Why join</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            A global youth movement — <span className="text-lime">put your spin on it.</span>
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Globe2,
                title: "Be a part of the solution",
                desc: "Resting youth, broken career ladders, AI anxiety — you're living it. Turn what you feel into content that resonates with fellow GEN Z.",
              },
              {
                icon: Video,
                title: "Film what you like",
                desc: "Skits, day-in-the-life, hot takes, mini-docs, study vlogs, satire. If it's honest and well-made, it fits the brief.",
              },
              {
                icon: Lightbulb,
                title: "Think outside the box",
                desc: "Forget templated influencer formulas. Bring your own angle, humour, dialect, aesthetic. Weird, sharp and human always wins.",
              },
              {
                icon: Megaphone,
                title: "Build your audience",
                desc: "Every approved post grows a verified portfolio you actually own — across Instagram, TikTok, LinkedIn and Facebook.",
              },
              {
                icon: Users,
                title: "Connect locally & globally",
                desc: "Join a network of young creators tackling the same questions in their own cities. Collab, remix, and learn from each other.",
              },
              {
                icon: Coins,
                title: "Earn with zero cost",
                desc: "No application fee, no equipment requirement, no follower threshold. Get rewarded in cash, gift cards and UpperClass points.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-muted/30 p-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lime/15 text-lime">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="mt-4 font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — light bg, dark card */}
      <section className="bg-background text-foreground">
        <div className="container-x py-24">
          <div className="rounded-3xl bg-ink text-cream border border-lime/30 p-8 md:p-12 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">
              Ready to start?
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-cream">
              Join <span className="text-lime">hundreds</span> of creators already on UpperClass.
            </h2>
            <p className="mt-4 text-cream/80 max-w-xl mx-auto leading-relaxed">
              No follower minimums. No fees. Get the briefs, get the rewards, and a portfolio you
              actually own.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://forms.gle/UWujWAnT3Mc8MDvGA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Apply now <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://upperclass.app/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream/70 hover:text-cream underline underline-offset-4 transition-colors"
              >
                Learn more about UpperClass
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
