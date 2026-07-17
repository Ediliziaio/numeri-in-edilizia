import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareBars, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("quanto-guadagna-impresa-edile")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "quanto guadagna un'impresa edile",
    "utile impresa edile",
    "margine impresa di costruzioni",
    "redditività impresa edile",
    "quanto si guadagna in edilizia",
  ],
  alternates: { canonical: "/risorse/quanto-guadagna-impresa-edile" },
  openGraph: { title: article.title, description: article.description, type: "article", images: ["/opengraph-image"] },
};

const faq = [
  {
    q: "Quanto guadagna in media un'impresa edile?",
    a: "La maggior parte delle PMI edili italiane chiude con utili netti tra il 2% e il 5% del fatturato; le imprese ben gestite, con controllo di gestione e preventivi sui costi reali, arrivano stabilmente all'8–15% di margine di commessa e a utili netti significativamente più alti. La differenza non la fa il mercato: la fa il controllo dei numeri.",
  },
  {
    q: "Qual è un buon margine per una commessa edile?",
    a: "Come riferimento pratico: sotto il 10% di margine di commessa sei fragile (basta un imprevisto per andare in perdita), tra il 10% e il 15% sei in equilibrio, sopra il 15% stai costruendo un'impresa solida. Le percentuali variano per settore: conta soprattutto deciderle prima e monitorarle.",
  },
  {
    q: "Quanto dovrebbe pagarsi un imprenditore edile?",
    a: "Almeno quanto guadagnerebbe facendo lo stesso lavoro da dipendente (direttore tecnico o di cantiere), più un premio per il rischio d'impresa. Se l'impresa non riesce a pagare questo compenso come costo mensile, sta di fatto lavorando in perdita anche se il bilancio dice il contrario.",
  },
  {
    q: "Perché tante imprese edili guadagnano così poco?",
    a: "Per la somma di preventivi a intuito, varianti non fatturate, costi di struttura non allocati e nessuna lettura del margine per commessa. Ognuno di questi vale punti di marginalità: insieme spiegano la differenza tra il 3% e il 12% di utile.",
  },
  {
    q: "Fatturare di più significa guadagnare di più?",
    a: "No: crescere di fatturato con margini calanti significa più cantieri, più rischio e più fabbisogno di cassa per lo stesso utile (o meno). Prima si sistema il margine, poi si cresce: la crescita moltiplica ciò che c'è — anche gli errori.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        «Guadagno abbastanza?» Ogni imprenditore edile se lo chiede, di solito a marzo, davanti al
        bilancio. Il problema è che pochi hanno un termine di paragone serio: si confrontano col
        vicino («lui ha tre furgoni nuovi»), col passato («l'anno scorso è andata meglio»), o non si
        confrontano affatto. In questa guida mettiamo <strong>numeri di riferimento concreti</strong>{" "}
        — margini, utile, compenso — e soprattutto il metodo per capire dove sei tu e come salire.
      </p>

      <h2>I tre numeri che definiscono «quanto guadagni»</h2>
      <p>Quando si parla di guadagno di un'impresa edile si mescolano tre cose diverse:</p>
      <ul>
        <li><strong>Il margine di commessa</strong> — quanto resta di ogni cantiere dopo costi diretti e quota di struttura. È il motore di tutto.</li>
        <li><strong>L'utile netto d'impresa</strong> — quello che resta all'azienda a fine anno, dopo ogni costo e le imposte.</li>
        <li><strong>Il compenso dell'imprenditore</strong> — quello che tu ti paghi per il lavoro che fai. Va contato <em>prima</em> dell'utile, non al suo posto.</li>
      </ul>
      <p>
        Un'impresa sana li ha tutti e tre positivi e distinti. Il segnale d'allarme classico è
        l'impresa «in utile» dove però l'imprenditore si paga poco o niente: quel bilancio in
        realtà nasconde una perdita.
      </p>

      <h2>I numeri di riferimento (e dove stanno le imprese reali)</h2>
      <p>
        La fotografia tipica delle PMI edili italiane è impietosa: <strong>utili netti tra il 2% e
        il 5%</strong> del fatturato, imprenditori che lavorano 12 ore al giorno per portare a casa
        meno di un loro capo cantiere. Non è una legge di natura: è l'effetto composto di{" "}
        <Link href="/risorse/preventivo-edile-come-farlo">preventivi a intuito</Link>,{" "}
        <Link href="/risorse/varianti-in-corso-d-opera">varianti regalate</Link> e costi mai
        <Link href="/risorse/costi-di-cantiere-guida"> imputati</Link>.
      </p>
      <p>Come riferimento pratico sul margine di commessa:</p>
      <ul>
        <li><strong>Sotto il 10%</strong> — zona fragile: un imprevisto e la commessa è in perdita.</li>
        <li><strong>10–15%</strong> — equilibrio: l'impresa copre struttura e compenso e lascia utile.</li>
        <li><strong>Oltre il 15%</strong> — solidità: c'è spazio per investire, sbagliare e crescere.</li>
      </ul>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">La stessa impresa, prima e dopo il controllo dei numeri</p>
        <p className="mt-1 text-sm text-muted">Margine medio di commessa: la differenza non è il mercato, è il metodo.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={4} after={13} /></div>
      </figure>

      <h2>Quanto dovresti pagarti</h2>
      <p>
        Regola semplice: <strong>almeno quanto guadagneresti facendo lo stesso lavoro da
        dipendente</strong> — un direttore tecnico, un responsabile di cantiere esperto — più un
        premio per il rischio che ti prendi. Quel numero va nel{" "}
        <Link href="/risorse/budget-impresa-edile">budget</Link> come costo mensile fisso. Se
        l'impresa non lo regge, non hai un problema di stipendio: hai un problema di margini, e ora
        sai dove guardare.
      </p>

      <h2>Perché il fatturato non è la risposta</h2>
      <p>
        L'istinto, quando si guadagna poco, è vendere di più. Ma facciamo i conti: con un margine
        del 5%, per aggiungere 50.000 € di utile servono <strong>un milione di euro</strong> di
        fatturato in più — cantieri, squadre, rischio, cassa. Portando il margine dal 5% al 10% sullo
        stesso fatturato, ottieni lo stesso risultato <em>senza vendere un euro in più</em>. È
        matematica, non strategia: <strong>prima il margine, poi la crescita</strong>.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={10} sublabel="di margine in più" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">La leva più corta è il margine</p>
            <p className="mt-2 text-muted">
              Ogni punto di margine recuperato va dritto nell'utile, senza un cantiere in più.
              Recuperare 5 punti (varianti, preventivi, costi imputati) su 1,5 M€ di fatturato vale
              75.000 € l'anno.
            </p>
          </div>
        </div>
      </figure>

      <h2>Le quattro leve per guadagnare di più (in ordine)</h2>
      <ol>
        <li><strong>Fattura ciò che già fai</strong> — le <Link href="/risorse/varianti-in-corso-d-opera">varianti</Link> non fatturate sono la perdita più stupida: recuperarle non costa nulla.</li>
        <li><strong>Quota sui costi reali</strong> — sistemare <Link href="/risorse/costo-orario-manodopera-edile">costo orario</Link> e <Link href="/risorse/preventivo-edile-come-farlo">preventivi</Link> alza il margine di ogni lavoro futuro.</li>
        <li><strong>Taglia le commesse in perdita</strong> — il margine per commessa ti dice quali lavori (e quali clienti) non meritano la tua squadra.</li>
        <li><strong>Solo ora, cresci</strong> — con margini sani, ogni euro di fatturato in più diventa utile vero.</li>
      </ol>

      <blockquote>
        Non esiste «il mercato non lascia margini». Esistono imprese che i margini li misurano e li
        difendono, e imprese che li sperano.
      </blockquote>

      <h2>E nel tuo settore?</h2>
      <p>
        I riferimenti cambiano col mestiere: un <Link href="/settori/serramentisti">serramentista</Link>{" "}
        gioca la partita sulla posa, un'impresa di{" "}
        <Link href="/settori/movimento-terra">movimento terra</Link> sul costo orario dei mezzi, le{" "}
        <Link href="/settori/imprese-edili">costruzioni</Link> sui SAL e le varianti. Trovi i numeri
        critici del tuo settore nelle <Link href="/settori">pagine dedicate</Link>.
      </p>

      <h2>Scopri dove sei tu</h2>
      <p>
        La domanda «guadagno abbastanza?» merita una risposta con i tuoi numeri, non con le medie.
        È esattamente quello che facciamo nell'<Link href="/contatti">analisi gratuita</Link>:
        trenta minuti sui dati della tua impresa per dirti qual è il tuo margine reale, quanto ti
        stai pagando davvero e quali leve hai per salire. Il percorso completo è il{" "}
        <Link href="/metodo">metodo Numeri in Edilizia</Link>.
      </p>
    </ArticleShell>
  );
}
