import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, ExternalLink, Handshake, Linkedin, Quote } from "lucide-react";
import maevaPortrait from "@/assets/maeva-caricature.png";
import juwonPortrait from "@/assets/juwon-caricature.png";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/about_/our-story")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Our Story — EPOCHA Learning Hub",
      description: "Meet the founders behind EPOCHA and the story of how we got started.",
      path: "/about/our-story",
    }),
  component: OurStoryPage,
});

function OurStoryPage() {
  const { t } = useI18n();
  return (
    <>
      {/* SECOND QUOTE — dark, with decorative quotation marks */}
      <section className="bg-ink">
        <div className="container-x py-20 md:py-28">
          <div className="surface-light relative rounded-3xl bg-background border border-border p-10 md:p-16 overflow-hidden">
            <span
              aria-hidden
              className="absolute top-8 left-8 md:top-10 md:left-12 text-black font-serif font-bold leading-none select-none text-[120px] md:text-[180px]"
            >
              &ldquo;
            </span>
            <span
              aria-hidden
              className="absolute bottom-8 right-8 md:bottom-10 md:right-12 text-black font-serif font-bold leading-none select-none text-[60px] md:text-[90px]"
            >
              &rdquo;
            </span>
            <blockquote className="relative max-w-3xl mx-auto text-center pt-24 md:pt-28 pb-16 md:pb-20">
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-[1.5] italic">
                {t("\"We didn't build Epocha to fix a system.")}{" "}
                <span className="text-coral not-italic">
                  {t("We built it for people because lost potential is humanity's greatest waste.")}
                </span>{" "}
                {t(
                  'Not resources. Not time. People. People deserve better and better is still possible."',
                )}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="surface-light container-x py-24 ">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-black font-bold">
            {t("Our story")}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-black">
            {t("Built on the power of")} <span className="text-black">{t("connection")}</span>.
          </h1>
          <p className="mt-4 text-foreground/70">
            {t(
              "EPOCHA started on a shared conviction: that real growth happens when people are genuinely connected — to themselves, to each other, and to the work that matters. Every practicum, coaching session, and partnership we build is designed to turn that belief into lived experience.",
            )}
          </p>
        </div>

        {/* CO-FOUNDERS */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Maeva Ofranc",
              role: "Co-Founder & CEO",
              img: maevaPortrait,
              bio: "Generalist and systems thinker, Maeva designs and builds high-impact coaching and mentoring programs. She believes every young person deserves a runway, not a ladder. Rooted in Caribbean French heritage and shaped by many cultures, she brings a depth of perspective that makes her work truly borderless.",
              linkedin: "https://www.linkedin.com/in/maeva-ofranc-49b96b24/",
            },
            {
              name: "Juwon Bak",
              role: "Co-Founder & CTO",
              img: juwonPortrait,
              bio: "Full-stack engineer and systems thinker. Juwon builds the infrastructure that powers EPOCHA's platforms — from AI-driven tools to production systems that just work. He believes good technology is invisible when it works, and that's the whole point.",
              linkedin: "https://www.linkedin.com/in/thekeg",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="rounded-3xl border border-border bg-muted/30 p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              <img
                src={p.img}
                alt={`${p.name} ${t("caricature portrait")}`}
                loading="lazy"
                width={96}
                height={96}
                className="w-24 h-24 rounded-2xl object-cover bg-gradient-to-br from-lime/40 to-coral/40 shrink-0"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} ${t("LinkedIn profile")}`}
                  >
                    <Linkedin
                      style={{ color: "#000" }}
                      className="w-5 h-5 text-black text-black transition"
                    />
                  </a>
                </div>
                <p className="text-sm text-black font-semibold mt-1">{t(p.role)}</p>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{t(p.bio)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* OTHER PROJECTS */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Briefcase style={{ color: "#000" }} className="w-5 h-5 text-black" />
            <p className="text-xs uppercase tracking-[0.2em] text-black font-bold">
              {t("Other ventures")}
            </p>
          </div>
          <h3 className="mt-3 text-3xl font-bold">{t("What else we're working on.")}</h3>
          <div className="mt-8">
            <div className="rounded-2xl bg-ink text-cream p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-lime font-bold">
                {t("Coaching by")}
              </p>
              <h4 className="mt-1 text-xl font-bold">{t("Maeva Ofranc")}</h4>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "KIAC Coaching and Mentoring",
                  desc: "Maeva coaches and mentors young leaders across international programs, blending experiential learning, intercultural dialogue, one-to-one and group guidance.",
                  href: "https://kiac.info/",
                  cta: "Learn more",
                  featured: true,
                },
                {
                  name: "Virtual Entrepreneurship Program (VEP) with KoreaPEN",
                  desc: "A Practice Enterprise-based after-school program building career readiness and college competitiveness through global peer collaboration and experiential learning.",
                  href: "https://vep-info-english-vks96vv.gamma.site/",
                  cta: "Learn more",
                },
                {
                  name: "Youth for Peace: UNESCO Intercultural Leadership Programme",
                  desc: "A UNESCO programme developing intercultural leadership in young people through dialogue, collaboration, and peace-building.",
                  href: "https://www.unesco.org/en/interculturaldialogue/youthforpeace?hub=181405",
                  cta: "Learn more",
                },
                {
                  name: "Suwon ECHO Startup Program",
                  desc: "A teen start-up program powered by Planet E.C.H.O and supported by Gyeonggido Office of Education, Gyeonggido Suwon Office of Education, KoreaPEN, and PEN Worldwide.",
                  href: "https://www.suwonnews.co.kr/news/articleView.html?idxno=33880",
                  cta: "Learn more",
                },
              ].map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col rounded-2xl border p-6 transition ${
                    project.featured
                      ? "surface-light text-ink border-lime bg-cream shadow-sm hover:border-foreground"
                      : "border-border hover:border-lime"
                  }`}
                >
                  <h4 className="font-bold">{t(project.name)}</h4>
                  <p className="mt-2 text-sm text-foreground/70">{t(project.desc)}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-medium text-black">
                    {t(project.cta)}
                    <ExternalLink
                      style={{ color: "#000" }}
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Quote style={{ color: "#000" }} className="w-5 h-5 text-black" />
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-bold">
              {t("Coaching testimonials")}
            </p>
          </div>
          <h3 className="mt-3 text-3xl font-bold">{t("What people say about working with us.")}</h3>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "Due to the programme I am in, I am interacting with an even more diverse group of the population, hence learning about perspectives taking and managing tensions are definitely the most valuable insights I have learned from our coaching sessions. I find that I am better able to take a step back and see things from a wider perspective, this helps in negotiation and navigating for an outcome that benefits the parties involved. ",
                author:
                  "Sharon, Singapore, Youth for Peace: UNESCO Intercultural Leadership Programme, Cohort of 2026",
                cta: "See what Sharon is up to",
                href: "https://www.youthcirclessg.org/",
              },
              {
                quote:
                  "Throughout our collaboration, Maeva has demonstrated exceptional skill and dedication to her cohort. She facilitates peer exchange sessions and monthly one-on-one coaching meetings with care and rigour, consistently creating spaces where Young Leaders feel both supported and challenged. Her reports to MLI reflect a nuanced understanding of each leader’s growth trajectory, and she has shown real creativity in adapting her approach to the diverse cultural contexts of her cohort. Among the coaches we work with through this programme, Maeva stands out for her ability to empathetically lead her cohort members to implement successful projects.",
                author: "Program Director, The Marshall Legacy Institute ",
              },
              {
                quote:
                  "Connection matters more than I thought. Not just in theory, but in how you actually show up. I felt that a lot through our Youth for Peace work. Maeva made it easy to open up and think things through. She answers everything. Honest, direct, but still respectful. That really helped me see things more clearly. I became more intentional with how I engage. Before, I was focused on getting things done. Now, I pay more attention to how I build relationships, especially with the youth we work with.",
                author:
                  "Joanne, Philippines, Youth for Peace: UNESCO Intercultural Programme, Cohort of 2026",
                cta: "See what Joanne is up to",
                href: "https://www.facebook.com/CandonYouthMovement/",
              },
              {
                quote:
                  "Maeva consistently demonstrated outstanding organisational skills, responsiveness, intercultural sensitivity, and a genuine commitment to empowering young people.\nShe developed an exceptionally clear and well-organised tracking system for her one-to-one mentoring sessions to the extent that her template became the model we used across the programme for other coaches and mentors.\nShe consistently went above and beyond in supporting participants, ensuring that young leaders felt heard, encouraged, and guided. Her warmth and professionalism helped create an environment of trust and motivation.\nMaeva combines creativity with rigour, strategic thinking with empathy, and excellent project management skills with a deeply collaborative spirit.",
                author: "Project Appointee, UNESCO",
              },
              {
                quote:
                  "Working with Maeva has been an absolutely incredible journey.  As our project mentor, Coach Maeva was instrumental in helping us navigate key challenges. She ran dedicated sessions and simulations on intercultural communication specifically tailored for migrant-dense communities. Through her honest and sometimes tough feedback, I came to a profound realization: we all have a passion to change the world in our own unique ways, but that dream can only become reality when we take healthy steps; steps that are intentional, disciplined, and guided. Having someone like her hold my hands through that journey meant everything. Maeva didn't just teach me this theory; she walked my team and I through simulations, real scenarios, and honest reflections that prepared me for the ground reality. Her guidance transformed our challenges into actionable solutions. I am deeply grateful for her support.",
                author:
                  "Dennis, Liberia, Youth for Peace: UNESCO Intercultural Leadership Programme, Cohort of 2026",
              },
              {
                quote:
                  "During our sessions, I received very important advice and insights for my project.  Maeva always explained things clearly, helped me navigate challenges. The most significant outcome is that my project was successfully implemented.",
                author:
                  "Nazgul, Kyrgyzstan, Youth for Peace: UNESCO Intercultural Programme, Cohort of 2026",
                cta: "See what Nazgul is up to",
                href: "https://www.instagram.com/nazgul_dolotkeldieva?igsh=MWp5bnFtY3ZlNHZrNA==",
              },
            ]
              .filter((testimonial) => testimonial.quote)
              .map((testimonial, i) => (
                <figure key={i} className="rounded-3xl bg-muted/30 border border-border p-8">
                  <blockquote className="text-foreground/80 leading-relaxed italic whitespace-pre-line">
                    "{t(testimonial.quote)}"
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-foreground/60">
                    — {t(testimonial.author)}
                  </figcaption>
                  {testimonial.cta && testimonial.href && (
                    <a
                      href={testimonial.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                    >
                      {t(testimonial.cta)}
                      <ExternalLink style={{ color: "#000" }} className="w-4 h-4" />
                    </a>
                  )}
                </figure>
              ))}
          </div>
        </div>
      </section>

      <section className="surface-light container-x py-20">
        <div className="flex items-center gap-3">
          <Handshake aria-hidden="true" className="size-5 text-black" />
          <p className="text-xs uppercase tracking-[0.2em] text-black font-bold">
            {t("Who we work with")}
          </p>
        </div>
      </section>

      {/* CTA — Ready to lead what's next */}
      <section className="container-x pb-24">
        <div className="rounded-[2.5rem] bg-ink text-cream p-12 md:p-20 relative overflow-hidden">
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold">{t("Ready to lead what's next?")}</h2>
            <p className="mt-5 text-cream/80 text-lg">
              {t(
                "Join thousands of young leaders building real experience, real networks, and a real edge in an AI-driven world.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/"
                hash="choose-your-practicum"
                className="inline-flex items-center gap-2 bg-lime text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-lime/90 transition"
              >
                {t("Find your practicum")}{" "}
                <ArrowRight style={{ color: "#000" }} className="w-4 h-4" />
              </Link>
              <Link
                to="/about/sparked"
                className="inline-flex items-center gap-2 border border-cream text-cream font-medium px-6 py-3.5 rounded-full hover:bg-cream hover:text-ink transition"
              >
                {t("For organizations")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
