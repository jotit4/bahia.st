"use client"

import { useState, useMemo, Suspense } from "react"
import { ProductCard } from "@/components/ProductCard"
import { Filter } from "lucide-react"
import { products } from "@/mocks/products"
import SearchParamsComponent from "@/components/SearchParamsComponent"

function ShopContent() {
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    priceRange: "",
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const categories = [...new Set(products.map((p) => p.category))]
  const sizes = [...new Set(products.flatMap((p) => p.sizes))]
  const colors = [...new Set(products.flatMap((p) => p.colors))]

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filtro de búsqueda
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      if (filters.category && product.category !== filters.category) return false
      if (filters.size && !product.sizes.includes(filters.size)) return false
      if (filters.color && !product.colors.includes(filters.color)) return false
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number)
        if (product.price < min || (max !== 999999 && product.price > max)) return false
      }
      return true
    })
  }, [filters, searchQuery])

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key as keyof typeof prev] === value ? "" : value,
    }))
  }

  const clearFilters = () => {
    setFilters({
      category: "",
      size: "",
      color: "",
      priceRange: "",
    })
    setSearchQuery("")
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="heading-lg mb-2">Shop All</h1>
            <p className="text-gray-600 dark:text-gray-300">{filteredProducts.length} products</p>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 btn-secondary"
          >
            <Filter size={16} />
            Filtros
          </button>
        </div>

        {/* Search Results Display */}
        <SearchParamsComponent onSearchChange={handleSearchChange} />

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div
            className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 bg-card dark:bg-gray-800 p-6 rounded-lg h-fit`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Filtros</h3>
              <button onClick={clearFilters} className="text-sm text-sage hover:text-sage/80">
                Limpiar Todo
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Categoría</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => updateFilter("category", category)}
                    className={`block w-full text-left px-3 py-2 rounded ${
                      filters.category === category ? "bg-sage text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Talle</h4>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => updateFilter("size", size)}
                    className={`px-3 py-2 text-sm border rounded ${
                      filters.size === size ? "border-sage bg-sage text-white" : "border-gray-300 hover:border-sage"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Color</h4>
              <div className="grid grid-cols-3 gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => updateFilter("color", color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      filters.color === color ? "border-sage ring-2 ring-sage/30" : "border-gray-300 hover:border-sage"
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

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Rango de Precios</h4>
              <div className="space-y-2">
                {["0-20000", "20000-40000", "40000-60000", "60000-999999"].map((range) => (
                  <button
                    key={range}
                    onClick={() => updateFilter("priceRange", range)}
                    className={`block w-full text-left px-3 py-2 rounded ${
                      filters.priceRange === range ? "bg-sage text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    ${range.replace("-999999", "+").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  No se encontraron productos que coincidan con tus filtros.
                </p>
                <button onClick={clearFilters} className="btn-primary">
                  Limpiar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cream dark:bg-gray-900 py-8 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-sage border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300">Cargando productos...</p>
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  )
}
