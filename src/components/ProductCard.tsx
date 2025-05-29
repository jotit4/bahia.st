"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Product } from "@/mocks/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  // Verificar que product existe y tiene las propiedades necesarias
  if (!product || !product.sizes || !product.colors || !product.images) {
    return null // No renderizar nada si el producto no es válido
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link href={`/product/${product.slug}`}>
        <div
          className="relative overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-md transition-smooth hover-lift"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image */}
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image
              src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Sale Badge */}
            {product.originalPrice && (
              <div className="absolute top-2 left-2 bg-sage text-white px-2 py-1 text-xs rounded">Sale</div>
            )}
            {!product.inStock && (
              <div className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 text-xs rounded">
                Out of Stock
              </div>
            )}

            {/* Quick Add Button */}
            <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  console.log("Added to wishlist:", product.name)
                }}
                className="flex-1 bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-smooth text-sm font-light"
              >
                <Heart size={16} className="inline mr-1" /> Wishlist
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <h3 className="font-semibold text-foreground mb-2 text-lg">{product.name}</h3>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-sage text-xl">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through font-medium">${product.originalPrice}</span>
              )}
            </div>

            {/* Size Selection */}
            <div className="flex gap-1 mb-2">
              {product.sizes.slice(0, 3).map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedSize(size)
                  }}
                  className={`text-xs px-2 py-1 border rounded transition-smooth ${
                    selectedSize === size
                      ? "bg-sage text-white border-sage"
                      : "bg-white text-gray-700 border-gray-300 hover:border-sage hover-lift"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Color Selection */}
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((color) => (
                <button
                  key={color}
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedColor(color)
                  }}
                  className={`w-4 h-4 rounded-full border-2 ${
                    selectedColor === color ? "border-sage" : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      color.toLowerCase() === "white"
                        ? "#ffffff"
                        : color.toLowerCase() === "black"
                          ? "#000000"
                          : color.toLowerCase() === "sage"
                            ? "#7EA89A"
                            : color.toLowerCase() === "natural"
                              ? "#F5F5DC"
                              : color.toLowerCase() === "navy"
                                ? "#000080"
                                : color.toLowerCase() === "cream"
                                  ? "#F5F5DC"
                                  : color.toLowerCase() === "grey"
                                    ? "#808080"
                                    : "#cccccc",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard
