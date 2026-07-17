import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { NewsletterForm } from "@/components/NewsletterForm";
import { AdEic } from "@/components/AdEic";
import { IconArrow } from "@/components/Icons";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Risorse per l'imprenditore edile",
  description:
    "Guide, articoli e strumenti sul controllo di gestione per l'impresa edile: margine di commessa, preventivi, budget di cantiere e redditività.",
  alternates: { canonical: "/risorse" },
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
              <Link href={`/risorse/${a.slug}`} className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-8 card-hover">
                <span className="text-sm font-semibold text-brand-600">{a.category}</span>
                <h2 className="mt-3 text-xl font-bold text-navy-900 group-hover:text-brand-700 transition-colors">{a.title}</h2>
                <p className="mt-3 text-muted leading-relaxed flex-1">{a.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-muted">
                  <span>{a.readingTime} di lettura</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600">
                    Leggi <IconArrow className="arrow h-4 w-4" />
                  </span>
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
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow eyebrow-light">Newsletter</span>
                <h2 className="mt-4 text-[1.9rem] sm:text-[2.3rem] font-bold text-white leading-tight">
                  Un'idea concreta sui numeri, ogni settimana
                </h2>
                <p className="mt-4 text-brand-100/85 leading-relaxed">
                  Consigli pratici di controllo di gestione per imprese edili. Niente spam: solo cose
                  che puoi applicare in cantiere. Disiscrizione in un clic.
                </p>
              </div>
              <div>
                <NewsletterForm />
                <p className="mt-3 text-xs text-brand-100/60">
                  Iscrivendoti accetti la nostra privacy policy. Zero spam.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
