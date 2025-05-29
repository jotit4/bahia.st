import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop | Bahía Store",
  description: "Browse our sustainable fashion collection.",
}

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
