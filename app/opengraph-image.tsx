import { ImageResponse } from "next/og";

export const alt = "Kefas Manda, software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        color: "#f2f0e9",
        background: "#0b121a",
        borderLeft: "12px solid #e8b44f",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "#e8b44f",
          fontSize: 24,
          letterSpacing: 2,
        }}
      >
        KEFAS MANDA · CS STUDENT & DEVELOPER
      </div>
      <div
        style={{
          display: "flex",
          maxWidth: 980,
          fontSize: 72,
          lineHeight: 1.02,
          letterSpacing: -4,
        }}
      >
        Applied AI, data, and software systems.
      </div>
      <div style={{ display: "flex", color: "#a2aab2", fontSize: 26 }}>
        Stellenbosch, South Africa · kefas.co.za
      </div>
    </div>,
    size,
  );
}
