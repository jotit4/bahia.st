import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guía de Talles | Bahía Store",
  description: "Encuentra tu talle perfecto con nuestra guía completa de talles.",
}

export default function SizeGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
