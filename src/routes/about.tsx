import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    createSeoHead({
      title: "About — EPOCHA Learning Hub",
      description:
        "EPOCHA is part of PEN Worldwide, the international network setting the benchmark for experiential, enterprise-based learning across 40+ countries.",
      path: "/about",
      ogTitle: "About EPOCHA Learning Hub",
      socialDescription:
        "We help youth move from challenges of entering the job market to thriving professionally with verified skills and real experience.",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* CREATIVE BANNER — Quote: the people behind the mission */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-lime/30 blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-coral/25 blur-[100px]" />
        </div>
        <div className="container-x relative py-20 md:py-28 flex flex-col items-center text-center">
          <div className="w-16 h-[2px] bg-coral mb-8" />
          <blockquote className="max-w-4xl">
            <p className="text-3xl md:text-5xl font-bold text-cream leading-[1.15]">
              We didn't build Epocha to fix a system.{" "}
              <span className="text-lime">
                We built it for people because lost potential is humanity's greatest waste.
              </span>{" "}
              Not resources. Not time. People. People deserve better and better is still possible.
            </p>
          </blockquote>
          <p className="mt-8 text-cream/50 text-sm uppercase tracking-[0.2em]">
            The people behind the mission
          </p>
        </div>
      </section>

      {/* OUR STORY — link to sub-page */}
      <section className="container-x py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-bold">Our story</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Built on the power of <span className="text-lime">connection</span>.
          </h2>
          <p className="mt-4 text-foreground/70">
            Maeva and Jess founded EPOCHA on a shared conviction: that real growth happens when
            people are genuinely connected — to themselves, to each other, and to the work that
            matters. Every practicum, coaching session, and partnership we build is designed to turn
            that belief into lived experience.
          </p>
          <Link
            to="/about/our-story"
            className="mt-8 inline-flex items-center gap-2 bg-lime text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-lime/90 transition"
          >
            Read our full story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="rounded-[2.5rem] bg-ink text-cream p-12 md:p-20 relative overflow-hidden">
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold">Ready to lead what's next?</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/practicums"
                className="inline-flex items-center gap-2 bg-lime text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-lime/90 transition"
              >
                Find your practicum <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about/partnerships"
                className="inline-flex items-center gap-2 border border-cream text-cream font-medium px-6 py-3.5 rounded-full hover:bg-cream hover:text-ink transition"
              >
                For organizations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
