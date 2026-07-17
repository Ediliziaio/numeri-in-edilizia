"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    // TODO: collegare a provider email (Brevo/Mailchimp) o /api/subscribe.
    await new Promise((r) => setTimeout(r, 500));
    setBusy(false);
    setDone(true);
  }

  if (done) {
    return (
      <p className="rounded-2xl bg-white/10 px-5 py-4 text-brand-100">
        Grazie! Controlla la casella email per confermare l'iscrizione.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="La tua email"
        aria-label="Email"
        className="w-full flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3.5 text-white placeholder:text-brand-100/60 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-300/30"
      />
      <button type="submit" disabled={busy} className="btn btn-primary shrink-0 disabled:opacity-60">
        {busy ? "Invio…" : "Iscrivimi"}
      </button>
    </form>
  );
}
