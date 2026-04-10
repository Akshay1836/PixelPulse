import { Suspense } from 'react';
import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';
import ShopPageClient from './ShopPageClient';
import { Skeleton } from '@/components/ui/skeleton';

function ShopPageFallback() {
    return (
        <div>
            <div className="mt-12 flex justify-center">
                <Skeleton className="h-10 w-[240px] rounded-md" />
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <Skeleton className="aspect-[4/5] w-full rounded-lg" />
                        <Skeleton className="h-5 w-20 rounded-md" />
                        <Skeleton className="h-6 w-3/4 rounded-md" />
                        <div className="flex justify-between items-center mt-2">
                            <Skeleton className="h-8 w-1/4 rounded-md" />
                            <Skeleton className="h-10 w-10 rounded-md" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <AnimatedOnScroll className="text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-gradient">
          The Shop
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Curated digital assets to elevate your creative work instantly.
        </p>
      </AnimatedOnScroll>
      
      <Suspense fallback={<ShopPageFallback />}>
        <ShopPageClient />
      </Suspense>
    </div>
  );
}
