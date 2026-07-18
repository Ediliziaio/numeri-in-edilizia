import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("sal-stato-avanzamento-lavori")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "SAL edilizia",
    "stato avanzamento lavori",
    "come si fa un SAL",
    "SAL e margine di commessa",
    "SAL lavori privati",
  ],
  alternates: { canonical: "/risorse/sal-stato-avanzamento-lavori" },
  openGraph: { title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Cos'è il SAL in edilizia?",
    a: "Il SAL (Stato Avanzamento Lavori) è il documento che fotografa quanta parte dell'opera è stata eseguita a una certa data, con le relative quantità e importi. È la base per emettere le fatture in corso d'opera: a ogni SAL corrisponde un pagamento proporzionale ai lavori svolti.",
  },
  {
    q: "Ogni quanto si fa un SAL?",
    a: "Dipende dal contratto: nei lavori pubblici la cadenza è definita dal capitolato, nei privati si concorda liberamente (tipicamente mensile o per fasi di lavorazione). La regola pratica: più il cantiere è lungo, più i SAL devono essere frequenti, per proteggere la liquidità dell'impresa.",
  },
  {
    q: "Che differenza c'è tra SAL e fattura?",
    a: "Il SAL è il documento tecnico che certifica l'avanzamento; la fattura è il documento fiscale che ne consegue. Prima si redige e si fa approvare il SAL, poi si emette la fattura per l'importo corrispondente.",
  },
  {
    q: "Come uso i SAL per controllare il margine?",
    a: "Confrontando, a ogni SAL, i ricavi maturati con i costi effettivamente sostenuti fino a quel momento. Se al 40% di avanzamento hai già consumato il 55% dei costi previsti, la commessa sta erodendo margine: accorgertene al secondo SAL invece che a fine lavori ti lascia il tempo di intervenire.",
  },
  {
    q: "Si possono fare SAL anche nei piccoli lavori privati?",
    a: "Sì, ed è consigliabile: anche in una ristrutturazione da poche decine di migliaia di euro, concordare pagamenti per fasi (acconto, avanzamenti, saldo) protegge la cassa e riduce il rischio di insoluti sul finale.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        Per molte imprese edili il SAL è «il documento che serve per farsi pagare». Vero, ma
        riduttivo: usato bene, lo Stato Avanzamento Lavori è <strong>lo strumento di controllo più
        potente che hai su una commessa lunga</strong> — il momento in cui puoi confrontare ciò che
        hai incassato con ciò che hai speso, mentre il cantiere è ancora aperto e puoi ancora
        correggere. In questa guida: cos'è il SAL, come si redige, come collegarlo al margine e gli
        errori che costano di più.
      </p>

      <h2>Cos'è il SAL e a cosa serve davvero</h2>
      <p>
        Lo Stato Avanzamento Lavori è il documento che certifica, a una certa data, <strong>quanta
        parte dell'opera è stata eseguita</strong>: lavorazioni completate, quantità, importi
        maturati. Le sue due funzioni:
      </p>
      <ul>
        <li><strong>Funzione contrattuale</strong> — è la base per la fatturazione in corso d'opera: a ogni SAL approvato corrisponde una fattura e un incasso.</li>
        <li><strong>Funzione di controllo</strong> — è la fotografia periodica della commessa: ti dice a che punto sei con i ricavi mentre i costi corrono.</li>
      </ul>
      <p>
        La prima funzione la conoscono tutti; la seconda è quella che separa le imprese che
        governano il margine da quelle che lo scoprono a fine lavori.
      </p>

      <h2>Come si redige un SAL fatto bene</h2>
      <ol>
        <li><strong>Parti dal computo</strong> — il SAL misura l'avanzamento rispetto al computo metrico del contratto: senza un computo chiaro, ogni SAL diventa una trattativa.</li>
        <li><strong>Rileva le quantità eseguite</strong> — misurazioni reali, non stime a occhio: libretto delle misure o rilievi fotografici datati.</li>
        <li><strong>Applica i prezzi contrattuali</strong> — le quantità eseguite per i prezzi pattuiti danno l'importo maturato.</li>
        <li><strong>Includi le varianti approvate</strong> — ogni <Link href="/risorse/varianti-in-corso-d-opera">variante formalizzata</Link> entra nel SAL: è il momento naturale per fatturarla.</li>
        <li><strong>Fai approvare e fattura subito</strong> — un SAL redatto e non fatturato è liquidità che dorme.</li>
      </ol>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={40} sublabel="avanzamento lavori" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">La domanda da farsi a ogni SAL</p>
            <p className="mt-2 text-muted">
              «Sono al 40% dei ricavi: a che percentuale sono dei costi previsti?» Se i costi corrono
              più veloci dell'avanzamento, la commessa sta erodendo margine — e lo stai scoprendo in
              tempo per intervenire.
            </p>
          </div>
        </div>
      </figure>

      <h2>Il SAL come termometro del margine</h2>
      <p>
        Qui il SAL smette di essere burocrazia e diventa controllo di gestione. A ogni stato
        d'avanzamento, metti in colonna tre numeri:
      </p>
      <ul>
        <li><strong>Ricavi maturati</strong> — l'importo del SAL cumulato;</li>
        <li><strong>Costi sostenuti</strong> — materiali, ore, subappalti e noli imputati alla commessa fino a quella data (serve la disciplina dei <Link href="/risorse/costi-di-cantiere-guida">costi di cantiere</Link>);</li>
        <li><strong>Margine maturato</strong> — la differenza, confrontata con il margine del <Link href="/risorse/preventivo-edile-come-farlo">preventivo</Link>.</li>
      </ul>
      <p>
        Se il margine maturato è in linea col preventivo, la commessa tiene. Se sta sotto, hai un
        segnale d'allarme <em>con mesi di anticipo</em> rispetto al consuntivo finale: puoi cercare
        la causa (una lavorazione fuori costo? varianti non fatturate? manodopera oltre le ore
        previste?) e correggere.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Margine letto SAL dopo SAL</p>
        <p className="mt-1 text-sm text-muted">La commessa che «scivola» si vede alla seconda rilevazione, non al collaudo.</p>
        <div className="mt-6"><AreaTrend points={[30, 28, 25, 27, 31, 34, 36, 38]} labels={["SAL 1", "", "SAL 3", "", "SAL 5", "", "SAL 7", ""]} /></div>
      </figure>

      <h2>SAL e liquidità: la cadenza è tutto</h2>
      <p>
        In edilizia si può fallire <em>in utile</em>: basta che i costi escano prima degli incassi.
        La cadenza dei SAL è la leva principale per governare questo sbilancio. SAL troppo distanti
        significano mesi di costi anticipati dall'impresa; SAL frequenti e fatturati subito
        significano cassa allineata all'avanzamento. Approfondiamo il tema nella guida alla{" "}
        <Link href="/risorse/liquidita-impresa-edile">liquidità dell'impresa edile</Link>.
      </p>

      <h2>Gli errori più costosi</h2>
      <ol>
        <li><strong>SAL redatti in ritardo</strong> — l'avanzamento non certificato è lavoro fatto e non pagato.</li>
        <li><strong>Varianti fuori SAL</strong> — se gli extra non entrano negli stati d'avanzamento, arrivano (forse) tutti alla fine, dove ogni cifra viene contestata.</li>
        <li><strong>Quantità stimate a occhio</strong> — favoriscono contestazioni e riserve del committente.</li>
        <li><strong>SAL senza confronto coi costi</strong> — usare il SAL solo per fatturare butta via la sua funzione di controllo.</li>
        <li><strong>Nessun SAL nei lavori privati</strong> — anche una ristrutturazione va scandita per fasi di pagamento.</li>
      </ol>

      <blockquote>
        Il SAL è l'unico momento in cui ricavi e costi della commessa si guardano in faccia prima
        della fine dei lavori. Sprecarlo per sola burocrazia è un lusso che nessuna impresa può
        permettersi.
      </blockquote>

      <h2>Metti i SAL a sistema</h2>
      <p>
        Perché il SAL funzioni da termometro serve che i costi arrivino sulla commessa in tempo
        reale: DDT, rapportini, fatture fornitori imputati man mano. Farlo a mano è possibile;
        mantenerlo nel tempo è il motivo per cui esistono strumenti come{" "}
        <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a>, dove SAL, costi e fatturazione
        vivono sulla stessa commessa. E se vuoi capire quanto margine stai perdendo tra un SAL e
        l'altro, parti dall'<Link href="/contatti">analisi gratuita dei tuoi numeri</Link>.
      </p>
    </ArticleShell>
  );
}
