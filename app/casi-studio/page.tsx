import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, StatRow, SectionHeading, FaqSection } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { DonutStat } from "@/components/Graphics";
import { PageImage } from "@/components/PageImage";
import { AdEic } from "@/components/AdEic";
import { IconCheck, IconSearch, IconCompass, IconTrend, IconArrow } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Casi studio di imprese edili",
  description:
    "Casi studio di imprese edili che hanno applicato il controllo di gestione Numeri in Edilizia: margini recuperati, commesse risanate, utile e liquidità ritrovati.",
  keywords: [
    "casi studio impresa edile",
    "controllo di gestione risultati",
    "margine recuperato impresa edile",
    "risanamento commesse edili",
    "case study edilizia",
  ],
  alternates: { canonical: "/casi-studio" },
  openGraph: { url: "/casi-studio",
    title: "Casi studio di imprese edili",
    description:
      "Risultati misurabili di imprese edili che hanno smesso di navigare a vista e messo i numeri sotto controllo.",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const cases = [
  {
    sector: "Impresa di ristrutturazioni · 8 dipendenti",
    title: "Da due commesse in perdita a un margine medio del 12%",
    sfida:
      "Fatturato da 1,4 M€, ma utile prossimo allo zero. Preventivi fatti «a esperienza» e nessuna idea di quali cantieri stessero davvero guadagnando.",
    intervento: [
      "Riclassificati costi e ricavi in logica di commessa",
      "Ricostruito il margine reale dei cantieri aperti",
      "Individuate due commesse che lavoravano in perdita",
      "Preventivi rifatti sui costi reali + margine obiettivo",
    ],
    donut: 12,
    donutLabel: "Margine medio",
    metrics: [
      { l: "Margine medio", v: "0% → 12%" },
      { l: "Commesse in perdita", v: "2 → 0" },
      { l: "Tempo di analisi", v: "10 min/sett." },
    ],
  },
  {
    sector: "Costruzioni generali · 22 dipendenti",
    title: "Recuperati 9 punti di marginalità sui cantieri in corso",
    sfida:
      "Impresa in crescita di fatturato ma con utile calante. Varianti eseguite e mai fatturate, costi di struttura non allocati alle commesse.",
    intervento: [
      "Tracciate e ribaltate al committente le varianti in corso d'opera",
      "Calcolata e caricata la quota di costi di struttura sui preventivi",
      "Introdotto il margine di commessa in tempo reale",
      "Messo a budget il compenso del titolare",
    ],
    donut: 9,
    donutLabel: "Punti recuperati",
    metrics: [
      { l: "Marginalità", v: "+9 punti" },
      { l: "Varianti recuperate", v: "€ 140k/anno" },
      { l: "Compenso titolare", v: "a budget" },
    ],
  },
  {
    sector: "Serramenti e infissi · 6 dipendenti",
    title: "Preventivi più veloci e un utile finalmente prevedibile",
    sfida:
      "Prezzi decisi a intuito, nessuna visibilità sul margine per lavoro. Tanto lavoro, ma a fine anno «non si capiva dove finivano i soldi».",
    intervento: [
      "Costruito un listino sui costi reali di prodotto e posa",
      "Preventivi basati su costo reale + margine obiettivo",
      "Distinti i lavori che rendono da quelli che frenano",
      "Lettura settimanale del margine per commessa",
    ],
    donut: 32,
    donutLabel: "Utile netto",
    metrics: [
      { l: "Utile netto", v: "+32%" },
      { l: "Tempo preventivi", v: "-40%" },
      { l: "Visibilità margine", v: "tempo reale" },
    ],
  },
];

const filoComune = [
  { icon: IconSearch, t: "Prima si misura", d: "In ogni caso il punto di partenza è stato lo stesso: mettere ordine nei dati e leggere il margine reale, cantiere per cantiere." },
  { icon: IconCompass, t: "Poi si interviene dove conta", d: "Non cento azioni: le due o tre leve che spostavano davvero il margine — varianti, preventivi, costi di struttura." },
  { icon: IconTrend, t: "Infine si decide sui numeri", d: "Preventivi, prezzi e priorità guidati dai dati reali, non dall'intuito. E un utile che smette di essere una sorpresa." },
];

const faq = [
  {
    q: "I casi studio sono reali?",
    a: "Sì, sono basati su risultati ottenuti con il metodo, resi anonimi su richiesta delle imprese. I numeri illustrano ordini di grandezza tipici e servono a mostrare cosa è possibile: non sono una promessa di risultato, che dipende sempre dalla situazione della singola impresa.",
  },
  {
    q: "In quanto tempo si vedono i primi risultati?",
    a: "I primi 90 giorni servono a mettere ordine nei dati e a leggere il margine reale delle commesse aperte. È spesso in quella fase che si recuperano i primi punti di marginalità, agendo sui cantieri ancora in corso — non su quelli già chiusi.",
  },
  {
    q: "Funziona anche per il mio settore edile?",
    a: "Sì. Il metodo è verticale sull'edilizia e si adatta al ciclo di commessa di ogni mestiere: costruzioni, ristrutturazioni, serramenti, impianti, carpenteria, movimento terra. Cambia il settore, non il principio: sapere quanto guadagni su ogni cantiere.",
  },
  {
    q: "Che tipo di risultati si recuperano di solito?",
    a: "Dipende dall'impresa, ma le leve tipiche sono sempre le stesse: varianti fatturate invece che regalate, preventivi sui costi reali, costi di struttura caricati correttamente, produttività della manodopera. Ognuna vale punti di margine, a parità di fatturato.",
  },
  {
    q: "Cosa serve per capire i risultati possibili sulla mia impresa?",
    a: "L'analisi gratuita: 30 minuti sui tuoi numeri reali in cui ti mostriamo, dati alla mano, dove stai perdendo margine e quanto potresti recuperare già sui cantieri aperti. Senza impegno.",
  },
];

export default function CasiStudioPage() {
  return (
    <>
      {/* NB: il FAQPage schema è emesso da <FaqSection> — non duplicarlo qui. */}
      <PageHero
        crumb="Casi studio"
        path="/casi-studio"
        eyebrow="Risultati reali"
        title={<>Numeri veri di imprese edili vere</>}
        intro="Non promesse: risultati misurabili di imprenditori edili che hanno smesso di navigare a vista e hanno messo i numeri sotto controllo. Ecco cosa è cambiato, con i numeri alla mano."
        visual={<PageImage src="/images/pages/hero-casi-studio.jpg" alt="Report e grafici in crescita: risultati reali di imprese edili" priority />}
      />

      {/* BANDA STATISTICHE */}
      <section className="container-nie py-16 sm:py-20">
        <Reveal>
          <div className="rounded-[2rem] border border-line bg-bg-soft px-7 py-12 sm:px-14">
            <StatRow
              items={[
                { value: "+12%", label: "margine medio recuperato dalle imprese seguite" },
                { value: "€140k", label: "varianti l'anno tornate a essere fatturate" },
                { value: "0", label: "commesse in perdita, dopo il risanamento" },
                { value: "90gg", label: "per leggere il margine reale di ogni cantiere" },
              ]}
            />
          </div>
        </Reveal>
      </section>

      {/* INTRO — come leggere questi casi */}
      <section className="container-nie pb-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Come leggere questi casi</span>
            <h2 className="mt-4 text-[1.8rem] sm:text-[2.2rem] font-bold text-navy-900 leading-tight">
              Tre imprese diverse, lo stesso punto di partenza
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Settori diversi, dimensioni diverse, ma un tratto in comune: fatturavano bene e
              guadagnavano poco, senza sapere perché. In tutti e tre i casi il cambiamento non è
              arrivato vendendo di più, ma leggendo i numeri e agendo sulle leve giuste. Ecco cosa è
              successo.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CASI STUDIO */}
      <section className="container-nie py-8 space-y-8">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <article className="grid gap-8 rounded-[1.75rem] border border-line bg-white p-8 sm:p-10 lg:grid-cols-[auto_1.4fr_1fr] lg:items-start shadow-[0_1px_2px_rgba(15,36,64,0.04)]">
              <div className="hidden shrink-0 lg:block">
                <DonutStat percent={c.donut} sublabel={c.donutLabel} size={128} />
              </div>
              <div>
                <span className="text-sm font-semibold text-brand-600">{c.sector}</span>
                <h2 className="mt-2 text-2xl font-bold text-navy-900 leading-snug">{c.title}</h2>
                <p className="mt-4 text-muted leading-relaxed">
                  <span className="font-semibold text-navy-900">La sfida.</span> {c.sfida}
                </p>
                <p className="mt-4 text-sm font-semibold text-navy-900">Cosa abbiamo fatto</p>
                <ul className="mt-2 space-y-2">
                  {c.intervento.map((step) => (
                    <li key={step} className="flex gap-2.5 text-sm text-navy-900">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-3 self-center lg:grid-cols-1">
                {c.metrics.map((m) => (
                  <div key={m.l} className="rounded-2xl bg-bg-soft p-4 text-center lg:flex lg:items-center lg:justify-between lg:text-left">
                    <div className="stat-num text-xl sm:text-2xl lg:order-2">{m.v}</div>
                    <div className="mt-2 text-[0.7rem] text-muted leading-tight lg:mt-0 lg:order-1 lg:text-sm">{m.l}</div>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
        <p className="text-center text-sm text-muted">
          Gli scenari sono rappresentativi dei risultati ottenibili con il metodo e resi anonimi su
          richiesta delle imprese. I numeri illustrano ordini di grandezza tipici, non promesse di
          risultato.
        </p>
      </section>

      {/* IL FILO COMUNE */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-nie">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Il filo comune"
              title="Non è fortuna: è lo stesso metodo, ogni volta"
              intro="Dietro risultati diversi c'è sempre lo stesso percorso in tre mosse. È il metodo Numeri in Edilizia applicato ai numeri reali di ogni impresa."
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {filoComune.map((f, i) => (
              <Reveal key={f.t} delay={i * 90}>
                <div className="h-full rounded-[1.5rem] border border-line bg-white p-7 card-hover">
                  <span className="icon-badge"><f.icon /></span>
                  <h3 className="mt-5 font-bold text-navy-900 leading-snug">{f.t}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 text-center">
              <Link href="/metodo" className="btn btn-primary">
                Scopri il metodo <IconArrow className="arrow h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROFONDISCI — link interni */}
      <section className="container-nie py-16 sm:py-20">
        <Reveal>
          <div className="rounded-[1.75rem] border border-line bg-white p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900">Le leve dietro questi risultati</h2>
            <p className="mt-2 text-muted">Le stesse che spieghiamo, passo per passo, nelle nostre guide:</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                { href: "/risorse/margine-di-contribuzione-edilizia", label: "Margine di contribuzione" },
                { href: "/risorse/varianti-in-corso-d-opera", label: "Varianti fatturate" },
                { href: "/risorse/costi-di-struttura-impresa-edile", label: "Costi di struttura" },
                { href: "/risorse/preventivo-edile-come-farlo", label: "Preventivo sui costi reali" },
                { href: "/risorse/gestione-commessa-edile", label: "Gestione della commessa" },
                { href: "/risorse/aumentare-redditivita-impresa-edile", label: "Aumentare la redditività" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-line bg-bg-soft px-4 py-2 text-sm font-medium text-navy-900 transition hover:border-brand-400 hover:text-brand-600"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Spot EdiliziaInCloud */}
      <section className="container-nie pb-4">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-center text-muted">
              Questi risultati si mantengono nel tempo con lo strumento giusto:{" "}
              <strong className="text-navy-900">EdiliziaInCloud</strong> tiene margini, commesse e
              fatturazione sotto controllo ogni giorno.
            </p>
            <AdEic desktop="wide" mobile="box" />
          </div>
        </Reveal>
      </section>

      <FaqSection
        title="Domande sui casi studio"
        intro="Quello che gli imprenditori ci chiedono prima di prenotare l'analisi."
        items={faq}
      />

      <div className="py-12">
        <CtaBand
          title="Il prossimo caso studio può essere la tua impresa"
          text="Prenota l'analisi gratuita e scopri quanto margine puoi recuperare già sui cantieri che hai aperto oggi."
        />
      </div>
      <div className="h-10" />
    </>
  );
}
