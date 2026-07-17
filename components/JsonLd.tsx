import { site } from "@/lib/site";

type Json = Record<string, unknown>;

export function JsonLd({ data }: { data: Json | Json[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD è dato statico e sicuro
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema: Json = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.domain}/#organization`,
  name: site.name,
  url: site.domain,
  description: site.description,
  email: site.email,
  areaServed: "IT",
  knowsAbout: [
    "Controllo di gestione edilizia",
    "Margine di commessa",
    "Analisi costi impresa edile",
    "Budget di cantiere",
    "Redditività impresa di costruzioni",
  ],
  sameAs: [site.social.linkedin, site.social.instagram, site.social.youtube],
};

export const websiteSchema: Json = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.domain}/#website`,
  url: site.domain,
  name: site.name,
  inLanguage: "it-IT",
  publisher: { "@id": `${site.domain}/#organization` },
};

export function serviceSchema(name: string, description: string, url: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: "Controllo di gestione per imprese edili",
    provider: { "@id": `${site.domain}/#organization` },
    areaServed: "IT",
    audience: {
      "@type": "Audience",
      audienceType: "Imprenditori edili e imprese di costruzioni",
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: "it-IT",
    author: { "@id": `${site.domain}/#organization` },
    publisher: { "@id": `${site.domain}/#organization` },
    mainEntityOfPage: opts.url,
  };
}
