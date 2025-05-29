'use client'

import { useRouter } from 'next/navigation'
import { useState, useCallback, useEffect } from 'react'

interface UseOptimizedNavigationOptions {
  prefetchOnMount?: boolean
  prefetchDelay?: number
}

export function useOptimizedNavigation(options: UseOptimizedNavigationOptions = {}) {
  const { prefetchOnMount = true, prefetchDelay = 100 } = options
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)
  const [prefetchedRoutes, setPrefetchedRoutes] = useState<Set<string>>(new Set())

  // Rutas principales para prefetch automático
  const mainRoutes = [
    '/shop',
    '/about',
    '/contact',
    '/shipping',
    '/returns',
    '/privacy',
    '/terms',
    '/size-guide',
    '/customer-service'
  ]

  // Prefetch inteligente con debounce
  const prefetchRoute = useCallback((href: string) => {
    if (prefetchedRoutes.has(href)) return
    
    setTimeout(() => {
      router.prefetch(href)
      setPrefetchedRoutes(prev => new Set([...prev, href]))
    }, prefetchDelay)
  }, [router, prefetchDelay, prefetchedRoutes])

  // Navegación optimizada con loading state
  const navigateWithLoading = useCallback((href: string) => {
    setIsNavigating(true)
    
    // Prefetch si no se ha hecho antes
    if (!prefetchedRoutes.has(href)) {
      router.prefetch(href)
    }
    
    // Pequeño delay para mostrar loading state
    setTimeout(() => {
      router.push(href)
      // Reset loading state después de la navegación
      setTimeout(() => setIsNavigating(false), 500)
    }, 50)
  }, [router, prefetchedRoutes])

  // Handle mouse enter para prefetch
  const handleMouseEnter = useCallback((href: string) => {
    prefetchRoute(href)
  }, [prefetchRoute])

  // Prefetch rutas principales al montar
  useEffect(() => {
    if (prefetchOnMount) {
      mainRoutes.forEach((route, index) => {
        setTimeout(() => {
          prefetchRoute(route)
        }, index * 200) // Escalonar las peticiones
      })
    }
  }, [prefetchOnMount, prefetchRoute])

  // Prefetch en intersección (cuando el usuario scrollea cerca de enlaces)
  const createIntersectionPrefetch = useCallback((href: string) => {
    return (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          prefetchRoute(href)
        }
      })
    }
  }, [prefetchRoute])

  return {
    isNavigating,
    navigateWithLoading,
    handleMouseEnter,
    prefetchRoute,
    createIntersectionPrefetch,
    prefetchedRoutes: Array.from(prefetchedRoutes)
  }
}

export default useOptimizedNavigation