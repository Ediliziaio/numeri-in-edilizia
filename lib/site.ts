export const site = {
  name: "Numeri in Edilizia",
  legalName: "Numeri in Edilizia",
  // Dominio canonico (www). L'apex numerinedilizia.com reindirizza qui via Vercel (308).
  domain: "https://www.numerinedilizia.com",
  tagline: "Controllo di gestione per imprese edili",
  description:
    "Il metodo che insegna all'imprenditore edile a controllare margini, commesse e utile: controllo di gestione pratico per un'impresa che guadagna davvero.",
  founder: {
    name: "Numeri in Edilizia",
    role: "Formazione e consulenza di controllo di gestione per imprese edili",
  },
  // Autore degli articoli (byline + schema Article/Person)
  author: "Florin Andriciuc",
  // BIO CANONICA — identica su tutti i domini dell'ecosistema. Le varianti
  // indeboliscono l'entità agli occhi di Google e degli LLM: non riformularla.
  authorBio:
    "Florin Andriciuc è un imprenditore italiano, founder e CEO di AEDIX. Dopo anni nel settore edile ha costruito l'ecosistema di strumenti per l'impresa di costruzioni: il gestionale EdiliziaInCloud, Marketing Edile, Vendita Edile e il metodo di controllo di gestione Numeri in Edilizia.",
  // ENTITÀ AUTORE CENTRALE: vive su florinandriciuc.com. Tutti i domini
  // dell'ecosistema devono usare QUESTO @id come autore, così gli otto siti
  // vengono letti come una sola entità invece che come otto persone diverse.
  authorEntityId: "https://www.florinandriciuc.com/#florin",
  authorUrl: "https://www.florinandriciuc.com/chi-sono",
  // Profili PERSONALI di Florin (non del brand) per il sameAs dello schema Person.
  authorSameAs: [
    "https://www.florinandriciuc.com",
    "https://www.linkedin.com/in/florinandriciuc/",
    "https://www.instagram.com/florin.andriciuc/",
    "https://www.youtube.com/channel/UC1H6GR9P2ZocPU_p0ZHoGVQ",
  ] as string[],
  // Codice di verifica Google Search Console (metodo "tag HTML").
  // Incolla qui SOLO il valore del content="..." fornito da GSC, poi rideploya.
  googleVerification: "",
  // Tracciamento
  analytics: {
    ga4: "G-ZRCY2YM87E", // Google Analytics 4 Measurement ID (tag diretto)
    gtm: "GTM-52NPQPRC", // Google Tag Manager container (hub per gli altri pixel)
    metaPixel: "912028060826443", // Meta (Facebook) Pixel ID
  },
  email: "info@numerinedilizia.com",
  phone: "+39 000 000 0000",
  social: {
    linkedin: "https://www.linkedin.com/company/numeri-in-edilizia",
    instagram: "https://www.instagram.com/numeriinedilizia",
    youtube: "https://www.youtube.com/@numeriinedilizia",
  },
  cta: {
    primaryLabel: "Prenota l'analisi gratuita",
    primaryHref: "/contatti",
  },
  // Software partner: il gestionale che mette in pratica il metodo
  partner: {
    name: "EdiliziaInCloud",
    url: "https://ediliziaincloud.com/",
    tagline: "Il gestionale per imprese edili",
  },
} as const;

export const nav = [
  { label: "Il metodo", href: "/metodo" },
  { label: "Settori", href: "/settori" },
  { label: "Percorsi", href: "/percorsi" },
  { label: "EdiliziaInCloud", href: "/edilizia-in-cloud" },
  { label: "Casi studio", href: "/casi-studio" },
  { label: "Chi siamo", href: "/chi-sono" },
  { label: "Risorse", href: "/risorse" },
  { label: "Strumenti", href: "/strumenti" },
] as const;
