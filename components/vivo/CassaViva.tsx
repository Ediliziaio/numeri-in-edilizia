"use client";

import { useVisto } from "./useVisto";

/**
 * Il conto in banca mese per mese: senza piano la cassa va sotto zero mentre si aspetta il SAL;
 * con acconti, SAL frequenti e scadenze allineate resta sopra. Le linee si disegnano, il buco si accende.
 * Andamento d'esempio.
 */
const MESI = ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"];
const SENZA = [38, 22, 4, -20, -31, -14, 9, 20, 6, -9, 12, 26];
const CON = [38, 33, 27, 22, 19, 24, 31, 36, 33, 30, 37, 45];

const W = 360, H = 190, PX = 12, PT = 14, PB = 22;
const MIN = -40, MAX = 52;
const x = (i: number) => PX + (i * (W - PX * 2)) / (MESI.length - 1);
const y = (v: number) => PT + ((MAX - v) / (MAX - MIN)) * (H - PT - PB);
const linea = (pts: number[]) => pts.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");

export default function CassaViva({ className = "" }: { className?: string }) {
  const [ref, fase] = useVisto<HTMLDivElement>(0.35);
  const zero = fase === "attesa";
  const via = fase === "via";
  const y0 = y(0);
  const iMin = SENZA.indexOf(Math.min(...SENZA));
  // area sotto lo zero della linea senza piano
  const sotto = `${linea(SENZA.map((v) => Math.min(v, 0)))} L${x(SENZA.length - 1)},${y0} L${x(0)},${y0} Z`;
  const tr = (prop: string, dur: number, delay: number) => (via ? `${prop} ${dur}s cubic-bezier(.4,.1,.2,1) ${delay}s` : "none");

  return (
    <div ref={ref} className={`min-w-0 rounded-[1.75rem] border border-line bg-white p-5 shadow-card sm:p-7 ${className}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Saldo in banca · Esempio</p>
          <p className="mt-1 font-display text-lg font-bold text-navy-900">Stesso fatturato, due anni diversi</p>
        </div>
        <div className="flex flex-col gap-1 text-xs">
          <span className="inline-flex items-center gap-2 text-muted"><span className="h-0.5 w-5 rounded bg-red-400" /> Senza piano di cassa</span>
          <span className="inline-flex items-center gap-2 text-muted"><span className="h-1 w-5 rounded bg-brand-600" /> Con acconti e SAL governati</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-5 w-full overflow-visible" role="img"
        aria-label="Senza piano la cassa va sotto zero in primavera e in autunno; con il piano resta sempre sopra.">
        <defs>
          <linearGradient id="cassaRossa" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f87171" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f87171" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        {/* zona sotto zero */}
        <rect x={PX} y={y0} width={W - PX * 2} height={H - PB - y0} fill="#fef2f2" />
        <line x1={PX} x2={W - PX} y1={y0} y2={y0} stroke="var(--color-navy-900)" strokeWidth="1.5" strokeDasharray="3 4" opacity=".5" />
        <text x={W - PX} y={y0 - 5} textAnchor="end" fontSize="9" fill="var(--color-muted)">0 €</text>

        {/* il buco */}
        <path d={sotto} fill="url(#cassaRossa)" style={{ opacity: zero ? 0 : 1, transition: tr("opacity", 0.8, 1.6) }} />

        {/* senza piano */}
        <path d={linea(SENZA)} fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"
          pathLength={1} strokeDasharray={1} style={{ strokeDashoffset: zero ? 1 : 0, transition: tr("stroke-dashoffset", 1.8, 0) }} />

        {/* con il piano */}
        <path d={linea(CON)} fill="none" stroke="var(--color-brand-600)" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round"
          pathLength={1} strokeDasharray={1} style={{ strokeDashoffset: zero ? 1 : 0, transition: tr("stroke-dashoffset", 1.8, 2.2) }} />

        {/* etichetta sul punto più basso */}
        <g style={{ opacity: zero ? 0 : 1, transform: zero ? "translateY(6px)" : "none", transition: via ? "opacity .5s ease 1.9s, transform .5s ease 1.9s" : "none" }}>
          <circle cx={x(iMin)} cy={y(SENZA[iMin])} r="4.5" fill="#ef4444" stroke="#fff" strokeWidth="2" />
          {via && <circle cx={x(iMin)} cy={y(SENZA[iMin])} r="4.5" fill="none" stroke="#ef4444" strokeWidth="2" className="nie-impulso" />}
          <rect x={x(iMin) + 8} y={y(SENZA[iMin]) - 11} width="106" height="20" rx="10" fill="#ef4444" />
          <text x={x(iMin) + 61} y={y(SENZA[iMin]) + 3} textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">Buco: si aspetta il SAL</text>
        </g>
        <circle cx={x(CON.length - 1)} cy={y(CON[CON.length - 1])} r="5" fill="var(--color-navy-900)" stroke="#fff" strokeWidth="2"
          style={{ opacity: zero ? 0 : 1, transition: tr("opacity", 0.3, 3.9) }} />

        {MESI.map((m, i) => (
          <text key={i} x={x(i)} y={H - 6} textAnchor="middle" fontSize="9" fill="var(--color-muted)">{m}</text>
        ))}
      </svg>
      <p className="mt-3 text-sm text-muted">
        I soldi escono prima di entrare: materiali, stipendi e subappalti non aspettano il SAL.
        Chi guarda le scadenze ogni settimana il buco lo vede arrivare, e lo evita.
      </p>
    </div>
  );
}
