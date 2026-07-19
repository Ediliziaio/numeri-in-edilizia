import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("kpi-impresa-edile")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "kpi impresa edile",
    "indicatori impresa edile",
    "kpi cantiere",
    "indicatori di performance edilizia",
    "quali kpi monitorare impresa edile",
  ],
  alternates: { canonical: "/risorse/kpi-impresa-edile" },
  openGraph: { title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Quali KPI deve monitorare un'impresa edile?",
    a: "I più utili sono pochi: margine di commessa (reale vs preventivo), margine medio d'impresa, scostamento costi/tempi per cantiere, produttività della manodopera (ore produttive), incasso previsto a 60 giorni e posizione di cassa. Sono questi a dire, in dieci minuti, come sta davvero l'impresa.",
  },
  {
    q: "Qual è il KPI più importante in edilizia?",
    a: "Il margine di commessa reale confrontato col preventivo. È il numero che ti dice se ogni cantiere sta mantenendo la promessa fatta in offerta, mentre puoi ancora intervenire. Gli altri indicatori servono a spiegare perché quel margine cresce o si erode.",
  },
  {
    q: "Quanti KPI servono davvero?",
    a: "Pochi. Meglio 5-6 indicatori letti ogni settimana che cento metriche che nessuno apre. In un'impresa edile il rischio non è avere troppi pochi numeri, ma affogare in report che non guidano nessuna decisione.",
  },
  {
    q: "Ogni quanto vanno letti i KPI?",
    a: "I KPI operativi (margine per commessa, avanzamento, scostamenti) una volta a settimana; quelli finanziari e di cassa anche più spesso nei periodi critici; quelli d'impresa (margine medio, utile, struttura) mensilmente. La costanza conta più della frequenza.",
  },
  {
    q: "Servono KPI anche per una piccola impresa edile?",
    a: "Sì, anzi di più: in un'impresa piccola una sola commessa in perdita pesa moltissimo sull'anno. Bastano tre o quattro indicatori chiari da leggere in pochi minuti per accorgersi in tempo dei cantieri a rischio.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        «Bisogna tenere sotto controllo i numeri». Vero. Ma quali? Molti imprenditori edili, quando
        provano a farlo, finiscono sepolti sotto fatturati, estratti conto e tabelle che non dicono
        niente di utile. Il problema non è avere pochi dati: è non sapere <strong>quali guardare</strong>.
        Un KPI — indicatore chiave di performance — è un numero che, da solo, ti fa prendere una
        decisione. Qui trovi i pochi che contano davvero per un'impresa edile, e come leggerli in
        dieci minuti a settimana.
      </p>

      <h2>Cos'è un KPI (e cosa non lo è)</h2>
      <p>
        Un KPI è un numero <strong>azionabile</strong>: quando lo leggi, cambi qualcosa. Il fatturato
        del mese, da solo, non è un KPI: è un dato. Il <em>margine</em> di quel fatturato, confrontato
        col preventivo, sì — perché ti dice se intervenire. La regola è semplice: se un numero non ti
        fa decidere nulla, non è un KPI, è rumore.
      </p>

      <h2>I 6 KPI che contano per un'impresa edile</h2>
      <h3>1. Margine di commessa (reale vs preventivo)</h3>
      <p>
        Il re di tutti. Per ogni cantiere aperto: quanto stai guadagnando davvero rispetto a quanto
        avevi promesso in offerta. È il KPI che ti fa correggere un lavoro <em>prima</em> che chiuda.
        La sua base è la <Link href="/risorse/gestione-commessa-edile">gestione della commessa</Link>.
      </p>
      <h3>2. Margine medio d'impresa</h3>
      <p>
        La media pesata dei margini di tutte le commesse. Ti dice se l'azienda, nel suo insieme, sta
        coprendo i <Link href="/risorse/costi-di-struttura-impresa-edile">costi di struttura</Link> e
        facendo utile. Se il singolo cantiere va e l'impresa no, il problema è qui.
      </p>
      <h3>3. Scostamento costi e tempi</h3>
      <p>
        Di quanto stai sforando budget e cronoprogramma su ogni cantiere. Uno scostamento sopra il
        10% è un campanello: qualcosa nel preventivo o nell'esecuzione non torna.
      </p>
      <h3>4. Produttività della manodopera</h3>
      <p>
        Le ore realmente produttive sul totale pagato. È il moltiplicatore nascosto del{" "}
        <Link href="/risorse/costo-orario-manodopera-edile">costo orario</Link>: ogni ora recuperata
        da attese e spostamenti abbassa il costo e alza il margine, a parità di stipendi.
      </p>
      <h3>5. Incasso previsto a 60 giorni</h3>
      <p>
        Quanto entrerà nelle prossime settimane (SAL emessi, fatture in scadenza). È il primo passo
        per governare la <Link href="/risorse/liquidita-impresa-edile">liquidità</Link> e non trovarti
        senza cassa in un mese in utile.
      </p>
      <h3>6. Posizione di cassa</h3>
      <p>
        Quanto capitale hai «immobilizzato» nei cantieri (costi anticipati + crediti da incassare).
        In edilizia si può fallire con l'ordine pieno: questo KPI ti avvisa prima.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={75} sublabel="ore produttive tipiche" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Un KPI operativo che vale oro</p>
            <p className="mt-2 text-muted">
              Nelle imprese edili le ore davvero produttive sono spesso il 70-80% di quelle pagate.
              Monitorare la produttività e recuperare anche solo 5 punti significa margine in più su
              ogni cantiere, senza toccare le paghe.
            </p>
          </div>
        </div>
      </figure>

      <h2>Storici e predittivi</h2>
      <p>
        I KPI si dividono in due famiglie. Gli <strong>storici</strong> fotografano ciò che è già
        successo (margine consuntivo, scostamenti a fine cantiere): servono a imparare. I{" "}
        <strong>predittivi</strong> anticipano (margine stimato a finire, incasso previsto,
        avanzamento vs cronoprogramma): servono a decidere. Un'impresa che guarda solo gli storici
        guida guardando lo specchietto retrovisore.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Il cruscotto di chi decide sui dati</p>
        <p className="mt-1 text-sm text-muted">Pochi indicatori, letti ogni settimana: il margine smette di essere una sorpresa e diventa una linea leggibile.</p>
        <div className="mt-6"><AreaTrend points={[22, 26, 24, 32, 36, 42, 48, 55]} labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
      </figure>

      <h2>L'errore da evitare: il cruscotto da ingegnere</h2>
      <p>
        Molti software mostrano decine di grafici. Bello da vedere, inutile da usare. Il valore non è
        nella quantità di metriche, ma nella <strong>lettura costante di poche</strong>. Meglio sei
        numeri guardati ogni lunedì che sessanta guardati mai. È il principio del{" "}
        <Link href="/metodo">metodo Numeri in Edilizia</Link>: pochi indicatori, nella lingua del
        cantiere, che portano a una decisione.
      </p>

      <h2>Come partire, in pratica</h2>
      <ol>
        <li>Scegli i tuoi 5-6 KPI (parti dal margine di commessa).</li>
        <li>Definisci una soglia di allerta per ciascuno (es. scostamento &gt; 10%).</li>
        <li>Fissa un appuntamento fisso settimanale per leggerli (dieci minuti).</li>
        <li>Per ogni KPI fuori soglia, decidi <em>una</em> azione.</li>
        <li>Rivedi le soglie ogni trimestre.</li>
      </ol>
      <p>
        Vuoi capire quali KPI mettere sotto controllo per la <em>tua</em> impresa e come leggerli senza
        diventare un ragioniere? Partiamo dai tuoi numeri reali nell'{" "}
        <Link href="/contatti">analisi gratuita</Link>: 30 minuti, senza impegno.
      </p>
    </ArticleShell>
  );
}
