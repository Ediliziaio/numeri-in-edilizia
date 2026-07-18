import type { Metadata } from "next";
import Link from "next/link";
import { CookiePrefsButton } from "@/components/CookiePrefsButton";
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
            <strong>Cookie tecnici (necessari)</strong>: indispensabili al funzionamento del sito e al
            salvataggio delle tue preferenze sui cookie. Non richiedono consenso e sono sempre attivi.
          </li>
          <li>
            <strong>Cookie analitici</strong>: usiamo <strong>Google Analytics 4</strong> per
            raccogliere statistiche anonime e aggregate sull'utilizzo del sito (pagine viste,
            provenienza, dispositivo). Vengono installati <strong>solo dopo il tuo consenso</strong>.
          </li>
          <li>
            <strong>Cookie di marketing</strong>: eventuali strumenti di misurazione delle campagne o
            retargeting (es. Meta, Google Ads). Vengono attivati <strong>solo dopo il tuo consenso</strong>.
          </li>
        </ul>

        <h2>Consenso e Google Consent Mode</h2>
        <p>
          Al primo accesso ti mostriamo un banner per accettare, rifiutare o scegliere quali categorie
          di cookie attivare. Fino alla tua scelta, i cookie analitici e di marketing restano
          disattivati (Google Consent Mode v2, stato predefinito «negato»). Puoi modificare la tua
          decisione in qualsiasi momento:
        </p>
        <p className="not-prose my-6">
          <CookiePrefsButton className="btn btn-primary">Gestisci le preferenze cookie</CookiePrefsButton>
        </p>

        <h2>Come gestire i cookie dal browser</h2>
        <p>
          Oltre al nostro banner, puoi gestire o eliminare i cookie dalle impostazioni del tuo browser.
          La disabilitazione dei cookie tecnici può compromettere alcune funzionalità del sito.
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
