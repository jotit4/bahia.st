"use client"

// Crear un hook dummy para evitar errores de importación
export function useCart() {
  throw new Error("Cart functionality has been removed")
}

// Exportación por defecto dummy
export default function CartProvider() {
  return null
}
