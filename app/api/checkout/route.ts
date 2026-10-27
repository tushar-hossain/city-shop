import { Product } from "@/type";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { items, email } = await request.json();

    if (!items?.length) {
      return NextResponse.json(
        { error: "Your cart is empty" },
        { status: 400 },
      );
    }

    const extractingItems = items?.map((item: Product) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(
          item.price * 100 * (1 - item.discountPercentage / 100),
        ),
        product_data: {
          name: item.title,
          description: item.description,
          images: item.images,
        },
      },
    }));

    const checkoutSession = await stripe.checkout.sessions.create({
      allowed_payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/session?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
      metadata: { email },
    });

    return NextResponse.json({
      success: true,
      id: checkoutSession.id,
      url: checkoutSession.url,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
