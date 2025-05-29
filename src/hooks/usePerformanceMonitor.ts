'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
  navigationTime?: number
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const pathname = usePathname()
  const navigationStartRef = useRef<number>(Date.now())

  useEffect(() => {
    navigationStartRef.current = Date.now()
    
    // Medir métricas de navegación
    const measureNavigationTime = () => {
      const navigationTime = Date.now() - navigationStartRef.current
      setMetrics(prev => ({ ...prev, navigationTime }))
    }

    // Medir cuando la página esté completamente cargada
    const timer = setTimeout(measureNavigationTime, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Función para obtener métricas de Web Vitals
    const getWebVitals = () => {
      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
      }

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
        setMetrics(prev => ({ ...prev, ttfb }))
      }
    }

    // Largest Contentful Paint
    const observeLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        })
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
        return observer
      }
    }

    // First Input Delay
    const observeFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
          })
        })
        observer.observe({ entryTypes: ['first-input'] })
        return observer
      }
    }

    // Cumulative Layout Shift
    const observeCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
              setMetrics(prev => ({ ...prev, cls: clsValue }))
            }
          })
        })
        observer.observe({ entryTypes: ['layout-shift'] })
        return observer
      }
    }

    // Inicializar observadores
    const lcpObserver = observeLCP()
    const fidObserver = observeFID()
    const clsObserver = observeCLS()

    // Obtener métricas básicas
    setTimeout(getWebVitals, 1000)

    return () => {
      lcpObserver?.disconnect()
      fidObserver?.disconnect()
      clsObserver?.disconnect()
    }
  }, [])

  // Función para reportar métricas (opcional)
  const reportMetrics = () => {
    if (process.env.NODE_ENV === 'development') {
      console.group('🚀 Performance Metrics')
      console.log('📊 Navigation Time:', metrics.navigationTime, 'ms')
      console.log('🎨 First Contentful Paint:', metrics.fcp, 'ms')
      console.log('🖼️ Largest Contentful Paint:', metrics.lcp, 'ms')
      console.log('⚡ First Input Delay:', metrics.fid, 'ms')
      console.log('📐 Cumulative Layout Shift:', metrics.cls)
      console.log('🌐 Time to First Byte:', metrics.ttfb, 'ms')
      console.groupEnd()
    }
  }

  // Función para evaluar el rendimiento
  const getPerformanceScore = (): 'good' | 'needs-improvement' | 'poor' => {
    const { fcp, lcp, fid, cls } = metrics
    
    let score = 0
    let total = 0

    if (fcp !== undefined) {
      score += fcp <= 1800 ? 1 : fcp <= 3000 ? 0.5 : 0
      total += 1
    }

    if (lcp !== undefined) {
      score += lcp <= 2500 ? 1 : lcp <= 4000 ? 0.5 : 0
      total += 1
    }

    if (fid !== undefined) {
      score += fid <= 100 ? 1 : fid <= 300 ? 0.5 : 0
      total += 1
    }

    if (cls !== undefined) {
      score += cls <= 0.1 ? 1 : cls <= 0.25 ? 0.5 : 0
      total += 1
    }

    if (total === 0) return 'good'

    const percentage = score / total
    if (percentage >= 0.8) return 'good'
    if (percentage >= 0.5) return 'needs-improvement'
    return 'poor'
  }

  return {
    metrics,
    reportMetrics,
    performanceScore: getPerformanceScore()
  }
}

export default usePerformanceMonitor