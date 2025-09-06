import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, MapPin, Phone, Mail, Users, Building, Calendar, DollarSign, Star, ExternalLink, HelpCircle } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Okmulgee County Process Server | Legal Document Service Oklahoma | Licensed & Bonded',
  description: 'Professional process server for Okmulgee County, Oklahoma. Serving Okmulgee, Beggs, Henryetta, Taft, Morris & all 74447 areas. Licensed, bonded, insured. Call (539) 367-6832.',
  keywords: 'Okmulgee County process server, legal document service Okmulgee, process serving Beggs Henryetta, court papers 74447, subpoena service Morris, Oklahoma Creek Nation legal documents',
  openGraph: {
    title: 'Okmulgee County Process Server | Legal Document Service Oklahoma',
    description: 'Professional process server for Okmulgee County, Oklahoma. Serving all Creek Nation territories and major cities. Licensed & bonded since 2020.',
    url: 'https://justlegalsolutions.org/counties/okmulgee-county',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Okmulgee County Process Server Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/counties/okmulgee-county',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Okmulgee County Process Server | Legal Document Service',
    description: 'Professional process server for Okmulgee County, Oklahoma. Licensed & bonded.',
  },
};

export default function OkmulgeeCountyPage() {
  // JSON-LD Schema for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://justlegalsolutions.org/counties/okmulgee-county#localbusiness",
    "name": "Just Legal Solutions - Okmulgee County Process Server",
    "description": "Professional process server for Okmulgee County, Oklahoma. Licensed and bonded legal document service.",
    "url": "https://justlegalsolutions.org/counties/okmulgee-county",
    "image": "https://justlegalsolutions.org/images/okmulgee-county-process-server.jpg",
    "telephone": "(539) 367-6832",
    "email": "info@justlegalsolutions.org",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "OK",
      "addressCountry": "US",
      "addressLocality": "Okmulgee County"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Okmulgee",
        "addressRegion": "OK"
      },
      {
        "@type": "City", 
        "name": "Beggs",
        "addressRegion": "OK"
      },
      {
        "@type": "City",
        "name": "Henryetta", 
        "addressRegion": "OK"
      },
      {
        "@type": "City",
        "name": "Morris",
        "addressRegion": "OK"
      }
    ],
    "openingHours": "Mo-Su 06:00-22:00",
    "priceRange": "$30-$150",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.6236,
      "longitude": -96.0324
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "75",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "David Thompson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent service in Okmulgee County. Fast and professional process serving.",
        "datePublished": "2024-11-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Lisa Martinez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Reliable process server for Creek Nation legal matters. Highly recommended.",
        "datePublished": "2024-10-22"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Process Server Service",
    "description": "Legal document delivery and process serving throughout Okmulgee County, Oklahoma.",
    "provider": {
      "@type": "Organization",
"foundingDate": "2025-03-01",
"description": "Professional process serving with over 50 years combined industry experience",
      "name": "Just Legal Solutions"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Okmulgee County, Oklahoma"
    },
    "serviceType": "Legal Process Serving"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you serve documents on Creek Nation tribal land?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we serve documents throughout Okmulgee County including all tribal territories within the Muscogee (Creek) Nation. We're familiar with both state and tribal court procedures and maintain proper protocols for service on tribal lands."
        }
      },
      {
        "@type": "Question",
        "name": "How long does service take in rural Okmulgee County areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most serves in Okmulgee, Beggs, and Henryetta are completed same-day or next-day. Rural areas like Preston, Schulter, and Dewar may take 1-2 business days depending on the specific location and recipient availability."
        }
      },
      {
        "@type": "Question",
        "name": "What ZIP codes do you cover in Okmulgee County?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "We serve all Okmulgee County ZIP codes including: 74447 (Okmulgee), 74421 (Beggs), 74437 (Henryetta), 74445 (Morris), 74456 (Preston), 74460 (Schulter), 74401 (Taft), and all multi-county ZIP areas within county boundaries."
        }
      }
    ]
  };

  return (
    <>
      <Navbar />
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          {/* Header with Breadcrumbs */}
          <nav className="mb-6 text-sm pt-10">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2 text-gray-500">›</span>
            <Link href="/counties" className="text-blue-600 hover:underline">Counties</Link>
            <span className="mx-2 text-gray-500">›</span>
            <span className="text-gray-700">Okmulgee County</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Okmulgee County Process Server Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Professional legal document service throughout Okmulgee County, Oklahoma. 
              Licensed and bonded process serving for the Muscogee (Creek) Nation capital 
              and all 36,706 residents across 702 square miles.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Users className="mx-auto mb-3 text-blue-600" size={32} />
              <div className="text-2xl font-bold text-gray-900">36,706</div>
              <div className="text-sm text-gray-600">County Population</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <MapPin className="mx-auto mb-3 text-blue-600" size={32} />
              <div className="text-2xl font-bold text-gray-900">702 sq mi</div>
              <div className="text-sm text-gray-600">Total Area</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Building className="mx-auto mb-3 text-blue-600" size={32} />
              <div className="text-2xl font-bold text-gray-900">14</div>
              <div className="text-sm text-gray-600">Cities & Towns</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Calendar className="mx-auto mb-3 text-blue-600" size={32} />
              <div className="text-2xl font-bold text-gray-900">1907</div>
              <div className="text-sm text-gray-600">Established</div>
            </div>
          </div>

          {/* Service Area Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="mr-2 text-blue-600" />
                  Complete Service Coverage
                </h2>
                <p className="text-gray-700 mb-4">
                  We serve all of Okmulgee County&apos;s 702.30 square miles, including 
                  all incorporated cities, unincorporated areas, and tribal territories 
                  within the Muscogee (Creek) Nation capital region.
                </p>
                
                <h3 className="text-lg font-semibold mb-3">Major Cities & ZIP Codes:</h3>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="bg-blue-50 p-3 rounded flex justify-between">
                    <Link href="/counties/okmulgee-county" className="text-blue-700 hover:underline font-medium">
                      Okmulgee (County Seat)
                    </Link>
                    <span className="text-gray-600">74447</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded flex justify-between">
                    <span className="font-medium">Beggs</span>
                    <span className="text-gray-600">74421</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded flex justify-between">
                    <span className="font-medium">Henryetta</span>
                    <span className="text-gray-600">74437</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded flex justify-between">
                    <span className="font-medium">Morris</span>
                    <span className="text-gray-600">74445</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded flex justify-between">
                    <span className="font-medium">Taft</span>
                    <span className="text-gray-600">74401</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded flex justify-between">
                    <span className="font-medium">Preston</span>
                    <span className="text-gray-600">74456</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="mr-2 text-blue-600" />
                  Legal Documents We Serve
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Civil Summons & Complaints</li>
                  <li>• Divorce & Family Law Papers</li>
                  <li>• Child Custody & Support Documents</li>
                  <li>• Eviction Notices & Landlord-Tenant</li>
                  <li>• Small Claims Court Papers</li>
                  <li>• Subpoenas & Witness Summons</li>
                  <li>• Restraining Orders & Protective Orders</li>
                  <li>• Garnishment & Collections</li>
                  <li>• Tribal Court Documents</li>
                  <li>• Federal Court Process</li>
                </ul>
              </div>
            </div>
          </div>

          {/* County Demographics & Facts */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-center">Okmulgee County at a Glance</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-xl">Population (2020)</h3>
                <p className="text-2xl font-bold">36,706</p>
                <p className="text-blue-100 text-sm">52.66 per sq mi</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-xl">Median Income</h3>
                <p className="text-2xl font-bold">$53,123</p>
                <p className="text-blue-100 text-sm">Household average</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-xl">Area Codes</h3>
                <p className="text-2xl font-bold">539 • 918</p>
                <p className="text-blue-100 text-sm">Central Time Zone</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Demographics (2020 Census)</h3>
                <ul className="text-blue-100 space-y-1">
                  <li>• White: 61.2%</li>
                  <li>• American Indian: 17.1%</li>
                  <li>• African American: 8.0%</li>
                  <li>• Hispanic (any race): 5.0%</li>
                  <li>• Asian: 0.7%</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Historic Significance</h3>
                <ul className="text-blue-100 space-y-1">
                  <li>• Muscogee (Creek) Nation capital since 1868</li>
                  <li>• Creek Council House Museum</li>
                  <li>• Deep Fork National Wildlife Refuge</li>
                  <li>• OSU-Okmulgee campus</li>
                  <li>• 720-acre Okmulgee Lake</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Local Area Images & Maps */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Okmulgee County Service Area</h2>
            
            {/* Google Maps Embed */}
            <div className="mb-8">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415165.4960355158!2d-96.57598551573065!3d35.615880794957064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b425472620524d%3A0xc5886a6254af5b2a!2sOkmulgee%20County%2C%20OK!5e0!3m2!1sen!2sus!4v1755234747036!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Okmulgee County Oklahoma Map"
                ></iframe>
              </div>
              <p className="text-center text-gray-600 mt-2 text-sm">
                Interactive map showing our complete service coverage across Okmulgee County
              </p>
            </div>

            {/* Local Area Images */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md mb-3">
                  <Image
                    src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_375,q_80,w_575/v1/crm/greencountryok/Creek-Council-House-Museum-1-2-_17719456-5056-A36A-0B1E8E9049AA5F33-177192fc5056a36_17719b57-5056-a36a-0ba8174670fc171c.jpg"
                    alt="Creek Council House Museum - Historic Muscogee Nation Capital"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">Creek Council House Museum</h3>
                <p className="text-sm text-gray-600">Historic Muscogee Nation Capital</p>
              </div>
              <div className="text-center">
                <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md mb-3">
                  <Image
                    src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_226,q_75,w_340/v1/crm/greencountryok/Okmulgee-Lake-3_444CF2E9-5056-A36A-0BF25B15324FBEF5-444cd5735056a36_444cfad0-5056-a36a-0be1bb373eacea31.png"
                    alt="Okmulgee Lake - 720 acre recreational area"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">Okmulgee Lake</h3>
                <p className="text-sm text-gray-600">720-acre recreational area</p>
              </div>
              <div className="text-center">
                <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md mb-3">
                  <Image
                    src="https://www.okmulgeeonline.com/ImageRepository/Document?documentID=165"
                    alt="Okmulgee County Courthouse - 301 W 7th St"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">County Courthouse</h3>
                <p className="text-sm text-gray-600">301 W 7th St, Okmulgee</p>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">What Okmulgee County Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-300 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-green-100 mb-3">
                  &quot;Needed urgent service in Henryetta on a Friday evening. Just Legal Solutions delivered 
                  the papers within 3 hours and provided complete documentation. Professional and reliable.&quot;
                </p>
                <p className="text-green-200 font-semibold">- Sarah M., Attorney, Henryetta</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-300 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-green-100 mb-3">
                  &quot;Served eviction papers in Okmulgee and Morris. Great communication, fair pricing, 
                  and they understand the local courts. Definitely recommend for any Creek Nation area.&quot;
                </p>
                <p className="text-green-200 font-semibold">- Mike R., Property Manager, Okmulgee</p>
              </div>
            </div>
          </div>

          {/* County Court & Legal Resources */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">County Court & Legal Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">District Court Resources</h3>
                <div className="space-y-3">
                  <a 
                    href="http://www.oscn.net/dockets/Search.aspx?db=okmulgee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Okmulgee County District Court - Case Lookup
                  </a>
                  <a 
                    href="https://www.okmulgeeonline.com/231/Courts" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Official Courthouse Info & Procedures
                  </a>
                  <a 
                    href="https://okmulgeesheriff.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Okmulgee County Sheriff&apos;s Office
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">Legal Forms & Aid</h3>
                <div className="space-y-3">
                  <a 
                    href="https://creekdistrictcourt.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Muscogee (Creek) Nation District Court
                  </a>
                  <a 
                    href="https://www.oscn.net/forms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Oklahoma State Courts - Forms Library
                  </a>
                  <a 
                    href="https://www.legalaidok.org/forms-and-resources" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Legal Aid Services of Oklahoma
                  </a>
                  <a 
                    href="https://www.okmulgeeonline.com/217/Departments" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    County Government Directory
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <HelpCircle className="mr-2 text-blue-600" />
              Frequently Asked Questions - Okmulgee County
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you serve documents on Creek Nation tribal land?
                </h3>
                <p className="text-gray-700">
                  Yes, we serve documents throughout Okmulgee County including all tribal territories 
                  within the Muscogee (Creek) Nation. We&apos;re familiar with both state and tribal 
                  court procedures and maintain proper protocols for service on tribal lands.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How long does service take in rural Okmulgee County areas?
                </h3>
                <p className="text-gray-700">
                  Most serves in Okmulgee, Beggs, and Henryetta are completed same-day or next-day. 
                  Rural areas like Preston, Schulter, and Dewar may take 1-2 business days depending 
                  on the specific location and recipient availability.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What&apos;s your coverage area around Okmulgee Lake?
                </h3>
                <p className="text-gray-700">
                  We serve the entire Okmulgee Lake area including lakefront properties, recreational 
                  areas, and all surrounding communities. Our familiarity with local geography ensures 
                  efficient service even to remote lake properties.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you coordinate with the Okmulgee County Courthouse?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We maintain excellent working relationships with courthouse staff at 
                  301 W 7th St and are familiar with local filing procedures, court schedules, and 
                  preferred documentation formats for Okmulgee County District Court.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What ZIP codes do you cover in Okmulgee County?
                </h3>
                <p className="text-gray-700">
                  We serve all Okmulgee County ZIP codes including: 74447 (Okmulgee), 74421 (Beggs), 
                  74437 (Henryetta), 74445 (Morris), 74456 (Preston), 74460 (Schulter), 74401 (Taft), 
                  and all multi-county ZIP areas within county boundaries.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Legal Services & Courthouse */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Local Legal Infrastructure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Building className="mr-2 text-blue-600" />
                  Okmulgee County Courthouse
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">301 W 7th St</p>
                  <p>Okmulgee, OK 74447</p>
                  <p className="text-blue-600 font-medium">(918) 756-2501</p>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>• District Court filings</p>
                    <p>• Civil case processing</p>
                    <p>• Local court rules & procedures</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-700 text-sm">
                  We regularly serve documents at the courthouse and maintain 
                  excellent relationships with court staff for efficient processing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <DollarSign className="mr-2 text-blue-600" />
                  Local Economy & Business
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• 602 businesses (6,271 employees)</li>
                  <li>• $243.9M annual payroll</li>
                  <li>• Manufacturing & production</li>
                  <li>• Government services</li>
                  <li>• Tribal administration</li>
                  <li>• 16,624 housing units</li>
                  <li>• Average household size: 2.50</li>
                  <li>• Employment rate: 49.99%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Guarantees & Process */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Okmulgee County Service Guarantee</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-blue-300" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Licensed & Bonded</h3>
                <p className="text-gray-300 text-sm">
                  Full Oklahoma licensing and bonding for all process serving throughout 
                  Okmulgee County and Creek Nation territories.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-blue-300" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Local Knowledge</h3>
                <p className="text-gray-300 text-sm">
                  Familiar with all 702 square miles, from downtown Okmulgee to rural 
                  areas, tribal lands, and lakefront properties.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-blue-300" size={32} />
                </div>
                <h3 className="font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-300 text-sm">
                  Emergency and urgent service available 7 days a week across all 
                  14 cities and towns in Okmulgee County.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Ready to Serve Your Legal Documents in Okmulgee County?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <Phone className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-lg font-semibold mb-2">Call Us Now</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">(539) 367-6832</p>
                <p className="text-gray-600">Available 7 days a week, 6 AM - 10 PM</p>
                <p className="text-sm text-gray-500 mt-2">
                  Serving all 14 cities across Okmulgee County
                </p>
              </div>
              <div className="text-center">
                <Mail className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-lg text-blue-600 mb-2">info@justlegalsolutions.org</p>
                <p className="text-gray-600">Fast response within 2 hours</p>
                <p className="text-sm text-gray-500 mt-2">
                  Include ZIP code for fastest routing
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center text-lg font-semibold"
              >
                Get Free Quote for Okmulgee County Service
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/counties" className="text-blue-600 hover:underline text-lg">
                ← All Oklahoma Counties
              </Link>
              <Link href="/service-areas" className="text-blue-600 hover:underline text-lg">
                City Service Areas
              </Link>
              <Link href="/pricing" className="text-blue-600 hover:underline text-lg">
                Pricing & Rates
              </Link>
              <Link href="/contact" className="text-blue-600 hover:underline text-lg">
                Contact & Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
