"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Leaf, Heart, Users, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustentabilidad",
      description:
        "Utilizamos únicamente materiales ecológicos y métodos de producción sustentables para minimizar nuestro impacto ambiental.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Producción Ética",
      description:
        "Salarios justos, condiciones de trabajo seguras y respeto por los derechos de los trabajadores son el núcleo de nuestra cadena de suministro.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidad",
      description:
        "Creemos en construir una comunidad de consumidores conscientes que se preocupan por el impacto de sus decisiones.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impacto Global",
      description: "Cada compra apoya iniciativas ambientales y programas sociales en nuestras comunidades asociadas.",
    },
  ]

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="heading-xl mb-6">Nuestra Historia</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Bahía Store nació de una creencia simple: la moda debe ser hermosa, ética y sustentable.
                Fundada en 2020, nos propusimos demostrar que el estilo no tiene que venir a expensas de nuestro planeta o su
                gente.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Cada pieza de nuestra colección cuenta una historia de artesanía consciente, desde los campos de algodón orgánico
                hasta los artesanos especializados que dan vida a nuestros diseños.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our sustainable fashion workshop"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estos principios guían todo lo que hacemos, desde el diseño hasta la entrega
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted text-sage rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">Nuestra Misión</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Crear una industria de la moda que respete tanto a las personas como al planeta. Estamos comprometidos con la transparencia,
              la sustentabilidad y demostrar que la moda ética puede ser accesible, hermosa y transformadora.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Nuestro Impacto</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Junto con nuestra comunidad, estamos marcando la diferencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-sage mb-2">50,000+</div>
              <p className="text-gray-600 dark:text-gray-300">Libras de algodón orgánico utilizadas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-sage mb-2">1,200+</div>
              <p className="text-gray-600 dark:text-gray-300">Artesanos apoyados globalmente</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-sage mb-2">25,000+</div>
              <p className="text-gray-600 dark:text-gray-300">Árboles plantados a través de alianzas</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
