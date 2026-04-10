import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import AnimatedOnScroll from '../shared/AnimatedOnScroll';

export function Hero() {
  return (
    <section className="w-full h-screen min-h-[600px] flex items-center justify-center text-center bg-transparent">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <AnimatedOnScroll>
          <h1 className="font-headline font-normal text-8xl md:text-[12rem] lg:text-[16rem] tracking-tight leading-none uppercase">
            PixelPulse
          </h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll delay={200}>
          <div className="mt-8 text-lg md:text-xl text-foreground/80 flex items-center justify-center gap-4">
            <span>Creative Studio</span>
            <MoveRight className="h-5 w-5" />
            <span>Digital Marketplace</span>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
