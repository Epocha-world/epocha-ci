import { useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import bannerBg from "@/assets/hero-banner.jpg";

const words = ["experience", "network", "edge"];

export function PracticumHero() {
  const { t } = useI18n();
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      clearInterval(timer);
      if (!preference.matches)
        timer = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2500);
    };
    sync();
    preference.addEventListener("change", sync);
    return () => {
      clearInterval(timer);
      preference.removeEventListener("change", sync);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src={bannerBg}
        alt=""
        fetchPriority="high"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="container-x relative py-28 md:py-40 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-5xl mx-auto">
          <span className="sr-only">
            {t("Build real experience, network and edge in an AI-driven world.")}
          </span>
          <span aria-hidden="true">
            {t("Build real")}{" "}
            <span key={wordIndex} className="text-lime inline-block motion-safe:animate-fade-in">
              {t(words[wordIndex])}
            </span>{" "}
            {t("in an AI-driven world.")}
          </span>
        </h1>
      </div>
    </section>
  );
}
