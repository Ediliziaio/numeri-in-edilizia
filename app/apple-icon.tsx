import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Stesso mark del favicon (edificio + barre), quadrato pieno: iOS applica la sua maschera arrotondata.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0f2440",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 16,
          paddingBottom: 60,
        }}
      >
        <div style={{ width: 20, height: 46, background: "#5b8bd0", borderRadius: 4 }} />
        <div style={{ width: 20, height: 68, background: "#8fb2e0", borderRadius: 4 }} />
        <div style={{ width: 20, height: 92, background: "#ffffff", borderRadius: 4 }} />
      </div>
    ),
    { ...size },
  );
}
