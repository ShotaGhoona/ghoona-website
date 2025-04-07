import Sidebar from '@/components/display/sidebar';
import Header from '@/components/display/header';
import Footer from '@/components/display/footer';
import { Outfit } from 'next/font/google';
import './globals.css';
import '@/components/icons';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={outfit.className}>
      <body className={`${outfit.className} font-outfit flex`}>
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="w-full flex flex-col min-h-screen lg:pl-[220px]">
          <Header />
          <main className="bg-[#f5f5f5] flex-1 mt-[56px] lg:mt-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
