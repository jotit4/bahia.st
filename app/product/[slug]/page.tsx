"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Share2, ChevronDown, ChevronUp, Minus, Plus } from "lucide-react"
import { products } from "@/mocks/products"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

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
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-20 relative overflow-hidden rounded-md border-2 ${
                    selectedImage === index ? "border-sage" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
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
              <h1 className="heading-md mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-sage">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-medium">Size</label>
                <button
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-sm text-sage hover:text-sage/80"
                >
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-center border rounded-md transition-colors ${
                      selectedSize === size ? "border-sage bg-sage text-white" : "border-gray-300 hover:border-sage"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="font-medium block mb-3">Color: {selectedColor}</label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 ${
                      selectedColor === color ? "border-sage ring-2 ring-sage/30" : "border-gray-300 hover:border-sage"
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
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="font-medium block mb-3">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-md hover:border-sage"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-md hover:border-sage"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <button onClick={addToCart} className="w-full btn-primary py-4 text-lg" disabled={!product.inStock}>
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>

              <div className="flex gap-3">
                <button className="flex-1 btn-secondary flex items-center justify-center gap-2">
                  <Heart size={16} />
                  Add to Wishlist
                </button>
                <button className="flex-1 btn-secondary flex items-center justify-center gap-2">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-4">
              {accordionSections.map((section) => (
                <div key={section.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <span className="font-medium">{section.title}</span>
                    {expandedSection === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {expandedSection === section.id && (
                    <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">{section.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Size Guide Modal */}
        {showSizeGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-card dark:bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Size Guide</h3>
                <button onClick={() => setShowSizeGuide(false)} className="p-2 hover:text-sage">
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="font-medium">Size</div>
                  <div className="font-medium">Chest</div>
                  <div className="font-medium">Length</div>
                  <div>XS</div>
                  <div>32-34"</div>
                  <div>26"</div>
                  <div>S</div>
                  <div>34-36"</div>
                  <div>27"</div>
                  <div>M</div>
                  <div>36-38"</div>
                  <div>28"</div>
                  <div>L</div>
                  <div>38-40"</div>
                  <div>29"</div>
                  <div>XL</div>
                  <div>40-42"</div>
                  <div>30"</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
