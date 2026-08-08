import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StatRow, CtaBand, SectionHeading, FaqSection, ProcessSteps } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { AdEic } from "@/components/AdEic";
import { PageImage } from "@/components/PageImage";
import { JsonLd, personSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { IconBuilding, IconSearch, IconCompass, IconWallet, IconCheck, IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Nati dall'incontro tra cantiere e controllo di gestione: aiutiamo gli imprenditori edili a trasformare il fatturato in utile reale.",
  alternates: { canonical: "/chi-sono" },
  openGraph: { url: "/chi-sono", images: ["/opengraph-image"] },
};

const values = [
  { icon: IconBuilding, t: "I numeri sono per gli imprenditori", d: "Non solo per i commercialisti. Devono essere in mano a chi decide, ogni giorno." },
  { icon: IconSearch, t: "Pochi indicatori, usati davvero", d: "Meglio pochi numeri letti ogni settimana che cento report che nessuno apre." },
  { icon: IconCompass, t: "Il margine si governa in cantiere", d: "Non si scopre in bilancio, quando è troppo tardi per intervenire." },
  { icon: IconWallet, t: "L'imprenditore si paga", d: "Uno stipendio pianificato come voce di budget, non gli avanzi di fine anno." },
];

const comparison = [
  { voce: "Quando ti dà i numeri", commercialista: "A consuntivo, mesi dopo", gestionale: "In tempo reale, se sai leggerlo", noi: "In tempo reale, spiegati" },
  { voce: "Margine per commessa", commercialista: "No", gestionale: "A volte", noi: "Sì, al centro di tutto" },
  { voce: "Linguaggio", commercialista: "Da ragioniere", gestionale: "Da ingegnere", noi: "Da cantiere" },
  { voce: "Ti insegna a decidere", commercialista: "No", gestionale: "No", noi: "Sì, è il cuore del metodo" },
  { voce: "Pensato per l'edilizia", commercialista: "No", gestionale: "Raramente", noi: "Solo per l'edilizia" },
];

const comeLavoriamo = [
  { n: "1", title: "Partiamo dai tuoi numeri", text: "Non da esempi da manuale. Nell'analisi gratuita mettiamo sul tavolo i dati veri della tua impresa e vediamo dove il margine si perde." },
  { n: "2", title: "Mettiamo ordine", text: "Riclassifichiamo costi e ricavi in logica di cantiere. Pochi indicatori chiari, non un cruscotto da ingegnere gestionale." },
  { n: "3", title: "Leggiamo il margine insieme", text: "Commessa per commessa, contro il preventivo. Vedi quali cantieri guadagnano e quali erodono utile, mentre puoi ancora intervenire." },
  { n: "4", title: "Ti rendiamo autonomo", text: "L'obiettivo non è renderti dipendente da noi. È lasciarti in mano un metodo che usi da solo, ogni settimana." },
];

const faq = [
  {
    q: "Chi è Numeri in Edilizia?",
    a: "Numeri in Edilizia è un progetto di formazione e consulenza di controllo di gestione dedicato esclusivamente alle imprese edili italiane. Aiutiamo l'imprenditore edile a leggere i propri numeri, governare il margine di commessa e trasformare il fatturato in utile reale.",
  },
  {
    q: "In cosa siete diversi da un commercialista?",
    a: "Il commercialista tiene la contabilità e redige il bilancio: fotografa il passato. Noi lavoriamo prima e durante, con il controllo di gestione: ti diamo il margine di ogni cantiere mentre è ancora aperto, quando puoi ancora intervenire. I due ruoli sono complementari, non alternativi.",
  },
  {
    q: "Lavorate solo con imprese edili?",
    a: "Sì. Il nostro metodo è verticale sull'edilizia: costruzioni, ristrutturazioni, serramenti, impianti, carpenteria, movimento terra. Questo ci permette di parlare la lingua del cantiere e di conoscere i numeri critici di ogni settore.",
  },
  {
    q: "Serve essere bravi con i numeri per lavorare con voi?",
    a: "No. Il metodo è pensato per l'imprenditore edile, non per il ragioniere. Ti diamo pochi indicatori chiari da leggere in dieci minuti e ti accompagniamo finché non li usi con naturalezza.",
  },
  {
    q: "Lavorate con il mio commercialista?",
    a: "Volentieri. Non gli togliamo lavoro: gli parliamo. Il commercialista tiene la contabilità, noi la trasformiamo in numeri di gestione che tu puoi usare per decidere. Quando i due ruoli dialogano, tu ci guadagni due volte.",
  },
  {
    q: "Serve un software o un gestionale per lavorare con voi?",
    a: "Per partire no: il metodo funziona sui dati che già hai, anche su un foglio. Se poi vuoi tenere margini, SAL e scadenze collegati alle commesse in automatico, usiamo EdiliziaInCloud, il gestionale per imprese edili. Ma prima viene il modo di leggere i numeri, poi lo strumento.",
  },
  {
    q: "Quanto è grande deve essere la mia impresa?",
    a: "Il metodo serve tanto all'impresa da 3 persone quanto a quella da 50. Anzi, nelle imprese più piccole ogni commessa in perdita pesa di più: è lì che leggere il margine in tempo cambia davvero l'anno.",
  },
];

export default function ChiSonoPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <PageHero
        crumb="Chi siamo"
        path="/chi-sono"
        eyebrow="Chi siamo"
        title={<>Parliamo la lingua del cantiere e quella dei numeri</>}
        intro="Numeri in Edilizia nasce per colmare la distanza tra chi costruisce e chi tiene i conti. Perché il controllo di gestione, spiegato bene, non è roba da ragionieri: è lo strumento che fa la differenza tra un'impresa che fattura e una che guadagna."
        cta={false}
      />

      {/* STORIA / MISSIONE */}
      <section className="container-nie py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <Reveal>
            <div className="space-y-5 text-lg text-muted leading-relaxed">
              <p>
                Abbiamo visto troppi imprenditori edili bravissimi in cantiere e lasciati soli davanti
                ai numeri. Gente capace di tirare su un edificio, ma senza uno strumento per sapere se
                quell'edificio li ha fatti guadagnare o rimetterci.
              </p>
              <p>
                Il commercialista arriva a fine anno, il gestionale «da ingegnere» resta inutilizzato,
                e intanto il margine si perde in cantiere, un preventivo a intuito e una variante non
                fatturata alla volta.
              </p>
              <p className="text-navy-900 font-medium">
                La nostra missione è semplice: mettere in mano all'imprenditore edile pochi numeri
                chiari e un metodo per usarli, così ogni decisione — un preventivo, una gara, una
                variante — nasce dai dati e non dalla speranza.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white p-3">
              <PageImage src="/images/pages/hero-chisono.jpg" alt="Cantiere edile con gru: l'impresa che mette i numeri sotto controllo" />
            </div>
            <div className="mt-6 rounded-[1.75rem] bg-navy-900 text-white p-8">
              <h3 className="text-lg font-bold">In sintesi</h3>
              <div className="mt-6 space-y-5">
                {[
                  ["Focus", "Solo imprese edili"],
                  ["Metodo", "3 pilastri semplici"],
                  ["Approccio", "La lingua del cantiere"],
                  ["Obiettivo", "Fatturato → utile reale"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-brand-300">{k}</span>
                    <span className="font-display font-semibold">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IL PROBLEMA CHE VEDIAMO */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-nie grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Perché esistiamo"
              title="Il paradosso dell'impresa edile"
              intro="Più cresci, più corri, e a fine anno resta meno di prima. Non è sfortuna: è mancanza di controllo."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                In edilizia il fatturato è ingannevole. Puoi aprire cantieri, assumere, comprare mezzi
                e sembrare in piena crescita — mentre due commesse su cinque lavorano in perdita e nessuno
                se ne accorge finché non arriva il bilancio.
              </p>
              <p>
                Il problema non è la voglia di fare, che agli imprenditori edili non manca mai. È che
                nessuno ha mai messo loro in mano gli strumenti per <strong className="text-navy-900">leggere</strong>
                {" "}i numeri della propria impresa. Noi facciamo esattamente questo: li traduciamo e li
                rendiamo usabili, ogni settimana.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COME SIAMO DIVERSI — tabella */}
      <section className="container-nie py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Come siamo diversi"
            title="Commercialista, gestionale generico e Numeri in Edilizia"
            intro="Non sostituiamo il tuo commercialista: facciamo una cosa diversa e complementare."
            className="mb-12"
          />
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-4 pr-4 text-sm font-semibold text-muted"></th>
                  <th className="px-4 py-4 text-sm font-semibold text-navy-900">Commercialista</th>
                  <th className="px-4 py-4 text-sm font-semibold text-navy-900">Gestionale generico</th>
                  <th className="rounded-t-2xl bg-navy-900 px-4 py-4 text-sm font-bold text-white">Numeri in Edilizia</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.voce} className="border-b border-line">
                    <td className="py-4 pr-4 text-sm font-semibold text-navy-900">{row.voce}</td>
                    <td className="px-4 py-4 text-sm text-muted">{row.commercialista}</td>
                    <td className="px-4 py-4 text-sm text-muted">{row.gestionale}</td>
                    <td className={`bg-navy-900/[0.03] px-4 py-4 text-sm font-medium text-navy-900 ${i === comparison.length - 1 ? "rounded-b-2xl" : ""}`}>
                      <span className="inline-flex items-center gap-2"><IconCheck className="h-4 w-4 text-brand-600" />{row.noi}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* COME LAVORIAMO CON TE */}
      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="container-nie">
          <Reveal>
            <SectionHeading
              align="center"
              tone="dark"
              eyebrow="Come lavoriamo con te"
              title="Nessuna magia. Un percorso lineare, sui tuoi numeri"
              intro="Non ti consegniamo un report e ti salutiamo. Ti stiamo accanto finché i numeri non li leggi da solo."
              className="mb-14"
            />
          </Reveal>
          <ProcessSteps steps={comeLavoriamo} />
          <Reveal>
            <div className="mt-12 text-center">
              <Link href="/contatti" className="btn btn-primary">
                Prenota l'analisi gratuita <IconArrow className="arrow h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALORI */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-nie">
          <Reveal>
            <SectionHeading align="center" eyebrow="In cosa crediamo" title="Quattro convinzioni che guidano tutto" className="mb-14" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 90}>
                <div className="h-full rounded-[1.5rem] bg-white p-7 border border-line card-hover">
                  <span className="icon-badge"><v.icon /></span>
                  <h3 className="mt-5 font-bold text-navy-900 leading-snug">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHI FIRMA IL METODO — entità autore (E-E-A-T) */}
      <section className="container-nie py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-line bg-white p-8 sm:p-10">
            <span className="eyebrow">Chi firma il metodo</span>
            <h2 className="mt-4 text-[1.7rem] sm:text-[2.1rem] font-bold text-navy-900 leading-tight">
              {site.author}
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">{site.authorBio}</p>
            <p className="mt-4 text-muted leading-relaxed">
              Ho passato gli ultimi anni dentro le imprese edili, a guardare i numeri veri: preventivi,
              rapportini, fatture fornitore, margini di commessa. Numeri in Edilizia nasce da lì — non
              da un manuale, ma dalla constatazione che quasi nessun imprenditore edile ha in mano gli
              strumenti per sapere quanto guadagna mentre lavora. Tutte le guide che trovi in questo
              sito le scrivo io, con la lingua del cantiere.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/risorse" className="btn btn-ghost">
                Leggi le guide <IconArrow className="arrow h-4 w-4" />
              </Link>
              <Link href="/contatti" className="btn btn-primary">
                {site.cta.primaryLabel} <IconArrow className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* MANIFESTO */}
      <section className="container-nie py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Il nostro manifesto</span>
            <blockquote className="mt-6 font-display text-2xl sm:text-[2rem] font-bold leading-snug text-navy-900">
              «Un'impresa edile non fallisce perché lavora poco. Fallisce perché non sa quanto guadagna
              mentre lavora. Il nostro compito è fartelo sapere — in tempo, e nella tua lingua.»
            </blockquote>
          </div>
        </Reveal>
      </section>

      {/* Spot EdiliziaInCloud */}
      <section className="container-nie pb-8">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-center text-muted">
              Noi ti diamo il metodo. Il gestionale che lo mette in pratica ogni giorno — commesse,
              margini, DDT, fatturazione — è <strong className="text-navy-900">EdiliziaInCloud</strong>.
            </p>
            <AdEic desktop="hero" mobile="box" />
          </div>
        </Reveal>
      </section>

      {/* STAT BAND */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-50" />
        <div className="container-nie relative">
          <StatRow
            tone="dark"
            items={[
              { value: "100%", label: "focus sull'impresa edile, non sul generico" },
              { value: "6", label: "settori edili con contenuti dedicati" },
              { value: "10 min", label: "per leggere i tuoi numeri chiave" },
              { value: "€0", label: "per la prima analisi dei tuoi numeri" },
            ]}
          />
        </div>
      </section>

      <FaqSection title="Domande su Numeri in Edilizia" items={faq} />

      <CtaBand />
      <div className="h-20" />
    </>
  );
}
