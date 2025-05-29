"use client"

import type React from "react"

import { useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Menu, X, Search, MessageCircle } from "lucide-react"


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const router = useRouter()

  const navigation = [
    { name: "Tienda", href: "/shop" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ]

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

  // Prefetching inteligente
  const handleMouseEnter = useCallback((href: string) => {
    router.prefetch(href)
  }, [router])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <>
      {/* Free Shipping Bar */}
      <div className="bg-sage text-white text-center py-2 text-base font-light">
        Envío gratis en compras mayores a $20.000 • Moda sustentable para un mundo mejor
      </div>

      {/* Main Header */}
      <header className="bg-card shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/bahia-logo.png"
                alt="Bahía Store"
                width={360}
                height={180}
                className="h-20 w-auto transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  onMouseEnter={() => handleMouseEnter(item.href)}
                  className="text-foreground hover:text-primary transition-smooth font-light text-lg"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:text-primary transition-smooth">
                <Search size={20} />
              </button>



              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("¡Hola! Estoy interesado/a en los productos de Bahía Store.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-sage transition-smooth"
                  title="Contactanos por WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="border-t border-gray-200 dark:border-gray-700 py-4">
              <form onSubmit={handleSearch} className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar productos..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage dark:bg-gray-700 dark:text-white transition-smooth"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-sage text-white rounded-lg hover:bg-sage/90 transition-smooth hover-lift"
                  >
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={true}
                    onMouseEnter={() => handleMouseEnter(item.href)}
                    className="text-foreground hover:text-primary transition-smooth font-bold text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
