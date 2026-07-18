export const site = {
  name: "Numeri in Edilizia",
  legalName: "Numeri in Edilizia",
  // Dominio canonico (apex). www.numerinedilizia.com reindirizza qui via Vercel.
  domain: "https://numerinedilizia.com",
  tagline: "Controllo di gestione per imprese edili",
  description:
    "Il metodo che insegna all'imprenditore edile a controllare margini, commesse e utile: controllo di gestione pratico per un'impresa che guadagna davvero.",
  founder: {
    name: "Numeri in Edilizia",
    role: "Formazione e consulenza di controllo di gestione per imprese edili",
  },
  // Codice di verifica Google Search Console (metodo "tag HTML").
  // Incolla qui SOLO il valore del content="..." fornito da GSC, poi rideploya.
  googleVerification: "",
  // Tracciamento
  analytics: {
    ga4: "G-ZRCY2YM87E", // Google Analytics 4 Measurement ID
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
] as const;
