const productsData = [
  {
    id: "1",
    slug: "buzo-josh",
    name: "Buzo Josh",
    price: 51750,
    transferPrice: 43987.5,
    installments: "3 cuotas sin interés de $17.250,00",
    originalPrice: null,
    category: "Abrigos",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Verde Salvia", "Gris"],
    images: [
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/rni-films-img-432593b8-fb25-4d48-9253-11ca28c81251-a6769c2c273eec0ffb17452754167057-480-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/rni-films-img-432593b8-fb25-4d48-9253-11ca28c81251-a6769c2c273eec0ffb17452754167057-480-0.webp",
    ],
    description: "Buzo Josh cómodo y abrigado, perfecto para el día a día.",
    details:
      "Fabricado con algodón de alta calidad, diseño moderno y cómodo. **Prenda a pedido - 7 días hábiles de despacho**",
    inStock: true,
    featured: true,
    bestseller: true,
    customOrder: true,
  },
  {
    id: "top-pirus",
    slug: "top-pirus",
    name: "Top Pirus",
    price: 22500,
    transferPrice: 19125,
    installments: "3 cuotas sin interés de $7.500,00",
    originalPrice: null,
    category: "Remeras",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blanco", "Negro", "Verde Salvia"],
    images: [
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2098-7ff6faec81c8a08cae17452627874554-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2098-7ff6faec81c8a08cae17452627874554-640-0.webp",
    ],
    description: "Top Pirus elegante y versátil para cualquier ocasión.",
    details: "Diseño moderno y cómodo, perfecto para combinar. **Prenda a pedido - 7 días hábiles de despacho**",
    inStock: true,
    featured: true,
    bestseller: false,
    customOrder: true,
  },
  {
    id: "bikini-palmer",
    slug: "bikini-palmer",
    name: "Bikini Palmer",
    price: 28900,
    transferPrice: 24565,
    installments: "3 cuotas sin interés de $9.633,33",
    originalPrice: null,
    category: "Bikinis",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco", "Verde Salvia"],
    images: [
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2105-5859ab2ce583b3444d17452632740391-640-0.jpeg",
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2105-5859ab2ce583b3444d17452632740391-640-0.jpeg",
    ],
    description: "Bikini Palmer con diseño moderno y cómodo.",
    details: "Bikini de alta calidad, perfecto para la playa. **Prenda a pedido - 7 días hábiles de despacho**",
    inStock: true,
    featured: true,
    bestseller: false,
    customOrder: true,
  },
  {
    id: "vestido-gala",
    slug: "vestido-gala",
    name: "Vestido Gala",
    price: 45000,
    transferPrice: 38250,
    installments: "3 cuotas sin interés de $15.000,00",
    originalPrice: null,
    category: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco", "Verde Salvia"],
    images: [
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2186-3d7723a19add47a5a617452793040675-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2186-3d7723a19add47a5a617452793040675-640-0.webp",
    ],
    description: "Vestido Gala elegante para ocasiones especiales.",
    details: "Vestido de gala con diseño sofisticado y elegante. **Prenda a pedido - 7 días hábiles de despacho**",
    inStock: true,
    featured: true,
    bestseller: true,
    customOrder: true,
  },
  {
    id: "pollera-vicky",
    slug: "pollera-vicky",
    name: "Pollera Vicky",
    price: 32000,
    transferPrice: 27200,
    installments: "3 cuotas sin interés de $10.666,67",
    originalPrice: null,
    category: "Pantalones",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco", "Verde Salvia"],
    images: [
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2180-ab74f25955b9fe992f17452787353401-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2180-ab74f25955b9fe992f17452787353401-640-0.webp",
    ],
    description: "Pollera Vicky moderna y versátil.",
    details: "Pollera con diseño contemporáneo y cómodo. **Prenda a pedido - 7 días hábiles de despacho**",
    inStock: true,
    featured: true,
    bestseller: false,
    customOrder: true,
  },
  {
    id: "set-traje-vintage",
    slug: "set-traje-vintage",
    name: "Set Traje Vintage",
    price: 65000,
    transferPrice: 55250,
    installments: "3 cuotas sin interés de $21.666,67",
    originalPrice: null,
    category: "Vestidos",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco", "Verde Salvia"],
    images: [
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2341-2bcbcb5f6a00c2fe9817453467241951-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_2341-2bcbcb5f6a00c2fe9817453467241951-640-0.webp",
    ],
    description: "Set Traje Vintage con estilo retro elegante.",
    details: "Conjunto vintage de alta calidad con diseño atemporal. **Prenda a pedido - 7 días hábiles de despacho**",
    inStock: true,
    featured: true,
    bestseller: true,
    customOrder: true,
  },
  {
    id: "2",
    slug: "remera-hielo",
    name: "Remera Hielo",
    price: 38900,
    transferPrice: 33065,
    installments: "3 cuotas sin interés de $12.966,67",
    originalPrice: null,
    category: "Remeras",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanco", "Hielo", "Verde Salvia"],
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    description: "Remera Hielo fresca y versátil para cualquier ocasión.",
    details: "Tela suave y transpirable, corte moderno.",
    inStock: true,
    featured: true,
    bestseller: false,
  },
  {
    id: "3",
    slug: "chaleco-derek",
    name: "Chaleco Derek",
    price: 32500,
    transferPrice: 27625,
    installments: "3 cuotas sin interés de $10.833,33",
    originalPrice: null,
    category: "Abrigos",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Azul Marino", "Verde Salvia"],
    images: [
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/rni-films-img-9fa95524-6e41-4a3e-8885-545fc7127d67-effdb3d3d263b0227c17472717604837-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/rni-films-img-9fa95524-6e41-4a3e-8885-545fc7127d67-effdb3d3d263b0227c17472717604837-640-0.webp",
    ],
    description: "Chaleco Derek elegante para looks sofisticados.",
    details: "Diseño clásico, perfecto para superponer. **Prenda a pedido - 7 días hábiles de despacho**",
    inStock: true,
    featured: true,
    bestseller: true,
    customOrder: true,
  },
  {
    id: "mini-3-volados",
    slug: "mini-3-volados",
    name: "Mini 3 Volados",
    price: 24500,
    transferPrice: 20825,
    installments: "3 cuotas sin interés de $8.166,67",
    originalPrice: null,
    category: "Pantalones",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Blanco", "Verde Salvia"],
    images: [
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_5639-eab5cba092c8ad304817482733607072-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/img_5639-eab5cba092c8ad304817482733607072-640-0.webp",
    ],
    description: "Mini 3 Volados con diseño romántico y femenino.",
    details:
      "Falda mini con tres volados superpuestos, perfecta para looks casuales y elegantes. **Prenda a pedido - 7 días hábiles de despacho**",
    inStock: true,
    featured: true,
    bestseller: false,
    customOrder: true,
  },
  {
    id: "top-tul-con-lazo",
    slug: "top-tul-con-lazo",
    name: "Top Tul con Lazo",
    price: 19500,
    transferPrice: 16575,
    installments: "3 cuotas sin interés de $6.500,00",
    originalPrice: null,
    category: "Remeras",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blanco", "Negro", "Verde Salvia"],
    images: [
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/rni-films-img-2a2a426b-4fd0-4a38-9b9c-051834fb0865-a6c483753b1865c0f117482726305466-640-0.webp",
      "https://dcdn-us.mitiendanube.com/stores/006/123/539/products/rni-films-img-2a2a426b-4fd0-4a38-9b9c-051834fb0865-a6c483753b1865c0f117482726305466-640-0.webp",
    ],
    description: "Top de tul delicado con lazo decorativo.",
    details:
      "Top confeccionado en tul suave con detalle de lazo, perfecto para ocasiones especiales. **Prenda a pedido - 7 días hábiles de despacho**",
    inStock: true,
    featured: true,
    bestseller: false,
    customOrder: true,
  },
] as const

// Exportación nombrada (PRINCIPAL)
export const products = productsData

// Exportación por defecto (SECUNDARIA)
export default productsData

// Tipo para TypeScript
export type Product = (typeof productsData)[0]
