"use client";

/* Riapre il banner consenso (per rigestire i cookie in qualsiasi momento — obbligo GDPR). */

export function CookiePrefsButton({
  className = "",
  children = "Preferenze cookie",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("nie:cookie-settings"))}
    >
      {children}
    </button>
  );
}
