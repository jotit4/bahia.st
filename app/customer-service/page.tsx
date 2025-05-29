"use client"

import { motion } from "framer-motion"
import { Clock, MessageCircle, Mail, Phone, HelpCircle, Package, CreditCard, RefreshCw, ArrowRight, Star, FileText } from "lucide-react"

export default function CustomerServicePage() {
  const primaryContact = {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "Chat en Vivo",
    subtitle: "Respuesta inmediata",
    description: "Nuestro equipo está disponible para ayudarte en tiempo real",
    availability: "Lun - Vie: 9:00 - 18:00",
    action: "Iniciar Conversación",
    href: "#",
    featured: true
  }

  const secondaryContacts = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Para consultas detalladas",
      detail: "hello@bahiastore.com",
      action: "Enviar Email",
      href: "mailto:hello@bahiastore.com"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Teléfono",
      description: "Asistencia telefónica",
      detail: "+54 11 1234-5678",
      action: "Llamar Ahora",
      href: "tel:+541112345678"
    }
  ]

  const helpCategories = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Pedidos y Envíos",
      description: "Seguimiento, modificaciones y entregas",
      topics: ["Rastrear pedido", "Cambiar dirección", "Tiempos de entrega"]
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Devoluciones",
      description: "Cambios, reembolsos y garantías",
      topics: ["Iniciar devolución", "Política de cambios", "Estado de reembolso"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pagos y Facturación",
      description: "Métodos de pago y facturación",
      topics: ["Formas de pago", "Problemas de cobro", "Facturas"]
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Información General",
      description: "Productos, talles y cuidados",
      topics: ["Guía de talles", "Cuidado de prendas", "Materiales"]
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
          className="pt-16 pb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Atención Premium
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Estamos acá para
            <span className="block text-sage font-medium">ayudarte</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo de especialistas está disponible para brindarte la mejor experiencia de compra
          </p>
        </motion.section>

        {/* Primary Contact - Center Focus */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-sage to-sage/80 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    {primaryContact.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{primaryContact.title}</h2>
                    <p className="text-white/80">{primaryContact.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  {primaryContact.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={primaryContact.href}
                    className="inline-flex items-center justify-center gap-2 bg-white text-sage px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
                  >
                    {primaryContact.action}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <div className="flex items-center gap-2 text-white/80">
                    <Clock className="w-5 h-5" />
                    <span>{primaryContact.availability}</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-full h-64 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-24 h-24 text-white/30" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Secondary Contacts - Right side of Z */}
        <motion.section
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-right mb-12">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Otras formas de contacto</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Elegí el canal que prefieras</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-sage/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage/10 text-sage rounded-xl flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-all duration-300">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{contact.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{contact.description}</p>
                      <p className="text-sage font-medium mb-4">{contact.detail}</p>
                      <a
                        href={contact.href}
                        className="inline-flex items-center gap-2 text-sage hover:text-sage/80 font-medium transition-colors"
                      >
                        {contact.action}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Help Categories - Bottom of Z */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">¿En qué podemos ayudarte?</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Explorá nuestras categorías de ayuda para encontrar la información que necesitás
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-sage/20 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-sage/10 text-sage rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage group-hover:text-white transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-sage/60 rounded-full"></div>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Hours Footer */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pb-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sage/10 text-sage rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Horarios de Atención</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600 dark:text-gray-300">
              <div className="space-y-1">
                <p className="font-medium text-gray-900 dark:text-white">Lunes a Viernes</p>
                <p className="text-sage font-medium">9:00 - 18:00</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-900 dark:text-white">Sábados</p>
                <p className="text-sage font-medium">10:00 - 16:00</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-900 dark:text-white">Domingos</p>
                <p className="text-gray-400">Cerrado</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">Horario de Argentina (GMT-3)</p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}