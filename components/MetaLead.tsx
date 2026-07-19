"use client";

import { useEffect } from "react";

/* Evento Meta "Lead": da montare sulla pagina di conferma (/grazie).
   Fa track solo se il Pixel è caricato (quindi con consenso marketing).
   Attende fbq con un breve polling per gestire l'ordine di montaggio dei componenti. */

export function MetaLead() {
  useEffect(() => {
    let tries = 0;
    const fire = () => {
      const w = window as unknown as { fbq?: (...a: unknown[]) => void };
      if (typeof w.fbq === "function") {
        w.fbq("track", "Lead", { site: "numerinedilizia.com", site_name: "Numeri in Edilizia" });
        return true;
      }
      return false;
    };
    if (fire()) return;
    const id = setInterval(() => {
      tries += 1;
      if (fire() || tries > 40) clearInterval(id); // max ~4s
    }, 100);
    return () => clearInterval(id);
  }, []);

  return null;
}
