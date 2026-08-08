import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { CompareBars, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("varianti-in-corso-d-opera")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "varianti in corso d'opera",
    "lavori extra cantiere",
    "come fatturare le varianti edilizia",
    "gestione varianti impresa edile",
    "lavori aggiuntivi non fatturati",
  ],
  alternates: { canonical: "/risorse/varianti-in-corso-d-opera" },
  openGraph: { url: "/risorse/varianti-in-corso-d-opera", title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Cosa sono le varianti in corso d'opera?",
    a: "Sono tutte le modifiche rispetto a quanto previsto nel contratto o nel preventivo: lavori aggiuntivi richiesti dal committente, imprevisti tecnici, cambi di materiali o di lavorazioni. Ogni variante cambia i costi della commessa e va quindi quotata, approvata e fatturata.",
  },
  {
    q: "Come faccio a farmi pagare i lavori extra?",
    a: "La chiave è il processo: registrare la variante appena emerge, quotarla subito (anche in modo semplice), farla approvare per iscritto prima di eseguirla e fatturarla senza aspettare la fine dei lavori. Il momento in cui il cliente dice sì è quello in cui la variante va formalizzata.",
  },
  {
    q: "Quanto margine si perde con le varianti non fatturate?",
    a: "Nelle imprese senza un processo di gestione delle varianti, i lavori extra non fatturati valgono tipicamente diversi punti percentuali di marginalità l'anno — spesso la differenza tra un esercizio in utile e uno in pareggio.",
  },
  {
    q: "Il cliente si offende se gli chiedo di pagare gli extra?",
    a: "No, se il perimetro del preventivo era chiaro e la variante viene comunicata quando emerge, con un prezzo trasparente. I problemi nascono quando gli extra vengono presentati tutti insieme a fine lavori: a quel punto qualsiasi cifra sembra una sorpresa.",
  },
  {
    q: "Le varianti vanno gestite anche nei lavori a corpo?",
    a: "Soprattutto nei lavori a corpo: lì il prezzo è bloccato, quindi ogni modifica non formalizzata è automaticamente a carico tuo. Nel contratto a corpo il perimetro va definito con ancora più precisione, e ogni cambiamento va trattato come variante.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        C'è un modo per aumentare il margine della tua impresa edile <strong>senza vendere di più,
        senza alzare i prezzi e senza tagliare i costi</strong>: farti pagare il lavoro che già fai.
        Sembra banale, ma le varianti in corso d'opera non fatturate sono il buco di margine più
        comune — e più sottovalutato — di tutta l'edilizia.
      </p>
      <p>
        L'imprevisto dietro il muro, il «già che ci sei» del cliente, il materiale cambiato all'ultimo:
        ogni cantiere ne è pieno. E ogni volta che uno di questi extra viene eseguito senza essere
        quotato e fatturato, il margine della commessa si assottiglia in silenzio. In questa guida:
        come riconoscere le varianti, il processo per gestirle e gli errori che le trasformano in
        regali.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={60} sublabel="varianti mai fatturate*" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Il lavoro gratis che non sai di fare</p>
            <p className="mt-2 text-muted">
              *Nelle imprese senza un processo strutturato, la maggior parte dei piccoli extra
              concordati a voce non arriva mai in fattura. Uno per uno sembrano poca cosa; sommati su
              un anno valgono decine di migliaia di euro.
            </p>
          </div>
        </div>
      </figure>

      <h2>Cos'è (davvero) una variante</h2>
      <p>
        Variante è <strong>qualsiasi differenza tra ciò che era previsto e ciò che viene
        eseguito</strong>. Non solo i grandi cambi di progetto: anche il punto luce in più, la
        rasatura non prevista, la demolizione che nasconde una sorpresa, il materiale sostituito con
        uno più costoso. Tre famiglie principali:
      </p>
      <ul>
        <li><strong>Richieste del committente</strong> — il classico «già che ci sei»: lavori aggiuntivi o modifiche volute dal cliente.</li>
        <li><strong>Imprevisti tecnici</strong> — ciò che emerge solo aprendo: impianti non a norma, strutture ammalorate, sottofondi da rifare.</li>
        <li><strong>Modifiche di capitolato</strong> — materiali o lavorazioni diverse da quelle preventivate.</li>
      </ul>
      <p>
        La domanda da farsi è sempre la stessa: <em>«questo era nel preventivo?»</em>. Se la risposta
        è no, è una variante — e una variante ha un prezzo.
      </p>

      <h2>Perché le varianti non vengono fatturate</h2>
      <p>Le cause sono quasi sempre le stesse quattro:</p>
      <ol>
        <li><strong>Si concordano a voce</strong> in cantiere e nessuno le scrive. Dopo tre settimane, nessuno le ricorda.</li>
        <li><strong>Il perimetro del preventivo era vago</strong>, quindi cliente e impresa hanno idee diverse su cosa fosse incluso.</li>
        <li><strong>Si rimanda la quotazione</strong> a fine lavori — quando presentare un conto extra diventa una trattativa in salita.</li>
        <li><strong>Manca un posto dove registrarle</strong>: senza uno strumento, anche l'imprenditore più attento ne perde per strada.</li>
      </ol>
      <p>
        Nota il punto in comune: nessuna di queste cause è «il cliente non vuole pagare». Nella grande
        maggioranza dei casi il cliente pagherebbe — se la variante gli fosse presentata al momento
        giusto, con un prezzo chiaro.
      </p>

      <h2>Il processo in 5 passi per farti pagare ogni variante</h2>
      <h3>1. Registra subito</h3>
      <p>
        Appena la variante emerge — in cantiere, al telefono, davanti al cliente — va registrata:
        due righe, una foto, la data. Il punto non è la forma, è il momento: <strong>una variante
        registrata dopo una settimana è già mezza persa</strong>.
      </p>
      <h3>2. Quota subito</h3>
      <p>
        Materiale + ore + margine: la quotazione di una variante segue le stesse regole di un{" "}
        <Link href="/risorse/preventivo-edile-come-farlo">preventivo fatto bene</Link>, solo in
        piccolo. Anche una stima rapida è meglio di niente: dà al cliente un numero prima che il
        lavoro sia fatto.
      </p>
      <h3>3. Fai approvare per iscritto</h3>
      <p>
        Basta poco: un messaggio, una mail, una firma sul rapportino. L'approvazione scritta prima
        dell'esecuzione trasforma la variante da «discussione futura» a credito certo. È il passo che
        le imprese saltano più spesso, ed è quello che vale di più.
      </p>
      <h3>4. Esegui e documenta</h3>
      <p>
        Foto prima/dopo, ore registrate, materiali tracciati sulla commessa (qui la disciplina dei{" "}
        <Link href="/risorse/costi-di-cantiere-guida">costi di cantiere</Link> paga due volte).
      </p>
      <h3>5. Fattura senza aspettare</h3>
      <p>
        La variante si fattura al SAL successivo o alla prima fattura utile — <strong>mai</strong>{" "}
        tutta insieme a fine lavori. Extra presentati subito sono normali; extra presentati alla fine
        sembrano un agguato.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Margine di commessa: varianti perse vs varianti gestite</p>
        <p className="mt-1 text-sm text-muted">Esempio tipico di una commessa di ristrutturazione con il 15% di lavori extra.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={6} after={13} /></div>
      </figure>

      <h2>Il perimetro del preventivo: la prevenzione migliore</h2>
      <p>
        La gestione delle varianti inizia prima del cantiere: nel preventivo. Più il perimetro è
        chiaro — cosa è incluso, cosa è escluso, cosa sarà quotato a parte — meno discussioni avrai
        dopo. Una riga come <em>«ogni lavorazione non espressamente indicata sarà oggetto di
        quotazione separata»</em> vale più di dieci trattative a fine lavori.
      </p>

      <blockquote>
        La variante non è un fastidio: è fatturato aggiuntivo su un cliente già acquisito, con costi
        commerciali pari a zero. Va solo trattata come merita.
      </blockquote>

      <h2>Varianti per settore: dove guardare</h2>
      <p>
        Ogni mestiere ha le sue varianti tipiche: nelle{" "}
        <Link href="/settori/ristrutturazioni">ristrutturazioni</Link> gli imprevisti «dietro il
        muro», nelle <Link href="/settori/imprese-edili">costruzioni</Link> le modifiche di
        capitolato e le sospensioni, nella{" "}
        <Link href="/settori/carpenteria-metallica">carpenteria</Link> i rincari materia prima da
        ribaltare, per gli <Link href="/settori/impiantisti">impiantisti</Link> le modifiche
        impiantistiche chieste a cantiere aperto. Il processo è lo stesso; cambia solo dove tenere gli
        occhi.
      </p>

      <h2>Metti il processo a regime</h2>
      <p>
        Gestire le varianti a memoria non funziona: serve un posto unico dove registrarle, quotarle e
        seguirle fino alla fattura. Puoi partire con un foglio condiviso; quando i cantieri crescono,
        uno strumento come <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a> collega varianti,
        commesse e fatturazione in un flusso solo. E se vuoi capire quanto margine stai perdendo oggi
        in extra non fatturati, prenota{" "}
        l'<Link href="/contatti">analisi gratuita dei tuoi numeri</Link>: è una delle prime cose che
        guardiamo.
      </p>
    </ArticleShell>
  );
}
