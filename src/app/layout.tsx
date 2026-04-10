import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/CartContext';
import CartSheet from '@/components/site/CartSheet';
import SiteLayout from '@/components/site/SiteLayout';

export const metadata: Metadata = {
  title: 'PixelPulse Creative Studio',
  description:
    'A premier creative studio and digital marketplace for high-end assets.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'font-body antialiased bg-background text-foreground min-h-screen flex flex-col'
        )}
      >
        <div className="fixed top-0 left-0 -z-50 h-screen w-screen bg-background">
          <div 
            className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-background via-primary/5 to-background bg-[length:200%_200%] animate-background-pan" 
          />
        </div>
        <CartProvider>
          <SiteLayout>{children}</SiteLayout>
          <Toaster />
          <CartSheet />
        </CartProvider>
      </body>
    </html>
  );
}
