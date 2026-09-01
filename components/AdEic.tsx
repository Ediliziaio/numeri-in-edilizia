import Image from "next/image";

/* Spot pubblicitario EdiliziaInCloud (banner ufficiali in /public/images/ads).
   Formato desktop largo + versione quadrata su mobile: l'immagine è cliccabile
   e porta a ediliziaincloud.com. rel="sponsored" = igiene SEO per link promozionali. */

const EIC_URL = "https://www.ediliziaincloud.com/";

const ADS = {
  // strip orizzontale sottile (2.9:1) — ideale dentro articoli e sezioni full-width
  leaderboard: { src: "/images/ads/eic-leaderboard.jpg", w: 2139, h: 735 },
  // hero-strip (2.4:1)
  hero: { src: "/images/ads/eic-hero.jpg", w: 1947, h: 808 },
  // feature 2:1
  wide: { src: "/images/ads/eic-wide.jpg", w: 1774, h: 887 },
  // quadrato (1.2:1) — ideale su mobile e colonne strette
  box: { src: "/images/ads/eic-box.jpg", w: 1374, h: 1145 },
} as const;

type AdFormat = keyof typeof ADS;

const ALT =
  "EdiliziaInCloud — il gestionale con AI per l'edilizia: aumenta margini, utili e guadagni. Prova gratuita di 31 giorni.";

export function AdEic({
  desktop = "leaderboard",
  mobile = "box",
  className = "",
  priority = false,
  label = "Sponsor",
}: {
  desktop?: AdFormat;
  mobile?: AdFormat;
  className?: string;
  priority?: boolean;
  label?: string;
}) {
  const d = ADS[desktop];
  const m = ADS[mobile];

  return (
    <aside className={`not-prose ${className}`} aria-label="Contenuto sponsorizzato">
      <a
        href={EIC_URL}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="group block overflow-hidden rounded-2xl border border-line bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        <span className="flex items-center justify-between px-4 pb-1 pt-2.5">
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted/70">
            {label}
          </span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-brand-600 transition group-hover:translate-x-0.5">
            ediliziaincloud.com →
          </span>
        </span>
        <Image
          src={d.src}
          alt={ALT}
          width={d.w}
          height={d.h}
          sizes="(min-width: 640px) 100vw, 1px"
          priority={priority}
          className="hidden h-auto w-full sm:block"
        />
        <Image
          src={m.src}
          alt={ALT}
          width={m.w}
          height={m.h}
          sizes="(max-width: 639px) 100vw, 1px"
          className="block h-auto w-full sm:hidden"
        />
      </a>
    </aside>
  );
}
