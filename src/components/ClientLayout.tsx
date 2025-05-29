'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import useServiceWorker from '../hooks/useServiceWorker'
import useOptimizedNavigation from '../hooks/useOptimizedNavigation'
import { PageLoadingSkeleton } from './LoadingSpinner'


interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const { isRegistered, prefetchRoute } = useServiceWorker()
  const { isNavigating } = useOptimizedNavigation({
    prefetchOnMount: true,
    prefetchDelay: 100
  })

  // Prefetch de rutas importantes cuando el SW esté listo
  useEffect(() => {
    if (isRegistered) {
      const importantRoutes = [
        '/shop',
        '/about',
        '/contact',
        '/shipping',
        '/returns',
        '/privacy',
        '/terms'
      ]
      
      // Prefetch con delay para no bloquear la carga inicial
      setTimeout(() => {
        importantRoutes.forEach(route => {
          if (route !== pathname) {
            prefetchRoute(route)
          }
        })
      }, 2000)
    }
  }, [isRegistered, pathname, prefetchRoute])

  // Mostrar loading durante navegación
  useEffect(() => {
    setIsLoading(isNavigating)
  }, [isNavigating])

  // Optimización de imágenes lazy loading
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[data-src]')
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)
          }
        })
      }, {
        rootMargin: '50px'
      })

      images.forEach(img => imageObserver.observe(img))

      return () => imageObserver.disconnect()
    }
  }, [pathname])

  // Preload de recursos críticos
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload de fuentes críticas
      const fontLinks = [
        '/fonts/EncorpadaClassic-SemiBold.woff2'
      ]
      
      fontLinks.forEach(font => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = font
        link.as = 'font'
        link.type = 'font/woff2'
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }

    preloadCriticalResources()
  }, [])

  if (isLoading) {
    return <PageLoadingSkeleton />
  }

  return (
    <>
      {children}
      {/* Indicador de conexión offline */}
      <OfflineIndicator />

    </>
  )
}

// Componente para mostrar estado offline
function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (isOnline) return null

  return (
    <div className="fixed bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        <span className="text-sm font-medium">Sin conexión</span>
      </div>
    </div>
  )
}

export default ClientLayout