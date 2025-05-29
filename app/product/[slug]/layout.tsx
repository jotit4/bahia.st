import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Details | Bahía Store",
  description: "View product details and add to your cart.",
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
