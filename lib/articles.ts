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
];

export const articles: Article[] = rawArticles.map((a) => ({
  ...a,
  cover: `/images/blog/${a.slug}.png`,
}));

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
