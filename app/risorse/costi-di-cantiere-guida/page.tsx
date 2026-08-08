import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("costi-di-cantiere-guida")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "costi di cantiere",
    "costi diretti cantiere edile",
    "costi indiretti edilizia",
    "costi di struttura impresa edile",
    "contabilità di cantiere",
  ],
  alternates: { canonical: "/risorse/costi-di-cantiere-guida" },
  openGraph: { url: "/risorse/costi-di-cantiere-guida", title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Quali sono i costi diretti di un cantiere?",
    a: "I costi diretti sono quelli generati specificamente dal cantiere: materiali, manodopera impiegata, mezzi e attrezzature usati, noli, subappalti, trasporti e smaltimenti, oneri di sicurezza specifici. Sono i costi che non esisterebbero se quel cantiere non esistesse.",
  },
  {
    q: "Cosa sono i costi indiretti e di struttura in edilizia?",
    a: "Sono i costi che l'impresa sostiene a prescindere dal singolo cantiere: sede, amministrazione, mezzi aziendali, assicurazioni, direzione tecnica, commerciale, il compenso dell'imprenditore. Vanno ripartiti sulle commesse con un criterio coerente, altrimenti il margine dei cantieri appare più alto del reale.",
  },
  {
    q: "Come si imputano i costi al cantiere giusto?",
    a: "Serve che ogni documento — DDT, fattura fornitore, rapportino ore, nolo — riporti il riferimento della commessa. È una disciplina più organizzativa che contabile: una volta impostata, il margine per cantiere si calcola quasi da solo.",
  },
  {
    q: "Quanto incidono i costi di struttura su una commessa?",
    a: "Dipende dalla dimensione dell'impresa, ma nelle PMI edili l'incidenza tipica va dal 10% al 20% dei costi diretti. Il punto non è la percentuale esatta: è calcolarla per la propria impresa e applicarla a ogni preventivo e a ogni consuntivo.",
  },
  {
    q: "Che differenza c'è tra contabilità generale e contabilità di cantiere?",
    a: "La contabilità generale registra i fatti per obblighi fiscali e civilistici, per l'impresa nel suo insieme. La contabilità di cantiere (o analitica) riclassifica gli stessi dati per commessa, per dirti quanto guadagni su ogni singolo lavoro. È la base del controllo di gestione edile.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        Chiedi a un imprenditore edile quanto ha fatturato e ti risponde al volo. Chiedigli quanto gli
        è <em>costato</em> un cantiere e la risposta si fa vaga: «più o meno…», «se non ricordo
        male…». È il cuore del problema: <strong>senza una mappa dei costi non esiste margine</strong>,
        esistono solo incassi e speranze. Questa guida è quella mappa: tutti i costi di un cantiere
        edile, come classificarli, come imputarli e come tenerli sotto controllo.
      </p>

      <h2>Le tre famiglie di costi di un'impresa edile</h2>
      <p>
        Ogni euro che esce dalla tua impresa appartiene a una di queste tre famiglie. La
        classificazione non è un esercizio da ragioniere: è ciò che rende possibile sapere quanto
        guadagni su ogni lavoro.
      </p>

      <h3>1. Costi diretti di cantiere</h3>
      <p>Sono i costi che esistono solo perché esiste quel cantiere:</p>
      <ul>
        <li><strong>Materiali</strong> — dal cemento ai serramenti, incluso lo sfrido (gli scarti si pagano come il resto).</li>
        <li><strong>Manodopera</strong> — le ore dei tuoi operai impiegate sul cantiere, al costo aziendale reale (non alla paga oraria: vedi la <Link href="/risorse/costo-orario-manodopera-edile">guida al costo orario</Link>).</li>
        <li><strong>Mezzi e attrezzature</strong> — quota di ammortamento e gestione dei mezzi usati, o costo del nolo.</li>
        <li><strong><Link href="/risorse/gestione-subappalti-edilizia">Subappalti</Link></strong> — le lavorazioni affidate a terzi.</li>
        <li><strong>Trasporti e smaltimenti</strong> — voce spesso dimenticata e sempre più pesante.</li>
        <li><strong>Oneri di sicurezza</strong> — apprestamenti e adempimenti specifici del cantiere.</li>
      </ul>

      <h3>2. Costi indiretti di produzione</h3>
      <p>
        Stanno a metà: servono la produzione ma non un solo cantiere. Il capo cantiere che segue tre
        commesse, il furgone che rifornisce più squadre, il magazzino. Vanno <strong>ripartiti</strong>{" "}
        tra i cantieri che li utilizzano, con un criterio semplice e costante (ore, incidenza sui costi
        diretti, chilometri).
      </p>

      <h3>3. Costi di struttura</h3>
      <p>
        La «macchina» che gira comunque: sede, amministrazione, assicurazioni, consulenti, commerciale,
        direzione — e il <strong>compenso dell'imprenditore</strong>, che è un costo aziendale a tutti
        gli effetti, non un avanzo. Se i preventivi non includono una <Link href="/risorse/costi-di-struttura-impresa-edile">quota di struttura</Link>, l'impresa
        lavora «in pareggio apparente»: ogni cantiere sembra guadagnare, l'azienda no.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={15} sublabel="incidenza tipica struttura" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Il peso della struttura</p>
            <p className="mt-2 text-muted">
              Nelle PMI edili i costi di struttura incidono tipicamente per il 10–20% dei costi
              diretti. Ignorarli nei preventivi significa regalare esattamente quella percentuale di
              margine, su ogni commessa.
            </p>
          </div>
        </div>
      </figure>

      <h2>L'imputazione: ogni costo al suo cantiere</h2>
      <p>
        Classificare non basta: bisogna che ogni costo <strong>finisca sul cantiere che lo ha
        generato</strong>. È qui che la maggior parte delle imprese si perde, perché l'imputazione non
        è un problema contabile ma organizzativo:
      </p>
      <ul>
        <li>Ogni <strong>ordine e DDT</strong> deve riportare la commessa di destinazione.</li>
        <li>Ogni <strong>rapportino</strong> deve dire chi ha lavorato dove, e quante ore.</li>
        <li>Ogni <strong>fattura fornitore</strong> va collegata alla commessa (o ripartita, se serve più cantieri).</li>
        <li>Noli, trasporti e smaltimenti seguono la stessa regola: niente «spese generali» come parcheggio comodo.</li>
      </ul>
      <p>
        La disciplina dell'imputazione è il 90% del lavoro. Una volta che i documenti «sanno» a quale
        cantiere appartengono, il margine per commessa si calcola quasi da solo — a mano, con un
        foglio, o con un gestionale come <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a> che
        collega DDT, ore e fatture alla commessa.
      </p>

      <h2>I costi nascosti che erodono il margine</h2>
      <p>Quattro voci che quasi nessuno conteggia e che pesano più di quanto sembri:</p>
      <ol>
        <li><strong>Lo sfrido</strong> — il materiale scartato è comprato e pagato: su certe lavorazioni vale punti interi di margine.</li>
        <li><strong>I tempi morti</strong> — attese, spostamenti tra cantieri, maltempo: ore pagate che non producono.</li>
        <li><strong>Le rilavorazioni</strong> — rifare un lavoro non venuto bene costa due volte: materiale e ore.</li>
        <li><strong>Il fermo mezzi</strong> — un mezzo fermo costa (ammortamento, assicurazione) anche quando non lavora.</li>
      </ol>
      <p>
        Questi costi non si eliminano per decreto: si riducono <em>vedendoli</em>. È la logica di
        fondo del <Link href="/metodo">metodo Numeri in Edilizia</Link>: rendere visibile ciò che
        oggi si nasconde nel «più o meno».
      </p>

      <h2>Dal costo al margine: il conto della commessa</h2>
      <p>Con la classificazione e l'imputazione a posto, il conto di ogni cantiere diventa lineare:</p>
      <ul>
        <li>Ricavi della commessa (contratto + varianti fatturate)</li>
        <li>− Costi diretti di cantiere</li>
        <li>− Quota di costi indiretti di produzione</li>
        <li>− Quota di costi di struttura</li>
        <li>= <strong>Margine di commessa</strong></li>
      </ul>
      <p>
        Questo numero, letto <em>mentre il cantiere è aperto</em> e confrontato con il preventivo, è
        lo strumento di governo più potente che un'impresa edile possa avere. Come usarlo lo spieghiamo
        nella <Link href="/risorse/controllo-di-gestione-edilizia">guida al controllo di gestione in edilizia</Link>.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Quando i costi sono imputati, il margine si vede</p>
        <p className="mt-1 text-sm text-muted">L'andamento del margine smette di essere una sorpresa e diventa una linea leggibile ogni settimana.</p>
        <div className="mt-6"><AreaTrend points={[18, 24, 22, 32, 38, 46, 54, 62]} labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
      </figure>

      <h2>I costi cambiano da mestiere a mestiere</h2>
      <p>
        La struttura dei costi non è uguale per tutti: in una{" "}
        <Link href="/settori/carpenteria-metallica">carpenteria metallica</Link> domina la materia
        prima, nel <Link href="/settori/movimento-terra">movimento terra</Link> il costo orario dei
        mezzi, per un <Link href="/settori/serramentisti">serramentista</Link> il nodo è la posa, per
        un <Link href="/settori/impiantisti">impiantista</Link> il materiale minuto e le trasferte
        delle assistenze. Per questo il controllo dei costi va calibrato sul settore: trovi le guide
        dedicate nelle nostre <Link href="/settori">pagine di settore</Link>.
      </p>

      <h2>Da dove iniziare, in pratica</h2>
      <ol>
        <li>Definisci le tre famiglie (diretti, indiretti, struttura) per la tua impresa.</li>
        <li>Imponi la regola: ogni documento riporta la commessa.</li>
        <li>Calcola l'incidenza dei costi di struttura sull'ultimo esercizio.</li>
        <li>Ricostruisci il margine reale delle commesse aperte.</li>
        <li>Confronta con i preventivi e leggi gli scostamenti.</li>
      </ol>
      <p>
        Se vuoi una scorciatoia, è esattamente il lavoro che facciamo insieme{" "}
        nell'<Link href="/contatti">analisi gratuita dei tuoi numeri</Link>: trenta minuti sui tuoi
        dati per capire dove i costi ti stanno sfuggendo e quanto margine puoi recuperare.
      </p>
    </ArticleShell>
  );
}
