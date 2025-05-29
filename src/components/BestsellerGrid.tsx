"use client"

import { ProductCard } from "./ProductCard"
import { Product, products } from "@/mocks/products"

export function BestsellerGrid() {
  // Añadir verificación para evitar errores si products es undefined
  const bestsellers = products ? products.filter((product) => product.bestseller).slice(0, 8) : []

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-xl text-center mb-4">
            Más Vendidos
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-light text-lg">
             Nuestras prendas más queridas por la comunidad. Cada una seleccionada por su calidad excepcional y diseño atemporal.
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellerGrid
