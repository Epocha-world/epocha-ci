import { useState } from "react";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  label: string;
  title: string;
  summary: string;
  effectiveDate: string;
  notice?: string;
  sections: LegalSection[];
};

type LegalDocumentPageProps = {
  ko: LegalDocument;
  en: LegalDocument;
};

export function LegalDocumentPage({ ko, en }: LegalDocumentPageProps) {
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const document = language === "ko" ? ko : en;

  return (
    <div className="bg-background">
      <header className="border-b border-border bg-ink text-white">
        <div className="container-x py-16 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">
                {document.label}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                {document.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                {document.summary}
              </p>
            </div>
            <div
              className="inline-flex w-fit rounded-full border border-white/20 bg-white/5 p-1"
              role="group"
              aria-label="문서 언어 선택 / Select document language"
            >
              <button
                type="button"
                onClick={() => setLanguage("ko")}
                aria-pressed={language === "ko"}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  language === "ko" ? "bg-lime text-ink" : "text-white hover:bg-white/10"
                }`}
              >
                한국어
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  language === "en" ? "bg-lime text-ink" : "text-white hover:bg-white/10"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </header>

      <article lang={language} className="container-x py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-2 border-b border-border pb-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>{language === "ko" ? "시행일" : "Effective date"}</span>
            <time dateTime="2026-07-13" className="font-medium text-foreground">
              {document.effectiveDate}
            </time>
          </div>

          {document.notice ? (
            <div className="mt-8 rounded-2xl border border-lime/30 bg-lime/10 p-5 text-sm leading-relaxed text-foreground">
              {document.notice}
            </div>
          ) : null}

          <div className="mt-10 space-y-12">
            {document.sections.map((section, index) => (
              <section key={section.title} aria-labelledby={`legal-section-${index}`}>
                <h2
                  id={`legal-section-${index}`}
                  className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
                >
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 whitespace-pre-line text-base leading-8 text-foreground/80"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-3 pl-5 text-base leading-7 text-foreground/80">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="list-disc pl-1 marker:text-lime">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <p className="mt-16 border-t border-border pt-8 text-sm leading-7 text-muted-foreground">
            {language === "ko"
              ? "영문 번역본은 이용자의 편의를 위해 제공됩니다. 한국어본과 영문본이 다른 경우, 관련 법령이 허용하는 범위에서 한국어본이 우선합니다."
              : "This English translation is provided for convenience. If the Korean and English versions differ, the Korean version prevails to the extent permitted by applicable law."}
          </p>
        </div>
      </article>
    </div>
  );
}
