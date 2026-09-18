import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/i18n";
import coaching from "@/assets/practicum-advisory-board.jpg";
import community from "@/assets/practicum-hanaro.jpg";
import teamwork from "@/assets/hero-banner.jpg";

const steps = [
  {
    title: "Find your direction",
    description:
      "Start with your interests and ambitions. Explore the program that fits your age, goals, and availability, then review its application requirements.",
    image: teamwork,
    alt: "A group sharing perspectives in a meeting",
  },
  {
    title: "Connect and prepare",
    description:
      "Get to know your team and the challenge. Coaching and workshops help you build confidence, agree on roles, and develop a plan together.",
    image: coaching,
    alt: "A team discussing ideas over laptops",
  },
  {
    title: "Learn by doing",
    description:
      "Take responsibility for a real project. Make decisions, test ideas, collaborate with others, and use feedback to improve your work as you go.",
    image: community,
    alt: "A creative group presenting and discussing their ideas",
  },
  {
    title: "Show what you can do",
    description:
      "Present your work and reflect on your progress. Bring together the projects, skills, and experience that tell the story of what you can contribute.",
    image: coaching,
    alt: "Collaborators reviewing work together",
  },
] as const;

export function LearningJourney() {
  const { t } = useI18n();
  return (
    <section id="how-you-grow" className="py-20 scroll-mt-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t("How you grow")}
          </p>
          <h2 className="editorial-heading mt-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            {t("From a first step to something you can show.")}
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {t(
              "A practicum brings learning, coaching, and project work together. Here is what that journey can look like.",
            )}
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue="mobile-step-0"
          className="mt-9 border-t border-border lg:hidden"
        >
          {steps.map((step, index) => (
            <AccordionItem key={step.title} value={`mobile-step-${index}`}>
              <AccordionTrigger className="gap-4 py-5 text-left text-base hover:no-underline">
                <span aria-hidden="true" className="font-display text-sm text-muted-foreground">
                  0{index + 1}
                </span>
                <span className="flex-1">{t(step.title)}</span>
              </AccordionTrigger>
              <AccordionContent>
                <img
                  src={step.image}
                  width={1000}
                  height={600}
                  loading="lazy"
                  alt={t(step.alt)}
                  className="aspect-[16/9] w-full object-cover"
                />
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {t(step.description)}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Tabs
          defaultValue="step-0"
          orientation="vertical"
          className="mt-12 hidden gap-8 lg:grid lg:grid-cols-[.85fr_1.15fr] lg:gap-16"
        >
          <div>
            <TabsList
              aria-label={t("Explore the learning journey")}
              className="h-auto w-full flex-col items-stretch justify-start gap-0 rounded-none bg-transparent p-0"
            >
              {steps.map((step, index) => (
                <TabsTrigger
                  key={step.title}
                  value={`step-${index}`}
                  className="group min-h-20 justify-start gap-5 whitespace-normal rounded-none border-t border-border px-3 py-6 text-left text-foreground data-[state=active]:bg-muted data-[state=active]:shadow-none"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border font-display text-sm group-data-[state=active]:border-primary group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground"
                  >
                    0{index + 1}
                  </span>
                  <span className="flex-1 text-base font-semibold sm:text-lg">{t(step.title)}</span>
                  <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div>
            {steps.map((step, index) => (
              <TabsContent key={step.title} value={`step-${index}`} className="mt-0">
                <img
                  src={step.image}
                  width={1000}
                  height={600}
                  loading="lazy"
                  alt={t(step.alt)}
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="border-x border-b border-border bg-card p-6 sm:p-8">
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {t(step.description)}
                  </p>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
