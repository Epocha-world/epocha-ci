import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { createSeoHead } from "@/lib/seo";
import { yanPaulTitle, yanPaulBlocks } from "@/lib/yan-paul-story";
export const Route = createFileRoute(
  "/news_/digital-media-and-drone-show-technology-with-yan-paul-dubbelman",
)({
  head: ({ match }) =>
    createSeoHead({
      locale: match.context.preferences.locale,
      title: yanPaulTitle,
      description:
        "What do you get when you combine art, simulation software, and hundreds of drones painting the night sky?",
      path: "/news/digital-media-and-drone-show-technology-with-yan-paul-dubbelman",
      image: "/news/yan-paul-image3.png",
    }),
  component: YanPaulArticle,
});
function YanPaulArticle() {
  const { t } = useI18n();
  return (
    <article className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {yanPaulBlocks.map((block, index) =>
          block.type === "image" ? (
            <img
              key={index}
              src={block.src}
              alt={t(block.alt)}
              loading={index === 0 ? "eager" : "lazy"}
              className="my-10 h-auto w-full rounded-2xl"
            />
          ) : block.type === "title" ? (
            <h1 key={index} className="my-8 text-4xl font-bold leading-tight md:text-5xl">
              {t(block.text)}
            </h1>
          ) : block.type === "heading" ? (
            <h2 key={index} className="mt-10 mb-4 text-2xl font-bold">
              {t(block.text)}
            </h2>
          ) : (
            <p key={index} className="mt-5 text-lg leading-relaxed text-foreground/85">
              {block.text.includes("@yanpauldubbelman") ? (
                <>
                  {t(block.text.split("@yanpauldubbelman")[0])}
                  <a
                    href="https://www.instagram.com/yanpauldubbelman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    @yanpauldubbelman
                  </a>
                </>
              ) : (
                t(block.text)
              )}
            </p>
          ),
        )}
      </div>
    </article>
  );
}
