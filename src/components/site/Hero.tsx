import Image from 'next/image';
import AnimatedOnScroll from '../shared/AnimatedOnScroll';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroBannerImage = PlaceHolderImages.find((p) => p.id === 'hero-banner');

export function Hero() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-background text-foreground py-12">
      <div className="flex items-center justify-center">
        <AnimatedOnScroll>
          <h1 className="font-headline font-bold text-7xl md:text-9xl lg:text-[12rem] leading-none">
            PixelPulse
          </h1>
        </AnimatedOnScroll>
      </div>
      
      <AnimatedOnScroll className="w-full max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center text-xs uppercase tracking-widest text-foreground/60">
            <span>PixelPulse Creative</span>
            <span>Introducing</span>
        </div>
        
        <div className="relative w-full h-40 md:h-56 my-4 overflow-hidden">
            <div className="w-full h-px bg-foreground/30 absolute top-0" />
            {heroBannerImage && (
              <Image 
                  src={heroBannerImage.imageUrl} 
                  alt={heroBannerImage.description} 
                  fill 
                  className="object-cover"
                  data-ai-hint={heroBannerImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="font-serif text-2xl md:text-4xl uppercase tracking-[0.3em] text-white">
                    Visual Storytelling
                </h2>
            </div>
            <div className="w-full h-px bg-foreground/30 absolute bottom-0" />
        </div>

        <div className="flex justify-between items-center text-xs uppercase tracking-widest text-foreground/60">
            <span>Creative Studio</span>
            <span>2024</span>
            <span>Digital Marketplace</span>
        </div>
      </AnimatedOnScroll>
    </section>
  );
}
