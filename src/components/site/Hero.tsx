import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight, Sparkles } from 'lucide-react';
import AnimatedOnScroll from '../shared/AnimatedOnScroll';

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black z-0">
        {/* Placeholder for a background video or image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <AnimatedOnScroll>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-500">
              Where Vision Meets Velocity
            </span>
          </h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            PixelPulse is a creative studio and digital marketplace for brands and creators who seek the exceptional.
          </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll delay={400} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/services/photography">
              Explore Services <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/shop">
              Shop Digital Assets <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
