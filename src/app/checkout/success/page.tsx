import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';

export default function CheckoutSuccessPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
            <AnimatedOnScroll>
                <CheckCircle2 className="h-24 w-24 text-green-500 mx-auto" />
                <h1 className="font-headline text-4xl md:text-5xl font-bold mt-8">Thank You For Your Order!</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Your order has been confirmed. You will receive an email shortly with the download links for your digital products.
                </p>
                <Button asChild size="lg" className="mt-10">
                    <Link href="/shop">Continue Shopping</Link>
                </Button>
            </AnimatedOnScroll>
        </div>
    );
}
