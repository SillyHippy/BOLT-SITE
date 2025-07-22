
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
        question: 'How fast can you serve legal documents in Tulsa?',
        answer: 'We offer same-day, rush, and standard service. Most documents in Tulsa are attempted within hours of your request.'
      },
      {
        question: 'Are your process servers licensed and insured?',
        answer: 'Yes, all our Tulsa process servers are fully licensed, bonded, and insured for your protection.'
      },
      {
        question: 'What types of documents do you serve?',
        answer: 'We serve summons, subpoenas, divorce papers, eviction notices, small claims, restraining orders, and more.'
      },
      {
        question: 'Do you provide proof of service?',
        answer: 'Yes, you receive a digital, court-admissible Affidavit of Service immediately after completion.'
      },
      {
        question: 'Can you serve evasive or hard-to-find individuals?',
        answer: 'Absolutely. We use skip tracing and advanced techniques to locate and serve even evasive subjects.'
      },
      {
        question: 'What are your service areas?',
        answer: 'We serve all of Tulsa County, including Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, and every Tulsa neighborhood.'
      },
      {
        question: 'How much does process serving cost in Tulsa?',
        answer: 'Our rates are competitive and transparent. See our pricing page or call for a custom quote.'
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
          {/* Hero Section */}
          <div className="relative bg-gray-900">
            <div className="absolute inset-0">
              <Image
                src="/images/tulsa-route66.jpg"
                alt="Tulsa Route 66 Gateway and train crossing"
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
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
