/* Grafici e illustrazioni SVG on-brand (nessuna dipendenza esterna). */

/** Donut che mostra una percentuale (es. margine). */
export function DonutStat({
  percent,
  label,
  sublabel,
  size = 148,
}: {
  percent: number;
  label?: string;
  sublabel?: string;
  size?: number;
}) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.min(Math.max(percent, 0), 100) / 100);
  return (
    <div className="inline-flex flex-col items-center">
      <svg width={size} height={size} viewBox="0 0 140 140" role="img" aria-label={`${percent}%`}>
        <circle cx="70" cy="70" r={r} fill="none" stroke="var(--color-brand-100)" strokeWidth="14" />
        <circle
          cx="70" cy="70" r={r} fill="none" stroke="var(--color-brand-600)" strokeWidth="14"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off}
          transform="rotate(-90 70 70)"
        />
        <text x="70" y="70" textAnchor="middle" dominantBaseline="central"
          fontFamily="var(--font-serif)" fontSize="30" fontWeight="600" fill="var(--color-navy-900)">
          {percent}%
        </text>
      </svg>
      {label && <div className="mt-2 font-display text-sm font-semibold text-navy-900">{label}</div>}
      {sublabel && <div className="text-xs text-muted">{sublabel}</div>}
    </div>
  );
}

/** Area chart di crescita (es. utile nel tempo). */
export function AreaTrend({
  points = [24, 30, 28, 40, 46, 58, 64, 78],
  className = "",
  labels,
}: {
  points?: number[];
  className?: string;
  labels?: string[];
}) {
  const W = 320, H = 150, pad = 8;
  const max = Math.max(...points) * 1.12;
  const step = (W - pad * 2) / (points.length - 1);
  const xy = points.map((p, i) => [pad + i * step, H - pad - (p / max) * (H - pad * 2)] as const);
  const line = xy.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${xy[xy.length - 1][0].toFixed(1)},${H - pad} L${xy[0][0].toFixed(1)},${H - pad} Z`;
  return (
    <div className={className}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Andamento in crescita">
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-400)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-brand-400)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1={pad} x2={W - pad} y1={H * g} y2={H * g} stroke="var(--color-line)" strokeWidth="1" />
        ))}
        <path d={area} fill="url(#areaFill)" />
        <path d={line} fill="none" stroke="var(--color-brand-600)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {xy.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === xy.length - 1 ? 5 : 3}
            fill={i === xy.length - 1 ? "var(--color-navy-900)" : "#fff"}
            stroke="var(--color-brand-600)" strokeWidth="2" />
        ))}
      </svg>
      {labels && (
        <div className="mt-1 flex justify-between px-1 text-[0.65rem] text-muted">
          {labels.map((l, i) => <span key={i}>{l}</span>)}
        </div>
      )}
    </div>
  );
}

/** Barre a confronto Prima/Dopo. */
export function CompareBars({
  before, after, unit = "%",
}: { before: number; after: number; unit?: string }) {
  const max = Math.max(before, after) * 1.2 || 1;
  const bars = [
    { label: "Prima", v: before, color: "var(--color-brand-300)" },
    { label: "Dopo", v: after, color: "var(--color-brand-600)" },
  ];
  return (
    <div className="flex items-end gap-6">
      {bars.map((b) => (
        <div key={b.label} className="flex flex-1 flex-col items-center">
          <span className="mb-2 font-serif text-xl font-semibold text-navy-900">{b.v}{unit}</span>
          <div className="flex h-28 w-full items-end">
            <div className="w-full rounded-t-lg" style={{ height: `${(b.v / max) * 100}%`, background: b.color }} />
          </div>
          <span className="mt-2 text-xs text-muted">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Illustrazione: skyline di edifici + grafico in crescita (immagine di sezione). */
export function SiteScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" className={className} role="img" aria-label="Impresa edile e numeri in crescita">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-bg-softer)" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="barG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-brand-500)" />
          <stop offset="100%" stopColor="var(--color-brand-600)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="480" height="360" rx="24" fill="url(#sky)" />
      {/* edifici */}
      <g stroke="var(--color-navy-900)" strokeWidth="3" fill="#fff" strokeLinejoin="round">
        <path d="M60 300V150l46-30v180" />
        <rect x="106" y="120" width="70" height="180" />
        <rect x="176" y="180" width="54" height="120" />
      </g>
      {/* finestre */}
      <g fill="var(--color-brand-300)" opacity="0.7">
        {Array.from({ length: 8 }).map((_, i) => {
          const r = Math.floor(i / 2), c = i % 2;
          return <rect key={i} x={120 + c * 26} y={140 + r * 34} width="14" height="18" rx="2" />;
        })}
      </g>
      {/* gru */}
      <g stroke="var(--color-brand-600)" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M250 300V80M250 90h120M250 100l-40 0M330 90v22" />
      </g>
      {/* grafico a barre in crescita */}
      <g>
        <line x1="270" y1="300" x2="440" y2="300" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
        {[40, 66, 92, 128].map((h, i) => (
          <rect key={i} x={286 + i * 40} y={300 - h} width="26" height={h} rx="4" fill="url(#barG)" />
        ))}
        <path d="M292 250 L332 224 L372 196 L412 160" fill="none" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 8" />
      </g>
      {/* base */}
      <line x1="40" y1="300" x2="250" y2="300" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
