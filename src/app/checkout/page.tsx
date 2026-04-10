'use client';

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
import { CreditCard } from 'lucide-react';
import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  // Basic card details for UI purposes. Not for actual processing.
  card_number: z.string().min(16, { message: 'Card number must be 16 digits.' }).max(16, {message: 'Card number must be 16 digits.'}).optional(),
  card_expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Invalid expiry date (MM/YY).' }).optional(),
  card_cvc: z.string().min(3, { message: 'CVC must be 3 digits.' }).max(4, {message: 'CVC must be 3-4 digits.'}).optional(),
});

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      card_number: '',
      card_expiry: '',
      card_cvc: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, you would process the payment here.
    console.log('Order placed:', { values, cartItems, cartTotal });
    clearCart();
    router.push('/checkout/success');
  };

  // This check should happen after hooks, and should be inside the component body
  useEffect(() => {
    if (cartItems.length === 0) {
      router.replace('/shop');
    }
  }, [cartItems, router]);


  if (cartItems.length === 0) {
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
                            <FormField
                                control={form.control}
                                name="card_number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Card Number</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input placeholder="•••• •••• •••• ••••" {...field} className="pl-10" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="card_expiry"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Expiry</FormLabel>
                                            <FormControl>
                                                <Input placeholder="MM/YY" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="card_cvc"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>CVC</FormLabel>
                                            <FormControl>
                                                <Input placeholder="•••" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full mt-8" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
                            </Button>
                        </form>
                    </Form>
                 </div>
            </AnimatedOnScroll>
        </div>
    </div>
  );
}
