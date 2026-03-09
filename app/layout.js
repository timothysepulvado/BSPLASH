import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import PreFooterCTA from '@/components/PreFooterCTA';
import Footer from '@/components/Footer';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'BrandStudios.AI — AI for Brand Creative',
  description: 'BrandStudios.AI is a creative intelligence platform that learns your brand and produces on-brand content at scale. Powered by human intelligence.',
  openGraph: {
    title: 'BrandStudios.AI — AI for Brand Creative',
    description: 'Creative intelligence platform that learns your brand and produces on-brand content at scale.',
    type: 'website',
    url: 'https://brandstudios.ai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
        <PreFooterCTA />
        <Footer />
      </body>
    </html>
  );
}
