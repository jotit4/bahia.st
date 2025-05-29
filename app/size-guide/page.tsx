"use client"

import { motion } from "framer-motion"
import { Shirt, User } from "lucide-react"

export default function SizeGuidePage() {
  const sizeData = {
    headers: ["Talle", "Busto (cm)", "Cintura (cm)", "Cadera (cm)"],
    rows: [
      ["S", "84-88", "64-68", "90-94"],
      ["M", "88-92", "68-72", "94-98"],
      ["L", "92-96", "72-76", "98-104"],
      ["XL", "96-104", "76-80", "98-104"],
    ],
  }

  const measurementTips = [
    {
      icon: Shirt,
      title: "Busto",
      description: "Medí alrededor de la parte más completa de tu busto.",
    },
    {
      icon: User,
      title: "Cintura",
      description: "Medí alrededor de la parte más estrecha de tu cintura.",
    },
    {
      icon: User,
      title: "Cadera",
      description: "Medí alrededor de la parte más completa de tus caderas.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-light text-gray-700 mb-8">Guía de Talles</h1>
        </motion.div>

        {/* How to Measure Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-700 mb-8 flex items-center gap-3">
            <Shirt size={28} className="text-gray-500" />
            ¿Cómo tomar tus medidas?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Medite correctamente para encontrar el talle perfecto.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {measurementTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent size={48} className="text-gray-400" strokeWidth={1} />
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-gray-700">{tip.title}</h3>
                  <p className="text-base text-gray-600">{tip.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Size Chart Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-12"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                {sizeData.headers.map((header, i) => (
                   <th key={i} className="px-6 py-4 text-left text-base font-medium text-gray-700">
                     {header}
                   </th>
                 ))}
              </tr>
            </thead>
            <tbody>
              {sizeData.rows.map((row, i) => (
                <tr key={i} className="border-t border-gray-100">
                  {row.map((cell, j) => (
                     <td key={j} className="px-6 py-4 text-base text-gray-600">
                       {cell}
                     </td>
                   ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Back to Store Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a 
             href="/"
             className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-lg transition-colors duration-200 text-lg"
           >
             Volver a la tienda
           </a>
        </motion.div>
      </div>
    </div>
  )
}
