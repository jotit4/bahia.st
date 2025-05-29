"use client"

import type React from "react"

import { useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Instagram, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const router = useRouter()

  // Prefetching inteligente
  const handleMouseEnter = useCallback((href: string) => {
    router.prefetch(href)
  }, [router])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubscribed(true)
        setEmail("")
      }
    } catch (error) {
      console.error("Error en la suscripción:", error)
    }
  }

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 text-center">
            <Link href="/" className="flex justify-center mb-6">
              <Image
                src="/images/bahia-logo.png"
                alt="Bahía Store"
                width={640}
                height={320}
                className="h-48 w-auto invert"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md mx-auto font-light">
              Moda sustentable que respeta el planeta y las personas. Cada compra apoya prácticas éticas y materiales
              eco-friendly.
            </p>

            {/* Newsletter */}
            {isSubscribed ? (
              <p className="text-sage font-medium">¡Gracias por suscribirte!</p>
            ) : (
              <div>
                <h3 className="font-medium mb-3">Mantenete Actualizado</h3>
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-sage transition-smooth"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-sage text-white rounded-md hover:bg-sage/90 transition-smooth font-medium hover-lift"
                  >
                    Suscribirse
                  </button>
                </form>
              </div>
            )}

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-6">
              <a
                href="https://instagram.com/bahiastore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sage transition-smooth"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:hello@bahiastore.com"
                className="text-gray-400 hover:text-sage transition-smooth"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" prefetch={true} onMouseEnter={() => handleMouseEnter('/shop')} className="text-gray-300 hover:text-sage transition-smooth font-light text-lg">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={true} onMouseEnter={() => handleMouseEnter('/about')} className="text-gray-300 hover:text-sage transition-smooth font-light text-lg">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={true} onMouseEnter={() => handleMouseEnter('/contact')} className="text-gray-300 hover:text-sage transition-smooth font-light text-lg">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/size-guide" prefetch={true} onMouseEnter={() => handleMouseEnter('/size-guide')} className="text-gray-300 hover:text-sage transition-smooth font-light">
                  Guía de Talles
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-medium mb-4">Atención al Cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" prefetch={true} onMouseEnter={() => handleMouseEnter('/shipping')} className="text-gray-300 hover:text-sage transition-smooth font-light">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/returns" prefetch={true} onMouseEnter={() => handleMouseEnter('/returns')} className="text-gray-300 hover:text-sage transition-smooth font-light">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" prefetch={true} onMouseEnter={() => handleMouseEnter('/privacy')} className="text-gray-300 hover:text-sage transition-smooth font-light">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" prefetch={true} onMouseEnter={() => handleMouseEnter('/terms')} className="text-gray-300 hover:text-sage transition-smooth font-light">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-light">
          <p>&copy; 2024 Bahía Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
