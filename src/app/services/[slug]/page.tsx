import { notFound } from 'next/navigation';
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import MasonryGallery from '@/components/shared/MasonryGallery';
import AiProjectBriefing from '@/components/site/AiProjectBriefing';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params: { slug } }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const galleryImages = service.gallery
    .map((id) => PlaceHolderImages.find((p) => p.id === id)?.imageUrl)
    .filter((url): url is string => !!url);

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
          data-ai-hint="service hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedOnScroll>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white text-center">
              {service.title}
            </h1>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <AnimatedOnScroll>
            <p className="text-lg md:text-xl text-muted-foreground">
              {service.longDescription}
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
              Our Process
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A structured approach to guarantee exceptional results every time.
            </p>
          </AnimatedOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <AnimatedOnScroll key={step.step} delay={index * 100}>
                <Card className="h-full bg-background border-2 border-transparent hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-12 w-12 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">STEP {step.step}</p>
                        <CardTitle className="text-xl font-headline">
                          {step.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      {service.gallery.length > 0 && (
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedOnScroll className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
                Our Work
              </h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
              <MasonryGallery images={galleryImages} />
            </AnimatedOnScroll>
          </div>
        </section>
      )}


      <section id="booking-form" className="bg-card py-20 md:py-24">
         <div className="container mx-auto px-4 md:px-6">
           <AiProjectBriefing preselectedService={service.title} />
         </div>
      </section>
    </div>
  );
}
