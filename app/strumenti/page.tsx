import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageImage } from "@/components/PageImage";
import { IconArrow, IconCompass, IconClock, IconTrend } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Strumenti gratuiti per imprese edili",
  description:
    "Calcolatori gratuiti per imprese edili: margine di commessa, costo orario della manodopera e break even point. Nessuna registrazione.",
  keywords: [
    "calcolatore margine commessa",
    "calcolo costo orario manodopera edile",
    "break even impresa edile",
    "strumenti gratuiti imprese edili",
  ],
  alternates: { canonical: "/strumenti" },
  openGraph: {
    title: "Strumenti gratuiti per imprese edili",
    description: "Calcola margine di commessa, costo orario della manodopera e punto di pareggio. Gratis, senza registrazione.",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const tools = [
  {
    icon: IconCompass,
    href: "/strumenti/calcolo-margine-commessa",
    t: "Calcolatore margine di commessa",
    d: "Inserisci ricavi e costi di un cantiere e scopri quanto stai guadagnando davvero, struttura inclusa.",
  },
  {
    icon: IconClock,
    href: "/strumenti/calcolo-costo-orario-manodopera",
    t: "Calcolatore costo orario manodopera",
    d: "Dal lordo in busta al costo orario reale sulle ore produttive. Il numero da usare nei preventivi.",
  },
  {
    icon: IconTrend,
    href: "/strumenti/calcolo-break-even-edile",
    t: "Calcolatore break even",
    d: "Quanto devi fatturare per coprire struttura e compenso, e per arrivare all'utile che hai deciso.",
  },
];

export default function StrumentiPage() {
  return (
    <>
      <PageHero
        crumb="Strumenti"
        path="/strumenti"
        eyebrow="Gratis, senza registrazione"
        title={<>Calcola i numeri della tua impresa edile</>}
        intro="Tre calcolatori costruiti sul metodo Numeri in Edilizia: margine di commessa, costo orario reale della manodopera e punto di pareggio. Nessuna email richiesta, nessun dato salvato."
        visual={<PageImage src="/images/pages/hero-metodo.jpg" alt="Imprenditore edile che calcola i numeri della sua impresa" priority />}
        cta={false}
      />

      <section className="container-nie py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((t, i) => (
            <Reveal key={t.href} delay={i * 90} className="h-full">
              <Link href={t.href} className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-7 card-hover">
                <span className="icon-badge"><t.icon /></span>
                <h2 className="mt-5 text-lg font-bold text-navy-900 leading-snug group-hover:text-brand-700">{t.t}</h2>
                <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">{t.d}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                  Apri il calcolatore <IconArrow className="arrow h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bg-soft py-20 sm:py-24">
        <div className="container-nie">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Come usarli"
              title="Uno strumento serve solo se poi decidi qualcosa"
              intro="I calcolatori ti danno il numero. Quello che conta è cosa ci fai: rivedere un preventivo, rifiutare un lavoro, correggere un cantiere aperto."
              className="mb-10"
            />
          </Reveal>
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-4 text-muted leading-relaxed">
              <p>
                Parti dal <Link href="/strumenti/calcolo-costo-orario-manodopera">costo orario reale</Link>: è il
                dato che rende affidabile tutto il resto, perché la manodopera è la voce più pesante e la più
                sottostimata. Con quel numero in mano, usa il{" "}
                <Link href="/strumenti/calcolo-margine-commessa">calcolatore del margine di commessa</Link> su un
                cantiere che hai aperto adesso: quasi sempre il risultato è diverso da quello che ti aspetti.
              </p>
              <p>
                Infine il <Link href="/strumenti/calcolo-break-even-edile">break even</Link> ti dice a che ritmo
                deve girare l'impresa perché tutto questo abbia senso. Se il fatturato di pareggio è più alto di
                quello che stai facendo, hai un problema di margine, non di volume.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="I calcolatori danno il numero. Il metodo ti dice cosa farci."
        text="Prenota l'analisi gratuita: trenta minuti sui tuoi numeri reali per capire dove stai perdendo margine."
      />
      <div className="h-20" />
    </>
  );
}
