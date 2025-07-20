import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Just Legal Solutions',
  description: 'Explore our comprehensive legal support services in Tulsa, including process serving, same-day delivery, skip tracing, court filing, and more.',
};

const services = [
  {
    title: 'Standard Process Serving',
    description: 'Reliable and professional delivery of your legal documents within 3-5 business days.',
    image: '/images/services/standard-service.webp',
  },
  {
    title: 'Rush & Same-Day Service',
    description: 'For time-sensitive documents, we offer expedited service, including delivery within 24 hours.',
    image: '/images/services/rush-service.webp',
  },
  {
    title: 'Skip Tracing',
    description: 'Our expert team uses advanced techniques to locate individuals who are difficult to find.',
    image: '/images/services/skip-tracing.webp',
  },
  {
    title: 'Court Filing Assistance',
    description: 'We ensure your documents are filed correctly and on time with local courts in the Tulsa area.',
    image: '/images/services/court-filing.webp',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Legal Support Services</h1>
          <p className="text-lg md:text-xl text-gray-600">
            We provide a full suite of professional services to support law firms, businesses, and individuals across Oklahoma.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <a href="/pricing" className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-block font-bold text-lg hover:bg-blue-700 transition-colors">
            View Our Competitive Pricing
          </a>
        </div>
      </div>
    </div>
  );
}
