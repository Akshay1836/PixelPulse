import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';
import { Hero } from '@/components/site/Hero';
import { ServicesSection } from '@/components/site/ServicesSection';
import { FeaturedProducts } from '@/components/site/FeaturedProducts';
import { WhyChooseUsSection } from '@/components/site/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/site/TestimonialsSection';
import { HomeCtaSection } from '@/components/site/HomeCtaSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <AnimatedOnScroll className="w-full">
        <ServicesSection />
      </AnimatedOnScroll>
      <AnimatedOnScroll className="w-full">
        <WhyChooseUsSection />
      </AnimatedOnScroll>
      <AnimatedOnScroll className="w-full">
        <FeaturedProducts />
      </AnimatedOnScroll>
      <AnimatedOnScroll className="w-full">
        <TestimonialsSection />
      </AnimatedOnScroll>
       <AnimatedOnScroll className="w-full">
        <HomeCtaSection />
      </AnimatedOnScroll>
    </div>
  );
}
