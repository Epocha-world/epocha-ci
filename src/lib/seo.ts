export const SITE_URL = "https://epocha.world";
export const SITE_NAME = "EPOCHA Learning Hub";

type JsonLd = Record<string, unknown>;

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  ogTitle?: string;
  socialDescription?: string;
  noIndex?: boolean;
  jsonLd?: JsonLd | JsonLd[];
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

function serializeJsonLd(data: JsonLd) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function createStructuredDataScripts(data: JsonLd[]) {
  return data.map((entry) => ({
    type: "application/ld+json",
    children: serializeJsonLd(entry),
  }));
}

export function createSeoHead({
  title,
  description,
  path,
  image,
  ogTitle = title,
  socialDescription = description,
  noIndex = false,
  jsonLd,
}: SeoOptions) {
  const canonical = absoluteUrl(path);
  const socialImage = image ? absoluteUrl(image) : undefined;
  const structuredData = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: noIndex
          ? "noindex, nofollow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: socialDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: socialDescription },
      ...(socialImage
        ? [
            { property: "og:image", content: socialImage },
            { name: "twitter:image", content: socialImage },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: createStructuredDataScripts([
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: canonical,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      ...structuredData,
    ]),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: "EPOCHA",
  alternateName: "EPOCHA Learning Hub",
  url: `${SITE_URL}/`,
  email: "hello@epocha.world",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R214, 10 Yeonmujang 11-gil",
    addressLocality: "Seongdong-gu",
    addressRegion: "Seoul",
    addressCountry: "KR",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "EPOCHA",
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};
