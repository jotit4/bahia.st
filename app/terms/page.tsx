"use client"

import { motion } from "framer-motion"
import { FileText, Scale, ShoppingCart, CreditCard, Truck, RefreshCw, Shield, AlertTriangle, Star, ArrowRight, CheckCircle, UserCheck, Clock, Globe } from "lucide-react"

export default function TermsPage() {
  const keyHighlights = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "30 Días",
      subtitle: "Para devoluciones",
      color: "text-green-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Pago Seguro",
      subtitle: "Encriptación SSL",
      color: "text-blue-600"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Envío Nacional",
      subtitle: "Todo el país",
      color: "text-purple-600"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Soporte Legal",
      subtitle: "Asesoramiento completo",
      color: "text-sage"
    }
  ]

  const termsCategories = [
    {
      icon: <ShoppingCart className="w-7 h-7" />,
      title: "Compras y Pedidos",
      description: "Proceso de compra, confirmación y gestión de pedidos",
      items: [
        "Disponibilidad sujeta a stock",
        "Confirmación tras procesamiento de pago",
        "Cancelación gratuita antes del envío",
        "Edad mínima: 18 años"
      ]
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      title: "Precios y Pagos",
      description: "Información sobre precios, métodos de pago y facturación",
      items: [
        "Precios en pesos argentinos (ARS)",
        "IVA y todos los impuestos incluidos",
        "Múltiples métodos de pago seguros",
        "Facturación electrónica"
      ]
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: "Envíos y Entregas",
      description: "Cobertura, tiempos y responsabilidades de envío",
      items: [
        "Cobertura en todo el territorio argentino",
        "Tiempos estimativos de entrega",
        "Responsabilidad del cliente en dirección",
        "Reporte de daños en 48 horas"
      ]
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: "Devoluciones",
      description: "Política de devoluciones, cambios y reembolsos",
      items: [
        "30 días corridos desde recepción",
        "Productos sin usar con etiquetas",
        "Contacto previo obligatorio",
        "Reembolsos en 5-10 días hábiles"
      ]
    }
  ]

  const legalInfo = [
    {
      title: "Información General",
      content: "Bahía Store es una marca de indumentaria sustentable operada por [Nombre de la Empresa], con domicilio en Av. Corrientes 1234, Ciudad Autónoma de Buenos Aires, Argentina."
    },
    {
      title: "Aceptación de Términos",
      content: "Al utilizar nuestro sitio web y realizar compras, aceptás estos términos y condiciones en su totalidad."
    },
    {
      title: "Modificaciones",
      content: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Top of Z */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-16 pb-12"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Scale className="w-4 h-4" />
              Términos Legales
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-white mb-6">
              Términos y
              <span className="block text-sage font-medium">Condiciones</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Estos términos rigen el uso de nuestro sitio web y la compra de nuestros productos sustentables
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Última actualización: Enero 2024</span>
            </div>
          </div>
        </motion.section>

        {/* Key Highlights - Right of Z */}
        <motion.section
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-12 h-12 ${highlight.color} bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{highlight.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Terms Categories - Middle of Z */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Categorías Principales</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Todo lo que necesitás saber sobre nuestros términos y condiciones
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {termsCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-sage/20 text-sage rounded-2xl flex items-center justify-center">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                    <p className="text-sage font-medium">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Legal Information - Bottom of Z */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {legalInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{info.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Responsibilities & Legal Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Responsabilidades</h3>
                  <p className="text-blue-600 font-medium">Derechos y obligaciones</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Uso legal y apropiado del sitio",
                  "Información veraz y actualizada",
                  "Confidencialidad de tu cuenta",
                  "Respeto a la propiedad intelectual"
                ].map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="bg-gradient-to-br from-sage to-sage/90 text-white rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">¿Tenés Dudas Legales?</h3>
                  <p className="text-white/80 font-medium">Estamos aquí para ayudarte</p>
                </div>
              </div>
              <p className="text-white/90 mb-6">
                Si tenés preguntas sobre estos términos y condiciones, no dudes en contactarnos
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-white/80" />
                <span className="text-white/90">legal@bahiastore.com</span>
              </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">hello@bahiastore.com</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-white/70">
                  Jurisdicción: República Argentina • Tribunales: CABA
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}