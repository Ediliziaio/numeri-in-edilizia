import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("controllo-di-gestione-edilizia")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/risorse/controllo-di-gestione-edilizia" },
  openGraph: { url: "/risorse/controllo-di-gestione-edilizia", title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Cos'è il controllo di gestione in edilizia?",
    a: "Il controllo di gestione in edilizia è il sistema che permette all'imprenditore di misurare in tempo reale ricavi, costi e margine di ogni commessa, così da decidere sui numeri anziché a intuito. È diverso dalla contabilità, che fotografa il passato: il controllo di gestione serve a guidare il presente.",
  },
  {
    q: "Che differenza c'è tra controllo di gestione e commercialista?",
    a: "Il commercialista tiene la contabilità e redige il bilancio, cioè una fotografia a consuntivo. Il controllo di gestione lavora prima e durante: ti dice quanto stai guadagnando su un cantiere mentre è ancora aperto, quando puoi ancora correggere.",
  },
  {
    q: "Quali indicatori servono davvero a un'impresa edile?",
    a: "Bastano pochi indicatori: margine per commessa, scostamento tra preventivo e consuntivo, incidenza dei costi di struttura e liquidità. Meglio pochi numeri letti ogni settimana che decine di report ignorati.",
  },
  {
    q: "Serve un software per fare controllo di gestione in edilizia?",
    a: "No, non per iniziare. Si parte dai dati che l'impresa già produce, organizzati nel modo giusto. Gli strumenti evoluti si introducono dopo, quando il metodo di lettura dei numeri è consolidato.",
  },
  {
    q: "Da quanti dipendenti conviene fare controllo di gestione?",
    a: "Da subito. Anzi, nelle imprese piccole ogni commessa in perdita pesa di più, quindi il ritorno del controllo di gestione è ancora più alto. Non è una questione di dimensione, ma di quante decisioni prendi «a intuito».",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        «Controllo di gestione» suona come qualcosa da grande azienda, da ufficio pieno di
        ragionieri. In realtà è l'esatto contrario: è lo strumento che serve di più proprio alla{" "}
        <strong>piccola e media impresa edile</strong>, dove ogni commessa in perdita pesa e non c'è
        margine per gli errori. In questa guida vediamo cos'è davvero, quali numeri servono e come
        iniziare — passo per passo, senza gergo.
      </p>

      <h2>Cos'è il controllo di gestione in edilizia</h2>
      <p>
        Il controllo di gestione è il sistema che ti fa sapere, in ogni momento,{" "}
        <strong>quanto guadagni davvero</strong> — sull'impresa e su ogni singolo cantiere. Misura
        ricavi, costi diretti di commessa, costi di struttura e margine, e trasforma questi numeri in
        decisioni: quali lavori accettare, come fare i preventivi, dove intervenire.
      </p>
      <p>
        Non è contabilità e non è burocrazia: è uno strumento di <strong>governo</strong>. La
        contabilità serve a rispettare la legge e a dire com'è andato l'anno; il controllo di gestione
        serve a te, per prendere decisioni migliori mentre l'anno è ancora in corso.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={14} sublabel="margine sotto controllo" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Dal «non lo so» al numero preciso</p>
            <p className="mt-2 text-muted">
              La domanda «quanto guadagno su questo cantiere?» dovrebbe avere sempre una risposta con un
              numero, non con un'alzata di spalle. Il controllo di gestione serve esattamente a questo.
            </p>
          </div>
        </div>
      </figure>

      <h2>Perché non basta il commercialista</h2>
      <p>
        Il commercialista fa un lavoro essenziale, ma diverso: <strong>fotografa il passato</strong>.
        Il bilancio arriva a consuntivo, quando i cantieri sono chiusi e non puoi più cambiare nulla.
        Il controllo di gestione lavora prima e durante, quando le tue decisioni contano ancora.
      </p>
      <p>
        I due ruoli non sono in competizione: sono complementari. Il commercialista ti dice se sei in
        regola e com'è andata; il controllo di gestione ti aiuta a far sì che vada meglio. Un'impresa
        edile solida ha bisogno di entrambi.
      </p>

      <h2>I pochi indicatori che contano</h2>
      <p>
        Non ti servono cento numeri. Te ne bastano quattro, letti con costanza (li approfondisco nella
        guida ai <Link href="/risorse/kpi-impresa-edile">KPI dell'impresa edile</Link>):
      </p>
      <ul>
        <li><strong><Link href="/risorse/margine-di-contribuzione-edilizia">Margine per commessa</Link></strong> — quanto guadagni su ogni cantiere.</li>
        <li><strong>Preventivo vs consuntivo</strong> — dove sei andato fuori rotta e perché.</li>
        <li><strong><Link href="/risorse/costi-di-struttura-impresa-edile">Incidenza dei costi di struttura</Link></strong> — quanto pesa la «macchina» impresa.</li>
        <li><strong><Link href="/risorse/liquidita-impresa-edile">Liquidità</Link></strong> — se e quando i soldi entrano davvero in cassa.</li>
      </ul>
      <p>
        A seconda del mestiere, a questi si aggiunge un indicatore critico specifico: il costo reale
        della posa per un <Link href="/settori/serramentisti">serramentista</Link>, il costo orario
        del mezzo per un'impresa di <Link href="/settori/movimento-terra">movimento terra</Link>, il
        prezzo dell'acciaio per una <Link href="/settori/carpenteria-metallica">carpenteria</Link>.
      </p>

      <h2>Come iniziare, passo per passo</h2>
      <ol>
        <li>Riclassifica i costi in logica di cantiere (diretti vs struttura).</li>
        <li>Calcola il margine reale delle <Link href="/risorse/gestione-commessa-edile">commesse aperte</Link>, non solo del totale.</li>
        <li>Confronta ogni commessa con il suo preventivo e leggi gli scostamenti.</li>
        <li>Usa quei dati per il prossimo preventivo e per decidere quali gare fare.</li>
      </ol>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Il margine diventa una linea che sai leggere</p>
        <p className="mt-1 text-sm text-muted">Con pochi indicatori letti ogni settimana, l'andamento smette di essere una sorpresa.</p>
        <div className="mt-6"><AreaTrend labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
      </figure>

      <blockquote>
        Meglio pochi indicatori usati ogni settimana che cento report che nessuno apre.
      </blockquote>

      <h2>Gli errori più comuni (e come evitarli)</h2>
      <p>
        Chi si avvicina al controllo di gestione tende a fare due errori opposti. Il primo è{" "}
        <strong>volere troppo</strong>: cruscotti pieni di numeri che nessuno legge, tabelle infinite,
        precisione contabile inutile. Il secondo è <strong>non iniziare mai</strong>, in attesa del
        software perfetto o del momento giusto. La verità sta nel mezzo: parti da pochi indicatori,
        con i dati che hai, e migliora nel tempo.
      </p>
      <p>
        L'altro errore classico è confondere <strong>incasso e margine</strong>: un cantiere può
        incassare tanto ed essere in perdita, e viceversa. Il controllo di gestione tiene sempre
        separati i due piani, così non ti illudi guardando il conto corrente.
      </p>

      <h2>Serve un software?</h2>
      <p>
        Per iniziare, no: bastano i dati che l'impresa già produce, organizzati nel modo giusto. Con
        il tempo, però, mantenere tutto aggiornato a mano diventa faticoso. È qui che entra uno
        strumento come <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a>, il gestionale che
        tiene insieme commesse, margini, DDT e fatturazione: non sostituisce il metodo, lo rende
        sostenibile giorno dopo giorno.
      </p>

      <h2>In sintesi</h2>
      <p>
        Il controllo di gestione in edilizia non è un lusso da grande impresa: è ciò che distingue chi
        fattura da chi guadagna. Parti da pochi indicatori, leggili ogni settimana, decidi sui numeri.
        Il modo più veloce per capire da dove cominciare è{" "}
        <Link href="/contatti">l'analisi gratuita dei tuoi numeri</Link>, oppure approfondire{" "}
        <Link href="/metodo">il metodo Numeri in Edilizia</Link>.
      </p>
    </ArticleShell>
  );
}
