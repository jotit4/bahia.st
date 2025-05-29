import { notFound } from "next/navigation"
import { products } from "@/mocks/products"
import ProductClient from "./ProductClient"

// Generate static params for all product slugs
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

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

  return <ProductClient product={product} />
}
