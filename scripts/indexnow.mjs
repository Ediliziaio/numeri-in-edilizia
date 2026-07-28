#!/usr/bin/env node
/* IndexNow — notifica a Bing/Yandex le URL nuove o aggiornate.
   Bing alimenta anche il retrieval di ChatGPT: è la via più rapida per farsi
   scoprire da un motore mentre si aspetta la scansione di Google.

   Uso:
     node scripts/indexnow.mjs                 → invia tutte le URL della sitemap
     node scripts/indexnow.mjs /risorse/x /y   → invia solo i path indicati
*/

const HOST = "www.numerinedilizia.com";
const KEY = "8a890ad00f9502ae39867583b37f2148"; // deve combaciare con public/<KEY>.txt
const ORIGIN = `https://${HOST}`;

async function urlsFromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap non raggiungibile: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((p) => (p.startsWith("http") ? p : `${ORIGIN}${p.startsWith("/") ? p : `/${p}`}`))
    : await urlsFromSitemap();

  if (!urlList.length) {
    console.error("Nessuna URL da inviare.");
    process.exit(1);
  }

  // Verifica che la chiave sia davvero pubblicata: senza, IndexNow rifiuta tutto.
  const keyCheck = await fetch(`${ORIGIN}/${KEY}.txt`);
  if (!keyCheck.ok) {
    console.error(`Chiave non raggiungibile su ${ORIGIN}/${KEY}.txt (HTTP ${keyCheck.status}). Deploya prima il file.`);
    process.exit(1);
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList }),
  });

  // 200 = accettato, 202 = accettato in coda (chiave in validazione). Entrambi ok.
  if (res.status === 200 || res.status === 202) {
    console.log(`OK (HTTP ${res.status}) — inviate ${urlList.length} URL a IndexNow.`);
  } else {
    console.error(`Errore IndexNow: HTTP ${res.status} — ${await res.text()}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
