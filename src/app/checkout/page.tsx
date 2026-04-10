'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';
import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
});

const cardElementOptions = {
    style: {
      base: {
        color: '#fafafa',
        fontFamily: '"PT Sans", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#a3a3a3',
        },
      },
      invalid: {
        color: '#BF3A26',
        iconColor: '#BF3A26',
      },
    },
};


export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsProcessing(true);

    if (!stripe || !elements) {
      toast({
        variant: 'destructive',
        title: 'Stripe not loaded',
        description: 'Please wait a moment and try again.',
      });
      setIsProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      toast({
        variant: 'destructive',
        title: 'Card element not found',
        description: 'There was an issue with the checkout form.',
      });
      setIsProcessing(false);
      return;
    }

    try {
      // 1. Create a PaymentIntent on the server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: cartTotal * 100 }), // amount in cents
      });

      const { clientSecret, error: serverError } = await response.json();

      if (serverError || !response.ok) {
        throw new Error(serverError || 'Failed to create payment intent.');
      }

      // 2. Confirm the payment on the client
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: values.name,
            email: values.email,
          },
        },
      });

      if (error) {
        // Show error to your customer (e.g., insufficient funds)
        toast({
          variant: 'destructive',
          title: 'Payment failed',
          description: error.message || 'An unknown error occurred.',
        });
        setIsProcessing(false);
      } else {
        // Show a success message to your customer
        if (paymentIntent.status === 'succeeded') {
          toast({
            title: 'Payment Successful!',
            description: 'Your order has been placed.',
          });
          clearCart();
          router.push('/checkout/success');
          // No need to setIsProcessing(false) as we are navigating away.
        } else {
            // Handle other payment statuses if needed
            toast({
                variant: 'destructive',
                title: 'Payment processing',
                description: `Payment status: ${paymentIntent.status}. Please contact support.`,
            });
            setIsProcessing(false);
        }
      }
    } catch (e: any) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: e.message || 'Could not process payment. Please try again.',
      });
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    // Prevent redirecting if the cart is empty because we are processing a payment
    if (cartItems.length === 0 && !isProcessing) {
      router.replace('/shop');
    }
  }, [cartItems, router, isProcessing]);


  if (cartItems.length === 0 && !isProcessing) {
    return (
        <div className="container mx-auto px-4 md:px-6 py-20 text-center">
            <h1 className="font-headline text-4xl font-bold">Your Cart is Empty</h1>
            <p className="mt-4 text-muted-foreground">Redirecting you to the shop...</p>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <AnimatedOnScroll className="text-center">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-gradient">
            Checkout
            </h1>
        </AnimatedOnScroll>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedOnScroll delay={200}>
                <div className="bg-card p-8 rounded-lg border">
                    <h2 className="text-2xl font-headline font-bold mb-6">Order Summary</h2>
                    <ScrollArea className="h-[300px] pr-4">
                        <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                                    <Image
                                        src={item.coverImage}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center">{item.quantity}</div>
                                </div>
                                <div className="flex-grow">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {item.category}
                                    </p>
                                </div>
                                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        </div>
                    </ScrollArea>
                    <Separator className="my-6" />
                     <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                         <div className="flex justify-between text-muted-foreground">
                            <span>Taxes</span>
                            <span>Calculated at next step</span>
                        </div>
                    </div>
                     <Separator className="my-6" />
                     <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll delay={400}>
                 <div className="bg-card p-8 rounded-lg border">
                    <h2 className="text-2xl font-headline font-bold mb-6">Payment Information</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john.doe@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormItem>
                                <FormLabel>Card Details</FormLabel>
                                <FormControl>
                                    <div className="p-3 rounded-md border border-input bg-transparent">
                                        <CardElement options={cardElementOptions} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <Button type="submit" size="lg" className="w-full mt-8" disabled={!stripe || isProcessing}>
                                {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {isProcessing ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
                            </Button>
                        </form>
                    </Form>
                 </div>
            </AnimatedOnScroll>
        </div>
    </div>
  );
}
