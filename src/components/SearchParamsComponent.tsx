"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Suspense } from "react"

interface SearchParamsComponentProps {
  onSearchChange?: (query: string) => void
}

function SearchParamsContent({ onSearchChange }: SearchParamsComponentProps) {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState("")

  useEffect(() => {
    const q = searchParams.get("q") ?? ""
    setQuery(q)
    if (onSearchChange) {
      onSearchChange(q)
    }
  }, [searchParams, onSearchChange])

  if (!query) return null

  return (
    <div className="bg-background p-4 rounded-lg mb-6">
      <p className="text-gray-700 dark:text-gray-300">
        Resultados de búsqueda para: <span className="font-semibold text-sage">"{query}"</span>
      </p>
    </div>
  )
}

export default function SearchParamsComponent({ onSearchChange }: SearchParamsComponentProps) {
  return (
    <Suspense fallback={<div className="h-6" />}>
      <SearchParamsContent onSearchChange={onSearchChange} />
    </Suspense>
  )
}
