import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';
import { Hero } from '@/components/site/Hero';
import { ServicesSection } from '@/components/site/ServicesSection';
import { FeaturedProducts } from '@/components/site/FeaturedProducts';
import { TestimonialsSection } from '@/components/site/TestimonialsSection';
import { AboutSection } from '@/components/site/AboutSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Hero />
      <AnimatedOnScroll className="w-full">
        <AboutSection />
      </AnimatedOnScroll>
      <AnimatedOnScroll className="w-full">
        <ServicesSection />
      </AnimatedOnScroll>
      <AnimatedOnScroll className="w-full">
        <FeaturedProducts />
      </AnimatedOnScroll>
      <AnimatedOnScroll className="w-full">
        <TestimonialsSection />
      </AnimatedOnScroll>
      <div className="fixed bottom-0 left-0 w-full">
        
      </div>
    </div>
  );
}
