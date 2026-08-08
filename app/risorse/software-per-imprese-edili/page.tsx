import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { DonutStat } from "@/components/Graphics";
import { IconExternal } from "@/components/Icons";
import { site } from "@/lib/site";
import { getArticle } from "@/lib/articles";

const article = getArticle("software-per-imprese-edili")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "software per imprese edili",
    "gestionale edilizia",
    "gestionale per impresa edile",
    "software gestione cantieri",
    "programma per preventivi edili",
  ],
  alternates: { canonical: "/risorse/software-per-imprese-edili" },
  openGraph: { url: "/risorse/software-per-imprese-edili", title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Qual è il miglior software per un'impresa edile?",
    a: "Quello che collega preventivi, commesse, costi e fatturazione in un unico flusso e ti mostra il margine di ogni cantiere in tempo reale. Le funzioni «di contorno» contano meno di questa catena: se il software non sa dirti quanto stai guadagnando su una commessa, non è lo strumento giusto. EdiliziaInCloud nasce esattamente attorno a questa catena.",
  },
  {
    q: "Meglio un gestionale verticale per l'edilizia o uno generico?",
    a: "Verticale. L'edilizia lavora per commesse, con SAL, varianti, subappalti, DDT di cantiere e fatturazione specifica: un gestionale generico costringe a forzature e fogli Excel paralleli. Un verticale come EdiliziaInCloud parla la lingua della commessa fin dal primo clic.",
  },
  {
    q: "Il software sostituisce il controllo di gestione?",
    a: "No: il software è lo strumento, il controllo di gestione è il metodo. Prima serve sapere quali numeri leggere (margine di commessa, scostamenti, costi imputati), poi lo strumento li rende disponibili ogni giorno senza fatica. Software senza metodo produce solo report ignorati.",
  },
  {
    q: "Quanto costa un gestionale per imprese edili?",
    a: "I gestionali cloud in abbonamento partono da poche decine di euro al mese: meno di un'ora di manodopera. Il vero costo da valutare è un altro: quello del NON averlo — varianti perse, preventivi sbagliati e margini invisibili valgono decine di migliaia di euro l'anno.",
  },
  {
    q: "Quanto tempo serve per partire con un gestionale edile?",
    a: "Con i gestionali cloud moderni si parte in giorni, non mesi: si caricano listino e commesse aperte e si inizia dal flusso più urgente (di solito preventivi e margine di commessa). L'errore da evitare è voler digitalizzare tutto subito: meglio un modulo usato bene che dieci a metà.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        Prima o poi ogni impresa edile arriva al punto in cui Excel non basta più: preventivi in un
        file, ore in un altro, DDT in un raccoglitore, fatture dal commercialista. Il risultato è che
        <strong> nessuno sa più quanto rende una commessa</strong> senza una serata di copia-incolla.
        È il momento del gestionale — ma sceglierlo male significa comprare un problema in più. Ecco
        cosa guardare davvero, senza gergo da venditori.
      </p>

      <h2>Il criterio che batte tutti gli altri</h2>
      <p>
        Puoi valutare cento funzioni, ma la domanda decisiva è una: <strong>«questo software sa
        dirmi, oggi, quanto sto guadagnando sulla commessa X?»</strong>. Se la risposta è sì — perché
        preventivi, costi, ore e fatture vivono sulla stessa commessa — tutto il resto è contorno. Se
        è no, stai guardando un programma di fatturazione con qualche funzione in più.
      </p>
      <p>
        Il motivo lo spieghiamo in tutta la guida al{" "}
        <Link href="/risorse/controllo-di-gestione-edilizia">controllo di gestione in edilizia</Link>:
        il numero che governa un'impresa edile è il <strong>margine per commessa</strong>. Il
        software giusto è quello costruito attorno a quel numero.
      </p>

      <h2>Le 7 funzioni essenziali di un gestionale edile</h2>
      <ol>
        <li><strong>Commesse al centro</strong> — ogni documento (preventivo, DDT, fattura, rapportino) collegato al cantiere che lo genera.</li>
        <li><strong>Preventivi su listino e costi reali</strong> — con margine obiettivo visibile, come da <Link href="/risorse/preventivo-edile-come-farlo">guida al preventivo</Link>.</li>
        <li><strong>Margine di commessa in tempo reale</strong> — preventivo vs consuntivo, aggiornato man mano che i costi entrano.</li>
        <li><strong>Gestione varianti</strong> — registrare, quotare e fatturare gli extra senza perderli (il buco descritto nella <Link href="/risorse/varianti-in-corso-d-opera">guida alle varianti</Link>).</li>
        <li><strong>Ore e manodopera per cantiere</strong> — rapportini digitali che imputano le ore alla commessa giusta.</li>
        <li><strong>DDT e magazzino collegati</strong> — il materiale esce con destinazione, non nel vuoto.</li>
        <li><strong>Fatturazione elettronica integrata</strong> — SAL, acconti e saldi che nascono dalla commessa, senza doppi inserimenti.</li>
      </ol>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={100} sublabel="dati sulla commessa" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Un solo posto, una sola verità</p>
            <p className="mt-2 text-muted">
              Il valore di un gestionale edile non è la singola funzione: è che preventivo, costi,
              ore e fatture della stessa commessa vivano insieme. È ciò che rende il margine
              leggibile senza copia-incolla.
            </p>
          </div>
        </div>
      </figure>

      <h2>Gli errori classici nella scelta</h2>
      <ul>
        <li><strong>Comprare il più completo</strong> — cento moduli che nessuno userà; vince lo strumento che la tua squadra usa davvero.</li>
        <li><strong>Comprare il più economico</strong> — se poi il margine di commessa non c'è, il risparmio costa carissimo.</li>
        <li><strong>Scegliere un generico</strong> — l'edilizia lavora per commesse, SAL e varianti: le forzature si pagano ogni giorno.</li>
        <li><strong>Pensare che il software faccia il metodo</strong> — senza sapere quali numeri leggere, ogni cruscotto resta chiuso.</li>
        <li><strong>Digitalizzare tutto il primo mese</strong> — meglio partire da preventivi e margine, poi allargare.</li>
      </ul>

      <h2>Gestionale + metodo: la combinazione che funziona</h2>
      <p>
        Il software da solo non salva nessuno: produce numeri che qualcuno deve saper leggere. Il
        metodo da solo fatica a durare: senza uno strumento, l'aggiornamento manuale muore in tre
        mesi. La combinazione vincente è <strong>metodo + strumento</strong>:
      </p>
      <ul>
        <li>il <Link href="/metodo">metodo Numeri in Edilizia</Link> definisce <em>quali</em> numeri guardare e come decidere;</li>
        <li>il gestionale li tiene aggiornati ogni giorno, senza fatica.</li>
      </ul>

      <h2>Perché consigliamo EdiliziaInCloud</h2>
      <p>
        <strong>EdiliziaInCloud</strong> è il gestionale attorno a cui è costruita la parte operativa
        del nostro metodo: nato per le imprese edili italiane, mette la commessa al centro e collega
        preventivi, margini, DDT, magazzino, cantieri e fatturazione elettronica in un unico flusso —
        esattamente la catena descritta sopra. Non è l'unico software sul mercato, ma è quello che
        risponde «sì» alla domanda decisiva: <em>quanto sto guadagnando su questa commessa, oggi?</em>
      </p>
      <p>
        <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="font-semibold">
          Scopri EdiliziaInCloud su ediliziaincloud.com
        </a>{" "}
        oppure leggi <Link href="/edilizia-in-cloud">come lavora insieme al metodo</Link>.
      </p>

      <blockquote>
        Prima decidi quali numeri vuoi vedere, poi scegli lo strumento che te li mostra. Mai il
        contrario.
      </blockquote>

      <h2>Da dove iniziare</h2>
      <p>
        Se stai valutando un gestionale, parti da una verifica di realtà: quali numeri ti mancano
        oggi? Margine per commessa? Costo reale della manodopera? Varianti perse? È esattamente ciò
        che emerge nell'<Link href="/contatti">analisi gratuita dei tuoi numeri</Link> — e da lì la
        scelta dello strumento diventa una conseguenza naturale, non un salto nel buio.
      </p>
    </ArticleShell>
  );
}
