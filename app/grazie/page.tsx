import type { Metadata } from "next";
import Link from "next/link";
import { MetaLead } from "@/components/MetaLead";

export const metadata: Metadata = {
  title: "Grazie — richiesta ricevuta",
  description: "Abbiamo ricevuto la tua richiesta. Verrai chiamato nelle prossime ore da un nostro consulente.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/grazie" },
  openGraph: { url: "/grazie", images: ["/opengraph-image"] },
};

export default function GraziePage() {
  return (
    <section className="container-nie py-28 sm:py-36 text-center">
      <MetaLead />
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-100 text-brand-600 text-4xl">
        ✓
      </div>
      <h1 className="mt-8 text-[2.2rem] sm:text-[3rem] font-extrabold leading-tight">
        Grazie! Abbiamo ricevuto la tua richiesta
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-muted leading-relaxed">
        Verrai chiamato <strong className="text-navy-900">nelle prossime ore</strong> da un nostro
        consulente. Tieni il telefono a portata: bastano pochi minuti per capire da dove partire con
        i numeri della tua impresa.
      </p>
      <div className="mx-auto mt-10 max-w-md rounded-2xl border border-line bg-bg-soft p-6 text-left">
        <p className="text-sm font-semibold text-brand-600">Cosa succede ora</p>
        <ul className="mt-3 space-y-2 text-sm text-navy-900">
          <li>1. Un consulente prende in carico la tua richiesta.</li>
          <li>2. Ti chiama nelle prossime ore per l'analisi gratuita.</li>
          <li>3. In 30 minuti guardiamo insieme i tuoi numeri, senza impegno.</li>
        </ul>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/risorse" className="btn btn-primary">Leggi le risorse gratuite</Link>
        <Link href="/" className="btn btn-ghost">Torna alla home</Link>
      </div>
    </section>
  );
}
