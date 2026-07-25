"use client";

/* Primitivi condivisi dei calcolatori (/strumenti).
   Formattazione numerica deterministica (niente Intl): evita mismatch di hydration
   tra server e client, che con toLocaleString può capitare su ICU diversi. */

export function nf(n: number, dec = 0): string {
  if (!Number.isFinite(n)) return "—";
  const fixed = Math.abs(n).toFixed(dec);
  const [int, frac] = fixed.split(".");
  const sep = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${n < 0 ? "−" : ""}${sep}${frac ? `,${frac}` : ""}`;
}

export function toNum(v: string): number {
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

export function CalcField({
  id,
  label,
  value,
  onChange,
  suffix = "€",
  hint,
  step = "any",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  hint?: string;
  step?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900">
        {label}
      </label>
      <div className="mt-1.5 flex items-center rounded-xl border border-line bg-white transition focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min="0"
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl bg-transparent px-4 py-3 text-navy-900 outline-none"
        />
        <span className="px-4 text-sm font-semibold text-muted">{suffix}</span>
      </div>
      {hint && <p className="mt-1.5 text-xs text-muted leading-snug">{hint}</p>}
    </div>
  );
}

export function CalcResult({
  label,
  value,
  hint,
  tone = "normal",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "normal" | "highlight";
}) {
  const highlight = tone === "highlight";
  return (
    <div
      className={`rounded-2xl p-5 ${
        highlight ? "bg-navy-900 text-white" : "border border-line bg-bg-soft"
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-wider ${highlight ? "text-brand-300" : "text-muted"}`}>
        {label}
      </p>
      <p className={`stat-num mt-2 text-2xl sm:text-3xl ${highlight ? "!text-white" : ""}`}>{value}</p>
      {hint && (
        <p className={`mt-2 text-xs leading-snug ${highlight ? "text-brand-100/80" : "text-muted"}`}>{hint}</p>
      )}
    </div>
  );
}

export function CalcCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-card sm:p-8">
      <h2 className="font-display text-xl font-bold text-navy-900">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  );
}
