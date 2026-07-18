import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("budget-impresa-edile")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "budget impresa edile",
    "budget annuale edilizia",
    "pianificazione impresa di costruzioni",
    "obiettivo fatturato impresa edile",
    "compenso imprenditore edile",
  ],
  alternates: { canonical: "/risorse/budget-impresa-edile" },
  openGraph: { title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Cos'è il budget per un'impresa edile?",
    a: "È il piano economico dell'anno: quanto vuoi guadagnare (utile e compenso dell'imprenditore), quanto ti costa la struttura, quanto margine devono generare le commesse e quindi quanto e cosa devi vendere. Si costruisce partendo dall'utile desiderato e risalendo ai ricavi necessari, non il contrario.",
  },
  {
    q: "Serve il commercialista per fare il budget?",
    a: "No. Il budget è uno strumento di direzione, non un adempimento: lo costruisce l'imprenditore (eventualmente con un consulente di controllo di gestione) usando i numeri della propria impresa. Il commercialista resta fondamentale per fisco e bilancio, che sono un'altra cosa.",
  },
  {
    q: "Da dove si parte per fare il budget?",
    a: "Dai dati dell'anno precedente riclassificati: costi di struttura reali, margine medio di commessa, compenso che ti sei pagato. Da lì si fissano gli obiettivi del nuovo anno e si calcola il fatturato necessario a raggiungerli, con il margine obiettivo per commessa.",
  },
  {
    q: "Ogni quanto va controllato il budget?",
    a: "Mensilmente, confrontando i numeri reali con quelli pianificati (analisi degli scostamenti). Un budget guardato una volta l'anno è un esercizio inutile; guardato ogni mese diventa il cruscotto con cui guidi l'impresa.",
  },
  {
    q: "Il compenso dell'imprenditore va messo nel budget?",
    a: "Sì, ed è il punto più importante: il tuo stipendio è un costo aziendale da pianificare, non l'avanzo di fine anno. Un budget serio parte proprio da lì: quanto deve pagarti l'impresa perché il tuo lavoro abbia senso.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        La parola «budget» evoca uffici, riunioni e fogli di calcolo. In realtà il budget di
        un'impresa edile risponde a una domanda semplicissima: <strong>quanto voglio guadagnare
        quest'anno, e cosa deve succedere perché accada?</strong> Senza questa risposta, l'anno lo
        decide il mercato: prendi i lavori che arrivano, ai prezzi che passano, e a dicembre scopri
        com'è andata. Con il budget, l'anno lo decidi tu — e ogni mese sai se sei sulla rotta.
      </p>

      <h2>Il budget si costruisce al contrario</h2>
      <p>
        L'errore classico è partire dal fatturato: «l'anno scorso 1,5 milioni, quest'anno puntiamo a
        1,8». Ma il fatturato è un mezzo, non un fine. Il budget fatto bene si costruisce{" "}
        <strong>dall'utile verso i ricavi</strong>, in quattro passaggi:
      </p>
      <ol>
        <li><strong>Parti da quanto vuoi guadagnare</strong> — il tuo compenso mensile (da pagare come un costo, tutti i mesi) più l'utile che vuoi lasciare in azienda.</li>
        <li><strong>Aggiungi i costi di struttura</strong> — sede, amministrazione, mezzi, assicurazioni, consulenti: la macchina che gira comunque (vedi la <Link href="/risorse/costi-di-cantiere-guida">guida ai costi</Link>).</li>
        <li><strong>Ottieni il margine totale necessario</strong> — compenso + utile + struttura = quanto margine devono generare le commesse nell'anno.</li>
        <li><strong>Calcola il fatturato necessario</strong> — dividi il margine necessario per il margine medio % delle tue commesse: quello è il fatturato da fare. Se il numero è irrealistico, la leva non è vendere di più: è <Link href="/risorse/margine-impresa-edile">alzare il margine</Link>.</li>
      </ol>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={15} sublabel="margine medio ipotizzato" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Esempio del conto alla rovescia</p>
            <p className="mt-2 text-muted">
              Vuoi 60.000 € di compenso + 40.000 € di utile, con 150.000 € di struttura? Ti servono
              250.000 € di margine. Con un margine medio del 15%, il fatturato necessario è circa
              1,67 M€. Con il 10%, diventa 2,5 M€: ecco perché il margine conta più del fatturato.
            </p>
          </div>
        </div>
      </figure>

      <h2>Le voci del budget di un'impresa edile</h2>
      <h3>Ricavi</h3>
      <p>
        Non un numero unico ma una composizione: lavori già acquisiti (portafoglio ordini), trattative
        in corso con probabilità realistiche, e la quota da acquisire. Se il portafoglio copre il 40%
        dell'obiettivo, sai già a gennaio quanta attività commerciale serve.
      </p>
      <h3>Costi diretti e margine di commessa</h3>
      <p>
        Il margine medio storico delle tue commesse è il numero più importante del budget. Se non lo
        conosci, il budget parte zoppo: è il motivo per cui budget e{" "}
        <Link href="/risorse/controllo-di-gestione-edilizia">controllo di gestione</Link> vanno
        insieme.
      </p>
      <h3>Costi di struttura</h3>
      <p>
        Vanno messi a budget voce per voce, mese per mese. Attenzione agli aumenti «silenziosi»:
        assicurazioni, noleggi, software, carburanti crescono ogni anno senza chiedere permesso.
      </p>
      <h3>Compenso dell'imprenditore</h3>
      <p>
        La voce che manca in quasi tutti i budget informali. Fissalo come un normale costo mensile:
        se l'impresa non riesce a pagarlo, il budget ti sta dicendo qualcosa di importante — meglio
        saperlo a gennaio che a dicembre.
      </p>
      <h3>Investimenti e liquidità</h3>
      <p>
        Mezzi da sostituire, attrezzature, eventuale personale: ogni investimento va nel budget con
        il suo impatto di cassa. E accanto al budget economico serve un occhio al ciclo di cassa: ne
        parliamo nella guida alla <Link href="/risorse/liquidita-impresa-edile">liquidità</Link>.
      </p>

      <h2>Dal budget annuale al controllo mensile</h2>
      <p>
        Un budget guardato una volta l'anno è una previsione del tempo dell'anno scorso. Il valore
        sta nel <strong>confronto mensile</strong> tra pianificato e reale:
      </p>
      <ul>
        <li>Fatturato del mese vs fatturato pianificato;</li>
        <li>Margine delle commesse vs margine obiettivo;</li>
        <li>Costi di struttura vs budget di periodo;</li>
        <li>Compenso pagato vs compenso pianificato.</li>
      </ul>
      <p>
        Gli scostamenti non sono «errori del budget»: sono informazioni. Un margine sotto obiettivo
        per due mesi di fila ti dice dove guardare — preventivi? varianti perse? un cantiere che
        scivola? — con dieci mesi di anticipo sul bilancio.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Budget vs reale, mese per mese</p>
        <p className="mt-1 text-sm text-muted">Il valore del budget è il confronto continuo: gli scostamenti letti presto diventano correzioni, non sorprese.</p>
        <div className="mt-6"><AreaTrend points={[22, 26, 24, 30, 34, 40, 44, 50]} labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
      </figure>

      <h2>Gli errori che rendono il budget inutile</h2>
      <ol>
        <li><strong>Copiare l'anno scorso +10%</strong> — senza capire da dove veniva il margine, stai proiettando anche gli errori.</li>
        <li><strong>Dimenticare il proprio stipendio</strong> — un'impresa che «va bene» ma non paga l'imprenditore non va bene.</li>
        <li><strong>Fatturato come unico obiettivo</strong> — crescere di fatturato con margini calanti significa lavorare di più per guadagnare meno.</li>
        <li><strong>Nessun confronto mensile</strong> — senza analisi degli scostamenti, il budget è un file morto.</li>
        <li><strong>Budget troppo dettagliato</strong> — cento righe che nessuno aggiorna perdono contro venti righe guardate ogni mese.</li>
      </ol>

      <blockquote>
        Il budget non prevede il futuro: lo decide. È la differenza tra sperare in un buon anno e
        costruirlo.
      </blockquote>

      <h2>Da dove iniziare</h2>
      <p>
        Ti servono tre numeri di partenza: i costi di struttura reali dell'ultimo anno, il margine
        medio delle tue commesse e il compenso che vuoi pagarti. I primi due, se non li hai, sono
        esattamente ciò che ricostruiamo nell'<Link href="/contatti">analisi gratuita dei tuoi
        numeri</Link>. E per tenere budget e consuntivi allineati tutto l'anno,{" "}
        <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a> collega commesse, costi e fatturato
        in un unico cruscotto. Il quadro completo del metodo lo trovi su{" "}
        <Link href="/metodo">come funziona</Link>.
      </p>
    </ArticleShell>
  );
}
