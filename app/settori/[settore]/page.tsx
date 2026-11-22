import CascataMargine, { type VoceCascata } from "@/components/vivo/CascataMargine";
import NumeroVivo from "@/components/vivo/NumeroVivo";
import CruscottoVivo from "@/components/vivo/CruscottoVivo";
import ScostamentoVivo from "@/components/vivo/ScostamentoVivo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand, FaqSection, SectionHeading, ProcessSteps } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { DonutStat, AreaTrend } from "@/components/Graphics";
import { PageImage } from "@/components/PageImage";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/JsonLd";
import { AdEic } from "@/components/AdEic";
import { IconCheck, IconArrow, IconExternal, IconChart } from "@/components/Icons";
import { settori, getSettore } from "@/lib/settori";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return settori.map((s) => ({ settore: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ settore: string }> }): Promise<Metadata> {
  const { settore } = await params;
  const s = getSettore(settore);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/settori/${s.slug}` },
    openGraph: { url: `/settori/${s.slug}`, title: s.metaTitle, description: s.metaDescription, type: "website", images: ["/opengraph-image"] },
  };
}

const DIRETTA_SETTORE: Record<string, { titolo: string; materiale: string }> = {
  "imprese-edili": { titolo: "Palazzina 6 alloggi · Via Manzoni", materiale: "cemento e ferro" },
  ristrutturazioni: { titolo: "Ristrutturazione Via dei Mille", materiale: "piastrelle e sanitari" },
  serramentisti: { titolo: "Infissi · Condominio Verdi", materiale: "profili e vetri" },
  impiantisti: { titolo: "Impianto termico · Scuola media", materiale: "tubi e caldaia" },
  "carpenteria-metallica": { titolo: "Capannone in acciaio · Lotto 3", materiale: "travi in acciaio" },
  "movimento-terra": { titolo: "Scavo e sbancamento · Lotto 4", materiale: "gasolio dei mezzi" },
};

const v = (nome: string, prev: number, reale: number): VoceCascata => ({ nome, prev, reale });
const CASCATA_SETTORE: Record<string, VoceCascata[]> = {
  "imprese-edili": [v("Calcestruzzo e ferro", 34, 36), v("Manodopera", 28, 33), v("Noli e gru", 10, 11), v("Spese generali", 14, 14)],
  ristrutturazioni: [v("Materiali e finiture", 36, 39), v("Manodopera", 30, 34), v("Smaltimenti", 5, 6), v("Spese generali", 14, 14)],
  serramentisti: [v("Profili e vetri", 44, 45), v("Posa", 18, 23), v("Trasporto", 5, 6), v("Spese generali", 13, 13)],
  impiantisti: [v("Componenti", 40, 41), v("Ore impiantisti", 26, 31), v("Certificazioni", 4, 4), v("Spese generali", 14, 14)],
  "carpenteria-metallica": [v("Acciaio", 42, 46), v("Officina e montaggio", 26, 29), v("Zincatura e trasporti", 8, 9), v("Spese generali", 12, 12)],
  "movimento-terra": [v("Gasolio", 18, 22), v("Operatori", 26, 28), v("Mezzi e manutenzione", 22, 24), v("Discarica e trasporti", 18, 19)],
};

export default async function SettorePage({ params }: { params: Promise<{ settore: string }> }) {
  const { settore } = await params;
  const s = getSettore(settore);
  if (!s) notFound();

  const url = `${site.domain}/settori/${s.slug}`;
  const altri = settori.filter((x) => x.slug !== s.slug);
  const donutPct = typeof s.esempio.metric === "string" && s.esempio.metric.includes("%")
    ? parseInt(s.esempio.metric) : 100;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(s.h1, s.metaDescription, url),
          faqSchema(s.faq),
          breadcrumbSchema([
            { name: "Home", url: site.domain },
            { name: "Settori", url: `${site.domain}/settori` },
            { name: s.navLabel, url },
          ]),
        ]}
      />

      <PageHero
        crumb={s.navLabel}
        eyebrow={`Per ${s.nome}`}
        title={s.h1}
        intro={s.heroIntro}
        visual={<PageImage src={`/images/pages/settore-${s.slug}.jpg`} alt={s.h1} priority />}
      />

      <section className="container-nie py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <SectionHeading
            eyebrow="Dove si forma il margine"
            title={<>Su 100 € di lavoro, quanti ne restano?</>}
            intro="Materiali, ore, mezzi e spese generali: se ogni voce finisce sulla commessa giusta, il margine lo leggi mentre lavori. Se no, lo scopri dal commercialista."
          />
          <CascataMargine voci={CASCATA_SETTORE[s.slug]} titolo={`Dove va ogni euro: ${s.navLabel.toLowerCase()}`} />
        </div>
      </section>

      {/* LA COMMESSA IN DIRETTA */}
      <section className="bg-bg-soft py-14 sm:py-20">
        <div className="container-nie">
          <SectionHeading
            align="center"
            eyebrow="Il margine, mentre lavori"
            title={<>Ogni movimento del cantiere sposta il margine.</>}
            intro="Un DDT, una giornata di squadra, un nolo, un SAL: se finiscono subito sulla commessa giusta, vedi lo sforamento quando puoi ancora correggerlo."
            className="mb-10"
          />
          <div className="scorri-mobile grid gap-6 lg:grid-cols-2">
            <CruscottoVivo {...(DIRETTA_SETTORE[s.slug] ?? {})} />
            <ScostamentoVivo />
          </div>
        </div>
      </section>

      {/* APPROFONDIMENTO + CHART */}
      <section className="container-nie py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <Reveal>
            <p className="text-xl text-navy-900 font-display font-semibold leading-snug">{s.intro2}</p>
            <h2 className="mt-10 text-[1.6rem] sm:text-[2rem] font-bold text-navy-900 leading-tight">{s.approfondimento.title}</h2>
            {s.approfondimento.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-muted leading-relaxed">{p}</p>
            ))}
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[1.75rem] border border-line bg-white p-8 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Margine nel tempo</p>
                  <p className="mt-1 font-display text-xl font-bold text-navy-900">Con il metodo applicato</p>
                </div>
                <span className="icon-badge"><IconChart /></span>
              </div>
              <div className="mt-6"><AreaTrend points={s.trend} labels={["Gen", "", "Mar", "", "Mag", "", "Lug", ""]} /></div>
              <p className="mt-4 text-sm text-muted">Andamento illustrativo del margine di commessa una volta messi i numeri sotto controllo.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEMI SPECIFICI */}
      <section className="bg-bg-soft py-20 sm:py-24">
        <div className="container-nie grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Il problema"
              title={<>I numeri che sfuggono nel settore {s.nomeBreve.toLowerCase()}</>}
              intro="Se guidi un'impresa in questo settore, probabilmente riconosci almeno tre di questi punti."
            />
            <div className="mt-8 rounded-2xl border border-line bg-white p-6">
              <p className="text-sm font-semibold text-brand-600">Esempio reale</p>
              <p className="mt-2 text-sm text-muted"><span className="font-semibold text-red-400">Prima:</span> {s.esempio.before}</p>
              <p className="mt-2 text-sm text-navy-900"><span className="font-semibold text-brand-600">Dopo:</span> {s.esempio.after}</p>
              <div className="mt-4 flex items-center gap-4 border-t border-line pt-4">
                <DonutStat percent={donutPct} size={72} />
                <div>
                  <div className="stat-num text-2xl"><NumeroVivo value={s.esempio.metric} /></div>
                  <div className="text-xs text-muted">{s.esempio.metricLabel}</div>
                </div>
              </div>
            </div>
          </Reveal>
          <ul className="space-y-4">
            {s.problemi.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <li className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(15,36,64,0.04)]">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-50 text-red-500 font-bold">✕</span>
                  <span className="text-navy-900 font-medium leading-snug">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SOLUZIONE + BENEFICI */}
      <section className="container-nie py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="La soluzione"
            title={<>Il metodo Numeri in Edilizia, applicato al tuo settore</>}
            intro={s.soluzione}
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {s.benefici.map((b, i) => (
            <Reveal key={b.t} delay={i * 90}>
              <div className="h-full rounded-[1.5rem] bg-white p-7 border border-line card-hover">
                <span className="icon-badge"><IconCheck className="h-6 w-6" /></span>
                <h3 className="mt-5 font-bold text-navy-900 leading-snug">{b.t}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INDICATORI CHIAVE */}
      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="container-nie">
          <Reveal>
            <SectionHeading
              align="center"
              tone="dark"
              eyebrow="Gli indicatori che contano"
              title={<>I numeri chiave del settore {s.nomeBreve.toLowerCase()}</>}
              intro="Pochi indicatori, quelli giusti per il tuo settore. Sono questi che mettiamo sotto controllo."
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {s.indicatori.map((ind, i) => (
              <Reveal key={ind.nome} delay={i * 80}>
                <div className="flex gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-7">
                  <span className="stat-num shrink-0 text-3xl !text-brand-300">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{ind.nome}</h3>
                    <p className="mt-1.5 text-brand-100/80 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COME LO METTIAMO SOTTO CONTROLLO */}
      <section className="container-nie py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Come funziona"
            title="Dal primo sguardo ai numeri al margine sotto controllo"
            intro="Un percorso lineare, calibrato sul tuo settore. Sai sempre a che punto sei."
            className="mb-14"
          />
        </Reveal>
        <ProcessSteps
          steps={[
            { n: "1", title: "Analisi gratuita", text: `30 minuti sui numeri della tua impresa: capiamo dove il margine si perde nel ${s.nomeBreve.toLowerCase()}.` },
            { n: "2", title: "Ordine nei dati", text: "Riclassifichiamo costi e ricavi in logica di commessa e impostiamo i tuoi indicatori chiave." },
            { n: "3", title: "Lettura del margine", text: "Margine per commessa a confronto col preventivo, con alert sui lavori a rischio." },
            { n: "4", title: "Decisioni sui dati", text: "Preventivi, gare e prezzi guidati dai numeri reali. E il tuo compenso a budget." },
          ]}
        />
      </section>

      {/* COSA MONITORARE + CHART */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-nie grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="La tua settimana"
              title="Cosa tieni sotto controllo, ogni settimana"
              intro="Bastano dieci minuti per leggere i numeri che contano. Ecco cosa guardi con il metodo."
            />
            <ul className="mt-8 space-y-3">
              {s.monitoraggio.map((m) => (
                <li key={m} className="flex gap-3 rounded-2xl border border-line bg-white p-5">
                  <IconCheck className="h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-navy-900 font-medium">{m}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[1.75rem] border border-line bg-white p-8 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-brand-600">Esempio: margine di commessa</p>
                  <p className="mt-1 font-serif text-3xl font-semibold text-navy-900"><NumeroVivo value={s.esempio.metric} /></p>
                  <p className="text-xs text-muted">{s.esempio.metricLabel}</p>
                </div>
                <DonutStat percent={donutPct} size={96} />
              </div>
              <div className="mt-6 border-t border-line pt-6"><AreaTrend points={s.trend} /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Spot EdiliziaInCloud */}
      <section className="container-nie pb-4">
        <Reveal>
          <AdEic desktop="leaderboard" mobile="box" />
        </Reveal>
      </section>

      <FaqSection
        title={`Domande frequenti — ${s.nomeBreve}`}
        intro={`Le domande più comuni sul controllo di gestione per ${s.nome}.`}
        items={s.faq}
      />

      {/* ALTRI SETTORI (link interni SEO) */}
      <section className="container-nie pb-20">
        <Reveal>
          <div className="rounded-[1.75rem] border border-line bg-white p-8 sm:p-10">
            <h2 className="text-xl font-bold text-navy-900">Il metodo per il tuo settore</h2>
            <p className="mt-2 text-muted">Il controllo di gestione Numeri in Edilizia è adatto a ogni tipo di impresa edile.</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {altri.map((x) => (
                <Link
                  key={x.slug}
                  href={`/settori/${x.slug}`}
                  className="rounded-full border border-line bg-bg-soft px-4 py-2 text-sm font-medium text-navy-900 transition hover:border-brand-400 hover:text-brand-600"
                >
                  {x.navLabel}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contatti" className="btn btn-primary">
                {site.cta.primaryLabel} <IconArrow className="arrow h-4 w-4" />
              </Link>
              <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Applicalo con EdiliziaInCloud <IconExternal className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}
