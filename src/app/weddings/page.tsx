import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedOnScroll from '@/components/shared/AnimatedOnScroll';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Camera, Clapperboard, Heart, Mail } from 'lucide-react';
import MasonryGallery from '@/components/shared/MasonryGallery';
import AiProjectBriefing from '@/components/site/AiProjectBriefing';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const heroImage = PlaceHolderImages.find((p) => p.id === 'service-hero-weddings');
const galleryImageIds = ['gallery-3', 'gallery-1', 'gallery-5', 'gallery-8', 'gallery-2', 'gallery-4', 'gallery-6', 'gallery-7'];
const galleryImages = galleryImageIds
  .map((id) => PlaceHolderImages.find((p) => p.id === id)?.imageUrl)
  .filter((url): url is string => !!url);

const weddingPackages = [
  {
    title: 'Fine Art Photography',
    icon: Camera,
    description: 'Every moment, beautifully captured with an artistic and timeless touch.',
    features: [
      'Full-day coverage (8 hours)',
      'Online gallery with high-resolution images',
      'Professional editing & color grading',
      'A curated selection of prints',
    ],
    price: '$3,500',
  },
  {
    title: 'Cinematic Videography',
    icon: Clapperboard,
    description: 'A breathtaking film of your special day, telling your unique love story.',
    features: [
      '6-8 minute highlight film',
      'Full ceremony & speeches recording',
      'Drone footage (venue permitting)',
      'Licensed music soundtrack',
    ],
    price: '$4,000',
  },
  {
    title: 'The Complete Story',
    icon: Heart,
    description: 'The ultimate all-inclusive package for both photography and videography.',
    features: [
      'All features from photo & video packages',
      'Second photographer & videographer',
      'Luxury wedding album',
      '1-minute social media teaser film',
    ],
    price: '$7,000',
  },
  {
    title: 'Digital Invitations & Website',
    icon: Mail,
    description: 'A beautiful, custom website for your wedding journey.',
    features: [
      'Custom wedding website with your story',
      'Digital RSVP management system',
      'Elegant e-invitation design & distribution',
      'Photo gallery and event details section',
    ],
    price: '$1,200',
  },
];

export default function WeddingsPage() {
  return (
    <div>
      <section className="relative h-[80vh] min-h-[500px] w-full">
        {heroImage && (
            <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedOnScroll>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white text-center">
              Wedding Specials
            </h1>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <AnimatedOnScroll>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
              Your Love Story, Immortalized
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Your wedding day is a chapter of your story that deserves to be told with artistry and passion. At PixelPulse, we specialize in creating cinematic films and breathtaking photographs that are as timeless and unique as your love. We focus on authentic moments, subtle details, and the epic emotions of your celebration.
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
              Our Wedding Packages
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Crafted to provide comprehensive coverage of your most important day.
            </p>
          </AnimatedOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weddingPackages.map((pkg, index) => (
              <AnimatedOnScroll key={pkg.title} delay={index * 100}>
                <Card className="h-full bg-background border-2 border-transparent hover:border-primary/50 transition-colors duration-300 flex flex-col">
                  <CardHeader className="items-center text-center">
                    <div className="bg-primary/10 text-primary rounded-full p-4">
                        <pkg.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-headline mt-4">
                      {pkg.title}
                    </CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <ul className="space-y-3 text-muted-foreground flex-grow">
                        {pkg.features.map(feature => (
                            <li key={feature} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center mt-8">
                        <p className="text-4xl font-bold text-foreground">{pkg.price}</p>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedOnScroll>
            ))}
          </div>
           <div className="text-center mt-16">
                <Button asChild size="lg">
                    <Link href="#booking-form">Inquire Now</Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
              Wedding Gallery
            </h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll>
            <MasonryGallery images={galleryImages} />
          </AnimatedOnScroll>
        </div>
      </section>

      <section id="booking-form" className="bg-card py-20 md:py-24">
         <div className="container mx-auto px-4 md:px-6">
           <AiProjectBriefing preselectedService="Wedding Specials" />
         </div>
      </section>
    </div>
  );
}
