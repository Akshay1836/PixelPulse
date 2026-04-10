import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight, Sparkles } from 'lucide-react';
import AnimatedOnScroll from '../shared/AnimatedOnScroll';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-28 flex items-center justify-center text-center bg-background">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <AnimatedOnScroll>
          <h1 className="font-headline font-black text-7xl md:text-9xl lg:text-[10rem] tracking-tighter leading-none">
            PixelPulse
          </h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll delay={200}>
          <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground tracking-wide">
            A CREATIVE STUDIO
          </p>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
