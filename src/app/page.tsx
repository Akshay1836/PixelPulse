import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';
import { Hero } from '@/components/site/Hero';
import { AboutSection } from '@/components/site/AboutSection';
import { ServicesSection } from '@/components/site/ServicesSection';
import { FeaturedProducts } from '@/components/site/FeaturedProducts';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
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
    </div>
  );
}
