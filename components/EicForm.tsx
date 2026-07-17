/* Form ufficiale EdiliziaInCloud (embed). Un solo punto: cambi lo slug/company_id qui
   e si aggiorna in tutto il sito (contatti, risorse, articoli). */

export function EicForm({
  title = "Richiedi informazioni",
  height = 640,
  className = "",
}: {
  title?: string;
  height?: number;
  className?: string;
}) {
  return (
    <iframe
      src="https://app.ediliziaincloud.com/f?slug=numeri-in-edilizia&company_id=00000000-0000-0000-0000-000000000001"
      width="100%"
      height={height}
      loading="lazy"
      title={title}
      className={className}
      style={{ border: 0, maxWidth: 640, margin: "0 auto", display: "block" }}
    />
  );
}
