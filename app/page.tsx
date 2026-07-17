import Link from "next/link";
import { site } from "@/lib/site";
import { SectionHeading, StatRow, CtaBand, FaqSection, Pill, TrustBar, ProcessSteps } from "@/components/ui";
import { JsonLd, serviceSchema } from "@/components/JsonLd";
import { DashboardMock } from "@/components/DashboardMock";
import { DonutStat, AreaTrend, CompareBars } from "@/components/Graphics";
import { EicLogo } from "@/components/EicLogo";
import { Reveal } from "@/components/Reveal";
import { settori } from "@/lib/settori";
import {
  IconArrow, IconSearch, IconCompass, IconTrend, IconCheck,
  IconClock, IconShield, IconWallet, IconBuilding, IconExternal,
} from "@/components/Icons";

const faq = [
  {
    q: "Cos'è il controllo di gestione per un'impresa edile?",
    a: "È il sistema che ti fa sapere, in ogni momento, quanto guadagni davvero su ogni commessa. Misura ricavi, costi diretti di cantiere, costi di struttura e margine reale, così decidi sui numeri e non a sensazione.",
  },
  {
    q: "Perché la mia impresa fattura tanto ma resta poco?",
    a: "Quasi sempre perché il margine si perde in cantiere: preventivi fatti a intuito, varianti non ribaltate al cliente, costi di manodopera e fermi non tracciati. Senza controllo di gestione questi buchi restano invisibili fino al bilancio.",
  },
  {
    q: "Devo essere bravo con i numeri o serve un commercialista?",
    a: "No. Il metodo Numeri in Edilizia è pensato per l'imprenditore edile, non per il ragioniere. Ti diamo pochi indicatori chiari da leggere in 10 minuti. Il commercialista fa il bilancio a consuntivo; noi ti facciamo governare i margini prima.",
  },
  {
    q: "Quanto tempo serve per vedere risultati?",
    a: "I primi 90 giorni servono a mettere ordine nei dati e a leggere il margine per commessa. Da lì gli imprenditori che seguono il metodo iniziano a correggere i preventivi e a recuperare punti di marginalità già sui cantieri in corso.",
  },
  {
    q: "L'analisi gratuita è davvero senza impegno?",
    a: "Sì. Sono 30 minuti in cui guardiamo i tuoi numeri e ti diciamo dove stai perdendo margine. Se poi vorrai lavorare con noi te lo proporremo, ma la chiamata è di valore anche se decidi di fare da solo.",
  },
];

const pillars = [
  { icon: IconSearch, n: "01", t: "Leggi i tuoi numeri", d: "Mettiamo ordine: ricavi, costi diretti di cantiere, costi di struttura. Bastano pochi indicatori chiari, non un gestionale da ingegnere." },
  { icon: IconCompass, n: "02", t: "Governa il margine", d: "Analisi del margine per commessa: sai in tempo reale quali cantieri ti fanno guadagnare e dove intervenire prima che sia tardi." },
  { icon: IconTrend, n: "03", t: "Decidi sui dati", d: "Preventivi che difendono il margine, varianti che paghi al cliente giusto, e un utile che finalmente arriva anche nel tuo conto." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Controllo di gestione per imprese edili",
          site.description,
          site.domain,
        )}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 h-[560px] bg-gradient-to-b from-bg-softer to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 bg-grid h-[560px]" />
        <div className="container-nie relative pt-14 pb-10 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                Controllo di gestione per imprese edili
              </span>
              <h1 className="mt-5 text-[2.6rem] sm:text-[3.6rem] font-extrabold leading-[1.02]">
                Fatturi tanto.
                <br />
                Ma a fine anno,
                <br />
                <span className="text-gradient">quanto ti resta davvero?</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
                L'80% degli imprenditori edili lavora 12 ore al giorno e guadagna meno di un
                dipendente. Non è colpa del mercato: è che nessuno ti ha insegnato a leggere i numeri
                della tua impresa. Noi sì.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/contatti" className="btn btn-primary text-lg px-7 py-4">
                  {site.cta.primaryLabel}
                  <IconArrow className="arrow h-5 w-5" />
                </Link>
                <Link href="/metodo" className="btn btn-ghost text-lg px-7 py-4">
                  Come funziona il metodo
                </Link>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2"><IconClock className="h-4 w-4 text-brand-600" /> 30 minuti</span>
                <span className="inline-flex items-center gap-2"><IconShield className="h-4 w-4 text-brand-600" /> Nessun impegno</span>
                <span className="inline-flex items-center gap-2"><IconBuilding className="h-4 w-4 text-brand-600" /> Sui tuoi numeri reali</span>
              </div>
            </div>

            <div className="reveal lg:pl-6" style={{ animationDelay: "0.1s" }}>
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SOCIAL PROOF STATS */}
      <section className="container-nie py-16 sm:py-24">
        <Reveal>
          <div className="rounded-[2rem] border border-line bg-bg-soft px-7 py-12 sm:px-14">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted">
              I numeri del problema che risolviamo
            </p>
            <div className="mt-10">
              <StatRow
                items={[
                  { value: "80%", label: "delle imprese edili fattura ma non genera utile sufficiente" },
                  { value: "-9%", label: "margine medio perso in cantiere per preventivi a intuito" },
                  { value: "3", label: "indicatori bastano per governare la marginalità" },
                  { value: "90gg", label: "per rimettere ordine nei numeri e leggere il margine reale" },
                ]}
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROBLEM / AGITATE */}
      <section className="container-nie py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Il vero problema"
              title={<>Il cantiere gira. Il conto in banca no.</>}
              intro="Non ti manca il lavoro. Ti manca il controllo. E senza controllo, ogni commessa è una scommessa."
            />
            <p className="mt-6 text-muted leading-relaxed">
              Fai preventivi sull'esperienza, ribassi per non perdere la gara, aggiungi varianti che
              non riesci a farti pagare. A fine anno il commercialista ti dà un numero — e quasi
              sempre è più basso di quello che ti aspettavi. Il problema non sono i tuoi operai o i
              tuoi clienti: è che stai guidando un'impresa da milioni di euro guardando lo specchietto
              retrovisore.
            </p>
          </Reveal>
          <ul className="space-y-4">
            {[
              "Non sai quale commessa ti fa guadagnare e quale ti fa perdere.",
              "Scopri i costi solo a lavori finiti, quando non puoi più intervenire.",
              "Fai preventivi «a sensazione» e speri che il margine ci sia.",
              "Le varianti in corso d'opera te le paghi tu, non il committente.",
              "Il fatturato cresce, ma l'utile e il tuo stipendio no.",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 60}>
                <li className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(15,36,64,0.04)]">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-50 text-red-500 font-bold">✕</span>
                  <span className="text-navy-900 font-medium leading-snug">{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* THE METHOD — 3 PILLARS */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-nie">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="La soluzione"
              title={<>Il metodo Numeri in Edilizia</>}
              intro="Tre pilastri per trasformare la tua impresa da «tanto fatturato, poco utile» a un'azienda che sa esattamente quanto guadagna, su ogni cantiere."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="group h-full rounded-[1.5rem] bg-white p-8 border border-line card-hover">
                  <div className="flex items-center justify-between">
                    <span className="icon-badge"><p.icon /></span>
                    <span className="stat-num text-3xl opacity-30">{p.n}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy-900">{p.t}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/metodo" className="btn btn-dark">
              Scopri il metodo in dettaglio
              <IconArrow className="arrow h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SETTORI */}
      <section className="container-nie py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Per ogni impresa edile"
            title="Un metodo calibrato sul tuo settore"
            intro="Costruzioni, ristrutturazioni, serramenti, impianti, carpenteria, movimento terra: ogni impresa ha i suoi numeri critici. Scegli il tuo."
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {settori.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60} className="h-full">
              <Link
                href={`/settori/${s.slug}`}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 card-hover"
              >
                <div>
                  <h3 className="font-bold text-navy-900 group-hover:text-brand-700 transition-colors">{s.navLabel}</h3>
                  <p className="mt-1 text-sm text-muted">Controllo di gestione dedicato</p>
                </div>
                <IconArrow className="arrow h-5 w-5 shrink-0 text-brand-600" />
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/settori" className="btn btn-ghost">
            Tutti i settori <IconArrow className="arrow h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PARTNER EDILIZIAINCLOUD STRIP */}
      <section className="container-nie py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-navy-900 p-8 sm:p-10">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-brand-300">Lo strumento del metodo</p>
                <div className="mt-3"><EicLogo variant="onDark" iconSize={40} /></div>
                <p className="mt-4 max-w-xl text-brand-100 leading-relaxed">
                  Il gestionale per imprese edili che tiene sotto controllo commesse, margini, DDT e
                  fatturazione — la casa operativa del metodo Numeri in Edilizia.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2.5">
                <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Vai su ediliziaincloud.com <IconExternal className="h-4 w-4" />
                </a>
                <Link href="/edilizia-in-cloud" className="text-center text-sm font-semibold text-brand-300 hover:text-white inline-flex items-center justify-center gap-1.5">
                  Scopri di più <IconArrow className="arrow h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROCESS — come lavoriamo insieme */}
      <section className="container-nie py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Come lavoriamo insieme"
            title="Dal primo sguardo ai numeri al margine sotto controllo"
            intro="Un percorso lineare, senza gergo da commercialista. Sai sempre a che punto sei e cosa succede dopo."
            className="mb-14"
          />
        </Reveal>
        <ProcessSteps
          steps={[
            { n: "1", title: "Analisi gratuita", text: "30 minuti sui tuoi numeri: capiamo dove stai perdendo margine e se possiamo aiutarti davvero." },
            { n: "2", title: "Setup del metodo", text: "Mettiamo in ordine i dati che già produci e costruiamo i tuoi indicatori chiave di cantiere." },
            { n: "3", title: "Governo & crescita", text: "Leggi il margine commessa per commessa, correggi i preventivi e fai crescere l'utile reale." },
          ]}
        />
      </section>

      {/* BEFORE / AFTER */}
      <section className="container-nie py-16 sm:py-20">
        <Reveal>
          <SectionHeading align="center" eyebrow="Cosa cambia" title="Prima e dopo i numeri sotto controllo" className="mb-14" />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[1.5rem] border border-line bg-white p-8">
              <Pill>Prima</Pill>
              <ul className="mt-6 space-y-4">
                {[
                  "«Credo che su questo cantiere ci guadagniamo.»",
                  "Preventivo copiato dall'ultimo lavoro simile.",
                  "Utile scoperto a marzo dell'anno dopo.",
                  "Ti paghi per ultimo, quando resta qualcosa.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-muted">
                    <span className="text-red-400 shrink-0">—</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-[1.5rem] border-2 border-brand-300 bg-brand-100/40 p-8">
              <Pill>Dopo</Pill>
              <ul className="mt-6 space-y-4">
                {[
                  "«Su questo cantiere ho il 14% di margine, dato alla mano.»",
                  "Preventivo costruito sui costi reali e sul margine obiettivo.",
                  "Margine monitorato mese per mese, cantiere per cantiere.",
                  "Il tuo compenso è una voce di budget, non un avanzo.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-navy-900 font-medium">
                    <IconCheck className="h-5 w-5 shrink-0 text-brand-600" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CRUSCOTTO SHOWCASE */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-nie">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="I numeri che vedi davvero"
              title="Il tuo cruscotto, non un mistero"
              intro="Margine, utile e andamento di ogni commessa in grafici che leggi in un colpo d'occhio — non fogli Excel da decifrare."
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-[1.5rem] bg-white p-8 border border-line text-center card-hover">
                <p className="text-sm font-semibold text-brand-600">Margine di commessa</p>
                <div className="mt-6"><DonutStat percent={14} label="Cantiere Via Roma" sublabel="obiettivo raggiunto" /></div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-[1.5rem] bg-white p-8 border border-line card-hover">
                <p className="text-sm font-semibold text-brand-600">Utile nel tempo</p>
                <p className="mt-1 font-serif text-3xl font-semibold text-navy-900">+32%</p>
                <div className="mt-6"><AreaTrend labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full rounded-[1.5rem] bg-white p-8 border border-line card-hover">
                <p className="text-sm font-semibold text-brand-600">Margine: prima e dopo</p>
                <p className="mt-1 text-sm text-muted">Con i numeri sotto controllo</p>
                <div className="mt-8"><CompareBars before={3} after={14} /></div>
              </div>
            </Reveal>
          </div>
          <p className="mt-10 text-center text-muted">
            Grafici come questi li hai ogni giorno con{" "}
            <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600 hover:underline inline-flex items-center gap-1">
              EdiliziaInCloud <IconExternal className="h-3.5 w-3.5" />
            </a>
          </p>
        </div>
      </section>

      {/* AUTHORITY / PERCHÉ NOI */}
      <section className="container-nie py-16 sm:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
              <div>
                <span className="eyebrow">Perché Numeri in Edilizia</span>
                <h2 className="mt-4 text-[1.9rem] sm:text-[2.3rem] font-bold text-navy-900 leading-tight">
                  Parliamo la lingua del cantiere, non quella dei ragionieri
                </h2>
                <p className="mt-5 text-muted leading-relaxed">
                  Il controllo di gestione, spiegato bene, non è teoria da manuale. È lo strumento che
                  fa la differenza tra un'impresa che fattura e una che guadagna. Noi lo traduciamo nel
                  linguaggio di chi in cantiere ci lavora davvero.
                </p>
                <Link href="/chi-sono" className="btn btn-ghost mt-7">
                  Chi siamo <IconArrow className="arrow h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: IconBuilding, t: "100% edilizia", d: "Solo imprese di costruzioni, non consulenza generica." },
                  { icon: IconSearch, t: "Pochi numeri, chiari", d: "Meglio 3 indicatori usati che 100 report ignorati." },
                  { icon: IconCompass, t: "Margine in tempo reale", d: "Governato in cantiere, non scoperto in bilancio." },
                  { icon: IconWallet, t: "Il tuo stipendio prima", d: "Pianificato come voce di budget, non come avanzo." },
                ].map((f) => (
                  <div key={f.t} className="rounded-2xl bg-bg-soft p-5">
                    <span className="icon-badge h-11 w-11"><f.icon className="h-5 w-5" /></span>
                    <h3 className="mt-4 font-bold text-navy-900">{f.t}</h3>
                    <p className="mt-1 text-sm text-muted leading-snug">{f.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-50" />
        <div className="container-nie relative">
          <Reveal>
            <SectionHeading
              align="center"
              tone="dark"
              eyebrow="Chi lo ha applicato"
              title="Imprenditori edili come te"
              intro="Non promesse: parole di chi ha smesso di navigare a vista e ha messo i numeri sotto controllo."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { q: "Fatturavo 2 milioni e non capivo perché non restava niente. In sei mesi ho scoperto che due commesse su cinque erano in perdita. Ora non parto senza margine.", a: "Impresa edile, 14 dipendenti · Veneto" },
              { q: "Ho smesso di fare preventivi a sensazione. Il margine adesso lo decido io prima, non me lo ritrovo (o non me lo ritrovo) dopo.", a: "Ristrutturazioni, 8 dipendenti · Lombardia" },
              { q: "La cosa più utile è che finalmente mi pago uno stipendio vero. Prima ero l'ultimo della lista.", a: "Costruzioni generali · Emilia-Romagna" },
            ].map((t, i) => (
              <Reveal key={t.a} delay={i * 100}>
                <figure className="h-full rounded-[1.5rem] bg-white/[0.06] backdrop-blur border border-white/10 p-8">
                  <div className="font-serif text-5xl leading-none text-brand-300">“</div>
                  <blockquote className="mt-1 text-brand-100/90 leading-relaxed">{t.q}</blockquote>
                  <figcaption className="mt-6 text-sm text-brand-300">{t.a}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RISORSE TEASER */}
      <section className="container-nie py-20 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Risorse gratuite"
            title="Impara a leggere i tuoi numeri, da oggi"
            intro="Guide pratiche sul controllo di gestione in edilizia, nella lingua del cantiere."
          />
          <Link href="/risorse" className="btn btn-ghost shrink-0">
            Tutte le risorse <IconArrow className="arrow h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { href: "/risorse/margine-impresa-edile", cat: "Marginalità", t: "Perché la tua impresa edile fattura tanto ma guadagna poco", d: "Le 5 ragioni per cui il margine sparisce in cantiere e come recuperarlo." },
            { href: "/risorse/controllo-di-gestione-edilizia", cat: "Controllo di gestione", t: "Controllo di gestione in edilizia: la guida per iniziare", d: "Cos'è, quali indicatori servono e come partire senza software complicati." },
          ].map((a, i) => (
            <Reveal key={a.href} delay={i * 100}>
              <Link href={a.href} className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-8 card-hover">
                <span className="text-sm font-semibold text-brand-600">{a.cat}</span>
                <h3 className="mt-3 text-xl font-bold text-navy-900 group-hover:text-brand-700 transition-colors">{a.t}</h3>
                <p className="mt-3 flex-1 text-muted leading-relaxed">{a.d}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-600">
                  Leggi <IconArrow className="arrow h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ (AEO) */}
      <FaqSection items={faq} />

      {/* FINAL CTA */}
      <CtaBand />
      <div className="h-20" />
    </>
  );
}
