import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareBars, DonutStat, AreaTrend } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("margine-medio-impresa-edile")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "margine medio impresa edile",
    "margine medio settore costruzioni",
    "marginalità impresa edile",
    "utile netto impresa edile",
    "quanto margina un'impresa edile",
  ],
  alternates: { canonical: "/risorse/margine-medio-impresa-edile" },
  openGraph: { title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Qual è il margine medio di un'impresa edile in Italia?",
    a: "Bisogna distinguere: il margine di commessa (ricavi meno costi diretti e quota di struttura) in un'impresa sana si colloca tipicamente tra il 10% e il 15%; il margine netto d'impresa, cioè l'utile finale sul fatturato, nelle PMI edili italiane si muove di norma tra il 2% e il 10% a seconda di specializzazione, dimensione e selettività dei lavori.",
  },
  {
    q: "Un margine del 10% è buono per un'impresa edile?",
    a: "Sul margine di commessa il 10% è la soglia dell'equilibrio: copre struttura e compenso e lascia qualcosa. Sotto il 10% l'impresa è fragile, perché un solo imprevisto porta la commessa in perdita. Sopra il 15% c'è spazio per investire, sbagliare e crescere.",
  },
  {
    q: "Perché il mio margine è più basso della media?",
    a: "Le cause ricorrenti sono sempre le stesse: preventivi costruiti a intuito invece che sui costi reali, varianti eseguite e non fatturate, costi di struttura non caricati sulle commesse, costo orario della manodopera sottostimato. Ognuna vale punti di margine, e insieme spiegano la distanza tra il 3% e il 12%.",
  },
  {
    q: "Il margine cambia in base al tipo di lavoro edile?",
    a: "Sì, molto. Nelle lavorazioni dove domina la materia prima i margini percentuali sono più compressi; dove pesa la manodopera specializzata o il servizio possono essere più alti. Per questo il confronto va fatto con imprese dello stesso mestiere, non con il settore costruzioni in generale.",
  },
  {
    q: "Come faccio a sapere qual è il mio margine reale?",
    a: "Serve leggerlo per commessa, non a bilancio: ricavi del cantiere meno costi diretti (materiali, manodopera al costo reale, mezzi, subappalti) meno la quota di costi di struttura. Il dato di bilancio è una media annuale che nasconde i cantieri in perdita compensati da quelli buoni.",
  },
  {
    q: "Il margine medio include il compenso dell'imprenditore?",
    a: "Dovrebbe. Se il titolare non si paga uno stipendio e vive dell'utile, il margine è artificialmente gonfiato: quel bilancio in realtà nasconde una perdita. Il compenso dell'imprenditore è un costo di struttura da mettere a budget, non l'avanzo che resta a fine anno.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        <strong>
          In un'impresa edile sana il margine di commessa si colloca tipicamente tra il 10% e il 15%,
          mentre il margine netto d'impresa — l'utile finale sul fatturato — nelle PMI italiane si
          muove di norma tra il 2% e il 10%.
        </strong>{" "}
        Sono però tre numeri diversi che vengono continuamente confusi, e confonderli è il motivo per
        cui molti imprenditori credono di guadagnare più di quanto guadagnino davvero.
      </p>

      <h2>I tre margini da non confondere</h2>
      <p>
        Quando si chiede «qual è il margine medio di un'impresa edile» si stanno in realtà mescolando
        tre grandezze distinte. Tenerle separate è il primo passo per capire dove sei.
      </p>
      <ul>
        <li>
          <strong>Margine di commessa</strong> — quanto resta di un singolo cantiere dopo costi
          diretti e quota di struttura. È il motore di tutto: se questo non tiene, non tiene niente.
        </li>
        <li>
          <strong>Margine di contribuzione</strong> — ricavi meno i soli costi variabili diretti,
          prima dei costi fissi. Serve a decidere se un lavoro conviene: lo approfondiamo nella guida
          al <Link href="/risorse/margine-di-contribuzione-edilizia">margine di contribuzione</Link>.
        </li>
        <li>
          <strong>Margine netto d'impresa</strong> — l'utile finale sul fatturato, dopo ogni costo e
          le imposte. È il numero che vedi a bilancio.
        </li>
      </ul>
      <p>
        Il margine di commessa è sempre più alto del margine netto, perché il secondo ha già assorbito
        tutto: struttura, oneri, imposte. Confrontare il tuo 12% di commessa con il 5% netto di
        un'altra impresa non ha senso: sono metri diversi.
      </p>

      <h2>I valori di riferimento</h2>
      <p>
        Come ordini di grandezza per il mercato italiano, questi sono gli intervalli entro cui si
        muovono le imprese edili.
      </p>

      <h3>Margine di commessa</h3>
      <ul>
        <li><strong>Sotto il 10%</strong> — zona fragile: un imprevisto e la commessa va in perdita.</li>
        <li><strong>10–15%</strong> — equilibrio: l'impresa copre struttura e compenso e lascia utile.</li>
        <li><strong>Oltre il 15%</strong> — solidità: c'è margine per investire, sbagliare e crescere.</li>
      </ul>

      <h3>Margine netto d'impresa</h3>
      <ul>
        <li><strong>2–5%</strong> — è dove si trova buona parte delle PMI edili italiane.</li>
        <li><strong>5–10%</strong> — l'intervallo indicato come fisiologico per una PMI di costruzioni ben gestita.</li>
        <li><strong>Oltre il 10%</strong> — imprese molto selettive sui lavori e con controllo dei costi maturo.</li>
      </ul>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={12} sublabel="margine di commessa sano" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">La soglia che cambia l'anno</p>
            <p className="mt-2 text-muted">
              Il salto dal 3% al 12% di margine di commessa non arriva quasi mai dal mercato: arriva
              da preventivi sui costi reali, varianti fatturate e costi di struttura caricati
              correttamente. Le stesse commesse, letture diverse.
            </p>
          </div>
        </div>
      </figure>

      <h2>Nota metodologica</h2>
      <p>
        Gli intervalli riportati sopra sono <strong>ordini di grandezza</strong> ricavati da analisi
        di settore pubblicate sul mercato italiano delle costruzioni e dall'esperienza diretta sul
        campo con imprese edili. <strong>Non sono il risultato di un'indagine statistica
        proprietaria</strong> e non vanno usati come benchmark ufficiale: servono a darti un metro di
        paragone realistico, non un verdetto. Il numero che conta davvero resta quello della tua
        impresa, letto commessa per commessa.
      </p>

      <h2>Perché il tuo margine potrebbe essere più basso</h2>
      <p>
        Quando un'impresa sta sotto questi valori, quasi mai è colpa del mercato. Le cause sono
        ricorrenti e, soprattutto, correggibili.
      </p>
      <p>
        <strong>Preventivi a intuito.</strong> Il margine si decide in offerta: se il prezzo nasce
        dall'esperienza e non dal costo reale, il margine è una speranza. È la causa numero uno, e
        quella che spiega la distanza maggiore dai valori di riferimento.
      </p>
      <p>
        <strong>Varianti regalate.</strong> Lavoro extra eseguito e mai fatturato: margine già
        prodotto e consegnato gratis al committente.
      </p>
      <p>
        <strong>Costi di struttura non caricati.</strong> Se i preventivi non includono una quota di{" "}
        <Link href="/risorse/costi-di-struttura-impresa-edile">costi di struttura</Link>, ogni
        cantiere che «pareggia» in realtà perde quella percentuale — tipicamente il 10–20% dei costi
        diretti.
      </p>
      <p>
        <strong>Costo orario sottostimato.</strong> Quotare la manodopera alla paga oraria invece che
        al costo aziendale su ore produttive significa sbagliare la voce più pesante del lavoro.
      </p>

      <h2>Un esempio numerico</h2>
      <p>
        Impresa edile con <strong>1,5 M€ di fatturato</strong>. A bilancio l'utile netto è di 45.000 €:
        il <strong>3%</strong>. L'imprenditore lo considera «in linea col settore» e va avanti così.
      </p>
      <p>Leggendo i numeri per commessa emerge il quadro vero:</p>
      <ul>
        <li>Margine medio di commessa: <strong>7%</strong></li>
        <li>Incidenza dei costi di struttura non caricata in preventivo: <strong>circa 4 punti</strong></li>
        <li>Varianti eseguite e non fatturate nell'anno: <strong>38.000 €</strong></li>
        <li>Compenso del titolare: <strong>non a budget</strong>, prelevato dall'utile</li>
      </ul>
      <p>
        Recuperando le sole varianti e caricando correttamente la struttura sui preventivi
        successivi, il margine di commessa si riporta sopra il 12% <em>a parità di cantieri</em>. Non
        serve fatturare di più: servivano numeri che nessuno stava guardando. Il percorso completo è
        quello descritto in{" "}
        <Link href="/risorse/aumentare-redditivita-impresa-edile">come aumentare la redditività</Link>.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Dal margine reale a quello possibile</p>
        <p className="mt-1 text-sm text-muted">Margine medio di commessa prima e dopo il controllo dei numeri, stesso fatturato.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={7} after={13} unit="%" /></div>
      </figure>

      <h2>Gli errori quando ci si confronta con la media</h2>
      <ol>
        <li>
          <strong>Confrontarsi col settore invece che col proprio mestiere.</strong> Il «margine
          medio delle costruzioni» mette insieme realtà troppo diverse per essere utile.
        </li>
        <li>
          <strong>Guardare il fatturato invece del margine.</strong> Crescere di volume con margini
          calanti significa più rischio e più cassa immobilizzata per lo stesso utile.
        </li>
        <li>
          <strong>Non contare il proprio stipendio.</strong> Se il titolare non si paga, il margine è
          gonfiato di quella cifra.
        </li>
        <li>
          <strong>Fermarsi alla media aziendale.</strong> È la media a nascondere i cantieri in
          perdita: senza lettura per commessa non li vedi.
        </li>
      </ol>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Il margine come linea, non come verdetto annuale</p>
        <p className="mt-1 text-sm text-muted">Letto ogni settimana per commessa, smette di essere una sorpresa di fine anno.</p>
        <div className="mt-6"><AreaTrend points={[7, 8, 10, 9, 12, 13, 14, 15]} labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
      </figure>

      <h2>Come cambia per mestiere</h2>
      <p>
        Il confronto ha senso solo tra imprese dello stesso tipo. Per un{" "}
        <Link href="/settori/serramentisti">serramentista</Link> il nodo è il costo reale della posa e
        l'incidenza del prodotto acquistato: margini percentuali più compressi sulla fornitura, più
        alti sulla manodopera specializzata. Per un'impresa di{" "}
        <Link href="/settori/movimento-terra">movimento terra</Link> il margine dipende dal costo
        orario dei mezzi e dai tempi morti: la stessa percentuale nominale può nascondere realtà
        opposte a seconda della saturazione delle macchine.
      </p>

      <h2>In sintesi</h2>
      <ol>
        <li>Margine di commessa sano: 10–15%; sotto il 10% l'impresa è fragile.</li>
        <li>Margine netto d'impresa: 2–5% è la realtà diffusa, 5–10% l'obiettivo fisiologico.</li>
        <li>Sono numeri diversi: confrontali con lo stesso metro.</li>
        <li>La distanza dalla media dipende quasi sempre da preventivi, varianti e struttura.</li>
        <li>L'unico dato che conta è il tuo, letto commessa per commessa.</li>
      </ol>
      <p>
        Vuoi sapere dove si colloca davvero la tua impresa rispetto a questi valori? È il primo
        conto che facciamo insieme nell'{" "}
        <Link href="/contatti">analisi gratuita dei tuoi numeri</Link>: trenta minuti, senza impegno,
        sui dati veri dei tuoi cantieri. E se vuoi capire quanto dovresti guadagnare in termini di
        utile e compenso, continua con{" "}
        <Link href="/risorse/quanto-guadagna-impresa-edile">quanto deve guadagnare un'impresa edile</Link>.
      </p>
    </ArticleShell>
  );
}
