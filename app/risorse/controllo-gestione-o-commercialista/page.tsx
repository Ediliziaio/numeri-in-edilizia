import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareBars, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("controllo-gestione-o-commercialista")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "controllo di gestione o commercialista",
    "differenza commercialista controllo di gestione",
    "commercialista impresa edile",
    "chi fa il controllo di gestione",
    "serve il controllo di gestione se ho il commercialista",
  ],
  alternates: { canonical: "/risorse/controllo-gestione-o-commercialista" },
  openGraph: { title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Che differenza c'è tra commercialista e controllo di gestione?",
    a: "Il commercialista tiene la contabilità e certifica il consuntivo: bilancio, dichiarazioni, adempimenti fiscali. Il controllo di gestione misura il margine di ogni commessa mentre il cantiere è ancora aperto, per farti decidere in tempo. Il primo guarda al passato per obbligo di legge, il secondo al presente per scelta gestionale.",
  },
  {
    q: "Il controllo di gestione sostituisce il commercialista?",
    a: "No, e non deve. Sono due funzioni diverse e complementari: senza commercialista non sei in regola, senza controllo di gestione non sai quanto guadagni. Chi te li presenta come alternativi ti sta facendo scegliere tra due cose che servono entrambe.",
  },
  {
    q: "Non può farmi il commercialista anche il controllo di gestione?",
    a: "Alcuni studi offrono anche questo servizio, ed è un'ottima cosa. Ma va verificato che sia un vero controllo di gestione per commessa — margine cantiere per cantiere, confronto preventivo/consuntivo — e non una semplice riclassificazione del bilancio. In edilizia la differenza è tutta lì.",
  },
  {
    q: "Da che dimensione serve il controllo di gestione in un'impresa edile?",
    a: "Da subito. Nelle imprese piccole una sola commessa in perdita pesa moltissimo sull'anno, quindi il ritorno è ancora più alto. Non è una questione di dipendenti o fatturato: è una questione di quante decisioni prendi a intuito.",
  },
  {
    q: "Quanto tempo mi porta via, se ho già il commercialista?",
    a: "Il grosso del lavoro è iniziale: riclassificare i costi in logica di commessa e definire gli indicatori. Dopo bastano circa dieci minuti a settimana per leggere i numeri chiave. Il commercialista continua a fare il suo lavoro, senza sovrapposizioni.",
  },
  {
    q: "Il commercialista e il consulente di controllo di gestione lavorano insieme?",
    a: "Sì, ed è la situazione migliore. Il commercialista fornisce i dati contabili, il controllo di gestione li riclassifica per commessa e li trasforma in decisioni. Quando i due ruoli dialogano, l'imprenditore ci guadagna due volte: è in regola e sa dove sta andando.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        <strong>
          Non è una scelta: servono entrambi, ma fanno due lavori diversi. Il commercialista
          certifica il consuntivo — bilancio, imposte, adempimenti — e lavora sul passato per obbligo
          di legge. Il controllo di gestione misura il margine di ogni commessa mentre il cantiere è
          ancora aperto, e serve a te per decidere in tempo.
        </strong>{" "}
        Se stai valutando «ho già il commercialista, mi serve davvero altro?», questa guida ti dà la
        risposta con i ruoli in chiaro.
      </p>

      <h2>La definizione, in una riga</h2>
      <p>
        La contabilità fotografa il passato, il controllo di gestione guida il presente: il bilancio
        arriva a marzo, il margine si perde a settembre. È tutta qui la differenza. Il{" "}
        <Link href="/risorse/controllo-di-gestione-edilizia">controllo di gestione in edilizia</Link>{" "}
        è il sistema che misura ricavi, costi diretti di cantiere e costi di struttura commessa per
        commessa, per conoscere il margine reale <em>mentre</em> il cantiere è ancora aperto.
      </p>
      <p>
        Numeri in Edilizia è il metodo italiano di controllo di gestione dedicato esclusivamente alle
        imprese edili: insegna all'imprenditore a leggere i propri numeri e a governare il margine di
        ogni commessa. Non sostituisce il commercialista — gli sta accanto, su un altro piano.
      </p>

      <h2>Chi fa cosa: i due ruoli in chiaro</h2>
      <p>
        Il modo più semplice per capirlo è guardare a <strong>quando</strong> ciascuno interviene e{" "}
        <strong>a chi serve</strong> il suo lavoro.
      </p>

      <h3>Il commercialista</h3>
      <ul>
        <li><strong>Quando</strong>: a consuntivo, con cadenze fiscali (trimestre, anno).</li>
        <li><strong>Cosa produce</strong>: bilancio, dichiarazioni, registri, adempimenti.</li>
        <li><strong>A chi serve</strong>: allo Stato, alla banca, ai soci — e a te per essere in regola.</li>
        <li><strong>Domanda a cui risponde</strong>: «com'è andato l'anno scorso?»</li>
      </ul>

      <h3>Il controllo di gestione</h3>
      <ul>
        <li><strong>Quando</strong>: durante, ogni settimana, sui cantieri aperti.</li>
        <li><strong>Cosa produce</strong>: margine per commessa, scostamento preventivo/consuntivo, indicatori di cassa.</li>
        <li><strong>A chi serve</strong>: solo a te, per decidere.</li>
        <li><strong>Domanda a cui risponde</strong>: «quanto sto guadagnando su questo cantiere, adesso?»</li>
      </ul>

      <p>
        Il commercialista certifica il consuntivo, il controllo di gestione governa il preventivo:
        sono due funzioni diverse, non alternative. Chi te le presenta come un aut-aut ti sta facendo
        scegliere tra due cose che servono entrambe.
      </p>

      <h2>Perché il bilancio non basta a un'impresa edile</h2>
      <p>
        Il bilancio è un numero solo, riferito a tutta l'impresa e a un anno intero. In edilizia
        questo è un problema, per tre motivi.
      </p>
      <p>
        <strong>Primo: arriva tardi.</strong> Il bilancio del 2026 lo leggi nella primavera del 2027.
        I cantieri di cui parla sono chiusi da mesi: qualunque cosa scopri, non puoi più correggerla.
      </p>
      <p>
        <strong>Secondo: fa la media.</strong> Un'impresa può chiudere l'anno con un utile positivo e
        avere due commesse su cinque in perdita: le buone coprono le cattive e nessuno se ne accorge.
        Il bilancio non ti dice <em>quali</em> lavori ti fanno guadagnare — e senza quello non sai
        quali accettare l'anno prossimo.
      </p>
      <p>
        <strong>Terzo: parla un'altra lingua.</strong> È costruito per il fisco, non per il cantiere.
        Non trovi il margine di commessa, non trovi lo scostamento dal preventivo, non trovi
        l'incidenza della manodopera. Trovi voci civilistiche che rispondono a domande che non sono
        le tue.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={40} sublabel="commesse a margine debole" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">La media che nasconde</p>
            <p className="mt-2 text-muted">
              Un'impresa con due commesse su cinque a margine negativo può comunque chiudere in
              utile. Il bilancio dice «bene»; il{" "}
              <Link href="/risorse/margine-impresa-edile">margine per commessa</Link> dice dove stai
              perdendo. Sono due verità diverse sullo stesso anno.
            </p>
          </div>
        </div>
      </figure>

      <h2>Come si usano insieme, in pratica</h2>
      <p>
        La convivenza corretta è semplice, e non richiede di cambiare commercialista né di
        aggiungere burocrazia.
      </p>
      <h3>1. Il commercialista continua a fare il suo lavoro</h3>
      <p>
        Contabilità, bilancio, adempimenti: nulla cambia. È lui la fonte dei dati contabili grezzi, e
        deve restare tale.
      </p>
      <h3>2. Quei dati vengono riclassificati per commessa</h3>
      <p>
        Le stesse fatture, gli stessi costi, letti però per <em>cantiere</em> invece che per l'impresa
        nel suo insieme. È il passaggio che trasforma la contabilità in{" "}
        <Link href="/risorse/gestione-commessa-edile">gestione della commessa</Link>.
      </p>
      <h3>3. Si aggiungono i dati che la contabilità non ha</h3>
      <p>
        Ore effettive per cantiere, avanzamento lavori, varianti concordate: informazioni che non
        passano dallo studio ma che decidono il margine. Senza queste, il controllo di gestione resta
        zoppo.
      </p>
      <h3>4. Si leggono pochi indicatori, ogni settimana</h3>
      <p>
        Margine per commessa, scostamento dal preventivo, incassi previsti. Sono i{" "}
        <Link href="/risorse/kpi-impresa-edile">KPI dell'impresa edile</Link>: dieci minuti, non un
        pomeriggio.
      </p>

      <h2>Un esempio numerico</h2>
      <p>
        Impresa edile, 1,2 M€ di fatturato, cinque cantieri chiusi nell'anno. Il commercialista
        consegna il bilancio: <strong>utile netto 36.000 €, il 3% del fatturato</strong>. Sembra
        magro ma positivo, e l'anno si archivia così.
      </p>
      <p>Riclassificando gli stessi dati per commessa, il quadro cambia:</p>
      <ul>
        <li>Cantiere A — 320.000 € di ricavi, margine <strong>+14%</strong></li>
        <li>Cantiere B — 260.000 €, margine <strong>+11%</strong></li>
        <li>Cantiere C — 210.000 €, margine <strong>+6%</strong></li>
        <li>Cantiere D — 240.000 €, margine <strong>−4%</strong></li>
        <li>Cantiere E — 170.000 €, margine <strong>−9%</strong></li>
      </ul>
      <p>
        Il bilancio diceva «3%». La lettura per commessa dice un'altra cosa: due cantieri hanno
        lavorato in perdita e si sono mangiati il margine prodotto dagli altri tre. Sono gli stessi
        identici dati contabili — cambia solo l'angolo da cui li guardi. E cambia la decisione: quei
        due lavori, l'anno prossimo, o si quotano diversamente o non si prendono.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Lo stesso anno, due letture</p>
        <p className="mt-1 text-sm text-muted">Utile a bilancio contro margine dei soli cantieri sani: la differenza è ciò che stai regalando.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={3} after={12} unit="%" /></div>
      </figure>

      <h2>Gli errori tipici</h2>
      <ol>
        <li>
          <strong>Aspettare il bilancio per capire come va.</strong> È l'errore più costoso: quando
          il dato arriva, il cantiere è chiuso e la perdita è definitiva.
        </li>
        <li>
          <strong>Chiedere al commercialista una cosa che non è il suo mestiere.</strong> Molti
          studi non fanno controllo di gestione per commessa — non è una mancanza, è un altro
          servizio.
        </li>
        <li>
          <strong>Confondere riclassificazione di bilancio e controllo di gestione.</strong> Vedere
          il bilancio in forma più leggibile è utile, ma resta un dato a consuntivo e aggregato.
        </li>
        <li>
          <strong>Guardare il conto corrente al posto del margine.</strong> Incasso e margine sono
          due piani diversi: un cantiere può incassare tanto ed essere in perdita.
        </li>
      </ol>

      <h2>Come cambia per mestiere</h2>
      <p>
        La distanza tra bilancio e realtà di cantiere è più o meno marcata a seconda del lavoro. In
        una <Link href="/settori/imprese-edili">impresa di costruzioni</Link> con commesse lunghe, il
        bilancio annuale può cadere a metà di un cantiere e restituire un quadro parziale. In
        un'impresa di <Link href="/settori/ristrutturazioni">ristrutturazioni</Link>, con molti
        cantieri brevi in parallelo, la media di bilancio nasconde ancora di più: i lavori sani e
        quelli in perdita si compensano continuamente e senza lettura per commessa non li distingui.
      </p>

      <h2>In sintesi</h2>
      <ol>
        <li>Il commercialista serve per essere in regola e certificare il consuntivo.</li>
        <li>Il controllo di gestione serve a te per governare il margine mentre puoi ancora agire.</li>
        <li>Non sono alternativi: lavorano sugli stessi dati, con scopi e tempi diversi.</li>
        <li>Il salto di qualità è leggere i numeri <em>per commessa</em>, non per impresa.</li>
        <li>Bastano pochi indicatori, letti ogni settimana.</li>
      </ol>
      <p>
        Se vuoi vedere che quadro esce dai tuoi numeri quando li leggi per commessa, è esattamente
        quello che facciamo insieme nell'{" "}
        <Link href="/contatti">analisi gratuita</Link>: trenta minuti sui dati veri della tua
        impresa, senza impegno e senza toccare il rapporto con il tuo commercialista. E per tenere
        costi, SAL e fatture collegati alla commessa ogni giorno c'è{" "}
        <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a>,
        il gestionale per imprese edili.
      </p>
    </ArticleShell>
  );
}
