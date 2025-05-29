"use client"

import type React from "react"
import { Suspense } from "react"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ClientLayout } from "@/components/ClientLayout"
import { PageLoadingSkeleton } from "@/components/LoadingSpinner"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientLayout>
      <Suspense fallback={<PageLoadingSkeleton />}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </Suspense>
    </ClientLayout>
  )
}
