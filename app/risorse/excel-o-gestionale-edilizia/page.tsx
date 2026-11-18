import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("excel-o-gestionale-edilizia")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "excel o gestionale edilizia",
    "excel gestione cantieri",
    "quando passare a un gestionale",
    "foglio di calcolo impresa edile",
    "alternativa excel edilizia",
  ],
  alternates: { canonical: "/risorse/excel-o-gestionale-edilizia" },
  openGraph: {
    url: "/risorse/excel-o-gestionale-edilizia",
    title: article.title,
    description: article.description,
    type: "article",
    images: [article.cover ?? "/opengraph-image"],
  },
};

const faq = [
  {
    q: "Excel basta per gestire i cantieri di un'impresa edile?",
    a: "Può bastare se il flusso è gestibile, il responsabile è definito e i dati vengono controllati. Non esiste una soglia universale di cinque cantieri: contano quantità dei documenti, persone coinvolte, complessità e tempo necessario ad aggiornare e verificare il file.",
  },
  {
    q: "Quando conviene passare a un gestionale?",
    a: "Quando si verifica almeno una di queste tre condizioni: più persone devono aggiornare gli stessi dati, i cantieri aperti superano la manciata, oppure ti accorgi che stai prendendo decisioni su numeri che non sai se sono aggiornati. La soglia non è il fatturato: è la complessità organizzativa.",
  },
  {
    q: "Qual è il vero costo di Excel?",
    a: "Considera licenze, tempo di aggiornamento, controlli e correzione degli errori. Per confrontarlo con un gestionale, considera anche configurazione, formazione, migrazione e assistenza. La convenienza richiede una stima sul flusso della tua impresa, non il confronto tra una sola licenza e zero.",
  },
  {
    q: "Se passo a un gestionale devo buttare il lavoro fatto su Excel?",
    a: "No, ed è anzi un errore comune. Il lavoro fatto su Excel serve a definire quali numeri guardare e come classificare i costi: è il metodo, e il metodo si porta dietro. Il gestionale automatizza la raccolta, non decide cosa devi guardare.",
  },
  {
    q: "Il gestionale risolve i problemi di margine?",
    a: "No. Un gestionale rende sostenibile un metodo che già hai: se non sai quali costi imputare alla commessa e con quale criterio, il software ti darà numeri sbagliati più in fretta. Prima il metodo, poi lo strumento — in quest'ordine.",
  },
  {
    q: "Cosa devo chiedere a un gestionale per l'edilizia?",
    a: "Che colleghi i documenti alla commessa (DDT, fatture fornitore, rapportini ore), che mostri il margine per cantiere confrontato col preventivo, e che gestisca SAL e varianti. Se non fa queste tre cose, non è un gestionale per l'edilizia: è un gestionale generico.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        <strong>
          La scelta tra Excel e gestionale dipende da chi aggiorna i dati, da come vengono verificati
          e dal tempo richiesto al flusso. Il numero di cantieri, da solo, non stabilisce il momento del passaggio.
        </strong>{" "}
        La domanda giusta non è «Excel o gestionale», ma: <em>a che punto sono?</em> Perché il
        passaggio ha un momento giusto, e farlo troppo presto è uno spreco quanto farlo troppo tardi.
      </p>

      <h2>Excel non è il nemico</h2>
      <p>
        Partiamo da una cosa che quasi nessun venditore di software ti dirà: <strong>un foglio di
        calcolo ben impostato è un ottimo strumento di controllo di gestione</strong>. Molte imprese
        edili hanno iniziato — e fatto il salto di qualità — con un foglio. Excel è flessibile, lo
        puoi adattarlo al tuo metodo e usarlo per capire come sono fatti i tuoi numeri. Licenze e
        tempo di gestione restano voci da valutare.
      </p>
      <p>
        Una formula trascinata male, una riga sovrascritta o una copia non aggiornata possono
        alterare una decisione. Protezioni, convalide e cronologia aiutano, ma vanno configurate
        e usate: non sostituiscono il controllo delle fonti e delle formule.
      </p>

      <h2>Le tre soglie che dicono «è ora»</h2>
      <h3>1. Più di una persona deve aggiornare</h3>
      <p>
        Quando il capo cantiere inserisce le ore e l’amministrazione registra le fatture, verifica
        modalità di collaborazione, permessi e cronologia. Excel supporta la <a href="https://support.microsoft.com/en-us/excel/get-started/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring" target="_blank" rel="noopener noreferrer">creazione condivisa</a> nelle
        condizioni previste da Microsoft: più persone non significano automaticamente che il foglio
        sia inadeguato. Il problema emerge quando non riesci a mantenere un flusso controllato.
      </p>
      <h3>2. I cantieri aperti superano la manciata</h3>
      <p>
        Con due o tre commesse un foglio si aggiorna in mezz&apos;ora. Con dieci, l&apos;aggiornamento
        diventa un lavoro a sé — e la prima cosa che salta quando la settimana si complica. Un
        controllo che si aggiorna «quando c&apos;è tempo» non è un controllo.
      </p>
      <h3>3. Decidi su numeri di cui non sei sicuro</h3>
      <p>
        È il segnale più importante e il più sottovalutato. Se prima di guardare il margine di un
        cantiere devi chiederti «ma questo file è aggiornato?», il foglio ha già smesso di fare il suo
        mestiere.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="rounded-2xl bg-bg-soft p-5 text-sm font-semibold text-navy-900">Persone<br />Documenti<br />Aggiornamenti</div>
          <div>
            <p className="font-display text-lg font-bold text-navy-900">La soglia non è il fatturato</p>
            <p className="mt-2 text-muted">
              Verifica chi inserisce le informazioni, quanti passaggi richiedono una copia manuale
              e quanto tempo passa prima che il dato sia disponibile per decidere. Questi controlli
              sono più utili di una soglia fissa di fatturato o di cantieri.
            </p>
          </div>
        </div>
      </figure>

      <h2>Il costo nascosto del foglio</h2>
      <p>
        Excel «costa zero» solo se non conti il tempo. Il costo reale si compone di tre voci che
        nessuno mette a bilancio:
      </p>
      <ul>
        <li>
          <strong>Il tempo di aggiornamento</strong> — ore di amministrazione che crescono in modo
          più che proporzionale ai cantieri.
        </li>
        <li>
          <strong>Gli errori che nessuno vede</strong> — una formula sbagliata su una commessa può
          farti credere di guadagnare su un lavoro che sta perdendo.
        </li>
        <li>
          <strong>Le decisioni su dati vecchi</strong> — la più cara: quoti un lavoro nuovo sui costi
          dell&apos;anno scorso perché aggiornare il foglio richiedeva troppo tempo.
        </li>
      </ul>

      <h2>Cosa NON devi perdere nel passaggio</h2>
      <p>
        Qui sta l&apos;errore che rovina la maggior parte delle migrazioni: pensare che il gestionale
        <em> decida</em> cosa guardare. Non lo fa. Un software raccoglie e collega dati; quali numeri
        contano, come classifichi i costi e con che criterio ribalti la struttura resta una tua
        scelta — è il{" "}
        <Link href="/risorse/controllo-di-gestione-edilizia">controllo di gestione</Link>.
      </p>
      <p>
        Se passi al gestionale senza avere il metodo, ottieni numeri sbagliati più in fretta e con
        un&apos;interfaccia più bella. Il lavoro fatto su Excel — le categorie di costo, il conto di
        commessa, gli indicatori — <strong>si porta dietro</strong>: è la parte che vale.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Valuta il costo del flusso completo</p>
        <p className="mt-1 text-sm text-muted">Grafico schematico illustrativo, senza dati misurati: documenti e aggiornamenti possono aumentare il lavoro manuale. Anche un gestionale richiede configurazione, formazione e manutenzione.</p>
        <div className="mt-6"><AreaTrend points={[8, 12, 18, 26, 38, 52, 68, 88]} labels={["2 cant.", "", "4", "", "8", "", "12", ""]} /></div>
      </figure>

      <h2>Cosa chiedere a un gestionale per l&apos;edilizia</h2>
      <p>Tre requisiti. Se mancano, è un gestionale generico travestito:</p>
      <ol>
        <li>
          <strong>Collega i documenti alla commessa</strong> — DDT, fatture fornitore, rapportini ore
          devono riportare il riferimento del lavoro. È un passaggio della{" "}
          <Link href="/risorse/gestione-commessa-edile">gestione di commessa</Link>.
        </li>
        <li>
          <strong>Mostra il margine per cantiere</strong> confrontato col preventivo, mentre il lavoro
          è aperto.
        </li>
        <li>
          <strong>Gestisce SAL e varianti</strong> — le due cose che in edilizia decidono cassa e
          margine.
        </li>
      </ol>
      <p>
        <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a>{" "}
        nasce esattamente su questi tre punti: è il gestionale che usiamo quando il foglio ha finito
        il suo compito. Come si sceglie in generale lo trovi nella guida ai{" "}
        <Link href="/risorse/software-per-imprese-edili">software per imprese edili</Link>.
      </p>

      <h2>In sintesi</h2>
      <ol>
        <li>Excel va benissimo per iniziare, e insegna a conoscere i tuoi numeri.</li>
        <li>Le soglie sono tre: più persone, più cantieri, dati di cui non ti fidi.</li>
        <li>Il costo del foglio è tempo + errori + decisioni su dati vecchi.</li>
        <li>Il gestionale automatizza il metodo, non lo sostituisce.</li>
        <li>Chiedi tre cose: documenti collegati alla commessa, margine per cantiere, SAL e varianti.</li>
      </ol>
      <p>
        Non sai a che punto sei? Nell&apos;{" "}
        <Link href="/contatti">analisi gratuita</Link> guardiamo come stai tenendo i numeri oggi e ti
        diciamo se ti serve un gestionale o se il tuo foglio, sistemato bene, regge ancora.
      </p>
    </ArticleShell>
  );
}
