"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { SITE_ANALYTICS_CONFIG } from "@/lib/analytics-config";

/* Existing Meta Pixel, only after the site's marketing consent. */

// Parametri per attribuire gli eventi A QUESTO sito (Pixel condiviso tra più siti).
const SITE_PARAMS = { site: "numerinedilizia.com", site_name: site.name };

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
  w.fbq!("set", "autoConfig", false, id);
  w.fbq!("consent", "grant");
  w.fbq!("init", id);
  w.fbq!("track", "PageView", SITE_PARAMS);
  w.fbq!("trackCustom", "Pv_Numeriinedilizia", SITE_PARAMS);
}

export function MetaPixel() {
  const pathname = usePathname();
  const loaded = useRef(false);
  const allowed = useRef(false);
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    const sync = (event?: Event) => {
      let marketing = false;
      const detail = (event as CustomEvent<{ marketing?: unknown }> | undefined)?.detail;
      try { marketing = JSON.parse(localStorage.getItem("nie_consent") || "null")?.marketing === true; } catch { /* No implicit consent. */ }
      if (detail?.marketing === false) marketing = false;
      allowed.current = marketing && window.location.protocol === "https:" && SITE_ANALYTICS_CONFIG.allowedHosts.includes(window.location.hostname);
      const w = window as unknown as { fbq?: (...a: unknown[]) => void };
      if (!allowed.current) { if (loaded.current) w.fbq?.("consent", "revoke"); return; }
      if (!loaded.current) {
        initPixel(site.analytics.metaPixel);
        loaded.current = true;
        lastPath.current = window.location.pathname;
      } else w.fbq?.("consent", "grant");
    };
    sync();
    window.addEventListener("nie:consent-updated", sync);
    const stored = (event: StorageEvent) => { if (event.key === "nie_consent" || event.key === null) sync(); };
    window.addEventListener("storage", stored);
    return () => { window.removeEventListener("nie:consent-updated", sync); window.removeEventListener("storage", stored); };
  }, []);

  useEffect(() => {
    const w = window as unknown as { fbq?: (...a: unknown[]) => void };
    if (allowed.current && loaded.current && lastPath.current !== pathname && typeof w.fbq === "function") {
      w.fbq("track", "PageView", SITE_PARAMS);
      w.fbq("trackCustom", "Pv_Numeriinedilizia", SITE_PARAMS);
      lastPath.current = pathname;
    }
  }, [pathname]);

  return null;
}
