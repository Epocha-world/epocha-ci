import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import student from "@/assets/student.jpg";
import leadership from "@/assets/leadership.jpg";

export const Route = createFileRoute("/practicums")({
  head: () => ({
    meta: [
      { title: "Practicums — EPOCHA" },
      { name: "description", content: "Project-based practicums boosting your employability — real experience, recognized credentials, coaching, and competencies employers want." },
      { property: "og:title", content: "EPOCHA Practicums" },
      { property: "og:description", content: "Turn academic effort into career momentum." },
      { property: "og:image", content: student },
    ],
  }),
  component: PracticumsPage,
});

const compare = [
  ["Company-driven agenda", "Youth-centered design"],
  ["Tasks vary by employer mood and need", "Project-based with clear deliverables"],
  ["Little to no coaching", "Coaching and mentoring throughout"],
  ["Just a reference letter", "Recognized & certified credentials"],
  ["Outcomes depend on where you land", "Measurable competency development"],
];

function PracticumsPage() {
  return (
    <>
      <section className="container-x pt-20 pb-16 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">Your practicums</p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1]">
            Boosting your <span className="text-lime">employability.</span>
          </h1>
          <p className="mt-6 text-xl text-foreground/80 max-w-xl">
            EPOCHA transforms how you leverage experiential learning — turning academic effort
            into career momentum, with the real-world experience, connections, and confidence
            to thrive from day one.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden border border-border aspect-[4/5]">
            <img src={student} alt="EPOCHA student" width={1200} height={1400} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <h2 className="text-4xl md:text-5xl font-bold">Three practicum tracks.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { age: "14–18", title: "International Youth Leadership Camp", desc: "An immersive launchpad for emerging leaders to build confidence, voice, and cross-cultural fluency." },
            { age: "19–29", title: "EPOCHA Practicums & Youth Advisory Board", desc: "Lead real projects, simulate business operations, and shape the EPOCHA experience for future cohorts." },
            { age: "19–24", title: "Hanaro Emerging Leadership Practicum", desc: "A signature program for early-career professionals to develop strategic leadership through industry projects." },
          ].map((p, i) => (
            <article key={p.title} className="rounded-3xl border border-border bg-card overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={i === 0 ? leadership : i === 1 ? student : leadership} alt="" width={1400} height={1000} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <span className="inline-block self-start text-xs px-3 py-1 rounded-full bg-lime text-ink">{p.age} years old</span>
                <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-foreground/70 text-sm leading-relaxed flex-1">{p.desc}</p>
                <p className="mt-5 text-sm text-coral">2026 Intake →</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="container-x py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-coral">Internship vs EPOCHA Practicum</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Not all experience is <span className="text-lime">created equal.</span></h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-border p-8 bg-background">
              <h3 className="text-xl font-bold text-muted-foreground">Traditional Internship</h3>
              <ul className="mt-6 space-y-4">
                {compare.map((c) => (
                  <li key={c[0]} className="flex gap-3 text-foreground/70">
                    <X className="w-5 h-5 text-coral shrink-0 mt-0.5" /> {c[0]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-lime p-8 bg-background">
              <h3 className="text-xl font-bold text-lime">Our Practicums</h3>
              <ul className="mt-6 space-y-4">
                {compare.map((c) => (
                  <li key={c[1]} className="flex gap-3 text-foreground">
                    <Check className="w-5 h-5 text-lime shrink-0 mt-0.5" /> {c[1]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">Ready to turn knowledge into a <span className="text-lime">verified portfolio?</span></h2>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link to="/connect" className="btn-primary">Apply for 2026 <ArrowRight className="w-4 h-4" /></Link>
          <Link to="/about" className="btn-outline">Learn more about EPOCHA</Link>
        </div>
      </section>
    </>
  );
}