"use client"

import { Suspense } from "react"
import { HeroSection } from "@/components/HeroSection"
import { CategoryCards } from "@/components/CategoryCards"
import { BestsellerGrid } from "@/components/BestsellerGrid"
import { InstagramFeed } from "@/components/InstagramFeed"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="h-screen bg-cream dark:bg-gray-900" />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-cream dark:bg-gray-900" />}>
        <CategoryCards />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-white dark:bg-gray-800" />}>
        <BestsellerGrid />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-background" />}>
        <TestimonialsCarousel />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-cream dark:bg-gray-900" />}>
        <InstagramFeed />
      </Suspense>
    </div>
  )
}
