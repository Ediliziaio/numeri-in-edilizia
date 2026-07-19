"use client";

import { useEffect } from "react";

/* Evento Meta "Lead": da montare sulla pagina di conferma (/grazie).
   Fa track solo se il Pixel è già caricato (quindi con consenso marketing). */

export function MetaLead() {
  useEffect(() => {
    const w = window as unknown as { fbq?: (...a: unknown[]) => void };
    if (typeof w.fbq === "function") w.fbq("track", "Lead");
  }, []);
  return null;
}
