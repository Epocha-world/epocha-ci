import campImage from "@/assets/practicum-leadership-camp.jpg";
import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  GraduationCap,
  MapPin,
  Network,
  Sparkles,
  Users,
} from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Start-up Lab Camp — EPOCHA",
      description:
        "An immersive entrepreneurship sprint designed for young leaders. Lead projects, build, test, pitch and launch a viable startup concept.",
      path: "/practicums/startup-lab-camp",
    }),
  component: StartupLabCampPage,
});

const dark = "bg-ink text-cream";
const darkCard = "border-t border-cream/20 py-8 md:pr-7";
const lightCard =
  "border border-border bg-card p-7 transition-colors hover:border-brand-accent md:p-9";
const goldButton =
  "inline-flex items-center justify-center gap-3 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";
const darkButton =
  "inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 font-semibold text-lime transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

function StartupLabCampPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-background text-foreground">
        <div className="container-x grid gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <h1 className="text-5xl font-bold leading-[1.03] tracking-[-0.045em] sm:text-7xl xl:text-8xl">
              {t("Start-up")}
              <br />
              {t("Lab Camp")}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
              {t(
                "An immersive entrepreneurship sprint designed for young leaders. This structured journey guides trainees through leading projects, building, testing, pitching, and launching a viable startup concept.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Users, text: "Ages 14–18" },
                { icon: Award, text: "All experience levels welcome" },
                { icon: MapPin, text: "Multiple locations" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-foreground/80"
                >
                  <item.icon aria-hidden="true" className="size-4" />
                  {t(item.text)}
                </span>
              ))}
            </div>
            <Link to="/practicums/startup-lab-camp/how-it-works" className={`${goldButton} mt-10`}>
              {t("How it works")}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <figure className="relative border-b-[12px] border-lime">
            <img
              src={campImage}
              alt={t("Collaborative learning workshop")}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              width="880"
              height="667"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>
      <section className={dark}>
        <div className="container-x py-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
            {t("Youth leadership journey")}
          </h2>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Capstone projects",
                text: "A minimum of two completed capstone projects delivered in partnership with an industry partner.",
              },
              {
                title: "Practice Enterprise",
                text: "Formation and operation of a trainee-run Practice Enterprise (PE) simulating corporate structures.",
              },
              {
                title: "Startup Launch",
                text: "Trainees transition to launching and operating their micro-startup validating their concept in the live market.",
              },
            ].map((item, index) => (
              <li key={item.title} className={`${darkCard} relative`}>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-lime">0{index + 1}</span>
                  <span className="h-px flex-1 bg-lime/30" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-cream">{t(item.title)}</h3>
                <p className="mt-4 leading-relaxed">{t(item.text)}</p>
                {index < 2 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-4 top-1/2 hidden size-6 text-lime md:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-background text-foreground">
        <div className="container-x py-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {t("How trainees learn")}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className={`${lightCard} flex flex-col items-start`}>
              <h3 className="text-3xl font-bold">{t("Capstone learning")}</h3>
              <p className="mb-8 mt-6 text-lg leading-relaxed text-foreground/80">
                {t(
                  "A capstone (Stage 1) is a project in which trainees apply the knowledge and skills they've built to address a real-world problem, guided by our team. It closes the gap between theory and practice, giving trainees room to test ideas, carry out research, and develop solutions for real communities and industries.",
                )}
              </p>
              <Link
                to="/practicums/startup-lab-camp/open-capstones"
                className={`${darkButton} mt-auto`}
              >
                {t("Browse capstones")}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </article>
            <article className={`${lightCard} flex flex-col items-start`}>
              <h3 className="text-3xl font-bold">{t("Practice Enterprise")}</h3>
              <p className="mb-8 mt-6 text-lg leading-relaxed text-foreground/80">
                {t(
                  "A Practice Enterprise (Stage 2) is a company run entirely by trainees mirroring the structure and operations of a real business. It reflects an actual enterprise from product development, production and distribution to marketing, sales, human resources, finance and web design.",
                )}
              </p>
              <Link to="/practicums" className={`${darkButton} mt-auto`}>
                {t("Learn more about Practice Enterprise")}{" "}
                <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className={dark}>
        <div className="container-x py-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
            {t("What makes us different")}
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed">
            {t(
              "Trainees are supported throughout their journey by coaches and business mentors who guide them at every stage. This ongoing coaching builds the confidence trainees need to move from simulated practice to real-world exposure.",
            )}
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Capstone facilitation",
                text: "Group coaching: EPOCH awareness and AI foundation and ethics.",
              },
              {
                icon: Sparkles,
                title: "Interactive workshop",
                text: "Leadership training: intercultural dialogues and career-readiness workshops.",
              },
              {
                icon: Users,
                title: "Weekly check-in",
                text: "Group coaching support, 1-1 mentoring.",
              },
              {
                icon: Building2,
                title: "Corporate visit",
                text: "A guided site visit to an industry partner relevant to the capstone project.",
              },
              {
                icon: Briefcase,
                title: "Micro placement",
                text: "A short form structured placement experience lasting from a few hours up to 3 days.",
              },
              {
                icon: Network,
                title: "Networking opportunities",
                text: "Access to a global community of practice enterprises and young entrepreneurs through the PEN Worldwide network.",
              },
            ].map((item) => (
              <article key={item.title} className={darkCard}>
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-lime text-ink">
                  <item.icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-cream">{t(item.title)}</h3>
                <p className="mt-4 leading-relaxed">{t(item.text)}</p>
              </article>
            ))}
          </div>
          <Link
            to="/practicums/startup-lab-camp/practicum/coaching-program"
            className={`${goldButton} mt-10`}
          >
            {t("See the coaching program")}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
      <section className="bg-background text-foreground">
        <div className="container-x py-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {t("Flexible learning")}
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-foreground/80">
            {t(
              "Trainees choose from a remote-first experience with varying in-person touch points, a fully remote experience, or an in-person experience depending on the track selected. This flexibility is paired with different leadership tracks, allowing trainees to progress at their own pace, in their own location, toward their own goals.",
            )}
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Semester Track",
                text: "Fully remote experience, with the option to add on a corporate visit.",
              },
              {
                title: "International Track",
                text: "Remote-first with recurring in-person touchpoints, with the option to add on a micro placement.",
              },
              {
                title: "Summer Track",
                text: "A selective, four-week immersive experience included a corporate visit and micro placement.",
              },
            ].map((item) => (
              <article key={item.title} className={lightCard}>
                <h3 className="text-xl font-bold">{t(item.title)}</h3>
                <p className="mt-4 leading-relaxed text-foreground/80">{t(item.text)}</p>
              </article>
            ))}
          </div>
          <Link
            to="/practicums/startup-lab-camp/practicum/leadership-tracks"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 font-semibold hover:bg-secondary"
          >
            {t("Learn more")}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
      <section className={dark}>
        <div className="container-x py-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
            {t("Why join us?")}
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: "A portfolio piece",
                text: "Our trainees walk away with a certificate and tangible evidence of their work that strengthens college, university, scholarship, or internship applications.",
              },
              {
                icon: Briefcase,
                title: "Workplace experience",
                text: "Trainees are exposed to a range of career pathways, navigate real tasks and deadlines, and collaborate the way they would in an actual workplace.",
              },
              {
                icon: Network,
                title: "Career readiness",
                text: "Trainees receive coaching and mentorship from professionals in their field of interest and gain the confidence to make informed choices about what's next.",
              },
            ].map((item) => (
              <article key={item.title} className={darkCard}>
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-lime text-ink">
                  <item.icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-cream">{t(item.title)}</h3>
                <p className="mt-4 leading-relaxed">{t(item.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="startup-lab" className="scroll-mt-36 bg-background text-foreground">
        <div className="container-x py-20">
          <p className="max-w-3xl text-lg leading-relaxed">
            {t(
              "Start-up Lab Camp is open to young people aged 14–18. Registrations can be submitted by a parent or guardian on behalf of their teens, or by an educator looking to bring the practicum to a full student cohort at their school or institution.",
            )}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className={lightCard}>
              <p className="text-sm text-muted-foreground">{t("On behalf of a teen")}</p>
              <h2 className="mt-3 text-2xl font-bold">{t("Parents & guardians")}</h2>
              <p className="mt-5 leading-relaxed">
                {t(
                  "Apply on behalf of your teen. We'll walk you through what the practicum involves and what to expect.",
                )}
              </p>
              <Link
                to="/practicums/startup-lab-camp/open-capstones"
                className={goldButton + " mt-8"}
              >
                {t("Browse capstones")}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </article>
            <article className={lightCard}>
              <p className="text-sm text-muted-foreground">{t("Institutional application")}</p>
              <h2 className="mt-3 text-2xl font-bold">{t("Schools & institutions")}</h2>
              <p className="mt-5 leading-relaxed">
                {t(
                  "Bring Start-up Lab Camp to your students. Schools can register to run a dedicated cohort for their student group.",
                )}
              </p>
              <a href="mailto:hello@epocha.world" className={darkButton + " mt-8"}>
                {t("Fund a capstone")}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
