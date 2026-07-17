import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "./JsonLd";
import { CtaBand } from "./ui";
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

        <div className="prose-nie mt-10">{children}</div>

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
      </article>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}
