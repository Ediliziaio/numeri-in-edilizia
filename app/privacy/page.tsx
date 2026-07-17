import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Informativa sul trattamento dei dati personali del sito Numeri in Edilizia, ai sensi del Regolamento UE 2016/679 (GDPR).",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="container-nie max-w-3xl py-16 sm:py-20">
      <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-900">Privacy</span>
      </nav>
      <h1 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-tight">Privacy policy</h1>
      <p className="mt-4 text-muted">
        Informativa ai sensi degli artt. 13-14 del Regolamento UE 2016/679 (GDPR).
      </p>

      <div className="prose-nie mt-10">
        <h2>Titolare del trattamento</h2>
        <p>
          Il titolare del trattamento è {site.legalName}. Per qualsiasi richiesta relativa ai dati
          personali è possibile scrivere a <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Dati trattati e finalità</h2>
        <ul>
          <li>
            <strong>Dati di contatto</strong> (nome, email, telefono, nome dell'impresa e informazioni
            inserite nei form): utilizzati esclusivamente per ricontattarti in merito alla tua
            richiesta (es. analisi gratuita) e per l'eventuale invio della newsletter, se richiesta.
          </li>
          <li>
            <strong>Dati di navigazione</strong> (log tecnici, indirizzo IP): trattati per il
            funzionamento e la sicurezza del sito.
          </li>
        </ul>

        <h2>Base giuridica</h2>
        <p>
          Il trattamento si fonda sul consenso espresso al momento dell'invio dei form e sul
          legittimo interesse del titolare per la sicurezza e il funzionamento tecnico del sito.
        </p>

        <h2>Conservazione</h2>
        <p>
          I dati sono conservati per il tempo necessario a gestire la richiesta e comunque non oltre
          i termini previsti dalla normativa. L'iscrizione alla newsletter può essere revocata in
          qualsiasi momento tramite il link presente in ogni email.
        </p>

        <h2>Diritti dell'interessato</h2>
        <p>
          Ai sensi degli artt. 15-22 GDPR puoi richiedere in ogni momento accesso, rettifica,
          cancellazione, limitazione, portabilità e opposizione al trattamento scrivendo a{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. Hai inoltre diritto di proporre reclamo
          al Garante per la protezione dei dati personali.
        </p>

        <h2>Comunicazione a terzi</h2>
        <p>
          I dati non vengono venduti né ceduti a terzi. Possono essere trattati da fornitori tecnici
          (hosting, servizi email) nominati responsabili del trattamento, nei limiti delle finalità
          indicate.
        </p>
      </div>
    </article>
  );
}
