'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  ShoppingCart,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCart } from '@/context/CartContext';
import { Badge } from '../ui/badge';
import { services } from '@/lib/data';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/weddings', label: 'Wedding Specials' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border/10'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="text-3xl font-headline font-bold">
            PixelPulse
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors outline-none uppercase tracking-wider">
                  Services
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {services.map((service) => (
                    <DropdownMenuItem key={service.slug} asChild>
                      <Link href={`/services/${service.slug}`} className="flex items-center gap-2">
                        <service.icon className="h-4 w-4" />
                        {service.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            <div className='h-6 w-px bg-border/20'/>
            <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
              {cartCount > 0 && (
                  <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 justify-center p-0">{cartCount}</Badge>
              )}
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button asChild>
              <Link href="/book">Book a Consultation</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
             <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background z-[100] p-6 flex flex-col transition-transform duration-500 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-headline font-bold" onClick={() => setIsMenuOpen(false)}>
              PixelPulse
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
        </div>
        <nav className="flex flex-col gap-6 mt-12 flex-grow">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="flex items-center gap-3 text-xl font-semibold" onClick={() => setIsMenuOpen(false)}>
               <service.icon className="h-6 w-6 text-primary" />
              {service.title}
            </Link>
          ))}
           <hr className="border-border/20 my-2" />
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex items-center justify-between border-t border-border/20 pt-6">
            <Button asChild size="lg" onClick={() => setIsMenuOpen(false)}>
              <Link href="/book">Book a Consultation</Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative h-10 w-10" onClick={() => { setIsMenuOpen(false); setIsCartOpen(true); }}>
                {cartCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0">{cartCount}</Badge>
                )}
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">Cart</span>
            </Button>
        </div>
      </div>
    </>
  );
}
