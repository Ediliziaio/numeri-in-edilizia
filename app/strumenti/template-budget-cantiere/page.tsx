import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, FaqSection } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { AdEic } from "@/components/AdEic";
import { EicForm } from "@/components/EicForm";
import { JsonLd, toolSchema } from "@/components/JsonLd";
import { IconArrow, IconCheck, IconDoc } from "@/components/Icons";
import { site } from "@/lib/site";

const FILE = "/download/template-budget-cantiere-numeri-in-edilizia.xlsx";

export const metadata: Metadata = {
  title: "Template budget di cantiere (Excel)",
  description:
    "Template Excel gratuito per il budget di cantiere: preventivo vs consuntivo, costi diretti, quota di struttura e margine di commessa calcolato in automatico.",
  keywords: [
    "template budget cantiere excel",
    "modello budget di cantiere",
    "excel margine di commessa",
    "foglio calcolo costi cantiere",
    "budget commessa edile excel",
  ],
  alternates: { canonical: "/strumenti/template-budget-cantiere" },
  openGraph: {
    url: "/strumenti/template-budget-cantiere",
    title: "Template budget di cantiere (Excel)",
    description:
      "Preventivo vs consuntivo, costi diretti, quota di struttura e margine calcolato in automatico. Gratis, senza registrazione.",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const contenuto = [
  "Ricavi: importo di contratto e varianti approvate",
  "Costi diretti per categoria: materiali, manodopera, mezzi e noli, subappalti, trasporti, sicurezza",
  "Quota di costi di struttura, con incidenza percentuale impostabile",
  "Margine di commessa in euro e in percentuale, calcolato in automatico",
  "Colonna scostamento preventivo vs consuntivo su ogni voce",
  "Valutazione automatica del margine (in perdita / fragile / equilibrio / solida)",
  "Foglio istruzioni con i valori di riferimento e i due errori più comuni",
];

const faq = [
  {
    q: "Il template è davvero gratuito?",
    a: "Sì, e non serve lasciare l'email: il file si scarica direttamente da questa pagina. È un foglio Excel normale, senza macro e senza blocchi: puoi modificarlo e adattarlo alla tua impresa come preferisci.",
  },
  {
    q: "Come si usa il template?",
    a: "Compili la colonna Preventivo prima di iniziare il lavoro, poi aggiorni la colonna Consuntivo mentre il cantiere è aperto. La colonna Scostamento e il margine si calcolano da soli: quello che devi guardare ogni settimana è lo scostamento, perché è lì che vedi il problema mentre puoi ancora correggerlo.",
  },
  {
    q: "Che percentuale di costi di struttura devo inserire?",
    a: "Nel template è preimpostata al 15%, che è un valore tipico per le PMI edili, ma va calcolata sulla tua impresa: costi di struttura di un esercizio diviso i costi diretti dello stesso periodo. È una delle prime cose da sistemare, perché se non carichi la struttura ogni cantiere che «pareggia» in realtà perde quella percentuale.",
  },
  {
    q: "Perché la manodopera va inserita in modo diverso?",
    a: "Perché va valorizzata al costo orario reale — costo aziendale annuo diviso le ore realmente produttive — e non alla paga oraria. È l'errore che falsa di più il margine, perché la manodopera è quasi sempre la voce più pesante del cantiere.",
  },
  {
    q: "Funziona anche con Google Fogli o LibreOffice?",
    a: "Sì. È un file .xlsx standard con formule semplici: si apre e funziona anche su Google Fogli, LibreOffice Calc e Numbers.",
  },
  {
    q: "Quando conviene passare da questo foglio a un gestionale?",
    a: "Il foglio regge finché i cantieri aperti sono pochi e una sola persona lo aggiorna. Quando le commesse aumentano o più persone devono inserire dati, il costo del foglio diventa il tempo di aggiornamento e l'errore che nessuno vede.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={toolSchema({
          name: "Template budget di cantiere (Excel)",
          description:
            "Modello Excel gratuito per il budget di una commessa edile: preventivo vs consuntivo, costi diretti, quota di struttura e margine di commessa in automatico.",
          url: `${site.domain}/strumenti/template-budget-cantiere`,
        })}
      />

      <PageHero
        crumb="Template budget di cantiere"
        path="/strumenti/template-budget-cantiere"
        eyebrow="Download gratuito"
        title={<>Il budget del tuo cantiere, in un foglio già impostato</>}
        intro="Preventivo e consuntivo affiancati, costi diretti per categoria, quota di struttura e margine di commessa calcolato in automatico. Senza registrazione: il file si scarica da qui."
        cta={false}
      />

      <section className="container-nie py-12 sm:py-16">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border-2 border-brand-300 bg-brand-100/40 p-8 text-center sm:p-10">
            <span className="icon-badge mx-auto"><IconDoc /></span>
            <h2 className="mt-5 text-2xl font-bold text-navy-900">Template budget di cantiere</h2>
            <p className="mt-2 text-muted">File Excel (.xlsx) · 2 fogli · formule già pronte · nessuna registrazione</p>
            <a href={FILE} download className="btn btn-primary mt-7 text-lg px-7 py-4">
              Scarica il template <IconArrow className="arrow h-5 w-5" />
            </a>
            <p className="mt-3 text-xs text-muted">Compatibile con Excel, Google Fogli, LibreOffice e Numbers.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-nie pb-8">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-navy-900">Cosa c&apos;è dentro</h2>
            <ul className="mt-6 space-y-3">
              {contenuto.map((c) => (
                <li key={c} className="flex gap-3 rounded-2xl border border-line bg-white p-5">
                  <IconCheck className="h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-navy-900">{c}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-navy-900">Come si usa</h2>
            <div className="mt-5 space-y-4 text-muted leading-relaxed">
              <p>
                Il template segue il conto di commessa del metodo:{" "}
                <strong className="text-navy-900">
                  ricavi − costi diretti − quota di struttura = margine di commessa
                </strong>
                . La differenza rispetto a un foglio qualsiasi è la colonna{" "}
                <strong className="text-navy-900">scostamento</strong>: è quella che ti fa vedere il
                problema mentre il cantiere è ancora aperto, non a lavori finiti.
              </p>
              <p>
                Compili il <strong className="text-navy-900">preventivo</strong> prima di partire — ed
                è lì che decidi il margine, non alla fine. Poi aggiorni il{" "}
                <strong className="text-navy-900">consuntivo</strong> mentre lavori. Se una voce
                supera il 10% di scostamento, hai un problema da affrontare adesso.
              </p>
              <p>
                Due avvertenze che valgono più di tutto il resto: la{" "}
                <Link href="/risorse/costo-orario-manodopera-edile">manodopera</Link> va inserita al
                costo orario reale (non alla paga oraria) e i{" "}
                <Link href="/risorse/costi-di-struttura-impresa-edile">costi di struttura</Link> vanno
                sempre caricati. Sono i due errori che falsano il margine più di ogni altro.
              </p>
              <p>
                Se preferisci fare il conto al volo senza scaricare nulla, c&apos;è il{" "}
                <Link href="/strumenti/calcolo-margine-commessa">calcolatore del margine di commessa</Link>.
                Il metodo completo è nella guida alla{" "}
                <Link href="/risorse/gestione-commessa-edile">gestione della commessa</Link> e nel{" "}
                <Link href="/risorse/budget-impresa-edile">budget dell&apos;impresa edile</Link>.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-nie pb-6">
        <div className="mx-auto max-w-3xl">
          <AdEic desktop="wide" mobile="box" />
        </div>
      </section>

      <section className="container-nie pb-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-bg-soft p-6 sm:p-8">
          <h2 className="text-center text-2xl font-bold text-navy-900">Vuoi che lo compiliamo insieme?</h2>
          <p className="mt-2 text-center text-muted">
            30 minuti sui numeri veri dei tuoi cantieri, senza impegno.
          </p>
          <div className="mt-6"><EicForm title="Richiedi la tua analisi gratuita" /></div>
        </div>
      </section>

      <FaqSection title="Domande sul template" items={faq} />
      <CtaBand />
      <div className="h-20" />
    </>
  );
}
