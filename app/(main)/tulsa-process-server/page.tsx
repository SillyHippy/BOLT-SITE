import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UnifiedSchema from '@/components/UnifiedSchema';
import { Metadata } from 'next';

// Enhanced SEO Metadata combining all Tulsa pages
export const metadata: Metadata = {
  title: 'Tulsa Process Server - Comprehensive Legal Document Service | Just Legal Solutions',
  description: 'Premier process server in Tulsa, Oklahoma - serving Tulsa County with same-day legal document delivery. Licensed, bonded & insured. Serving downtown Tulsa, Midtown, Brookside, and all surrounding areas. 24/7 emergency service available.',
  keywords: 'process server tulsa, tulsa process server, legal document service tulsa, serve papers tulsa, court documents tulsa, subpoena service tulsa, eviction notice tulsa, emergency process server tulsa, 24/7 process server oklahoma, licensed process server tulsa county, comprehensive process server tulsa, tulsa county legal services, certified process server tulsa, professional process server tulsa',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Tulsa Process Server - Professional Legal Document Service',
    description: 'Professional process server in Tulsa, Oklahoma. Fast, reliable legal document service with 24/7 emergency availability and comprehensive coverage.',
    url: 'https://justlegalsolutions.org/tulsa-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Tulsa Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulsa Process Server & Broken Arrow | Premier Legal Document Service',
    description: 'Licensed process server in Tulsa, Oklahoma. Fast, reliable legal document service with 24/7 emergency availability.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/tulsa-process-server',
  },
};

export default function TulsaProcessServerPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can your Broken Arrow process server or Tulsa process server deliver legal documents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our standard delivery for a Tulsa process server is typically within 3-5 business days. However, we understand some legal matters are time-sensitive. We offer rush and same-day service for urgent deliveries in both Tulsa and Broken Arrow. Our process servers in Tulsa are committed to providing the fastest and most reliable service possible. If you need an urgent Process Server for Tulsa County, contact us immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Are you a licensed and bonded process server in Tulsa County and Broken Arrow, OK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. All of our process servers are fully licensed and bonded as required by the state of Oklahoma. We are an authorized Tulsa County process server and also serve the entire Broken Arrow, OK area. You can trust our professional team to handle your legal documents with the utmost care and compliance."
        }
      },
      {
        "@type": "Question",
        "name": "What areas and neighborhoods do your Tulsa and Broken Arrow process servers cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our process servers cover all of Tulsa County and the city of Broken Arrow extensively. This includes downtown Tulsa, Midtown, South Tulsa, Brookside, Cherry Street, and all major residential and business areas. In Broken Arrow, our process servers broken arrow team covers areas like the Rose District, South Broken Arrow, and all surrounding neighborhoods. If you need a process server in Broken Arrow OK or anywhere in the Tulsa metro, we have you covered."
        }
      },
      {
        "@type": "Question",
        "name": "What legal documents can you deliver as a Broken Arrow process server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a leading Broken Arrow process server, we are experienced in serving all types of legal documents. This includes summons, complaints, subpoenas, writs, eviction notices, and family court documents like divorce papers and child support petitions. Our Broken Arrow Process Server team ensures that every document is served correctly according to Oklahoma law."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle urgent or after-hours jobs in Broken Arrow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in handling difficult, urgent, and after-hours service requests. Our Broken Arrow, OK process server team is available 24/7 to meet your needs. We understand that some serves require persistence and flexibility, and our process servers in Broken Arrow are trained to handle these situations professionally and effectively."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Process Server for Broken Arrow or Tulsa process server cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is competitive and transparent. The cost for a Process Server for Broken Arrow or a Tulsa process server depends on the type of service (standard, rush, same-day) and the location of the serve. Please visit our pricing page or contact us for a specific quote. We offer affordable rates for reliable service."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get proof of service from a Broken Arrow process server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After successfully serving the documents, our Broken Arrow process servers will provide you with a notarized Affidavit of Service. This legal document serves as your proof that the papers were delivered in accordance with state law. A copy of the affidavit will be emailed to you for your records at no charge. We can also file the affidavit with the court for an additional fee."
        }
      },
      {
        "@type": "Question",
        "name": "What should I expect from a Broken Arrow Process Server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you hire a Broken Arrow Process Server from our team, you can expect professionalism, diligence, and excellent communication. We will keep you updated throughout the entire process, from the initial attempt to the final proof of service. Our goal is to make the process of serving legal documents as smooth and stress-free as possible for our clients."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer skip tracing services for hard-to-find individuals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we do. If you are having trouble locating an individual for service, our experienced team can provide skip tracing services. We use advanced databases and investigative techniques to locate individuals quickly and accurately, ensuring your legal documents can be served. This is a crucial service offered by our Process Server for Tulsa County."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a process server cost in Tulsa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our professional process serving offers competitive rates with transparent pricing. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options, or visit our pricing page for complete information."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle service in secure downtown Tulsa office buildings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our servers are experienced in professionally navigating access protocols for high-security corporate offices and buildings in downtown Tulsa to ensure legal documents are served correctly and discreetly."
        }
      },
      {
        "@type": "Question",
        "name": "What is your success rate for serving evasive individuals in Tulsa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have a high success rate due to our persistence and local knowledge. We utilize multiple attempts at various times, including early mornings and late evenings, and offer skip tracing services to locate individuals anywhere in Tulsa County."
        }
      },
      {
        "@type": "Question",
        "name": "Can you file my documents at the Tulsa County Courthouse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. In addition to serving the documents, we offer court filing services. We can file your initial petition or the completed Affidavit of Service directly with the Tulsa County Court Clerk for your convenience."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you serve papers in an emergency in Tulsa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer emergency 2-hour rush service within the Tulsa metro area. When you have a critical deadline, we can prioritize your serve to ensure it gets completed immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Can you serve papers on weekends in Tulsa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer weekend and evening service in Tulsa for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays."
        }
      },
      {
        "@type": "Question",
        "name": "Where are court documents filed for Tulsa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Court documents for Tulsa are filed at the Tulsa County courthouse. We handle all filing requirements and provide detailed courthouse information with our service."
        }
      }
    ]
  };

  const images = [
    {
      src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/tulsa-process-server.jpg",
      alt: "A professional Tulsa process server delivering documents with the Tulsa skyline in the background.",
      fileName: "tulsa-process-server-delivering-documents.jpg"
    },
    {
      src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/Broken-Arrow-Municipal-Court.jpeg",
      alt: "The Broken Arrow Municipal Courthouse, a common location for a Broken Arrow process server.",
      fileName: "Broken-Arrow-Municipal-Court.jpeg"
    },
    {
      src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/tulsa-county-courthouse.jpeg",
      alt: "The Tulsa County Courthouse where our Tulsa County process servers frequently file documents.",
      fileName: "tulsa-county-courthouse-process-server.jpeg"
    },
    {
        src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/tulsa-process-server.webp",
        alt: "Process server in Tulsa reviewing legal documents before service.",
        fileName: "tulsa-process-server-reviewing-documents.webp"
    },
    {
        src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/tulsa-county-process-server.png",
        alt: "A graphic representing a Tulsa County process server and legal document delivery.",
        fileName: "tulsa-county-process-server-graphic.png"
    },
    {
        src: "https://raw.githubusercontent.com/SillyHippy/BOLT-SITE/main/public/images/Tulsa_skyline_aerial%2C_April_2023.jpg",
        alt: "Aerial view of the Tulsa skyline, an area served by our process servers.",
        fileName: "tulsa-skyline-area-served-by-process-server-in-tulsa.jpg"
    }
  ];

  const neighborhoods = [
    "Downtown Tulsa", "Brookside", "Cherry Street", "Kendall-Whittier", "Maple Ridge", "Riverside", "Midtown", "East Tulsa", "South Tulsa", "North Tulsa", "West Tulsa", "Brady Arts District", "Greenwood", "Pearl District", "Utica Square", "Gilcrease", "Owen Park", "Swan Lake", "Sunnyside", "Red Fork", "Turley", "Carbondale", "Garden City", "Sunset Terrace", "Patrick Henry", "White City", "Yorktown", "Braden Park", "Lortondale", "Florence Park", "Highland Park", "Ranch Acres", "Woodland Acres", "Forest Park", "Sheridan Hills", "Park Plaza", "Southmoor", "Rolling Hills", "Country Club Heights", "Fairmont", "Parkview", "Briarwood", "Southgate", "Union", "Jenks", "Bixby", "Owasso", "Broken Arrow", "Sand Springs"
  ];

  return (
    <>
    <div className="container mx-auto px-4 py-8">

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tulsa Process Server - Professional Legal Document Delivery</h1>
        <p className="text-xl text-muted-foreground mb-6">Your trusted partner for fast, accurate, and professional legal document delivery from a licensed process server in Tulsa County.</p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/pricing">View Pricing & Services</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Comprehensive Guide Section */}
      <section className="mb-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Your Guide to Professional Service of Process in Tulsa</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 text-blue-100">Known as the &quot;Oil Capital of the World,&quot; Tulsa&apos;s history is rich with Art Deco architecture funded by the early 20th-century oil boom. This legacy creates a diverse urban landscape, from the historic downtown core to sprawling residential areas.</p>
            <p className="mb-4 text-blue-100">Effective process serving here demands an understanding of both its business centers and its widespread suburban neighborhoods. Our expertise spans from the iconic downtown Art Deco district to modern suburban developments.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-200">Why Local Expertise Matters</h3>
            <p className="mb-4 text-blue-100">As the heart of Tulsa County, our process serving team covers every city and neighborhood with local expertise. This page serves as a comprehensive overview of our capabilities, service areas, and unwavering commitment to excellence in the field of legal support services.</p>
            <Button asChild variant="secondary" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/counties/tulsa-county">Tulsa County Process Server</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Core Services Offered Across Tulsa County</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3 text-blue-800">Summons and Complaints</h3>
              <p className="text-gray-700">The critical first step in any lawsuit, served promptly to establish jurisdiction. Learn more about <Link href="/civil-litigation-process-serving" className="text-blue-600 hover:text-blue-800 underline">civil litigation process serving</Link>.</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3 text-green-800">Subpoenas</h3>
              <p className="text-gray-700">Legally compelling witnesses to testify or produce evidence, delivered with proof of service. Expert <Link href="/subpoena-service-tulsa" className="text-green-600 hover:text-green-800 underline">subpoena service in Tulsa</Link>.</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3 text-purple-800">Family Law Documents</h3>
              <p className="text-gray-700">Handling sensitive papers like <Link href="/family-law-service-guide-tulsa-2025" className="text-purple-600 hover:underline">divorce petitions and child custody orders</Link> with care and discretion throughout <Link href="/counties/tulsa-county" className="text-purple-600 hover:underline">Tulsa County</Link>.</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3 text-red-800">Eviction & Forcible Detainer</h3>
              <p className="text-gray-700">Serving notices to tenants in strict accordance with Oklahoma&apos;s landlord-tenant laws. For comprehensive eviction guidance, visit our <Link href="/seo/eviction-notice-process-server" className="text-red-600 hover:text-red-800 underline">specialized eviction notice process server page</Link>.</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3 text-yellow-800">Garnishments and Writs</h3>
              <p className="text-gray-700">Executing court orders for asset seizure and wage garnishment. Professional <Link href="/garnishment-service-oklahoma" className="text-yellow-600 hover:text-yellow-800 underline">garnishment service throughout Oklahoma</Link>.</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-indigo-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3 text-indigo-800">Skip Tracing</h3>
              <p className="text-gray-700"><Link href="/ai-skip-tracing-guide-oklahoma-2025" className="text-indigo-600 hover:underline">Professional location services</Link> for hard-to-find individuals using advanced <Link href="/skip-tracing-services" className="text-indigo-600 hover:underline">skip tracing technology</Link>.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gold Standard Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">The Gold Standard for a Process Server in Tulsa</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Same-Day Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Urgent documents are our specialty. We guarantee same-day attempts for all rush orders in Tulsa.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Licensed & Insured</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our process servers are fully licensed and insured in Oklahoma for your complete peace of mind.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tulsa County Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We serve documents in <Link href="/tulsa-process-server" className="text-blue-600 hover:underline font-medium">Tulsa</Link>, <Link href="/service-areas/broken-arrow" className="text-blue-600 hover:underline font-medium">Broken Arrow</Link>, <Link href="/service-areas/bixby" className="text-blue-600 hover:underline font-medium">Bixby</Link>, <Link href="/service-areas/jenks" className="text-blue-600 hover:underline font-medium">Jenks</Link>, <Link href="/service-areas/owasso" className="text-blue-600 hover:underline font-medium">Owasso</Link>, and all surrounding areas.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Digital Proof of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Receive a legally compliant, digital affidavit of service as soon as the job is complete.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Complete Legal Document Services Across Tulsa County</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Core Process Serving</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Summons and Complaints:</strong> Critical first step in lawsuits, served promptly to establish jurisdiction</li>
              <li><strong>Subpoenas:</strong> Legally compelling witnesses to testify or produce evidence</li>
              <li><strong>Family Law Documents:</strong> <Link href="/family-law-service-guide-tulsa-2025" className="text-blue-600 hover:underline">Divorce petitions, child custody orders</Link> handled with discretion</li>
              <li><strong>Eviction Notices:</strong> <Link href="/seo/eviction-notice-process-server" className="text-red-600 hover:text-red-800 underline">Forcible detainer in strict accordance with Oklahoma law</Link></li>
              <li><strong>Garnishments and Writs:</strong> Court orders for asset seizure and wage garnishment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Specialized Services</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Skip Tracing:</strong> Professional location services for hard-to-find individuals</li>
              <li><strong>Rush & Emergency Service:</strong> <Link href="/urgent-process-server" className="text-blue-600 hover:underline">Same-day and 2-hour emergency service</Link> available</li>
              <li><strong>Court Filing:</strong> Complete filing services at <Link href="/counties/tulsa-county" className="text-blue-600 hover:underline">Tulsa County Courthouse</Link></li>
              <li><strong>Weekend Service:</strong> <Link href="/weekend-emergency" className="text-blue-600 hover:underline">24/7 emergency service</Link> including weekends and holidays</li>
              <li><strong>Corporate Service:</strong> High-security office buildings and gated communities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Areas Coverage */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Serving Every Corner of Tulsa County</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
          {[
            { name: 'Tulsa', link: '/tulsa-process-server' },
            { name: 'Broken Arrow', link: '/service-areas/broken-arrow' },
            { name: 'Bixby', link: '/service-areas/bixby' },
            { name: 'Jenks', link: '/service-areas/jenks' },
            { name: 'Owasso', link: '/service-areas/owasso' },
            { name: 'Sand Springs', link: '/service-areas/sand-springs' },
            { name: 'Glenpool', link: '/service-areas/glenpool' },
            { name: 'Sapulpa', link: '/service-areas/sapulpa' },
            { name: 'Collinsville', link: '/service-areas/collinsville' },
            { name: 'Skiatook', link: '/service-areas/skiatook' },
            { name: 'Catoosa', link: '/service-areas/catoosa' },
            { name: 'Kellyville', link: '/service-areas/kellyville' },
            { name: 'Downtown Tulsa', link: null },
            { name: 'Midtown', link: null },
            { name: 'South Tulsa', link: null },
            { name: 'Brookside', link: null },
            { name: 'Cherry Street', link: null },
            { name: 'Blue Dome District', link: null },
            { name: 'Brady Arts District', link: null },
            { name: 'Maple Ridge', link: null },
            { name: 'Riverside', link: null },
            { name: 'Greenwood', link: null }
          ].map(area => (
            <div key={area.name} className="bg-blue-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {area.link ? (
                <Link href={area.link} className="font-semibold text-blue-900 text-sm hover:text-blue-700 hover:underline">
                  {area.name}
                </Link>
              ) : (
                <p className="font-semibold text-blue-900 text-sm">{area.name}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Service Area - Tulsa, Oklahoma</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-center text-gray-600 mb-6">We serve all of Tulsa County and surrounding areas with professional process serving services.</p>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207735.95352197944!2d-96.0854267857!3d36.1156494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6dfdfd3da7fff%3A0x3e2b4c39b6c9c4b1!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1635780000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tulsa Process Server Service Area Map"
            ></iframe>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Professional process serving throughout Tulsa County - from downtown Tulsa to suburban communities
          </p>
        </div>
      </section>
      
      {/* Tulsa's Legal Legacy */}
      <section className="mb-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Tulsa’s Legal Legacy & Your Local Tulsa County Process Server</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <p className="mb-4">Tulsa’s legal legacy runs deep—a city that evolved from a bustling 20th-century oil hub into Oklahoma’s second-largest legal and business center. The historic downtown is home to the Tulsa County Courthouse and iconic Art Deco skyscrapers, reflecting a century of change.</p>
                <p>For generations, efficient legal document delivery has kept Tulsa’s courts, firms, and residents connected and protected. Our deep roots in this vibrant city enable us to serve legal documents with true local expertise for every Tulsa neighborhood, from Brookside to Greenwood.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                    <p className="text-4xl font-bold text-primary">97%</p>
                    <p>First-attempt serve success</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-primary">6,000+</p>
                    <p>Documents delivered countywide</p>
                </div>
            </div>
        </div>
      </section>

      {/* Comprehensive Oil Capital Section */}
      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Tulsa: The Oil Capital&apos;s Legal Heart</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Rich History & Modern Legal Needs</h3>
            <p className="mb-4 text-gray-700">Known as the &quot;Oil Capital of the World,&quot; Tulsa&apos;s history is rich with Art Deco architecture funded by the early 20th-century oil boom. This legacy creates a diverse urban landscape, from the historic downtown core to sprawling residential areas.</p>
            <p className="mb-4 text-gray-700">Nestled along the Arkansas River, Tulsa County includes a patchwork of cities—Tulsa, Broken Arrow, Jenks, Bixby—each with a unique civic and legal culture shaped by growth since the railroad era. Landmark rulings and evolving family, real estate, and civil courts have made this district the judicial heart of eastern Oklahoma.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Local Expertise Matters</h3>
            <p className="mb-4 text-gray-700">Effective process serving here demands an understanding of both its business centers and its widespread suburban neighborhoods. We&apos;ve navigated these neighborhoods for years, staying up to date with shifting court practices and the unique challenges of serving papers across diverse settings—from historic routes to modern suburbs.</p>
            <p className="text-gray-700">All service of process in Tulsa County is governed by Oklahoma State Statutes. This mandates that a licensed server must make diligent efforts to effect personal service. We are experts in these statutes and ensure every service is legally sound for the Tulsa County District Court.</p>
          </div>
        </div>
      </section>

      <Carousel className="w-full max-w-4xl mx-auto mb-12">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Comprehensive Neighborhoods & Service Areas */}
      <section className="mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving Every Corner of Tulsa County</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional process serving throughout all Tulsa neighborhoods, suburbs, and surrounding communities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Major Cities */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Major Cities</h3>
            <div className="space-y-3">
              <Link href="/counties/tulsa-county" className="block bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="font-semibold text-blue-900">Tulsa (County Seat)</div>
                <div className="text-sm text-gray-600">413,066 residents • Downtown, Midtown, South Tulsa</div>
              </Link>
              <Link href="/service-areas/broken-arrow" className="block bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="font-semibold text-blue-900">Broken Arrow</div>
                <div className="text-sm text-gray-600">113,540 residents • Fastest growing suburb</div>
              </Link>
              <Link href="/service-areas/owasso" className="block bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="font-semibold text-blue-900">Owasso</div>
                <div className="text-sm text-gray-600">36,926 residents • Northern Tulsa County</div>
              </Link>
              <Link href="/service-areas/bixby" className="block bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="font-semibold text-blue-900">Bixby</div>
                <div className="text-sm text-gray-600">27,315 residents • Arkansas River access</div>
              </Link>
              <Link href="/service-areas/jenks" className="block bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="font-semibold text-blue-900">Jenks</div>
                <div className="text-sm text-gray-600">25,949 residents • Antique Capital</div>
              </Link>
              <Link href="/service-areas/sand-springs" className="block bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="font-semibold text-blue-900">Sand Springs</div>
                <div className="text-sm text-gray-600">19,912 residents • Historic western suburb</div>
              </Link>
            </div>
          </div>
          
          {/* Tulsa Neighborhoods */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Tulsa Neighborhoods</h3>
            <div className="grid grid-cols-2 gap-2">
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Downtown Tulsa</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Brookside</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Cherry Street</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Kendall-Whittier</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Maple Ridge</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Riverside</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Midtown</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Brady Arts District</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Greenwood</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Pearl District</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Utica Square</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Gilcrease</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Owen Park</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Swan Lake</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Red Fork</span>
              <span className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-center">Turley</span>
            </div>
            <div className="mt-4 text-center">
              <Link href="/counties/tulsa-county" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                View Complete Tulsa Coverage →
              </Link>
            </div>
          </div>
          
          {/* Additional Communities */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Additional Communities</h3>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium text-gray-900">Glenpool</div>
                <div className="text-sm text-gray-600">Oil heritage community</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium text-gray-900">Collinsville</div>
                <div className="text-sm text-gray-600">Rural character community</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium text-gray-900">Sapulpa</div>
                <div className="text-sm text-gray-600">Creek County border area</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium text-gray-900">Skiatook</div>
                <div className="text-sm text-gray-600">North Tulsa County section</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium text-gray-900">Catoosa</div>
                <div className="text-sm text-gray-600">Rogers County border</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium text-gray-900">Sperry</div>
                <div className="text-sm text-gray-600">Northeastern community</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/counties" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                View All County Coverage →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Service Guarantee */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
          <div className="text-center">
            <h4 className="text-lg font-bold text-gray-900 mb-2">100% Coverage Guarantee</h4>
            <p className="text-gray-700">
              Professional process serving in every Tulsa County community with <Link href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-medium">transparent pricing</Link> and <Link href="/weekend-emergency" className="text-blue-600 hover:text-blue-800 underline font-medium">24/7 emergency service</Link> availability.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="mb-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          <div className="h-16 w-16 mx-auto mb-6 text-red-200 flex items-center justify-center">
            <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Need Emergency Process Service in Tulsa?</h2>
          <p className="text-xl mb-6 text-red-100">
            Available 24/7 for urgent legal document service throughout Tulsa County
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:5393676832" 
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Emergency: (539) 367-6832
            </a>
            <Button asChild variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
              <Link href="/contact">Get Emergency Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-6xl mx-auto mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our professional Tulsa process serving services
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ Content */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">How quickly can your Tulsa process server deliver legal documents?</h3>
                  <p className="text-gray-700 leading-relaxed">Our standard delivery is typically within 3-5 business days. We offer rush and same-day service for urgent deliveries throughout <Link href="/counties/tulsa-county" className="text-blue-600 hover:text-blue-800 underline font-medium">Tulsa County</Link>. Our process servers are committed to providing the fastest and most reliable service possible.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Are you licensed and bonded in Tulsa County?</h3>
                  <p className="text-gray-700 leading-relaxed">Yes, absolutely. All of our process servers are fully licensed and bonded as required by Oklahoma state law. We are authorized to serve throughout <Link href="/counties/tulsa-county" className="text-blue-600 hover:text-blue-800 underline font-medium">Tulsa County</Link> and handle your legal documents with complete compliance.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What areas do your Tulsa process servers cover?</h3>
                  <p className="text-gray-700 leading-relaxed">We cover all of Tulsa County including downtown Tulsa, Midtown, South Tulsa, <Link href="/service-areas/broken-arrow" className="text-blue-600 hover:text-blue-800 underline font-medium">Broken Arrow</Link>, <Link href="/service-areas/jenks" className="text-blue-600 hover:text-blue-800 underline font-medium">Jenks</Link>, <Link href="/service-areas/bixby" className="text-blue-600 hover:text-blue-800 underline font-medium">Bixby</Link>, <Link href="/service-areas/owasso" className="text-blue-600 hover:text-blue-800 underline font-medium">Owasso</Link>, and <Link href="/service-areas/sand-springs" className="text-blue-600 hover:text-blue-800 underline font-medium">Sand Springs</Link>.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What legal documents can you serve?</h3>
                  <p className="text-gray-700 leading-relaxed">We serve all types of legal documents including summons, complaints, subpoenas, <Link href="/seo/eviction-notice-process-server" className="text-red-600 hover:text-red-800 underline font-medium">eviction notices</Link>, and <Link href="/family-law-service-guide-tulsa-2025" className="text-purple-600 hover:text-purple-800 underline font-medium">family law documents</Link> like divorce papers and child support petitions.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer emergency service?</h3>
                  <p className="text-gray-700 leading-relaxed">Yes! We offer <Link href="/urgent-process-server" className="text-blue-600 hover:text-blue-800 underline font-medium">emergency 2-hour rush service</Link> and <Link href="/weekend-emergency" className="text-blue-600 hover:text-blue-800 underline font-medium">24/7 weekend service</Link> throughout Tulsa County for urgent situations.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">How much does a Tulsa process server cost?</h3>
                  <p className="text-gray-700 leading-relaxed">Our pricing is competitive and transparent. Cost depends on service type (standard, rush, same-day) and location. Visit our <Link href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-medium">pricing page</Link> for detailed information or contact us for a specific quote.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Images Section */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tulsa Process Server</h3>
              <div className="relative h-48 mb-4">
                <Image 
                  src="/images/tulsa-process-server.jpg" 
                  alt="Professional process server in Tulsa delivering legal documents"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Professional, licensed process servers serving all of Tulsa County with same-day delivery options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tulsa County Courthouse</h3>
              <div className="relative h-48 mb-4">
                <Image 
                  src="/images/tulsa-county-courthouse.jpeg" 
                  alt="Tulsa County Courthouse - legal document filing services"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Familiar with all <Link href="/counties/tulsa-county" className="text-blue-600 hover:text-blue-800 underline font-medium">Tulsa County courts</Link> and filing procedures for seamless legal document delivery.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Downtown Tulsa Service</h3>
              <div className="relative h-48 mb-4">
                <Image 
                  src="/images/tulsa-courier-downtown.jpeg" 
                  alt="Downtown Tulsa courier and process serving services"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Serving downtown Tulsa businesses, law firms, and residential areas with professional document delivery.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Our experienced team is ready to help with your Tulsa County legal document needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:(539)367-6832" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (539) 367-6832
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Legal Info & Courthouse Resources */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Tulsa County Legal Resources & Court Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Tulsa County Courthouse</h3>
              <div className="space-y-2">
                <p><strong>Address:</strong> 500 S Denver Ave, Tulsa, OK 74103</p>
                <p><strong>Phone:</strong> (918) 596-5000</p>
                <p><strong>Court Website:</strong> <Button asChild variant="link" className="p-0 h-auto">
                  <a href="https://www.tulsacountydistrictcourt.org/" target="_blank" rel="noopener noreferrer">
                    Visit Court Website
                  </a>
                </Button></p>
                <p className="text-sm text-gray-600 mt-3">
                  Historic Art Deco courthouse serving all of Tulsa County. Our process servers are familiar with all procedures and filing requirements.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Process Service Laws</h3>
              <div className="space-y-2">
                <p><strong>Oklahoma Statutes:</strong> <Button asChild variant="link" className="p-0 h-auto">
                  <a href="https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=438505" target="_blank" rel="noopener noreferrer">
                    View Process Service Laws
                  </a>
                </Button></p>
                <p><strong>Service Requirements:</strong> Personal service with licensed server</p>
                <p><strong>Affidavit Filing:</strong> Available with court filing service</p>
                <p className="text-sm text-gray-600 mt-3">
                  All service complies with Oklahoma State Statutes and Tulsa County Court requirements for legally sound process service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Service Activity */}
      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-6 text-blue-800">Recent Service Activity in Tulsa County</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-900">This Week</p>
            <p className="text-sm text-gray-600">Court filings delivered in <Link href="/service-areas/jenks" className="text-blue-600 hover:underline">Jenks</Link></p>
          </div>
          <div className="text-center bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-900">Today</p>
            <p className="text-sm text-gray-600">Expedited eviction notice in Midtown Tulsa</p>
          </div>
          <div className="text-center bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-900">Yesterday</p>
            <p className="text-sm text-gray-600">Rush subpoena delivered in downtown Tulsa</p>
          </div>
          <div className="text-center bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-900">This Week</p>
            <p className="text-sm text-gray-600">Family law documents filed at courthouse</p>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-6 text-blue-800">Community Involvement in Tulsa</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-blue-700">Supporting Tulsa&apos;s Legal Community</h4>
            <p className="text-gray-700 mb-4">We proudly support Tulsa&apos;s legal community through pro bono work, local charity events, and partnerships with Tulsa schools and law groups. Our commitment extends beyond document delivery to supporting the broader legal ecosystem that serves our community.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-blue-700">Local Partnerships</h4>
            <p className="text-gray-700">Our deep local knowledge is concentrated in our core service areas, with trusted partnerships that allow us to handle serves throughout Tulsa County with the same level of professionalism and urgency. We understand the unique character of each Tulsa neighborhood.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say About Our Tulsa Process Servers</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <Card>
                <CardContent className="pt-6">
                    <p className="italic">&quot;Just Legal Solutions served my divorce papers in Tulsa the same day I called. Professional, fast, and discreet!&quot;</p>
                    <p className="text-right font-bold mt-4">- Sarah M.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6">
                    <p className="italic">&quot;They handled a difficult serve for my law firm and provided perfect documentation. Highly recommended for Tulsa legal work.&quot;</p>
                    <p className="text-right font-bold mt-4">- Attorney John D.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6">
                    <p className="italic">&quot;I needed an eviction notice served urgently. The team at Just Legal Solutions got it done within hours.&quot;</p>
                    <p className="text-right font-bold mt-4">- Mike R.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Legal Info & Links */}
      <section className="grid md:grid-cols-2 gap-8 mb-12 text-center">
          <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Tulsa District Court</h3>
              <p>500 S Denver Ave, Tulsa, OK 74103</p>
              <p>(918) 596-5000</p>
              <Button asChild variant="link">
                <a href="https://www.oscn.net/dockets/search.aspx?db=tulsa" target="_blank" rel="noopener noreferrer">Visit Court Website</a>
              </Button>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Oklahoma Process Service Statutes</h3>
               <Button asChild variant="link">
                <a href="https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=430303" target="_blank" rel="noopener noreferrer">View Statutes</a>
              </Button>
          </div>
      </section>

      {/* Final CTA */}
      <section className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Have More Questions?</h2>
          <p className="mb-6">Our team is ready to help. Contact us for any inquiries or to get started with our services.</p>
          <Link href="/contact" className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded hover:bg-primary/90 transition-colors">
            Contact Us
          </Link>
      </section>

    </div>
      <UnifiedSchema
        pageType="location"
        title="Professional Process Server in Tulsa, Oklahoma"
        description="Expert legal document delivery throughout Tulsa County. Licensed, bonded, and available 24/7 for all your process serving needs."
        url="https://justlegalsolutions.org/tulsa-process-server"
        reviewCount={142}
        location={{
          name: 'Tulsa County',
          address: 'Tulsa, OK',
          region: 'Oklahoma'
        }}
        services={[
          'Tulsa County Process Serving',
          'Tulsa Process Server',
          'Same-Day Document Delivery',
          'Legal Document Service',
          'Professional Process Serving'
        ]}
        faqs={[
          {
            question: "How quickly can your Tulsa process server deliver legal documents?",
            answer: "Our standard delivery for a Tulsa process server is typically within 3-5 business days. However, we understand some legal matters are time-sensitive. We offer rush and same-day service for urgent deliveries throughout Tulsa and Tulsa County. Our process servers in Tulsa are committed to providing the fastest and most reliable service possible."
          },
          {
            question: "Are you a licensed and bonded process server in Tulsa County?",
            answer: "Yes, absolutely. All of our process servers are fully licensed and bonded as required by the state of Oklahoma. We are an authorized Tulsa County process server serving the entire Tulsa metro area. You can trust our professional team to handle your legal documents with the utmost care and compliance throughout Tulsa County."
          },
          {
            question: "What areas and neighborhoods do your Tulsa process servers cover?",
            answer: "Our process servers cover all of Tulsa County extensively. This includes downtown Tulsa, Midtown, South Tulsa, Brookside, Cherry Street, Brady Arts District, and all major residential and business areas throughout Tulsa. We also serve surrounding communities like Jenks, Bixby, Owasso, and Sand Springs. If you need a process server anywhere in the Tulsa metro area, we have you covered."
          },
          {
            question: "What legal documents can you deliver as a Tulsa process server?",
            answer: "As a leading Tulsa process server, we are experienced in serving all types of legal documents. This includes summons, complaints, subpoenas, writs, eviction notices, and family court documents like divorce papers and child support petitions. For specialized eviction notice delivery, visit our <Link href=\"/seo/eviction-notice-process-server\" className=\"text-red-600 hover:text-red-800 underline\">dedicated eviction process server page</Link>. Our Tulsa Process Server team ensures that every document is served correctly according to Oklahoma law and Tulsa County court requirements."
          },
          {
            question: "How do you handle urgent or after-hours jobs in Tulsa?",
            answer: "We specialize in handling difficult, urgent, and after-hours service requests throughout Tulsa and Tulsa County. Our Tulsa process server team is available 24/7 to meet your needs. We understand that some serves require persistence and flexibility, and our process servers in Tulsa are trained to handle these situations professionally and effectively."
          },
          {
            question: "How much does a Tulsa process server cost?",
            answer: "Our pricing is competitive and transparent. The cost for a Tulsa process server depends on the type of service (standard, rush, same-day) and the location of the serve within Tulsa County. Please visit our pricing page or contact us for a specific quote. We offer affordable rates for reliable service throughout the Tulsa metro area."
          },
          {
            question: "Where can I find more information about process serving laws and procedures?",
            answer: "For comprehensive guides on Oklahoma process serving laws, document types, and legal procedures, visit our <Link href=\"/resources\" className=\"text-blue-600 hover:text-blue-800 underline\">legal resources page</Link>. You'll find expert guidance, FAQs, and educational materials about process serving throughout Oklahoma. We also have a detailed <Link href=\"/process-server-tulsa-guide\" className=\"text-blue-600 hover:text-blue-800 underline\">Tulsa Process Server Guide</Link> with everything you need to know about selecting and working with process servers."
          }
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tulsa Process Server', url: '/tulsa-process-server' }
        ]}
      />
    </>
  );
}
