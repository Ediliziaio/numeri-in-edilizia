import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "./JsonLd";
import { site } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
  path,
  visual,
  cta = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  crumb: string;
  /** Path canonico della pagina (es. "/metodo"): se presente emette il breadcrumb JSON-LD.
   *  Ometterlo sulle pagine che emettono già un breadcrumb proprio (evita duplicati). */
  path?: string;
  /** Illustrazione opzionale a destra dell'hero. */
  visual?: React.ReactNode;
  cta?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg-soft">
      {path && (
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", url: site.domain },
            { name: crumb, url: `${site.domain}${path}` },
          ])}
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-300/25 blur-3xl"
      />
      <div className="container-nie relative py-16 sm:py-24">
        <div className={visual ? "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]" : ""}>
          <div>
            <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-navy-900">{crumb}</span>
            </nav>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-4 max-w-3xl text-[2.4rem] sm:text-[3.4rem] font-extrabold leading-[1.04]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">{intro}</p>
            {cta && (
              <div className="mt-8">
                <Link href="/contatti" className="btn btn-primary">
                  {site.cta.primaryLabel}
                </Link>
              </div>
            )}
          </div>
          {visual && (
            <div className="reveal hidden lg:block">
              <div className="rounded-[1.75rem] border border-line bg-white p-4 shadow-card">
                {visual}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
