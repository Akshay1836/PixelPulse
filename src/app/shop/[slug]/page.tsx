'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { digitalProducts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BeforeAfterSlider from '@/components/shared/BeforeAfterSlider';
import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  const product = digitalProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <AnimatedOnScroll>
          {product.beforeImage && product.afterImage ? (
            <BeforeAfterSlider
              before={product.beforeImage}
              after={product.afterImage}
              width={1200}
              height={800}
            />
          ) : product.mockupImages && product.mockupImages.length > 0 ? (
            <div className="relative aspect-[9/16] w-full max-w-md mx-auto">
              <Image
                src={product.mockupImages[0]}
                alt={`${product.name} mockup`}
                fill
                className="object-contain"
                data-ai-hint="template mockup"
              />
            </div>
          ) : (
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={product.coverImage}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
                data-ai-hint="product image"
              />
            </div>
          )}
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={200}>
            <Badge variant="secondary">{product.category}</Badge>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
                {product.name}
            </h1>
            <p className="mt-4 text-3xl font-bold text-primary">${product.price}</p>
            <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
            
            <div className="mt-8">
                <Button size="lg" className="w-full sm:w-auto" onClick={() => addToCart(product)}>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                </Button>
            </div>

            <Tabs defaultValue="description" className="mt-10">
                <TabsList>
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="text-muted-foreground pt-4">
                    {product.styleAndMood}
                </TabsContent>
                <TabsContent value="details" className="text-muted-foreground pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Installation:</h4>
                    <p>{product.installation}</p>
                </TabsContent>
                <TabsContent value="compatibility" className="text-muted-foreground pt-4">
                     {product.compatibility}
                </TabsContent>
            </Tabs>

        </AnimatedOnScroll>
      </div>
    </div>
  );
}
