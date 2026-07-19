import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("margine-di-contribuzione-edilizia")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "margine di contribuzione edilizia",
    "margine di contribuzione impresa edile",
    "margine di commessa",
    "margine industriale di commessa",
    "come calcolare il margine di contribuzione",
  ],
  alternates: { canonical: "/risorse/margine-di-contribuzione-edilizia" },
  openGraph: { title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Cos'è il margine di contribuzione in edilizia?",
    a: "È quanto resta dei ricavi di una commessa dopo aver tolto i costi variabili diretti di quel cantiere (materiali, manodopera, mezzi, subappalti). È la parte che «contribuisce» a coprire i costi fissi di struttura e, oltre quelli, a formare l'utile. Ti dice se un cantiere, da solo, conviene.",
  },
  {
    q: "Come si calcola il margine di contribuzione di una commessa?",
    a: "Ricavi della commessa meno i costi variabili diretti (materiali, manodopera impiegata al costo reale, mezzi, subappalti, trasporti). Il risultato è il margine di contribuzione, spesso espresso anche in percentuale sui ricavi. Non toglie ancora i costi fissi di struttura.",
  },
  {
    q: "Che differenza c'è tra margine di contribuzione e margine di commessa?",
    a: "Il margine di contribuzione toglie solo i costi variabili diretti. Il margine di commessa «pieno» toglie anche la quota di costi di struttura imputata a quel cantiere. Il primo dice se il cantiere copre i suoi costi diretti; il secondo se, caricata la struttura, resta utile.",
  },
  {
    q: "A cosa serve il margine di contribuzione?",
    a: "A decidere: quali lavori accettare, quali prezzi tenere, come confrontare commesse diverse. Un cantiere con margine di contribuzione positivo aiuta comunque a coprire i costi fissi; uno negativo li peggiora, e andrebbe rivisto o rifiutato.",
  },
  {
    q: "Un margine di contribuzione positivo significa che guadagno?",
    a: "Non ancora. Significa che quel cantiere copre i suoi costi diretti e contribuisce ai costi fissi. L'utile arriva solo quando la somma dei margini di contribuzione di tutte le commesse supera i costi fissi totali dell'impresa.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        «Questo cantiere conviene?» È la domanda più importante che un imprenditore edile si pone — e
        la più difficile a cui rispondere con un numero. La risposta ha un nome preciso:{" "}
        <strong>margine di contribuzione</strong>. È il concetto che separa chi decide sui dati da chi
        decide a sensazione. Non è teoria da manuale: è lo strumento con cui capisci, per ogni lavoro,
        se ti sta aiutando o affossando. Vediamo cos'è e come si usa, in parole da cantiere.
      </p>

      <h2>Cos'è il margine di contribuzione</h2>
      <p>
        Ogni commessa genera ricavi e assorbe costi. Alcuni costi esistono <em>solo</em> perché esiste
        quel cantiere: materiali, manodopera impiegata, mezzi, subappalti, trasporti. Sono i{" "}
        <strong>costi variabili diretti</strong>. Il margine di contribuzione è ciò che resta dei
        ricavi dopo averli tolti:
      </p>
      <blockquote>
        Margine di contribuzione = Ricavi della commessa − Costi variabili diretti
      </blockquote>
      <p>
        Si chiama «di contribuzione» perché è la parte che <strong>contribuisce</strong> a coprire i{" "}
        <Link href="/risorse/costi-di-struttura-impresa-edile">costi fissi di struttura</Link> (sede,
        amministrazione, il tuo stipendio) e, una volta coperti quelli, a formare l'utile.
      </p>

      <h2>Un esempio concreto</h2>
      <p>Cantiere da 120.000 € di ricavi. Costi variabili diretti:</p>
      <ul>
        <li>Materiali: 45.000 €</li>
        <li>Manodopera (al <Link href="/risorse/costo-orario-manodopera-edile">costo reale</Link>): 30.000 €</li>
        <li>Mezzi e noli: 8.000 €</li>
        <li>Subappalti: 15.000 €</li>
      </ul>
      <p>
        Totale costi variabili: 98.000 €. <strong>Margine di contribuzione = 120.000 − 98.000 = 22.000 €
        </strong>, cioè circa il 18% dei ricavi. Questo cantiere, da solo, mette 22.000 € sul tavolo
        per coprire i costi fissi dell'impresa. Se sono coperti da altre commesse, questi 22.000 €
        diventano utile.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={18} sublabel="margine di contribuzione" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Il numero che decide</p>
            <p className="mt-2 text-muted">
              Un margine di contribuzione del 18% dice che ogni 100 € di lavoro, 18 restano per
              coprire struttura e utile. Confronta questo numero tra commesse diverse e sai subito
              quali lavori spingono e quali frenano.
            </p>
          </div>
        </div>
      </figure>

      <h2>Contribuzione vs commessa «piena»</h2>
      <p>
        Attenzione a non confondere due livelli. Il <strong>margine di contribuzione</strong> toglie
        solo i costi variabili diretti. Il <strong>margine di commessa pieno</strong> toglie anche la
        quota di costi fissi di struttura imputata a quel cantiere. Il primo risponde a «questo
        cantiere copre i suoi costi diretti?»; il secondo a «caricata la struttura, resta utile?». Ti
        servono entrambi, per domande diverse.
      </p>

      <h2>Perché è così utile decidere</h2>
      <ul>
        <li><strong>Accettare o rifiutare un lavoro</strong>: contribuzione positiva = aiuta comunque a coprire i fissi; negativa = li peggiora.</li>
        <li><strong>Confrontare commesse diverse</strong>: in percentuale, capisci quali tipologie di lavoro rendono di più.</li>
        <li><strong>Difendere il prezzo</strong>: sai fino a dove puoi scendere prima che il cantiere smetta di contribuire.</li>
        <li><strong>Decidere interno o subappalto</strong>: confronti l'effetto sulla contribuzione, dati alla mano.</li>
      </ul>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">La somma delle contribuzioni fa l'utile</p>
        <p className="mt-1 text-sm text-muted">Quando i margini di contribuzione di tutte le commesse superano i costi fissi, l'impresa entra in utile.</p>
        <div className="mt-6"><AreaTrend points={[10, 18, 24, 30, 38, 44, 52, 60]} labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
      </figure>

      <h2>L'errore classico: il ribasso «tanto contribuisce»</h2>
      <p>
        Il margine di contribuzione è potente ma va usato con testa. Accettare lavori a bassa
        contribuzione «tanto qualcosa portano» funziona per riempire un vuoto temporaneo, non come
        strategia: se saturi la capacità con cantieri a margine risicato, non ti resta spazio per
        quelli buoni. La contribuzione ti aiuta a scegliere, non a giustificare qualsiasi ribasso.
      </p>

      <h2>Come iniziare a usarlo</h2>
      <ol>
        <li>Per ogni commessa, isola i costi variabili diretti (vedi la <Link href="/risorse/costi-di-cantiere-guida">guida ai costi di cantiere</Link>).</li>
        <li>Calcola il margine di contribuzione in euro e in percentuale.</li>
        <li>Confronta le percentuali tra i cantieri: emergono i lavori che rendono.</li>
        <li>Somma le contribuzioni e verifica che coprano i costi fissi.</li>
        <li>Usa il numero per decidere prezzi, priorità e nuove offerte.</li>
      </ol>
      <p>
        Vuoi calcolare il margine di contribuzione reale dei tuoi cantieri e capire quali ti fanno
        davvero guadagnare? È tra le prime cose che vediamo insieme nell'{" "}
        <Link href="/contatti">analisi gratuita</Link>: 30 minuti sui tuoi numeri, senza impegno.
      </p>
    </ArticleShell>
  );
}
