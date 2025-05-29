'use client'

import { useEffect, useState } from 'react'

export function useServiceWorker() {
  const [isSupported, setIsSupported] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    // Verificar soporte para Service Worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      setIsSupported(true)
      registerServiceWorker()
    }
  }, [])

  const registerServiceWorker = async () => {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      })
      
      setRegistration(reg)
      setIsRegistered(true)
      
      // Manejar actualizaciones
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Nueva versión disponible
              console.log('Nueva versión de la aplicación disponible')
            }
          })
        }
      })
      
      console.log('Service Worker registrado exitosamente')
    } catch (error) {
      console.error('Error al registrar Service Worker:', error)
    }
  }

  const prefetchRoute = (route: string) => {
    if (registration && registration.active) {
      registration.active.postMessage({
        type: 'PREFETCH_ROUTE',
        route
      })
    }
  }

  const updateServiceWorker = () => {
    if (registration) {
      registration.update()
    }
  }

  return {
    isSupported,
    isRegistered,
    registration,
    prefetchRoute,
    updateServiceWorker
  }
}

export default useServiceWorker