import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()

    // Simulate Mercado Pago checkout creation (VISUAL ONLY)
    const mockCheckoutData = {
      id: `MP-${Date.now()}`,
      init_point: `/checkout/mercadopago?preference_id=MP-${Date.now()}`,
      items: items.map((item: any) => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
        currency_id: "ARS",
      })),
      total_amount: items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
    }

    // Log the simulated checkout creation
    console.log("Mercado Pago checkout simulation:", mockCheckoutData)

    // Return mock checkout URL
    return NextResponse.json({
      checkout_url: mockCheckoutData.init_point,
      preference_id: mockCheckoutData.id,
    })
  } catch (error: any) {
    console.error("Checkout simulation error:", error)
    return NextResponse.json({ error: error.message || "Failed to create checkout" }, { status: 500 })
  }
}
