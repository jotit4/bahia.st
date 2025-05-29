"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Users, Mail, FileText, Star, ArrowRight, CheckCircle, Globe, Database, UserCheck } from "lucide-react"

export default function PrivacyPage() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Proteccion de Datos",
      description: "Tus datos personales estan protegidos con los mas altos estandares de seguridad",
      color: "blue"
    },
    {
      icon: Eye,
      title: "Transparencia",
      description: "Te informamos claramente que datos recopilamos y como los utilizamos",
      color: "green"
    },
    {
      icon: Lock,
      title: "Control Total",
      description: "Tenes derecho a acceder, modificar o eliminar tus datos en cualquier momento",
      color: "purple"
    }
  ]

  const dataTypes = [
    {
      icon: Users,
      title: "Informacion Personal",
      items: ["Nombre y apellido", "Direccion de email", "Numero de telefono", "Direccion de envio y facturacion", "Informacion de pago (procesada de forma segura)"]
    },
    {
      icon: Globe,
      title: "Informacion de Navegacion",
      items: ["Direccion IP", "Tipo de navegador y dispositivo", "Paginas visitadas y tiempo de permanencia", "Preferencias de compra"]
    }
  ]

  const dataUsage = [
    { icon: CheckCircle, title: "Procesamiento de Pedidos", desc: "Para procesar y enviar tus compras" },
    { icon: Mail, title: "Comunicacion", desc: "Para enviarte confirmaciones y actualizaciones" },
    { icon: Star, title: "Mejora del Servicio", desc: "Para personalizar tu experiencia de compra" },
    { icon: Shield, title: "Seguridad", desc: "Para proteger tu cuenta y prevenir fraudes" }
  ]

  const userRights = [
    "Acceso a tus datos personales",
    "Rectificacion de informacion incorrecta",
    "Eliminacion de tus datos",
    "Portabilidad de datos",
    "Oposicion al procesamiento",
    "Limitacion del tratamiento"
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-sage/10 rounded-full mb-8"
            >
              <Shield className="w-10 h-10 text-sage" />
            </motion.div>
            <h1 className="text-5xl font-light text-gray-700 mb-8">Politica de Privacidad</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed">
                En Bahia Store respetamos tu privacidad y nos comprometemos a proteger tus datos personales con los mas altos estandares.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-sage/10 rounded-full">
                <span>Ultima actualizacion: Enero 2024</span>
              </div>
            </div>
          </div>

          {/* Privacy Hero Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative bg-gradient-to-r from-sage to-sage/80 rounded-3xl p-12 text-white overflow-hidden mb-20"
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 mr-3" />
                <p className="text-lg font-medium mb-2">Proteccion Garantizada</p>
              </div>
              <p className="text-white/90">Cumplimos con todas las normativas de proteccion de datos</p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
          </motion.div>
        </motion.section>

        {/* Privacy Principles */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">Nuestros Principios</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tres pilares fundamentales que guian nuestro compromiso con tu privacidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    principle.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    principle.color === 'green' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{principle.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Data Collection */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Informacion que Recopilamos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-sage/10 rounded-full mr-4">
                      <IconComponent className="w-6 h-6 text-sage" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{type.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-sage mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Data Usage */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Como Utilizamos tu Informacion</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataUsage.map((usage, index) => {
              const IconComponent = usage.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sage/10 rounded-full mb-4">
                    <IconComponent className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{usage.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{usage.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* User Rights */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Tus Derechos y Proteccion</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tenes control total sobre tus datos personales
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-sage/5 rounded-lg"
                >
                  <UserCheck className="w-5 h-5 text-sage mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{right}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Security Measures */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Proteccion de Datos</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Medidas de Seguridad</h4>
                  <ul className="space-y-3">
                    {[
                      "Encriptacion SSL para toda la informacion sensible",
                      "Servidores seguros con acceso restringido",
                      "Monitoreo continuo de seguridad",
                      "Auditorias regulares de seguridad",
                      "Cumplimiento de estandares internacionales"
                    ].map((measure, index) => (
                      <li key={index} className="flex items-start">
                        <Shield className="w-5 h-5 text-sage mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Acceso a Datos</h4>
                  <ul className="space-y-3">
                    {[
                      "Solo personal autorizado tiene acceso",
                      "Registros de acceso y modificaciones",
                      "Capacitacion regular en privacidad",
                      "Politicas estrictas de confidencialidad"
                    ].map((access, index) => (
                      <li key={index} className="flex items-start">
                        <Lock className="w-5 h-5 text-sage mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{access}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Cookies Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cookies y Tecnologias Similares</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-4 mb-6">
              Utilizamos cookies para mejorar tu experiencia de navegacion, recordar tus preferencias y analizar el uso del sitio.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { type: "Esenciales", desc: "Necesarias para el funcionamiento del sitio" },
                { type: "Funcionales", desc: "Mejoran la funcionalidad y personalizacion" },
                { type: "Analiticas", desc: "Nos ayudan a entender como usas el sitio" }
              ].map((cookie, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">{cookie.type}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{cookie.desc}</p>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              Podes gestionar tus preferencias de cookies en cualquier momento desde la configuracion de tu navegador.
            </p>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-sage/10 to-sage/5 rounded-3xl p-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Tenes Preguntas sobre Privacidad?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Si tenes alguna consulta sobre nuestra politica de privacidad o queres ejercer tus derechos, contactanos:
            </p>
            
            <div className="space-y-2 mb-8">
              <p><strong>Email:</strong> privacy@bahiastore.com</p>
              <p><strong>Telefono:</strong> +54 11 1234-5678</p>
              <p><strong>Direccion:</strong> Av. Corrientes 1234, CABA, Argentina</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-sage text-white rounded-full font-medium hover:bg-sage/90 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contactar Equipo de Privacidad
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}