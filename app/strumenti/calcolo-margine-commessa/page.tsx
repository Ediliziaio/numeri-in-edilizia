import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, FaqSection } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { MargineCommessaCalc } from "@/components/calc/MargineCommessaCalc";
import { IconArrow } from "@/components/Icons";
import { AdEic } from "@/components/AdEic";
import { EsempioSvolto, ErroriComuni } from "@/components/CalcGuide";
import { EicForm } from "@/components/EicForm";
import { JsonLd, toolSchema, howToSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";

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
    a: "Non esiste una soglia valida per ogni impresa. Confronta il saldo con costi effettivamente inclusi, rischi, durata del lavoro e obiettivi della tua azienda. Un risultato positivo non equivale a utile netto né a liquidità disponibile.",
  },
  {
    q: "Che percentuale di costi di struttura devo inserire?",
    a: "Va calcolata sulla tua impresa: costi di struttura di un esercizio diviso i costi diretti dello stesso periodo. Il 15% precompilato è soltanto un'ipotesi di esempio, non un valore raccomandato per la tua impresa.",
  },
  {
    q: "Che differenza c'è tra margine di contribuzione e margine di commessa?",
    a: "Il margine di contribuzione è ricavi meno costi variabili. Il calcolatore sottrae prima i costi diretti che inserisci e poi la quota di struttura: la prima differenza coincide con la contribuzione soltanto se le voci inserite sono tutte variabili. La classificazione va verificata sui dati aziendali.",
  },
  {
    q: "Posso usarlo su un cantiere già in corso?",
    a: "Sì, ed è l'uso più utile. Inserendo i costi sostenuti finora e i ricavi maturati vedi il margine mentre il cantiere è ancora aperto — cioè quando puoi ancora intervenire su acquisti, squadre e varianti.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={toolSchema({ name: "Calcolatore margine di commessa", description: "Calcola il margine di commessa di un cantiere edile: ricavi meno costi diretti e quota di costi di struttura.", url: `${site.domain}/strumenti/calcolo-margine-commessa` })} />
      <JsonLd
        data={howToSchema({
          name: "Come calcolare il margine di una commessa edile",
          description: "Procedura per calcolare il margine di commessa: ricavi meno costi diretti di cantiere meno quota di costi di struttura.",
          url: `${site.domain}/strumenti/calcolo-margine-commessa`,
          steps: [
          { name: "Determina i ricavi della commessa", text: "Somma l'importo di contratto e le sole varianti approvate per iscritto e fatturabili." },
          { name: "Somma i costi diretti di cantiere", text: "Materiali con sfrido, manodopera al costo orario reale, mezzi e noli, subappalti, trasporti, smaltimenti e oneri di sicurezza specifici." },
          { name: "Calcola il margine di contribuzione", text: "Sottrai i costi diretti dai ricavi: è quanto il cantiere contribuisce a coprire i costi fissi dell'impresa." },
          { name: "Sottrai la quota di costi di struttura", text: "Applica ai costi diretti l'incidenza percentuale dei costi di struttura della tua impresa e sottrai l'importo ottenuto." },
          { name: "Leggi il margine in percentuale sui ricavi", text: "Dividi il margine per i ricavi solo se maggiori di zero. Valuta il risultato con le ipotesi e i costi inclusi, senza applicare soglie universali." },
          ],
        })}
      />
      <PageHero
        crumb="Calcolo margine di commessa"
        path="/strumenti/calcolo-margine-commessa"
        eyebrow="Calcolatore gratuito"
        title={<>Quanto stai guadagnando davvero su questo cantiere</>}
        intro="Inserisci ricavi, costi diretti e quota di struttura: ottieni il margine di commessa in euro e sui ricavi. Puoi scaricare ipotesi e risultati in un riepilogo CSV."
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

      <EsempioSvolto
        title="Esempio svolto: una commessa da 120.000 € che sembra sana"
        intro="Esempio illustrativo, non dati di un cliente: sono i valori che trovi già inseriti nel calcolatore. A colpo d'occhio la commessa guadagna 19.000 €. Caricata la struttura, il quadro cambia."
        righe={[
          { voce: "Ricavi della commessa", calcolo: "contratto + varianti fatturabili", valore: "120.000 €" },
          { voce: "Materiali", valore: "45.000 €" },
          { voce: "Manodopera", calcolo: "al costo orario reale", valore: "30.000 €" },
          { voce: "Mezzi e noli", valore: "8.000 €" },
          { voce: "Subappalti", valore: "15.000 €" },
          { voce: "Altri costi diretti", calcolo: "trasporti, smaltimenti, sicurezza", valore: "3.000 €" },
          { voce: "Totale costi diretti", valore: "101.000 €" },
          { voce: "Margine prima della struttura", calcolo: "120.000 − 101.000 = 15,8% dei ricavi", valore: "19.000 €" },
          { voce: "Quota di costi di struttura", calcolo: "15% dei costi diretti", valore: "− 15.150 €" },
        ]}
        risultato={{ voce: "Margine di commessa (3,2% dei ricavi)", valore: "3.850 €" }}
      >
        <p>
          Dei 19.000 € che sembravano guadagno ne restano <strong className="text-navy-900">3.850</strong>: il 3,2%
          dei ricavi. È una commessa in <strong className="text-navy-900">zona fragile</strong> — basta un imprevisto
          da 4.000 €, una variante non fatturata o qualche giornata in più, e va in perdita.
        </p>
        <p>
          È il motivo per cui considerare solo ricavi meno costi diretti non basta: il primo saldo può coprire i suoi
          costi, non che l&apos;impresa ci guadagna. La differenza tra i due numeri è spiegata nella guida a{" "}
          <Link href="/risorse/margine-di-contribuzione-edilizia">margine di contribuzione e margine di commessa</Link>.
          {" "}Per la definizione di contribuzione e la distinzione fra costi variabili e fissi, consulta anche la <a href="https://www.accaglobal.com/gb/en/student/exam-support-resources/fundamentals-exams-study-resources/f5/technical-articles/CVP-analysis.html">guida ACCA alla relazione fra costi, volumi e risultati</a>.
        </p>
      </EsempioSvolto>

      <ErroriComuni
        title="I 4 errori che falsano il margine di commessa"
        errori={[
          { t: "Non caricare i costi di struttura", d: "Ufficio, amministrazione, assicurazioni e compenso del titolare non si vedono in cantiere, ma li pagano i cantieri. Senza quella quota, una commessa che «pareggia» in realtà perde." },
          { t: "Valorizzare la manodopera alla paga oraria", d: "La manodopera è quasi sempre la voce più pesante. Inserita alla paga in busta invece che al costo orario reale, gonfia il margine di tutto il cantiere." },
          { t: "Contare le varianti non ancora approvate", d: "Tra i ricavi vanno solo le varianti approvate per iscritto e fatturabili. Il lavoro extra fatto sulla parola è un costo certo e un ricavo ipotetico." },
          { t: "Fare il conto solo a fine lavori", d: "A cantiere chiuso il margine è un'autopsia. Il calcolo serve a lavori in corso, quando puoi ancora intervenire su acquisti, squadre e varianti." },
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

      <FaqSection title="Domande sul margine di commessa" items={faq} />
      <CtaBand />
      <div className="h-20" />
    </>
  );
}
