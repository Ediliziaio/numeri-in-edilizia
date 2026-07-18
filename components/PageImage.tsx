import Image from "next/image";

/* Foto hero di pagina (in /public/images/pages). Riempie il riquadro dell'hero,
   angoli arrotondati per stare dentro la card di PageHero. */

export function PageImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      sizes="(min-width: 1024px) 45vw, 90vw"
      priority={priority}
      className={`h-auto w-full rounded-[1.25rem] ${className}`}
    />
  );
}
