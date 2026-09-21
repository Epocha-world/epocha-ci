import { PartnerLogoBanner } from "@/components/PartnerLogoBanner";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Compass,
  Gift,
  HandHeart,
  MessagesSquare,
  Network,
  Users,
} from "lucide-react";
import { createSeoHead } from "@/lib/seo";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/about_/sparked")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Sparked! — EPOCHA",
      description:
        "Support youth employability across EPOCHA practicums. Sponsor a capstone, volunteer, or share resources and opportunities.",
      path: "/about/sparked",
    }),
  component: SparkedPage,
});

const sections = [
  {
    id: "sponsor",
    title: "Become a sponsor",
    intro:
      "Strengthen your brand and solve immediate business bottlenecks while supporting youth employability.",
    cards: [
      {
        icon: Briefcase,
        title: "Open a capstone",
        text: "Share a project in which trainees apply the knowledge and skills they've built to address a real-world problem, guided by our team. Sponsors choose to deliver their capstone across all practicums.",
      },
      {
        icon: Users,
        title: "Host a trainee",
        text: "Offer an internship or a micro placement. Micro placements are short, structured placement lasting from a few hours up to three days. Trainees take on a small brief, deliver it, and receive professional feedback on their work.",
      },
      {
        icon: Compass,
        title: "Arrange a visit",
        text: "Arrange a guided visit where trainees see teams, tools and workflows in action. Trainees connect what knowledge and current activities to how real organisations operate.",
      },
    ],
    ctaTitle: "Ready to open a capstone, host a trainee, or arrange a visit?",
    ctaText:
      "Tell us a little about your company and the opportunity you have in mind. We'll get back to you within two business days.",
    cta: "Start the conversation",
  },
  {
    id: "volunteer",
    title: "Volunteer with us.",
    intro:
      "A single session can shift how a trainee imagines their future. Share your journey, your pivots, and the lessons you learned along the way.",
    cards: [
      {
        icon: MessagesSquare,
        title: "Give a career talk",
        text: "Live conversations with trainees who hear how careers really unfold, ask their own questions, and see the range of paths open to them.",
      },
      {
        icon: HandHeart,
        title: "Become a mentor",
        text: "One-to-one guidance through a trainee's journey. Mentors guide trainees, share insights, give them feedback, and cheer them on as they grow.",
      },
    ],
    ctaTitle: "Have time to share?",
    ctaText:
      "Tell us whether you'd like to give a career talk, become a mentor, or both. We'll be in touch with next steps.",
    cta: "Sign up to volunteer",
  },
  {
    id: "give-and-share",
    title: "Give and share.",
    intro:
      "Resources turn curiosity into careers. Share toolkits, events, opportunities, or funding and watch young people step confidently into their professional lives.",
    cards: [
      {
        icon: Gift,
        title: "Share practical resources",
        text: "From career toolkits and educational programs to networking events, contribute what young people need to prepare, connect, and step into their first professional roles.",
      },
      {
        icon: Network,
        title: "Create opportunities",
        text: "Post career openings, internships, or fund stipends that remove barriers giving young people the chance to gain real experience and prove themselves.",
      },
    ],
    ctaTitle: "Have resources or opportunities young people need?",
    ctaText:
      "Tell us what you'd like to give — resources, opportunities, or support — and we'll show you exactly where it makes the difference.",
    cta: "Give and share",
  },
];

function SparkedPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="container-x py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">
            {t("Get involved")}
          </p>
          <h1 className="mt-4 text-6xl md:text-8xl font-bold text-[var(--lime)]">Sparked!</h1>
          <p className="mt-6 max-w-3xl text-xl md:text-2xl text-[var(--lime)]">
            {t("Help us shape the future of work with Sparked!")}
          </p>
          <nav aria-label={t("Ways to get involved")} className="mt-8 flex flex-wrap gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={"#" + section.id}
                className="rounded-full border border-lime px-5 py-3 font-semibold text-[var(--lime)] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
              >
                {t(section.title.replace(/\.$/, ""))}
              </a>
            ))}
          </nav>
        </div>
      </section>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-32 border-b border-border text-foreground ${section.id === "volunteer" ? "surface-dark" : "bg-background"}`}
        >
          <div className="container-x py-20 md:py-24">
            <h2 className="text-4xl md:text-5xl font-bold">{t(section.title)}</h2>
            <p className="mt-5 max-w-3xl text-lg text-foreground/75 leading-relaxed">
              {t(section.intro)}
            </p>
            <div
              className={
                "mt-10 grid gap-6 " +
                (section.cards.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2")
              }
            >
              {section.cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-3xl border border-border bg-card p-7 md:p-8"
                >
                  <card.icon aria-hidden="true" className="h-8 w-8 text-foreground" />
                  <h3 className="mt-6 text-2xl font-bold">{t(card.title)}</h3>
                  <p className="mt-4 text-foreground/75 leading-relaxed">{t(card.text)}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-3xl bg-ink text-cream p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold">{t(section.ctaTitle)}</h3>
              <p className="mt-5 mx-auto max-w-3xl text-lg text-cream/75 leading-relaxed">
                {t(section.ctaText)}
              </p>
              <Link to="/connect" className="btn-primary mt-8 inline-flex">
                {t(section.cta)} <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      ))}
      <PartnerLogoBanner />
    </>
  );
}
