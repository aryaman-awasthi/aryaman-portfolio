import { ImageResponse } from "next/og";

// Edge runtime: the Node build of @vercel/og fails to prerender on Windows.
export const runtime = "edge";

export const alt = "Aryaman Awasthi — Full-Stack Developer & Applied AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#050705",
          padding: 48,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid #223022",
            backgroundColor: "#0a0f0a",
            padding: 64,
          }}
        >
          <div style={{ display: "flex", fontSize: 30, color: "#7e917e" }}>
            <span style={{ color: "#4ade80", marginRight: 16 }}>$</span>
            whoami
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 108,
                fontWeight: 800,
                letterSpacing: -4,
                lineHeight: 1.05,
                color: "#e6f2e6",
              }}
            >
              ARYAMAN AWASTHI
            </div>
            <div style={{ fontSize: 36, color: "#4ade80", marginTop: 28 }}>
              &gt; full-stack developer · applied AI
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 26,
              color: "#7e917e",
            }}
          >
            <span>Mumbai, India</span>
            <span>github.com/aryaman-awasthi</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
