import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { AreaTrend, CompareBars, DonutStat } from "@/components/Graphics";
import { getArticle } from "@/lib/articles";

const article = getArticle("preventivo-edile-come-farlo")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "preventivo edile",
    "come fare un preventivo edile",
    "preventivo lavori edili",
    "margine preventivo edilizia",
    "preventivo impresa edile",
  ],
  alternates: { canonical: "/risorse/preventivo-edile-come-farlo" },
  openGraph: { title: article.title, description: article.description, type: "article", images: [article.cover ?? "/opengraph-image"] },
};

const faq = [
  {
    q: "Come si fa un preventivo edile corretto?",
    a: "Un preventivo edile corretto parte dal computo delle quantità, applica i costi reali (materiali, manodopera, mezzi, subappalti), aggiunge la quota di costi di struttura e infine il margine obiettivo deciso dall'imprenditore. Solo a quel punto si guarda il prezzo di mercato per decidere come posizionarsi.",
  },
  {
    q: "Quanto margine mettere in un preventivo edile?",
    a: "Non esiste una percentuale universale: dipende dal settore, dal rischio della commessa e dai tuoi costi di struttura. La regola è che il margine sia una decisione consapevole, non un residuo. Molte imprese ben gestite lavorano con margini obiettivo tra il 10% e il 20% sulla commessa.",
  },
  {
    q: "Come gestisco un cliente che chiede lo sconto?",
    a: "Se conosci i tuoi costi reali, sai esattamente quanto sconto puoi concedere prima di lavorare in perdita. Puoi ridurre il margine consapevolmente, togliere lavorazioni dal perimetro o proporre alternative più economiche — ma mai scontare «alla cieca».",
  },
  {
    q: "Che differenza c'è tra preventivo a corpo e a misura?",
    a: "Nel preventivo a corpo il prezzo è fisso per l'intera opera; in quello a misura si paga per quantità effettivamente eseguite. Il preventivo a corpo trasferisce più rischio sull'impresa: per questo richiede costi reali ancora più precisi e un margine che copra gli imprevisti.",
  },
  {
    q: "Ogni quanto devo aggiornare i prezzi dei preventivi?",
    a: "Ogni volta che i costi cambiano in modo significativo: materiali, manodopera, subappalti. Il modo più efficace è confrontare sistematicamente preventivo e consuntivo di ogni commessa chiusa: gli scostamenti ricorrenti ti dicono quali voci del tuo listino sono da aggiornare.",
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faq={faq}>
      <p>
        Il preventivo è il documento più importante che la tua impresa edile produce. Non è un
        adempimento commerciale: è <strong>il momento esatto in cui decidi se guadagnerai o no</strong>{" "}
        su un lavoro. Tutto quello che succede dopo — il cantiere, la fatturazione, l'incasso — può
        solo confermare o peggiorare quella decisione, mai migliorarla davvero.
      </p>
      <p>
        Eppure nella maggior parte delle imprese edili il preventivo si fa «a esperienza»: si guarda
        l'ultimo lavoro simile, si aggiusta un po', si toglie qualcosa per vincere la gara. In questa
        guida vediamo come costruire un preventivo edile nel modo giusto: <strong>dai costi reali al
        margine obiettivo</strong>, con gli errori da evitare e un processo che puoi applicare da subito.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <DonutStat percent={70} sublabel="del margine si decide qui" />
          <div>
            <p className="font-display text-lg font-bold text-navy-900">Il preventivo pesa più del cantiere</p>
            <p className="mt-2 text-muted">
              La maggior parte del margine di una commessa si decide prima di aprire il cantiere: nel
              computo, nei prezzi applicati e nel margine obiettivo. Un cantiere gestito benissimo non
              salva un preventivo sbagliato.
            </p>
          </div>
        </div>
      </figure>

      <h2>Perché il preventivo «a sensazione» ti costa caro</h2>
      <p>
        Il preventivo a sensazione ha tre difetti strutturali. Primo: <strong>eredita gli errori del
        passato</strong> — se l'ultimo lavoro simile era già sotto margine, stai copiando una perdita.
        Secondo: <strong>ignora che i costi cambiano</strong> — i materiali di sei mesi fa non costano
        come oggi, e la tua squadra nemmeno. Terzo: <strong>rende impossibile la trattativa</strong> —
        se non sai dove finiscono i costi e dove inizia il margine, ogni sconto è un salto nel buio.
      </p>
      <p>
        Il risultato lo conosci: lavori che «dovevano» rendere e a consuntivo hanno lasciato poco o
        niente. Non è sfortuna: è un metodo di quotazione che non protegge il margine. Ne parliamo
        approfonditamente anche nella guida su{" "}
        <Link href="/risorse/margine-impresa-edile">perché l'impresa edile fattura tanto ma guadagna poco</Link>.
      </p>

      <h2>L'anatomia di un preventivo edile fatto bene</h2>
      <p>Un preventivo solido è costruito a strati, dal basso verso l'alto:</p>
      <ol>
        <li><strong>Computo delle quantità</strong> — cosa va fatto, in che quantità. È la base: un errore qui si moltiplica su tutto.</li>
        <li><strong>Costi diretti</strong> — materiali ai prezzi correnti, ore di manodopera al costo reale, mezzi, noli, subappalti.</li>
        <li><strong>Quota di costi di struttura</strong> — ufficio, mezzi propri, amministrazione, il tuo tempo: ogni commessa deve contribuire a coprirli.</li>
        <li><strong>Rischio e imprevisti</strong> — una quota calibrata sul tipo di lavoro (più alta su ristrutturazioni e lavori a corpo).</li>
        <li><strong>Margine obiettivo</strong> — il guadagno che decidi tu, esplicito e non «quello che resta».</li>
      </ol>
      <p>
        Solo dopo aver costruito questi strati ha senso guardare il mercato e la concorrenza: a quel
        punto sai qual è il tuo prezzo minimo sostenibile e puoi decidere <em>consapevolmente</em> come
        posizionarti.
      </p>

      <h2>Il costo della manodopera: l'errore più comune</h2>
      <p>
        La voce più sottostimata nei preventivi edili è quasi sempre la manodopera. Il motivo è che si
        usa la paga oraria invece del <strong>costo aziendale reale</strong>: contributi, TFR,
        tredicesima, ferie, permessi, formazione, attrezzatura. E soprattutto si dimentica che le ore
        <em> produttive</em> sono meno delle ore pagate: trasferte, spostamenti tra cantieri, maltempo,
        attese. Abbiamo dedicato una guida completa al{" "}
        <Link href="/risorse/costo-orario-manodopera-edile">calcolo del costo orario della manodopera edile</Link>:
        se fai preventivi, è il primo numero da sistemare.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Preventivo a sensazione vs preventivo sui costi reali</p>
        <p className="mt-1 text-sm text-muted">Margine effettivo a consuntivo, esempio tipico su commesse comparabili.</p>
        <div className="mt-6 max-w-sm"><CompareBars before={4} after={15} /></div>
      </figure>

      <h2>I costi di struttura: il «peso invisibile»</h2>
      <p>
        Ogni impresa ha una macchina che gira anche quando i cantieri sono fermi: sede, mezzi,
        assicurazioni, amministrazione, direzione. Se il preventivo non include una quota di questi
        costi, ogni lavoro sembra redditizio ma l'azienda a fine anno non lo è. La regola pratica:
        calcola l'incidenza annua dei costi di struttura sul totale dei costi diretti e applicala a
        ogni preventivo. Trovi la classificazione completa nella{" "}
        <Link href="/risorse/costi-di-cantiere-guida">guida ai costi di cantiere</Link>.
      </p>

      <h2>Il margine obiettivo: una decisione, non un residuo</h2>
      <p>
        Qui sta la differenza culturale più grande. Nell'impresa che naviga a vista, il margine è ciò
        che <em>si spera</em> resti alla fine. Nell'impresa gestita, il margine è un <strong>numero
        deciso prima</strong>, scritto nel preventivo, difeso in trattativa e monitorato in cantiere.
      </p>
      <blockquote>
        Se il margine non lo decidi tu nel preventivo, lo decideranno il cliente, i fornitori e gli
        imprevisti. E non saranno generosi.
      </blockquote>
      <p>
        Quanto margine? Dipende dal settore e dal rischio: un lavoro a corpo con molte incognite ne
        richiede più di una fornitura standard. L'importante è che sia esplicito: solo così puoi
        decidere in trattativa quanto cederne — e quando dire di no.
      </p>

      <h2>Ribassi e gare: quando dire di no</h2>
      <p>
        Con i costi reali in mano, la gara cambia natura. Sai qual è il tuo prezzo di pareggio, quindi
        sai esattamente <strong>quanto ribasso puoi permetterti</strong>. Sotto quella soglia, vincere
        la gara significa comprarsi una perdita — e un cantiere in perdita consuma anche cassa,
        attenzione e squadre che potrebbero lavorare su commesse sane. Le imprese che conoscono i
        propri numeri vincono meno gare, ma guadagnano di più.
      </p>

      <h2>Varianti: il preventivo continua in cantiere</h2>
      <p>
        Il preventivo non finisce alla firma. Ogni modifica in corso d'opera — un imprevisto, una
        richiesta del cliente, un materiale diverso — è di fatto un <strong>nuovo piccolo
        preventivo</strong> che va quotato, approvato e fatturato. Le varianti non gestite sono il buco
        di margine più comune in edilizia: abbiamo scritto una{" "}
        <Link href="/risorse/varianti-in-corso-d-opera">guida dedicata alle varianti in corso d'opera</Link> con
        il processo completo per farsele pagare.
      </p>

      <h2>Il ciclo che migliora i preventivi: consuntivo → preventivo</h2>
      <p>
        L'arma segreta delle imprese ben gestite è il confronto sistematico tra preventivo e
        consuntivo. Ogni commessa chiusa ti dice dove hai sbagliato a quotare: quale voce è andata
        fuori, di quanto, perché. Quegli scostamenti — letti con costanza — diventano correzioni al tuo
        listino e ai tuoi prossimi preventivi. È il cuore del{" "}
        <Link href="/metodo">metodo Numeri in Edilizia</Link>: leggere i numeri, governare il margine,
        decidere sui dati.
      </p>

      <figure className="not-prose my-10 rounded-2xl border border-line bg-white p-8">
        <p className="font-display text-lg font-bold text-navy-900">Il margine migliora preventivo dopo preventivo</p>
        <p className="mt-1 text-sm text-muted">Quando ogni consuntivo corregge il listino, la marginalità sale in modo strutturale.</p>
        <div className="mt-6"><AreaTrend points={[20, 26, 25, 34, 40, 47, 55, 64]} labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
      </figure>

      <h2>Checklist: il preventivo edile in 10 punti</h2>
      <ul>
        <li>Computo delle quantità completo e verificato.</li>
        <li>Prezzi dei materiali aggiornati (non quelli di sei mesi fa).</li>
        <li>Manodopera al costo aziendale reale, su ore produttive.</li>
        <li>Mezzi, noli e subappalti quotati voce per voce.</li>
        <li>Quota di costi di struttura applicata.</li>
        <li>Riserva per rischio e imprevisti, calibrata sul tipo di lavoro.</li>
        <li>Margine obiettivo esplicito, deciso prima di guardare il mercato.</li>
        <li>Perimetro chiaro: cosa è incluso e cosa sarà variante.</li>
        <li>Prezzo minimo sostenibile calcolato prima della trattativa.</li>
        <li>Dopo la commessa: confronto preventivo/consuntivo e correzione del listino.</li>
      </ul>

      <h2>Da dove iniziare</h2>
      <p>
        Se oggi i tuoi preventivi nascono «a esperienza», il primo passo non è un software: è mettere
        in fila i costi reali della tua impresa. È esattamente quello che facciamo{" "}
        nell'<Link href="/contatti">analisi gratuita dei tuoi numeri</Link>: trenta minuti sui tuoi
        dati per capire dove i preventivi ti stanno facendo perdere margine. E per mantenerli
        aggiornati nel tempo, uno strumento come{" "}
        <a href="https://ediliziaincloud.com/" target="_blank" rel="noopener noreferrer">EdiliziaInCloud</a> collega listino, preventivi e consuntivi
        di cantiere in un unico posto.
      </p>
    </ArticleShell>
  );
}
