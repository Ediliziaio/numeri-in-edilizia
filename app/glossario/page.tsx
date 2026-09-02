import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { AdEic } from "@/components/AdEic";
import { JsonLd, definedTermSetSchema } from "@/components/JsonLd";
import { IconArrow } from "@/components/Icons";
import { glossario } from "@/lib/glossario";
import { site } from "@/lib/site";

const URL = `${site.domain}/glossario`;
const DESC =
  "Glossario del controllo di gestione per imprese edili: margine di commessa, costi diretti e di struttura, costo orario, break even, SAL, varianti. Definizioni chiare, con formule e valori di riferimento.";

export const metadata: Metadata = {
  title: "Glossario del controllo di gestione edile",
  description: DESC,
  keywords: [
    "glossario controllo di gestione",
    "margine di commessa significato",
    "cosa sono i costi di struttura",
    "margine di contribuzione edilizia",
    "break even impresa edile",
    "glossario edilizia gestione",
  ],
  alternates: { canonical: "/glossario" },
  openGraph: {
    url: "/glossario",
    title: "Glossario del controllo di gestione edile",
    description: DESC,
    type: "website",
    images: ["/opengraph-image"],
  },
};

// Ordine alfabetico per consultazione; lo schema segue lo stesso ordine.
const voci = [...glossario].sort((a, b) => a.term.localeCompare(b.term, "it"));

export default function GlossarioPage() {
  return (
    <>
      <JsonLd
        data={definedTermSetSchema({
          name: "Glossario del controllo di gestione per imprese edili",
          description: DESC,
          url: URL,
          terms: voci,
        })}
      />

      <PageHero
        crumb="Glossario"
        path="/glossario"
        eyebrow={`${voci.length} termini spiegati`}
        title={<>Le parole del controllo di gestione, spiegate per chi sta in cantiere</>}
        intro="Ogni termine ha una definizione che sta in piedi da sola, la formula dove serve e i valori di riferimento per le PMI edili. Nessun gergo da manuale: il linguaggio è quello dell'impresa."
        cta={false}
      />

      {/* Indice: link ad anchor, così ogni voce è raggiungibile e condivisibile da sola */}
      <section className="container-nie py-10">
        <Reveal>
          <nav aria-label="Indice del glossario" className="mx-auto max-w-4xl rounded-2xl border border-line bg-bg-soft p-6">
            <ul className="flex flex-wrap gap-2">
              {voci.map((v) => (
                <li key={v.slug}>
                  <a
                    href={`#${v.slug}`}
                    className="inline-block rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-navy-900 transition hover:border-brand-300 hover:text-brand-700"
                  >
                    {v.term}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </section>

      <section className="container-nie pb-12">
        <dl className="mx-auto max-w-4xl divide-y divide-line">
          {voci.map((v) => (
            <div key={v.slug} id={v.slug} className="scroll-mt-28 py-8">
              <dt className="text-xl font-bold text-navy-900">{v.term}</dt>
              <dd className="mt-3 text-muted leading-relaxed">{v.def}</dd>
              {v.more && (
                <dd className="mt-3">
                  <Link
                    href={v.more.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all"
                  >
                    {v.more.label} <IconArrow className="arrow h-4 w-4" />
                  </Link>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </section>

      <section className="container-nie pb-6">
        <div className="mx-auto max-w-4xl">
          <AdEic desktop="leaderboard" mobile="box" />
        </div>
      </section>

      <section className="bg-bg-soft py-16">
        <div className="container-nie">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Dalle parole ai numeri"
              title="Le definizioni servono se poi le applichi ai tuoi cantieri"
              intro="I calcolatori mettono in pratica i termini di questa pagina sui numeri della tua impresa. Gratis, senza registrazione."
              className="mb-8"
            />
          </Reveal>
          <Reveal>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/strumenti" className="btn btn-primary">
                Apri gli strumenti <IconArrow className="arrow h-4 w-4" />
              </Link>
              <Link href="/risorse" className="btn btn-ghost">
                Leggi le guide <IconArrow className="arrow h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}
