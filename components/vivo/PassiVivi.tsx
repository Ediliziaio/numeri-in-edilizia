"use client";

/**
 * PassiVivi — i passi di un percorso che si accendono uno alla volta, da soli.
 * Il passo acceso si alza e ha una barra che avanza; quelli già fatti prendono
 * la spunta. Col mouse (o toccando) se ne sceglie uno e il giro si ferma per
 * qualche secondo. Parte solo quando è sullo schermo.
 *
 * Su telefono (.scorri-mobile) i passi stanno in una fila da scorrere che segue
 * da sola il passo acceso: si muove la fila, mai la pagina.
 * Rispetta prefers-reduced-motion (tutto fermo).
 */
import { useEffect, useRef, useState } from "react";

export type Passo = { n: string; title: string; text: string };

const CSS = `
@keyframes pv-bar { from { width: 0 } to { width: 100% } }
.pv-bar { animation: pv-bar var(--pv-dur, 3s) linear forwards; }
@media (prefers-reduced-motion: reduce) { .pv-bar { animation: none !important; } }
`;

const adesso = () => Date.now();

export default function PassiVivi({ steps, ms = 3400 }: { steps: Passo[]; ms?: number }) {
  const n = steps.length;
  const fila = useRef<HTMLOListElement>(null);
  const [visto, setVisto] = useState(false);
  const [attivo, setAttivo] = useState(-1);
  const pausaFino = useRef(0);

  useEffect(() => {
    const el = fila.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => setVisto(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visto) return;
    setAttivo((v) => (v < 0 ? 0 : v));
    const id = window.setInterval(() => {
      if (adesso() < pausaFino.current) return;
      setAttivo((v) => (v + 1) % n);
    }, ms);
    return () => window.clearInterval(id);
  }, [visto, n, ms]);

  useEffect(() => {
    const el = fila.current;
    if (!el || attivo < 0 || el.scrollWidth <= el.clientWidth + 4) return;
    const figlio = el.querySelectorAll<HTMLElement>(":scope > li")[attivo];
    if (!figlio) return;
    const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    el.scrollTo({ left: figlio.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft - pad, behavior: "smooth" });
  }, [attivo]);

  const scegli = (k: number) => {
    pausaFino.current = adesso() + 9000;
    setAttivo(k);
  };

  const col = n === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : n === 2 ? "sm:grid-cols-2" : "md:grid-cols-3";

  return (
    <ol ref={fila} onTouchStart={() => (pausaFino.current = adesso() + 9000)} className={`scorri-mobile grid gap-5 ${col}`}>
      <style>{CSS}</style>
      {steps.map((s, i) => {
        const on = i === attivo;
        const fatto = attivo >= 0 && i < attivo;
        return (
          <li
            key={s.n + s.title}
            onPointerEnter={(e) => e.pointerType === "mouse" && scegli(i)}
            onClick={() => scegli(i)}
            className={`relative overflow-hidden rounded-[1.5rem] border p-6 transition-all duration-500 ${
              on ? "-translate-y-1 border-brand-400 bg-white shadow-[0_18px_40px_-20px_rgba(44,90,160,0.55)]" : "border-line bg-white/70"
            }`}
          >
            <div
              className={`grid h-14 w-14 place-items-center rounded-2xl font-display text-lg font-bold transition-colors duration-500 ${
                on ? "bg-brand-600 text-white" : fatto ? "bg-brand-100 text-brand-700" : "bg-navy-900 text-white"
              }`}
            >
              {fatto ? (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              ) : (
                s.n
              )}
            </div>
            <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
            <p className="mt-2 text-muted leading-relaxed">{s.text}</p>
            <span className="absolute inset-x-0 bottom-0 h-[3px] bg-bg-softer">
              {on && <span key={`b${attivo}`} className="pv-bar block h-full bg-brand-600" style={{ ["--pv-dur" as string]: `${ms}ms` }} />}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
