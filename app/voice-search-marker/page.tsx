import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata = {
  title: 'Voice Search Marker - Just Legal Solutions',
  description: 'This page marks voice search optimization for Just Legal Solutions. Our services are discoverable and optimized for voice assistants and smart devices.',
  keywords: 'voice search, smart assistant, process server, just legal solutions',
  alternates: {
    canonical: 'https://justlegalsolutions.org/voice-search-marker'
  },
  openGraph: {
    title: 'Voice Search Marker - Just Legal Solutions',
    description: 'Voice search optimization for Just Legal Solutions. Services discoverable and optimized for voice assistants and smart devices.',
    url: 'https://justlegalsolutions.org/voice-search-marker',
    siteName: 'Just Legal Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Just Legal Solutions - Professional Process Serving in Oklahoma' }],
  },
};

export default function VoiceSearchMarker() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold mb-6 text-indigo-900">Voice Search Marker</h1>
        <p className="text-lg text-gray-700 mb-8">
          This page confirms that Just Legal Solutions is optimized for voice search. Our process serving and legal document delivery services are accessible via Siri, Alexa, Google Assistant, and other smart devices.
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-8">
          <li>Voice assistant schema included</li>
          <li>Accessible on all major smart devices</li>
          <li>Service area: Oklahoma and nationwide</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
