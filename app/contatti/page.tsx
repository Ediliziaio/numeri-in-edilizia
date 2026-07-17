import type { Metadata } from "next";
import { EicForm } from "@/components/EicForm";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { SectionHeading, ProcessSteps, FaqSection } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { IconCheck } from "@/components/Icons";
import { site } from "@/lib/site";

const faq = [
  {
    q: "Quanto costa l'analisi gratuita?",
    a: "Niente. È una chiamata di 30 minuti, senza impegno, in cui guardiamo i tuoi numeri e ti diciamo dove stai perdendo margine. Ha valore anche se poi decidi di fare da solo.",
  },
  {
    q: "Cosa devo preparare per la chiamata?",
    a: "Basta che tu abbia in mente il quadro della tua impresa: fatturato indicativo, numero di cantieri, il dubbio principale sui tuoi numeri. Al resto pensiamo noi.",
  },
  {
    q: "In quanto tempo mi ricontattate?",
    a: "Entro 24 ore lavorative dalla richiesta ti scriviamo per fissare la chiamata nell'orario che preferisci.",
  },
];

export const metadata: Metadata = {
  title: "Prenota l'analisi gratuita",
  description:
    "Prenota 30 minuti gratuiti con Numeri in Edilizia: analizziamo i numeri della tua impresa edile e ti mostriamo dove recuperare margine. Senza impegno.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Contatti", url: `${site.domain}/contatti` },
        ])}
      />
      <section className="border-b border-line bg-bg-soft">
        <div className="container-nie py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="eyebrow">Analisi gratuita</span>
              <h1 className="mt-4 text-[2.4rem] sm:text-[3.2rem] font-extrabold leading-[1.05]">
                30 minuti che possono cambiare i tuoi numeri
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Prenota una chiamata gratuita e senza impegno. Guardiamo insieme i numeri della tua
                impresa edile e ti diciamo, dati alla mano, dove stai lasciando margine sul tavolo.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Analizziamo margine, costi e commesse della tua impresa",
                  "Ti mostriamo dove si nasconde l'utile che oggi non vedi",
                  "Esci con almeno un'azione concreta, anche se poi fai da solo",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">✓</span>
                    <span className="text-navy-900 font-medium">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl bg-white border border-line p-6">
                <p className="text-sm text-muted">Preferisci scriverci?</p>
                <a href={`mailto:${site.email}`} className="mt-1 block font-display font-semibold text-navy-900 hover:text-brand-600">
                  {site.email}
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white border border-line p-4 sm:p-6 shadow-card">
              <EicForm title="Prenota l'analisi gratuita" />
            </div>
          </div>
        </div>
      </section>

      {/* COSA SUCCEDE DOPO */}
      <section className="container-nie py-20 sm:py-24">
        <Reveal>
          <SectionHeading align="center" eyebrow="Cosa succede dopo" title="Dalla richiesta alla chiamata, in tre passi" className="mb-14" />
        </Reveal>
        <ProcessSteps
          steps={[
            { n: "1", title: "Invii la richiesta", text: "Compili il form: due minuti, nessun impegno." },
            { n: "2", title: "Ti ricontattiamo", text: "Entro 24 ore lavorative fissiamo insieme l'orario della chiamata." },
            { n: "3", title: "Analizziamo i numeri", text: "30 minuti sui tuoi dati reali: esci con almeno un'azione concreta." },
          ]}
        />
        <div className="mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2"><IconCheck className="h-4 w-4 text-brand-600" /> Gratis</span>
          <span className="inline-flex items-center gap-2"><IconCheck className="h-4 w-4 text-brand-600" /> Senza impegno</span>
          <span className="inline-flex items-center gap-2"><IconCheck className="h-4 w-4 text-brand-600" /> Sui tuoi numeri reali</span>
        </div>
      </section>

      <FaqSection title="Domande sull'analisi gratuita" intro="Quello che gli imprenditori ci chiedono prima di prenotare." items={faq} />
    </>
  );
}
