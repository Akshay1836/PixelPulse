'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!stripePromise) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-20 text-center">
        <h1 className="font-headline text-4xl font-bold text-destructive">
          Stripe Not Configured
        </h1>
        <p className="mt-4 text-muted-foreground">
          Please provide your Stripe publishable key in the environment
          variables to enable checkout.
        </p>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
}
