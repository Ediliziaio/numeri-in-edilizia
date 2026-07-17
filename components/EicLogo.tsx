import Image from "next/image";

/* Logo ufficiale EdiliziaInCloud (asset di produzione, /public/images/ediliziaincloud-logo.webp).
   Lockup orizzontale 1871×452: icona quadrata a sinistra + wordmark. */

const LOGO_W = 1871;
const LOGO_H = 452;

export function EicLogo({
  variant = "onLight",
  withWordmark = true,
  iconSize = 36,
  className = "",
}: {
  variant?: "onLight" | "onDark";
  withWordmark?: boolean;
  iconSize?: number;
  className?: string;
}) {
  const h = iconSize;

  const img = withWordmark ? (
    <Image
      src="/images/ediliziaincloud-logo.webp"
      alt="EdiliziaInCloud"
      width={Math.round((h * LOGO_W) / LOGO_H)}
      height={h}
      style={{ height: h, width: "auto" }}
    />
  ) : (
    // solo l'icona: ritaglio del quadrato sinistro del lockup
    <span
      className="relative block overflow-hidden rounded-lg"
      style={{ height: h, width: h }}
    >
      <Image
        src="/images/ediliziaincloud-logo.webp"
        alt="EdiliziaInCloud"
        fill
        sizes={`${Math.round((h * LOGO_W) / LOGO_H)}px`}
        className="object-cover object-left"
      />
    </span>
  );

  // Su fondo scuro il wordmark navy sparirebbe: chip bianco dietro al logo.
  if (variant === "onDark" && withWordmark) {
    return (
      <span className={`inline-flex items-center rounded-xl bg-white px-3.5 py-2 ${className}`}>
        {img}
      </span>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{img}</span>;
}
