import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, CompareBars, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("margine-impresa-edile")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/risorse/margine-impresa-edile" },
  openGraph: { url: "/risorse/margine-impresa-edile", title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Qual è un buon margine per un'impresa edile?",
    a: "Dipende dal tipo di lavori, ma la regola vera è un'altra: un margine è «buono» solo se lo hai deciso prima e lo stai monitorando. Molte imprese edili lavorano con margini a una cifra senza saperlo; con il controllo di gestione l'obiettivo è renderlo visibile e difenderlo commessa per commessa.",
  },
  {
    q: "Come calcolo il margine di una commessa edile?",
    a: "Ricavi della commessa meno i costi diretti (materiali, manodopera, mezzi, subappalti) e la quota di costi di struttura. Il margine di commessa è ciò che resta prima delle imposte: è il numero che ti dice se quel cantiere ti ha fatto guadagnare.",
  },
  {
    q: "Perché fatturo di più ma guadagno di meno?",
    a: "Perché il fatturato cresce ma i buchi di margine crescono con lui: preventivi a intuito, varianti non fatturate, manodopera non tracciata. Più cantieri apri, più questi errori si moltiplicano. Il controllo di gestione li rende visibili prima che erodano l'utile.",
  },
  {
    q: "Ogni quanto dovrei controllare il margine dei cantieri?",
    a: "Idealmente ogni settimana, con una lettura rapida di pochi indicatori. Il vantaggio del controllo di gestione non è la precisione contabile, ma la frequenza: vedere presto uno scostamento vale più che calcolarlo al centesimo a fine anno.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        È la situazione più frustrante per un imprenditore edile: il fatturato cresce, i cantieri non
        mancano, lavori dodici ore al giorno — e a fine anno il commercialista ti consegna un numero
        che non ha senso. <strong>Tanto lavoro, poco utile.</strong> Non sei solo: succede all'80%
        delle imprese edili. E quasi sempre la causa è una sola: il margine si perde in cantiere, e
        nessuno lo sta guardando.
      </p>
      <p>
        In questa guida vediamo, in modo concreto, dove sparisce il margine di un'impresa edile e come
        riprendertelo — senza vendere di più, senza lavorare di più, ma semplicemente iniziando a
        <strong> leggere i numeri giusti</strong>.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={9} sublabel="margine perso in media" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Il costo del «navigare a vista»</p>
            <p className="mt-2 text-muted">
              Nelle imprese edili senza controllo di gestione, i preventivi a intuito e le varianti non
              fatturate valgono in media diversi punti di marginalità l'anno. Su un fatturato da 1,5 M€
              sono decine di migliaia di euro che escono dal tuo utile.
            </p>
          </div>
        </div>
      </figure>

      <h2>Cos'è davvero il margine di commessa</h2>
      <p>
        Prima di capire dove si perde, mettiamo a fuoco cosa stiamo cercando. Il <strong>margine di
        commessa</strong> è quanto resta di un cantiere dopo aver tolto dai ricavi tutti i costi che
        quel cantiere ha generato:
      </p>
      <ul>
        <li>i <strong>costi diretti</strong>: materiali, manodopera, mezzi, noli, subappalti;</li>
        <li>la quota di <strong>costi di struttura</strong> (ufficio, mezzi propri, direzione) che il cantiere deve contribuire a coprire.</li>
      </ul>
      <p>
        È diverso dall'incasso e diverso dal fatturato: è il numero che ti dice se quel lavoro ti ha
        fatto guadagnare oppure no. E la cosa cruciale è che <strong>si può — e si deve — leggere
        mentre il cantiere è ancora aperto</strong>, non solo a consuntivo.
      </p>

      <h2>1. Fai preventivi «a sensazione»</h2>
      <p>
        Il preventivo è il momento in cui decidi se guadagnerai o no. Se lo costruisci sull'esperienza
        e sul «più o meno come l'ultima volta», stai scommettendo. Un preventivo solido parte dai{" "}
        <strong>costi reali</strong> (materiali, ore di manodopera, mezzi, subappalti) e ci somma un{" "}
        <strong>margine obiettivo deciso da te</strong>, non l'avanzo che speri di trovare.
      </p>
      <p>
        La differenza è enorme: nel primo caso il margine è una conseguenza casuale; nel secondo è una
        <strong> decisione</strong>. E una decisione la puoi difendere in trattativa, mentre una
        speranza no.
      </p>

      <h2>2. Non sai quale commessa guadagna e quale perde</h2>
      <p>
        Se guardi solo il totale a fine anno, stai mediando cantieri buoni e cantieri in perdita. Il
        risultato è che i primi pagano i secondi e tu non te ne accorgi. Serve il{" "}
        <strong>margine per commessa</strong>: sapere, uno per uno, quali cantieri ti fanno guadagnare.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Prima e dopo il controllo del margine</p>
        <p className="mt-1 text-sm text-muted">Un esempio reale di impresa che passa da preventivi a intuito a margine obiettivo.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={3} after={14} /></div>
      </figure>

      <h2>3. Le varianti te le paghi tu</h2>
      <p>
        In edilizia le varianti in corso d'opera sono la norma. Il problema è quando non vengono
        tracciate e fatturate al committente: diventano un costo tuo. Recuperare le varianti è spesso
        il modo più rapido per rimettere punti di margine in tasca <strong>senza vendere di più</strong>.
      </p>
      <p>
        Vale per tutti, ma in modo diverso a seconda del mestiere: per un'impresa di{" "}
        <Link href="/settori/ristrutturazioni">ristrutturazioni</Link> sono gli imprevisti «dietro il
        muro», per una <Link href="/settori/carpenteria-metallica">carpenteria metallica</Link> sono i
        rincari dell'acciaio non ribaltati. Il principio è lo stesso: quello che concordi, lo fatturi.
      </p>

      <h2>4. I costi di struttura restano nascosti</h2>
      <p>
        Ufficio, mezzi, assicurazioni, il tuo tempo: sono costi che vanno «spalmati» sulle commesse.
        Se li ignori, ogni cantiere sembra più redditizio di quanto sia davvero. Riclassificare i
        costi è il primo passo per vedere il margine <strong>vero</strong>.
      </p>

      <h2>5. Ti paghi per ultimo</h2>
      <p>
        L'imprenditore edile che si paga con «quello che resta» sta trattando il proprio stipendio
        come un avanzo. Nel controllo di gestione il <strong>compenso dell'imprenditore è una voce di
        budget</strong>: si pianifica, non si spera.
      </p>

      <blockquote>
        Il margine non si scopre in bilancio. Si governa in cantiere, mentre puoi ancora intervenire.
      </blockquote>

      <h2>Come si recupera il margine, in pratica</h2>
      <p>
        La buona notizia è che non serve un gestionale complicato né una laurea in economia. Serve un
        metodo in tre passi:
      </p>
      <ol>
        <li><strong>Leggere</strong> i numeri che già produci, riclassificati in logica di cantiere.</li>
        <li><strong>Governare</strong> il margine commessa per commessa, confrontando consuntivo e preventivo.</li>
        <li><strong>Decidere</strong> preventivi, gare e varianti sui dati, non a sensazione.</li>
      </ol>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Cosa succede quando i numeri sono sotto controllo</p>
        <p className="mt-1 text-sm text-muted">L'utile smette di essere una sorpresa di fine anno e diventa una linea che sai leggere.</p>
        <div className="mt-6"><AreaTrend labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
      </figure>

      <h2>Il margine cambia da mestiere a mestiere</h2>
      <p>
        Ogni impresa edile perde margine in un punto diverso: il{" "}
        <Link href="/settori/serramentisti">serramentista</Link> sulla posa sottostimata, l'impresa di{" "}
        <Link href="/settori/movimento-terra">movimento terra</Link> sul costo orario reale dei mezzi,
        l'<Link href="/settori/impiantisti">impiantista</Link> sulle assistenze in perdita. Per questo
        il metodo Numeri in Edilizia parte sempre dai numeri critici del tuo settore.
      </p>

      <h2>Da dove iniziare</h2>
      <p>
        Se ti sei riconosciuto in almeno tre dei cinque punti qui sopra, il margine che stai lasciando
        sul tavolo è probabilmente a due cifre. Il modo più veloce per scoprirlo è{" "}
        <Link href="/contatti">l'analisi gratuita dei tuoi numeri</Link>: trenta minuti in cui ti
        mostriamo, dati alla mano, dove sta l'utile che oggi non vedi. E se vuoi capire il metodo nel
        dettaglio, parti da <Link href="/metodo">come funziona</Link>.
      </p>
    </ArticleShell>
  );
}
