"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { IconArrow } from "@/components/Icons";
import { articles } from "@/lib/articles";
const categories = ["Tutti", ...new Set(articles.map(article => article.category))];
export function ResourceArticles() {
  const [category, setCategory] = useState("Tutti");
  const visibleArticles = category === "Tutti" ? articles : articles.filter(article => article.category === category);
  return (
      <section className="container-nie py-16 sm:py-20">
        {/* categorie */}
        <div aria-label="Categorie delle risorse" className="flex flex-wrap gap-2.5">
          {categories.map((c, i) => (
            <button
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              key={c}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                category === c ? "bg-navy-900 text-white" : "border border-line bg-white text-navy-900 hover:border-brand-400 hover:text-brand-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <p role="status" className="mt-5 text-sm text-muted">{visibleArticles.length} articoli · {category}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visibleArticles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 90} className="h-full">
              <Link href={`/risorse/${a.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white card-hover">
                <div className="aspect-[1200/630] overflow-hidden border-b border-line bg-navy-900">
                  {a.cover ? (
                    <Image
                      src={a.cover}
                      alt={a.title}
                      width={1200}
                      height={630}
                      sizes="(min-width: 768px) 400px, 100vw"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="relative flex h-full w-full items-center justify-center bg-navy-900 p-6 text-center">
                      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
                      <span className="relative font-display text-lg font-bold leading-snug text-white">{a.title}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <span className="text-sm font-semibold text-brand-600">{a.category}</span>
                  <h2 className="mt-3 text-xl font-bold text-navy-900 group-hover:text-brand-700 transition-colors">{a.title}</h2>
                  <p className="mt-3 text-muted leading-relaxed flex-1">{a.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-sm text-muted">
                    <span>{a.readingTime} di lettura</span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600">
                      Leggi <IconArrow className="arrow h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

  );
}
