import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "./JsonLd";
import { CtaBand } from "./ui";
import { AdEic } from "./AdEic";
import { EicForm } from "./EicForm";
import type { Article } from "@/lib/articles";

export function ArticleShell({
  article,
  faq,
  children,
}: {
  article: Article;
  faq?: { q: string; a: string }[];
  children: React.ReactNode;
}) {
  const url = `${site.domain}/risorse/${article.slug}`;
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: article.h1 ?? article.title,
            description: article.description,
            url,
            datePublished: article.date,
            image: article.cover ? `${site.domain}${article.cover}` : undefined,
          }),
          breadcrumbSchema([
            { name: "Home", url: site.domain },
            { name: "Risorse", url: `${site.domain}/risorse` },
            { name: article.title, url },
          ]),
          ...(faq ? [faqSchema(faq)] : []),
        ]}
      />

      <article className="container-nie max-w-3xl py-16 sm:py-20">
        <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/risorse" className="hover:text-brand-600">Risorse</Link>
        </nav>

        <span className="eyebrow">{article.category}</span>
        <h1 className="mt-4 text-[2.2rem] sm:text-[3rem] font-extrabold leading-[1.05]">
          {article.h1 ?? article.title}
        </h1>
        <p className="mt-5 text-lg text-muted">{article.excerpt}</p>
        <p className="mt-4 text-sm text-muted">
          {article.readingTime} di lettura · aggiornato il{" "}
          {new Date(article.date).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        {article.cover && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <Image
              src={article.cover}
              alt={article.h1 ?? article.title}
              width={1200}
              height={630}
              sizes="(min-width: 768px) 768px, 100vw"
              priority
              className="h-auto w-full"
            />
          </div>
        )}

        <div className="prose-nie mt-10">{children}</div>

        {/* Spot EdiliziaInCloud — fine lettura, alta intenzione */}
        <AdEic className="mt-12" desktop="leaderboard" mobile="box" />

        {faq && (
          <section className="mt-14 border-t border-line pt-10">
            <h2 className="text-2xl font-bold text-navy-900">Domande frequenti</h2>
            <div className="mt-6 divide-y divide-line border-t border-line">
              {faq.map((it) => (
                <details key={it.q} className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-semibold text-navy-900 list-none">
                    {it.q}
                    <span className="text-brand-600 text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-2 text-muted leading-relaxed">{it.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Form richiesta analisi gratuita */}
        <section className="mt-14 rounded-2xl border border-line bg-bg-soft p-6 sm:p-8">
          <h2 className="text-center text-2xl font-bold text-navy-900">Richiedi la tua analisi gratuita</h2>
          <p className="mt-2 text-center text-muted">
            30 minuti sui numeri della tua impresa edile, senza impegno.
          </p>
          <div className="mt-6">
            <EicForm title="Richiedi la tua analisi gratuita" />
          </div>
        </section>
      </article>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}
