/* Illustrazioni SVG on-brand (nessuna dipendenza esterna, tema numeri/edilizia). */

const wrap = "w-full h-auto";

/** Analisi dei numeri: foglio/blueprint con grafico + lente. */
export function IllustrazioneControllo({ className = wrap }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 380" className={className} role="img" aria-label="Analisi dei numeri di cantiere">
      <defs>
        <linearGradient id="cg-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-bg-softer)" /><stop offset="100%" stopColor="#fff" />
        </linearGradient>
        <linearGradient id="cg-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-brand-600)" /><stop offset="100%" stopColor="var(--color-brand-400)" />
        </linearGradient>
      </defs>
      <rect width="480" height="380" rx="24" fill="url(#cg-sky)" />
      {/* foglio */}
      <g>
        <rect x="96" y="60" width="230" height="270" rx="14" fill="#fff" stroke="var(--color-navy-900)" strokeWidth="3" />
        <rect x="120" y="88" width="120" height="10" rx="5" fill="var(--color-brand-300)" />
        <rect x="120" y="110" width="90" height="8" rx="4" fill="var(--color-line)" />
        {/* mini bar chart */}
        <g>
          <line x1="120" y1="290" x2="302" y2="290" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
          {[46, 70, 60, 96, 120].map((h, i) => (
            <rect key={i} x={128 + i * 34} y={290 - h} width="22" height={h} rx="3" fill="url(#cg-bar)" />
          ))}
          <path d="M139 232 L173 214 L207 220 L241 190 L275 166" fill="none" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 8" />
        </g>
      </g>
      {/* lente */}
      <g>
        <circle cx="320" cy="250" r="52" fill="#fff" fillOpacity="0.35" stroke="var(--color-brand-600)" strokeWidth="7" />
        <line x1="356" y1="286" x2="392" y2="322" stroke="var(--color-brand-600)" strokeWidth="10" strokeLinecap="round" />
        <text x="320" y="258" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="26" fontWeight="600" fill="var(--color-navy-900)">%</text>
      </g>
    </svg>
  );
}

/** Crescita: barre che salgono + freccia + euro. */
export function IllustrazioneCrescita({ className = wrap }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 380" className={className} role="img" aria-label="Crescita dell'utile">
      <defs>
        <linearGradient id="gr-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-bg-softer)" /><stop offset="100%" stopColor="#fff" />
        </linearGradient>
      </defs>
      <rect width="480" height="380" rx="24" fill="url(#gr-sky)" />
      <line x1="70" y1="310" x2="410" y2="310" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
      {[60, 110, 160, 210].map((h, i) => (
        <rect key={i} x={92 + i * 70} y={310 - h} width="46" height={h} rx="6"
          fill={i === 3 ? "var(--color-navy-900)" : "var(--color-brand-400)"} />
      ))}
      {/* freccia crescita */}
      <path d="M100 250 L180 210 L250 224 L340 150" fill="none" stroke="var(--color-brand-600)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M318 146 L346 142 L344 172" fill="none" stroke="var(--color-brand-600)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* euro badge */}
      <circle cx="372" cy="98" r="34" fill="var(--color-brand-600)" />
      <text x="372" y="110" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="38" fontWeight="600" fill="#fff">€</text>
    </svg>
  );
}

/** Affiancamento/consulenza: due figure astratte + bolla con grafico. */
export function IllustrazioneAffiancamento({ className = wrap }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 380" className={className} role="img" aria-label="Affiancamento e consulenza">
      <defs>
        <linearGradient id="af-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-bg-softer)" /><stop offset="100%" stopColor="#fff" />
        </linearGradient>
      </defs>
      <rect width="480" height="380" rx="24" fill="url(#af-sky)" />
      {/* persona 1 */}
      <g>
        <circle cx="150" cy="170" r="34" fill="var(--color-brand-400)" />
        <path d="M100 300v-26a50 50 0 0 1 100 0v26z" fill="var(--color-brand-600)" />
      </g>
      {/* persona 2 */}
      <g>
        <circle cx="300" cy="180" r="30" fill="var(--color-navy-900)" />
        <path d="M256 300v-22a44 44 0 0 1 88 0v22z" fill="var(--color-navy-800)" />
      </g>
      {/* bolla con grafico */}
      <g>
        <rect x="300" y="66" width="130" height="92" rx="14" fill="#fff" stroke="var(--color-line)" strokeWidth="3" />
        <path d="M318 132 L346 116 L372 122 L410 92" fill="none" stroke="var(--color-brand-600)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {[0, 1, 2, 3].map((i) => <circle key={i} cx={318 + i * 30} cy={[132, 116, 122, 92][i]} r="4" fill="var(--color-navy-900)" />)}
        <path d="M330 158 l-10 14 -4 -14z" fill="#fff" stroke="var(--color-line)" strokeWidth="3" />
      </g>
      <line x1="70" y1="300" x2="410" y2="300" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
