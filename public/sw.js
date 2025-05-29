// Service Worker para optimización de cacheo
const CACHE_NAME = 'bahia-store-v1'
const STATIC_CACHE = 'bahia-static-v1'
const DYNAMIC_CACHE = 'bahia-dynamic-v1'

// Recursos estáticos para cachear
const STATIC_ASSETS = [
  '/',
  '/shop',
  '/about',
  '/contact',
  '/manifest.json',
  '/images/bahia-logo.png'
]

// Rutas de páginas para cachear
const PAGE_ROUTES = [
  '/shipping',
  '/returns',
  '/privacy',
  '/terms',
  '/size-guide',
  '/customer-service'
]

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(STATIC_ASSETS)
      }),
      caches.open(DYNAMIC_CACHE).then((cache) => {
        return cache.addAll(PAGE_ROUTES)
      })
    ])
  )
  self.skipWaiting()
})

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Estrategia de fetch
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Solo manejar requests del mismo origen
  if (url.origin !== location.origin) return

  // Estrategia Cache First para assets estáticos
  if (STATIC_ASSETS.some(asset => url.pathname === asset)) {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request)
      })
    )
    return
  }

  // Estrategia Stale While Revalidate para páginas
  if (PAGE_ROUTES.some(route => url.pathname.startsWith(route)) || url.pathname === '/') {
    event.respondWith(
      caches.open(DYNAMIC_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          const fetchPromise = fetch(request).then((networkResponse) => {
            cache.put(request, networkResponse.clone())
            return networkResponse
          })
          return response || fetchPromise
        })
      })
    )
    return
  }

  // Network First para todo lo demás
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request)
    })
  )
})

// Prefetch de rutas importantes
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PREFETCH_ROUTE') {
    const { route } = event.data
    caches.open(DYNAMIC_CACHE).then((cache) => {
      cache.add(route)
    })
  }
})