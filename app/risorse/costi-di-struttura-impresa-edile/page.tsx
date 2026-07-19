import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { DonutStat, CompareBars } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("costi-di-struttura-impresa-edile")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "costi di struttura impresa edile",
    "spese generali impresa edile",
    "costi fissi azienda edile",
    "costi indiretti edilizia",
    "come calcolare i costi di struttura",
  ],
  alternates: { canonical: "/risorse/costi-di-struttura-impresa-edile" },
  openGraph: { title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Cosa sono i costi di struttura di un'impresa edile?",
    a: "Sono i costi che l'impresa sostiene a prescindere dal singolo cantiere: sede, amministrazione, mezzi aziendali, assicurazioni, consulenti, direzione tecnica e commerciale, e il compenso dell'imprenditore. Esistono anche se un mese non apri nessun cantiere: per questo vanno coperti da tutte le commesse insieme.",
  },
  {
    q: "Quanto incidono i costi di struttura in edilizia?",
    a: "Nelle PMI edili l'incidenza tipica è tra il 10% e il 20% dei costi diretti, ma varia con la dimensione e l'organizzazione. Il punto non è la percentuale esatta di settore: è calcolarla per la propria impresa e applicarla a ogni preventivo e a ogni consuntivo.",
  },
  {
    q: "Come si ribaltano i costi di struttura sulle commesse?",
    a: "Si calcola l'incidenza dei costi di struttura sui costi diretti dell'ultimo esercizio e la si applica come quota su ogni commessa, in proporzione ai costi diretti (o alle ore, o al valore). Così ogni cantiere «si porta la sua parte» di struttura, e il margine di commessa diventa realistico.",
  },
  {
    q: "Il compenso dell'imprenditore è un costo di struttura?",
    a: "Sì. Lo stipendio dell'imprenditore è un costo aziendale a tutti gli effetti, non l'avanzo che resta a fine anno. Se non è incluso tra i costi di struttura e caricato sui preventivi, l'impresa lavora sottostimando i propri costi e il titolare finisce per pagarsi con ciò che rimane, se rimane.",
  },
  {
    q: "Che differenza c'è tra costi di struttura e costi diretti?",
    a: "I costi diretti esistono solo perché esiste un dato cantiere (materiali, manodopera, mezzi, subappalti). I costi di struttura ci sono comunque, indipendentemente dai cantieri. I diretti si imputano alla commessa, i costi di struttura si ripartiscono su tutte.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        C'è un modo silenzioso di perdere soldi che quasi nessun imprenditore edile vede: lavorare in{" "}
        <strong>«pareggio apparente»</strong>. Ogni cantiere sembra guadagnare, i conti del singolo
        lavoro tornano, eppure a fine anno l'azienda non ha fatto utile. Il colpevole ha un nome
        preciso: i <strong>costi di struttura</strong> non caricati sui preventivi. Sono i costi che
        ci sono comunque, che nessun cantiere «vede», e che se non ribalti sulle commesse ti mangiano
        il margine un preventivo alla volta. Vediamo come governarli.
      </p>

      <h2>Cosa sono i costi di struttura</h2>
      <p>
        Sono la «macchina» che gira a prescindere dal singolo cantiere. Anche il mese in cui non apri
        nessun lavoro, questi costi escono:
      </p>
      <ul>
        <li><strong>Sede e uffici</strong>: affitto, utenze, attrezzatura, software;</li>
        <li><strong>Amministrazione</strong>: personale d'ufficio, contabilità, consulenti;</li>
        <li><strong>Mezzi e assicurazioni</strong> aziendali non legati a un cantiere specifico;</li>
        <li><strong>Direzione tecnica e commerciale</strong>: chi cerca lavori, chi coordina;</li>
        <li><strong>Il compenso dell'imprenditore</strong> — sì, il tuo stipendio è un costo.</li>
      </ul>
      <p>
        Sono l'opposto dei <Link href="/risorse/costi-di-cantiere-guida">costi diretti di cantiere</Link>,
        che esistono solo perché esiste quella commessa. I diretti si imputano al cantiere; i costi di
        struttura si <strong>ripartiscono</strong> su tutti.
      </p>

      <h2>Quanto pesano</h2>
      <p>
        Nelle PMI edili l'incidenza tipica dei costi di struttura è tra il <strong>10% e il 20% dei
        costi diretti</strong>. Ma la percentuale di settore conta poco: quello che conta è{" "}
        <em>la tua</em>. Ignorarla nei preventivi significa regalare esattamente quella percentuale di
        margine, su ogni singola commessa.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={15} sublabel="incidenza tipica struttura" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Il 15% che decide l'anno</p>
            <p className="mt-2 text-muted">
              Se i costi di struttura pesano il 15% dei costi diretti e non li carichi in preventivo,
              ogni cantiere che «pareggia» in realtà perde il 15%. Moltiplica per tutte le commesse
              dell'anno: ecco l'utile che sparisce.
            </p>
          </div>
        </div>
      </figure>

      <h2>Come si calcola l'incidenza</h2>
      <p>Il calcolo è semplice e si fa una volta, poi si aggiorna periodicamente:</p>
      <ol>
        <li>Somma tutti i costi di struttura di un esercizio (l'anno scorso va benissimo).</li>
        <li>Somma tutti i costi diretti delle commesse dello stesso periodo.</li>
        <li>Dividi: <strong>costi di struttura ÷ costi diretti = incidenza %</strong>.</li>
      </ol>
      <p>
        Esempio: 180.000 € di costi di struttura su 1.200.000 € di costi diretti = 15% di incidenza.
        Da qui in poi, su ogni preventivo aggiungi una quota di struttura pari al 15% dei costi diretti
        di quella commessa.
      </p>

      <h2>Come ribaltarli sulle commesse</h2>
      <p>
        Il criterio più semplice è in proporzione ai costi diretti (come nell'esempio). In alcune
        imprese ha più senso ripartire per <strong>ore</strong> (se la struttura serve soprattutto la
        produzione) o per <strong>valore della commessa</strong>. Non esiste il criterio perfetto:
        esiste quello <em>coerente e costante</em>. L'importante è che ogni cantiere si porti la sua
        parte, così il <Link href="/risorse/margine-di-contribuzione-edilizia">margine di commessa</Link>{" "}
        diventa realistico e non gonfiato.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Lo stesso cantiere, due verità</p>
        <p className="mt-1 text-sm text-muted">Margine «apparente» senza struttura vs margine reale con la quota caricata.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={16} after={4} unit="%" /></div>
      </figure>

      <h2>Il compenso dell'imprenditore è un costo</h2>
      <p>
        È il punto più trascurato e il più importante. Se il tuo stipendio non è tra i costi di
        struttura, stai lavorando gratis in preventivo e ti paghi con ciò che avanza — se avanza. Il{" "}
        <Link href="/risorse/budget-impresa-edile">budget</Link> serve anche a questo: mettere il
        compenso dell'imprenditore <strong>a bilancio come voce pianificata</strong>, non come premio
        di consolazione di fine anno.
      </p>

      <h2>Da dove partire</h2>
      <ol>
        <li>Elenca e somma i tuoi costi di struttura dell'ultimo anno (compreso il tuo compenso).</li>
        <li>Calcola l'incidenza sui costi diretti.</li>
        <li>Aggiungi la quota di struttura a ogni nuovo preventivo.</li>
        <li>Ricalcola il margine reale delle commesse aperte, struttura inclusa.</li>
        <li>Aggiorna l'incidenza una volta l'anno.</li>
      </ol>
      <p>
        Vuoi sapere qual è l'incidenza reale dei tuoi costi di struttura e quanto margine stai
        regalando senza caricarli? È uno dei primi conti che facciamo insieme nell'{" "}
        <Link href="/contatti">analisi gratuita</Link>: 30 minuti sui tuoi numeri, senza impegno.
      </p>
    </ArticleShell>
  );
}
