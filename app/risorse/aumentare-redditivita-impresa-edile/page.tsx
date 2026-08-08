import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareBars, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("aumentare-redditivita-impresa-edile")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "aumentare redditività impresa edile",
    "aumentare margini impresa edile",
    "come guadagnare di più impresa edile",
    "redditività azienda edile",
    "aumentare utile impresa costruzioni",
  ],
  alternates: { canonical: "/risorse/aumentare-redditivita-impresa-edile" },
  openGraph: { url: "/risorse/aumentare-redditivita-impresa-edile", title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Come si aumenta la redditività di un'impresa edile?",
    a: "Non aumentando il fatturato, ma il margine: preventivi costruiti sui costi reali, varianti sempre fatturate, costi imputati alle commesse, produttività della manodopera più alta, meno lavori sotto margine e costi di struttura sotto controllo. Sono leve che alzano l'utile a parità di cantieri.",
  },
  {
    q: "Aumentare il fatturato aumenta i guadagni?",
    a: "Non necessariamente. In edilizia si può crescere di fatturato e ridurre l'utile, se i nuovi cantieri lavorano sotto margine o assorbono cassa. Prima si mette a posto la redditività per commessa, poi si cresce: crescere su margini sbagliati moltiplica il problema.",
  },
  {
    q: "Qual è la leva più veloce per migliorare i margini?",
    a: "Di solito le varianti: il lavoro extra eseguito e non fatturato è margine già prodotto e regalato. Tracciarle e farsele pagare recupera punti di marginalità in poche settimane, senza vendere un solo cantiere in più.",
  },
  {
    q: "Quanto dovrebbe rendere un'impresa edile?",
    a: "Nelle PMI edili il margine netto tipico è tra il 5% e il 10%, ma le imprese più strutturate e selettive arrivano oltre. Il numero giusto è quello del tuo budget: prima decidi quanto vuoi guadagnare, poi costruisci i preventivi perché accada.",
  },
  {
    q: "Serve tagliare i costi per essere più redditizi?",
    a: "Non solo. Tagliare aiuta, ma la leva più potente è spesso vedere i costi giusti al momento giusto: costo orario reale, sfridi, tempi morti, costi di struttura ribaltati. Si guadagna di più rendendo visibile ciò che oggi si nasconde, non solo comprimendo.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        C'è una convinzione che rovina molte imprese edili: «per guadagnare di più devo fatturare di
        più». Così si aprono cantieri, si assume, si comprano mezzi — e a fine anno resta meno di
        prima. Perché la redditività non è una questione di volume: è una questione di{" "}
        <strong>margine</strong>. Puoi crescere di fatturato e impoverirti, oppure aumentare l'utile a
        parità di cantieri. Ecco sette leve concrete per la seconda strada.
      </p>

      <h2>Prima capiamo dove sei</h2>
      <p>
        Redditività significa <strong>quanto resta</strong> di ogni euro fatturato. Se non sai a
        quanto ammonta oggi — margine per commessa e{" "}
        <Link href="/risorse/margine-impresa-edile">margine medio d'impresa</Link> — qualsiasi leva è
        un tentativo al buio. Il punto di partenza è misurare, non tagliare a caso.
      </p>

      <h2>Le 7 leve della redditività</h2>
      <h3>1. Preventivi sui costi reali</h3>
      <p>
        Il margine si decide in offerta. Un{" "}
        <Link href="/risorse/preventivo-edile-come-farlo">preventivo</Link> costruito sul costo vero
        (materiali, costo orario reale, struttura) e su un margine obiettivo deciso da te è la prima
        leva. La maggior parte dei margini persi nasce qui, a intuito.
      </p>
      <h3>2. Varianti sempre fatturate</h3>
      <p>
        Ogni <Link href="/risorse/varianti-in-corso-d-opera">lavoro extra non fatturato</Link> è
        margine già prodotto e regalato. Tracciarle e ribaltarle al committente è la leva più veloce:
        recupera punti in settimane, senza vendere un cantiere in più.
      </p>
      <h3>3. Costo orario reale in preventivo</h3>
      <p>
        Se quoti la manodopera alla paga oraria invece che al{" "}
        <Link href="/risorse/costo-orario-manodopera-edile">costo aziendale su ore produttive</Link>,
        stai sottostimando la voce principale del lavoro. Correggere questo numero raddrizza tutti i
        preventivi futuri.
      </p>
      <h3>4. Produttività: meno tempi morti</h3>
      <p>
        Attese per materiale mancante, spostamenti tra cantieri, rilavorazioni: ore pagate che non
        producono. Ogni punto di produttività recuperato abbassa il costo orario di tutta la squadra
        e alza il margine, a parità di stipendi.
      </p>
      <h3>5. Selezione delle commesse</h3>
      <p>
        Non tutti i lavori vanno presi. Un cantiere sotto margine occupa risorse che potresti dedicare
        a uno che rende. Saper dire di no ai lavori giusti è una leva di redditività, non una perdita
        di fatturato.
      </p>
      <h3>6. Costi di struttura sotto controllo</h3>
      <p>
        Se i preventivi non includono una quota di{" "}
        <Link href="/risorse/costi-di-struttura-impresa-edile">costi di struttura</Link>, lavori in
        «pareggio apparente»: ogni cantiere sembra guadagnare, l'azienda no. Ribaltarli correttamente
        recupera esattamente quella percentuale su ogni commessa.
      </p>
      <h3>7. Sfridi, rilavorazioni e fermi mezzi</h3>
      <p>
        I costi nascosti che quasi nessuno conteggia: materiale scartato, lavori rifatti, mezzi fermi
        che costano comunque. Non si eliminano per decreto, si riducono <em>vedendoli</em>.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Stesso fatturato, utile diverso</p>
        <p className="mt-1 text-sm text-muted">Due imprese con lo stesso volume: cambia solo il controllo del margine.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={4} after={11} unit="%" /></div>
      </figure>

      <h2>Perché il fatturato inganna</h2>
      <p>
        Il fatturato è la metrica più visibile e la più ingannevole. Puoi raddoppiarlo e dimezzare
        l'utile, se cresci su margini sbagliati o su cantieri che assorbono{" "}
        <Link href="/risorse/liquidita-impresa-edile">cassa</Link>. La crescita sana parte dalla
        redditività per commessa: prima si guadagna bene su ogni lavoro, poi si moltiplica.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={100} sublabel="cantieri sotto controllo" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">La redditività non si «spinge», si governa</p>
            <p className="mt-2 text-muted">
              Nessuna di queste leve richiede più lavoro o più fatturato. Richiede vedere i numeri
              giusti al momento giusto e decidere sui dati. È il lavoro del{" "}
              <Link href="/risorse/controllo-di-gestione-edilizia">controllo di gestione</Link>.
            </p>
          </div>
        </div>
      </figure>

      <h2>Da dove partire</h2>
      <ol>
        <li>Misura il margine reale delle commesse aperte.</li>
        <li>Recupera subito le varianti non fatturate.</li>
        <li>Correggi il costo orario nei preventivi.</li>
        <li>Calcola e ribalta i costi di struttura.</li>
        <li>Rivedi quali lavori conviene davvero prendere.</li>
      </ol>
      <p>
        Vuoi sapere quanti punti di margine puoi recuperare già sui cantieri che hai aperto oggi? È
        esattamente quello che calcoliamo nell'{" "}
        <Link href="/contatti">analisi gratuita dei tuoi numeri</Link>: 30 minuti, senza impegno, sui
        dati veri della tua impresa.
      </p>
    </ArticleShell>
  );
}
