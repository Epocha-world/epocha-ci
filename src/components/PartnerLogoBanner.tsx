import { Handshake } from "lucide-react";
import { useI18n } from "@/i18n";
import logoQualitax from "@/assets/logos/qualitax.svg";
import logoKoreaPen from "@/assets/logos/koreapen.png";
import logoPenWw from "@/assets/logos/pen-worldwide.png";
import logoCandon from "@/assets/logos/candon-youth.jpg";

export function PartnerLogoBanner({ includeCandon = false }: { includeCandon?: boolean }) {
  const { t } = useI18n();
  const logos = [
    { src: logoQualitax, alt: "QualitaX", href: "https://www.qualitax.io/" },
    { src: logoKoreaPen, alt: "Korea PEN", href: "https://koreapen.org/" },
    { src: logoPenWw, alt: "PEN Worldwide", href: "https://penworldwide.org/" },
    ...(includeCandon
      ? [{ src: logoCandon, alt: "Candon Youth for Empowerment Movement, Inc.", href: undefined }]
      : []),
  ];
  return (
    <section className="surface-light" data-partner-banner>
      <div className="container-x py-20">
        <div className="flex items-center gap-3">
          <Handshake className="size-5 text-black" aria-hidden="true" />
          <p className="text-xs uppercase tracking-[0.2em] text-black font-bold">
            {t("Who we work with")}
          </p>
        </div>
        <div className="mt-8 relative overflow-hidden rounded-3xl border border-border bg-muted/30 py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track gap-16 pr-16 motion-reduce:animate-none motion-reduce:w-full motion-reduce:justify-center motion-reduce:pr-0 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                aria-hidden={dup === 1}
                className={`flex items-center gap-16 shrink-0 ${dup ? "motion-reduce:hidden" : "motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8 motion-reduce:shrink motion-reduce:px-6"}`}
              >
                {logos.map((logo) =>
                  logo.href ? (
                    <a
                      key={logo.alt}
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={dup ? -1 : undefined}
                      className="shrink-0 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition"
                    >
                      <img
                        src={logo.src}
                        alt={dup ? "" : logo.alt}
                        className="h-14 w-auto max-w-52 object-contain"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img
                      key={logo.alt}
                      src={logo.src}
                      alt={dup ? "" : logo.alt}
                      className="h-14 w-auto object-contain grayscale opacity-80"
                      loading="lazy"
                    />
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
