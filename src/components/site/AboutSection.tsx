import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-section-image');

export function AboutSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
              A Studio Forged in Passion
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              PixelPulse was born from a desire to blend fine art with commercial media. We are a collective of photographers, videographers, designers, and developers who believe in the power of a compelling visual story. Our aesthetic is defined by a "True Black" cinematic style—moody, atmospheric, and always authentic.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We don't just create content; we build visual experiences that resonate with audiences and elevate brands.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-primary/20">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
