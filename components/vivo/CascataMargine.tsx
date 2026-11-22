"use client";

import { useEffect, useState } from "react";
import { useVisto, useConta, fermo } from "./useVisto";

/**
 * Cascata del margine: su 100 € di lavoro le voci di costo «mangiano» il ricavo una alla volta
 * e in fondo resta il margine. Poi passa da «Preventivo» a «A fine lavori» e si vede dove scappa.
 * Cifre d'esempio, segnate come tali.
 */
export type VoceCascata = { nome: string; prev: number; reale: number };
type Voce = VoceCascata;
const VOCI: Voce[] = [
  { nome: "Materiali", prev: 38, reale: 40 },
  { nome: "Manodopera", prev: 27, reale: 33 },
  { nome: "Noli e mezzi", prev: 8, reale: 9 },
  { nome: "Spese generali", prev: 13, reale: 13 },
];

type Scenario = "prev" | "reale";

function righe(sc: Scenario, voci: Voce[]) {
  let resta = 100;
  const out = voci.map((v) => {
    const val = v[sc];
    resta -= val;
    return { ...v, da: resta, val, delta: v.reale - v.prev };
  });
  return { out, margine: resta };
}

export default function CascataMargine({ className = "", voci = VOCI, titolo = "Dove va ogni euro della commessa" }: { className?: string; voci?: Voce[]; titolo?: string }) {
  const [ref, fase] = useVisto<HTMLDivElement>(0.35);
  const [sc, setSc] = useState<Scenario>("prev");
  const [toccato, setToccato] = useState(false);
  const { out, margine } = righe(sc, voci);
  const marginePrev = righe("prev", voci).margine;
  const zero = fase === "attesa";
  const via = fase === "via";
  const n = useConta(margine, fase, 900);
  const [mostrato, setMostrato] = useState(margine);

  // il numero del margine scorre anche quando si cambia scenario
  useEffect(() => {
    if (fase !== "via") return setMostrato(margine);
    if (fermo()) return setMostrato(margine);
    let raf = 0, t0 = 0;
    const da = mostrato;
    const passo = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / 900, 1);
      setMostrato(da + (margine - da) * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(passo);
    };
    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [margine, fase]);

  // dopo il primo giro passa da sola a «A fine lavori», poi decide chi guarda
  useEffect(() => {
    if (!via || toccato) return;
    const t = setTimeout(() => setSc("reale"), 4200);
    return () => clearTimeout(t);
  }, [via, toccato]);

  const sceglie = (s: Scenario) => {
    setToccato(true);
    setSc(s);
  };
  const numero = fase === "via" && !toccato && sc === "prev" ? n : mostrato;
  const calato = sc === "reale";

  return (
    <div ref={ref} className={`min-w-0 rounded-[1.75rem] border border-line bg-white p-5 shadow-card sm:p-7 ${className}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Esempio su 100 € di lavoro</p>
          <p className="mt-1 font-display text-lg font-bold text-navy-900">{titolo}</p>
        </div>
        <div className="inline-flex rounded-full border border-line bg-bg-soft p-1 text-xs font-semibold" role="tablist">
          {([["prev", "Preventivo"], ["reale", "A fine lavori"]] as const).map(([k, l]) => (
            <button
              key={k}
              role="tab"
              aria-selected={sc === k}
              onClick={() => sceglie(k)}
              className={`rounded-full px-3 py-1.5 transition-colors ${sc === k ? "bg-navy-900 text-white" : "text-muted hover:text-navy-900"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-2.5">
        {/* Ricavo */}
        <Riga nome="Ricavo della commessa" valore="100">
          <div
            className="absolute inset-y-0 left-0 rounded-md bg-brand-600"
            style={{ width: zero ? "0%" : "100%", transition: via ? "width .8s cubic-bezier(.2,.8,.2,1)" : "none" }}
          />
        </Riga>
        {out.map((r, i) => {
          const oltre = sc === "reale" && r.delta > 0;
          return (
            <Riga
              key={r.nome}
              nome={r.nome}
              valore={`−${r.val}`}
              extra={
                <span
                  className="ml-1.5 rounded-full bg-red-50 px-1.5 py-0.5 text-[0.65rem] font-bold text-red-600 transition-opacity duration-500"
                  style={{ opacity: oltre ? 1 : 0 }}
                  aria-hidden={!oltre}
                >
                  +{r.delta}
                </span>
              }
            >
              {/* traccia di quanto resta dopo questa voce */}
              <div
                className="absolute inset-y-0 left-0 rounded-md bg-brand-100/70"
                style={{
                  width: zero ? "0%" : `${r.da}%`,
                  transition: via ? `width .7s cubic-bezier(.2,.8,.2,1) ${zero ? 0 : 0.5 + i * 0.45}s` : "none",
                }}
              />
              {/* la voce che «cade» dal ricavo */}
              <div
                className={`absolute inset-y-0 rounded-md ${oltre ? "bg-red-400" : "bg-navy-700"}`}
                style={{
                  left: `${r.da}%`,
                  width: `${r.val}%`,
                  opacity: zero ? 0 : 1,
                  transform: zero ? "translateY(-140%)" : "translateY(0)",
                  transition: via
                    ? `left .8s cubic-bezier(.2,.8,.2,1), width .8s cubic-bezier(.2,.8,.2,1), background-color .5s, transform .6s cubic-bezier(.3,1.4,.5,1) ${0.5 + i * 0.45}s, opacity .3s ${0.5 + i * 0.45}s`
                    : "none",
                }}
              />
            </Riga>
          );
        })}
        {/* Margine */}
        <Riga nome="Margine che resta" valore={`${margine}`} forte>
          <div
            className={`absolute inset-y-0 left-0 rounded-md ${calato ? "bg-red-500" : "bg-emerald-500"}`}
            style={{
              width: zero ? "0%" : `${margine}%`,
              transition: via ? `width .8s cubic-bezier(.2,.8,.2,1) ${zero ? 0 : 0.5 + voci.length * 0.45}s, background-color .5s` : "none",
            }}
          />
        </Riga>
      </div>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-5">
        <div>
          <p className="text-xs text-muted">Margine sulla commessa</p>
          <p className={`font-serif text-4xl font-semibold tabular-nums transition-colors ${calato ? "text-red-500" : "text-navy-900"}`}>
            {Math.round(numero)}%
          </p>
        </div>
        <p className="max-w-[16rem] text-sm leading-snug text-muted">
          {calato ? (
            <>Ore in più e materiali rincarati: <strong className="text-navy-900">{marginePrev - margine} punti</strong> spariti senza che nessuno li vedesse.</>
          ) : (
            <>Sulla carta il lavoro tiene. Ma è andata così? Guarda <strong className="text-navy-900">A fine lavori</strong>.</>
          )}
        </p>
      </div>
    </div>
  );
}

function Riga({
  nome, valore, extra, forte, children,
}: { nome: string; valore: string; extra?: React.ReactNode; forte?: boolean; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[6.6rem_1fr_2.6rem] items-center gap-3 sm:grid-cols-[9rem_1fr_3rem]">
      <span className={`text-[0.8rem] leading-tight sm:text-sm ${forte ? "font-bold text-navy-900" : "text-muted"}`}>{nome}{extra}</span>
      <div className="relative h-6 overflow-visible rounded-md bg-bg-soft">{children}</div>
      <span className={`flex items-center justify-end text-right text-sm tabular-nums ${forte ? "font-bold text-navy-900" : "text-navy-900"}`}>
        {valore}
      </span>
    </div>
  );
}
