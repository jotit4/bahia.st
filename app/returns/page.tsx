"use client"

import { motion } from "framer-motion"
import { RefreshCw, Package, Clock, CheckCircle, XCircle, Mail, ArrowLeft, Star, ArrowRight, Shield, MessageCircle, Phone } from "lucide-react"

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Iniciá tu devolución",
      description: "Contactanos por email o WhatsApp dentro de los 30 días"
    },
    {
      step: 2,
      title: "Empacá tu producto",
      description: "Usá el packaging original o uno similar, incluí todas las etiquetas"
    },
    {
      step: 3,
      title: "Envianos el producto",
      description: "Te proporcionamos la etiqueta de envío prepaga"
    },
    {
      step: 4,
      title: "Procesamos tu devolución",
      description: "Una vez recibido, procesamos el reembolso en 3-5 días hábiles"
    }
  ]

  const acceptedConditions = [
    "Producto sin usar y en condición original",
    "Etiquetas originales adjuntas",
    "Dentro de los 30 días de la compra",
    "Packaging original o similar",
    "Sin daños, manchas o alteraciones"
  ]

  const notAcceptedItems = [
    "Productos personalizados o hechos a medida",
    "Ropa interior por razones de higiene",
    "Productos dañados por mal uso",
    "Artículos en liquidación (salvo defecto de fábrica)"
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
                <RefreshCw className="w-4 h-4" />
                Devoluciones Fáciles
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                Cambios y
                <span className="block text-sage font-medium">devoluciones</span>
                sin complicaciones
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Tu satisfacción es nuestra prioridad. Proceso simple y gratuito.
              </p>
            </div>
            
            {/* Policy Highlight - Top Right of Z */}
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
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold">30 Días</h2>
                      <p className="text-white/80">Para devolver</p>
                    </div>
                  </div>
                  <p className="text-lg text-white/90 mb-6">
                    Devoluciones gratuitas sin costo adicional durante 30 días
                  </p>
                  <div className="flex items-center gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5" />
                    <span>Proceso 100% digital</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Return Process - Center Focus */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Proceso Simple</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Solo 4 pasos para completar tu devolución
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {returnSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-sage text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Conditions - Diagonal Flow */}
        <motion.section
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Accepted Conditions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-sage/10 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Condiciones Aceptadas</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">Productos elegibles</p>
                </div>
              </div>
              <div className="space-y-4">
                {acceptedConditions.map((condition, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{condition}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Not Accepted Items */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-br from-red-50 to-red-100/50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-2xl flex items-center justify-center">
                  <XCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">No Aceptamos</h3>
                  <p className="text-red-600 dark:text-red-400 font-medium">Productos excluidos</p>
                </div>
              </div>
              <div className="space-y-4">
                {notAcceptedItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Refund Information & Contact - Bottom Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Información de Reembolsos</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Todo lo que necesitás saber sobre tiempos y métodos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-sage/10 text-sage rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sage group-hover:text-white transition-all duration-300">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tiempo de Procesamiento</h3>
              <p className="text-gray-600 dark:text-gray-300">3-5 días hábiles una vez recibido el producto</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-sage/10 text-sage rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sage group-hover:text-white transition-all duration-300">
                <RefreshCw className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Método de Reembolso</h3>
              <p className="text-gray-600 dark:text-gray-300">Mismo método de pago utilizado en la compra</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-sage/10 text-sage rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sage group-hover:text-white transition-all duration-300">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cambios</h3>
              <p className="text-gray-600 dark:text-gray-300">Cambios de talle sin costo adicional</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-sage/5 to-sage/10 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 text-center">
            <div className="w-20 h-20 bg-sage/10 text-sage rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-4">¿Querés iniciar una devolución?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactanos con tu número de pedido y te guiaremos en el proceso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:returns@bahiastore.com?subject=Solicitud de Devolución"
                className="bg-sage text-white px-8 py-4 rounded-2xl hover:bg-sage/90 transition-all duration-300 font-medium text-lg hover:scale-105"
              >
                Enviar Email
              </a>
              <a
                href="https://wa.me/+541112345678?text=Hola, quiero iniciar una devolución"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-2xl hover:bg-green-700 transition-all duration-300 font-medium text-lg hover:scale-105"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Back to Store */}
          <div className="text-center mt-12">
            <a
              href="/shop"
              className="inline-flex items-center text-sage hover:text-sage/80 transition-colors text-lg font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a la Tienda
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}