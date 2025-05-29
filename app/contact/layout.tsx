import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Bahía Store",
  description: "Get in touch with our team for any questions or support.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
