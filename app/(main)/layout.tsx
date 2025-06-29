import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link rel="canonical" href="https://justlegalsolutions.org" />
      </head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}