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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'font-body antialiased bg-background text-foreground min-h-screen flex flex-col relative'
        )}
      >
        <CartProvider>
          <SiteLayout>{children}</SiteLayout>
          <Toaster />
          <CartSheet />
        </CartProvider>
      </body>
    </html>
  );
}
