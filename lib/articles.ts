export type Article = {
  slug: string;
  title: string; // breve, per <title> e card (≤ ~45 caratteri)
  h1?: string; // titolo lungo mostrato in pagina (fallback: title)
  description: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  cover?: string; // copertina/OG (iniettata da convenzione /images/blog/<slug>.png)
};

const rawArticles: Article[] = [
  {
    slug: "margine-impresa-edile",
    title: "Impresa edile: fatturi tanto, guadagni poco",
    h1: "Perché la tua impresa edile fattura tanto ma guadagna poco",
    description:
      "Le 5 ragioni per cui il margine sparisce in cantiere e come recuperarlo con il controllo di gestione. Guida pratica per l'imprenditore edile.",
    excerpt:
      "Fatturato record e conto in banca fermo: non è un paradosso, è un problema di margine. Ecco dove si nasconde e come riprendertelo.",
    date: "2026-07-12",
    readingTime: "12 min",
    category: "Marginalità",
  },
  {
    slug: "controllo-di-gestione-edilizia",
    title: "Controllo di gestione in edilizia: guida",
    h1: "Controllo di gestione in edilizia: la guida per iniziare",
    description:
      "Cos'è il controllo di gestione per un'impresa edile, quali indicatori servono davvero e come partire senza software complicati.",
    excerpt:
      "Non serve un gestionale da ingegnere. Servono pochi numeri, letti nel modo giusto. Ecco da dove partire, passo per passo.",
    date: "2026-07-10",
    readingTime: "14 min",
    category: "Controllo di gestione",
  },
  {
    slug: "preventivo-edile-come-farlo",
    title: "Preventivo edile: come farlo bene",
    h1: "Preventivo edile: come farlo bene (e difendere il margine)",
    description:
      "Guida completa al preventivo edile: costi diretti, costi di struttura, margine obiettivo, errori da evitare e gestione di ribassi e varianti.",
    excerpt:
      "Il preventivo è il momento in cui decidi se guadagnerai. Ecco come costruirlo sui costi reali invece che a sensazione, passo per passo.",
    date: "2026-07-15",
    readingTime: "15 min",
    category: "Preventivi",
  },
  {
    slug: "costi-di-cantiere-guida",
    title: "Costi di cantiere: la guida completa",
    h1: "Costi di cantiere: la guida completa per l'imprenditore edile",
    description:
      "Tutti i costi di un cantiere edile: diretti, indiretti e di struttura. Come classificarli, imputarli alle commesse e tenerli sotto controllo.",
    excerpt:
      "Materiali, manodopera, mezzi, subappalti, struttura: se non sai dove finiscono i costi, non sai quanto guadagni. La mappa completa.",
    date: "2026-07-15",
    readingTime: "16 min",
    category: "Controllo di gestione",
  },
  {
    slug: "varianti-in-corso-d-opera",
    title: "Varianti in corso d'opera: la guida",
    h1: "Varianti in corso d'opera: come tracciarle e farsele pagare",
    description:
      "Le varianti in corso d'opera sono il buco di margine più comune in edilizia. Come riconoscerle, documentarle e fatturarle al committente.",
    excerpt:
      "Ogni lavoro extra non fatturato è margine regalato. Il processo semplice per trasformare le varianti da costo nascosto a ricavo.",
    date: "2026-07-16",
    readingTime: "13 min",
    category: "Marginalità",
  },
  {
    slug: "sal-stato-avanzamento-lavori",
    title: "SAL: cosa sono e come gestirli",
    h1: "SAL (Stato Avanzamento Lavori): cosa sono e come gestirli",
    description:
      "Guida completa ai SAL in edilizia: cosa sono, come si redigono, come collegarli al margine di commessa e agli incassi. Con errori da evitare.",
    excerpt:
      "Il SAL non è solo un documento per farsi pagare: è lo strumento con cui leggi il margine della commessa mentre è ancora aperta.",
    date: "2026-07-16",
    readingTime: "14 min",
    category: "Cantiere",
  },
  {
    slug: "budget-impresa-edile",
    title: "Budget impresa edile: come costruirlo",
    h1: "Budget di un'impresa edile: come costruirlo (senza commercialista)",
    description:
      "Come fare il budget annuale di un'impresa edile: ricavi, costi di struttura, margine obiettivo e compenso dell'imprenditore. Con esempi.",
    excerpt:
      "Il budget non è un esercizio da ragionieri: è decidere prima quanto vuoi guadagnare e cosa deve succedere perché accada. Ecco come si fa.",
    date: "2026-07-16",
    readingTime: "15 min",
    category: "Controllo di gestione",
  },
  {
    slug: "quanto-guadagna-impresa-edile",
    title: "Quanto deve guadagnare un'impresa edile",
    h1: "Quanto deve guadagnare un'impresa edile? Utile, margini e stipendio",
    description:
      "Quanto dovrebbe guadagnare un'impresa edile: margini di riferimento per settore, utile netto, compenso dell'imprenditore e come alzarli.",
    excerpt:
      "«Guadagno abbastanza?» è la domanda che ogni imprenditore edile si fa. Ecco i numeri di riferimento e come capire dove sei tu.",
    date: "2026-07-16",
    readingTime: "13 min",
    category: "Marginalità",
  },
  {
    slug: "software-per-imprese-edili",
    title: "Software per imprese edili: la guida",
    h1: "Software per imprese edili: come scegliere il gestionale giusto",
    description:
      "Guida alla scelta del software gestionale per imprese edili: funzioni essenziali, errori da evitare e differenza col controllo di gestione.",
    excerpt:
      "Il software giusto non è quello con più funzioni: è quello che ti fa vedere il margine di ogni commessa. Cosa guardare prima di scegliere.",
    date: "2026-07-16",
    readingTime: "12 min",
    category: "Controllo di gestione",
  },
  {
    slug: "liquidita-impresa-edile",
    title: "Liquidità impresa edile: la guida",
    h1: "Liquidità nell'impresa edile: perché fatturi ma non hai cassa",
    description:
      "Perché un'impresa edile può essere in utile e senza soldi in banca: ciclo di cassa, anticipi, ritardi di incasso e come governare la liquidità.",
    excerpt:
      "Utile sul bilancio e conto in rosso: in edilizia succede spesso. Il problema non è quanto guadagni, ma quando i soldi entrano ed escono.",
    date: "2026-07-16",
    readingTime: "13 min",
    category: "Marginalità",
  },
  {
    slug: "costo-orario-manodopera-edile",
    title: "Costo orario manodopera edile: il calcolo",
    h1: "Costo orario della manodopera edile: come calcolarlo davvero",
    description:
      "Quanto costa davvero un'ora di operaio edile? Costo aziendale, ore produttive, trasferte e tempi morti: la formula completa con esempi.",
    excerpt:
      "La paga oraria non è il costo orario. Tra oneri, ore non produttive e trasferte, un operaio costa molto più di quanto pensi. I conti giusti.",
    date: "2026-07-16",
    readingTime: "14 min",
    category: "Cantiere",
  },
  {
    slug: "gestione-commessa-edile",
    title: "Gestione commessa edile: la guida",
    h1: "Gestione della commessa edile: la guida completa",
    description:
      "Come gestire una commessa edile dal preventivo al consuntivo: costi, ricavi, SAL, margine e il modo per tenere ogni cantiere sotto controllo.",
    excerpt:
      "Una commessa non si «segue a memoria». Ecco come governare costi, ricavi e margine di ogni cantiere, dall'inizio alla chiusura.",
    date: "2026-07-19",
    readingTime: "15 min",
    category: "Controllo di gestione",
  },
  {
    slug: "kpi-impresa-edile",
    title: "KPI impresa edile: gli indicatori chiave",
    h1: "I KPI dell'impresa edile: gli indicatori che contano davvero",
    description:
      "Quali KPI deve monitorare un'impresa edile: margine di commessa, produttività, cassa e scostamenti. Pochi indicatori giusti, letti ogni settimana.",
    excerpt:
      "Non servono cento numeri: ne servono pochi, quelli giusti. Ecco i KPI che dicono davvero come sta la tua impresa edile.",
    date: "2026-07-19",
    readingTime: "14 min",
    category: "Controllo di gestione",
  },
  {
    slug: "aumentare-redditivita-impresa-edile",
    title: "Aumentare la redditività impresa edile",
    h1: "Come aumentare la redditività della tua impresa edile",
    description:
      "Sette leve concrete per aumentare margine e utile di un'impresa edile senza aumentare il fatturato: preventivi, varianti, costi e produttività.",
    excerpt:
      "Più fatturato non significa più utile. Ecco le leve che alzano davvero la redditività, a parità di cantieri.",
    date: "2026-07-19",
    readingTime: "14 min",
    category: "Marginalità",
  },
  {
    slug: "margine-di-contribuzione-edilizia",
    title: "Margine di contribuzione in edilizia",
    h1: "Margine di contribuzione e margine di commessa in edilizia",
    description:
      "Cos'è il margine di contribuzione per un'impresa edile, come si calcola per commessa e perché è il numero che decide se un cantiere conviene.",
    excerpt:
      "È il numero che ti dice quanto ogni cantiere contribuisce a coprire i costi fissi e a fare utile. Come si calcola e come si usa.",
    date: "2026-07-19",
    readingTime: "13 min",
    category: "Marginalità",
  },
  {
    slug: "gestione-subappalti-edilizia",
    title: "Gestione subappalti in edilizia",
    h1: "Gestione dei subappalti in edilizia: costi, margini e controllo",
    description:
      "Come gestire i subappalti in edilizia senza perdere margine: selezione, contratti, SAL e controllo. I subappalti valgono il 30-50% del cantiere.",
    excerpt:
      "I subappalti sono spesso metà del costo di un cantiere. Se non li governi, il margine se ne va lì. Ecco come tenerli sotto controllo.",
    date: "2026-07-19",
    readingTime: "14 min",
    category: "Cantiere",
  },
  {
    slug: "durc-di-congruita-manodopera",
    title: "DURC di congruità: cos'è e come funziona",
    h1: "DURC di congruità della manodopera: cos'è e come gestirlo",
    description:
      "Cos'è il DURC di congruità, quando serve, come si calcola l'incidenza della manodopera e come evitare il blocco del SAL e dei pagamenti.",
    excerpt:
      "Manodopera sotto la soglia di congruità e il SAL si blocca. Cos'è il DURC di congruità e come arrivarci senza sorprese.",
    date: "2026-07-19",
    readingTime: "13 min",
    category: "Cantiere",
  },
  {
    slug: "costi-di-struttura-impresa-edile",
    title: "Costi di struttura impresa edile",
    h1: "Costi di struttura e spese generali dell'impresa edile",
    description:
      "Quali sono i costi di struttura di un'impresa edile, quanto incidono e come ribaltarli sulle commesse per non lavorare in «pareggio apparente».",
    excerpt:
      "Sede, amministrazione, mezzi, il tuo stipendio: costi che ci sono comunque. Se non li carichi sui preventivi, regali margine su ogni cantiere.",
    date: "2026-07-19",
    readingTime: "13 min",
    category: "Controllo di gestione",
  },
];

const COVERS = new Set([
  "margine-impresa-edile",
  "controllo-di-gestione-edilizia",
  "preventivo-edile-come-farlo",
  "costi-di-cantiere-guida",
  "varianti-in-corso-d-opera",
  "sal-stato-avanzamento-lavori",
  "budget-impresa-edile",
  "quanto-guadagna-impresa-edile",
  "software-per-imprese-edili",
  "liquidita-impresa-edile",
  "costo-orario-manodopera-edile",
]);

export const articles: Article[] = rawArticles.map((a) => ({
  ...a,
  cover: COVERS.has(a.slug) ? `/images/blog/${a.slug}.png` : undefined,
}));

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
