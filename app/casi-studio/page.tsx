import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand, StatRow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { DonutStat } from "@/components/Graphics";
import { PageImage } from "@/components/PageImage";

export const metadata: Metadata = {
  title: "Casi studio di imprese edili",
  description:
    "Risultati reali di imprese edili che hanno applicato il controllo di gestione Numeri in Edilizia: margini recuperati, commesse risanate, utile ritrovato.",
  alternates: { canonical: "/casi-studio" },
};

const cases = [
  {
    sector: "Ristrutturazioni · 8 dipendenti",
    title: "Da due commesse in perdita a un margine medio del 12%",
    before: "Fatturato 1,4 M€, utile prossimo allo zero, preventivi «a esperienza».",
    after: "Individuate 2 commesse in perdita, preventivi ricostruiti sui costi reali.",
    donut: 12, donutLabel: "Margine medio",
    metrics: [{ l: "Margine medio", v: "0% → 12%" }, { l: "Commesse in perdita", v: "2 → 0" }, { l: "Tempo di analisi", v: "10 min/sett." }],
  },
  {
    sector: "Costruzioni generali · 22 dipendenti",
    title: "Recuperati 9 punti di marginalità sui cantieri in corso",
    before: "Varianti non fatturate e costi di struttura non allocati.",
    after: "Varianti tracciate e ribaltate al committente, costi riclassificati.",
    donut: 9, donutLabel: "Punti recuperati",
    metrics: [{ l: "Marginalità", v: "+9 punti" }, { l: "Varianti recuperate", v: "€ 140k/anno" }, { l: "Compenso titolare", v: "pianificato" }],
  },
  {
    sector: "Serramenti e infissi · 6 dipendenti",
    title: "Preventivi più veloci e un utile finalmente prevedibile",
    before: "Prezzi decisi a intuito, nessuna visibilità sul margine per lavoro.",
    after: "Listino e preventivi basati su costo reale + margine obiettivo.",
    donut: 32, donutLabel: "Utile netto",
    metrics: [{ l: "Utile netto", v: "+32%" }, { l: "Tempo preventivi", v: "-40%" }, { l: "Visibilità margine", v: "tempo reale" }],
  },
];

export default function CasiStudioPage() {
  return (
    <>
      <PageHero
        crumb="Casi studio"
        path="/casi-studio"
        eyebrow="Risultati reali"
        title={<>Numeri veri di imprese edili vere</>}
        intro="Non promesse: risultati misurabili di imprenditori edili che hanno smesso di navigare a vista e hanno messo i numeri sotto controllo."
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

      <section className="container-nie pb-8 space-y-8">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <article className="grid gap-8 rounded-[1.75rem] border border-line bg-white p-8 sm:p-10 lg:grid-cols-[auto_1.3fr_1fr] lg:items-center shadow-[0_1px_2px_rgba(15,36,64,0.04)]">
              <div className="hidden shrink-0 lg:block">
                <DonutStat percent={c.donut} sublabel={c.donutLabel} size={128} />
              </div>
              <div>
                <span className="text-sm font-semibold text-brand-600">{c.sector}</span>
                <h2 className="mt-2 text-2xl font-bold text-navy-900">{c.title}</h2>
                <div className="mt-5 space-y-3 text-sm">
                  <p className="flex gap-2 text-muted"><span className="font-semibold text-red-400 shrink-0">Prima:</span> {c.before}</p>
                  <p className="flex gap-2 text-navy-900"><span className="font-semibold text-brand-600 shrink-0">Dopo:</span> {c.after}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 self-center">
                {c.metrics.map((m) => (
                  <div key={m.l} className="rounded-2xl bg-bg-soft p-4 text-center">
                    <div className="stat-num text-xl sm:text-2xl">{m.v}</div>
                    <div className="mt-2 text-[0.7rem] text-muted leading-tight">{m.l}</div>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
        <p className="text-center text-sm text-muted">
          I dati sono rappresentativi di risultati ottenuti con il metodo e resi anonimi su richiesta dei clienti.
        </p>
      </section>

      <div className="py-12">
        <CtaBand
          title="Il prossimo caso studio può essere la tua impresa"
          text="Prenota l'analisi gratuita e scopri quanto margine puoi recuperare già sui cantieri che hai aperti oggi."
        />
      </div>
      <div className="h-10" />
    </>
  );
}
