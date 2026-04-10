import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '../ui/card';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-section-image');

export function AboutSection() {
  return (
    <section className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <Card className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </Card>
          <div className="text-center md:text-left">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
              The Aether Aesthetic
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We are a collective of artists, designers, and developers united by a passion for the "True Black" cinematic style. Our work is defined by high contrast, rich textures, and an emotional depth that transforms the ordinary into art. We believe in quality over quantity, and partner with clients who share our vision for creating something truly memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
