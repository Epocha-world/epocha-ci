import { useI18n } from "@/i18n";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/practicums_/startup-lab-camp/how-it-works/faq")({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: "FAQ — Start-up Lab Camp — EPOCHA",
      description: "Answers to common questions about EPOCHA Start-up Lab Camp.",
      path: "/practicums/startup-lab-camp/how-it-works/faq",
    }),
  component: CampFaqPage,
});

function CampFaqPage() {
  const { t } = useI18n();
  return (
    <>
      {/* Section 11 — FAQ */}
      <section className="bg-background text-foreground border-t border-border">
        <div className="container-x py-20">
          <p
            className="text-xs uppercase tracking-[0.2em] font-bold"
            style={{ color: "var(--muted-foreground)" }}
          >
            {t("FAQ")}
          </p>
          <h1 className="mt-3 text-5xl md:text-7xl font-bold">{t("Common questions")}</h1>
          <div className="mt-10 divide-y divide-border border-t border-b border-border">
            {[
              {
                q: "Who is the Start-up Lab Camp for?",
                a: "The camp is open to young people aged 14 to 18. No prior business experience is needed; just curiosity, a willingness to collaborate, and an interest in building something real. All sessions are conducted in English.",
              },
              {
                q: 'What does "practicum" mean — how is this different from a class?',
                a: "EPOCHA practicums are structured learning experiences where trainees apply their knowledge to real projects under the coaching, mentoring, and guidance of EPOCHA professionals and mentor companies.",
              },
              {
                q: "What is the 2027 theme, and will it change each year?",
                a: (
                  <>
                    <p>
                      {t("We change the theme annually for both the Summer and Semester track.")}
                    </p>
                    <p className="mt-3">
                      <span className="font-semibold text-foreground">{t("Summer track:")}</span>{" "}
                      {t(
                        "The theme is Social Entrepreneurship. Trainees will build businesses designed to create social or community value. The annual theme shifts each year to reflect current global conversations, giving returning trainees a fresh challenge.",
                      )}
                    </p>
                    <p className="mt-3">
                      <span className="font-semibold text-foreground">{t("Semester track:")}</span>{" "}
                      {t(
                        "The theme AI-Human Collaboration challenges them to design and deliver projects putting hybrid intelligence at the centre.",
                      )}
                    </p>
                  </>
                ),
              },
              {
                q: "How many trainees are in each cohort?",
                a: "We keep cohorts small with a maximum of 10 trainees. This means every participant gets meaningful mentor time, a real team role, and genuine responsibility within their business.",
              },
              {
                q: "What are the EPOCH capabilities, and why do they matter?",
                a: "EPOCH stands for Empathy, Presence, Opinion, Creativity, and Hope — five human capabilities identified by MIT Sloan researchers as most resilient to AI substitution. As automation reshapes work, these are the skills that will distinguish people in any career. Our coaching program is built around developing them deliberately.",
              },
              {
                q: "Is the programme suitable for students without business or tech experience?",
                a: "Yes, completely. We design the practicum to be accessible to motivated students at any starting point. Trainees come with different strengths — creative, analytical, social, technical — and teams are built to reflect that diversity. We meet participants where they are.",
              },
              {
                q: "What language is the programme delivered in?",
                a: "All sessions are conducted in English. This makes the practicum particularly well-suited to students at international schools and those looking to develop professional English in a working context.",
              },
              {
                q: "How do I enrol — and what's the difference between parent and school registration?",
                a: "Parents or guardians can register their teen using the parent registration form. Schools and institutions can use the school registration form to register a dedicated cohort; the EPOCHA team will then contact them to confirm format and scheduling.",
              },
              {
                q: "How does the school registration work?",
                a: "Schools can register to run a dedicated cohort for their students. Once the registration is submitted, the EPOCHA team will reach out to discuss format, scheduling, and how the practicum fits into your institution's calendar.",
              },
              {
                q: "Will trainees receive a certificate?",
                a: "Summer Track trainees who complete the four-week programme receive a certificate of completion from EPOCHA / PEN Worldwide. Completion work also contributes to a professional portfolio trainees can use in future applications and interviews for Higher/Further Education.",
              },
              {
                q: "Where is each track held?",
                a: "The Summer Track venue is in central Seoul, in areas such as Yongsan, Mapo, or Itaewon, with easy subway access from across the city. The Semester Track is delivered online. The International Track uses a hybrid format.",
              },
              {
                q: "What does a typical week look like?",
                a: "Each week combines workshops, team work sessions, and structured tasks tied to each participant's role. Expect a mix of learning, doing, and reflecting.",
              },
            ].map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold pr-6">{t(f.q)}</span>
                  <Plus
                    aria-hidden="true"
                    className="w-5 h-5 text-foreground/60 shrink-0 transition-transform group-open:rotate-45"
                  />
                </summary>
                <div className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  {typeof f.a === "string" ? t(f.a) : f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
