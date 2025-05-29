import { ImageResponse } from "@vercel/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") || "Bahía Store"
  const description = searchParams.get("description") || "Moda Sustentable"

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9F7F4",
        fontSize: 32,
        fontWeight: 600,
      }}
    >
      {/* Logo SVG */}
      <div style={{ marginBottom: 40 }}>
        <svg width="120" height="120" viewBox="0 0 200 200" fill="none">
          {/* Lotus flower petals */}
          <path d="M100 50 C85 35, 65 35, 50 50 C65 65, 85 65, 100 50 Z" fill="#7EA89A" />
          <path d="M100 50 C115 35, 135 35, 150 50 C135 65, 115 65, 100 50 Z" fill="#7EA89A" />
          <path d="M100 50 C100 35, 100 15, 100 0 C100 15, 100 35, 100 50 Z" fill="#7EA89A" />
          <path d="M100 50 C85 50, 65 50, 50 50 C65 50, 85 50, 100 50 Z" fill="#7EA89A" />
          <path d="M100 50 C115 50, 135 50, 150 50 C135 50, 115 50, 100 50 Z" fill="#7EA89A" />
        </svg>
      </div>

      <div style={{ color: "#111111", fontSize: 48, marginBottom: 20, fontFamily: "serif" }}>BAHÍA</div>
      <div style={{ color: "#111111", fontSize: 24, marginBottom: 40, letterSpacing: "0.2em" }}>STORE</div>
      <div style={{ color: "#111111", textAlign: "center", maxWidth: 800, fontSize: 32 }}>{title}</div>
      <div style={{ color: "#666666", fontSize: 24, marginTop: 20, textAlign: "center" }}>{description}</div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
