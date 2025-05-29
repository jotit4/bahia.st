"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail, ChevronDown, ChevronUp } from "lucide-react"

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué materiales usan?",
      answer:
        "Usamos únicamente materiales sustentables incluyendo algodón orgánico, lino, Tencel, poliéster reciclado y otras telas ecológicas. Todos nuestros materiales provienen de proveedores certificados.",
    },
    {
      question: "¿Cómo cuido mis prendas de Bahía Store?",
      answer:
        "La mayoría de las prendas se pueden lavar a máquina con agua fría junto con colores similares. Recomendamos secar al aire cuando sea posible. Las instrucciones específicas de cuidado se incluyen con cada prenda y en las páginas de productos.",
    },
    {
      question: "¿Cuál es su política de devoluciones?",
      answer:
        "Ofrecemos devoluciones de 30 días en todas las prendas en condición original con etiquetas. Las prendas deben estar sin usar y sin lavar. El envío de devolución es gratuito para cambios.",
    },
    {
      question: "¿Hacen envíos internacionales?",
      answer:
        "Actualmente enviamos dentro de Argentina. Estamos trabajando para expandir a más países pronto. Suscribite a nuestro newsletter para ser notificado cuando enviemos a tu área.",
    },
    {
      question: "¿Cómo puedo rastrear mi pedido?",
      answer:
        "Una vez que tu pedido sea enviado, recibirás un número de seguimiento por email. También podés rastrear tu pedido iniciando sesión en tu cuenta en nuestro sitio web.",
    },
    {
      question: "¿Sus productos son realmente sustentables?",
      answer:
        "¡Sí! Estamos comprometidos con la transparencia. Todos nuestros productos usan materiales sustentables, fabricación ética y compensamos nuestra huella de carbono. Podés leer más sobre nuestras prácticas sustentables en nuestra página Nosotros.",
    },
  ]

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890"
  const whatsappMessage = encodeURIComponent("¡Hola! Tengo una pregunta sobre los productos de Bahía Store.")

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="heading-lg mb-4">Contactanos</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tenés preguntas sobre nuestros productos o prácticas sustentables? Nos encantaría escucharte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-md mb-6">Métodos de Contacto</h2>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-card dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-300">Respuestas rápidas vía WhatsApp</p>
                    <p className="text-sm text-sage">Hacé clic para iniciar chat</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@bahiastore.com"
                  className="flex items-center gap-4 p-6 bg-card dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-muted text-sage rounded-full flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">hello@bahiastore.com</p>
                    <p className="text-sm text-sage">Respondemos en 24 horas</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="heading-md mb-6">Preguntas Frecuentes</h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card dark:bg-gray-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-medium pr-4">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp size={20} className="text-sage flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-sage flex-shrink-0" />
                    )}
                  </button>

                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">{faq.answer}</div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
