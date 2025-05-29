"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const gifs = [
    "https://media.giphy.com/media/H6LFTUXF5E5EzZjYKa/giphy.gif",
    "https://media.giphy.com/media/4YFywZCoOaPRCj0RRC/giphy.gif",
    "https://media.giphy.com/media/UW47W7RtMsUbSWJqLv/giphy.gif",
    "https://media.giphy.com/media/3aULqjpxp6hEkfzVIR/giphy.gif",
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background GIFs */}
        <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4">
          {gifs.map((src, i) => (
            <img
              key={i}
              src={src || "/placeholder.svg"}
              alt={"Bahía hero gif " + (i + 1)}
              className="w-full h-full object-cover"
            />
          ))}
          <div className="absolute inset-0 overlay-dark" />
        </div>

        {/* Content on top */}
        <div className="relative z-10 text-center hero-text max-w-4xl mx-auto px-6">
          <motion.img
            src="/images/bahia-logo.png"
            alt="Bahía Store"
            width={800}
            height={400}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-auto mx-auto invert mb-8"
            style={{ height: '278px' }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-9 text-balance font-semibold text-white"
            style={{ 
              fontFamily: 'Encorpada Classic, serif', 
              fontWeight: 600, 
              fontSize: '3.5rem', 
              lineHeight: '1.1',
              textShadow: '0 0 8px rgba(0, 0, 0, 0.8), 2px 2px 4px rgba(0, 0, 0, 0.6)',
              filter: 'drop-shadow(0 0 6px rgba(0, 0, 0, 0.4))'
            }}
          >
            Moda Sustentable para un Mañana Mejor
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/shop" 
              className="text-white px-4 py-2 rounded hover:opacity-90 transition-opacity"
              style={{ 
                fontFamily: 'Encorpada Classic, serif',
                backgroundColor: '#6A9884',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '10px',
                borderRadius: '5px',
                textTransform: 'capitalize',
                fontWeight: '500',
                border: 'none'
              }}
            >
              Ver Colección
            </Link>
            <Link 
              href="/about" 
              className="text-white px-4 py-2 rounded hover:opacity-90 transition-opacity"
              style={{ 
                fontFamily: 'Encorpada Classic, serif',
                backgroundColor: '#6A9884',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '10px',
                borderRadius: '5px',
                textTransform: 'capitalize',
                fontWeight: '500',
                border: 'none'
              }}
            >
              Nuestra Historia
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -ml-3 z-20"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT TEASER – se muestra tras hacer scroll */}
      <section className="py-16 bg-background text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl text-foreground max-w-3xl mx-auto px-4 font-light"
          >
          Descubrí ropa fabricada éticamente que no compromete el estilo. Cada pieza cuenta una historia de artesanía
          consciente.
        </motion.p>
      </section>
    </>
  )
}

export default HeroSection
