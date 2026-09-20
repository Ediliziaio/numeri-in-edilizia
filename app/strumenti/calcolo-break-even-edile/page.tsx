import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, FaqSection } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { BreakEvenCalc } from "@/components/calc/BreakEvenCalc";
import { IconArrow } from "@/components/Icons";
import { AdEic } from "@/components/AdEic";
import { EsempioSvolto, ErroriComuni } from "@/components/CalcGuide";
import { EicForm } from "@/components/EicForm";
import { JsonLd, toolSchema, howToSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Calcolo break even impresa edile",
  description:
    "Calcolatore gratuito del punto di pareggio per un'impresa edile: quanto devi fatturare per coprire struttura, compenso e arrivare all'utile obiettivo.",
  keywords: [
    "break even impresa edile",
    "punto di pareggio impresa edile",
    "calcolo break even edilizia",
    "quanto devo fatturare impresa edile",
    "fatturato di pareggio",
  ],
  alternates: { canonical: "/strumenti/calcolo-break-even-edile" },
  openGraph: { url: "/strumenti/calcolo-break-even-edile",
    title: "Calcolo break even impresa edile",
    description: "Quanto devi fatturare per coprire struttura e compenso, e per arrivare all'utile che hai deciso.",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const faq = [
  {
    q: "Come si calcola il break even di un'impresa edile?",
    a: "Si dividono i costi fissi annui (struttura più il compenso dell'imprenditore) per il margine di contribuzione medio espresso in percentuale. Il risultato è il fatturato minimo necessario per non perdere: sotto quella cifra l'impresa lavora in perdita, anche con i cantieri pieni.",
  },
  {
    q: "Il compenso dell'imprenditore va incluso nei costi fissi?",
    a: "Sì, sempre. Se il titolare non mette il proprio stipendio tra i costi, il punto di pareggio risulta più basso del reale e l'impresa sembra sana quando non lo è. Il compenso è un costo di struttura da mettere a budget, non l'avanzo che resta a fine anno.",
  },
  {
    q: "Che margine di contribuzione medio devo inserire?",
    a: "La percentuale media che resta dei ricavi dopo i soli costi diretti di cantiere — materiali, manodopera, mezzi, subappalti. Se non l'hai calcolata, ricavala da alcune commesse rappresentative con il calcolatore del margine di commessa.",
  },
  {
    q: "Perché alzare il margine abbassa il fatturato di pareggio?",
    a: "Perché il pareggio dipende da quanto resta su ogni euro fatturato, non da quanto fatturi. Con un margine più alto ogni commessa contribuisce di più a coprire i costi fissi: servono meno lavori per arrivare allo stesso punto. È il motivo per cui crescere di volume su margini deboli peggiora la situazione.",
  },
  {
    q: "I dati inseriti vengono salvati?",
    a: "No. Il calcolo avviene nel tuo browser: nessun dato viene inviato o memorizzato, e non serve registrarsi.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={toolSchema({ name: "Calcolatore break even impresa edile", description: "Calcola il fatturato di pareggio di un impresa edile: costi fissi diviso il margine di contribuzione medio.", url: `${site.domain}/strumenti/calcolo-break-even-edile` })} />
      <JsonLd
        data={howToSchema({
          name: "Come calcolare il break even di un'impresa edile",
          description: "Procedura per calcolare il fatturato di pareggio: costi fissi annui diviso il margine di contribuzione medio in percentuale.",
          url: `${site.domain}/strumenti/calcolo-break-even-edile`,
          steps: [
          { name: "Somma i costi fissi annui", text: "Costi di struttura dell'impresa più il compenso dell'imprenditore, che va sempre incluso." },
          { name: "Calcola il margine di contribuzione medio", text: "Ricavi meno soli costi diretti, in percentuale sui ricavi, come media ponderata di tutte le commesse dell'anno." },
          { name: "Dividi i costi fissi per il margine percentuale", text: "Il risultato è il fatturato di pareggio: sotto quella cifra l'impresa lavora in perdita." },
          { name: "Aggiungi l'utile obiettivo", text: "Per sapere quanto fatturare per un certo utile, somma l'utile ai costi fissi prima di dividere per il margine percentuale." },
          ],
        })}
      />
      <PageHero
        crumb="Calcolo break even"
        path="/strumenti/calcolo-break-even-edile"
        eyebrow="Calcolatore gratuito"
        title={<>Quanto devi fatturare per non perdere</>}
        intro="Il punto di pareggio della tua impresa edile: quanto serve produrre per coprire struttura e compenso, e quanto per arrivare all'utile che hai deciso tu."
        cta={false}
      />

      <section className="container-nie py-12 sm:py-16">
        <BreakEvenCalc />
      </section>

      <section className="container-nie pb-8">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-navy-900">Come funziona il calcolo</h2>
            <div className="mt-5 space-y-4 text-muted leading-relaxed">
              <p>
                La formula è semplice:{" "}
                <strong className="text-navy-900">
                  costi fissi ÷ margine di contribuzione % = fatturato di pareggio
                </strong>
                . Sotto quella cifra l&apos;impresa lavora in perdita anche con tutti i cantieri aperti — ed è la
                situazione in cui si trovano più imprese edili di quante immagini.
              </p>
              <p>
                Il calcolo dice anche un&apos;altra cosa, meno ovvia: il pareggio non dipende da quanto fatturi,
                ma da <strong className="text-navy-900">quanto resta su ogni euro fatturato</strong>. Alzare il
                margine di due punti abbassa la soglia di pareggio più di quanto faccia una campagna per prendere
                nuovi lavori. È la matematica dietro il principio del metodo: prima il margine, poi il volume.
              </p>
              <p>
                Per costruire i due termini con precisione: i costi fissi li trovi nella guida ai{" "}
                <Link href="/risorse/costi-di-struttura-impresa-edile">costi di struttura</Link>, il margine nella
                guida al{" "}
                <Link href="/risorse/margine-di-contribuzione-edilizia">margine di contribuzione</Link>. Per
                trasformare il pareggio in obiettivi annuali, continua con il{" "}
                <Link href="/risorse/budget-impresa-edile">budget dell&apos;impresa edile</Link>.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/strumenti" className="btn btn-ghost">
                Tutti gli strumenti <IconArrow className="arrow h-4 w-4" />
              </Link>
              <Link href="/contatti" className="btn btn-primary">
                Prenota l&apos;analisi gratuita <IconArrow className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <EsempioSvolto
        title="Esempio svolto: un'impresa che deve fatturare 1,09 milioni per non perdere"
        intro="Sono i valori che trovi già inseriti nel calcolatore: 180.000 € di struttura, 60.000 € di compenso del titolare, margine di contribuzione medio del 22%."
        righe={[
          { voce: "Costi di struttura annui", valore: "180.000 €" },
          { voce: "Compenso dell'imprenditore", valore: "60.000 €" },
          { voce: "Costi fissi totali", calcolo: "180.000 + 60.000", valore: "240.000 €" },
          { voce: "Margine di contribuzione medio", valore: "22%" },
          { voce: "Fatturato di pareggio", calcolo: "240.000 ÷ 0,22", valore: "1.090.909 €" },
          { voce: "Pari a, ogni mese", calcolo: "1.090.909 ÷ 12", valore: "90.909 €" },
        ]}
        risultato={{ voce: "Fatturato per un utile di 50.000 € (290.000 ÷ 0,22)", valore: "1.318.182 €" }}
      >
        <p>
          Sotto 1,09 milioni questa impresa lavora in perdita, anche con tutti i cantieri aperti. Ora la parte
          interessante: se il margine di contribuzione sale dal 22% al{" "}
          <strong className="text-navy-900">24%</strong>, il pareggio scende a 1.000.000 €. Due punti di margine
          valgono <strong className="text-navy-900">quasi 91.000 € di fatturato in meno</strong> da andare a cercare —
          un mese intero di lavoro.
        </p>
        <p>
          È il motivo per cui il metodo mette il margine prima del volume: recuperare due punti sui cantieri che hai
          già è quasi sempre più rapido, e meno rischioso, che trovare 91.000 € di nuovi lavori.
        </p>
      </EsempioSvolto>

      <ErroriComuni
        title="I 4 errori più comuni sul punto di pareggio"
        errori={[
          { t: "Lasciare fuori il compenso del titolare", d: "Se lo stipendio dell'imprenditore non è tra i costi fissi, il pareggio risulta più basso del reale: l'impresa sembra in equilibrio mentre il titolare lavora gratis." },
          { t: "Usare il margine di commessa al posto di quello di contribuzione", d: "Nella formula va il margine di contribuzione — ricavi meno soli costi diretti. Usando il margine già al netto della struttura, la struttura viene contata due volte." },
          { t: "Prendere il margine migliore invece di quello medio", d: "Il pareggio si calcola sul margine medio ponderato di tutte le commesse dell'anno, comprese quelle andate male. Usare il cantiere migliore dà un numero che non raggiungerai." },
          { t: "Calcolarlo una volta e dimenticarlo", d: "Il pareggio si sposta ogni volta che cambia la struttura: un'assunzione in ufficio, un nuovo mezzo, un affitto. Va ricalcolato a ogni decisione che tocca i costi fissi." },
        ]}
      />

      {/* Spot EdiliziaInCloud + richiesta analisi */}
      <section className="container-nie pb-6">
        <div className="mx-auto max-w-3xl">
          <AdEic desktop="wide" mobile="box" />
        </div>
      </section>

      <section className="container-nie pb-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-bg-soft p-6 sm:p-8">
          <h2 className="text-center text-2xl font-bold text-navy-900">Vuoi questi numeri sui tuoi cantieri?</h2>
          <p className="mt-2 text-center text-muted">30 minuti sui numeri della tua impresa edile, senza impegno.</p>
          <div className="mt-6"><EicForm title="Richiedi la tua analisi gratuita" /></div>
        </div>
      </section>

      <FaqSection title="Domande sul punto di pareggio" items={faq} />
      <CtaBand />
      <div className="h-20" />
    </>
  );
}
