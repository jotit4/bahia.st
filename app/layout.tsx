import React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Providers from "../src/app/Providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const encorpadaClassic = localFont({
  src: [
    {
      path: "/fonts/EncorpadaClassic-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/EncorpadaClassic-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-encorpada",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Bahía Store - Moda Sustentable",
    template: "%s | Bahía Store",
  },
  description:
    "Descubrí moda sustentable y fabricada éticamente en Bahía Store. Comprá algodón orgánico, lino y ropa ecológica con envío gratis en compras mayores a $15.000.",
  keywords: "moda sustentable, algodón orgánico, ropa ecológica, moda ética, ropa sustentable, moda verde, Argentina",
  authors: [{ name: "Bahía Store" }],
  creator: "Bahía Store",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Bahía Store - Moda Sustentable",
    description: "Descubrí moda sustentable y fabricada éticamente en Bahía Store.",
    url: "https://bahia-store.vercel.app",
    siteName: "Bahía Store",
    images: [
      {
        url: "/api/og?title=Bahía Store&description=Moda Sustentable",
        width: 1200,
        height: 630,
        alt: "Bahía Store - Moda Sustentable",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahía Store - Moda Sustentable",
    description: "Descubrí moda sustentable y fabricada éticamente en Bahía Store.",
    images: ["/api/og?title=Bahía Store&description=Moda Sustentable"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${encorpadaClassic.variable} font-sans bg-background text-foreground transition-colors duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
