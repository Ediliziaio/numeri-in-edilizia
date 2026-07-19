import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading, CtaBand, FaqSection, ProcessSteps } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { EicLogo } from "@/components/EicLogo";
import { site } from "@/lib/site";
import {
  IconExternal, IconCompass, IconReceipt, IconTruck, IconLayers,
  IconWallet, IconBuilding, IconCheck, IconArrow,
} from "@/components/Icons";

const eic = site.partner;

export const metadata: Metadata = {
  title: "EdiliziaInCloud: il gestionale del metodo",
  description:
    "Il gestionale per imprese edili che applica il metodo: margine di commessa, preventivi, DDT, fatturazione e cantieri in un unico posto.",
  alternates: { canonical: "/edilizia-in-cloud" },
};

const FN = "https://ediliziaincloud.com/funzionalita";

const features = [
  { icon: IconCompass, t: "Commesse e margini", d: "Ricavi, costi e margine per ogni cantiere, in tempo reale. Il cuore del metodo, operativo ogni giorno.", href: `${FN}/margini-cantiere/` },
  { icon: IconLayers, t: "Preventivi", d: "Costruiti sui costi reali e su un margine obiettivo, non più a intuito.", href: `${FN}/preventivi-edilizia/` },
  { icon: IconTruck, t: "DDT e magazzino", d: "Materiali, arrivi e movimenti tracciati e collegati alla commessa giusta.", href: `${FN}/magazzino-cantiere/` },
  { icon: IconReceipt, t: "Fatturazione elettronica", d: "Fatture, note di credito e SDI integrati, senza saltare tra software diversi.", href: `${FN}/fatturazione-elettronica/` },
  { icon: IconBuilding, t: "Cantieri", d: "Fasi, squadre, subappalti e avanzamento sotto controllo dal primo giorno.", href: `${FN}/gestione-cantieri/` },
  { icon: IconWallet, t: "Utile e liquidità", d: "Vedi dove va il margine e quando i soldi entrano davvero in cassa.", href: `${FN}/cassa-cantiere/` },
];

const faq = [
  {
    q: "Che rapporto c'è tra Numeri in Edilizia ed EdiliziaInCloud?",
    a: "Numeri in Edilizia è il metodo e l'affiancamento che ti insegnano a controllare i numeri; EdiliziaInCloud è il gestionale che ti permette di applicarli ogni giorno. Il primo ti dà la testa, il secondo lo strumento.",
  },
  {
    q: "Dove provo EdiliziaInCloud?",
    a: "Sul sito ufficiale ediliziaincloud.com trovi tutte le funzioni, le demo e come iniziare. Da qui puoi accedere direttamente con i pulsanti in pagina.",
  },
  {
    q: "EdiliziaInCloud è pensato per imprese edili?",
    a: "Sì: è un gestionale nato per le imprese di costruzioni e le loro commesse. Per questo si sposa naturalmente con un metodo di controllo di gestione verticale sull'edilizia.",
  },
];

export default function EdiliziaInCloudPage() {
  return (
    <>
      <PageHero
        crumb="EdiliziaInCloud"
        path="/edilizia-in-cloud"
        eyebrow="Il gestionale del metodo"
        title={<>Il metodo ti dice cosa controllare. EdiliziaInCloud te lo fa fare.</>}
        intro="Imparare a leggere i numeri è il primo passo. Per applicarli ogni giorno — su ogni commessa, preventivo e cantiere — serve uno strumento nato per l'edilizia."
        cta={false}
      />

      {/* INTRO PARTNER */}
      <section className="container-nie py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <Reveal>
            <EicLogo iconSize={44} className="mb-6" />
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-bold text-navy-900 leading-tight">
              Il gestionale per imprese edili
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Preventivi, commesse, margini, DDT, magazzino, fatturazione elettronica e cantieri in
              un unico posto. Tutto ciò che il metodo Numeri in Edilizia ti insegna a governare,
              EdiliziaInCloud te lo mette in pratica — senza fogli Excel sparsi e senza rincorrere i
              dati a fine lavori.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={eic.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Vai su ediliziaincloud.com <IconExternal className="h-4 w-4" />
              </a>
              <Link href="/contatti" className="btn btn-ghost">
                Prima analizza i tuoi numeri <IconArrow className="arrow h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <a
              href={eic.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[1.75rem] border border-line bg-white p-8 shadow-card card-hover"
            >
              <div className="flex items-center justify-between">
                <EicLogo iconSize={40} withWordmark={false} />
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  ediliziaincloud.com <IconExternal className="h-3.5 w-3.5" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">EdiliziaInCloud</h3>
              <p className="mt-1 text-muted">Il gestionale per imprese edili</p>
              <ul className="mt-6 space-y-2.5">
                {["Margine di commessa in tempo reale", "Preventivi, DDT e fatturazione integrati", "Pensato per le imprese di costruzioni"].map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm text-navy-900">
                    <IconCheck className="h-4 w-4 shrink-0 text-brand-600" /> {t}
                  </li>
                ))}
              </ul>
              <span className="mt-7 inline-flex items-center gap-2 font-semibold text-brand-600 group-hover:gap-3 transition-all">
                Vai al sito <IconExternal className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-nie">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Cosa fa il gestionale"
              title="Tutto il tuo cantiere, sotto controllo in un posto solo"
              intro="Le funzioni che trasformano il metodo in pratica quotidiana."
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <a href={f.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-[1.5rem] bg-white p-7 border border-line card-hover">
                  <span className="icon-badge"><f.icon /></span>
                  <h3 className="mt-5 font-bold text-navy-900">{f.t}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{f.d}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                    Scopri la funzione <IconExternal className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={eic.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Esplora tutte le funzioni su ediliziaincloud.com <IconExternal className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* METODO + GESTIONALE */}
      <section className="container-nie py-20 sm:py-28">
        <Reveal>
          <SectionHeading align="center" eyebrow="Metodo + Gestionale" title="Come lavorano insieme" className="mb-14" />
        </Reveal>
        <ProcessSteps
          steps={[
            { n: "1", title: "Il metodo", text: "Impari quali numeri contano e come leggere il margine di ogni commessa." },
            { n: "2", title: "EdiliziaInCloud", text: "Il gestionale raccoglie quei dati e te li mostra aggiornati, ogni giorno." },
            { n: "3", title: "Le decisioni", text: "Preventivi, gare e varianti guidate dai numeri reali, non dall'intuito." },
          ]}
        />
      </section>

      {/* BANDA CTA ESTERNA */}
      <section className="container-nie">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-7 py-16 sm:px-16 sm:py-20 text-center">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <div className="flex justify-center"><EicLogo variant="onDark" iconSize={40} /></div>
              <h2 className="mt-6 text-white text-[2rem] sm:text-[2.6rem] font-bold leading-[1.1]">
                Vuoi vedere il gestionale all'opera?
              </h2>
              <p className="mt-5 text-lg text-brand-100 leading-relaxed">
                Scopri come EdiliziaInCloud tiene sotto controllo commesse, margini e cantieri della
                tua impresa edile. Vai sul sito ufficiale.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <a href={eic.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Apri ediliziaincloud.com <IconExternal className="h-4 w-4" />
                </a>
                <Link href="/contatti" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/15">
                  Prenota l'analisi gratuita
                </Link>
              </div>
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
