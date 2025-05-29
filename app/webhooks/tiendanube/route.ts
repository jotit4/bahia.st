import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Handle Tiendanube webhooks
    // This is where you would process orders, inventory updates, etc.

    console.log("Tiendanube webhook received:", body)

    // Process the webhook based on event type
    switch (body.event) {
      case "order/created":
        // Handle new order
        break
      case "order/updated":
        // Handle order update
        break
      case "product/created":
        // Handle new product
        break
      case "product/updated":
        // Handle product update
        break
      default:
        console.log("Unhandled webhook event:", body.event)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
