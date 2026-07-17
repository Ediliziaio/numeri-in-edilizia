export function Logo({
  variant = "dark",
  withWordmark = true,
  className = "",
}: {
  variant?: "dark" | "light";
  withWordmark?: boolean;
  className?: string;
}) {
  const ink = variant === "dark" ? "#0f2440" : "#ffffff";
  const sub = variant === "dark" ? "#2c5aa0" : "#8fb2e0";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Numeri in Edilizia">
      <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* palazzo / edificio */}
        <path
          d="M22 82V30l16-12v64"
          stroke={ink}
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d="M14 82h72" stroke={ink} strokeWidth="4" strokeLinecap="round" />
        {/* barre del grafico */}
        <rect x="46" y="60" width="9" height="22" rx="1.5" fill={sub} />
        <rect x="59" y="48" width="9" height="34" rx="1.5" fill={sub} />
        <rect x="72" y="36" width="9" height="46" rx="1.5" fill={ink} />
      </svg>
      {withWordmark && (
        <span className="leading-none">
          <span
            className="block font-display text-[1.05rem] font-bold tracking-tight"
            style={{ color: ink }}
          >
            Numeri
          </span>
          <span className="block font-display text-[0.95rem] font-semibold" style={{ color: sub }}>
            in Edilizia
          </span>
        </span>
      )}
    </span>
  );
}
