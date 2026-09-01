import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, DonutStat } from "@/components/Graphics";
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
    a: "Sì, finché i cantieri aperti contemporaneamente sono pochi — indicativamente sotto i cinque — e una sola persona aggiorna il file. Oltre quella soglia il costo non è la licenza del gestionale: è il tempo di aggiornamento e soprattutto l'errore che nessuno vede, perché in un foglio non c'è nulla che ti avvisi quando un dato è sbagliato.",
  },
  {
    q: "Quando conviene passare a un gestionale?",
    a: "Quando si verifica almeno una di queste tre condizioni: più persone devono aggiornare gli stessi dati, i cantieri aperti superano la manciata, oppure ti accorgi che stai prendendo decisioni su numeri che non sai se sono aggiornati. La soglia non è il fatturato: è la complessità organizzativa.",
  },
  {
    q: "Qual è il vero costo di Excel?",
    a: "Non è zero. È fatto di tre voci: il tempo di aggiornamento manuale, gli errori di formula o di copia-incolla che nessuno intercetta, e le decisioni prese su dati vecchi. Su un'impresa con diversi cantieri aperti, queste tre voci superano rapidamente il costo di una licenza.",
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
          Excel funziona finché i cantieri aperti sono pochi e a toccare il file c&apos;è una persona
          sola. Oltre quella soglia, l&apos;errore di aggiornamento costa più della licenza di un
          gestionale.
        </strong>{" "}
        La domanda giusta non è «Excel o gestionale», ma: <em>a che punto sono?</em> Perché il
        passaggio ha un momento giusto, e farlo troppo presto è uno spreco quanto farlo troppo tardi.
      </p>

      <h2>Excel non è il nemico</h2>
      <p>
        Partiamo da una cosa che quasi nessun venditore di software ti dirà: <strong>un foglio di
        calcolo ben impostato è un ottimo strumento di controllo di gestione</strong>. Molte imprese
        edili hanno iniziato — e fatto il salto di qualità — con un foglio. Excel è flessibile, lo
        controlli tu, costa zero e ti costringe a capire come sono fatti i tuoi numeri.
      </p>
      <p>
        Il problema di Excel non è la potenza: è che <strong>non si difende dagli errori</strong>. Una
        formula trascinata male, una riga incollata sopra un&apos;altra, un file aggiornato ieri che
        credi di oggi. Nessuno ti avvisa. E in edilizia le decisioni si prendono su quei numeri.
      </p>

      <h2>Le tre soglie che dicono «è ora»</h2>
      <h3>1. Più di una persona deve aggiornare</h3>
      <p>
        È la soglia più netta. Quando il capo cantiere deve inserire le ore, l&apos;amministrazione le
        fatture e tu vuoi leggere il margine, un file condiviso diventa una fonte di conflitti: chi ha
        sovrascritto cosa, quale versione è quella buona.
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
          <DonutStat percent={5} sublabel="cantieri aperti" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">La soglia non è il fatturato</p>
            <p className="mt-2 text-muted">
              Un&apos;impresa da 2 milioni con tre commesse lunghe può stare benissimo su un foglio.
              Una da 600 mila con dodici cantieri piccoli no. Quello che conta è quante cose devi
              tenere aggiornate insieme, non quanto fatturi.
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
        <p className="font-display text-lg font-bold text-navy-900">Il costo del foglio cresce, quello dello strumento no</p>
        <p className="mt-1 text-sm text-muted">Tempo di aggiornamento ed errori crescono con i cantieri aperti; la licenza resta piatta.</p>
        <div className="mt-6"><AreaTrend points={[8, 12, 18, 26, 38, 52, 68, 88]} labels={["2 cant.", "", "4", "", "8", "", "12", ""]} /></div>
      </figure>

      <h2>Cosa chiedere a un gestionale per l&apos;edilizia</h2>
      <p>Tre requisiti. Se mancano, è un gestionale generico travestito:</p>
      <ol>
        <li>
          <strong>Collega i documenti alla commessa</strong> — DDT, fatture fornitore, rapportini ore
          devono «sapere» a quale cantiere appartengono. È il 90% del lavoro della{" "}
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
