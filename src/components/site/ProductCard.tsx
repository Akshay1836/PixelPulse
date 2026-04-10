'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { DigitalProduct } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function ProductCard({ product }: { product: DigitalProduct }) {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden group text-left h-full flex flex-col">
      <Link href={`/shop/${product.slug}`} className="block overflow-hidden">
        <div className="relative aspect-[4/5]">
          <Image
            src={product.coverImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="product image"
          />
        </div>
      </Link>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <Badge variant="secondary" className="mb-2">{product.category}</Badge>
          <h3 className="font-headline text-xl font-bold">
            <Link href={`/shop/${product.slug}`}>{product.name}</Link>
          </h3>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-2xl font-bold text-primary">${product.price}</p>
          <Button size="icon" variant="outline" onClick={() => addToCart(product)}>
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Add to Cart</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
