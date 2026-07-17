import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, FaqSection, SectionHeading, ProcessSteps } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { IllustrazioneAffiancamento } from "@/components/Illustrations";
import { IconCheck, IconArrow } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Percorsi: formazione e consulenza edile",
  description:
    "Percorsi Numeri in Edilizia: dalla formazione sul controllo di gestione all'affiancamento operativo. Scegli il livello giusto per la tua impresa edile.",
  alternates: { canonical: "/percorsi" },
};

const tiers = [
  {
    name: "Formazione", tag: "Impari il metodo", price: "Corso",
    ideal: "Per l'imprenditore che vuole capire i propri numeri e iniziare da solo.",
    features: ["Il metodo completo in moduli pratici", "Modelli e strumenti pronti all'uso", "Come leggere il margine di commessa", "Community di imprenditori edili"],
    cta: "Voglio la formazione", highlight: false,
  },
  {
    name: "Affiancamento", tag: "Lo applichiamo insieme", price: "Percorso guidato",
    ideal: "Per chi vuole risultati veloci con un consulente al proprio fianco.",
    features: ["Tutto ciò che c'è nella Formazione", "Sessioni 1-a-1 sulla tua impresa", "Setup del controllo di gestione sui tuoi cantieri", "Analisi del margine commessa per commessa", "Revisione dei preventivi con te"],
    cta: "Voglio l'affiancamento", highlight: true,
  },
  {
    name: "Inner Circle", tag: "Il livello più alto", price: "Su selezione",
    ideal: "Per imprese edili strutturate che vogliono un tavolo di lavoro continuativo.",
    features: ["Tutto ciò che c'è nell'Affiancamento", "Confronto continuo sui numeri dell'impresa", "Pianificazione budget e compenso imprenditore", "Accesso prioritario e rete di pari livello"],
    cta: "Candidati all'Inner Circle", highlight: false,
  },
];

const faq = [
  {
    q: "Come faccio a capire quale percorso fa per me?",
    a: "Nell'analisi gratuita guardiamo insieme la tua impresa e ti indichiamo il livello più adatto: non ti vendiamo il pacchetto più caro, ma quello che porta il risultato che ti serve ora.",
  },
  {
    q: "I percorsi valgono per qualsiasi tipo di impresa edile?",
    a: "Sì: costruzioni generali, ristrutturazioni, serramenti, impianti, opere specialistiche. Il metodo si adatta alla marginalità e al ciclo di commessa della tua attività.",
  },
];

export default function PercorsiPage() {
  return (
    <>
      <PageHero
        crumb="Percorsi"
        path="/percorsi"
        eyebrow="Formazione e consulenza"
        title={<>Scegli quanto vuoi essere accompagnato</>}
        intro="Dalla formazione che ti insegna a leggere i numeri, all'affiancamento in cui costruiamo il controllo di gestione sui tuoi cantieri. Un percorso per ogni fase della tua impresa."
        visual={<IllustrazioneAffiancamento />}
      />

      <section className="container-nie py-20 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-3 items-stretch">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-[1.75rem] p-8 ${
                  t.highlight
                    ? "bg-navy-900 text-white shadow-card ring-1 ring-navy-900 lg:-mt-4 lg:mb-4"
                    : "bg-white border border-line card-hover"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Più scelto
                  </span>
                )}
                <span className={`text-sm font-semibold ${t.highlight ? "text-brand-300" : "text-brand-600"}`}>{t.tag}</span>
                <h2 className={`mt-2 text-2xl font-bold ${t.highlight ? "text-white" : "text-navy-900"}`}>{t.name}</h2>
                <p className={`mt-1 font-display text-lg ${t.highlight ? "text-brand-100" : "text-muted"}`}>{t.price}</p>
                <p className={`mt-4 text-sm leading-relaxed ${t.highlight ? "text-brand-100/85" : "text-muted"}`}>{t.ideal}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <IconCheck className={`h-4 w-4 shrink-0 mt-0.5 ${t.highlight ? "text-brand-300" : "text-brand-600"}`} />
                      <span className={t.highlight ? "text-brand-100/90" : "text-navy-900"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contatti" className={`btn mt-8 w-full ${t.highlight ? "btn-primary" : "btn-ghost"}`}>
                  {t.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Non sai da dove partire?{" "}
          <Link href="/contatti" className="font-semibold text-brand-600 hover:underline">Prenota l'analisi gratuita</Link>{" "}
          e te lo diciamo noi.
        </p>
      </section>

      {/* COME SCEGLIERE */}
      <section className="bg-bg-soft py-20 sm:py-28">
        <div className="container-nie">
          <Reveal>
            <SectionHeading align="center" eyebrow="Come scegliere" title="In tre passi trovi il percorso giusto" className="mb-14" />
          </Reveal>
          <ProcessSteps
            steps={[
              { n: "1", title: "Analisi gratuita", text: "Guardiamo i tuoi numeri e la fase in cui si trova la tua impresa." },
              { n: "2", title: "Percorso su misura", text: "Ti indichiamo il livello più adatto: formazione, affiancamento o Inner Circle." },
              { n: "3", title: "Si parte", text: "Metti in pratica il metodo con il grado di supporto che hai scelto." },
            ]}
          />
        </div>
      </section>

      <FaqSection items={faq} />
      <CtaBand
        title="Il percorso giusto parte dai tuoi numeri"
        text="Prenota l'analisi gratuita: capiamo insieme a che punto sei e qual è il passo che ti fa guadagnare di più."
      />
      <div className="h-20" />
    </>
  );
}
