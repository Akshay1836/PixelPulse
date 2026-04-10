import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-gradient">
          Our Creative Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From concept to completion, we offer a suite of services to bring your vision to life.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug} className="group block">
              <Card className="h-full overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10">
                <div className="relative h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <CardContent className="p-6 text-left">
                  <h3 className="font-headline text-2xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
