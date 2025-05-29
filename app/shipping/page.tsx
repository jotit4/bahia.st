"use client"

import { motion } from "framer-motion"
import { Truck, Clock, MapPin, Package, Shield, CreditCard, Star, ArrowRight, CheckCircle } from "lucide-react"

export default function ShippingPage() {
  const shippingOptions = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Envío Estándar",
      time: "3-5 días hábiles",
      cost: "$2.500",
      description: "Envío regular a todo el país"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Envío Express",
      time: "1-2 días hábiles",
      cost: "$4.500",
      description: "Entrega rápida en CABA y GBA"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Retiro en Tienda",
      time: "Mismo día",
      cost: "Gratis",
      description: "Retirá tu pedido en nuestro showroom"
    }
  ]

  const provinces = [
    "Buenos Aires", "CABA", "Córdoba", "Santa Fe", "Mendoza", 
    "Tucumán", "Entre Ríos", "Salta", "Misiones", "Chaco",
    "Corrientes", "Santiago del Estero", "San Juan", "Jujuy", "Río Negro",
    "Neuquén", "Formosa", "Chubut", "San Luis", "Catamarca",
    "La Rioja", "La Pampa", "Santa Cruz", "Tierra del Fuego"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Top Left of Z */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-16 pb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Truck className="w-4 h-4" />
                Envíos a Todo el País
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                Llevamos tu
                <span className="block text-sage font-medium">estilo sustentable</span>
                hasta tu puerta
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Opciones de envío flexibles con packaging 100% ecológico
              </p>
            </div>
            
            {/* Free Shipping Highlight - Top Right of Z */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-sage to-sage/80 rounded-3xl p-8 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Package className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold">Envío Gratis</h2>
                      <p className="text-white/80">En compras +$25.000</p>
                    </div>
                  </div>
                  <p className="text-lg text-white/90 mb-6">
                    Disfrutá de envío gratuito a todo el país en compras superiores a $25.000
                  </p>
                  <div className="flex items-center gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5" />
                    <span>Válido para toda Argentina</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Shipping Options - Center Focus */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Opciones de Envío</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Elegí la opción que mejor se adapte a tus necesidades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-sage/20 hover:-translate-y-2 h-full">
                  <div className="w-20 h-20 bg-sage/10 text-sage rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage group-hover:text-white transition-all duration-300">
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{option.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-sage">{option.cost}</span>
                    {option.cost !== "Gratis" && <span className="text-gray-500 ml-1">ARS</span>}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{option.time}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{option.description}</p>
                  {index === 1 && (
                    <div className="absolute -top-3 -right-3 bg-sage text-white px-3 py-1 rounded-full text-sm font-medium">
                      Más Popular
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Coverage & Process - Diagonal Flow */}
        <motion.section
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Coverage */}
            <div>
              <div className="text-right lg:text-left mb-12">
                <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Cobertura Nacional</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Llegamos a todas las provincias de Argentina
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-sage/10 text-sage rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">24 Provincias</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {provinces.slice(0, 12).map((province, index) => (
                    <div key={index} className="bg-sage/10 text-sage px-3 py-2 rounded-lg text-center text-sm font-medium">
                      {province}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">+ 12 provincias más</span>
                </div>
              </div>
            </div>

            {/* Process */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Proceso Simple</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Desde tu compra hasta tu puerta en 4 pasos
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Confirmación", desc: "Confirmamos tu pedido y procesamos el pago" },
                  { step: 2, title: "Preparación", desc: "Preparamos tu pedido con cuidado especial" },
                  { step: 3, title: "Envío", desc: "Tu pedido sale de nuestro depósito" },
                  { step: 4, title: "Entrega", desc: "Recibís tu pedido en la dirección indicada" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-sage text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bottom Section - Sustainability & Info */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-sage/10 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-sage/20 text-sage rounded-2xl flex items-center justify-center">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Packaging Sustentable</h3>
                  <p className="text-sage font-medium">100% Ecológico</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Cajas de cartón reciclado",
                  "Relleno biodegradable", 
                  "Bolsas compostables",
                  "Tintas ecológicas"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-sage/10 text-sage rounded-2xl flex items-center justify-center">
                  <CreditCard className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Información Importante</h3>
                  <p className="text-gray-600 dark:text-gray-300">Todo incluido</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Los tiempos son días hábiles",
                  "Seguimiento incluido en todos los envíos",
                  "Seguro contra daños incluido", 
                  "Horario de entrega: 9:00 - 18:00"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}