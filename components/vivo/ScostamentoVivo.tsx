"use client";

import { useVisto } from "./useVisto";

/**
 * Preventivo contro consuntivo, voce per voce: la barra di quanto hai speso cresce verso il segno
 * del preventivo; dove lo supera diventa rossa e compare lo sforamento. Cifre d'esempio.
 */
type Voce = { nome: string; prev: number; cons: number };
const DEFAULT: Voce[] = [
  { nome: "Materiali", prev: 100, cons: 96 },
  { nome: "Manodopera", prev: 100, cons: 118 },
  { nome: "Subappalti", prev: 100, cons: 100 },
  { nome: "Noli e mezzi", prev: 100, cons: 109 },
];

export default function ScostamentoVivo({
  voci = DEFAULT,
  titolo = "Preventivo contro speso, voce per voce",
  className = "",
}: { voci?: Voce[]; titolo?: string; className?: string }) {
  const [ref, fase] = useVisto<HTMLDivElement>(0.35);
  const zero = fase === "attesa";
  const via = fase === "via";
  const SCALA = 130; // il 100% del preventivo sta a 100/130 della barra
  const pos = (v: number) => `${(v / SCALA) * 100}%`;

  return (
    <div ref={ref} className={`min-w-0 rounded-[1.75rem] border border-line bg-white p-5 shadow-card sm:p-7 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">Commessa a metà lavori · Esempio</p>
      <p className="mt-1 font-display text-lg font-bold text-navy-900">{titolo}</p>

      <div className="mt-6 space-y-5">
        {voci.map((v, i) => {
          const delta = Math.round(((v.cons - v.prev) / v.prev) * 100);
          const oltre = delta > 0;
          const d = 0.2 + i * 0.35;
          return (
            <div key={v.nome}>
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-semibold text-navy-900">{v.nome}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold tabular-nums ${oltre ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-700"}`}
                  style={{ opacity: zero ? 0 : 1, transition: via ? `opacity .4s ease ${d + 1}s` : "none" }}
                >
                  {oltre ? `+${delta}% oltre` : delta < 0 ? `${delta}% sotto` : "in linea"}
                </span>
              </div>
              <div className="relative mt-2 h-3 rounded-full bg-bg-soft">
                {/* speso */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden rounded-full bg-brand-500"
                  style={{ width: zero ? "0%" : pos(v.cons), transition: via ? `width 1.1s cubic-bezier(.3,.7,.2,1) ${d}s` : "none" }}
                >
                  {oltre && (
                    <div
                      className="absolute inset-y-0 right-0 bg-red-500"
                      style={{
                        width: `${((v.cons - v.prev) / v.cons) * 100}%`,
                        opacity: zero ? 0 : 1,
                        transition: via ? `opacity .3s ease ${d + 0.8}s` : "none",
                      }}
                    />
                  )}
                </div>
                {/* segno del preventivo */}
                <div className="absolute -inset-y-1 w-0.5 rounded bg-navy-900" style={{ left: pos(v.prev) }} aria-hidden />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5"><span className="h-3 w-0.5 bg-navy-900" /> Preventivo</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-4 rounded-full bg-brand-500" /> Speso finora</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-4 rounded-full bg-red-500" /> Sforamento</span>
      </div>
    </div>
  );
}
