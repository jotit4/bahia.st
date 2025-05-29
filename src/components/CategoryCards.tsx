"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function CategoryCards() {
  const featuredProducts = [
    {
      name: "Buzo Josh",
      image:
        "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/rni-films-img-432593b8-fb25-4d48-9253-11ca28c81251-a6769c2c273eec0ffb17452754167057-480-0.webp",
      href: "/product/buzo-josh",
      customOrder: true,
    },
    {
      name: "Mini 3 Volados",
      image:
        "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_5639-eab5cba092c8ad304817482733607072-640-0.webp",
      href: "/product/mini-3-volados",
      customOrder: true,
    },
    {
      name: "Top Tul con Lazo",
      image:
        "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/rni-films-img-2a2a426b-4fd0-4a38-9b9c-051834fb0865-a6c483753b1865c0f117482726305466-640-0.webp",
      href: "/product/top-tul-con-lazo",
      customOrder: true,
    },
    {
      name: "Top Pirus",
      image:
        "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2098-7ff6faec81c8a08cae17452627874554-640-0.webp",
      href: "/product/top-pirus",
      customOrder: true,
    },
    {
      name: "Bikini Palmer",
      image:
        "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2105-5859ab2ce583b3444d17452632740391-640-0.jpeg",
      href: "/product/bikini-palmer",
      customOrder: true,
    },
    {
      name: "Body Cherry",
      image:
        "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/rni-films-img-b25cfc5d-4a88-456e-986f-78a2b2b4c870-4b26562545e5e7b9e617453620123708-640-0.webp",
      href: "/product/body-cherry",
      customOrder: true,
    },
  ]

  // Mostrar los primeros 6 productos destacados
  const displayProducts = featuredProducts.slice(0, 6)

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-xl text-center mb-4">
          Explorá un nuevo estilo
        </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-light text-xl">
              Cada prenda es única, diseñada con amor y respeto por el medio ambiente. Encontrá tu estilo perfecto.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={product.href} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-smooth" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <h3 className="hero-text text-3xl md:text-4xl font-serif font-medium text-white tracking-wide px-8 py-6" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9), 6px 6px 12px rgba(0,0,0,0.7), 9px 9px 18px rgba(0,0,0,0.5)'}}>
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/shop" className="btn-primary">
            Ver Toda la Colección
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CategoryCards
