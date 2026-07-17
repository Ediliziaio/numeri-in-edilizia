import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareBars, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("costo-orario-manodopera-edile")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "costo orario manodopera edile",
    "costo operaio edile",
    "costo aziendale operaio",
    "ore produttive cantiere",
    "quanto costa un operaio edile all'ora",
  ],
  alternates: { canonical: "/risorse/costo-orario-manodopera-edile" },
  openGraph: { title: article.title, description: article.description, type: "article", images: ["/opengraph-image"] },
};

const faq = [
  {
    q: "Quanto costa davvero un operaio edile all'ora?",
    a: "Molto più della paga oraria: al lordo di contributi, TFR, mensilità aggiuntive, ferie, permessi, festività, il costo aziendale è tipicamente il 70–100% in più della retribuzione netta percepita. Diviso per le sole ore produttive (non quelle teoriche), il costo orario reale può facilmente raddoppiare rispetto alla paga base.",
  },
  {
    q: "Cosa sono le ore produttive?",
    a: "Sono le ore effettivamente lavorate in cantiere su attività che producono valore. Dalle ore contrattuali annue vanno tolte ferie, permessi, malattie, festività, formazione, trasferte, spostamenti tra cantieri, attese e maltempo. In edilizia le ore produttive reali sono spesso il 70–80% di quelle pagate.",
  },
  {
    q: "Perché il costo orario reale è importante per i preventivi?",
    a: "Perché la manodopera è una delle voci più pesanti di ogni preventivo edile: se la quoti alla paga oraria invece che al costo aziendale su ore produttive, stai sottostimando la voce principale del lavoro — e il margine che credi di avere non esiste.",
  },
  {
    q: "Il costo orario è uguale per tutti gli operai?",
    a: "No: cambia per livello, anzianità, specializzazione e persino per squadra. Non serve una precisione da paghe e contributi: basta un costo orario medio realistico per figura (operaio comune, specializzato, capo squadra) da usare in preventivo e in consuntivo.",
  },
  {
    q: "Come riduco il costo orario reale senza toccare le paghe?",
    a: "Aumentando le ore produttive: meno spostamenti tra cantieri, meno attese per materiali mancanti, migliore programmazione delle squadre. Ogni ora recuperata dal 'tempo morto' abbassa il costo orario reale e alza il margine, a parità di stipendi.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        «Un operaio mi costa 12 euro l'ora». È una delle frasi più pericolose che si possano sentire
        in un'impresa edile — perché è la base di preventivi che <em>sembrano</em> in utile e non lo
        sono. La paga oraria non è il costo orario: tra oneri, mensilità aggiuntive, ore non
        produttive e trasferte, <strong>il costo reale di un'ora di manodopera è spesso il doppio di
        quello che appare in busta</strong>. Vediamo come calcolarlo davvero, con un metodo semplice
        che puoi applicare oggi.
      </p>

      <h2>Primo passo: dal netto al costo aziendale</h2>
      <p>
        Il punto di partenza non è ciò che l'operaio percepisce, ma ciò che l'impresa spende. Al
        lordo in busta vanno aggiunti:
      </p>
      <ul>
        <li><strong>Contributi previdenziali e assistenziali</strong> a carico azienda;</li>
        <li><strong>TFR</strong> che matura ogni mese;</li>
        <li><strong>Mensilità aggiuntive</strong> (tredicesima, e dove prevista la quattordicesima);</li>
        <li><strong>Casse edili e fondi di settore</strong>;</li>
        <li><strong>Vestiario, DPI, formazione obbligatoria, sorveglianza sanitaria</strong>;</li>
        <li>quota di <strong>attrezzatura individuale</strong> e piccoli utensili.</li>
      </ul>
      <p>
        Il risultato è il <strong>costo aziendale annuo</strong> della persona. Come ordine di
        grandezza, nelle imprese edili italiane è tipicamente tra il 70% e il 100% in più del netto
        percepito. Già qui, i «12 euro l'ora» sono diventati altro.
      </p>

      <h2>Secondo passo: le ore produttive (il moltiplicatore nascosto)</h2>
      <p>
        L'errore più grande però non è sul costo: è sulle ore. Il costo aziendale annuo non va diviso
        per le ore teoriche del contratto, ma per le <strong>ore realmente produttive</strong>. Dalle
        ore contrattuali vanno tolte:
      </p>
      <ul>
        <li>ferie, permessi, festività;</li>
        <li>malattie e infortuni;</li>
        <li>formazione e adempimenti;</li>
        <li><strong>trasferte e spostamenti</strong> tra cantieri (pagati, non produttivi);</li>
        <li><strong>attese</strong>: materiale mancante, mezzi occupati, altre squadre in ritardo;</li>
        <li>maltempo e fermi cantiere.</li>
      </ul>
      <p>
        In molte imprese edili le ore produttive vere sono il <strong>70–80% delle ore pagate</strong>.
        Significa che il costo orario reale va gonfiato di un ulteriore 25–40% rispetto al calcolo
        «da contratto».
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Paga oraria vs costo orario reale</p>
        <p className="mt-1 text-sm text-muted">Esempio tipico: operaio specializzato, costo aziendale su ore produttive.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={12} after={28} unit="€" /></div>
      </figure>

      <h2>La formula, in chiaro</h2>
      <p>Il calcolo completo sta in una riga:</p>
      <blockquote>
        Costo orario reale = costo aziendale annuo ÷ ore produttive annue
      </blockquote>
      <p>
        Esempio concreto: operaio con costo aziendale di 42.000 € l'anno. Ore contrattuali ~1.750, ma
        tolte ferie, permessi, malattia, trasferte e attese ne restano produttive ~1.450. Costo orario
        reale: <strong>42.000 ÷ 1.450 ≈ 29 €/ora</strong>. Se nei preventivi usi 15–18 €, ogni ora
        di manodopera quotata ti sta mangiando margine.
      </p>

      <h2>Perché questo numero cambia tutto</h2>
      <p>
        La manodopera è tra le prime due voci di costo di quasi ogni lavoro edile. Sbagliarla del
        30–50% significa che <strong>il margine scritto nel preventivo non esiste</strong>: lo scopri
        a consuntivo, quando il cantiere ha già consumato le ore. Con il costo orario reale invece:
      </p>
      <ul>
        <li>i <Link href="/risorse/preventivo-edile-come-farlo">preventivi</Link> diventano affidabili, perché la voce principale è giusta;</li>
        <li>il <strong>margine per commessa</strong> si può leggere davvero (ore reali × costo reale);</li>
        <li>le <Link href="/risorse/varianti-in-corso-d-opera">varianti</Link> si quotano in un minuto, con un numero difendibile;</li>
        <li>capisci se conviene la squadra interna o il subappalto, dati alla mano.</li>
      </ul>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={75} sublabel="ore produttive tipiche" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Il vero moltiplicatore è il tempo</p>
            <p className="mt-2 text-muted">
              Ogni punto di produttività recuperato (meno attese, meno spostamenti, migliore
              programmazione) abbassa il costo orario reale di tutta la squadra — a parità di
              stipendi. È il modo più economico di aumentare il margine.
            </p>
          </div>
        </div>
      </figure>

      <h2>Un costo orario per figura, non per persona</h2>
      <p>
        Non serve la precisione del consulente del lavoro: serve un numero <em>utilizzabile</em>.
        Calcola un costo orario medio per figura — operaio comune, specializzato, capo squadra — e
        aggiornalo una o due volte l'anno. È il compromesso giusto tra precisione e praticità, ed è
        quello che usiamo nel <Link href="/metodo">metodo Numeri in Edilizia</Link>.
      </p>

      <h2>Il passo successivo: imputare le ore ai cantieri</h2>
      <p>
        Conoscere il costo orario è metà del lavoro; l'altra metà è sapere <strong>dove finiscono le
        ore</strong>. Rapportini per commessa, anche semplicissimi, trasformano il costo orario in
        margine per cantiere: ore reali × costo reale, imputate al lavoro giusto. È la stessa
        disciplina dei <Link href="/risorse/costi-di-cantiere-guida">costi di cantiere</Link>, e con
        uno strumento come <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a> i rapportini
        finiscono direttamente sulla commessa.
      </p>

      <h2>In sintesi</h2>
      <ol>
        <li>Parti dal <strong>costo aziendale</strong>, non dalla paga.</li>
        <li>Dividi per le <strong>ore produttive</strong>, non per quelle teoriche.</li>
        <li>Usa un costo per <strong>figura professionale</strong>, aggiornato periodicamente.</li>
        <li>Imputa le ore ai cantieri e leggi il margine per commessa.</li>
        <li>Lavora sulla produttività (attese, spostamenti) prima che sui prezzi.</li>
      </ol>
      <p>
        Vuoi sapere qual è il costo orario reale della tua squadra e quanto sta pesando sui tuoi
        preventivi? È una delle prime cose che calcoliamo{" "}
        nell'<Link href="/contatti">analisi gratuita dei tuoi numeri</Link>: trenta minuti, senza
        impegno, sui dati veri della tua impresa.
      </p>
    </ArticleShell>
  );
}
