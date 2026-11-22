"use client";

import { useEffect, useState } from "react";
import { useSulloSchermo, fermo } from "./useVisto";

/**
 * La commessa in diretta: arrivano DDT, ore, SAL, noli, varianti.
 * Ogni movimento sposta costi, avanzamento e margine; quando la manodopera sfora scatta l'allarme.
 * Gira solo mentre è sullo schermo. Dati d'esempio.
 */
type Evento = {
  testo: string;
  importo: string;
  tipo: "costo" | "incasso" | "allarme" | "ok";
  margine: number; // margine a finire stimato dopo l'evento
  costi: number; // % del budget di costo già speso
  avanz: number; // % avanzamento lavori
};

const eventi = (materiale: string): Evento[] => [
  { testo: `DDT ${materiale} caricato`, importo: "− 1.240 €", tipo: "costo", margine: 15.8, costi: 34, avanz: 36 },
  { testo: "Ore squadra di martedì", importo: "− 860 €", tipo: "costo", margine: 15.1, costi: 39, avanz: 40 },
  { testo: "SAL 2 fatturato al cliente", importo: "+ 18.000 €", tipo: "incasso", margine: 15.1, costi: 39, avanz: 44 },
  { testo: "Nolo ponteggio, 2 settimane", importo: "− 420 €", tipo: "costo", margine: 14.6, costi: 42, avanz: 47 },
  { testo: "Manodopera oltre il previsto: +12%", importo: "allarme", tipo: "allarme", margine: 12.2, costi: 48, avanz: 49 },
  { testo: "Variante approvata e fatturata", importo: "+ 2.300 €", tipo: "ok", margine: 13.9, costi: 49, avanz: 53 },
];
const INIZIO = { margine: 16.4, costi: 31, avanz: 32 };

export default function CruscottoVivo({
  titolo = "Ristrutturazione Via dei Mille",
  materiale = "cemento e ferro",
  className = "",
}: { titolo?: string; materiale?: string; className?: string }) {
  const EVENTI = eventi(materiale);
  const [ref, on] = useSulloSchermo<HTMLDivElement>();
  const [k, setK] = useState(EVENTI.length); // prerender: tutti gli eventi già arrivati
  const [avviato, setAvviato] = useState(false);

  useEffect(() => {
    if (!on || fermo()) return;
    if (!avviato) {
      setAvviato(true);
      setK(0);
    }
    const t = setInterval(() => setK((x) => (x >= EVENTI.length + 2 ? 0 : x + 1)), 1700);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, avviato]);

  const n = Math.min(k, EVENTI.length);
  const stato = n === 0 ? INIZIO : EVENTI[n - 1];
  const allarme = EVENTI.slice(0, n).some((e) => e.tipo === "allarme");
  const visibili = EVENTI.slice(0, n).slice(-4).reverse();

  return (
    <div ref={ref} className={`min-w-0 rounded-[1.75rem] border border-line bg-white p-5 shadow-card sm:p-6 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Commessa in diretta · Esempio
          </p>
          <p className="mt-1 truncate font-display text-lg font-bold text-navy-900">{titolo}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[0.7rem] text-muted">Margine a finire</p>
          <p className={`font-serif text-3xl font-semibold tabular-nums transition-colors duration-500 ${allarme && stato.margine < 13 ? "text-red-500" : "text-navy-900"}`}>
            {stato.margine.toFixed(1).replace(".", ",")}%
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <Barra etichetta="Lavori eseguiti" valore={stato.avanz} colore="bg-brand-600" />
        <Barra etichetta="Budget di costo speso" valore={stato.costi} colore={stato.costi - stato.avanz > -2 && allarme ? "bg-red-400" : "bg-navy-700"} />
      </div>

      <ul className="relative mt-5 h-[13.5rem] space-y-2 overflow-hidden" aria-live="off">
        {visibili.map((e, i) => (
          <li
            key={e.testo}
            className={`nie-entra flex items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition-opacity duration-500 ${
              e.tipo === "allarme"
                ? "border-red-200 bg-red-50"
                : e.tipo === "ok"
                  ? "border-emerald-200 bg-emerald-50/60"
                  : "border-line bg-bg-soft"
            }`}
            style={{ opacity: 1 - i * 0.2 }}
          >
            <span className="flex min-w-0 items-center gap-2.5">
              <Punto tipo={e.tipo} />
              <span className={`truncate ${e.tipo === "allarme" ? "font-semibold text-red-700" : "text-navy-900"}`}>{e.testo}</span>
            </span>
            {e.tipo !== "allarme" && (
              <span className={`shrink-0 font-semibold tabular-nums ${e.tipo === "costo" ? "text-navy-900" : "text-emerald-600"}`}>{e.importo}</span>
            )}
          </li>
        ))}
        {n === 0 && <li className="px-1 pt-2 text-sm text-muted">In attesa dei movimenti di oggi…</li>}
      </ul>
      <p className="mt-3 text-xs text-muted">Ogni costo finisce sulla commessa giusta nel momento in cui succede: il margine lo vedi oggi, non a bilancio.</p>
    </div>
  );
}

function Barra({ etichetta, valore, colore }: { etichetta: string; valore: number; colore: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs">
        <span className="text-muted">{etichetta}</span>
        <span className="font-semibold tabular-nums text-navy-900">{valore}%</span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-bg-soft">
        <div className={`h-full rounded-full ${colore} transition-all duration-700 ease-out`} style={{ width: `${valore}%` }} />
      </div>
    </div>
  );
}

function Punto({ tipo }: { tipo: Evento["tipo"] }) {
  const c = tipo === "allarme" ? "bg-red-500" : tipo === "incasso" || tipo === "ok" ? "bg-emerald-500" : "bg-brand-500";
  return (
    <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${c} text-[0.7rem] font-bold text-white`}>
      {tipo === "allarme" ? "!" : tipo === "costo" ? "−" : "+"}
    </span>
  );
}
