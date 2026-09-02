import Link from "next/link";
import { Logo } from "./Logo";
import { EicLogo } from "./EicLogo";
import { CookiePrefsButton } from "./CookiePrefsButton";
import { IconExternal } from "./Icons";
import { nav, site } from "@/lib/site";
import { settori } from "@/lib/settori";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-24">
      <div className="container-nie py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.85fr_1fr_1.05fr_0.95fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-brand-100/80 text-[0.975rem] leading-relaxed">
              Aiutiamo l'imprenditore edile a leggere i propri numeri e a trasformare il fatturato
              in utile reale. Metodo pratico di controllo di gestione, pensato per il cantiere.
            </p>
            <Link href="/contatti" className="btn btn-primary mt-7">
              {site.cta.primaryLabel}
            </Link>
            <a
              href={site.partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition hover:border-brand-300/40"
            >
              <span>
                <span className="block text-xs text-brand-300">In collaborazione con</span>
                <span className="mt-1 block"><EicLogo variant="onDark" iconSize={28} /></span>
              </span>
              <IconExternal className="ml-auto h-4 w-4 text-brand-300" />
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-300 mb-4">
              Naviga
            </h4>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-100/80 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contatti" className="text-brand-100/80 hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-300 mb-4">
              Settori
            </h4>
            <ul className="space-y-3">
              {settori.map((s) => (
                <li key={s.slug}>
                  <Link href={`/settori/${s.slug}`} className="text-brand-100/80 hover:text-white transition-colors">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-300 mb-4">
              Strumenti
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/strumenti/calcolo-margine-commessa", label: "Calcolo margine di commessa" },
                { href: "/strumenti/calcolo-costo-orario-manodopera", label: "Calcolo costo orario" },
                { href: "/strumenti/calcolo-break-even-edile", label: "Calcolo break even" },
                { href: "/strumenti/template-budget-cantiere", label: "Template budget cantiere" },
                { href: "/glossario", label: "Glossario" },
                { href: "/strumenti", label: "Tutti gli strumenti" },
              ].map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="text-brand-100/80 hover:text-white transition-colors">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-300 mb-4">
              Contatti
            </h4>
            <ul className="space-y-3 text-brand-100/80">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a href={site.social.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
                <a href={site.social.instagram} className="hover:text-white transition-colors">Instagram</a>
                <a href={site.social.youtube} className="hover:text-white transition-colors">YouTube</a>
              </li>
              {/* Link all'entità fondatore: anchor branded costante ("Florin Andriciuc"),
                  su TUTTE le pagine. È il segnale che consolida la persona come entità
                  e fa fluire autorità verso il suo dominio. */}
              <li className="pt-3 text-sm">
                Un progetto di{" "}
                <a
                  href={site.authorUrl}
                  rel="author"
                  className="font-semibold text-white hover:text-brand-300 transition-colors"
                >
                  {site.author}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-brand-100/60">
          <p>© {new Date().getFullYear()} {site.legalName}. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookie" className="hover:text-white transition-colors">Cookie</Link>
            <CookiePrefsButton className="hover:text-white transition-colors">Preferenze cookie</CookiePrefsButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
