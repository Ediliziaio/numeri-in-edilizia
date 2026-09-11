import { EicLeadForm } from "@/components/EicLeadForm";

/* Form ufficiale EdiliziaInCloud (embed). Un solo punto: cambi lo slug/company_id qui
   e si aggiorna in tutto il sito (contatti, risorse, articoli). I lead arrivano nel
   CRM con la campagna di provenienza (UTM, gclid, fbclid), salvata all'atterraggio. */

export function EicForm({
  title = "Richiedi informazioni",
  height = 640,
  className = "",
}: {
  title?: string;
  height?: number;
  className?: string;
}) {
  return <EicLeadForm slug="numeri-in-edilizia" title={title} height={height} className={className} />;
}
