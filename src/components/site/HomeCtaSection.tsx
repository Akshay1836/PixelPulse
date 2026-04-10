import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const ctaImage = PlaceHolderImages.find((p) => p.id === 'home-cta-background');

export function HomeCtaSection() {
    return (
        <section className="relative py-20 md:py-32 w-full">
            {ctaImage && (
                <Image
                    src={ctaImage.imageUrl}
                    alt={ctaImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={ctaImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="font-headline text-4xl md:text-6xl font-bold">
                    Ready to Start Your Project?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-300">
                    Let's talk about your vision. Book a free, no-obligation consultation to see how PixelPulse can bring your ideas to life.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/book">
                            Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
