'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  ShoppingCart,
  X,
  Camera,
  Clapperboard,
  Palette,
  Code,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/weddings', label: 'Wedding Specials' },
];

const serviceLinks = [
  { href: '/services/photography', label: 'Photography', icon: Camera },
  { href: '/services/videography', label: 'Videography', icon: Clapperboard },
  { href: '/services/design', label: 'Design', icon: Palette },
  { href: '/services/web-dev', label: 'Web Dev', icon: Code },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-headline font-bold text-gradient">
          Aether
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors outline-none">
              Services
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="flex items-center gap-2">
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button asChild variant="outline" className="hidden md:inline-flex border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/book">Book a Consultation</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card shadow-lg p-4">
          <nav className="flex flex-col gap-4">
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-lg" onClick={() => setIsMenuOpen(false)}>
                 <link.icon className="h-5 w-5" />
                {link.label}
              </Link>
            ))}
             <hr className="border-border" />
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" size="lg" className="mt-4" onClick={() => setIsMenuOpen(false)}>
              <Link href="/book">Book a Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
