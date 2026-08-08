import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading, CtaBand, FaqSection, ProcessSteps } from "@/components/ui";
import { JsonLd, serviceSchema } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { AreaTrend } from "@/components/Graphics";
import { EicLogo } from "@/components/EicLogo";
import { PageImage } from "@/components/PageImage";
import { site } from "@/lib/site";
import { IconSearch, IconCompass, IconTrend, IconCheck, IconArrow, IconShield, IconWallet, IconClock, IconExternal } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Il metodo: controllo di gestione edile",
  description:
    "Leggere i numeri, governare il margine di commessa, decidere sui dati: il metodo di controllo di gestione pensato per l'imprenditore edile.",
  alternates: { canonical: "/metodo" },
  openGraph: { url: "/metodo", images: ["/opengraph-image"] },
};

const faq = [
  {
    q: "Il metodo funziona anche per imprese edili piccole?",
    a: "Sì. Il controllo di gestione serve tanto all'impresa da 5 dipendenti quanto a quella da 50. Anzi, nelle imprese piccole ogni commessa in perdita pesa di più: il metodo è calibrato sulla dimensione reale della tua azienda.",
  },
  {
    q: "Devo cambiare gestionale o software?",
    a: "No. Il metodo parte dai dati che già hai. Se poi vorrai strumenti più evoluti li introdurremo, ma prima viene il modo di leggere i numeri, non il software.",
  },
  {
    q: "Qual è la differenza con quello che fa il mio commercialista?",
    a: "Il commercialista fotografa il passato con il bilancio. Il controllo di gestione ti fa guidare il presente: margine per commessa, in tempo reale, per decidere prima che il cantiere chiuda.",
  },
];

const pillars = [
  {
    icon: IconSearch, n: "01", t: "Leggi i tuoi numeri", lead: "Prima di controllare, bisogna vedere.",
    body: "Mettiamo ordine nei dati che già produci: ricavi per commessa, costi diretti di cantiere (materiali, manodopera, mezzi, subappalti), costi di struttura. Ti diamo un quadro pulito con pochi indicatori, non un cruscotto da ingegnere gestionale. In poche settimane sai finalmente da dove arrivano — e dove se ne vanno — i tuoi soldi.",
    points: ["Riclassificazione dei costi in logica di cantiere", "Un set di indicatori leggibile in 10 minuti", "Nessun software nuovo da imparare"],
  },
  {
    icon: IconCompass, n: "02", t: "Governa il margine di commessa", lead: "Il margine non si scopre a fine lavori. Si guida.",
    body: "Analizziamo il margine cantiere per cantiere e lo confrontiamo con il preventivo. Vedi in tempo reale quali commesse guadagnano, quali erodono utile e dove intervenire mentre puoi ancora farlo: rinegoziare, ribaltare una variante, correggere la manodopera. Il margine smette di essere una sorpresa.",
    points: ["Margine reale vs preventivo, per commessa", "Alert sui cantieri che stanno perdendo", "Varianti tracciate e fatturate al committente"],
  },
  {
    icon: IconTrend, n: "03", t: "Decidi sui dati", lead: "Ogni scelta importante, sostenuta da un numero.",
    body: "Con i numeri in ordine, i preventivi nascono sul costo reale e su un margine obiettivo deciso da te. Sai quali lavori accettare e quali lasciare alla concorrenza. E soprattutto: il tuo compenso diventa una voce di budget, non l'avanzo che resta (se resta) a fine anno.",
    points: ["Preventivi che difendono la marginalità", "Budget annuale e compenso dell'imprenditore pianificati", "Decisioni sui cantieri basate sui dati, non a sensazione"],
  },
];

export default function MetodoPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Metodo di controllo di gestione per imprese edili", metadata.description as string, `${site.domain}/metodo`)} />
      <PageHero
        crumb="Il metodo"
        path="/metodo"
        eyebrow="Il metodo Numeri in Edilizia"
        title={<>Da «quanto ho fatturato?» a «quanto ho guadagnato, su ogni cantiere»</>}
        intro="Non è teoria da manuale. È un sistema in tre passi per far parlare i numeri della tua impresa e trasformarli in decisioni che aumentano il margine."
        visual={<PageImage src="/images/pages/hero-metodo.jpg" alt="Imprenditore edile che analizza i numeri della sua impresa su un tablet in cantiere" priority />}
      />

      {/* 3 PILASTRI dettagliati */}
      <section className="container-nie py-20 sm:py-28 space-y-20">
        {pillars.map((p, i) => (
          <Reveal key={p.n}>
            <div className={`grid gap-10 lg:grid-cols-2 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div>
                <div className="flex items-center gap-4">
                  <span className="icon-badge"><p.icon /></span>
                  <span className="stat-num text-5xl opacity-25">{p.n}</span>
                </div>
                <h2 className="mt-5 text-[1.9rem] sm:text-[2.3rem] font-bold text-navy-900">{p.t}</h2>
                <p className="mt-3 text-xl text-brand-600 font-display font-semibold">{p.lead}</p>
                <p className="mt-4 text-muted leading-relaxed">{p.body}</p>
              </div>
              <div>
                {p.n === "02" && (
                  <div className="mb-4 rounded-2xl border border-line bg-white p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-navy-900">Margine per commessa</p>
                      <span className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold text-brand-700">in tempo reale</span>
                    </div>
                    <div className="mt-4"><AreaTrend labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
                  </div>
                )}
                <ul className="space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(15,36,64,0.04)]">
                      <IconCheck className="h-5 w-5 shrink-0 text-brand-600" />
                      <span className="text-navy-900 font-medium">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* COSA OTTIENI */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-nie">
          <Reveal>
            <SectionHeading align="center" eyebrow="Cosa ottieni" title="Risultati concreti, non slide" className="mb-14" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: IconTrend, t: "Più margine", d: "Recuperi punti di marginalità già sui cantieri aperti." },
              { icon: IconShield, t: "Meno rischio", d: "Individui le commesse in perdita prima che pesino sull'anno." },
              { icon: IconWallet, t: "Il tuo stipendio", d: "Il compenso dell'imprenditore diventa pianificato, non un avanzo." },
              { icon: IconClock, t: "10 minuti a settimana", d: "Bastano pochi indicatori letti con costanza per decidere sui dati." },
            ].map((o, i) => (
              <Reveal key={o.t} delay={i * 90}>
                <div className="h-full rounded-[1.5rem] bg-white p-7 border border-line card-hover">
                  <span className="icon-badge"><o.icon /></span>
                  <h3 className="mt-5 font-bold text-navy-900">{o.t}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{o.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="container-nie py-20 sm:py-28">
        <Reveal>
          <SectionHeading align="center" eyebrow="Il percorso" title="Come si applica, passo per passo" className="mb-14" />
        </Reveal>
        <ProcessSteps
          steps={[
            { n: "1", title: "Fotografia iniziale", text: "Analisi gratuita dei tuoi numeri: dove stai perdendo margine, oggi." },
            { n: "2", title: "Ordine nei dati", text: "Riclassifichiamo costi e ricavi in logica di cantiere e definiamo i tuoi indicatori." },
            { n: "3", title: "Lettura del margine", text: "Margine per commessa a confronto col preventivo, con alert sui cantieri a rischio." },
            { n: "4", title: "Decisioni sui dati", text: "Preventivi, gare e varianti guidate dai numeri. E il tuo compenso a budget." },
          ]}
        />
      </section>

      {/* PER CHI È */}
      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="container-nie">
          <Reveal>
            <SectionHeading
              align="center"
              tone="dark"
              eyebrow="Per chi è"
              title="Pensato per l'imprenditore edile, non per il ragioniere"
              intro="Se guidi un'impresa di costruzioni, ristrutturazioni, serramenti o impianti e senti che il fatturato non si trasforma in utile, questo metodo è per te."
            />
          </Reveal>
          <div className="mt-10 text-center">
            <Link href="/contatti" className="btn btn-primary">
              {site.cta.primaryLabel} <IconArrow className="arrow h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CALLOUT EDILIZIAINCLOUD */}
      <section className="container-nie py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-6 rounded-[1.75rem] border-2 border-brand-300 bg-brand-100/40 p-8 sm:grid-cols-[1fr_auto] sm:items-center sm:p-10">
            <div>
              <h3 className="text-xl font-bold text-navy-900">E per applicarlo ogni giorno?</h3>
              <div className="mt-4"><EicLogo iconSize={38} /></div>
              <p className="mt-4 text-muted leading-relaxed">
                Il metodo ti dà la testa. <strong className="text-navy-900">EdiliziaInCloud</strong>{" "}
                ti dà lo strumento: il gestionale per imprese edili che tiene sotto controllo
                commesse, margini, DDT e fatturazione.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:items-end">
              <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Vai su ediliziaincloud.com <IconExternal className="h-4 w-4" />
              </a>
              <Link href="/edilizia-in-cloud" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline">
                Scopri di più <IconArrow className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <FaqSection items={faq} />
      <CtaBand />
      <div className="h-20" />
    </>
  );
}
