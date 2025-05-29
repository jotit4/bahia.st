"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Share2, ChevronDown, ChevronUp, Minus, Plus } from "lucide-react"

interface ProductClientProps {
  product: {
    id: number
    name: string
    price: number
    originalPrice?: number
    images: string[]
    colors: string[]
    sizes: string[]
    details: string
    slug: string
  }
}

export default function ProductClient({ product }: ProductClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [showSizeGuide, setShowSizeGuide] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>("details")

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Por favor selecciona talle y color")
      return
    }

    alert("La funcionalidad del carrito ha sido desactivada temporalmente")
  }

  const accordionSections = [
    {
      id: "details",
      title: "Product Details",
      content: product.details,
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content:
        "Free shipping on orders over $75. 30-day returns accepted. Items must be in original condition with tags attached.",
    },
    {
      id: "care",
      title: "Care Instructions",
      content: "Machine wash cold with like colors. Tumble dry low. Do not bleach. Iron on low heat if needed.",
    },
    {
      id: "sustainability",
      title: "Sustainability",
      content:
        "Made with sustainable materials and ethical manufacturing practices. We partner with certified suppliers who share our commitment to environmental responsibility.",
    },
  ]

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[3/4] relative overflow-hidden rounded-lg"
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden rounded-md border-2 transition-colors ${
                    selectedImage === index
                      ? "border-sage dark:border-sage"
                      : "border-transparent hover:border-sage/50"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-charcoal dark:text-white mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-sage">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-charcoal dark:text-white mb-3">
                Color: {selectedColor}
              </h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? "border-charcoal dark:border-white scale-110"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-charcoal dark:text-white">
                  Size: {selectedSize}
                </h3>
                <button
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-sm text-sage hover:text-sage/80 underline"
                >
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-sage bg-sage text-white"
                        : "border-gray-300 text-charcoal dark:text-white dark:border-gray-600 hover:border-sage"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Guide Modal */}
            {showSizeGuide && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
              >
                <h4 className="font-medium text-charcoal dark:text-white mb-2">
                  Size Guide
                </h4>
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <p>XS: 32-34 inches</p>
                  <p>S: 34-36 inches</p>
                  <p>M: 36-38 inches</p>
                  <p>L: 38-40 inches</p>
                  <p>XL: 40-42 inches</p>
                </div>
              </motion.div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-charcoal dark:text-white mb-3">
                Quantity
              </h3>
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 text-charcoal dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={addToCart}
                className="w-full bg-sage text-white py-3 px-6 rounded-md font-medium hover:bg-sage/90 transition-colors"
              >
                Add to Cart
              </button>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 py-2 px-4 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Wishlist</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 py-2 px-4 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>

            {/* Product Information Accordion */}
            <div className="space-y-2">
              {accordionSections.map((section) => (
                <div key={section.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                  <button
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === section.id ? null : section.id
                      )
                    }
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <span className="font-medium text-charcoal dark:text-white">
                      {section.title}
                    </span>
                    {expandedSection === section.id ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4"
                    >
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {section.content}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}