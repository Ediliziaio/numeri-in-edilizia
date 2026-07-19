import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("durc-di-congruita-manodopera")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "durc di congruità",
    "congruità manodopera edilizia",
    "durc congruità cantiere",
    "incidenza manodopera",
    "durc di congruità come funziona",
  ],
  alternates: { canonical: "/risorse/durc-di-congruita-manodopera" },
  openGraph: { title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Cos'è il DURC di congruità?",
    a: "È un documento che attesta la coerenza tra il costo della manodopera dichiarato per un'opera edile e le percentuali minime di incidenza previste dalle tabelle di settore. È distinto dal DURC ordinario (regolarità contributiva): la congruità verifica che, su quel cantiere, sia stata impiegata abbastanza manodopera regolare rispetto al valore dei lavori.",
  },
  {
    q: "Quando serve il DURC di congruità?",
    a: "Si richiede tipicamente in occasione dell'ultimo stato di avanzamento o della conclusione dei lavori, ed è presupposto per il pagamento del saldo. Nei lavori dove è obbligatorio, l'attestazione di congruità è necessaria: senza, il pagamento può essere bloccato.",
  },
  {
    q: "Come si calcola l'incidenza della manodopera?",
    a: "Si rapporta il costo della manodopera impiegata al valore complessivo dell'opera. Questo rapporto va confrontato con la percentuale minima prevista per quella categoria di lavori dalle tabelle di congruità. Se l'incidenza reale è sotto la soglia, la congruità non risulta raggiunta.",
  },
  {
    q: "Cosa succede se la manodopera non è congrua?",
    a: "Va sanata: si può dimostrare o regolarizzare la manodopera mancante prima di ottenere l'attestazione. Finché la congruità non è raggiunta o giustificata, l'ultimo SAL e il saldo possono restare bloccati. Per questo conviene monitorare l'incidenza durante il cantiere, non scoprirla alla fine.",
  },
  {
    q: "Il DURC di congruità riguarda anche i subappalti?",
    a: "Sì: la manodopera impiegata dai subappaltatori concorre al calcolo della congruità dell'opera. Un subappaltatore che dichiara poca manodopera regolare può far scendere l'incidenza complessiva sotto la soglia. È un motivo in più per governare bene i subappalti.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        C'è un documento che, se lo scopri troppo tardi, ti blocca l'ultimo SAL e il saldo di un
        cantiere già finito: il <strong>DURC di congruità</strong>. Molti imprenditori edili lo
        conoscono solo quando arriva il problema — la manodopera dichiarata «non basta» rispetto al
        valore dei lavori, e il pagamento resta appeso. La buona notizia è che è un numero che puoi{" "}
        <strong>tenere sotto controllo durante il cantiere</strong>, come qualsiasi altro. Vediamo
        cos'è, come funziona e come non farti trovare impreparato.
      </p>

      <h2>Cos'è (e cosa non è) il DURC di congruità</h2>
      <p>
        Attenzione a non confonderlo con il DURC «ordinario». Quello attesta la{" "}
        <strong>regolarità contributiva</strong> dell'impresa (versamenti a posto). Il DURC di
        congruità è un'altra cosa: attesta che, su una specifica opera edile, il{" "}
        <strong>costo della manodopera impiegata</strong> è coerente con le percentuali minime di
        incidenza previste dalle tabelle di settore. In parole semplici: verifica che per fare quel
        lavoro sia stata usata abbastanza manodopera regolare, e non «troppo poca».
      </p>

      <h2>Perché esiste</h2>
      <p>
        L'obiettivo è contrastare il lavoro irregolare e il dumping: se un'opera da un certo valore
        risulta realizzata con pochissima manodopera dichiarata, è un segnale che qualcosa non torna —
        lavoro nero, sotto-inquadramenti, costi scaricati altrove. La congruità mette una soglia
        minima sotto cui scatta la verifica.
      </p>

      <h2>Come funziona l'incidenza della manodopera</h2>
      <p>Il meccanismo ruota attorno a un rapporto:</p>
      <blockquote>
        Incidenza manodopera = Costo della manodopera ÷ Valore dell'opera
      </blockquote>
      <p>
        Questo rapporto va confrontato con la <strong>percentuale minima</strong> prevista per quella
        categoria di lavori. Ogni tipologia (opere edili generali, impianti, movimento terra,
        strutture…) ha la sua soglia, perché l'incidenza «normale» della manodopera cambia molto tra i
        mestieri. Se l'incidenza reale è sopra la soglia, la congruità è raggiunta. Se è sotto, va
        giustificata o sanata.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={85} sublabel="soglia raggiunta" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Un numero da leggere durante, non dopo</p>
            <p className="mt-2 text-muted">
              L'incidenza della manodopera si costruisce cantiere dopo cantiere. Monitorarla mentre i
              lavori procedono ti evita la corsa contro il tempo all'ultimo SAL, quando sanare è più
              difficile e costoso.
            </p>
          </div>
        </div>
      </figure>

      <h2>Quando serve e cosa blocca</h2>
      <p>
        La verifica di congruità entra in gioco tipicamente in occasione dell'<strong>ultimo stato di
        avanzamento</strong> o della fine lavori, ed è presupposto per il pagamento del saldo. Il
        rischio concreto: opera finita, cliente soddisfatto, ma il saldo che non arriva perché la
        congruità non risulta. Un problema di cassa serio su un lavoro che credevi chiuso —
        esattamente il tipo di sorpresa che il{" "}
        <Link href="/risorse/controllo-di-gestione-edilizia">controllo di gestione</Link> serve a
        evitare.
      </p>

      <h2>Il legame con i subappalti</h2>
      <p>
        La manodopera dei <Link href="/risorse/gestione-subappalti-edilizia">subappaltatori</Link>{" "}
        concorre al calcolo. Un subappaltatore che dichiara poca manodopera regolare può far scendere
        l'incidenza complessiva sotto la soglia — e il problema ricade su di te, che sei responsabile
        dell'opera. Governare la regolarità dei subappalti è anche presidiare la congruità.
      </p>

      <h2>Come non farti trovare impreparato</h2>
      <ol>
        <li><strong>Conosci la soglia</strong> della categoria di lavori del tuo cantiere.</li>
        <li><strong>Monitora l'incidenza</strong> man mano che imputi ore e costi alla commessa.</li>
        <li><strong>Controlla i subappalti</strong>: chiedi regolarità e manodopera dichiarata.</li>
        <li><strong>Intervieni in corso</strong> se l'incidenza scende sotto soglia, non all'ultimo SAL.</li>
        <li><strong>Tieni tracciate le ore</strong>: senza <Link href="/risorse/costo-orario-manodopera-edile">dati sulla manodopera</Link>, la congruità è un'incognita.</li>
      </ol>
      <p>
        Nota pratica: le regole di congruità e le soglie sono definite dalla normativa di settore e
        possono aggiornarsi — verifica sempre i riferimenti vigenti con il tuo consulente del lavoro.
        Quello su cui possiamo aiutarti noi è il <strong>lato gestionale</strong>: tenere sotto
        controllo l'incidenza della manodopera cantiere per cantiere, così la congruità smette di
        essere una sorpresa.
      </p>
      <p>
        Vuoi impostare il monitoraggio della manodopera sui tuoi cantieri? Ne parliamo nell'{" "}
        <Link href="/contatti">analisi gratuita</Link>: 30 minuti sui tuoi numeri, senza impegno.
      </p>
    </ArticleShell>
  );
}
