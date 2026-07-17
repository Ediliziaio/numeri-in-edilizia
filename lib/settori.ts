export type Settore = {
  slug: string;
  navLabel: string; // per menu/liste
  nome: string; // "imprese di costruzioni"
  nomeBreve: string; // "Costruzioni"
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  keywords: string[];
  intro2: string;
  approfondimento: { title: string; body: string[] };
  problemi: string[];
  soluzione: string;
  benefici: { t: string; d: string }[];
  indicatori: { nome: string; desc: string }[];
  monitoraggio: string[];
  trend: number[];
  esempio: { before: string; after: string; metric: string; metricLabel: string };
  faq: { q: string; a: string }[];
};

export const settori: Settore[] = [
  {
    slug: "imprese-edili",
    navLabel: "Imprese edili e costruzioni",
    nome: "imprese di costruzioni",
    nomeBreve: "Costruzioni",
    h1: "Controllo di gestione per imprese edili e di costruzioni",
    metaTitle: "Controllo di gestione imprese di costruzioni",
    metaDescription:
      "Margine di commessa, SAL, varianti e costi di struttura sotto controllo: il controllo di gestione per imprese di costruzioni.",
    heroIntro:
      "Le imprese di costruzioni gestiscono commesse lunghe, tanti fornitori e squadre in movimento. Basta un preventivo sbagliato o una variante non fatturata per bruciare il margine di mesi di lavoro. Il metodo Numeri in Edilizia ti fa vedere l'utile di ogni cantiere prima che sia troppo tardi.",
    keywords: [
      "controllo di gestione imprese edili",
      "controllo di gestione impresa di costruzioni",
      "margine di commessa edilizia",
      "SAL e marginalità cantiere",
    ],
    intro2:
      "In un'impresa di costruzioni il rischio non è il singolo errore, ma la somma di tanti piccoli scostamenti distribuiti su commesse che durano mesi. Un preventivo troppo ottimista, un SAL in ritardo, un subappalto rinegoziato male: presi da soli sembrano poca cosa, sommati si mangiano l'utile dell'intero esercizio. Ecco perché serve un controllo che lavori in continuo, non a fine anno.",
    approfondimento: {
      title: "Perché in edilizia il margine si perde «a rate»",
      body: [
        "La commessa edile è lunga per natura: tra offerta, aggiudicazione, avanzamento lavori e collaudo passano mesi, a volte anni. In questo tempo cambiano i prezzi dei materiali, si aggiungono varianti, la manodopera si sposta tra cantieri e i costi di struttura corrono comunque. Se guardi solo il totale a fine esercizio, l'erosione di margine ti arriva addosso tutta insieme, quando non puoi più fare nulla.",
        "Il controllo di gestione ribalta la logica: misura il margine di ogni commessa SAL dopo SAL, confrontando in continuo il consuntivo con il preventivo. Così un cantiere che sta scivolando lo vedi al terzo SAL, non al collaudo — e hai ancora il tempo per rinegoziare un fornitore, ribaltare una variante o rivedere la squadra. È la differenza tra guidare guardando la strada e guidare guardando lo specchietto retrovisore.",
      ],
    },
    problemi: [
      "Commesse lunghe in cui il margine si erode un SAL alla volta, senza che te ne accorga.",
      "Preventivi su capitolati complessi fatti «a esperienza», senza costi reali alla base.",
      "Varianti in corso d'opera che finisci per pagarti tu invece del committente.",
      "Costi di struttura (mezzi, ufficio, direttore di cantiere) non allocati alle commesse.",
      "Subappalti e noli che sfuggono al controllo del margine.",
    ],
    soluzione:
      "Riclassifichiamo i costi in logica di commessa e ti diamo il margine reale di ogni cantiere, SAL dopo SAL, a confronto con il preventivo. Così intervieni quando puoi ancora — rinegoziando, ribaltando una variante, correggendo la manodopera.",
    benefici: [
      { t: "Margine per commessa", d: "Sai in tempo reale quali cantieri guadagnano e quali erodono utile." },
      { t: "Preventivi solidi", d: "Costruiti sui costi reali di materiali, manodopera, mezzi e subappalti." },
      { t: "Varianti fatturate", d: "Tracciate e ribaltate al committente, non assorbite dal tuo margine." },
      { t: "Costi di struttura allocati", d: "Ogni cantiere porta il suo peso reale, niente utile «gonfiato»." },
    ],
    indicatori: [
      { nome: "Margine di commessa", desc: "Ricavi (varianti incluse) meno costi diretti e quota di struttura: l'utile reale del cantiere." },
      { nome: "Scostamento preventivo/consuntivo", desc: "Di quanto ti stai discostando dal preventivo, voce per voce, mentre il cantiere è aperto." },
      { nome: "Incidenza dei costi di struttura", desc: "Quanto pesa la «macchina» impresa e quanto ogni commessa deve contribuire a coprirla." },
      { nome: "Avanzamento vs incassato", desc: "Il rapporto tra lavori eseguiti e SAL incassati: la spia della tua liquidità." },
    ],
    monitoraggio: [
      "Il margine aggiornato di ogni cantiere aperto.",
      "Gli scostamenti tra preventivo e consuntivo per voce di costo.",
      "Le varianti concordate ma non ancora fatturate.",
      "Il rapporto tra avanzamento lavori e SAL incassati.",
    ],
    trend: [22, 28, 26, 36, 44, 52, 60, 72],
    esempio: {
      before: "Impresa da 22 dipendenti, varianti non fatturate e costi di struttura non allocati.",
      after: "Varianti ribaltate al committente e costi riclassificati: +9 punti di marginalità sui cantieri in corso.",
      metric: "+9",
      metricLabel: "punti di margine",
    },
    faq: [
      {
        q: "Come si calcola il margine di una commessa edile?",
        a: "Ricavi della commessa (incluse le varianti) meno i costi diretti — materiali, manodopera, mezzi, noli, subappalti — e la quota di costi di struttura allocata. Il risultato è il margine reale del cantiere, il numero che ti dice se ci hai guadagnato.",
      },
      {
        q: "Il controllo di gestione serve anche con commesse pubbliche e SAL?",
        a: "Sì, anzi è dove serve di più: con i SAL il margine si distribuisce nel tempo e senza monitoraggio si scopre l'erosione solo a fine lavori. Il metodo confronta il consuntivo di ogni SAL con il preventivo, in tempo reale.",
      },
      {
        q: "Come alloco i costi di struttura alle commesse?",
        a: "Definendo un criterio semplice (per esempio in percentuale sui costi diretti o sulle ore) e applicandolo a ogni cantiere. Così nessuna commessa sembra più redditizia di quanto sia davvero e l'utile complessivo torna coerente col bilancio.",
      },
      {
        q: "Quanto tempo serve per mettere sotto controllo un'impresa di costruzioni?",
        a: "In genere bastano 60-90 giorni per riclassificare i costi, impostare gli indicatori e leggere il margine dei cantieri in corso. Da lì il monitoraggio richiede pochi minuti a settimana.",
      },
      {
        q: "Devo cambiare il mio gestionale di cantiere?",
        a: "No. Si parte dai dati che già produci. EdiliziaInCloud è il modo più semplice per mantenere il controllo nel tempo, ma il metodo funziona a prescindere dallo strumento.",
      },
    ],
  },
  {
    slug: "ristrutturazioni",
    navLabel: "Imprese di ristrutturazioni",
    nome: "imprese di ristrutturazioni",
    nomeBreve: "Ristrutturazioni",
    h1: "Controllo di gestione per imprese di ristrutturazioni",
    metaTitle: "Controllo di gestione per ristrutturazioni",
    metaDescription:
      "Controllo di gestione per imprese di ristrutturazioni: margine per cantiere, extra non previsti e preventivi che reggono. Guadagna davvero su ogni lavoro.",
    heroIntro:
      "Nelle ristrutturazioni ogni appartamento è un mondo a sé: imprevisti dietro un muro, lavori extra concordati a voce, tanti piccoli cantieri in parallelo. È facile essere sempre in movimento e non sapere quale lavoro ti fa davvero guadagnare. Il metodo Numeri in Edilizia mette ordine.",
    keywords: [
      "controllo di gestione ristrutturazioni",
      "margine ristrutturazione appartamento",
      "preventivo ristrutturazione redditività",
      "gestione cantieri ristrutturazione",
    ],
    intro2:
      "Chi fa ristrutturazioni convive con l'imprevisto: dietro un muro può esserci una sorpresa che cambia i conti, e col cliente si concordano continuamente piccoli extra, spesso a voce. Moltiplica tutto questo per i dieci cantieri che hai aperti oggi e capisci perché il margine complessivo nasconde i lavori in perdita: senza un controllo per singolo cantiere, non sai quale casa ti sta facendo guadagnare e quale ti sta costando.",
    approfondimento: {
      title: "Il margine di una ristrutturazione si decide sugli extra",
      body: [
        "Un preventivo di ristrutturazione parte quasi sempre corretto: è durante i lavori che il margine si gioca. L'imprevisto dietro il muro, la modifica chiesta dal cliente, il materiale scelto all'ultimo più costoso del previsto. Se questi extra non vengono tracciati e fatturati, diventano un regalo che fai tu — e su un cantiere piccolo bastano due o tre regali per azzerare l'utile.",
        "Il metodo ti dà un processo semplice per non perdere nessun extra: ogni variazione concordata viene registrata, quantificata e ribaltata al cliente. È spesso il modo più veloce per recuperare marginalità, perché non richiede di alzare i prezzi né di lavorare di più: richiede solo di farti pagare quello che stai già facendo.",
      ],
    },
    problemi: [
      "Tanti cantieri piccoli in parallelo: impossibile capire a colpo d'occhio quali rendono.",
      "Imprevisti «dietro il muro» che diventano costi tuoi anziché extra fatturati.",
      "Lavori aggiuntivi concordati a voce col cliente e mai messi a preventivo.",
      "Preventivi al mq copiati dall'ultimo lavoro, senza i costi reali di questo.",
      "Manodopera che rimbalza tra cantieri senza essere imputata a nessuno.",
    ],
    soluzione:
      "Ti diamo il margine reale di ogni singola ristrutturazione, con gli extra tracciati e imputati. Sai quali tipologie di lavoro (bagno, cucina, ristrutturazione completa) ti rendono di più e su quali stai lavorando in perdita.",
    benefici: [
      { t: "Margine per cantiere", d: "Anche con dieci cantieri aperti, sai quale rende e quale no." },
      { t: "Extra sempre fatturati", d: "Imprevisti e lavori aggiuntivi tracciati e ribaltati al cliente." },
      { t: "Preventivi che reggono", d: "Prezzi al mq basati sui costi reali, non sull'ultima fattura." },
      { t: "Manodopera imputata", d: "Ogni ora finisce sul cantiere giusto, niente costi che spariscono." },
    ],
    indicatori: [
      { nome: "Margine per cantiere", desc: "L'utile reale di ogni singola ristrutturazione, non la media di tutte." },
      { nome: "Extra fatturati vs concordati", desc: "Quanti dei lavori aggiuntivi concordati si trasformano davvero in fattura." },
      { nome: "Costo reale al mq", desc: "Il costo effettivo per metro quadro di questo lavoro, per preventivare meglio il prossimo." },
      { nome: "Ore per cantiere", desc: "La manodopera imputata a ogni casa, per sapere dove finisce davvero il tempo delle squadre." },
    ],
    monitoraggio: [
      "Il margine di ogni cantiere aperto, aggiornato.",
      "Gli extra concordati che non sono ancora stati fatturati.",
      "Le ore di manodopera imputate a ciascun cantiere.",
      "Lo scostamento tra preventivo e costo reale al mq.",
    ],
    trend: [18, 24, 30, 28, 40, 48, 58, 66],
    esempio: {
      before: "Impresa da 8 dipendenti, 1,4 M€ di fatturato, utile vicino allo zero, preventivi a esperienza.",
      after: "Due commesse in perdita individuate e preventivi ricostruiti: da 0% a 12% di margine medio.",
      metric: "12%",
      metricLabel: "margine medio",
    },
    faq: [
      {
        q: "Come faccio a sapere se una ristrutturazione mi fa guadagnare?",
        a: "Confrontando il preventivo con il consuntivo reale del cantiere: materiali, ore di manodopera, subappalti ed extra. Il controllo di gestione lo fa per ogni lavoro, così vedi il margine effettivo e non solo l'incasso.",
      },
      {
        q: "Come gestisco gli imprevisti e i lavori extra?",
        a: "Vanno tracciati come varianti e fatturati al cliente. Il metodo ti dà un processo semplice per non lasciarne sfuggire nessuno: è spesso il modo più veloce per recuperare margine senza aumentare i prezzi.",
      },
      {
        q: "Funziona anche con tanti piccoli cantieri contemporanei?",
        a: "Sì. Anzi è lì che serve di più: con molti cantieri in parallelo il margine complessivo nasconde i lavori in perdita. Il metodo li fa emergere uno per uno.",
      },
      {
        q: "Come faccio preventivi al mq più precisi?",
        a: "Partendo dal costo reale al metro quadro dei lavori già chiusi, distinto per tipologia (bagno, cucina, ristrutturazione completa). Il controllo di gestione ti costruisce questi dati, così ogni preventivo nasce sui tuoi numeri veri.",
      },
      {
        q: "I bonus edilizi complicano il controllo di gestione?",
        a: "Il metodo tiene separato l'incasso reale dalle dinamiche di sconto in fattura e cessione del credito, così leggi il margine effettivo del lavoro al netto delle pratiche fiscali.",
      },
    ],
  },
  {
    slug: "serramentisti",
    navLabel: "Serramentisti e infissi",
    nome: "serramentisti e produttori di infissi",
    nomeBreve: "Serramenti",
    h1: "Controllo di gestione per serramentisti e aziende di infissi",
    metaTitle: "Controllo di gestione per serramentisti",
    metaDescription:
      "Controllo di gestione per serramentisti: marginalità per commessa, listini e preventivi sui costi reali, posa inclusa. Prezzi giusti e utile prevedibile.",
    heroIntro:
      "Chi produce e posa serramenti vive di preventivi: un prezzo sbagliato sul infisso o sulla posa, moltiplicato per decine di commesse, si mangia l'utile dell'anno. Il metodo Numeri in Edilizia ti fa costruire i prezzi sui costi reali e ti mostra il margine di ogni fornitura.",
    keywords: [
      "controllo di gestione serramentisti",
      "marginalità serramenti e infissi",
      "preventivo infissi costo reale",
      "gestione azienda serramenti",
    ],
    intro2:
      "Nel mondo dei serramenti il margine è fatto di due pezzi che spesso vengono confusi: il prodotto e la posa. Sul prodotto hai listini e sconti fornitore che conosci; sulla posa, invece, si va a sensazione — e sono proprio le ore in cantiere, sottostimate, a mangiarsi il guadagno. Se non separi i due mondi, non sai mai se stai guadagnando sul serramento o perdendo sulla posa.",
    approfondimento: {
      title: "Il prezzo giusto di un serramento non è quello della concorrenza",
      body: [
        "Molte aziende di infissi fissano i prezzi guardando il mercato: «più o meno come fanno gli altri». È il modo più rapido per lavorare sotto margine senza accorgersene, perché non tiene conto dei tuoi costi reali — quelli del tuo prodotto, della tua squadra, del tuo cantiere. Il prezzo giusto è quello che parte dal costo e ci somma il margine che decidi tu, non quello che decide il concorrente.",
        "Il metodo ti fa costruire un listino strutturato: costo prodotto + costo posa (ore reali × costo orario squadra) + margine obiettivo. Da lì i preventivi diventano rapidi e, soprattutto, hanno un margine garantito alla base. E confrontando il preventivo con il consuntivo scopri quali tipologie — PVC, alluminio, blindati — ti rendono davvero e quali stai vendendo in perdita.",
      ],
    },
    problemi: [
      "Prezzi decisi a intuito o «come la concorrenza», senza i costi reali di prodotto e posa.",
      "Posa in opera sottostimata: le ore in cantiere si mangiano il margine del prodotto.",
      "Nessuna visibilità sul margine per singola commessa o tipologia di infisso.",
      "Bonus fiscali e pratiche che complicano la lettura dell'incasso reale.",
      "Magazzino e forniture non collegati alla commessa che li ha generati.",
    ],
    soluzione:
      "Costruiamo i preventivi su costo prodotto + costo posa + margine obiettivo, e ti diamo il margine di ogni fornitura. Sai quali tipologie (PVC, alluminio, blindati) e quali cantieri ti rendono davvero.",
    benefici: [
      { t: "Prezzi sui costi reali", d: "Prodotto e posa calcolati, non stimati a sensazione." },
      { t: "Posa a margine", d: "Le ore in opera imputate alla commessa, non «regalate»." },
      { t: "Margine per tipologia", d: "Sai se guadagni di più su PVC, alluminio o blindati." },
      { t: "Preventivi più veloci", d: "Listino strutturato: preventivi rapidi e con margine garantito." },
    ],
    indicatori: [
      { nome: "Margine per fornitura", desc: "L'utile reale di ogni commessa di serramenti, prodotto e posa insieme." },
      { nome: "Costo reale della posa", desc: "Ore effettive in cantiere × costo orario squadra: il numero che spesso manca." },
      { nome: "Margine per tipologia", desc: "Quanto rendono PVC, alluminio e blindati, per spingere ciò che guadagna di più." },
      { nome: "Scostamento listino/consuntivo", desc: "Di quanto il costo reale si discosta dal listino su cui hai preventivato." },
    ],
    monitoraggio: [
      "Il margine di ogni fornitura consegnata o in corso.",
      "Le ore di posa reali rispetto a quelle preventivate.",
      "Il margine per tipologia di infisso.",
      "Le forniture collegate alla commessa che le ha generate.",
    ],
    trend: [26, 30, 34, 44, 52, 60, 70, 82],
    esempio: {
      before: "Azienda da 6 dipendenti, prezzi a intuito, nessuna visibilità sul margine per lavoro.",
      after: "Listino e preventivi su costo reale + margine obiettivo: utile netto +32% e preventivi il 40% più rapidi.",
      metric: "+32%",
      metricLabel: "utile netto",
    },
    faq: [
      {
        q: "Come calcolo il prezzo giusto di un serramento?",
        a: "Sommando costo del prodotto, costo reale della posa (ore × costo orario squadra) e il margine obiettivo che decidi tu. Il controllo di gestione ti dà i costi reali su cui costruire il listino, così non lavori sotto margine.",
      },
      {
        q: "Perché la posa mi erode il margine?",
        a: "Perché spesso è sottostimata: le ore in cantiere valgono più di quanto sembra. Imputando la posa alla commessa vedi il margine vero della fornitura e correggi i preventivi futuri.",
      },
      {
        q: "Il metodo tiene conto dei bonus fiscali?",
        a: "Sì: distingue l'incasso reale dalle dinamiche di cessione del credito e sconto in fattura, così leggi il margine effettivo dell'azienda al netto delle pratiche.",
      },
      {
        q: "Come faccio a sapere quale tipologia di infisso mi conviene spingere?",
        a: "Misurando il margine per tipologia — PVC, alluminio, blindati. Il controllo di gestione ti mostra dove guadagni di più, così orienti offerta e marketing verso i prodotti più redditizi.",
      },
      {
        q: "Serve un gestionale per tenere il listino aggiornato?",
        a: "Non per iniziare: si parte dai dati che hai. EdiliziaInCloud aiuta a mantenere listino, preventivi e margini allineati nel tempo, ma il metodo di calcolo è indipendente dallo strumento.",
      },
    ],
  },
  {
    slug: "impiantisti",
    navLabel: "Impiantisti (termo/elettrico)",
    nome: "imprese di impianti termoidraulici ed elettrici",
    nomeBreve: "Impianti",
    h1: "Controllo di gestione per impiantisti e aziende di impianti",
    metaTitle: "Controllo di gestione per impiantisti",
    metaDescription:
      "Controllo di gestione per impiantisti: margine per intervento e per commessa, materiale e manodopera imputati, assistenze a margine. Guadagna su ogni lavoro.",
    heroIntro:
      "Tra impianti su cantiere, chiamate di assistenza e materiale che gira, l'impiantista rischia di lavorare tantissimo e guadagnare poco. Il metodo Numeri in Edilizia ti fa vedere il margine di ogni commessa e di ogni intervento, così sai dove stai lavorando in perdita.",
    keywords: [
      "controllo di gestione impiantisti",
      "margine impianti termoidraulici",
      "gestione azienda elettrica edilizia",
      "redditività assistenze impianti",
    ],
    intro2:
      "L'impiantista vive di due mondi diversi: le commesse di impianto, lunghe e strutturate, e le assistenze, piccole e frequenti. Il problema è che spesso vengono messe nello stesso calderone: materiale che esce dal magazzino senza destinazione, ore divise tra cantieri e chiamate, trasferte non conteggiate. Alla fine sai quanto hai incassato, ma non da dove arriva davvero il tuo margine.",
    approfondimento: {
      title: "Cantieri e assistenze: due margini da leggere separati",
      body: [
        "Su un impianto di cantiere il margine si costruisce come in ogni commessa: materiale e manodopera a preventivo, confronto col consuntivo. Le assistenze invece hanno una dinamica diversa: tanti interventi piccoli in cui il costo nascosto è il tempo — trasferte, tempi morti, materiale minuto. Se non li tieni separati, un service in perdita può prosciugare il margine dei cantieri buoni senza che tu lo veda.",
        "Il metodo imputa materiale e ore all'intervento o alla commessa giusta e ti dà due margini distinti: quello dei cantieri e quello del service. Spesso è una rivelazione: molte aziende scoprono che le assistenze, considerate «un di più», in realtà lavorano sotto costo — e bastano piccoli aggiustamenti di prezzo o di organizzazione per trasformarle in una fonte di margine.",
      ],
    },
    problemi: [
      "Materiale che esce dal magazzino senza essere imputato alla commessa giusta.",
      "Ore di manodopera divise tra cantieri e assistenze, senza tracciamento.",
      "Assistenze e piccoli interventi che, tra trasferte e tempi morti, vanno in perdita.",
      "Preventivi su impianti complessi fatti senza i costi reali di materiale e ore.",
      "Nessuna distinzione tra il margine dei cantieri e quello del service.",
    ],
    soluzione:
      "Imputiamo materiale e ore alla commessa o all'intervento giusto e ti diamo il margine di entrambi i mondi: cantieri e assistenze. Scopri quali servizi ti rendono e quali stai regalando.",
    benefici: [
      { t: "Materiale imputato", d: "Ogni articolo esce a carico della commessa che lo consuma." },
      { t: "Ore tracciate", d: "Manodopera divisa correttamente tra cantieri e interventi." },
      { t: "Assistenze a margine", d: "Sai se il service guadagna o se trasferte e tempi morti lo affossano." },
      { t: "Preventivi affidabili", d: "Impianti quotati su costi reali di materiale e manodopera." },
    ],
    indicatori: [
      { nome: "Margine per commessa", desc: "L'utile reale degli impianti su cantiere, materiale e ore inclusi." },
      { nome: "Margine del service", desc: "Il risultato delle assistenze, separato dai cantieri, trasferte comprese." },
      { nome: "Costo orario reale", desc: "Quanto ti costa davvero un'ora di tecnico, tempi morti e spostamenti inclusi." },
      { nome: "Materiale imputato", desc: "La quota di materiale correttamente collegata a commesse e interventi." },
    ],
    monitoraggio: [
      "Il margine delle commesse di impianto in corso.",
      "Il margine del service, separato dai cantieri.",
      "Il materiale uscito dal magazzino e la sua destinazione.",
      "Le ore dei tecnici divise tra cantieri e assistenze.",
    ],
    trend: [20, 26, 24, 34, 42, 50, 58, 68],
    esempio: {
      before: "Materiale e ore non imputati, assistenze quotate a sensazione.",
      after: "Costi imputati per commessa e intervento: il service passa da voce «grigia» a margine misurabile.",
      metric: "100%",
      metricLabel: "costi imputati",
    },
    faq: [
      {
        q: "Come faccio a sapere se le assistenze mi fanno guadagnare?",
        a: "Imputando a ogni intervento il materiale usato e le ore reali (inclusa la trasferta). Il controllo di gestione ti dà il margine del service separato da quello dei cantieri, così vedi quali interventi rendono.",
      },
      {
        q: "Il materiale a magazzino come lo controllo?",
        a: "Collegando ogni uscita di materiale alla commessa o all'intervento che lo consuma. Così il costo finisce dove è stato generato e il margine è quello vero.",
      },
      {
        q: "Vale sia per il termoidraulico che per l'elettrico?",
        a: "Sì: la logica è la stessa: materiale + manodopera imputati alla commessa, margine per lavoro. Il metodo si adatta al tuo mix di cantieri e assistenze.",
      },
      {
        q: "Come calcolo il costo orario reale di un tecnico?",
        a: "Partendo dal costo aziendale del tecnico e dividendolo per le ore realmente produttive, non per quelle teoriche: così trasferte e tempi morti entrano nel conto e i preventivi diventano realistici.",
      },
      {
        q: "Posso far pagare di più le assistenze senza perdere clienti?",
        a: "Spesso non serve alzare i prezzi, ma riorganizzare gli interventi e conteggiare correttamente le trasferte. Il controllo di gestione ti mostra dove il service perde, così intervieni con precisione invece che a tappeto.",
      },
    ],
  },
  {
    slug: "carpenteria-metallica",
    navLabel: "Carpenteria metallica",
    nome: "carpenterie metalliche",
    nomeBreve: "Carpenteria",
    h1: "Controllo di gestione per carpenterie metalliche",
    metaTitle: "Controllo di gestione carpenteria metallica",
    metaDescription:
      "Margine per commessa, costo acciaio, ore di officina e montaggio sotto controllo: preventivi che reggono i rincari.",
    heroIntro:
      "La carpenteria vive di preventivi lunghi e di un costo materia prima che oscilla: basta un rincaro dell'acciaio non ribaltato o un montaggio sottostimato per lavorare in perdita. Il metodo Numeri in Edilizia ti fa quotare sui costi reali e monitorare il margine di ogni commessa.",
    keywords: [
      "controllo di gestione carpenteria metallica",
      "margine commessa carpenteria",
      "costo acciaio preventivo carpenteria",
      "gestione officina e montaggio",
    ],
    intro2:
      "Nella carpenteria il tempo è il tuo peggior nemico: tra il preventivo e la consegna passano mesi, e in quei mesi il costo dell'acciaio si muove. Se hai quotato con un prezzo e produci con un altro, il margine se ne va senza che tu abbia sbagliato nulla nella lavorazione. A questo si aggiunge la confusione tra ore di officina e ore di montaggio, due mondi con costi diversi che spesso finiscono in un unico calderone.",
    approfondimento: {
      title: "Officina e montaggio non hanno lo stesso margine",
      body: [
        "Un'ora in officina e un'ora di montaggio in cantiere costano — e rendono — in modo diverso: attrezzature, trasferte, sicurezza, produttività cambiano. Se le tratti allo stesso modo, quoti male entrambe. Il controllo di gestione separa le fasi e ti dà il costo reale di ciascuna, così sai se stai guadagnando in produzione o perdendo sul montaggio, e quoti ogni fase al prezzo giusto.",
        "Poi c'è la materia prima. Su commesse accettate mesi prima, un rincaro dell'acciaio non ribaltato può trasformare un buon preventivo in una perdita. Monitorando lo scostamento tra preventivo e consuntivo vedi in tempo quando una commessa sta erodendo margine per il prezzo del materiale, e puoi correre ai ripari — su questa e sulle prossime quotazioni.",
      ],
    },
    problemi: [
      "Costo dell'acciaio che oscilla e non viene ribaltato sul preventivo.",
      "Ore di officina e ore di montaggio confuse, senza costo reale per fase.",
      "Preventivi lunghi accettati mesi prima, quando i costi erano diversi.",
      "Sfrido e lavorazioni extra non conteggiati nel margine.",
      "Trasporti e montaggi in cantiere sottostimati rispetto all'officina.",
    ],
    soluzione:
      "Separiamo i costi di officina, montaggio e materia prima e ti diamo il margine reale per commessa, così assorbi i rincari e quoti con un margine che regge dal preventivo alla consegna.",
    benefici: [
      { t: "Costo materia prima aggiornato", d: "L'oscillazione dell'acciaio ribaltata sui preventivi." },
      { t: "Officina vs montaggio", d: "Ore e costi separati per fase, margine reale per lavorazione." },
      { t: "Preventivi che reggono", d: "Quotazioni con margine obiettivo anche su commesse lunghe." },
      { t: "Sfrido sotto controllo", d: "Scarti e lavorazioni extra conteggiati, non «regalati»." },
    ],
    indicatori: [
      { nome: "Margine per commessa", desc: "L'utile reale della carpenteria, materia prima e lavorazioni incluse." },
      { nome: "Costo materia prima vs preventivo", desc: "Lo scostamento del prezzo acciaio rispetto a quello su cui hai quotato." },
      { nome: "Costo ora officina / montaggio", desc: "Il costo reale separato delle due fasi, per quotarle al prezzo giusto." },
      { nome: "Incidenza sfrido", desc: "Quanto pesano scarti e rilavorazioni sul margine della commessa." },
    ],
    monitoraggio: [
      "Il margine delle commesse in produzione.",
      "Lo scostamento del prezzo acciaio rispetto al preventivo.",
      "Le ore di officina e di montaggio per commessa.",
      "L'incidenza dello sfrido e delle lavorazioni extra.",
    ],
    trend: [24, 22, 30, 38, 40, 50, 56, 64],
    esempio: {
      before: "Preventivi accettati mesi prima, rincari acciaio non ribaltati, montaggio sottostimato.",
      after: "Costi per fase e materia prima aggiornata: margine di commessa che regge dal preventivo alla consegna.",
      metric: "0",
      metricLabel: "commesse in perdita",
    },
    faq: [
      {
        q: "Come proteggo il margine dai rincari dell'acciaio?",
        a: "Aggiornando il costo della materia prima nel preventivo e monitorando lo scostamento tra preventivo e consuntivo. Il controllo di gestione ti avvisa quando una commessa sta erodendo margine per un rincaro non ribaltato.",
      },
      {
        q: "Come separo i costi di officina e di montaggio?",
        a: "Imputando le ore alle rispettive fasi con il loro costo orario reale. Così sai se guadagni di più in officina o sul montaggio e quoti ogni fase al prezzo giusto.",
      },
      {
        q: "Funziona con commesse lunghe e preventivi anticipati?",
        a: "Sì: il metodo confronta costantemente preventivo e consuntivo, così anche su commesse accettate mesi prima vedi in tempo se il margine sta tenendo.",
      },
      {
        q: "Come conteggio lo sfrido nel margine?",
        a: "Misurando l'incidenza reale di scarti e rilavorazioni sulla commessa. Portarlo alla luce ti permette di quotarlo correttamente e, spesso, di ridurlo intervenendo sui processi di taglio e lavorazione.",
      },
      {
        q: "Il metodo serve anche a chi lavora molto su commessa pubblica?",
        a: "Sì: sulle gare il prezzo è fissato e il margine si difende solo controllando i costi. Sapere il costo reale per fase e per materia prima è ciò che distingue una commessa pubblica redditizia da una in perdita.",
      },
    ],
  },
  {
    slug: "movimento-terra",
    navLabel: "Movimento terra e scavi",
    nome: "imprese di movimento terra e scavi",
    nomeBreve: "Movimento terra",
    h1: "Controllo di gestione per imprese di movimento terra e scavi",
    metaTitle: "Controllo di gestione movimento terra",
    metaDescription:
      "Controllo di gestione per imprese di movimento terra: costo orario reale dei mezzi, noli, carburante e margine per commessa. Sai quanto rende ogni macchina.",
    heroIntro:
      "Nel movimento terra il margine si gioca sui mezzi: costo orario, carburante, noli, fermi macchina. Se non sai quanto ti costa davvero un'ora di escavatore, non sai se una commessa ti fa guadagnare. Il metodo Numeri in Edilizia te lo fa vedere.",
    keywords: [
      "controllo di gestione movimento terra",
      "costo orario mezzi movimento terra",
      "margine commessa scavi",
      "gestione noli e carburante cantiere",
    ],
    intro2:
      "Chi fa movimento terra ha il capitale immobilizzato nei mezzi: escavatori, pale, camion valgono centinaia di migliaia di euro e ogni ora in cui non lavorano è un costo. Il problema è che il costo orario reale di una macchina — ammortamento, manutenzione, carburante, operatore — quasi nessuno lo conosce con precisione. E senza quel numero, ogni preventivo a corpo o a misura è una scommessa.",
    approfondimento: {
      title: "Tutto parte dal costo orario reale del mezzo",
      body: [
        "Il costo orario di un escavatore non è il canone di leasing diviso le ore. È molto di più: ammortamento, manutenzione ordinaria e straordinaria, assicurazione, bollo, carburante e costo dell'operatore, tutto diviso per le ore realmente lavorate — non per quelle teoriche. Sottovalutare questo numero è l'errore più comune del settore, ed è quello che fa accettare commesse che sembrano buone e si rivelano in perdita.",
        "Una volta che hai il costo orario reale di ogni macchina, tutto il resto viene di conseguenza: preventivi difendibili, capacità di dire no ai lavori che non tengono, margine per commessa calcolato sul serio. Aggiungi l'imputazione di carburante e noli al cantiere giusto e smetti di «spalmare» i costi a caso: ogni scavo ti dice, numeri alla mano, quanto ti ha fatto guadagnare.",
      ],
    },
    problemi: [
      "Costo orario reale dei mezzi sconosciuto: ammortamento, manutenzione, carburante non calcolati.",
      "Noli a caldo e a freddo che sfuggono al conto della commessa.",
      "Fermi macchina e trasferimenti che erodono margine senza essere visti.",
      "Preventivi a corpo o a misura senza il costo reale di macchina e uomo.",
      "Carburante che pesa ma non viene imputato al cantiere giusto.",
    ],
    soluzione:
      "Calcoliamo il costo orario reale di ogni mezzo (ammortamento, manutenzione, carburante, operatore) e ti diamo il margine per commessa. Sai quanto rende ogni macchina e quali lavori accettare.",
    benefici: [
      { t: "Costo orario reale dei mezzi", d: "Ammortamento, manutenzione, carburante e operatore in un unico numero." },
      { t: "Noli sotto controllo", d: "A caldo e a freddo imputati alla commessa che li usa." },
      { t: "Margine per commessa", d: "Sai se uno scavo a corpo o a misura ti fa davvero guadagnare." },
      { t: "Carburante imputato", d: "Il costo che pesa di più finisce sul cantiere giusto." },
    ],
    indicatori: [
      { nome: "Costo orario reale del mezzo", desc: "Ammortamento, manutenzione, carburante e operatore per ora effettiva di lavoro." },
      { nome: "Margine per commessa", desc: "L'utile reale di ogni scavo, mezzi e uomo inclusi." },
      { nome: "Ore lavorate vs fermi", desc: "Quanto tempo le macchine producono davvero rispetto a fermi e trasferimenti." },
      { nome: "Incidenza carburante", desc: "Quanto pesa il carburante sulla commessa, imputato al cantiere giusto." },
    ],
    monitoraggio: [
      "Il costo orario reale aggiornato di ogni mezzo.",
      "Il margine delle commesse di scavo in corso.",
      "Le ore lavorate rispetto ai fermi macchina.",
      "Carburante e noli imputati per cantiere.",
    ],
    trend: [20, 24, 22, 30, 38, 44, 52, 60],
    esempio: {
      before: "Costo orario dei mezzi «a sensazione», carburante e noli non imputati.",
      after: "Costo orario reale per macchina e margine per commessa: preventivi difendibili e lavori giusti da accettare.",
      metric: "€/h",
      metricLabel: "costo reale mezzo",
    },
    faq: [
      {
        q: "Come calcolo il costo orario reale di un mezzo?",
        a: "Sommando ammortamento, manutenzione, assicurazione, carburante e costo dell'operatore, diviso per le ore effettive di lavoro. Il controllo di gestione ti dà questo numero per ogni macchina: è la base per preventivi che reggono.",
      },
      {
        q: "Come imputo carburante e noli alla commessa giusta?",
        a: "Collegando ogni consumo e ogni nolo al cantiere che lo genera. Così il margine della commessa è quello reale e smetti di «spalmare» costi a caso.",
      },
      {
        q: "Vale per preventivi a corpo e a misura?",
        a: "Sì: in entrambi i casi ti serve il costo reale di macchina e uomo per sapere se il prezzo tiene. Il metodo confronta il preventivo con il consuntivo di cantiere.",
      },
      {
        q: "Come tengo conto dei fermi macchina?",
        a: "Misurando le ore realmente lavorate rispetto a quelle disponibili: i fermi e i trasferimenti alzano il costo orario reale. Vederli ti permette di ridurli e di quotare tenendo conto della produttività vera.",
      },
      {
        q: "Conviene comprare o noleggiare un mezzo in più?",
        a: "È una decisione che si prende sui numeri: conoscendo il costo orario reale e le ore di utilizzo previste, il controllo di gestione ti dice se un mezzo di proprietà si ripaga o se conviene il nolo. Niente più scelte a intuito su investimenti da centinaia di migliaia di euro.",
      },
    ],
  },
];

export function getSettore(slug: string) {
  return settori.find((s) => s.slug === slug);
}
