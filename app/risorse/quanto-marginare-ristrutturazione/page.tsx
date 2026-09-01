import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareBars, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("quanto-marginare-ristrutturazione")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "quanto marginare una ristrutturazione",
    "margine lavori di ristrutturazione",
    "marginalità ristrutturazioni",
    "quanto guadagna un'impresa di ristrutturazioni",
    "margine ristrutturazione appartamento",
  ],
  alternates: { canonical: "/risorse/quanto-marginare-ristrutturazione" },
  openGraph: {
    url: "/risorse/quanto-marginare-ristrutturazione",
    title: article.title,
    description: article.description,
    type: "article",
    images: [article.cover ?? "/opengraph-image"],
  },
};

const faq = [
  {
    q: "Quanto deve marginare un lavoro di ristrutturazione?",
    a: "Come riferimento, un lavoro di ristrutturazione dovrebbe lasciare un margine di commessa tra il 12% e il 18% dopo i costi diretti e la quota di struttura. Sotto il 10% il lavoro è fragile: un solo imprevisto dietro un muro lo porta in perdita. Le ristrutturazioni sopportano più imprevisti delle nuove costruzioni, quindi vogliono un margine più alto, non più basso.",
  },
  {
    q: "Perché le ristrutturazioni marginano meno di quanto sembra?",
    a: "Per tre motivi ricorrenti: gli imprevisti che emergono solo aprendo (impianti, umidità, solai), i lavori extra concordati a voce e mai fatturati, e le ore di manodopera non tracciate su cantieri piccoli e vicini tra loro. Sommati, questi tre spiegano quasi sempre la distanza tra il margine previsto e quello reale.",
  },
  {
    q: "Come si quota una ristrutturazione senza andare in perdita?",
    a: "Partendo dai costi reali (materiali, costo orario vero della manodopera, mezzi, subappalti), caricando la quota di costi di struttura e aggiungendo un margine obiettivo deciso prima. Sulle ristrutturazioni serve anche una riserva esplicita per gli imprevisti, e una regola scritta su come verranno quotate le varianti.",
  },
  {
    q: "Quanto incide la manodopera in una ristrutturazione?",
    a: "Molto più che in altri lavori edili: nelle ristrutturazioni la componente di manodopera è preponderante, perché si lavora su strutture esistenti, in spazi stretti e con molte lavorazioni diverse. È il motivo per cui sbagliare il costo orario qui costa più che altrove.",
  },
  {
    q: "Conviene fare tanti cantieri piccoli o pochi grandi?",
    a: "Dipende dalla tua struttura, ma i cantieri piccoli hanno un costo nascosto: spostamenti, riattrezzaggi, tempi morti tra un lavoro e l'altro. Se non imputi le ore al cantiere giusto, quel costo sparisce dai conti e il margine dei lavori piccoli risulta più alto del reale.",
  },
  {
    q: "Come gestisco gli imprevisti dietro i muri?",
    a: "Non eliminandoli — non si può — ma prezzandoli: una riserva per imprevisti esplicita in preventivo, e un accordo scritto con il committente su come si quotano i lavori che emergono. Così l'imprevisto diventa una variante fatturata invece che un costo che assorbi tu.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        <strong>
          Un lavoro di ristrutturazione dovrebbe lasciare un margine di commessa tra il 12% e il 18%
          dopo costi diretti e quota di struttura. Sotto il 10% è fragile: basta un imprevisto dietro
          un muro per portarlo in perdita.
        </strong>{" "}
        Il problema è che le ristrutturazioni <em>sembrano</em> marginare bene — e quasi sempre
        marginano meno di quanto l&apos;imprenditore crede. Vediamo perché, e come quotarle.
      </p>

      <h2>Perché la ristrutturazione vuole un margine più alto</h2>
      <p>
        C&apos;è un errore concettuale diffuso: siccome la ristrutturazione ha meno rischio
        strutturale di una nuova costruzione, si tende a quotarla con margini più bassi. È il
        contrario di quello che servirebbe. Nelle ristrutturazioni lavori su qualcosa che{" "}
        <strong>non hai progettato tu</strong>: quello che c&apos;è dietro un muro lo scopri quando lo
        apri. Più incertezza significa più margine necessario, non meno.
      </p>

      <h2>Dove si perde il margine, nelle ristrutturazioni</h2>
      <h3>1. Gli imprevisti che emergono aprendo</h3>
      <p>
        Impianti fuori norma, umidità, solai da consolidare, tracce che non tornano. Sono la
        specificità del mestiere: non si eliminano, si <strong>prezzano</strong>. Se in preventivo non
        c&apos;è una riserva esplicita per imprevisti, ogni sorpresa esce dal tuo margine.
      </p>
      <h3>2. Gli extra concordati a voce</h3>
      <p>
        È il buco più grande. Nelle ristrutturazioni il committente è quasi sempre presente, spesso
        abita lì, e i lavori extra nascono parlando: «già che ci siete…». Eseguiti e mai fatturati,
        diventano margine regalato. È il tema delle{" "}
        <Link href="/risorse/varianti-in-corso-d-opera">varianti in corso d&apos;opera</Link>, e qui
        pesa più che in qualsiasi altro settore.
      </p>
      <h3>3. Le ore che nessuno imputa</h3>
      <p>
        Cantieri piccoli e vicini tra loro: la squadra passa da uno all&apos;altro, e le ore finiscono
        in un calderone unico. Senza imputazione, il margine del singolo lavoro è un&apos;ipotesi. E
        siccome nelle ristrutturazioni la manodopera è la voce dominante, sbagliare il{" "}
        <Link href="/risorse/costo-orario-manodopera-edile">costo orario</Link> qui è l&apos;errore
        più costoso di tutti.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={15} sublabel="margine obiettivo" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Il margine è una decisione, non un residuo</p>
            <p className="mt-2 text-muted">
              Un 15% deciso <em>prima</em> e difeso in trattativa è un margine. Quello che resta a
              fine lavori dopo aver assorbito imprevisti ed extra non è un margine: è un avanzo, e
              spesso non c&apos;è.
            </p>
          </div>
        </div>
      </figure>

      <h2>Un esempio numerico</h2>
      <p>
        Ristrutturazione completa di un appartamento. Preventivo <strong>85.000 €</strong>, margine
        atteso dall&apos;imprenditore: «circa il 20%».
      </p>
      <p>A consuntivo, imputando tutto correttamente:</p>
      <ul>
        <li>Materiali: <strong>28.000 €</strong></li>
        <li>Manodopera al costo reale (non alla paga oraria): <strong>31.000 €</strong></li>
        <li>Subappalti (impianti, cartongesso): <strong>14.000 €</strong></li>
        <li>Noli, trasporti, smaltimenti: <strong>3.500 €</strong></li>
        <li>Extra eseguiti e <em>non</em> fatturati: <strong>4.200 €</strong></li>
      </ul>
      <p>
        Costi diretti totali: <strong>80.700 €</strong>. Restano 4.300 €, cioè il <strong>5%</strong>{" "}
        — e da lì deve ancora uscire la quota di{" "}
        <Link href="/risorse/costi-di-struttura-impresa-edile">costi di struttura</Link>. Con
        un&apos;incidenza del 15% sui diretti, il lavoro chiude <strong>sotto zero</strong>.
      </p>
      <p>
        Il preventivo non era sbagliato di venti punti: era sbagliato di tre cose. Gli extra non
        fatturati, il costo orario sottostimato e la struttura non caricata. Le stesse tre di sempre.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Margine creduto e margine reale</p>
        <p className="mt-1 text-sm text-muted">Stesso cantiere: quello che l&apos;imprenditore pensava di guadagnare e quello che resta davvero.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={20} after={5} unit="%" /></div>
      </figure>

      <h2>Come quotare una ristrutturazione</h2>
      <ol>
        <li>
          <strong>Parti dai costi reali</strong>, non dal prezzo al metro quadro: il metro quadro è
          una media, e le ristrutturazioni sono tutte diverse.
        </li>
        <li>
          <strong>Usa il costo orario vero</strong> della manodopera sulle ore produttive — puoi
          calcolarlo con il{" "}
          <Link href="/strumenti/calcolo-costo-orario-manodopera">calcolatore del costo orario</Link>.
        </li>
        <li><strong>Carica la quota di struttura</strong> (tipicamente 10-20% dei costi diretti).</li>
        <li><strong>Aggiungi una riserva per imprevisti</strong> esplicita, non nascosta nei prezzi.</li>
        <li><strong>Metti per iscritto come si quotano le varianti</strong>, prima di iniziare.</li>
        <li><strong>Fissa il margine obiettivo</strong> e difendilo: è una decisione, non un residuo.</li>
      </ol>
      <p>
        Puoi verificare subito dove si colloca un tuo cantiere con il{" "}
        <Link href="/strumenti/calcolo-margine-commessa">calcolatore del margine di commessa</Link>:
        inserisci i numeri di un lavoro in corso e guarda cosa resta davvero.
      </p>

      <h2>Il confronto con gli altri mestieri</h2>
      <p>
        I riferimenti cambiano con il tipo di impresa. Le{" "}
        <Link href="/settori/ristrutturazioni">imprese di ristrutturazioni</Link> hanno molti cantieri
        brevi in parallelo e margini che si compensano tra loro: senza lettura per commessa non
        distingui i lavori sani da quelli in perdita. Un&apos;{" "}
        <Link href="/settori/imprese-edili">impresa di costruzioni</Link> con poche commesse lunghe ha
        il problema opposto: pochi lavori, ma ognuno pesa moltissimo sull&apos;anno. Il quadro
        generale è nella guida al{" "}
        <Link href="/risorse/margine-medio-impresa-edile">margine medio di un&apos;impresa edile</Link>.
      </p>

      <h2>In sintesi</h2>
      <ol>
        <li>Margine di riferimento su una ristrutturazione: 12-18%; sotto il 10% è fragile.</li>
        <li>Più incertezza significa margine più alto, non più basso.</li>
        <li>I tre buchi tipici: imprevisti non prezzati, extra a voce, ore non imputate.</li>
        <li>La manodopera è la voce dominante: sbagliarne il costo qui è l&apos;errore più caro.</li>
        <li>Il margine si decide in preventivo, non si scopre a fine lavori.</li>
      </ol>
      <p>
        Vuoi sapere quanto stanno marginando davvero le tue ristrutturazioni? È il primo conto che
        facciamo insieme nell&apos;{" "}
        <Link href="/contatti">analisi gratuita</Link>: trenta minuti sui numeri veri dei tuoi
        cantieri, senza impegno.
      </p>
    </ArticleShell>
  );
}
