import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, FaqSection } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CostoOrarioCalc } from "@/components/calc/CostoOrarioCalc";
import { IconArrow } from "@/components/Icons";
import { AdEic } from "@/components/AdEic";
import { EsempioSvolto, ErroriComuni } from "@/components/CalcGuide";
import { EicForm } from "@/components/EicForm";
import { JsonLd, toolSchema, howToSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Calcolo costo orario manodopera edile",
  description:
    "Calcolatore gratuito del costo orario reale di un operaio edile: dal lordo in busta alle ore produttive. Il numero da usare nei preventivi.",
  keywords: [
    "calcolo costo orario manodopera edile",
    "costo orario operaio edile",
    "calcolatore costo orario",
    "quanto costa un operaio edile all'ora",
    "costo aziendale operaio edile",
  ],
  alternates: { canonical: "/strumenti/calcolo-costo-orario-manodopera" },
  openGraph: { url: "/strumenti/calcolo-costo-orario-manodopera",
    title: "Calcolo costo orario manodopera edile",
    description: "Dal lordo in busta al costo orario reale sulle ore produttive. Gratis, senza registrazione.",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const faq = [
  {
    q: "Come si calcola il costo orario di un operaio edile?",
    a: "Si divide il costo aziendale annuo della persona (lordo più contributi, TFR, mensilità aggiuntive, casse edili, DPI e formazione) per le ore realmente produttive, non per quelle contrattuali. Il risultato è quasi sempre molto più alto della paga oraria percepita.",
  },
  {
    q: "Cosa sono le ore produttive?",
    a: "Sono le ore effettivamente lavorate in cantiere su attività che producono valore. Dalle ore contrattuali vanno tolte ferie, permessi, festività, malattie, formazione, trasferte e spostamenti, attese per materiali o mezzi, maltempo e fermi. In edilizia sono spesso il 70-80% delle ore pagate.",
  },
  {
    q: "Che percentuale di oneri devo inserire?",
    a: "Dipende dall'inquadramento e dal contratto applicato: come ordine di grandezza, nelle imprese edili gli oneri a carico azienda si collocano tipicamente tra il 40% e il 55% del lordo. Per un calcolo preciso chiedi il costo aziendale esatto al tuo consulente del lavoro.",
  },
  {
    q: "Perché il costo orario reale è più alto della paga oraria?",
    a: "Per due effetti che si sommano: al lordo si aggiungono oneri, TFR e mensilità aggiuntive (il costo sale), e le ore su cui dividere sono meno di quelle pagate (il divisore scende). Il risultato è che il costo reale può facilmente essere il doppio della paga oraria.",
  },
  {
    q: "I dati che inserisco vengono salvati?",
    a: "No. Il calcolo avviene interamente nel tuo browser: nessun dato viene inviato o memorizzato, e non serve registrarsi né lasciare un'email.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={toolSchema({ name: "Calcolatore costo orario manodopera edile", description: "Calcola il costo orario reale di un operaio edile: costo aziendale diviso le ore realmente produttive.", url: `${site.domain}/strumenti/calcolo-costo-orario-manodopera` })} />
      <JsonLd
        data={howToSchema({
          name: "Come calcolare il costo orario della manodopera edile",
          description: "Procedura per calcolare il costo orario reale di un operaio edile: costo aziendale annuo diviso le ore realmente produttive.",
          url: `${site.domain}/strumenti/calcolo-costo-orario-manodopera`,
          steps: [
          { name: "Parti dalla retribuzione lorda annua", text: "Prendi la retribuzione lorda annua dell'operaio, comprese tredicesima ed eventuali mensilità aggiuntive." },
          { name: "Aggiungi gli oneri a carico dell'azienda", text: "Somma contributi previdenziali, TFR, assicurazione e cassa edile: sono una percentuale del lordo che dipende dal contratto applicato." },
          { name: "Aggiungi i costi annui per persona", text: "Somma DPI, formazione obbligatoria, visite mediche e attrezzatura individuale. Il totale è il costo aziendale annuo." },
          { name: "Calcola le ore realmente produttive", text: "Dalle ore contrattuali annue togli ferie, malattia, festività, formazione, spostamenti e tempi morti." },
          { name: "Dividi il costo aziendale per le ore produttive", text: "Il risultato è il costo orario reale: è il numero da usare nei preventivi, non la paga oraria in busta." },
          ],
        })}
      />
      <PageHero
        crumb="Calcolo costo orario manodopera"
        path="/strumenti/calcolo-costo-orario-manodopera"
        eyebrow="Calcolatore gratuito"
        title={<>Quanto ti costa davvero un&apos;ora di manodopera</>}
        intro="La paga oraria non è il costo orario. Inserisci i tuoi dati e ottieni il costo aziendale reale sulle ore produttive: è il numero da portare in preventivo."
        cta={false}
      />

      <section className="container-nie py-12 sm:py-16">
        <CostoOrarioCalc />
      </section>

      <section className="container-nie pb-8">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-navy-900">Come funziona il calcolo</h2>
            <div className="mt-5 space-y-4 text-muted leading-relaxed">
              <p>
                Il costo orario reale si ottiene con una divisione sola:{" "}
                <strong className="text-navy-900">costo aziendale annuo ÷ ore produttive annue</strong>. La
                difficoltà non sta nella formula, ma nel costruire correttamente i due termini.
              </p>
              <p>
                Il <strong className="text-navy-900">costo aziendale</strong> non è il lordo in busta: comprende
                contributi previdenziali e assistenziali, TFR maturato, mensilità aggiuntive, casse edili e fondi
                di settore, più vestiario, DPI, formazione obbligatoria e sorveglianza sanitaria.
              </p>
              <p>
                Le <strong className="text-navy-900">ore produttive</strong> non sono le ore da contratto: vanno
                tolte ferie, permessi, festività, malattie, formazione, trasferte e spostamenti tra cantieri,
                attese per materiali o mezzi, maltempo e fermi. È il moltiplicatore che quasi nessuno considera —
                e quello che sposta di più il risultato.
              </p>
              <p>
                Se vuoi il metodo completo con gli esempi, lo trovi nella guida al{" "}
                <Link href="/risorse/costo-orario-manodopera-edile">costo orario della manodopera edile</Link>.
                Per capire come quel numero entra nel prezzo, continua con il{" "}
                <Link href="/risorse/preventivo-edile-come-farlo">preventivo edile</Link>.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/strumenti/calcolo-margine-commessa" className="btn btn-ghost">
                Calcola il margine di commessa <IconArrow className="arrow h-4 w-4" />
              </Link>
              <Link href="/contatti" className="btn btn-primary">
                Prenota l&apos;analisi gratuita <IconArrow className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <EsempioSvolto
        title="Esempio svolto: da 16 € a 29 € l'ora"
        intro="Sono i valori che trovi già inseriti nel calcolatore: un operaio con 28.000 € di retribuzione lorda annua. Ecco il conto riga per riga."
        righe={[
          { voce: "Retribuzione lorda annua", valore: "28.000 €" },
          { voce: "Oneri a carico dell'azienda", calcolo: "45% del lordo: contributi, TFR, assicurazione, cassa edile", valore: "12.600 €" },
          { voce: "Altri costi annui per persona", calcolo: "DPI, formazione, visite mediche, attrezzatura", valore: "1.200 €" },
          { voce: "Costo aziendale annuo", calcolo: "28.000 + 12.600 + 1.200", valore: "41.800 €" },
          { voce: "Ore contrattuali annue", valore: "1.750 ore" },
          { voce: "Ore non produttive", calcolo: "18%: ferie, malattia, festività, spostamenti, tempi morti", valore: "− 315 ore" },
          { voce: "Ore realmente produttive", calcolo: "1.750 − 315", valore: "1.435 ore" },
        ]}
        risultato={{ voce: "Costo orario reale (41.800 ÷ 1.435)", valore: "29,13 €/ora" }}
      >
        <p>
          La paga oraria nominale di questo operaio è <strong className="text-navy-900">16 €</strong> (28.000 ÷ 1.750).
          Il costo su ore teoriche è 23,89 €. Il costo reale è <strong className="text-navy-900">29,13 €</strong>:
          l&apos;82% in più della paga in busta. Chi fa i preventivi a 16 o anche a 24 € l&apos;ora sta vendendo
          la manodopera sotto costo, su ogni cantiere, senza vederlo.
        </p>
        <p>
          Nota che è un esempio: oneri e ore non produttive cambiano con il contratto applicato, il livello e
          l&apos;organizzazione dell&apos;impresa. Il punto non sono questi numeri, ma rifare il conto con i tuoi.
        </p>
      </EsempioSvolto>

      <ErroriComuni
        title="I 4 errori più comuni nel calcolo del costo orario"
        errori={[
          { t: "Usare la paga oraria in busta", d: "È l'errore più diffuso e il più costoso: la paga oraria non contiene contributi, TFR, ferie, né le ore pagate e non lavorate. Non è un costo, è una voce del cedolino." },
          { t: "Dividere per le ore contrattuali", d: "Le ore che paghi non sono le ore che produci. Ferie, malattia, festività, formazione e spostamenti vanno tolti dal divisore: meno ore produttive significa un costo orario più alto." },
          { t: "Dimenticare i costi per persona", d: "DPI, formazione obbligatoria, visite mediche, attrezzatura individuale, telefono, mezzo. Sono costi che esistono solo perché esiste quell'operaio, e vanno nel suo costo orario." },
          { t: "Usare un solo costo per tutta la squadra", d: "Un operaio specializzato e un manovale non costano uguale. Se le lavorazioni richiedono profili diversi, servono costi orari diversi, altrimenti sbagli il preventivo in entrambe le direzioni." },
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

      <FaqSection title="Domande sul costo orario" items={faq} />
      <CtaBand />
      <div className="h-20" />
    </>
  );
}
