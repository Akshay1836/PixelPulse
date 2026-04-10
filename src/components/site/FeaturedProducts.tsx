import Link from 'next/link';
import { digitalProducts } from '@/lib/data';
import { ProductCard } from './ProductCard';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function FeaturedProducts() {
  const featured = digitalProducts.slice(0, 4);

  return (
    <section className="bg-card py-20 md:py-24 w-full">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
          Digital Assets
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Instantly elevate your work with our collection of presets, LUTs, and templates.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-16">
          <Button asChild size="lg">
            <Link href="/shop">
              Visit the Shop <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
