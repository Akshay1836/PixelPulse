'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { digitalProducts } from '@/lib/data';
import type { DigitalProduct, DigitalProductCategory } from '@/lib/types';
import { ProductCard } from '@/components/site/ProductCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';

const categories: (DigitalProductCategory | 'All')[] = ['All', 'Presets', 'LUTs', 'Templates'];

export default function ShopPageClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') as DigitalProductCategory | 'All' || 'All';

  const [filter, setFilter] = useState<DigitalProductCategory | 'All'>(
    categories.includes(initialCategory) ? initialCategory : 'All'
  );

  const filteredProducts = useMemo(() => {
    if (filter === 'All') return digitalProducts;
    return digitalProducts.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <AnimatedOnScroll delay={200} className="mt-12 flex justify-center">
        <Tabs value={filter} onValueChange={(value) => setFilter(value as any)}>
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </AnimatedOnScroll>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <AnimatedOnScroll key={product.id} delay={index * 100}>
            <ProductCard product={product} />
          </AnimatedOnScroll>
        ))}
      </div>
    </>
  );
}
