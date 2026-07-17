import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand, FaqSection, SectionHeading, ProcessSteps } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { AdEic } from "@/components/AdEic";
import { IllustrazioneAffiancamento } from "@/components/Illustrations";
import { IconCheck, IconArrow, IconTrend, IconWallet, IconCompass, IconShield } from "@/components/Icons";
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
    ideal: "Per l'imprenditore che vuole capire i propri numeri e partire da solo, al proprio ritmo.",
    features: [
      "Il metodo completo in moduli pratici, spiegati nella lingua del cantiere",
      "Modelli e fogli pronti: preventivo, margine di commessa, scadenzario",
      "Come si calcola il margine reale di un cantiere, passo passo",
      "Come costruire un preventivo che difende l'utile, non solo il prezzo",
      "Community di imprenditori edili con cui confrontarti",
    ],
    outcome: "Alla fine leggi da solo il margine dei tuoi cantieri.",
    cta: "Voglio la formazione", highlight: false,
  },
  {
    name: "Affiancamento", tag: "Lo applichiamo insieme", price: "Percorso guidato",
    ideal: "Per chi vuole risultati veloci, con qualcuno che costruisce il controllo di gestione insieme a lui.",
    features: [
      "Tutto ciò che c'è nella Formazione",
      "Sessioni 1-a-1 sui numeri veri della tua impresa",
      "Setup del controllo di gestione sui tuoi cantieri, non su esempi",
      "Margine analizzato commessa per commessa, insieme",
      "Revisione dei tuoi preventivi prima che tu li mandi",
      "Il tuo compenso da imprenditore messo a budget",
    ],
    outcome: "In poche settimane sai quali cantieri guadagnano e quali no.",
    cta: "Voglio l'affiancamento", highlight: true,
  },
  {
    name: "Inner Circle", tag: "Il livello più alto", price: "Su selezione",
    ideal: "Per imprese edili strutturate che vogliono un tavolo di lavoro continuativo sui numeri.",
    features: [
      "Tutto ciò che c'è nell'Affiancamento",
      "Confronto continuo sui numeri dell'impresa, tutto l'anno",
      "Pianificazione del budget annuale e del tuo stipendio",
      "Lettura degli scostamenti e decisioni sui cantieri, insieme",
      "Accesso prioritario e rete di imprenditori del tuo livello",
    ],
    outcome: "Guidi l'impresa sui dati, con qualcuno al tavolo tutto l'anno.",
    cta: "Candidati all'Inner Circle", highlight: false,
  },
];

// Cosa sai fare, davvero, alla fine del percorso
const outcomes = [
  { icon: IconCompass, t: "Leggi il margine mentre il cantiere è aperto", d: "Non a fine lavori, quando è tardi. Vedi il margine reale contro il preventivo, settimana per settimana." },
  { icon: IconWallet, t: "Fai preventivi che tengono", d: "Parti dal costo vero e da un margine deciso da te. Sai quali lavori prendere e quali lasciare." },
  { icon: IconTrend, t: "Sai dove finiscono i soldi", d: "Materiali, ore, mezzi, subappalti: ogni costo torna al cantiere che lo ha generato." },
  { icon: IconShield, t: "Decidi senza andare a intuito", d: "Ogni scelta importante — una gara, una variante, un'assunzione — parte da un numero, non da una sensazione." },
];

// Cosa NON troverai
const nonTroverai = [
  "Teoria da manuale che il lunedì non sai dove mettere.",
  "Report da cento pagine che nessuno apre.",
  "Il linguaggio del ragioniere o dell'ingegnere gestionale.",
  "Un percorso identico per tutti: parte sempre dai tuoi numeri.",
];

const faq = [
  {
    q: "Come faccio a capire quale percorso fa per me?",
    a: "Nell'analisi gratuita guardiamo insieme la tua impresa e ti indichiamo il livello più adatto: non ti vendiamo il pacchetto più caro, ma quello che porta il risultato che ti serve ora. Se la formazione basta, te lo diciamo.",
  },
  {
    q: "I percorsi valgono per qualsiasi tipo di impresa edile?",
    a: "Sì: costruzioni generali, ristrutturazioni, serramenti, impianti, carpenteria, movimento terra. Il metodo si adatta alla marginalità e al ciclo di commessa della tua attività. Cambia il settore, non cambia il principio: sapere quanto guadagni su ogni cantiere.",
  },
  {
    q: "Quanto tempo mi porta via a settimana?",
    a: "Poco, ed è il punto. Il metodo è costruito per l'imprenditore che vive in cantiere, non in ufficio: dieci minuti a settimana per leggere i numeri chiave. Il tempo vero lo mettiamo all'inizio, per impostare tutto; poi diventa una routine breve.",
  },
  {
    q: "Devo cambiare gestionale o comprare un software?",
    a: "No, non serve per partire. Il metodo funziona sui dati che già produci, anche con un foglio. Se poi vuoi tenere margini, SAL e scadenze collegati alle commesse in automatico, c'è EdiliziaInCloud — ma prima viene il modo di leggere i numeri, non lo strumento.",
  },
  {
    q: "Quando vedo i primi risultati?",
    a: "Il primo cambiamento è immediato: già nell'analisi gratuita vedi numeri della tua impresa che prima non avevi. Nel giro di poche settimane di affiancamento hai il margine reale delle commesse aperte a confronto col preventivo — ed è lì che di solito si recuperano i primi punti di marginalità.",
  },
  {
    q: "Posso iniziare dalla formazione e passare all'affiancamento dopo?",
    a: "Certo, è il percorso più naturale. Molti partono dalla formazione per capire il metodo e passano all'affiancamento quando vogliono applicarlo più in fretta sui propri cantieri. Quello che hai già fatto non si perde: si somma.",
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
                <div className={`mt-6 rounded-xl px-4 py-3 text-sm font-medium ${t.highlight ? "bg-white/10 text-brand-100" : "bg-bg-soft text-navy-900"}`}>
                  <span className={`font-semibold ${t.highlight ? "text-brand-300" : "text-brand-600"}`}>Risultato:</span> {t.outcome}
                </div>
                <Link href="/contatti" className={`btn mt-6 w-full ${t.highlight ? "btn-primary" : "btn-ghost"}`}>
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

      {/* NON È UN CORSO IN PIÙ */}
      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="container-nie grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow eyebrow-light">Perché è diverso</span>
            <h2 className="mt-4 text-[1.8rem] sm:text-[2.3rem] font-bold text-white leading-tight">
              Non è l'ennesimo corso che dimentichi il lunedì
            </h2>
            <div className="mt-6 space-y-4 text-brand-100/85 leading-relaxed">
              <p>
                Hai già fatto corsi. Slide, entusiasmo, buoni propositi. Poi torni in cantiere e
                cambia niente: gli stessi fogli, gli stessi preventivi a intuito, lo stesso dubbio
                a fine anno.
              </p>
              <p>
                Qui non ti riempiamo di teoria. Costruiamo il controllo dei tuoi numeri sui tuoi
                cantieri veri — quelli aperti adesso. Esci da ogni percorso con qualcosa che usi
                subito, non con appunti da archiviare.
              </p>
              <p className="text-white font-medium">
                La differenza non è quanto impari. È quanto, di quello che impari, finisce davvero
                in cantiere.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-3">
              {nonTroverai.map((n) => (
                <li key={n} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-500/15 text-red-300 font-bold">✕</span>
                  <span className="text-brand-100/90 leading-snug">{n}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-brand-100/70">
              Quello che trovi, invece, è un metodo che parla la lingua del cantiere e parte sempre
              dai tuoi numeri.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COSA SAI FARE ALLA FINE */}
      <section className="container-nie py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Cosa sai fare, alla fine"
            title="Quattro cose che prima non facevi"
            intro="Non nozioni: capacità concrete che restano tue, sull'impresa e su ogni cantiere che aprirai."
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <Reveal key={o.t} delay={i * 90}>
              <div className="h-full rounded-[1.5rem] bg-white p-7 border border-line card-hover">
                <span className="icon-badge"><o.icon /></span>
                <h3 className="mt-5 font-bold text-navy-900 leading-snug">{o.t}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{o.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
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

      {/* Spot EdiliziaInCloud */}
      <section className="container-nie py-4">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-center text-muted">
              Il metodo ti dà la testa. Per applicarlo ogni giorno sui cantieri, lo strumento è{" "}
              <strong className="text-navy-900">EdiliziaInCloud</strong>: commesse, margini, DDT e
              fatturazione in un posto solo.
            </p>
            <AdEic desktop="wide" mobile="box" />
          </div>
        </Reveal>
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
