import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, FaqSection } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SiteScene } from "@/components/Graphics";
import { IconArrow } from "@/components/Icons";
import { settori } from "@/lib/settori";

export const metadata: Metadata = {
  title: "Controllo di gestione per settore edile",
  description:
    "Il controllo di gestione calibrato per settore: costruzioni, ristrutturazioni, serramenti, impianti, carpenteria e movimento terra.",
  alternates: { canonical: "/settori" },
};

const faq = [
  {
    q: "Il metodo funziona per il mio tipo di impresa edile?",
    a: "Sì. Il controllo di gestione Numeri in Edilizia si adatta al ciclo di commessa e alla marginalità di ogni settore edile — dalle costruzioni generali ai serramentisti, dagli impiantisti al movimento terra. Cambiano i costi da tenere d'occhio, non il metodo.",
  },
  {
    q: "Cosa cambia tra un settore e l'altro?",
    a: "Cambiano le voci di costo critiche: per un serramentista è la posa, per il movimento terra è il costo orario dei mezzi, per una carpenteria è il prezzo dell'acciaio. Il metodo individua i numeri che contano per il tuo settore e li mette sotto controllo.",
  },
];

export default function SettoriPage() {
  return (
    <>
      <PageHero
        crumb="Settori"
        path="/settori"
        eyebrow="Un metodo, ogni impresa edile"
        title={<>Controllo di gestione, calibrato sul tuo settore</>}
        intro="Ogni impresa edile ha i suoi numeri critici. Scegli il tuo settore: ti mostriamo dove si nasconde il margine e come metterlo sotto controllo."
        cta={false}
        visual={<SiteScene />}
      />

      <section className="container-nie py-20 sm:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {settori.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80} className="h-full">
              <Link
                href={`/settori/${s.slug}`}
                className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-8 card-hover"
              >
                <span className="inline-flex w-fit rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
                  {s.nomeBreve}
                </span>
                <h2 className="mt-4 text-xl font-bold text-navy-900 group-hover:text-brand-700 transition-colors leading-snug">
                  Controllo di gestione per {s.nome}
                </h2>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{s.heroIntro.split(". ")[0]}.</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-600">
                  Scopri di più <IconArrow className="arrow h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted">
          Non trovi il tuo settore?{" "}
          <Link href="/contatti" className="font-semibold text-brand-600 hover:underline">Scrivici</Link>: il metodo si adatta a qualsiasi impresa edile.
        </p>
      </section>

      <FaqSection items={faq} />
      <CtaBand />
      <div className="h-20" />
    </>
  );
}
