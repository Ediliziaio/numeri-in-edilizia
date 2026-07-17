# Numeri in Edilizia

Sito ufficiale di **Numeri in Edilizia** — formazione e consulenza di controllo di gestione per imprese edili.

Stack: **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4**.
Font: **Wix Madefor Display / Text** + **Lora** (via `next/font`). Colori dal logo del brand.

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build di produzione
npm start        # avvia la build
```

## Struttura

- `app/` — pagine (Home, Metodo, Percorsi, Casi studio, Chi siamo, Risorse, Contatti, Grazie)
- `app/risorse/[slug]/` — articoli blog (SEO/AEO)
- `components/` — Header, Footer, UI, JSON-LD, form contatti, mockup
- `lib/site.ts` — configurazione brand, nav, CTA
- `lib/articles.ts` — indice articoli
- `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt` — SEO/GEO/AEO

## SEO / GEO / AEO

- Metadata per pagina + Open Graph + canonical
- JSON-LD: Organization, WebSite, Service, FAQPage, BreadcrumbList, Article
- `robots.ts` con crawler AI ammessi (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…)
- `llms.txt` per l'indicizzazione dei motori generativi
- FAQ citabili (H2 in forma di domanda, risposte brevi)

## Da collegare

- Form contatti → endpoint/CRM (attualmente `components/ContactForm.tsx` reindirizza a `/grazie`)
- Dominio definitivo in `lib/site.ts` (`site.domain`)
- Pagine legali `/privacy` e `/cookie`
- Immagine Open Graph (`/opengraph-image`)
