import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/lib/articles";
import { settori } from "@/lib/settori";

/* IMPORTANTE — lastmod NON deve essere la data di build.
   Se ogni deploy riscrive "modificato adesso" su tutte le URL, Google si accorge che
   il segnale è un artefatto e smette di usarlo per dare priorità alla scansione.
   Qui ogni pagina porta la data del suo ultimo cambiamento REALE: va aggiornata a mano
   solo quando se ne modifica il contenuto. */
const ULTIMA_MODIFICA: Record<string, string> = {
  "/": "2026-07-18",
  "/metodo": "2026-07-18",
  "/settori": "2026-07-18",
  "/percorsi": "2026-07-18",
  "/edilizia-in-cloud": "2026-07-19",
  "/casi-studio": "2026-07-19",
  "/chi-sono": "2026-07-25",
  "/contatti": "2026-07-17",
  "/strumenti": "2026-07-21",
  "/strumenti/calcolo-margine-commessa": "2026-07-21",
  "/strumenti/calcolo-costo-orario-manodopera": "2026-07-21",
  "/strumenti/calcolo-break-even-edile": "2026-07-21",
};

const SETTORI_AGGIORNATI = "2026-07-18"; // ultimo cambio reale: foto hero per mestiere

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const staticPages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/metodo", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/settori", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/percorsi", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/edilizia-in-cloud", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/casi-studio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/chi-sono", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/contatti", priority: 0.9, changeFrequency: "yearly" as const },
    { path: "/strumenti", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/strumenti/calcolo-margine-commessa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/strumenti/calcolo-costo-orario-manodopera", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/strumenti/calcolo-break-even-edile", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // L'indice /risorse cambia davvero quando esce un articolo nuovo: derivalo dal contenuto.
  const ultimoArticolo = articles
    .map((a) => a.date)
    .sort()
    .at(-1)!;

  return [
    ...staticPages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: new Date(ULTIMA_MODIFICA[p.path] ?? SETTORI_AGGIORNATI),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    {
      url: `${base}/risorse`,
      lastModified: new Date(ultimoArticolo),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...settori.map((s) => ({
      url: `${base}/settori/${s.slug}`,
      lastModified: new Date(SETTORI_AGGIORNATI),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...articles.map((a) => ({
      url: `${base}/risorse/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
