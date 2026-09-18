import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/practicums", priority: "0.9" },
          { path: "/practicums/startup-lab-camp", priority: "0.8" },
          { path: "/practicums/startup-lab-camp/practicum/leadership-tracks", priority: "0.7" },
          { path: "/practicums/startup-lab-camp/practicum/coaching-program", priority: "0.7" },
          { path: "/practicums/startup-lab-camp/how-it-works", priority: "0.7" },
          { path: "/practicums/startup-lab-camp/open-capstones", priority: "0.8" },
          { path: "/practicums/hanaro", priority: "0.8" },
          { path: "/practicums/hanaro-marketing/voices-in-motion", priority: "0.8" },
          { path: "/practicums/mirae-industry", priority: "0.8" },
          { path: "/news", priority: "0.8" },
          { path: "/about", priority: "0.8" },
          { path: "/about/our-story", priority: "0.7" },
          { path: "/about/sparked", priority: "0.8" },
          { path: "/how-hpi-works", priority: "0.7" },
          { path: "/hpi-assessment", priority: "0.6" },
          { path: "/grow-with-us", priority: "0.7" },
          { path: "/connect", priority: "0.6" },
          { path: "/privacy", priority: "0.3" },
          { path: "/terms", priority: "0.3" },
          { path: "/refund-policy", priority: "0.3" },
          { path: "/safeguarding", priority: "0.4" },
        ];
        const urls = entries
          .map(
            (e) =>
              `  <url><loc>${new URL(e.path, SITE_URL).toString()}</loc><priority>${e.priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
