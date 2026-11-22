"use client";

import InkOrbitFeatures from "@/components/ui/ink-orbit-features";

/** Icone a tratto 24×24, nello stile delle altre del sito. */
const tratto = (d: string) =>
  function Icona({ width = 24, height = 24, strokeWidth = 1.8 }: { width?: number | string; height?: number | string; strokeWidth?: number | string }) {
    return (
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d={d} />
      </svg>
    );
  };
const Grafico = tratto("M4 20V10M10 20V4M16 20v-7M21 20H3");
const Fattura = tratto("M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6M9 16h3");
const Banca = tratto("M3 9l9-5 9 5M5 10v8M10 10v8M14 10v8M19 10v8M3 21h18");
const Camion = tratto("M2 6h11v10H2zM13 10h4l4 4v2h-8M6 19a2 2 0 1 0 0-.01M17 19a2 2 0 1 0 0-.01");
const Orologio = tratto("M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2");

export default function FunzioniVive() {
  return (
    <InkOrbitFeatures
      theme="light"
      chip="Numeri"
      mark={Grafico}
      tag="Il metodo, collegato"
      title={"Il margine di ogni commessa,\n*mentre lavori*"}
      team={[
        { name: "Capo cantiere · ore di oggi" },
        { name: "Acquisti · DDT caricato" },
        { name: "Amministrazione · fatture" },
        { name: "Titolare · margini" },
        { name: "Geometra · fuori sede", idle: true },
      ]}
      collaboration={{
        title: "Cantiere e ufficio sugli stessi numeri",
        description: "Ore, DDT e fatture finiscono sulla commessa giusta nel momento in cui arrivano, da chi li ha in mano.",
      }}
      reports={{
        title: "Il conto della commessa, già fatto",
        description: "Costi, avanzamento e margine a finire si aggiornano da soli: niente fogli da rifare a fine mese.",
      }}
      labels={{ report: "MOVIMENTO N.", forecast: "PREVISIONE", syncing: "entrano", connected: "fonti collegate", pred: "prev.", period: "mese", formatValue: (v) => `${v}k €` }}
      reportStart={1204}
      integrations={{
        title: "Fatture, banca, DDT e ore",
        description: "Fatture elettroniche, movimenti del conto, DDT e ore di cantiere entrano da soli e vanno al posto giusto.",
        tools: [
          { name: "Fatture", icon: Fattura },
          { name: "DDT", icon: Camion },
          { name: "Banca", icon: Banca },
          { name: "Ore", icon: Orologio },
        ],
      }}
      insights={{
        title: "La cassa dei prossimi mesi",
        description: "Il saldo in banca dei mesi passati e la previsione dei prossimi, con SAL e scadenze già in fila. Cifre d'esempio: passa il dito sul grafico.",
        values: [42, 38, 45, 40, 36, 44, 48, 46, 52, 49, 55, 58],
        forecastFrom: 8,
      }}
      palette={{
        "--ib-page": "#eef3fa",
        "--ib-hatch": "rgba(15,36,64,.05)",
        "--ib-paper": "#ffffff",
        "--ib-card": "#f5f8fc",
        "--ib-raise": "#ffffff",
        "--ib-ink": "#0f2440",
        "--ib-accent": "#2c5aa0",
        "--ib-soft": "#334155",
        "--ib-muted": "#5b6b80",
        "--ib-faint": "#94a3b8",
        "--ib-line": "#e3eaf3",
        "--ib-line-strong": "#c9d6e6",
        "--ib-bracket": "#a9bcd6",
        "--ib-inv": "#0f2440",
        "--ib-inv-ink": "#ffffff",
        "--ib-radius": "2rem",
        "--ib-card-radius": "1.25rem",
      }}
    />
  );
}
