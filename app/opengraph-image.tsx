import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F2EFE7",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              border: "2px solid #171714",
              padding: "6px 16px",
              fontSize: 28,
              fontWeight: 700,
              color: "#171714",
            }}
          >
            GCB
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 20,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#65615A",
            }}
          >
            Cliente × Produto × Tecnologia
          </div>
        </div>
        <div
          style={{
            fontSize: 58,
            color: "#171714",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Entre o problema do cliente e a solução técnica, eu construo a ponte.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#171714",
          }}
        >
          <span>Giovanni Crescenzi Bogner</span>
          <span style={{ color: "#F04A2A" }}>Sorocaba, SP</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
