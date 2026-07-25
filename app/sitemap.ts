import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/lib/articles";
import { settori } from "@/lib/settori";

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
    { path: "/risorse", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contatti", priority: 0.9, changeFrequency: "yearly" as const },
    { path: "/strumenti", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/strumenti/calcolo-margine-commessa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/strumenti/calcolo-costo-orario-manodopera", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/strumenti/calcolo-break-even-edile", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const now = new Date();

  return [
    ...staticPages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...settori.map((s) => ({
      url: `${base}/settori/${s.slug}`,
      lastModified: now,
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
