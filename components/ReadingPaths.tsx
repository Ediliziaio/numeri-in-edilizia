import Link from "next/link";

const paths = [
  { href: "/risorse/controllo-di-gestione-edilizia", title: "Da quali numeri comincio?", text: "Il metodo: ricavi, costi, margine di commessa e liquidità, con responsabilità e frequenza di aggiornamento." },
  { href: "/risorse/costi-di-cantiere-guida", title: "Quali costi devo attribuire al cantiere?", text: "Materiali, ore, mezzi e subappalti: distinguere quanto è previsto, impegnato e già rilevato." },
  { href: "/strumenti/template-budget-cantiere", title: "Voglio impostare il primo budget", text: "Il modello Excel scaricabile, da compilare prima dei lavori e confrontare con il consuntivo." },
  { href: "/risorse/quanto-marginare-ristrutturazione", title: "Come calcolo il margine di una ristrutturazione?", text: "Il rapporto tra ricavo e costo: confrontare correttamente margine sul venduto e ricarico." },
  { href: "/risorse/excel-o-gestionale-edilizia", title: "Quando il foglio Excel non basta più?", text: "Valutare persone coinvolte, aggiornamenti e collegamenti tra documenti prima di scegliere lo strumento." },
  { href: "/glossario", title: "Cerco il significato di un termine", text: "Definizioni, formule e rimandi alle guide per leggere i numeri dell’impresa." },
];

export function ReadingPaths() {
  return <section className="container-nie py-12 sm:py-16" aria-labelledby="reading-paths-title">
    <h2 id="reading-paths-title" className="text-2xl font-bold text-navy-900">Parti dalla domanda che hai oggi</h2>
    <p className="mt-3 max-w-3xl text-muted">Un percorso pratico dal metodo al primo budget. Ogni pagina approfondisce un problema diverso e indica cosa controllare nella tua impresa.</p>
    <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{paths.map(p => <Link key={p.href} href={p.href} className="rounded-2xl border border-line bg-white p-6 transition hover:border-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"><h3 className="font-bold text-navy-900">{p.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p><span className="mt-4 inline-block font-semibold text-brand-600">Apri la guida →</span></Link>)}</div>
  </section>;
}
