import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EicForm } from "@/components/EicForm";
import { AdEic } from "@/components/AdEic";
import { IconArrow } from "@/components/Icons";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Risorse per l'imprenditore edile",
  description:
    "Guide, articoli e strumenti sul controllo di gestione per l'impresa edile: margine di commessa, preventivi, budget di cantiere e redditività.",
  alternates: { canonical: "/risorse" },
  openGraph: { url: "/risorse", images: ["/opengraph-image"] },
};

const categories = ["Tutti", "Controllo di gestione", "Marginalità", "Preventivi", "Cantiere"];

export default function RisorsePage() {
  return (
    <>
      <PageHero
        crumb="Risorse"
        path="/risorse"
        eyebrow="Guide e articoli"
        title={<>Impara a leggere i numeri della tua impresa edile</>}
        intro="Contenuti pratici sul controllo di gestione in edilizia: margine, preventivi, costi di cantiere e redditività. Tutto spiegato nella lingua del cantiere."
        cta={false}
      />

      <section className="container-nie py-16 sm:py-20">
        {/* categorie */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                i === 0 ? "bg-navy-900 text-white" : "border border-line bg-white text-navy-900 hover:border-brand-400 hover:text-brand-600"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {articles.map((a, i) => (
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

      {/* Spot EdiliziaInCloud */}
      <section className="container-nie pb-8">
        <Reveal>
          <AdEic desktop="hero" mobile="box" />
        </Reveal>
      </section>

      {/* NEWSLETTER / LEAD MAGNET */}
      <section className="container-nie pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-7 py-14 sm:px-14">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-50" />
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
              <div>
                <span className="eyebrow eyebrow-light">Analisi gratuita</span>
                <h2 className="mt-4 text-[1.9rem] sm:text-[2.3rem] font-bold text-white leading-tight">
                  Leggere gli articoli è un inizio. Parti dai tuoi numeri veri
                </h2>
                <p className="mt-4 text-brand-100/85 leading-relaxed">
                  Prenota 30 minuti gratuiti: guardiamo insieme i numeri della tua impresa edile e ti
                  diciamo, dati alla mano, dove stai lasciando margine. Nessun impegno.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 sm:p-5">
                <EicForm title="Prenota l'analisi gratuita" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
