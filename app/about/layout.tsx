import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Bahía Store",
  description: "Learn about our sustainable fashion mission and values.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
