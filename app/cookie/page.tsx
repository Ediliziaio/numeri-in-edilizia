import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Informativa sull'uso dei cookie del sito Numeri in Edilizia: quali cookie utilizziamo e come gestirli.",
  alternates: { canonical: "/cookie" },
  robots: { index: false, follow: true },
};

export default function CookiePage() {
  return (
    <article className="container-nie max-w-3xl py-16 sm:py-20">
      <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-900">Cookie</span>
      </nav>
      <h1 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-tight">Cookie policy</h1>
      <p className="mt-4 text-muted">Informativa sull'utilizzo dei cookie su questo sito.</p>

      <div className="prose-nie mt-10">
        <h2>Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti salvano sul tuo dispositivo per far
          funzionare il sito o raccogliere informazioni sull'utilizzo.
        </p>

        <h2>Cookie utilizzati da questo sito</h2>
        <ul>
          <li>
            <strong>Cookie tecnici</strong>: necessari al funzionamento del sito (es. preferenze di
            navigazione). Non richiedono consenso.
          </li>
          <li>
            <strong>Cookie di terze parti</strong>: al momento questo sito non utilizza cookie di
            profilazione o di marketing. Qualora venissero introdotti strumenti di analisi o
            marketing, questa pagina sarà aggiornata e sarà richiesto il consenso preventivo.
          </li>
        </ul>

        <h2>Come gestire i cookie</h2>
        <p>
          Puoi gestire o disabilitare i cookie dalle impostazioni del tuo browser. La disabilitazione
          dei cookie tecnici può compromettere alcune funzionalità del sito.
        </p>

        <h2>Contatti</h2>
        <p>
          Per qualsiasi domanda su questa informativa puoi scrivere a{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. Per il trattamento dei dati personali
          consulta la <Link href="/privacy">privacy policy</Link>.
        </p>
      </div>
    </article>
  );
}
