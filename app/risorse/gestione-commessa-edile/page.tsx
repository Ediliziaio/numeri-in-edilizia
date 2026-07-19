import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("gestione-commessa-edile")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "gestione commessa edile",
    "gestione commessa impresa edile",
    "contabilità di commessa",
    "controllo commessa cantiere",
    "come gestire una commessa edile",
  ],
  alternates: { canonical: "/risorse/gestione-commessa-edile" },
  openGraph: { title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Cos'è la gestione della commessa in edilizia?",
    a: "È il processo con cui segui una singola commessa — un cantiere — dal preventivo alla chiusura: pianifichi costi e ricavi, imputi le spese reali man mano che escono, confronti il consuntivo col preventivo e leggi il margine mentre il lavoro è ancora aperto. In pratica è il controllo di gestione applicato al singolo cantiere.",
  },
  {
    q: "Che differenza c'è tra gestione della commessa e contabilità generale?",
    a: "La contabilità generale registra i fatti per l'azienda nel suo insieme e per obblighi fiscali. La gestione (o contabilità) di commessa riclassifica gli stessi dati per singolo cantiere, così sai quanto guadagni su ogni lavoro, non solo a fine anno sull'intera impresa.",
  },
  {
    q: "Serve un software per gestire le commesse?",
    a: "Per iniziare no: bastano un foglio ben impostato e la disciplina di imputare ogni costo al cantiere giusto. Quando i cantieri aperti diventano tanti, un gestionale che collega DDT, rapportini, fatture e SAL alla commessa ti fa risparmiare tempo e riduce gli errori.",
  },
  {
    q: "Ogni quanto va aggiornata una commessa?",
    a: "Idealmente ogni settimana per i cantieri attivi: bastano pochi minuti per aggiornare ore, materiali e avanzamento. L'obiettivo non è la precisione contabile perfetta, ma vedere in tempo dove il margine sta scivolando, quando puoi ancora intervenire.",
  },
  {
    q: "Da dove parte la gestione di una commessa?",
    a: "Dal preventivo: è lì che fissi il budget di costo e il margine obiettivo. Se il preventivo non è costruito sui costi reali, tutta la gestione successiva confronta il consuntivo con un numero sbagliato. Preventivo solido prima, controllo poi.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        Chiedi a un imprenditore edile «come sta andando quel cantiere?» e spesso la risposta è una
        sensazione: «bene», «così così», «mah, vediamo alla fine». È il sintomo di una commessa che
        <strong> non è gestita, ma solo eseguita</strong>. Il lavoro va avanti, i costi escono, i SAL
        si emettono — ma nessuno tiene i conti del singolo cantiere finché non è chiuso. E a quel
        punto il margine, se c'è o se manca, è già deciso. Gestire la commessa significa il
        contrario: sapere <em>durante</em>, non scoprire <em>dopo</em>.
      </p>

      <h2>Cos'è davvero la gestione della commessa</h2>
      <p>
        Una commessa è un mini-conto economico: ha i suoi ricavi (il contratto più le varianti) e i
        suoi costi (materiali, manodopera, mezzi, subappalti, quota di struttura). Gestirla vuol dire
        tenere quel conto aggiornato dal primo giorno all'ultimo, così da rispondere in ogni momento a
        una sola domanda: <strong>quanto sto guadagnando su questo cantiere?</strong> È il{" "}
        <Link href="/risorse/controllo-di-gestione-edilizia">controllo di gestione</Link> calato sul
        singolo lavoro.
      </p>

      <h2>Le quattro fasi di una commessa sotto controllo</h2>
      <h3>1. Preventivo: si decide qui</h3>
      <p>
        La gestione parte prima che il cantiere apra. Il{" "}
        <Link href="/risorse/preventivo-edile-come-farlo">preventivo</Link> fissa il budget di costo e
        il margine obiettivo. Se è fatto a intuito, tutto il controllo successivo confronterà il
        consuntivo con un numero sbagliato. Preventivo costruito sui{" "}
        <Link href="/risorse/costi-di-cantiere-guida">costi reali</Link> = base sana per tutto il
        resto.
      </p>
      <h3>2. Apertura: budget e struttura dei costi</h3>
      <p>
        Alla partenza, il preventivo diventa <strong>budget di commessa</strong>: la previsione di
        costo per categoria (materiali, manodopera, mezzi, subappalti) contro cui misurerai la
        realtà. È la riga di partenza della gara.
      </p>
      <h3>3. Esecuzione: imputazione continua</h3>
      <p>
        Qui si gioca il 90% della partita. Ogni costo deve <strong>finire sul cantiere che lo ha
        generato</strong>: ogni DDT con la commessa, ogni{" "}
        <Link href="/risorse/costo-orario-manodopera-edile">rapportino ore</Link> imputato, ogni
        fattura fornitore collegata. In parallelo aggiorni l'avanzamento e i{" "}
        <Link href="/risorse/sal-stato-avanzamento-lavori">SAL</Link>. È disciplina più organizzativa
        che contabile.
      </p>
      <h3>4. Chiusura: consuntivo e lezioni</h3>
      <p>
        A fine lavori confronti consuntivo e preventivo voce per voce. Non solo per sapere quanto hai
        guadagnato, ma per <strong>imparare</strong>: dove hai sbagliato la stima, quali lavorazioni
        rendono meno, cosa correggere nel prossimo preventivo.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Il margine letto durante, non dopo</p>
        <p className="mt-1 text-sm text-muted">Con la commessa aggiornata ogni settimana, lo scostamento dal preventivo si vede in tempo per intervenire.</p>
        <div className="mt-6"><AreaTrend points={[20, 18, 24, 22, 30, 34, 40, 46]} labels={["Sett. 1", "", "Sett. 3", "", "Sett. 5", "", "Sett. 7", ""]} /></div>
      </figure>

      <h2>Il conto della commessa, in chiaro</h2>
      <p>Con imputazione e avanzamento a posto, il conto di ogni cantiere è lineare:</p>
      <ul>
        <li>Ricavi (contratto + varianti fatturate)</li>
        <li>− Costi diretti (materiali, manodopera, mezzi, subappalti)</li>
        <li>− Quota di costi indiretti e di <Link href="/risorse/costi-di-struttura-impresa-edile">struttura</Link></li>
        <li>= <strong>Margine di commessa</strong></li>
      </ul>
      <p>
        Letto <em>mentre il cantiere è aperto</em> e confrontato col preventivo, questo numero è lo
        strumento di governo più potente che hai. Come si isola davvero il contributo di ogni cantiere
        lo vediamo nella guida al{" "}
        <Link href="/risorse/margine-di-contribuzione-edilizia">margine di contribuzione</Link>.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={90} sublabel="peso dell'imputazione" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">La disciplina vale più dello strumento</p>
            <p className="mt-2 text-muted">
              Puoi avere il gestionale più costoso: se i documenti non «sanno» a quale cantiere
              appartengono, il margine per commessa non esce. La regola «ogni documento riporta la
              commessa» è il vero motore della gestione.
            </p>
          </div>
        </div>
      </figure>

      <h2>Gli errori più comuni</h2>
      <ol>
        <li><strong>Seguire la commessa a memoria</strong> — funziona con un cantiere, crolla con quattro aperti insieme.</li>
        <li><strong>Non imputare le ore</strong> — la manodopera è la voce più difficile da ricostruire a posteriori.</li>
        <li><strong>Dimenticare le <Link href="/risorse/varianti-in-corso-d-opera">varianti</Link></strong> — lavoro extra non tracciato = margine regalato.</li>
        <li><strong>Ignorare la struttura</strong> — senza quota di costi fissi, ogni commessa sembra guadagnare e l'azienda no.</li>
      </ol>

      <h2>Dal foglio al gestionale</h2>
      <p>
        Si può iniziare con un buon foglio di calcolo: una scheda per commessa con budget, costi
        imputati e avanzamento. Quando i cantieri aperti crescono, un gestionale come{" "}
        <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a>{" "}
        collega DDT, ore, fatture e SAL direttamente alla commessa, e il margine si aggiorna quasi da
        solo. Ma lo strumento viene dopo il metodo, non prima: se non sai <em>cosa</em> guardare, il
        software non ti salva.
      </p>

      <h2>In sintesi</h2>
      <ol>
        <li>Parti da un preventivo costruito sui costi reali.</li>
        <li>Trasformalo in budget di commessa alla partenza.</li>
        <li>Imputa ogni costo al cantiere giusto, ogni settimana.</li>
        <li>Leggi il margine durante, confrontalo col preventivo.</li>
        <li>A fine lavori fai il consuntivo e correggi il prossimo preventivo.</li>
      </ol>
      <p>
        Vuoi impostare la gestione delle tue commesse sui numeri reali dei tuoi cantieri? È il primo
        lavoro che facciamo insieme nell'{" "}
        <Link href="/contatti">analisi gratuita</Link>: 30 minuti, senza impegno, per capire dove il
        margine ti sta sfuggendo, cantiere per cantiere.
      </p>
    </ArticleShell>
  );
}
