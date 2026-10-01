import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const origin = request.headers.get('origin') || 'http://localhost:3000';

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Audit Fantômes',
          },
          unit_amount: 1900,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/merci`,
    cancel_url: origin,
  });

  return NextResponse.json({ url: session.url });
}