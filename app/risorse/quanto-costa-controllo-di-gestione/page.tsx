import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareBars, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("quanto-costa-controllo-di-gestione")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "quanto costa il controllo di gestione",
    "costo controllo di gestione impresa edile",
    "consulenza controllo di gestione prezzo",
    "quanto costa un consulente di gestione",
    "controllo di gestione edilizia costo",
  ],
  alternates: { canonical: "/risorse/quanto-costa-controllo-di-gestione" },
  openGraph: { url: "/risorse/quanto-costa-controllo-di-gestione", title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Quanto costa il controllo di gestione per un'impresa edile?",
    a: "Dipende dal modello scelto: formazione (impari e applichi da solo), affiancamento con un consulente, struttura interna dedicata o una combinazione. Il costo varia con la complessità dell'impresa e con quanto supporto vuoi. La cifra sensata si definisce dopo aver guardato i numeri: per questo l'analisi iniziale è gratuita e senza impegno.",
  },
  {
    q: "Conviene assumere una persona dedicata al controllo di gestione?",
    a: "Nelle imprese edili sotto una certa dimensione raramente conviene: una figura interna qualificata è un costo fisso annuo importante, e nella maggior parte dei casi il lavoro non la satura. Più spesso conviene impostare il sistema con un affiancamento e poi gestirlo internamente con poche ore a settimana.",
  },
  {
    q: "Serve comprare un software?",
    a: "Per partire no: il metodo funziona sui dati che l'impresa già produce, anche con un foglio ben impostato. Un gestionale diventa utile quando i cantieri aperti sono molti e l'aggiornamento manuale costa più della licenza. Prima il metodo, poi lo strumento.",
  },
  {
    q: "In quanto tempo rientro della spesa?",
    a: "Il ritorno arriva dai punti di margine recuperati sui cantieri già aperti: varianti fatturate, preventivi corretti, costi di struttura caricati. Su un'impresa da un milione di fatturato, recuperare anche solo due punti di margine vale ventimila euro l'anno — di norma un multiplo del costo del percorso.",
  },
  {
    q: "Come faccio a sapere se ne vale la pena per la mia impresa?",
    a: "Guardando due numeri tuoi: il margine medio attuale e quanto vale un punto di margine sul tuo fatturato. Se non conosci il primo, è già la risposta. L'analisi gratuita serve esattamente a metterli sul tavolo prima di qualsiasi decisione di spesa.",
  },
  {
    q: "Il costo dipende dalla dimensione dell'impresa?",
    a: "Sì, perché cambia il lavoro: più cantieri aperti, più squadre e più fornitori significano più dati da riclassificare e più indicatori da impostare. Un'impresa con tre cantieri e una con venti non hanno la stessa complessità, né lo stesso percorso.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        <strong>
          Il costo del controllo di gestione dipende dal modello che scegli — formazione,
          affiancamento, struttura interna — e dalla complessità della tua impresa. Ma è la domanda
          sbagliata. Quella giusta è: quanto ti costa, ogni anno, non averlo?
        </strong>{" "}
        In questa guida trovi le voci di spesa reali, come si valuta il ritorno e come fare il conto
        della non-decisione, che quasi nessuno fa.
      </p>

      <h2>Le quattro voci che compongono il costo</h2>
      <p>
        Il <Link href="/risorse/controllo-di-gestione-edilizia">controllo di gestione in edilizia</Link>{" "}
        non è un prodotto con un prezzo di listino: è un sistema che si costruisce, e il costo dipende
        da come lo metti in piedi. Le voci sono quattro, e non tutte sono in denaro.
      </p>

      <h3>1. La formazione</h3>
      <p>
        Impari il metodo e lo applichi da solo. È la voce meno costosa in denaro e la più costosa in
        tempo tuo: funziona bene se hai la testa per i numeri e cantieri non troppo numerosi.
      </p>

      <h3>2. L&apos;affiancamento</h3>
      <p>
        Un consulente costruisce il sistema <em>sui tuoi cantieri</em> e ti accompagna finché non lo
        usi da solo. Costa di più della sola formazione, ma comprime i tempi: il margine si legge in
        settimane invece che in mesi, e gli errori di impostazione — quelli che rendono inutile tutto
        il lavoro — non li fai.
      </p>

      <h3>3. Il tempo interno</h3>
      <p>
        È la voce che nessuno mette a bilancio e che c&apos;è sempre. Qualcuno deve imputare i costi
        alle commesse e aggiornare i dati: all&apos;inizio richiede impegno, poi diventa una routine
        da circa dieci minuti a settimana per la lettura, più il lavoro amministrativo ordinario che
        però già facevi.
      </p>

      <h3>4. Lo strumento</h3>
      <p>
        Un foglio di calcolo costa zero e regge finché i cantieri aperti sono pochi. Oltre, il costo
        si sposta sull&apos;errore e sul tempo perso a tenerlo aggiornato: è lì che un gestionale come{" "}
        <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a>{" "}
        diventa più economico del foglio che stai usando.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={10} sublabel="minuti a settimana" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Il costo ricorrente vero è il tempo</p>
            <p className="mt-2 text-muted">
              Una volta impostato il sistema, la lettura dei{" "}
              <Link href="/risorse/kpi-impresa-edile">pochi indicatori che contano</Link> richiede
              circa dieci minuti a settimana. Il grosso dello sforzo è iniziale e non si ripete.
            </p>
          </div>
        </div>
      </figure>

      <h2>Quanto costa non farlo: il conto che nessuno fa</h2>
      <p>
        Qui sta il punto. Il controllo di gestione non è una spesa da confrontare con zero: è una
        spesa da confrontare con <strong>quello che stai già perdendo senza accorgertene</strong>.
        Facciamo il conto su un&apos;impresa da 1.000.000 € di fatturato.
      </p>
      <ul>
        <li>
          <strong>Varianti non fatturate</strong> — anche solo il 2% del fatturato in lavori extra
          eseguiti e mai messi in conto: <strong>20.000 €</strong> l&apos;anno.
        </li>
        <li>
          <strong>Costi di struttura non caricati</strong> — se non entrano nei preventivi, ogni
          commessa che «pareggia» perde quella quota. Su un&apos;incidenza del 15%, sono punti interi
          di margine regalati.
        </li>
        <li>
          <strong>Manodopera sottostimata</strong> — quotare alla paga oraria invece che al{" "}
          <Link href="/risorse/costo-orario-manodopera-edile">costo orario reale</Link> significa
          sbagliare in difetto la voce più pesante di ogni lavoro.
        </li>
        <li>
          <strong>Commesse in perdita non intercettate</strong> — una sola, scoperta a fine lavori
          invece che a metà, può bruciare il margine di due cantieri sani.
        </li>
      </ul>
      <p>
        Sommate, queste voci spiegano quasi sempre la distanza tra un margine del 3% e uno del 12%.
        E il conto è annuale: si ripete ogni anno finché nessuno guarda quei numeri.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Quanto vale un punto di margine</p>
        <p className="mt-1 text-sm text-muted">Su 1.000.000 € di fatturato, ogni punto di margine recuperato vale 10.000 € l&apos;anno.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={3} after={12} unit="%" /></div>
      </figure>

      <h2>Come si valuta il ritorno, in pratica</h2>
      <p>
        Il ritorno non si stima con una promessa: si calcola con due numeri che hai già. Il primo è{" "}
        <strong>quanto vale un punto di margine</strong> sul tuo fatturato — su un milione, diecimila
        euro. Il secondo è <strong>quanti punti sono realisticamente recuperabili</strong> guardando
        dove stai perdendo.
      </p>
      <p>
        Se il percorso costa meno di un paio di punti di margine e i punti recuperabili sono più di
        quelli, la decisione si prende da sola. Se invece il tuo margine è già solido e i numeri li
        leggi ogni settimana, probabilmente non ti serve nulla — e te lo diremmo.
      </p>
      <p>
        Puoi fare una prima verifica da solo, adesso, con il{" "}
        <Link href="/strumenti/calcolo-margine-commessa">calcolatore del margine di commessa</Link>{" "}
        su un cantiere aperto: il numero che esce è spesso diverso da quello che ti aspetti, ed è già
        una risposta.
      </p>

      <h2>Gli errori tipici nel valutare la spesa</h2>
      <ol>
        <li>
          <strong>Confrontarla con zero.</strong> L&apos;alternativa non è «non spendere»: è
          continuare a perdere margine invisibile.
        </li>
        <li>
          <strong>Valutarla come un costo amministrativo.</strong> Non è un adempimento: è uno
          strumento che genera decisioni, e quindi ritorno.
        </li>
        <li>
          <strong>Partire dal software.</strong> Comprare il gestionale prima di sapere cosa
          guardare è il modo più veloce per pagare una licenza che nessuno usa.
        </li>
        <li>
          <strong>Rimandare al «momento buono».</strong> Il ritorno più alto si ottiene sui cantieri
          aperti adesso, non su quelli futuri.
        </li>
      </ol>

      <h2>Come cambia per mestiere</h2>
      <p>
        La complessità — e quindi il costo — dipende dal tipo di impresa. Per un{" "}
        <Link href="/settori/impiantisti">impiantista</Link> con molte piccole commesse e assistenze,
        il lavoro sta nel classificare tanti interventi brevi e nel presidiare il materiale minuto.
        Per una <Link href="/settori/carpenteria-metallica">carpenteria metallica</Link>, dove pesano
        la materia prima e le lavorazioni di officina, il nodo è la valorizzazione degli acquisti e
        delle ore di produzione. Stesso metodo, taratura diversa.
      </p>

      <h2>In sintesi</h2>
      <ol>
        <li>Il costo dipende dal modello: formazione, affiancamento, tempo interno, strumento.</li>
        <li>La spesa ricorrente vera è il tempo, ed è contenuta: il grosso dello sforzo è iniziale.</li>
        <li>Il confronto giusto non è con zero, ma con il margine che stai perdendo.</li>
        <li>Un punto di margine su un milione di fatturato vale diecimila euro l&apos;anno.</li>
        <li>Se i tuoi numeri sono già sotto controllo, non ti serve: vale la pena verificarlo.</li>
      </ol>
      <p>
        Non pubblichiamo un listino perché la cifra sensata dipende da cosa serve davvero alla tua
        impresa, e questo si vede solo guardando i numeri. Per questo il primo passo è{" "}
        <Link href="/contatti">l&apos;analisi gratuita</Link>: trenta minuti sui tuoi dati reali, al
        termine dei quali sai quanto margine puoi recuperare — e solo allora ha senso parlare di
        costi. Se vuoi vedere prima i livelli di supporto disponibili, li trovi nella pagina{" "}
        <Link href="/percorsi">percorsi</Link>.
      </p>
    </ArticleShell>
  );
}
