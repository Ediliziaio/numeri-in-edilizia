"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fasi di un'animazione che parte quando l'elemento arriva sullo schermo.
 *  - "ssr": prima del montaggio mostriamo i valori finali (HTML prerenderizzato leggibile e indicizzabile)
 *  - "attesa": montato ma non ancora visibile → valori a zero, pronti a partire
 *  - "via": visibile → l'animazione corre verso i valori finali
 * Con "riduci movimento" attivo resta sempre sui valori finali.
 */
export type Fase = "ssr" | "attesa" | "via";

export function useVisto<T extends Element>(soglia = 0.3) {
  const ref = useRef<T>(null);
  const [fase, setFase] = useState<Fase>("ssr");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setFase("attesa");
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          // due frame: il browser disegna prima lo stato a zero, poi parte la transizione
          raf = requestAnimationFrame(() => (raf = requestAnimationFrame(() => setFase("via"))));
        }
      },
      { threshold: soglia },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [soglia]);
  return [ref, fase] as const;
}

/** Numero che conta da 0 al valore quando la fase è "via". */
export function useConta(valore: number, fase: Fase, ms = 1300, ritardo = 0) {
  const [n, setN] = useState(valore);
  useEffect(() => {
    if (fase === "ssr") return setN(valore);
    if (fase === "attesa") return setN(0);
    let raf = 0;
    let t0 = 0;
    const passo = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min(Math.max((t - t0 - ritardo) / ms, 0), 1);
      const e = 1 - Math.pow(1 - p, 3);
      setN(valore * e);
      if (p < 1) raf = requestAnimationFrame(passo);
    };
    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }, [valore, fase, ms, ritardo]);
  return n;
}

/** Vero mentre l'elemento è sullo schermo (per le scene che girano in continuo). */
export function useSulloSchermo<T extends Element>() {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, on] as const;
}

export function fermo() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
