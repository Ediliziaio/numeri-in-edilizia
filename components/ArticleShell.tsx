import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema, howToSchema } from "./JsonLd";
import { CtaBand } from "./ui";
import { AdEic } from "./AdEic";
import { EicForm } from "./EicForm";
import { articles, type Article } from "@/lib/articles";

// Articoli correlati: stessa categoria prima, poi gli altri, i più recenti in testa.
// Deterministico (niente random) → i 7 articoli nuovi (più recenti) ricevono link interni ovunque.
function relatedArticles(current: Article, n = 3): Article[] {
  const others = articles.filter((a) => a.slug !== current.slug);
  const byDateDesc = (a: Article, b: Article) => (a.date < b.date ? 1 : -1);
  const sameCat = others.filter((a) => a.category === current.category).sort(byDateDesc);
  const rest = others.filter((a) => a.category !== current.category).sort(byDateDesc);
  return [...sameCat, ...rest].slice(0, n);
}

export function ArticleShell({
  article,
  faq,
  howTo,
  children,
}: {
  article: Article;
  faq?: { q: string; a: string }[];
  /** Guide procedurali: emette anche lo schema HowTo. */
  howTo?: { name: string; steps: { name: string; text: string }[] };
  children: React.ReactNode;
}) {
  const url = `${site.domain}/risorse/${article.slug}`;
  const related = relatedArticles(article);
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
          ...(howTo
            ? [howToSchema({ name: howTo.name, description: article.description, url, steps: howTo.steps })]
            : []),
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
          di{" "}
          <Link href="/chi-sono" rel="author" className="font-semibold text-navy-900 hover:text-brand-600">
            {site.author}
          </Link>{" "}
          ·{" "}
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

      {related.length > 0 && (
        <section className="container-nie max-w-5xl pb-4">
          <h2 className="text-2xl font-bold text-navy-900">Continua a leggere</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/risorse/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white card-hover"
              >
                <div className="aspect-[1200/630] overflow-hidden border-b border-line bg-navy-900">
                  {a.cover && (
                    <Image
                      src={a.cover}
                      alt={a.title}
                      width={1200}
                      height={630}
                      sizes="(min-width: 640px) 300px, 100vw"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold text-brand-600">{a.category}</span>
                  <h3 className="mt-2 font-bold leading-snug text-navy-900 group-hover:text-brand-700">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBand />
      <div className="h-20" />
    </>
  );
}
