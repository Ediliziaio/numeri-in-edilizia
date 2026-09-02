/* Glossario del controllo di gestione per imprese edili.
   Ogni voce è una definizione ATOMICA e autosufficiente: due-tre frasi che stanno
   in piedi da sole, senza rimandi impliciti. È il formato che i motori generativi
   (ChatGPT, Perplexity, AI Overview) estraggono e citano. La `def` è testo puro:
   viene riusata identica nella pagina, nello schema DefinedTerm e in llms-full.txt. */

export type Voce = {
  slug: string; // anchor #slug e @id nello schema
  term: string;
  def: string;
  more?: { href: string; label: string }; // approfondimento interno
};

export const glossario: Voce[] = [
  {
    slug: "controllo-di-gestione",
    term: "Controllo di gestione (in edilizia)",
    def: "Sistema che misura in tempo reale ricavi, costi e margine di ogni commessa, per decidere sui numeri invece che a intuito. È diverso dalla contabilità: il bilancio fotografa il passato a consuntivo, il controllo di gestione guida il presente mentre i cantieri sono ancora aperti e le decisioni contano ancora.",
    more: { href: "/risorse/controllo-di-gestione-edilizia", label: "Guida al controllo di gestione in edilizia" },
  },
  {
    slug: "commessa",
    term: "Commessa",
    def: "Unità elementare del controllo di gestione in edilizia: un singolo lavoro (cantiere, fornitura con posa, intervento) con i propri ricavi, i propri costi e il proprio margine. Un'impresa edile non guadagna «in media»: guadagna o perde commessa per commessa, e solo leggendole una a una si capisce dove finisce il margine.",
    more: { href: "/risorse/gestione-commessa-edile", label: "Gestione della commessa edile" },
  },
  {
    slug: "margine-di-commessa",
    term: "Margine di commessa",
    def: "Quello che resta dei ricavi di una commessa dopo aver tolto i costi diretti di cantiere e la quota di costi di struttura attribuita a quel lavoro. Formula: ricavi − costi diretti − quota di struttura. Come riferimento per le PMI edili: sotto il 10% la commessa è fragile, tra il 10% e il 15% è in equilibrio, oltre il 15% è solida.",
    more: { href: "/strumenti/calcolo-margine-commessa", label: "Calcolatore del margine di commessa" },
  },
  {
    slug: "margine-di-contribuzione",
    term: "Margine di contribuzione",
    def: "Ricavi di una commessa meno i soli costi variabili diretti (materiali, manodopera, mezzi, subappalti). Indica quanto quel lavoro contribuisce a coprire i costi fissi dell'impresa. È sempre più alto del margine di commessa, perché non sottrae ancora la quota di struttura: confonderli fa sembrare sano un cantiere che in realtà perde.",
    more: { href: "/risorse/margine-di-contribuzione-edilizia", label: "Margine di contribuzione vs margine di commessa" },
  },
  {
    slug: "marginalita",
    term: "Marginalità (%)",
    def: "Il margine espresso in percentuale dei ricavi: margine ÷ ricavi × 100. Serve a confrontare commesse di dimensione diversa e a capire se crescere di volume conviene. Un'impresa con marginalità bassa che aumenta il fatturato aumenta anche le perdite, non l'utile.",
    more: { href: "/risorse/margine-medio-impresa-edile", label: "Il margine medio di un'impresa edile" },
  },
  {
    slug: "costi-diretti",
    term: "Costi diretti di cantiere",
    def: "Costi che esistono solo perché esiste quella commessa e che si possono attribuire a essa senza ripartizioni: materiali (sfrido incluso), manodopera al costo orario reale, mezzi e noli, subappalti, trasporti e smaltimenti, oneri di sicurezza specifici. Sono la base del conto di commessa e vanno rilevati per cantiere, non a livello di impresa.",
    more: { href: "/risorse/costi-di-cantiere-guida", label: "Guida ai costi di cantiere" },
  },
  {
    slug: "costi-di-struttura",
    term: "Costi di struttura (spese generali)",
    def: "Costi che l'impresa sostiene a prescindere dai singoli cantieri: sede, ufficio, amministrazione, mezzi non imputabili, assicurazioni, consulenti, compenso dell'imprenditore. Non si vedono in cantiere ma vanno coperti dai margini di tutte le commesse: se non entrano nei preventivi, ogni lavoro che «pareggia» in realtà perde quella quota.",
    more: { href: "/risorse/costi-di-struttura-impresa-edile", label: "Costi di struttura dell'impresa edile" },
  },
  {
    slug: "incidenza-costi-di-struttura",
    term: "Incidenza dei costi di struttura",
    def: "Percentuale con cui i costi di struttura vengono caricati su ogni commessa. Si calcola dividendo i costi di struttura di un esercizio per i costi diretti dello stesso periodo. Nelle PMI edili si colloca tipicamente tra il 10% e il 20%, ma va calcolata sui numeri della propria impresa e non presa da una tabella.",
    more: { href: "/risorse/costi-di-struttura-impresa-edile", label: "Come calcolare la tua incidenza" },
  },
  {
    slug: "costo-orario-manodopera",
    term: "Costo orario della manodopera",
    def: "Quanto costa davvero all'impresa un'ora di lavoro di un operaio: costo aziendale annuo (lordo, contributi, TFR, ferie, permessi, festività, formazione, dotazioni) diviso le ore realmente produttive in cantiere. È quasi sempre molto più alto della paga oraria in busta, ed è il numero da usare nei preventivi.",
    more: { href: "/strumenti/calcolo-costo-orario-manodopera", label: "Calcolatore del costo orario" },
  },
  {
    slug: "ore-produttive",
    term: "Ore produttive",
    def: "Le ore che un operaio passa effettivamente a produrre in cantiere, al netto di ferie, malattia, permessi, festività, formazione, spostamenti e tempi morti. Sono sempre meno delle ore contrattuali: dividere il costo aziendale per le ore contrattuali invece che per quelle produttive sottostima il costo orario e falsa ogni preventivo.",
    more: { href: "/risorse/costo-orario-manodopera-edile", label: "Costo orario della manodopera edile" },
  },
  {
    slug: "preventivo-vs-consuntivo",
    term: "Preventivo vs consuntivo (scostamento)",
    def: "Confronto tra quanto si era previsto di spendere e incassare su una commessa e quanto sta effettivamente accadendo. Lo scostamento, voce per voce, è il segnale più utile del controllo di gestione: letto ogni settimana mentre il cantiere è aperto permette di correggere; letto a fine lavori serve solo a contare il danno.",
    more: { href: "/strumenti/template-budget-cantiere", label: "Template budget con preventivo e consuntivo" },
  },
  {
    slug: "budget-di-cantiere",
    term: "Budget di cantiere",
    def: "Il piano economico di una commessa fatto prima di iniziare: ricavi attesi, costi diretti per categoria, quota di struttura e margine obiettivo. Non è una stima da archiviare ma il riferimento con cui confrontare il consuntivo. Il margine si decide nel budget, non si scopre alla fine.",
    more: { href: "/risorse/budget-impresa-edile", label: "Il budget dell'impresa edile" },
  },
  {
    slug: "break-even",
    term: "Break even (punto di pareggio)",
    def: "Il fatturato minimo annuo sotto il quale l'impresa lavora in perdita anche con i cantieri pieni. Formula: costi fissi annui ÷ margine di contribuzione medio in percentuale. Dipende da quanto resta su ogni euro fatturato, non da quanto si fattura: alzare il margine abbassa il pareggio più di quanto faccia prendere nuovi lavori.",
    more: { href: "/strumenti/calcolo-break-even-edile", label: "Calcolatore del break even" },
  },
  {
    slug: "sal",
    term: "SAL — Stato Avanzamento Lavori",
    def: "Documento che certifica la quota di lavori eseguiti a una certa data e dà diritto a emettere la fattura corrispondente. È lo strumento con cui una commessa lunga genera incassi durante l'esecuzione invece che solo alla fine. Un SAL in ritardo o sottostimato è una delle cause principali dei problemi di liquidità in edilizia.",
    more: { href: "/risorse/sal-stato-avanzamento-lavori", label: "SAL: cosa sono e come gestirli" },
  },
  {
    slug: "varianti-in-corso-d-opera",
    term: "Varianti in corso d'opera",
    def: "Lavorazioni aggiuntive o diverse rispetto al contratto, richieste o rese necessarie durante l'esecuzione. Vanno tracciate, quantificate e approvate per iscritto dal committente prima di essere eseguite: le varianti fatte e mai fatturate sono una delle perdite più comuni e più invisibili del margine di commessa.",
    more: { href: "/risorse/varianti-in-corso-d-opera", label: "Come tracciare e farsi pagare le varianti" },
  },
  {
    slug: "durc-di-congruita",
    term: "DURC di congruità",
    def: "Attestazione che verifica se la manodopera impiegata in un cantiere è congrua rispetto al valore dell'opera, secondo indici minimi di incidenza fissati per categoria di lavori. Senza congruità non si ottiene il DURC per il cantiere. Per l'impresa è anche un controllo indiretto sulla correttezza dei propri costi di manodopera.",
    more: { href: "/risorse/durc-di-congruita-manodopera", label: "DURC di congruità della manodopera" },
  },
  {
    slug: "liquidita",
    term: "Liquidità (cassa di commessa)",
    def: "I soldi effettivamente disponibili, distinti dal fatturato e dall'utile. Un'impresa può fatturare molto, essere in utile e non avere cassa: succede quando anticipa materiali e manodopera per mesi e incassa in ritardo, per SAL lenti, ritenute o dilazioni. Il fatturato è un'opinione, la cassa è un fatto.",
    more: { href: "/risorse/liquidita-impresa-edile", label: "Perché fatturi ma non hai cassa" },
  },
  {
    slug: "kpi-impresa-edile",
    term: "KPI dell'impresa edile",
    def: "I pochi indicatori che dicono come sta l'impresa: margine per commessa, scostamento preventivo/consuntivo, incidenza dei costi di struttura e liquidità. Meglio quattro numeri letti ogni settimana che decine di report che nessuno apre. A questi si aggiunge un indicatore critico specifico del mestiere.",
    more: { href: "/risorse/kpi-impresa-edile", label: "I KPI che contano davvero" },
  },
  {
    slug: "compenso-imprenditore",
    term: "Compenso dell'imprenditore",
    def: "La retribuzione del titolare per il lavoro che svolge in impresa, da mettere tra i costi di struttura e a budget come qualsiasi altro costo. Se non viene contabilizzato, il margine appare più alto del reale e il punto di pareggio più basso: l'impresa sembra sana mentre sta pagando il titolare con l'utile che non c'è.",
    more: { href: "/risorse/quanto-guadagna-impresa-edile", label: "Quanto deve guadagnare un'impresa edile" },
  },
  {
    slug: "riclassificazione-dei-costi",
    term: "Riclassificazione dei costi",
    def: "Riorganizzare i costi già registrati in contabilità secondo la logica del cantiere — diretti per commessa e di struttura — invece che per natura fiscale. È il primo passo del controllo di gestione: gli stessi numeri del commercialista, letti in un modo che serve a decidere e non solo a dichiarare.",
    more: { href: "/risorse/controllo-gestione-o-commercialista", label: "Controllo di gestione o commercialista" },
  },
  {
    slug: "utile-vs-fatturato",
    term: "Utile vs fatturato",
    def: "Il fatturato è quanto l'impresa incassa dai clienti; l'utile è quanto resta dopo tutti i costi, compreso il compenso dell'imprenditore. Sono due numeri che non si muovono insieme: un'impresa edile può crescere di fatturato e ridurre l'utile, se cresce su lavori a margine basso o con costi di struttura non coperti.",
    more: { href: "/risorse/margine-impresa-edile", label: "Perché fatturi tanto ma guadagni poco" },
  },
  {
    slug: "subappalto",
    term: "Subappalto (costo e margine)",
    def: "Affidamento a un'altra impresa di una parte dei lavori di una commessa. Per il controllo di gestione è un costo diretto da confrontare con il ricavo della stessa lavorazione: il margine sul subappalto è spesso più basso di quello sulla produzione interna, e va deciso prima con i numeri, non subìto dopo.",
    more: { href: "/risorse/gestione-subappalti-edilizia", label: "Gestione dei subappalti" },
  },
  {
    slug: "sfrido",
    term: "Sfrido",
    def: "La parte di materiale acquistata e non messa in opera: tagli, rotture, scarti, eccedenze. Va inclusa nel costo dei materiali a preventivo, perché lo scarto si paga come il resto. Ignorarlo è un errore sistematico che sottostima i costi diretti su ogni commessa.",
    more: { href: "/risorse/costi-di-cantiere-guida", label: "Guida ai costi di cantiere" },
  },
  {
    slug: "ritenuta-a-garanzia",
    term: "Ritenuta a garanzia",
    def: "Quota di ogni SAL (tipicamente una piccola percentuale) che il committente trattiene fino al collaudo o alla fine dei lavori, a garanzia della corretta esecuzione. È fatturato maturato ma cassa che non entra: va considerata nel piano di liquidità della commessa, altrimenti i conti tornano sulla carta e non in banca.",
    more: { href: "/risorse/liquidita-impresa-edile", label: "Liquidità nell'impresa edile" },
  },
];

export function vocePerSlug(slug: string) {
  return glossario.find((v) => v.slug === slug);
}
