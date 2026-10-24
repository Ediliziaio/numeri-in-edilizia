import { ReadingPaths } from "@/components/ReadingPaths";
import type { Metadata } from "next";
import Link from "next/link";
import { ResourceArticles } from "@/components/ResourceArticles";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EicForm } from "@/components/EicForm";
import { AdEic } from "@/components/AdEic";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Risorse per l'imprenditore edile",
  description:
    "Guide, articoli e strumenti sul controllo di gestione per l'impresa edile: margine di commessa, preventivi, budget di cantiere e redditività.",
  alternates: { canonical: "/risorse" },
  openGraph: { url: "/risorse", images: ["/opengraph-image"] },
};


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

      <ReadingPaths />
      <ResourceArticles />

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
