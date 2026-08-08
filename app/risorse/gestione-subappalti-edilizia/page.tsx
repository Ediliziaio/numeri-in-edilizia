import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { DonutStat, AreaTrend } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("gestione-subappalti-edilizia")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "gestione subappalti edilizia",
    "gestione subappaltatori impresa edile",
    "controllo costi subappalto",
    "subappalto cantiere",
    "come gestire i subappaltatori",
  ],
  alternates: { canonical: "/risorse/gestione-subappalti-edilizia" },
  openGraph: { url: "/risorse/gestione-subappalti-edilizia", title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Quanto incidono i subappalti sul costo di un cantiere?",
    a: "Molto: nella maggior parte delle imprese edili i subappalti valgono il 30-50% del costo totale di una commessa. Impianti, cartongesso, pittura, impermeabilizzazioni, opere specialistiche sono spesso affidati a terzi. Proprio perché pesano tanto, sono uno dei punti dove il margine si guadagna o si perde.",
  },
  {
    q: "Come si controlla il costo di un subappalto?",
    a: "Con un contratto chiaro sull'oggetto e sui prezzi, SAL del subappaltatore collegati all'avanzamento reale, e ogni fattura del subappalto imputata alla commessa giusta. Così confronti sempre il costo del subappalto con quanto avevi previsto in preventivo, mentre il lavoro è in corso.",
  },
  {
    q: "Il subappalto conviene rispetto alla squadra interna?",
    a: "Dipende dal lavoro. Il subappalto trasforma un costo fisso in variabile e ti dà flessibilità, ma con un margine per il subappaltatore. La squadra interna costa comunque anche nei periodi vuoti. La scelta va fatta sui numeri, confrontando l'effetto sul margine di quella commessa.",
  },
  {
    q: "Cosa deve contenere un contratto di subappalto?",
    a: "Oggetto preciso delle lavorazioni, prezzi e modalità di misurazione, tempi e penali, gestione delle varianti, modalità di SAL e pagamento, requisiti di sicurezza e regolarità (DURC). Un contratto vago è la principale causa di contestazioni e costi extra non previsti.",
  },
  {
    q: "Le varianti dei subappaltatori vanno tracciate?",
    a: "Sì, esattamente come le tue verso il committente. Un lavoro extra chiesto al subappaltatore e non concordato per iscritto diventa un costo che scopri a fine lavori. Le varianti in ingresso vanno gestite con la stessa disciplina di quelle in uscita.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        In edilizia quasi nessuno fa tutto in casa. Impianti, cartongesso, pittura,
        impermeabilizzazioni, opere specialistiche: una fetta enorme del cantiere passa da altre mani.
        E qui sta il punto che molti sottovalutano: se i subappalti valgono spesso{" "}
        <strong>metà del costo di una commessa</strong>, è lì che il margine si gioca. Un subappalto
        mal gestito non si nota subito — si nota a fine lavori, quando i conti non tornano. Vediamo
        come tenerlo sotto controllo.
      </p>

      <h2>Quanto pesa davvero il subappalto</h2>
      <p>
        Nella maggior parte delle imprese edili i subappalti coprono il <strong>30-50% del costo
        totale</strong> di un cantiere. Significa che puoi essere bravissimo a gestire la tua squadra
        e i tuoi materiali, ma se non governi i subappalti stai controllando solo metà della partita.
        È la voce di costo con il maggior potenziale — nel bene e nel male.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={40} sublabel="peso tipico subappalti" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Metà del cantiere, spesso fuori controllo</p>
            <p className="mt-2 text-muted">
              Con i subappalti al 40% del costo, un errore del 10% sul loro importo si mangia punti
              interi di margine dell'intera commessa. Governarli non è burocrazia: è dove si difende
              l'utile.
            </p>
          </div>
        </div>
      </figure>

      <h2>Le quattro fasi di un subappalto sotto controllo</h2>
      <h3>1. Selezione</h3>
      <p>
        Il subappaltatore giusto non è solo il più economico. Affidabilità, rispetto dei tempi,
        regolarità (DURC in ordine, sicurezza) valgono quanto il prezzo: un ribasso vanificato da
        ritardi e rilavorazioni è un falso risparmio. Meglio pochi partner solidi che una rincorsa al
        preventivo più basso.
      </p>
      <h3>2. Contratto chiaro</h3>
      <p>
        Il 90% delle contestazioni nasce da accordi vaghi. Il contratto deve fissare oggetto preciso,
        prezzi e come si misurano, tempi e penali, gestione delle{" "}
        <Link href="/risorse/varianti-in-corso-d-opera">varianti</Link>, modalità di SAL e pagamento,
        requisiti di sicurezza e regolarità. Scritto prima, non discusso dopo.
      </p>
      <h3>3. SAL e avanzamento</h3>
      <p>
        Il <Link href="/risorse/sal-stato-avanzamento-lavori">SAL del subappaltatore</Link> va
        collegato al SAL principale e all'avanzamento reale: paghi ciò che è effettivamente eseguito,
        non ciò che è stato chiesto. SAL periodici danno visibilità continua e permettono di
        intervenire prima che il costo scappi.
      </p>
      <h3>4. Imputazione e controllo</h3>
      <p>
        Ogni fattura del subappalto va imputata alla <Link href="/risorse/gestione-commessa-edile">
        commessa</Link> giusta e confrontata col preventivo. È così che il costo del subappalto entra
        nel margine di commessa in tempo reale, invece di essere una sorpresa finale.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Il costo del subappalto, letto in tempo</p>
        <p className="mt-1 text-sm text-muted">Con SAL collegati e fatture imputate, lo scostamento sul subappalto si vede mentre puoi ancora agire.</p>
        <div className="mt-6"><AreaTrend points={[15, 20, 26, 24, 32, 38, 44, 50]} labels={["SAL 1", "", "SAL 3", "", "SAL 5", "", "SAL 7", ""]} /></div>
      </figure>

      <h2>Subappalto o squadra interna?</h2>
      <p>
        È una delle decisioni più ricorrenti. Il subappalto trasforma un costo fisso in variabile e ti
        dà flessibilità, ma lascia un margine al subappaltatore. La{" "}
        <Link href="/risorse/costo-orario-manodopera-edile">squadra interna</Link> costa comunque
        anche nei periodi vuoti, ma trattiene quel margine. Non esiste una risposta giusta a priori:
        va decisa <strong>sui numeri</strong>, confrontando l'effetto sul margine della singola
        commessa e sulla saturazione della tua squadra.
      </p>

      <h2>La regolarità non è un dettaglio</h2>
      <p>
        Oltre al costo, i subappalti portano responsabilità: regolarità contributiva, sicurezza,
        congruità della manodopera. Il <Link href="/risorse/durc-di-congruita-manodopera">DURC di
        congruità</Link> tiene conto anche del lavoro affidato in subappalto: un subappaltatore non in
        regola può bloccarti il SAL e il pagamento. Governare i subappalti è anche presidiare questo.
      </p>

      <h2>Da dove partire</h2>
      <ol>
        <li>Fai l'elenco dei subappalti in corso e del loro peso su ogni cantiere.</li>
        <li>Verifica che ognuno abbia un contratto chiaro (oggetto, prezzi, varianti).</li>
        <li>Collega i SAL dei subappaltatori all'avanzamento reale.</li>
        <li>Imputa ogni fattura alla commessa e confrontala col preventivo.</li>
        <li>Decidi interno vs subappalto sui numeri, non per abitudine.</li>
      </ol>
      <p>
        Vuoi capire quanto margine ti stanno costando i subappalti oggi e come tenerli sotto
        controllo? Partiamo dai tuoi cantieri reali nell'{" "}
        <Link href="/contatti">analisi gratuita</Link>: 30 minuti, senza impegno. E per collegare
        contratti, SAL e fatture dei subappalti alla commessa, c'è{" "}
        <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a>.
      </p>
    </ArticleShell>
  );
}
