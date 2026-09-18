import { ArrowRight, Zap } from "lucide-react";
import { useI18n } from "@/i18n";
import hero from "@/assets/practicum-leadership-camp.jpg";

const audiences = [
  {
    tag: "YOUTHS · STUDENTS",
    description:
      "Work on real projects, build your network, jumpstart your career while earning recognized credentials.",
    label: "Learn by doing",
    href: "#learn-by-doing",
  },
  {
    tag: "BUSINESSES · EDUCATIONAL INSTITUTIONS · NON-PROFITS",
    description:
      "Bring fresh ideas into your organisation. Engage passionate young talent ready to contribute, lead, and grow.",
    label: "Partner with us",
    href: "#partner-with-us",
  },
  {
    tag: "VOLUNTEERS · MENTORS · COACHES",
    description:
      "Whether you have an hour for a talk or a longer season to mentor or coach, you can help trainees see the range of paths open to them.",
    label: "Volunteer with us",
    href: "/about/sparked#volunteer",
  },
];

export function HomeHero() {
  const { t } = useI18n();
  return (
    <section className="bg-ink text-cream">
      <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight">
            <Zap className="inline size-10 text-lime" aria-hidden="true" />{" "}
            {t("The fastest way we know to turn potential into evidence of work.")}
          </h1>
          <img
            src={hero}
            alt={t("Young people building experience together")}
            width={1400}
            height={900}
            fetchPriority="high"
            className="mt-10 w-full rounded-xl aspect-[16/10] object-cover"
          />
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-lime">
            {t("Not just educated. Career ready.")}
          </p>
          <h2 className="mt-3 text-2xl font-bold">{t("What is a Practicum")}</h2>
          <p className="mt-4 text-cream/80 leading-relaxed">
            {t(
              "Our practicums are structured learning experiences where trainees apply their knowledge to real projects under the coaching, mentoring, and guidance of professionals and mentor companies.",
            )}
          </p>
          <a
            href="/practicums"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-lime font-semibold hover:underline"
          >
            {t("Explore practicums")} <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div>
          <p className="text-lg text-cream/80 leading-relaxed">
            {t(
              "Whether you're a young person ready to lead, an institution investing in talent, or an organisation driving social impact, EPOCHA is built for you.",
            )}
          </p>
          <div className="mt-8 divide-y divide-cream/15 border-t border-cream/15">
            {audiences.map((audience) => (
              <div key={audience.tag} className="py-8">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-lime">
                  {t(audience.tag)}
                </p>
                <p className="mt-4 text-lg text-cream/80 leading-relaxed">
                  {t(audience.description)}
                </p>
                <a
                  href={audience.href}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-lime hover:underline"
                >
                  {t(audience.label)} <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
