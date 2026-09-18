import { useI18n } from "@/i18n";
export function PracticumGains() {
  const { t } = useI18n();
  return (
    <>
      {" "}
      {/* What you gain */}
      <section className="bg-ink text-cream">
        <div className="container-x py-28 md:py-36">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-lime font-bold">
              {t("What you gain")}
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
              {t("Walk away with")} <span className="text-lime">{t("work experience.")}</span>
            </h2>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "A skills-based portfolio",
                desc: "A portfolio of evidence that curates your best work, demonstrates what you can do, and your career readiness.",
              },
              {
                title: "Recognised credential",
                desc: "A PEN Worldwide credential that signals to employers you've trained in a real-world environment.",
              },
              {
                title: "Workplace training",
                desc: "The human competencies, leadership skills, and AI fluency that modern hiring managers actively screen for.",
              },
              {
                title: "A global network",
                desc: "Connections with peers, mentors, and industry partners that last well beyond your time with us.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-cream/10 bg-white/5 p-8">
                <h3 className="text-xl font-bold text-cream">{t(item.title)}</h3>
                <p className="mt-3 text-sm text-cream/70 leading-relaxed">{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
