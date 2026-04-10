'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import AnimatedOnScroll from '../shared/AnimatedOnScroll';
import { useToast } from '@/hooks/use-toast';
import React, { useState } from 'react';
import { services } from '@/lib/data';

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Subscribed!',
        description: "You've been added to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <AnimatedOnScroll className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-headline font-bold text-gradient mb-4">
              PixelPulse Creative Studio
            </h3>
            <p className="text-sm text-muted-foreground">
              Cinematic visuals for brands and creators who dare to be different.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Youtube">
                <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/shop?category=Presets" className="text-muted-foreground hover:text-primary transition-colors">Presets</Link></li>
                <li><Link href="/shop?category=LUTs" className="text-muted-foreground hover:text-primary transition-colors">LUTs</Link></li>
                <li><Link href="/shop?category=Templates" className="text-muted-foreground hover:text-primary transition-colors">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link href="/book" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Join the Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get exclusive deals, tips, and updates.
            </p>
            <form className="flex gap-2" onSubmit={handleSubscribe}>
              <Input
                type="email"
                placeholder="Your email"
                className="flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="default">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PixelPulse Creative Studio. All Rights Reserved.</p>
        </div>
      </AnimatedOnScroll>
    </footer>
  );
}
