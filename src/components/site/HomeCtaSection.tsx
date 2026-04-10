import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function HomeCtaSection() {
    return (
        <section className="bg-primary/5 py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    Ready to Start Your Project?
                </h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
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
