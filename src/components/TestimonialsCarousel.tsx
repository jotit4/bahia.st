"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Valentina Morales",
      text: "La calidad es increíble y me encanta saber que mi ropa está hecha éticamente. Bahía Store se convirtió en mi lugar favorito para moda sustentable.",
      rating: 5,
      location: "Buenos Aires, Argentina",
    },
    {
      id: 2,
      name: "Sofía Fernández",
      text: "Diseños hermosos que me hacen sentir segura mientras apoyo prácticas sustentables. Las telas son tan suaves y cómodas.",
      rating: 5,
      location: "Córdoba, Argentina",
    },
    {
      id: 3,
      name: "Camila González",
      text: "¡Finalmente encontré una marca que se alinea con mis valores! La ropa es elegante, bien hecha y puedo sentirme bien con cada compra.",
      rating: 5,
      location: "Rosario, Argentina",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 font-light text-xl">Lo que Dicen Nuestros Clientes</h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sage text-sage" />
                ))}
              </div>

              <blockquote className="text-xl text-muted-foreground mb-6 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div>
                <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-sage hover:text-sage/80 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-sage hover:text-sage/80 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-sage" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
