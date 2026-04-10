'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppButton from '@/components/site/WhatsAppButton';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminPage = pathname.startsWith('/admin');

    if (isAdminPage) {
        return <>{children}</>;
    }

    return (
        <>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
