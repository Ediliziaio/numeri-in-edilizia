"use client";
import { calculationCsv, type CalculationRow } from "@/lib/management-calculators";
export function CalculationDownload({ rows, filename }: { rows: readonly CalculationRow[]; filename: string }) {
  function download() {
    const url = URL.createObjectURL(new Blob([calculationCsv(rows)], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = filename;
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <div className="rounded-2xl border border-line bg-white p-5"><button type="button" onClick={download} className="btn btn-ghost w-full">Scarica dati e risultato CSV</button><p className="mt-3 text-xs leading-relaxed text-muted">Il file include le ipotesi inserite e il risultato. Viene creato nel browser, senza inviare questi dati al sito. È una simulazione gestionale, da verificare sui documenti dell’impresa.</p></div>;
}
