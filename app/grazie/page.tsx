import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grazie — richiesta ricevuta",
  description: "Abbiamo ricevuto la tua richiesta di analisi gratuita. Ti ricontattiamo a breve.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/grazie" },
};

export default function GraziePage() {
  return (
    <section className="container-nie py-28 sm:py-36 text-center">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-100 text-brand-600 text-4xl">
        ✓
      </div>
      <h1 className="mt-8 text-[2.2rem] sm:text-[3rem] font-extrabold leading-tight">
        Richiesta ricevuta. Grazie!
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-muted leading-relaxed">
        Abbiamo preso in carico la tua richiesta di analisi gratuita. Ti ricontattiamo entro{" "}
        <strong className="text-navy-900">24 ore lavorative</strong> per fissare la chiamata.
        Nel frattempo, prepara pure una domanda sui tuoi numeri: la useremo come punto di partenza.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/risorse" className="btn btn-primary">Leggi le risorse gratuite</Link>
        <Link href="/" className="btn btn-ghost">Torna alla home</Link>
      </div>
    </section>
  );
}
