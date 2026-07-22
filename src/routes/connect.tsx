import { createFileRoute } from "@tanstack/react-router";
import { Clock, FileText, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Contact Us — EPOCHA" },
      {
        name: "description",
        content:
          "Get in touch with EPOCHA Learning Hub. Reach out at hello@epocha.world or visit us in Seoul, South Korea.",
      },
      { property: "og:title", content: "Contact Us — EPOCHA" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: ConnectPage,
});

function ConnectPage() {
  return (
    <section className="container-x pt-20 pb-24">
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <p aria-hidden="true" className="text-xs uppercase tracking-[0.2em] text-coral" />
            <h1 className="mt-4 text-5xl md:text-7xl font-bold max-w-3xl leading-[1]">
              Let's <span className="text-lime">talk.</span>
            </h1>
            <p className="mt-6 text-xl text-foreground/80 max-w-xl">
              Whether you're a student, an institution, or a future partner — we'd love to hear from
              you.
            </p>
          </div>
          <div className="flex gap-4">
            <Mail className="w-6 h-6 text-lime shrink-0 mt-1" />
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Email</p>
              <a href="mailto:hello@epocha.world" className="mt-1 block text-lg hover:text-lime">
                hello@epocha.world
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="w-6 h-6 text-lime shrink-0 mt-1" />
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Office</p>
              <p className="mt-1 text-lg leading-relaxed">
                R214, 2nd Floor
                <br />
                10 Yeonmujang 11-gil, Seongdong-gu
                <br />
                Seoul, South Korea
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="w-6 h-6 text-lime shrink-0 mt-1" />
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Office hours
              </p>
              <p className="mt-1 text-lg leading-relaxed">
                Mon–Fri · 9:00 – 18:00
                <br />
                Sat · 9:00 – 12:00 (by appointment)
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <a
              href="https://forms.gle/zhFdjHts9r2kX8VC6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-lime bg-transparent px-5 py-2.5 font-semibold text-lime transition-colors hover:bg-lime hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              <FileText aria-hidden="true" className="h-5 w-5" />
              Leave us a note
            </a>
            <a
              href="https://wa.me/447801202799"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 font-semibold text-ink transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>
        </div>

        <aside className="self-start rounded-3xl border border-border bg-card p-8 lg:col-span-3">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Follow us</h2>
          <div className="mt-5 space-y-3">
            <a
              href="https://www.instagram.com/learnwithepocha/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center gap-3 rounded-full border border-border px-5 py-4 font-semibold transition-colors hover:border-lime hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              <Instagram aria-hidden="true" className="h-5 w-5 text-lime" />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/epocha-world/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center gap-3 rounded-full border border-border px-5 py-4 font-semibold transition-colors hover:border-lime hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              <Linkedin aria-hidden="true" className="h-5 w-5 text-lime" />
              LinkedIn
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
