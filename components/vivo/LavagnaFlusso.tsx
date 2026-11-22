"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { WorkflowApp, WorkflowGraph } from "@/components/ui/interactive-workflow-blueprint";

// L'editor pesa e vive solo nel browser: si scarica quando la sezione sta per entrare nello schermo.
const WorkflowBlueprint = dynamic(() => import("@/components/ui/interactive-workflow-blueprint"), {
  ssr: false,
  loading: () => <div className="h-[560px] rounded-[2rem] border border-line bg-bg-soft" />,
});

const nodo = (id: string, x: number, y: number, label: string, detail: string, kind: WorkflowGraph["nodes"][number]["data"]["kind"], tool: string, live: string) =>
  ({ id, type: "blueprint" as const, position: { x, y }, data: { label, detail, kind, tool, live } });

const GRAFO: WorkflowGraph = {
  nodes: [
    nodo("ddt", 0, 40, "Arriva il DDT", "Il materiale entra in cantiere: la bolla viene fotografata e letta.", "trigger", "Foto del DDT", "DDT n. 418: 40 sacchi di cemento, 1.240 €"),
    nodo("commessa", 290, 200, "Costo sulla commessa", "Ogni riga va sulla commessa e sulla voce giusta, non in un mucchio unico.", "integration", "Commessa", "Commessa Via dei Mille, voce Materiali"),
    nodo("controllo", 580, 40, "Confronto col preventivo", "Speso contro previsto, voce per voce: si vede subito cosa sfora.", "review", "Scostamenti", "Materiali +4% sul previsto: ancora sotto controllo"),
    nodo("margine", 870, 200, "Margine a finire", "Il margine della commessa si aggiorna mentre lavori, non a fine anno.", "delivery", "Cruscotto", "Margine a finire aggiornato: 14,6%"),
  ],
  edges: [
    { id: "d-c", source: "ddt", target: "commessa" },
    { id: "c-k", source: "commessa", target: "controllo" },
    { id: "k-m", source: "controllo", target: "margine" },
  ],
};

const AZIONI: WorkflowApp[] = [
  { id: "cantiere", name: "Cantiere", actions: [
    { label: "Ore della squadra", detail: "Le ore di oggi, al costo orario completo, sulla commessa.", kind: "trigger", tool: "Rapportino" },
    { label: "Avanzamento lavori", detail: "Quanta parte del lavoro è fatta, per confrontarla con quanto è speso.", kind: "integration", tool: "SAL" },
  ] },
  { id: "fatture", name: "Fatture e banca", actions: [
    { label: "Fattura del fornitore", detail: "Abbinata al DDT: si paga solo quello che è arrivato.", kind: "integration", tool: "Fatture" },
    { label: "Scadenze della settimana", detail: "Cosa entra e cosa esce nei prossimi giorni, già in fila.", kind: "delivery", tool: "Banca" },
  ] },
  { id: "ai", name: "Assistente AI", actions: [
    { label: "Segnala la voce che sfora", detail: "Avviso quando una voce supera il previsto, finché sei in tempo.", kind: "agent", tool: "Assistente AI" },
    { label: "Prevede la cassa", detail: "Il saldo dei prossimi mesi con SAL, stipendi e fornitori.", kind: "agent", tool: "Assistente AI" },
  ] },
  { id: "titolare", name: "Titolare", actions: [
    { label: "Decisione del titolare", detail: "Le varianti sopra soglia passano da te prima di partire.", kind: "review", tool: "Approvazione" },
    { label: "Riepilogo del lunedì", detail: "Margine e cassa di ogni commessa, in una pagina.", kind: "delivery", tool: "Report" },
  ] },
];

const COLORI = {
  "--color-background": "#f5f8fc",
  "--color-foreground": "#0f2440",
  "--color-card": "#ffffff",
  "--color-muted-foreground": "#5b6b80",
  "--color-border": "#c9d6e6",
  "--color-primary": "#2c5aa0",
  "--color-primary-foreground": "#ffffff",
  "--color-chart-2": "#5b8bd6",
  "--color-chart-3": "#10b981",
  "--wb-radius": "2rem",
} as CSSProperties;

export default function LavagnaFlusso() {
  const box = useRef<HTMLDivElement>(null);
  const [vicino, setVicino] = useState(false);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVicino(true);
        io.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={box} className="min-h-[560px]">
      {vicino && <WorkflowBlueprint vetrina title="Da dove passa il margine" subtitle="Commessa d'esempio" oraInizio="08:12" initialGraph={GRAFO} apps={AZIONI} style={COLORI} />}
    </div>
  );
}
