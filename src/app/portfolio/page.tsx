'use client';

import { useState, useMemo } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import MasonryGallery from '@/components/shared/MasonryGallery';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

const categories = ['All', ...Array.from(new Set(galleryImages.map(p => {
    const hint = p.imageHint.split(' ')[0];
    return hint.charAt(0).toUpperCase() + hint.slice(1);
})))];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  const filteredImageUrls = useMemo(() => {
    if (filter === 'All') {
      return galleryImages.map(p => p.imageUrl);
    }
    return galleryImages
      .filter(p => {
          const firstHint = p.imageHint.split(' ')[0];
          return firstHint.toLowerCase() === filter.toLowerCase();
      })
      .map(p => p.imageUrl);
  }, [filter]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <AnimatedOnScroll className="text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-gradient">
          Our Portfolio
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A curated selection of our finest work, showcasing our signature "True Black" cinematic style across various domains.
        </p>
      </AnimatedOnScroll>

      <AnimatedOnScroll delay={200} className="mt-12 flex justify-center">
        <Tabs value={filter} onValueChange={(value) => setFilter(value as any)}>
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </AnimatedOnScroll>

      <AnimatedOnScroll delay={400} className="mt-12">
        <MasonryGallery images={filteredImageUrls} />
      </AnimatedOnScroll>
    </div>
  );
}
