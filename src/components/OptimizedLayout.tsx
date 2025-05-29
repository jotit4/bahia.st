'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { PageLoadingSkeleton } from './LoadingSpinner'
import useOptimizedNavigation from '../hooks/useOptimizedNavigation'

// Lazy load componentes pesados
const Header = lazy(() => import('./Header'))
const Footer = lazy(() => import('./Footer'))

interface OptimizedLayoutProps {
  children: React.ReactNode
}

export function OptimizedLayout({ children }: OptimizedLayoutProps) {
  const pathname = usePathname()
  const { isNavigating } = useOptimizedNavigation()
  const [isPageLoading, setIsPageLoading] = useState(false)

  // Manejar cambios de ruta
  useEffect(() => {
    setIsPageLoading(true)
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  // Mostrar skeleton durante navegación
  if (isNavigating || isPageLoading) {
    return <PageLoadingSkeleton />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={
        <div className="h-20 bg-white dark:bg-gray-800 animate-pulse" />
      }>
        <Header />
      </Suspense>
      
      <main className="flex-1">
        {children}
      </main>
      
      <Suspense fallback={
        <div className="h-64 bg-gray-900 animate-pulse" />
      }>
        <Footer />
      </Suspense>
    </div>
  )
}

export default OptimizedLayout