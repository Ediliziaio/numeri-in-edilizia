"use client";

import { useVisto, useConta } from "./useVisto";

/** Un numero scritto come testo ("80%", "-9%", "90gg", "1,5 M€") che conta da zero quando compare. */
export default function NumeroVivo({ value, ms = 1400 }: { value: string; ms?: number }) {
  const m = value.match(/^(\D*?)(-?\d+(?:[.,]\d+)?)(.*)$/);
  const [ref, fase] = useVisto<HTMLSpanElement>(0.5);
  const num = m ? parseFloat(m[2].replace(",", ".")) : 0;
  const decimali = m && /[.,]/.test(m[2]) ? m[2].split(/[.,]/)[1].length : 0;
  const n = useConta(num, fase, ms);
  if (!m) return <span>{value}</span>;
  const testo = decimali ? n.toFixed(decimali).replace(".", m[2].includes(",") ? "," : ".") : String(Math.round(n));
  return (
    <span ref={ref} aria-label={value} className="tabular-nums">
      <span aria-hidden>{m[1]}{testo}{m[3]}</span>
    </span>
  );
}
