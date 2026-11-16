"use client";
import { useId, useState } from "react";
import { calculateOre, type OreInputs } from "@/lib/ore-variance";

const fields: { key: keyof OreInputs; label: string }[] = [
  { key: "budgetHours", label: "Ore di budget" },
  { key: "budgetQuantity", label: "Quantità di budget" },
  { key: "completedQuantity", label: "Quantità completata" },
  { key: "actualHours", label: "Ore rilevate" },
];
const format = (number: number) => new Intl.NumberFormat("it-IT", { maximumFractionDigits: 2 }).format(number);
export function OreVarianceCalc() {
  const id = useId();
  const [input, setInput] = useState<OreInputs>({ budgetHours: "120", budgetQuantity: "400", completedQuantity: "300", actualHours: "100" });
  const result = calculateOre(input);
  return <section id="calcolatore-ore" className="mt-8 rounded-2xl border border-line bg-bg-soft p-5 sm:p-7" aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`} className="text-xl font-bold text-navy-900">Confronto ore e quantità completata</h2>
    <p id={`${id}-help`} className="mt-3 text-sm leading-relaxed text-muted">Esempio illustrativo. Usa la stessa lavorazione, unità di quantità e data per i due riferimenti. Il calcolo avviene nel browser e non invia questi valori al sito.</p>
    <div className="mt-5 grid gap-4 sm:grid-cols-2">{fields.map(field => <div key={field.key}><label htmlFor={`${id}-${field.key}`} className="block text-sm font-semibold text-navy-900">{field.label}</label><input id={`${id}-${field.key}`} type="text" inputMode="decimal" value={input[field.key]} aria-describedby={`${id}-help`} onChange={event => setInput(previous => ({ ...previous, [field.key]: event.target.value }))} className="mt-2 w-full min-w-0 rounded-lg border border-line bg-white px-3 py-3 text-navy-900 focus:outline focus:outline-2 focus:outline-brand-600" /></div>)}</div>
    <div className="mt-6" aria-live="polite" aria-atomic="true">{result.ok ? <>
      <dl className="grid gap-4 sm:grid-cols-3">{[["Ore equivalenti", `${format(result.equivalentHours)} ore`], ["Scarto: rilevate meno equivalenti", `${format(result.differenceHours)} ore`], ["Scarto sulla base equivalente", result.percentage === null ? "Non definito: base zero" : `${format(result.percentage)}%`]].map(([label, value]) => <div key={label} className="min-w-0 rounded-xl border border-line bg-white p-4"><dt className="text-sm text-muted">{label}</dt><dd className="mt-2 break-words text-xl font-bold text-navy-900">{value}</dd></div>)}</dl>
      <p className="mt-4 text-sm leading-relaxed text-muted">Ore equivalenti = ore di budget ÷ quantità di budget × quantità completata. Lo scarto descrive una differenza rispetto alla base; non dimostra una causa né valuta da solo la squadra.</p>
    </> : <p className="rounded-xl border border-line bg-white p-4 text-sm text-navy-900">{result.message}</p>}</div>
  </section>;
}
