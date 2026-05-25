import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect — EPOCHA" },
      { name: "description", content: "Get in touch with EPOCHA Learning Hub. Reach out at hello@epocha.world or visit us in Seoul, South Korea." },
      { property: "og:title", content: "Connect with EPOCHA" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: ConnectPage,
});

function ConnectPage() {
  return (
    <section className="container-x pt-20 pb-24">
      <p className="text-xs uppercase tracking-[0.2em] text-coral">Connect</p>
      <h1 className="mt-4 text-5xl md:text-7xl font-bold max-w-3xl leading-[1]">
        Let's <span className="text-lime">talk.</span>
      </h1>
      <p className="mt-6 text-xl text-foreground/80 max-w-xl">
        Whether you're a student, an institution, or a future partner — we'd love to hear from you.
      </p>

      <div className="mt-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex gap-4">
            <Mail className="w-6 h-6 text-lime shrink-0 mt-1" />
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Email</p>
              <a href="mailto:hello@epocha.world" className="mt-1 block text-lg hover:text-lime">hello@epocha.world</a>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="w-6 h-6 text-lime shrink-0 mt-1" />
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Office</p>
              <p className="mt-1 text-lg leading-relaxed">R214, 2nd Floor<br />10 Yeonmujang 11-gil, Seongdong-gu<br />Seoul, South Korea</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="w-6 h-6 text-lime shrink-0 mt-1" />
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Office hours</p>
              <p className="mt-1 text-lg leading-relaxed">Mon–Fri · 9:00 – 18:00<br />Sat · 9:00 – 12:00 (by appointment)</p>
            </div>
          </div>
        </div>

        <form
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 space-y-5"
          onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:hello@epocha.world"; }}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-sm text-muted-foreground">Name</span>
              <input required className="mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 focus:border-lime outline-none" />
            </label>
            <label className="block">
              <span className="text-sm text-muted-foreground">Email</span>
              <input type="email" required className="mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 focus:border-lime outline-none" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm text-muted-foreground">I'm interested in</span>
            <select className="mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 focus:border-lime outline-none">
              <option>EPOCHA Practicums</option>
              <option>Industry Partnership</option>
              <option>Leadership Practicums</option>
              <option>General inquiry</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm text-muted-foreground">Message</span>
            <textarea rows={5} required className="mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 focus:border-lime outline-none resize-none" />
          </label>
          <button type="submit" className="btn-primary w-full justify-center">Send message</button>
        </form>
      </div>
    </section>
  );
}