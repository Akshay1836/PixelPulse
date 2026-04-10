import { NextResponse } from 'next/server';
import Stripe from 'stripe';

let stripe: Stripe | null = null;

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return null;
  }
  if (!stripe) {
    stripe = new Stripe(secretKey);
  }
  return stripe;
}

export async function POST(request: Request) {
  const stripeClient = getStripe();

  if (!stripeClient) {
    return NextResponse.json(
      { error: 'Stripe has not been configured. Please add STRIPE_SECRET_KEY to your environment variables.' },
      { status: 500 }
    );
  }

  try {
    const { amount } = await request.json();

    if (typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: Math.round(amount), // amount in cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    console.error('Error creating PaymentIntent:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
