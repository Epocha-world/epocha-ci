import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BellRing } from "lucide-react";
import student from "@/assets/student.jpg";

export const Route = createFileRoute("/practicums_/mirae-industry")({
  head: () => ({
    meta: [
      { title: "Mirae Industry Practicum — EPOCHA" },
      { name: "description", content: "Mirae Industry Practicum — details for the next cohort will be announced soon." },
      { property: "og:title", content: "Mirae Industry Practicum — EPOCHA" },
      { property: "og:description", content: "Details for the next Mirae Industry Practicum cohort will be announced soon." },
      { property: "og:image", content: student },
    ],
  }),
  component: MiraeIndustryPage,
});

function MiraeIndustryPage() {
  return (
    <section className="bg-background text-foreground">
      <div className="container-x py-32 md:py-40">
        <p className="text-xs uppercase tracking-[0.22em] font-bold text-[#B07A1A]">
          Mirae Industry Practicum
        </p>
        <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1]">Mirae</h1>

        <div className="mt-10 max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-10 flex gap-5 items-start">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#FBE8C6] shrink-0">
            <BellRing className="w-6 h-6 text-[#B07A1A]" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Notice</h2>
            <p className="mt-3 text-base md:text-lg text-foreground/80 leading-relaxed">
              Details for the next Mirae Industry Practicum cohort will be announced soon.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/practicums" className="btn-primary inline-flex">
            Back to all practicums <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}