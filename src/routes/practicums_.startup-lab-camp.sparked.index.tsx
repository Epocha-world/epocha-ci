import { useI18n } from "@/i18n";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  HandHeart,
  Handshake,
  Mic,
  Network,
  Newspaper,
} from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/sparked/")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "Sparked! — Start-up Lab Camp — EPOCHA",
      description:
        "Sparked connects EPOCHA Start-up Lab Camp trainees with career talks, corporate visits and micro placements.",
      path: "/practicums/startup-lab-camp/sparked",
    }),
  component: SparkedOverview,
});

const activities = [
  {
    title: "Sparked career talks",
    icon: Mic,
    description:
      "Live conversations with professionals across industries. Trainees hear how careers really unfold, ask their own questions, and see the range of paths open to them.",
  },
  {
    title: "Corporate visits",
    icon: Building2,
    description:
      "Guided visits to partner companies where trainees see teams, tools and workflows in action, and connect what they are building to how real organisations operate.",
  },
  {
    title: "Micro placements",
    icon: BriefcaseBusiness,
    description:
      "Short, structured placements with a mentor company. Trainees take on a small real brief, deliver it, and receive professional feedback on their work.",
  },
  {
    title: "Industry network",
    icon: Network,
    description:
      "Ongoing access to the EPOCHA community of mentors, alumni and partner enterprises.",
  },
];

const involvement = [
  {
    title: "Become a sponsor",
    icon: Handshake,
    description:
      "Partner with us as a company: open a capstone project, host a trainee on a micro placement, or arrange a corporate visit.",
    action: "Sponsor Sparked",
    to: "/practicums/startup-lab-camp/sparked/become-a-sponsor",
  },
  {
    title: "Volunteer with us",
    icon: HandHeart,
    description:
      "Give a career talk or become a mentor and share your professional journey with the next generation.",
    action: "Volunteer",
    to: "/practicums/startup-lab-camp/sparked/volunteer-with-us",
  },
  {
    title: "News",
    icon: Newspaper,
    description:
      "Stories and updates from Sparked — talks, visits, placements and the partners making them happen.",
    action: "Read the news",
    to: "/practicums/startup-lab-camp/sparked/news",
  },
] as const;

function SparkedOverview() {
  const { t } = useI18n();
  return (
    <>
      <section className="surface-inverse text-cream">
        <div className="container-x py-16 md:py-20">
          <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">
            {t("Where learning meets industry.")}
          </h1>
          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-cream md:text-xl">
            {t(
              "Sparked is the industry-facing side of EPOCHA Start-up Lab Camp. Trainees take part in career talks, corporate visits and micro placements that connect their learning to workplaces and professionals.",
            )}
          </p>
        </div>
      </section>
      <section className="bg-background text-foreground">
        <div className="container-x py-16 md:py-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {t("What trainees take part in")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className="rounded-[2rem] border border-border bg-card p-7 md:p-8"
              >
                <div className="inline-flex rounded-2xl bg-lime p-3 text-ink">
                  <activity.icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{t(activity.title)}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {t(activity.description)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="surface-inverse text-cream">
        <div className="container-x py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
            {t("Get involved")}
          </p>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            {t("Companies and professionals power Sparked.")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {involvement.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-[2rem] border border-cream/20 bg-white/5 p-7 md:p-8"
              >
                <div className="inline-flex self-start rounded-2xl bg-lime p-3 text-ink">
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{t(item.title)}</h3>
                <p className="mt-4 text-lg leading-relaxed text-cream">{t(item.description)}</p>
                <div className="mt-auto pt-8">
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    {t(item.action)} <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
