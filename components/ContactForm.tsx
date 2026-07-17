"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: collegare a endpoint/CRM (es. /api/lead o form provider).
    // Per ora simuliamo l'invio e portiamo alla pagina di ringraziamento.
    await new Promise((r) => setTimeout(r, 500));
    router.push("/grazie");
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-navy-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900" htmlFor="nome">Nome e cognome</label>
          <input id="nome" name="nome" required className={`${field} mt-1.5`} placeholder="Mario Rossi" />
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900" htmlFor="impresa">Impresa</label>
          <input id="impresa" name="impresa" required className={`${field} mt-1.5`} placeholder="Rossi Costruzioni Srl" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className={`${field} mt-1.5`} placeholder="mario@impresa.it" />
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900" htmlFor="telefono">Telefono</label>
          <input id="telefono" name="telefono" type="tel" className={`${field} mt-1.5`} placeholder="+39 333 000 0000" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-navy-900" htmlFor="fatturato">Fatturato annuo indicativo</label>
        <select id="fatturato" name="fatturato" className={`${field} mt-1.5`} defaultValue="">
          <option value="" disabled>Seleziona…</option>
          <option>Fino a 500k €</option>
          <option>500k – 1M €</option>
          <option>1M – 3M €</option>
          <option>Oltre 3M €</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-navy-900" htmlFor="messaggio">
          Qual è il tuo problema principale con i numeri? (facoltativo)
        </label>
        <textarea id="messaggio" name="messaggio" rows={4} className={`${field} mt-1.5`} placeholder="Es. non so quali cantieri mi fanno guadagnare…" />
      </div>
      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" required className="mt-1" />
        <span>Ho letto la <a href="/privacy" className="text-brand-600 underline">privacy policy</a> e acconsento al trattamento dei dati per essere ricontattato.</span>
      </label>
      <button type="submit" disabled={submitting} className="btn btn-primary w-full text-lg py-4 disabled:opacity-60">
        {submitting ? "Invio in corso…" : "Prenota l'analisi gratuita"}
      </button>
      <p className="text-center text-xs text-muted">
        Nessun impegno. Ti ricontattiamo entro 24 ore lavorative.
      </p>
    </form>
  );
}
