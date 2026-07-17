import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Numeri in Edilizia — Controllo di gestione per imprese edili";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0F2440 0%, #14294A 60%, #1C3A63 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* logo: edificio + barre */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="88" height="88" viewBox="0 0 100 100" fill="none">
            <path d="M22 82V30l16-12v64" stroke="#ffffff" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M14 82h72" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
            <rect x="46" y="60" width="9" height="22" rx="2" fill="#5B8AD1" />
            <rect x="59" y="48" width="9" height="34" rx="2" fill="#5B8AD1" />
            <rect x="72" y="36" width="9" height="46" rx="2" fill="#ffffff" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: "#ffffff", lineHeight: 1.1 }}>Numeri</span>
            <span style={{ fontSize: 38, fontWeight: 700, color: "#5B8AD1", lineHeight: 1.1 }}>in Edilizia</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 64, fontWeight: 800, color: "#ffffff", lineHeight: 1.12, letterSpacing: -1.5 }}>
            <span>Fatturi tanto. Ma a fine anno,</span>
            <span>quanto ti resta davvero?</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#8FB2E0", lineHeight: 1.3 }}>
            Controllo di gestione per imprese edili
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              background: "#2C5AA0",
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 700,
              padding: "18px 36px",
              borderRadius: 999,
            }}
          >
            Prenota l'analisi gratuita
          </div>
          <div style={{ fontSize: 26, color: "#8FB2E0" }}>numeriinedilizia.it</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
