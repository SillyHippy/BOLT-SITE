
import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'SEO Dashboard - Just Legal Solutions',
  description: 'Monitor SEO performance and page health for all Just Legal Solutions pages.',
  robots: 'noindex, nofollow'
};

const SeoDashboardPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            SEO Performance Dashboard
          </h1>
          {/* ...existing code... */}
        </div>
      </main>

     <Footer />
   </>
  );
};


