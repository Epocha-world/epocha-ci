import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Globe2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProgramFinder } from "@/components/home/ProgramFinder";
import { LearningJourney } from "@/components/home/LearningJourney";
import { useI18n } from "@/i18n";
import { createSeoHead } from "@/lib/seo";
import hero from "@/assets/hero-banner.webp";
import community from "@/assets/practicum-hanaro.webp";
import collaboration from "@/assets/practicum-advisory-board.webp";
import penLogo from "@/assets/logos/pen-worldwide.png";
import koreaPenLogo from "@/assets/logos/koreapen.png";

export const Route = createFileRoute("/")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "EPOCHA — Turn knowledge into real experience.",
      description:
        "Project-based practicums for ages 14–29. Explore real projects, personal coaching, and global connections with EPOCHA.",
      path: "/",
      image: hero,
    }),
  component: HomePage,
});

const faqs = [
  {
    question: "What is a practicum?",
    answer:
      "A structured, hands-on learning experience. You apply your knowledge to projects with coaching from EPOCHA professionals and mentor companies, then document what you have learned and created.",
    to: "/practicums",
  },
  {
    question: "Who can take part?",
    answer:
      "Our programs serve young people aged 14–29. Start-up Lab Camp is for ages 14–18; Hanaro and Mirae are designed for ages 19–29. Individual projects may have more specific eligibility requirements, so check the program details before applying.",
    to: "/practicums",
  },
  {
    question: "How much time will I need?",
    answer:
      "The schedule depends on your program and project. Check the individual program page for its duration, session times, location, and expected commitment before you register.",
    to: "/practicums",
  },
  {
    question: "What does it cost?",
    answer:
      "EPOCHA offers free and paid practicums. Fees and funding options depend on the program. You can review the Start-up Lab Camp fees and funding page or contact us about other programs.",
    to: "/practicums/startup-lab-camp/how-it-works/fees-and-funding",
  },
  {
    question: "Do I need previous experience?",
    answer:
      "Start-up Lab Camp welcomes all experience levels. Bring curiosity and a willingness to contribute to a team. Other programs list their own requirements, and we can help you find a suitable starting point.",
    to: "/connect",
  },
  {
    question: "How do I get started?",
    answer:
      "Explore a program, read its details, and follow the application or interest-registration link. If you are choosing between programs, contact us to talk about your interests and goals.",
    to: "/connect",
  },
] as const;

function HomePage() {
  const { t, locale } = useI18n();
  return (
    <>
      <section className="border-b border-border">
        <div className="container-x grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.04fr_1fr] lg:gap-12 lg:py-20">
          <div className="reveal relative z-10">
            <h1
              className={`editorial-heading text-[2.5rem] leading-[1.07] font-bold tracking-[-0.055em] sm:text-6xl lg:text-[4.5rem] ${locale === "ko" ? "break-keep" : ""}`}
            >
              {t("Turn knowledge into real experience.")}
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              {t("Real projects. Personal coaching. Global connections.")}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/practicums" className="btn-primary">
                {t("Explore practicums")} <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link to="/about/partnerships" className="btn-secondary">
                {t("Partner with us")} <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <a
              href="#choose-your-practicum"
              className="mt-10 inline-flex items-center gap-3 text-sm text-muted-foreground underline-offset-4 hover:underline lg:mt-14"
            >
              <ArrowDown aria-hidden="true" className="size-4" />
              {t("Your next chapter starts here")}
            </a>
          </div>
          <div className="reveal relative min-w-0">
            <div className="angular-media overflow-hidden bg-muted">
              <img
                src={hero}
                width={1920}
                height={1280}
                fetchPriority="high"
                alt={t("A group exchanging ideas around a shared table")}
                className="aspect-[5/4] w-full object-cover object-[52%_center] lg:aspect-[.92]"
              />
            </div>
          </div>
        </div>
      </section>
      <ProgramFinder />
      <section className="surface-inverse section-padding text-cream">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                {t("Learning in action")}
              </p>
              <h2 className="editorial-heading mt-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                {t("Make something that matters.")}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-cream/75">
              {t(
                "Explore the projects you can take on, the roles you can try, and the work you can build your portfolio around.",
              )}
            </p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <article className="group">
              <Link
                to="/practicums/hanaro-marketing/voices-in-motion"
                className="block overflow-hidden"
                aria-label={t("Explore Voices in Motion")}
              >
                <img
                  src={community}
                  width={1920}
                  height={1280}
                  loading="lazy"
                  alt={t("People gathered for a creative discussion and presentation")}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
                />
              </Link>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-lime">
                    {t("Creative arts · Project brief")}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                    {t("Voices in Motion")}
                  </h3>
                </div>
                <ArrowUpRight aria-hidden="true" className="mt-3 size-6 shrink-0 text-lime" />
              </div>
              <p className="mt-4 max-w-xl leading-relaxed text-cream/75">
                {t(
                  "Develop, produce, and showcase a short documentary or film with a team. Take a creative role and turn a shared idea into a project you can present.",
                )}
              </p>
              <Link
                to="/practicums/hanaro-marketing/voices-in-motion"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime underline-offset-4 hover:underline"
              >
                {t("Explore the project")}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </article>
            <div className="flex flex-col border-t border-cream/20">
              <article className="py-8">
                <p className="text-xs uppercase tracking-widest text-lime">
                  {t("Entrepreneurship · Program pathway")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  {t("Your first Practice Enterprise")}
                </h3>
                <p className="mt-4 leading-relaxed text-cream/75">
                  {t(
                    "Build a trainee-run company. Explore roles, develop a business concept, and practise making decisions together before pitching your ideas.",
                  )}
                </p>
                <Link
                  to="/practicums/startup-lab-camp"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime underline-offset-4 hover:underline"
                >
                  {t("Discover Start-up Lab Camp")}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
              <article className="border-t border-cream/20 py-8">
                <p className="text-xs uppercase tracking-widest text-lime">
                  {t("Social impact · Program pathway")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  {t("A cause. A team. A way forward.")}
                </h3>
                <p className="mt-4 leading-relaxed text-cream/75">
                  {t(
                    "Work alongside NGOs and charities to plan campaigns, build partnerships, and put project management and advocacy into practice.",
                  )}
                </p>
                <Link
                  to="/practicums/hanaro"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime underline-offset-4 hover:underline"
                >
                  {t("Discover Hanaro")}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
      <LearningJourney />
      <section className="section-padding border-y border-border bg-muted/35">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t("People make the difference")}
            </p>
            <h2 className="editorial-heading mt-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              {t("Find your people. Widen your world.")}
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              {t(
                "Learn with peers, coaches, and mentor companies. EPOCHA connects project-based learning with the Practice Enterprise community through KoreaPEN and PEN Worldwide.",
              )}
            </p>
            <Link
              to="/about/our-story"
              className="mt-7 inline-flex items-center gap-3 font-semibold underline-offset-4 hover:underline"
            >
              {t("Meet the people behind EPOCHA")}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <img
              src={collaboration}
              width={1920}
              height={1280}
              loading="lazy"
              alt={t("A small group collaborating over laptops")}
              className="mt-9 aspect-[16/9] w-full object-cover"
            />
          </div>
          <div className="self-center">
            <Globe2
              aria-hidden="true"
              className="mb-7 size-10 text-brand-accent"
              strokeWidth={1.25}
            />
            <h3 className="text-2xl font-semibold">
              {t("Local support. International perspective.")}
            </h3>
            <div className="mt-7 divide-y divide-border border-y border-border">
              {[
                {
                  name: "KoreaPEN",
                  description:
                    "South Korea’s central office for the PEN Worldwide network and EPOCHA’s local Practice Enterprise connection.",
                  logo: koreaPenLogo,
                  href: "https://www.koreapen.org/",
                },
                {
                  name: "PEN Worldwide",
                  description:
                    "An international Practice Enterprise network built around learning by doing, collaboration, and work-based experience.",
                  logo: penLogo,
                  href: "https://penworldwide.org/",
                },
              ].map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${partner.name} · ${t("Opens in a new tab")}`}
                  className="group grid grid-cols-[72px_1fr] items-center gap-5 py-6 sm:grid-cols-[96px_1fr]"
                >
                  <span className="flex h-20 items-center justify-center rounded-sm bg-white p-3">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      width={100}
                      height={80}
                      className="max-h-14 w-full object-contain"
                    />
                  </span>
                  <span>
                    <span className="flex items-center gap-2 font-semibold">
                      {partner.name}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {t(partner.description)}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <Link
              to="/about/partnerships"
              className="mt-7 inline-flex items-center gap-3 text-sm font-semibold underline-offset-4 hover:underline"
            >
              {t("Build a partnership with us")}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <section id="faq" className="section-padding scroll-mt-24">
        <div className="container-x grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t("A little clarity")}
            </p>
            <h2 className="editorial-heading mt-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              {t("Good questions. Clear answers.")}
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              {t(
                "Choosing your next step is a big decision. Start with the essentials, or talk it through with us.",
              )}
            </p>
            <Link
              to="/connect"
              className="mt-6 inline-flex items-center gap-3 font-semibold underline-offset-4 hover:underline"
            >
              {t("Ask us a question")}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="py-6 text-left text-base font-semibold hover:no-underline sm:text-lg">
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  <p>{t(faq.answer)}</p>
                  <Link
                    to={faq.to}
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-foreground underline underline-offset-4"
                  >
                    {t("Find out more")}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container-x flex flex-col justify-between gap-10 py-16 lg:flex-row lg:items-end lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
              {t("Your next chapter")}
            </p>
            <h2 className="editorial-heading mt-4 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
              {t("Bring your curiosity. Build your experience.")}
            </h2>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-5">
            <Link
              to="/practicums"
              className="inline-flex min-h-12 items-center gap-4 rounded-lg bg-ink px-6 py-4 font-semibold text-cream transition-opacity hover:opacity-85"
            >
              {t("Find your practicum")}
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
            <Link
              to="/about/partnerships"
              className="inline-flex min-h-11 items-center gap-3 font-semibold underline underline-offset-4"
            >
              {t("Let’s build something together")}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
