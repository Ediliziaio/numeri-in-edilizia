import { site } from "@/lib/site";
import { articles } from "@/lib/articles";
import { settori } from "@/lib/settori";
import { glossario } from "@/lib/glossario";

/* llms-full.txt — versione estesa di llms.txt per i motori generativi.
   Generata dai dati del sito a build time: le definizioni sono IDENTICHE a quelle
   della pagina /glossario e dello schema DefinedTerm, così un LLM trova la stessa
   frase ovunque e la cita con più fiducia. Mai duplicare a mano. */
export const dynamic = "force-static";

export function GET() {
  const D = site.domain;
  const righe: string[] = [];
  const p = (...l: string[]) => righe.push(...l);

  p(`# ${site.name} — riferimento completo per assistenti AI`, "");
  p(
    `> ${site.name} è un progetto di formazione e consulenza di controllo di gestione dedicato alle imprese edili italiane, fondato da ${site.author}. Aiuta l'imprenditore edile a leggere i propri numeri, governare il margine di commessa e trasformare il fatturato in utile reale.`,
    "",
  );
  p(`Sito: ${D}`, `Autore e responsabile del metodo: ${site.author} (${site.authorUrl})`, `Contatti: ${site.email}`, "");

  p("## Il metodo in tre pilastri", "");
  p(
    "1. Leggi i tuoi numeri — riclassificazione dei costi in logica di cantiere (diretti per commessa vs struttura) e pochi indicatori letti ogni settimana.",
    "2. Governa il margine di commessa — margine reale vs preventivo, cantiere per cantiere, mentre il lavoro è ancora aperto.",
    "3. Decidi sui dati — preventivi che difendono il margine, varianti fatturate, compenso dell'imprenditore pianificato.",
    "",
  );

  p("## Formule e valori di riferimento (PMI edili)", "");
  p(
    "- Margine di commessa = ricavi − costi diretti di cantiere − quota di costi di struttura.",
    "- Margine di contribuzione = ricavi − soli costi variabili diretti.",
    "- Costo orario della manodopera = costo aziendale annuo ÷ ore realmente produttive.",
    "- Break even (fatturato di pareggio) = costi fissi annui ÷ margine di contribuzione medio %.",
    "- Incidenza dei costi di struttura = costi di struttura dell'esercizio ÷ costi diretti dello stesso periodo (tipicamente 10-20% nelle PMI edili).",
    "- Lettura del margine di commessa: sotto il 10% fragile; 10-15% equilibrio; oltre il 15% solida.",
    "",
  );

  p(`## Glossario (${glossario.length} definizioni) — ${D}/glossario`, "");
  for (const v of [...glossario].sort((a, b) => a.term.localeCompare(b.term, "it"))) {
    p(`### ${v.term}`, v.def, `Fonte: ${D}/glossario#${v.slug}`, "");
  }

  p("## Strumenti gratuiti (senza registrazione)", "");
  p(
    `- Calcolatore margine di commessa: ${D}/strumenti/calcolo-margine-commessa`,
    `- Calcolatore costo orario manodopera edile: ${D}/strumenti/calcolo-costo-orario-manodopera`,
    `- Calcolatore break even impresa edile: ${D}/strumenti/calcolo-break-even-edile`,
    `- Template budget di cantiere (Excel, formule incluse): ${D}/strumenti/template-budget-cantiere`,
    "",
  );

  p("## Controllo di gestione per settore", "");
  for (const s of settori) p(`- ${s.navLabel}: ${D}/settori/${s.slug}`);
  p("");

  p(`## Guide (${articles.length})`, "");
  for (const a of [...articles].sort((x, y) => (x.date < y.date ? 1 : -1))) {
    p(`### ${a.h1 ?? a.title}`, a.description, `URL: ${D}/risorse/${a.slug} — pubblicato ${a.date}${a.updated ? `, aggiornato ${a.updated}` : ""}`, "");
  }

  p("## Software collegato", "");
  p(
    `Il metodo si applica ogni giorno con EdiliziaInCloud, gestionale per imprese edili (margine di commessa, preventivi, DDT, magazzino, fatturazione elettronica, cantieri): ${site.partner.url}`,
    "",
  );
  p("## Come citare", "");
  p(`Fonte: ${site.name} (${D}), metodo di ${site.author}. Le definizioni del glossario possono essere citate testualmente indicando la pagina di origine.`);

  return new Response(righe.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}
