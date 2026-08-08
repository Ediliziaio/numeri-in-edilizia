import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, FaqSection } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { MargineCommessaCalc } from "@/components/calc/MargineCommessaCalc";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Calcolo margine di commessa",
  description:
    "Calcolatore gratuito del margine di commessa: ricavi meno costi diretti e quota di struttura. Scopri quanto guadagni davvero su ogni cantiere.",
  keywords: [
    "calcolo margine commessa",
    "calcolatore margine cantiere",
    "come calcolare il margine di una commessa",
    "margine di commessa edilizia",
    "marginalità cantiere calcolo",
  ],
  alternates: { canonical: "/strumenti/calcolo-margine-commessa" },
  openGraph: { url: "/strumenti/calcolo-margine-commessa",
    title: "Calcolo margine di commessa",
    description: "Ricavi meno costi diretti e quota di struttura: quanto guadagni davvero su un cantiere.",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const faq = [
  {
    q: "Come si calcola il margine di una commessa edile?",
    a: "Si parte dai ricavi della commessa (contratto più varianti fatturabili) e si sottraggono i costi diretti — materiali, manodopera al costo reale, mezzi e noli, subappalti, trasporti — e poi la quota di costi di struttura attribuita a quel cantiere. Quello che resta è il margine di commessa.",
  },
  {
    q: "Qual è un buon margine di commessa?",
    a: "Come riferimento: sotto il 10% la commessa è fragile, perché un solo imprevisto la porta in perdita; tra il 10% e il 15% l'impresa è in equilibrio, copre struttura e compenso e lascia utile; oltre il 15% c'è spazio per investire e assorbire errori.",
  },
  {
    q: "Che percentuale di costi di struttura devo inserire?",
    a: "Va calcolata sulla tua impresa: costi di struttura di un esercizio diviso i costi diretti dello stesso periodo. Nelle PMI edili l'incidenza tipica è tra il 10% e il 20%. Se non l'hai mai calcolata, parti dal 15% e affinala appena hai il dato reale.",
  },
  {
    q: "Che differenza c'è tra margine di contribuzione e margine di commessa?",
    a: "Il margine di contribuzione toglie solo i costi variabili diretti e dice quanto quel cantiere contribuisce a coprire i costi fissi. Il margine di commessa toglie anche la quota di struttura e dice se, caricato tutto, resta utile. Il calcolatore ti mostra entrambi.",
  },
  {
    q: "Posso usarlo su un cantiere già in corso?",
    a: "Sì, ed è l'uso più utile. Inserendo i costi sostenuti finora e i ricavi maturati vedi il margine mentre il cantiere è ancora aperto — cioè quando puoi ancora intervenire su acquisti, squadre e varianti.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        crumb="Calcolo margine di commessa"
        path="/strumenti/calcolo-margine-commessa"
        eyebrow="Calcolatore gratuito"
        title={<>Quanto stai guadagnando davvero su questo cantiere</>}
        intro="Inserisci ricavi e costi di una commessa e ottieni margine di contribuzione e margine di commessa, in euro e in percentuale. Con la quota di struttura inclusa, come dovrebbe essere sempre."
        cta={false}
      />

      <section className="container-nie py-12 sm:py-16">
        <MargineCommessaCalc />
      </section>

      <section className="container-nie pb-8">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-navy-900">Come leggere il risultato</h2>
            <div className="mt-5 space-y-4 text-muted leading-relaxed">
              <p>
                Il calcolo segue lo schema del conto di commessa:{" "}
                <strong className="text-navy-900">
                  ricavi − costi diretti − quota di costi di struttura = margine di commessa
                </strong>
                . È lo stesso conto che sta al centro del metodo, applicato a un singolo cantiere.
              </p>
              <p>
                Attenzione al dato più insidioso: la <strong className="text-navy-900">manodopera</strong>. Va
                inserita al costo orario reale sulle ore produttive, non alla paga oraria — altrimenti il margine
                che ottieni è più alto di quello vero. Se non l&apos;hai ancora calcolato, usa il{" "}
                <Link href="/strumenti/calcolo-costo-orario-manodopera">calcolatore del costo orario</Link>.
              </p>
              <p>
                L&apos;altro punto critico è la <strong className="text-navy-900">quota di struttura</strong>: se
                non la carichi, ogni cantiere che «pareggia» in realtà perde quella percentuale. Come calcolare la
                tua incidenza lo spieghiamo nella guida ai{" "}
                <Link href="/risorse/costi-di-struttura-impresa-edile">costi di struttura</Link>; il quadro
                completo è nella <Link href="/risorse/gestione-commessa-edile">gestione della commessa</Link>.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/strumenti/calcolo-break-even-edile" className="btn btn-ghost">
                Calcola il punto di pareggio <IconArrow className="arrow h-4 w-4" />
              </Link>
              <Link href="/contatti" className="btn btn-primary">
                Prenota l&apos;analisi gratuita <IconArrow className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <FaqSection title="Domande sul margine di commessa" items={faq} />
      <CtaBand />
      <div className="h-20" />
    </>
  );
}
