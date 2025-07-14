import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tulsa County Process Server | Same-Day $150 | Just Legal Solutions',
  description: 'Professional process server Tulsa County, Broken Arrow, Sapulpa. Same-day $150, rush $100, standard $60. Expert legal document delivery throughout Oklahoma with certified service.',
  keywords: [
    'Tulsa process server',
    'process server Tulsa Oklahoma',
    'Tulsa County process serving',
    'Broken Arrow process server',
    'Glenpool process server',
    'same day process server Tulsa',
    'legal document delivery Tulsa',
    'summons service Tulsa',
    'divorce papers Tulsa',
    'eviction notice Tulsa'
  ],
  openGraph: {
    title: 'Tulsa Process Server - Same-Day Legal Document Delivery',
    description: 'Expert process serving in Tulsa, Oklahoma with same-day service available. Serving Tulsa County, Broken Arrow, Glenpool, and metro area.',
    url: 'https://justlegalsolutions.org/tulsa-process-server',
    images: [
      {
        url: '/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Tulsa Process Server Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Process Server in Tulsa, Oklahoma',
    description: 'Same-day legal document delivery throughout Tulsa County and metro area.',
    images: ['/images/jls-logo.webp']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/tulsa-process-server/'
  }
};

const TulsaProcessServerPage = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-12 bg-white">
                <div className="relative h-64 md:h-96">
                    <Image
                        src="https://images.unsplash.com/photo-1590650213165-3376a0a0b04a?fit=crop&w=1200&h=400&q=80"
                        alt="Tulsa, Oklahoma skyline for process server services"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                            <h1 className="text-4xl md:text-6xl font-bold">Process Server in Tulsa, OK</h1>
                            <p className="text-xl md:text-2xl mt-4">Fast, Reliable, and Professional Document Delivery</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                            Just Legal Solutions provides premier process serving across Tulsa County and the surrounding areas. We handle your legal documents with the urgency and professionalism they require.
                        </p>
                        <div className="text-center my-12">
                           <a
                             href="/pricing"
                             className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg shadow-lg"
                           >
                             View Our Competitive Pricing
                           </a>
                         </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default TulsaProcessServerPage;
