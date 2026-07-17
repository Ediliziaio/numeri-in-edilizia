import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("liquidita-impresa-edile")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "liquidità impresa edile",
    "cash flow edilizia",
    "impresa edile senza soldi in banca",
    "ciclo di cassa cantiere",
    "anticipi e incassi edilizia",
  ],
  alternates: { canonical: "/risorse/liquidita-impresa-edile" },
  openGraph: { title: article.title, description: article.description, type: "article", images: ["/opengraph-image"] },
};

const faq = [
  {
    q: "Perché la mia impresa edile è in utile ma non ha soldi in banca?",
    a: "Perché utile e cassa sono due cose diverse: l'utile si forma quando fatturi, la cassa quando incassi. In edilizia i costi (materiali, stipendi, subappalti) escono settimane o mesi prima degli incassi da SAL e saldi: quel divario si chiama ciclo di cassa, e se non è governato consuma la liquidità anche in un anno in utile.",
  },
  {
    q: "Cos'è il ciclo di cassa di un cantiere?",
    a: "È il tempo che passa tra quando paghi i costi del cantiere (materiali, manodopera, subappalti) e quando incassi i relativi ricavi. Più il ciclo è lungo, più capitale l'impresa deve anticipare. Si accorcia con acconti adeguati, SAL frequenti e fatturazione immediata.",
  },
  {
    q: "Come posso migliorare la liquidità della mia impresa edile?",
    a: "Le leve principali: acconti all'ordine più alti, SAL più frequenti e fatturati subito, varianti fatturate quando emergono (non a fine lavori), termini di pagamento fornitori allineati agli incassi, e un monitoraggio settimanale delle scadenze attive e passive.",
  },
  {
    q: "Quanta cassa dovrebbe avere un'impresa edile?",
    a: "Una riserva prudente copre almeno 2–3 mesi di costi fissi (stipendi e struttura). Sotto questa soglia ogni ritardo di incasso diventa un'emergenza; sopra, l'impresa può assorbire imprevisti e scegliere i lavori senza l'acqua alla gola.",
  },
  {
    q: "Il fido bancario risolve i problemi di liquidità?",
    a: "Il fido copre gli sfasamenti temporanei, non i problemi strutturali. Se il ciclo di cassa è sbilanciato (acconti bassi, SAL rari, incassi lenti), il fido si satura e diventa un costo fisso in più. Prima si sistema il ciclo, poi il fido torna a fare il suo mestiere: assorbire i picchi.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        C'è una telefonata che ogni commercialista conosce: «Ma come è possibile che sono in utile e
        non ho i soldi per pagare gli stipendi?». In edilizia non è un paradosso: è la normalità di
        chi non governa il <strong>ciclo di cassa</strong>. L'utile vive sulla carta, nel momento in
        cui fatturi; la cassa vive nel mondo reale, quando i soldi entrano ed escono. E in cantiere{" "}
        <strong>i soldi escono sempre prima di entrare</strong>. Vediamo come funziona e come si
        governa.
      </p>

      <h2>Utile e cassa: perché non coincidono (quasi) mai</h2>
      <p>Il meccanismo è semplice e spietato. Su una commessa tipo:</p>
      <ul>
        <li>i <strong>materiali</strong> li paghi a 30–60 giorni dall'ordine, spesso prima di posarli;</li>
        <li>gli <strong>stipendi</strong> escono ogni mese, dal primo giorno di cantiere;</li>
        <li>i <strong>subappaltatori</strong> vogliono essere pagati con cadenze ravvicinate;</li>
        <li>gli <strong>incassi</strong> arrivano per acconti e SAL — se li fatturi in tempo — e il saldo spesso mesi dopo la chiusura.</li>
      </ul>
      <p>
        Risultato: l'impresa <strong>anticipa</strong> il cantiere con la propria cassa. Più cantieri
        apri e più cresci, più capitale anticipi: ecco perché la crescita senza controllo di cassa è
        il modo più rapido per andare in crisi <em>facendo utili</em>.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={90} sublabel="giorni di ciclo tipico" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Il capitale che il cantiere ti chiede</p>
            <p className="mt-2 text-muted">
              Con un ciclo di cassa di ~90 giorni, un'impresa da 1,5 M€ tiene costantemente
              «immobilizzati» nei cantieri centinaia di migliaia di euro tra costi anticipati e
              crediti da incassare. Ridurre il ciclo di 30 giorni libera decine di migliaia di euro.
            </p>
          </div>
        </div>
      </figure>

      <h2>Il ciclo di cassa del cantiere, voce per voce</h2>
      <p>
        Il ciclo di cassa è la distanza temporale tra uscite ed entrate. Per governarlo bisogna
        conoscerne i pezzi:
      </p>
      <ol>
        <li><strong>Acconto all'ordine</strong> — la prima difesa: un acconto adeguato fa partire il cantiere coi soldi del committente, non coi tuoi.</li>
        <li><strong>SAL e fatturazione in corso d'opera</strong> — la cadenza dei <Link href="/risorse/sal-stato-avanzamento-lavori">SAL</Link> decide quanto anticipi: mensili è meglio che trimestrali, fatturati subito è meglio di «appena ho tempo».</li>
        <li><strong>Varianti</strong> — ogni <Link href="/risorse/varianti-in-corso-d-opera">extra fatturato a fine lavori</Link> è liquidità regalata per mesi.</li>
        <li><strong>Termini fornitori</strong> — i pagamenti passivi vanno negoziati guardando le date degli incassi, non in astratto.</li>
        <li><strong>Saldo e ritenute</strong> — il fine lavori va presidiato: collaudi rapidi, documenti pronti, solleciti puntuali.</li>
      </ol>

      <h2>I segnali che la liquidità sta scivolando</h2>
      <ul>
        <li>Il fido è sempre vicino al limite, anche nei mesi «buoni».</li>
        <li>Paghi i fornitori in ritardo per pagare gli stipendi (o viceversa).</li>
        <li>Accetti lavori sotto margine «per fare cassa» — che peggiorano il problema tra tre mesi.</li>
        <li>Non sai dire, oggi, quanto incasserai nei prossimi 60 giorni.</li>
      </ul>
      <p>
        L'ultimo punto è il più importante: la liquidità non si governa guardando il saldo del conto,
        ma <strong>guardando avanti</strong> — scadenze attive e passive delle prossime settimane,
        confrontate.
      </p>

      <h2>Lo scadenzario: il cruscotto della cassa</h2>
      <p>
        Lo strumento base è uno scadenzario settimanale: da un lato gli incassi attesi (SAL emessi,
        fatture scadute e in scadenza), dall'altro le uscite programmate (fornitori, stipendi, F24,
        rate). La differenza, settimana per settimana, ti dice <em>in anticipo</em> dove saranno i
        buchi — quando hai ancora il tempo di anticipare un SAL, sollecitare un incasso o spostare
        un pagamento.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">La cassa letta in anticipo</p>
        <p className="mt-1 text-sm text-muted">Con lo scadenzario, i buchi di liquidità si vedono settimane prima — e quasi sempre si possono evitare.</p>
        <div className="mt-6"><AreaTrend points={[30, 22, 26, 18, 28, 36, 32, 44]} labels={["Sett. 1", "", "Sett. 3", "", "Sett. 5", "", "Sett. 7", ""]} /></div>
      </figure>

      <h2>Margine e cassa: le due gambe della stessa impresa</h2>
      <p>
        Attenzione all'equivoco opposto: la cassa non sostituisce il margine. Un'impresa con buona
        liquidità ma <Link href="/risorse/margine-impresa-edile">margini deboli</Link> sta solo
        rimandando il problema; una con margini sani ma ciclo di cassa sbilanciato rischia di non
        arrivare a incassarli. Il <Link href="/metodo">metodo Numeri in Edilizia</Link> le tiene
        insieme: margine per commessa da un lato, liquidità e scadenze dall'altro — pochi numeri,
        letti ogni settimana.
      </p>

      <blockquote>
        In edilizia non fallisce chi non guadagna: fallisce chi finisce i soldi prima di incassare
        quello che ha guadagnato.
      </blockquote>

      <h2>Da dove iniziare</h2>
      <ol>
        <li>Ricostruisci il ciclo di cassa medio dei tuoi cantieri (quanti giorni anticipi?).</li>
        <li>Rivedi acconti e cadenza SAL sui prossimi contratti.</li>
        <li>Fattura varianti e SAL <em>appena</em> maturano.</li>
        <li>Imposta lo scadenzario settimanale attivo/passivo.</li>
        <li>Costruisci la riserva: 2–3 mesi di costi fissi come obiettivo.</li>
      </ol>
      <p>
        Se vuoi partire dai tuoi numeri reali, l'<Link href="/contatti">analisi gratuita</Link>{" "}
        include sempre uno sguardo al ciclo di cassa. E per tenere scadenze, SAL e incassi collegati
        alle commesse, c'è <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a>.
      </p>
    </ArticleShell>
  );
}
