
import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Zap, Map, FileText, Star } from 'lucide-react';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Process Server Tulsa OK | Same-Day Service | Just Legal Solutions',
  description: 'Top-rated process server in Tulsa, OK. We offer same-day service for subpoenas, summons, and divorce papers across Tulsa County. Licensed, insured, and available 24/7. Call for a free quote.',
  keywords: [
    'process server tulsa ok',
    'tulsa process serving',
    'legal document delivery tulsa',
    'same day process server tulsa',
    'subpoena service tulsa',
    'divorce papers tulsa',
    'eviction notice tulsa',
    'tulsa county process server'
  ],
  alternates: {
    canonical: 'https://justlegalsolutions.org/tulsa-process-server'
  }
};

const TulsaProcessServerPage = () => {
    // Local details for Tulsa
    const neighborhoods = [
      'Downtown Tulsa', 'Brookside', 'Cherry Street', 'Kendall-Whittier', 'Maple Ridge', 'Riverside', 'Midtown', 'East Tulsa', 'South Tulsa', 'North Tulsa', 'West Tulsa', 'Brady Arts District', 'Greenwood', 'Pearl District', 'Utica Square', 'Gilcrease', 'Owen Park', 'Swan Lake', 'Sunnyside', 'Red Fork', 'Turley', 'Carbondale', 'Garden City', 'Sunset Terrace', 'Patrick Henry', 'White City', 'Yorktown', 'Braden Park', 'Lortondale', 'Florence Park', 'Highland Park', 'Ranch Acres', 'Woodland Acres', 'Forest Park', 'Sheridan Hills', 'Park Plaza', 'Southmoor', 'Rolling Hills', 'Country Club Heights', 'Fairmont', 'Parkview', 'Briarwood', 'Southgate', 'Union', 'Jenks', 'Bixby', 'Owasso', 'Broken Arrow', 'Sand Springs'
    ];
    const faqs = [
      {
        question: 'What makes your Tulsa process serving different from others?',
        answer: 'We are locally based, know every Tulsa neighborhood, and offer true same-day service with real-time updates. Our team is trusted by Tulsa attorneys and residents alike.'
      },
      {
        question: 'Can you deliver legal documents to businesses in downtown Tulsa high-rises?',
        answer: 'Yes! We are experienced with secure access protocols and can deliver to any business, law firm, or government office in downtown Tulsa.'
      },
      {
        question: 'How do you handle urgent or after-hours serves in Tulsa?',
        answer: 'We offer 24/7 emergency process serving in Tulsa. If you have a rush or after-hours need, call us and we will prioritize your request.'
      },
      {
        question: 'Do you serve eviction notices and family law documents in Tulsa County?',
        answer: 'Absolutely. We handle all types of legal documents, including sensitive family law and eviction cases, with professionalism and discretion.'
      },
      {
        question: 'Can you help if the person to be served is avoiding service?',
        answer: 'Yes, we use skip tracing and advanced investigative techniques to locate and serve even evasive individuals anywhere in Tulsa County.'
      },
      {
        question: 'How quickly can you serve papers in Tulsa?',
        answer: 'Most serves are attempted within hours. Emergency 2-hour rush service is available for urgent cases.'
      }
    ];
    const testimonials = [
      {
        name: 'Sarah M.',
        text: 'Just Legal Solutions served my divorce papers in Tulsa the same day I called. Professional, fast, and discreet!'
      },
      {
        name: 'Attorney John D.',
        text: 'They handled a difficult serve for my law firm and provided perfect documentation. Highly recommended for Tulsa legal work.'
      },
      {
        name: 'Mike R.',
        text: 'I needed an eviction notice served urgently. The team at Just Legal Solutions got it done within hours.'
      }
    ];
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white">
          {/* Hero Section with Tulsa Image */}
          <div className="relative bg-gray-900">
            <div className="absolute inset-0">
              <Image
                src="/images/Tulsa_skyline_aerial,_April_2023.jpg"
                alt="Tulsa Skyline Aerial View 2023"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
              />
            </div>
            <div className="relative container mx-auto px-4 py-24 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold">Premier Process Server in Tulsa, Oklahoma</h1>
              <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
                Your trusted partner for fast, accurate, and professional legal document delivery across Tulsa County.
              </p>
              <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <a href="/pricing" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-transform transform hover:scale-105">
                  View Pricing & Services
                </a>
                <a href="/contact" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition-transform transform hover:scale-105">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Serving All of Tulsa County</h2>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206181.1129303917!2d-95.87809005!3d36.15244105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e8f%3A0xe76910c81bd96af7!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1753397857366!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* Why Us Section */}
          <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Gold Standard in Tulsa Process Serving</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We combine speed, technology, and local expertise to offer unparalleled service.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Zap className="h-12 w-12 mx-auto text-yellow-500" />
                  <h3 className="mt-4 text-xl font-semibold">Same-Day Service</h3>
                  <p className="mt-2 text-gray-600">Urgent documents are our specialty. We guarantee same-day attempts for all rush orders in Tulsa.</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 mx-auto text-green-500" />
                  <h3 className="mt-4 text-xl font-semibold">Licensed & Insured</h3>
                  <p className="mt-2 text-gray-600">Our process servers are fully licensed and insured in Oklahoma for your complete peace of mind.</p>
                </div>
                <div className="text-center">
                  <Map className="h-12 w-12 mx-auto text-blue-500" />
                  <h3 className="mt-4 text-xl font-semibold">Tulsa County Coverage</h3>
                  <p className="mt-2 text-gray-600">We serve documents in Tulsa, Broken Arrow, Bixby, Jenks, Owasso, and all surrounding areas.</p>
                </div>
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto text-purple-500" />
                  <h3 className="mt-4 text-xl font-semibold">Digital Proof of Service</h3>
                  <p className="mt-2 text-gray-600">Receive a legally compliant, digital affidavit of service as soon as the job is complete.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Area Section */}
          <div className="py-16 bg-white border-t">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Tulsa Neighborhoods & Areas Served</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {neighborhoods.map(area => (
                  <span key={area} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium m-1">{area}</span>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-16 bg-gray-50 border-t">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Tulsa-Specific Frequently Asked Questions</h2>
              <FAQSchema />
              <ul className="space-y-6 mt-8">
                {faqs.map((faq, idx) => (
                  <li key={idx} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Speakable Schema for Voice Search */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'Process Server Tulsa OK | Same-Day Service | Just Legal Solutions',
              'speakable': {
                '@type': 'SpeakableSpecification',
                'xpath': [
                  '/html/head/title',
                  '/html/body//h1',
                  '/html/body//section[contains(@class, "faq")]//h3'
                ]
              },
              'url': 'https://justlegalsolutions.org/tulsa-process-server'
            })
          }} />

          {/* Testimonials Section */}
          <div className="py-16 bg-white border-t">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center">
                    <Star className="h-8 w-8 text-yellow-400 mb-2" />
                    <p className="text-gray-700 italic mb-4">&quot;{t.text}&quot;</p>
                    <span className="font-semibold text-blue-900">- {t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Schema Components for SEO */}
          <BusinessSchema />
          <ServiceSchema />
          {/* Internal Links Section */}
          <div className="py-12 bg-gray-50 border-t">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-xl font-bold mb-4">Explore More</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/pricing" className="text-blue-700 underline font-semibold">See Pricing</Link>
                <Link href="/contact" className="text-blue-700 underline font-semibold">Contact Us</Link>
                <Link href="/faq" className="text-blue-700 underline font-semibold">General FAQ</Link>
                <Link href="/about" className="text-blue-700 underline font-semibold">About Just Legal Solutions</Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
};

export default TulsaProcessServerPage;
