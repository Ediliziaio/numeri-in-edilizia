/* Illustrazioni SVG specifiche per mestiere (tema: numeri + edilizia). */

const wrap = "w-full h-auto";

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 480 380" className={wrap} role="img" aria-label={label}>
      <defs>
        <linearGradient id="st-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-bg-softer)" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="st-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-brand-600)" />
          <stop offset="100%" stopColor="var(--color-brand-400)" />
        </linearGradient>
      </defs>
      <rect width="480" height="380" rx="24" fill="url(#st-sky)" />
      {children}
    </svg>
  );
}

/** Mini grafico a barre + trend riutilizzato in ogni scena. */
function MiniChart({ x = 300, y = 300 }: { x?: number; y?: number }) {
  return (
    <g>
      <line x1={x - 20} y1={y} x2={x + 130} y2={y} stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
      {[34, 56, 78, 104].map((h, i) => (
        <rect key={i} x={x + i * 32} y={y - h} width="20" height={h} rx="3" fill="url(#st-bar)" />
      ))}
      <path
        d={`M${x + 8} ${y - 44} L${x + 40} ${y - 66} L${x + 72} ${y - 84} L${x + 106} ${y - 112}`}
        fill="none" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 7"
      />
    </g>
  );
}

/** Serramentista: finestra con anta aperta. */
export function IllustrazioneSerramenti() {
  return (
    <Frame label="Serramenti e infissi con margine in crescita">
      <g stroke="var(--color-navy-900)" strokeWidth="4" strokeLinejoin="round">
        <rect x="72" y="70" width="170" height="230" rx="8" fill="#fff" />
        <rect x="92" y="92" width="130" height="186" rx="4" fill="var(--color-brand-100)" />
        <line x1="157" y1="92" x2="157" y2="278" />
        <line x1="92" y1="185" x2="222" y2="185" />
      </g>
      {/* anta aperta */}
      <path d="M222 92 L268 70 L268 250 L222 278 Z" fill="var(--color-brand-400)" stroke="var(--color-navy-900)" strokeWidth="4" strokeLinejoin="round" />
      {/* maniglia */}
      <rect x="230" y="176" width="7" height="26" rx="3" fill="var(--color-navy-900)" />
      <line x1="52" y1="322" x2="290" y2="322" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
      <MiniChart x={310} y={322} />
    </Frame>
  );
}

/** Movimento terra: escavatore stilizzato. */
export function IllustrazioneMovimentoTerra() {
  return (
    <Frame label="Escavatore e costi orari sotto controllo">
      {/* corpo */}
      <g stroke="var(--color-navy-900)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <rect x="96" y="180" width="110" height="70" rx="10" fill="var(--color-brand-400)" />
        <rect x="120" y="140" width="62" height="46" rx="8" fill="#fff" />
        {/* braccio */}
        <path d="M206 200 L272 150 L316 196" fill="none" strokeWidth="9" />
        {/* benna */}
        <path d="M316 196 l30 26 -42 12 z" fill="var(--color-brand-600)" />
        {/* cingoli */}
        <rect x="86" y="252" width="132" height="38" rx="19" fill="var(--color-navy-900)" />
      </g>
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={112 + i * 27} cy={271} r="8" fill="#fff" />
      ))}
      {/* terra */}
      <path d="M60 322 q30 -18 66 0 q36 16 70 0" fill="none" stroke="var(--color-brand-300)" strokeWidth="5" strokeLinecap="round" />
      <line x1="52" y1="322" x2="290" y2="322" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
      <MiniChart x={310} y={322} />
    </Frame>
  );
}

/** Carpenteria metallica: travi IPE + scintille di saldatura. */
export function IllustrazioneCarpenteria() {
  return (
    <Frame label="Carpenteria metallica e margine per commessa">
      <g stroke="var(--color-navy-900)" strokeWidth="4" strokeLinejoin="round">
        {/* trave orizzontale a I */}
        <g fill="var(--color-brand-100)">
          <rect x="66" y="130" width="200" height="16" rx="3" />
          <rect x="146" y="146" width="40" height="70" rx="3" />
          <rect x="66" y="216" width="200" height="16" rx="3" />
        </g>
        {/* trave inclinata */}
        <path d="M96 300 L250 260" strokeWidth="9" strokeLinecap="round" stroke="var(--color-brand-600)" fill="none" />
        <path d="M110 262 L236 296" strokeWidth="9" strokeLinecap="round" stroke="var(--color-brand-400)" fill="none" />
      </g>
      {/* bulloni */}
      {[86, 246].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={138} r="4.5" fill="var(--color-navy-900)" />
          <circle cx={cx} cy={224} r="4.5" fill="var(--color-navy-900)" />
        </g>
      ))}
      {/* scintille */}
      <g stroke="var(--color-brand-500)" strokeWidth="3" strokeLinecap="round">
        <path d="M262 246 l14 -14M270 258 l18 -6M258 236 l6 -18" />
      </g>
      <line x1="52" y1="322" x2="290" y2="322" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
      <MiniChart x={310} y={322} />
    </Frame>
  );
}

/** Impiantisti: tubi, valvola e chiave inglese. */
export function IllustrazioneImpianti() {
  return (
    <Frame label="Impianti e margine per intervento">
      <g stroke="var(--color-navy-900)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* tubatura */}
        <path d="M70 110 h120 a24 24 0 0 1 24 24 v60 a24 24 0 0 0 24 24 h40" fill="none" strokeWidth="16" stroke="var(--color-brand-400)" />
        <path d="M70 110 h120 a24 24 0 0 1 24 24 v60 a24 24 0 0 0 24 24 h40" fill="none" strokeWidth="6" stroke="var(--color-brand-100)" />
        {/* giunti */}
        <rect x="98" y="96" width="18" height="28" rx="4" fill="var(--color-navy-900)" stroke="none" />
        <rect x="202" y="160" width="28" height="18" rx="4" fill="var(--color-navy-900)" stroke="none" />
        {/* valvola */}
        <circle cx="278" cy="218" r="20" fill="#fff" />
        <path d="M264 204 l28 28M292 204 l-28 28" strokeWidth="5" />
      </g>
      {/* chiave inglese */}
      <g transform="rotate(38 150 268)">
        <rect x="128" y="260" width="86" height="14" rx="7" fill="var(--color-navy-900)" />
        <circle cx="124" cy="267" r="17" fill="var(--color-navy-900)" />
        <circle cx="124" cy="267" r="8" fill="var(--color-bg-softer)" />
      </g>
      <line x1="52" y1="322" x2="290" y2="322" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
      <MiniChart x={310} y={322} />
    </Frame>
  );
}

/** Ristrutturazioni: casa con rullo e pennellata. */
export function IllustrazioneRistrutturazioni() {
  return (
    <Frame label="Ristrutturazione con margine per cantiere">
      <g stroke="var(--color-navy-900)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        {/* casa */}
        <path d="M80 190 L170 116 L260 190" fill="none" />
        <rect x="102" y="190" width="136" height="112" fill="#fff" />
        <rect x="122" y="226" width="34" height="42" rx="3" fill="var(--color-brand-100)" />
        <rect x="186" y="226" width="34" height="76" rx="3" fill="var(--color-brand-400)" />
      </g>
      {/* pennellata di rinnovo */}
      <path d="M96 208 q70 -26 148 0" fill="none" stroke="var(--color-brand-500)" strokeWidth="12" strokeLinecap="round" opacity="0.55" />
      {/* rullo */}
      <g transform="rotate(-24 268 130)">
        <rect x="240" y="118" width="58" height="24" rx="8" fill="var(--color-brand-600)" />
        <path d="M298 130 h22 v26" fill="none" stroke="var(--color-navy-900)" strokeWidth="5" strokeLinecap="round" />
        <rect x="314" y="156" width="10" height="30" rx="4" fill="var(--color-navy-900)" />
      </g>
      <line x1="52" y1="322" x2="290" y2="322" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
      <MiniChart x={310} y={322} />
    </Frame>
  );
}
