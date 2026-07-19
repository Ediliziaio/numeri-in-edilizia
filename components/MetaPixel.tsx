"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/* Meta (Facebook) Pixel — caricato SOLO dopo il consenso "marketing" (GDPR).
   PageView iniziale + su ogni cambio pagina della navigazione SPA. */

// Parametri per attribuire gli eventi A QUESTO sito (Pixel condiviso tra più siti).
const SITE_PARAMS = { site: "numerinedilizia.com", site_name: site.name };

function marketingGranted(): boolean {
  try {
    const c = JSON.parse(localStorage.getItem("nie_consent") || "null");
    return !!(c && c.marketing);
  } catch {
    return false;
  }
}

function initPixel(id: string) {
  const w = window as unknown as { fbq?: (...a: unknown[]) => void };
  if (w.fbq) return;
  /* Snippet ufficiale Meta */
  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  w.fbq!("init", id);
  w.fbq!("track", "PageView", SITE_PARAMS);
  w.fbq!("trackCustom", "Pv_Numeriinedilizia", SITE_PARAMS);
}

export function MetaPixel() {
  const pathname = usePathname();
  const loaded = useRef(false);
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    const load = () => {
      if (!loaded.current && marketingGranted()) {
        initPixel(site.analytics.metaPixel);
        loaded.current = true;
        lastPath.current = window.location.pathname;
      }
    };
    load();
    window.addEventListener("nie:consent-updated", load);
    return () => window.removeEventListener("nie:consent-updated", load);
  }, []);

  useEffect(() => {
    const w = window as unknown as { fbq?: (...a: unknown[]) => void };
    if (loaded.current && lastPath.current !== pathname && typeof w.fbq === "function") {
      w.fbq("track", "PageView", SITE_PARAMS);
      w.fbq("trackCustom", "Pv_Numeriinedilizia", SITE_PARAMS);
      lastPath.current = pathname;
    }
  }, [pathname]);

  return null;
}
