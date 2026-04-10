'use client';

import Link from 'next/link';
import AnimatedOnScroll from '../shared/AnimatedOnScroll';
import { Separator } from '../ui/separator';
import { services } from '@/lib/data';


export default function Footer() {

  return (
    <footer className="bg-transparent text-foreground border-t border-foreground/20 mt-24">
      <AnimatedOnScroll className="container mx-auto px-4 md:px-6 py-12">
         <div className="text-center mb-12">
           <Link href="/" className="text-4xl font-headline font-bold">
            PixelPulse
          </Link>
        </div>

        <Separator className="bg-foreground/20" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 text-center md:text-left">
          <div>
              <h4 className="font-bold uppercase tracking-widest mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link href="/book" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-3 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                {services.slice(0,3).map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-3 text-sm">Shop</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link href="/shop?category=Presets" className="hover:text-primary transition-colors">Presets</Link></li>
                <li><Link href="/shop?category=LUTs" className="hover:text-primary transition-colors">LUTs</Link></li>
                <li><Link href="/shop?category=Templates" className="hover:text-primary transition-colors">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-3 text-sm">Social</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Youtube</a></li>
              </ul>
            </div>
        </div>
        
        <Separator className="bg-foreground/20" />

        <div className="flex justify-between items-center text-xs uppercase tracking-widest text-foreground/60 pt-8">
           <p>&copy; {new Date().getFullYear()} PixelPulse Creative Studio.</p>
           <p>Timeless Visuals</p>
        </div>
      </AnimatedOnScroll>
    </footer>
  );
}
