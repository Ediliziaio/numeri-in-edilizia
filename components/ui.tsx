import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd, faqSchema } from "./JsonLd";
import { Reveal } from "./Reveal";
import { IconArrow } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={`${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"} ${className}`}>
      {eyebrow && <span className={`eyebrow ${dark ? "eyebrow-light" : ""}`}>{eyebrow}</span>}
      <h2
        className={`mt-4 text-[2rem] sm:text-[2.6rem] font-bold leading-[1.08] ${dark ? "!text-white" : ""}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-brand-100/85" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function StatRow({
  items,
  tone = "light",
}: {
  items: { value: string; label: string }[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
      {items.map((it, i) => (
        <Reveal key={it.label} delay={i * 80}>
          <div className={`stat-num text-[2.75rem] sm:text-[3.25rem] ${dark ? "!text-brand-300" : ""}`}>
            {it.value}
          </div>
          <div className={`mt-2 text-sm leading-snug ${dark ? "text-brand-100/70" : "text-muted"}`}>
            {it.label}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Scopri quanto margine stai lasciando in cantiere",
  text = "Prenota l'analisi gratuita dei tuoi numeri: 30 minuti, senza impegno. Ti mostriamo dove si nasconde l'utile che oggi non vedi.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-nie">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-7 py-16 sm:px-16 sm:py-20 text-center">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -left-16 -bottom-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-white text-[2rem] sm:text-[2.6rem] font-bold leading-[1.1]">{title}</h2>
            <p className="mt-5 text-lg text-brand-100 leading-relaxed">{text}</p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contatti" className="btn btn-primary">
                {site.cta.primaryLabel}
                <IconArrow className="arrow h-4 w-4" />
              </Link>
              <Link href="/metodo" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/15">
                Scopri il metodo
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function FaqSection({
  title = "Domande frequenti",
  intro = "Le risposte alle domande che ci fanno più spesso gli imprenditori edili.",
  items,
}: {
  title?: string;
  intro?: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="container-nie py-20 sm:py-28">
      <JsonLd data={faqSchema(items)} />
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="FAQ" title={title} intro={intro} />
        <div className="divide-y divide-line border-t border-line">
          {items.map((it) => (
            <details key={it.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-semibold text-navy-900 text-lg list-none">
                {it.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600 transition-transform group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pill({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
        dark ? "bg-white/10 text-brand-100" : "bg-brand-100 text-brand-700"
      }`}
    >
      {children}
    </span>
  );
}

/** Fascia di fiducia con "loghi"/categorie di imprese servite */
export function TrustBar() {
  const items = ["Costruzioni", "Ristrutturazioni", "Serramenti", "Impianti", "Opere specialistiche"];
  return (
    <div className="border-y border-line bg-white/60">
      <div className="container-nie py-7">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          Un metodo pensato per ogni impresa edile
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((c) => (
            <span key={c} className="font-display text-lg font-semibold text-navy-900/35">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Passi di processo numerati con linea di connessione */
export function ProcessSteps({
  steps,
}: {
  steps: { n: string; title: string; text: string }[];
}) {
  return (
    <div className="relative grid gap-6 md:grid-cols-3">
      <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />
      {steps.map((s, i) => (
        <Reveal key={s.n} delay={i * 120}>
          <div className="relative">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 font-display text-lg font-bold text-white shadow-soft">
              {s.n}
            </div>
            <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
            <p className="mt-2 text-muted leading-relaxed">{s.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
