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
  // Chiude il cerchio dell'entità: il brand dichiara chi l'ha fondato, puntando
  // allo stesso @id usato su florinandriciuc.com (collegamento bidirezionale).
  founder: { "@id": site.authorEntityId },
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

/* Entità autore — E-E-A-T: un contenuto gestionale/finanziario senza autore
   identificabile vale meno per Google e per gli LLM. @id stabile e riusabile. */
/* Person — NON è un'entità locale: è la STESSA entità che vive su florinandriciuc.com.
   Usare qui il suo @id (e non uno di dominio) è ciò che fa leggere a Google e agli LLM
   gli otto domini dell'ecosistema come una sola persona. */
export const personSchema: Json = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": site.authorEntityId,
  name: site.author,
  url: site.authorUrl,
  jobTitle: "Founder & CEO di AEDIX",
  description: site.authorBio,
  knowsAbout: [
    "Controllo di gestione per imprese edili",
    "Margine di commessa",
    "Costi di cantiere",
    "Redditività delle imprese di costruzioni",
    "Preventivi e budget in edilizia",
  ],
  worksFor: { "@id": `${site.domain}/#organization` },
  ...(site.authorSameAs.length ? { sameAs: site.authorSameAs } : {}),
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
  image?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    ...(opts.image ? { image: opts.image } : {}),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: "it-IT",
    // Autore = entità centrale su florinandriciuc.com (stesso @id su tutti i domini AEDIX).
    author: {
      "@type": "Person",
      "@id": site.authorEntityId,
      name: site.author,
      url: site.authorUrl,
    },
    publisher: { "@id": `${site.domain}/#organization` },
    mainEntityOfPage: opts.url,
  };
}

/* HowTo — per le guide procedurali (preventivo, budget, costo orario…). */
export function howToSchema(opts: {
  name: string;
  description: string;
  url: string;
  steps: { name: string; text: string }[];
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    inLanguage: "it-IT",
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${opts.url}#step-${i + 1}`,
    })),
  };
}

/* SoftwareApplication — per i calcolatori in /strumenti.
   Segnala a Google e agli LLM che quella pagina È uno strumento utilizzabile
   (non un articolo che ne parla): è ciò che la rende citabile come risorsa. */
export function toolSchema(opts: { name: string; description: string; url: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "it-IT",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    provider: { "@id": `${site.domain}/#organization` },
  };
}

/* Glossario: DefinedTermSet + DefinedTerm per voce, ciascuna con @id = URL#anchor.
   È il markup che permette ai motori di trattare ogni definizione come entità citabile. */
export function definedTermSetSchema(opts: {
  name: string;
  description: string;
  url: string;
  terms: { slug: string; term: string; def: string }[];
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${opts.url}#glossario`,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: "it-IT",
    publisher: { "@id": `${site.domain}/#organization` },
    hasDefinedTerm: opts.terms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${opts.url}#${t.slug}`,
      name: t.term,
      description: t.def,
      url: `${opts.url}#${t.slug}`,
      inDefinedTermSet: `${opts.url}#glossario`,
    })),
  };
}
