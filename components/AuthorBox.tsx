import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Author box a fine articolo.
 * È il segnale VISIBILE che accompagna l'author @id nello schema: dice a Google,
 * ai lettori e agli LLM che dietro i contenuti c'è una persona reale, la stessa
 * su tutti i domini dell'ecosistema. Il link esce verso florinandriciuc.com,
 * dove vive l'entità: l'autorità deve fluire verso la persona.
 */
export function AuthorBox({ className = "" }: { className?: string }) {
  return (
    <aside className={`rounded-2xl border border-line bg-bg-soft p-6 sm:p-8 ${className}`}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <a
          href={site.authorUrl}
          rel="author noopener"
          target="_blank"
          className="shrink-0"
          aria-label={`${site.author} — chi è`}
        >
          <Image
            src="/florin.jpg"
            alt={site.author}
            width={96}
            height={96}
            className="h-24 w-24 rounded-2xl object-cover"
          />
        </a>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Scritto da</p>
          <h2 className="mt-1 font-display text-xl font-bold text-navy-900">
            <a href={site.authorUrl} rel="author noopener" target="_blank" className="hover:text-brand-600">
              {site.author}
            </a>
          </h2>
          <p className="mt-2 text-[0.975rem] leading-relaxed text-muted">{site.authorBio}</p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <a href={site.authorUrl} rel="author noopener" target="_blank" className="text-brand-600 hover:underline">
              Chi è {site.author} →
            </a>
            {site.authorSameAs
              .filter((u) => u.includes("linkedin"))
              .map((u) => (
                <a key={u} href={u} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand-600">
                  LinkedIn
                </a>
              ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
