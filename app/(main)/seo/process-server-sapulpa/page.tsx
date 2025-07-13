import { Metadata } from 'next';
import ReviewSchema from '@/components/ui/review-schema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import EnhancedFAQSchema, { generateProcessServingFAQs } from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import PerformanceSchema from '@/components/ui/performance-schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server Sapulpa | Professional Document Delivery | Just Legal Solutions',
  description: 'Certified process server in Sapulpa, Creek County. Fast, reliable legal document delivery. Licensed and bonded. Call (539) 367-6832 for same-day service in 74066.',
  keywords: ['process server Sapulpa', 'Sapulpa process serving', 'legal document delivery Sapulpa', 'court documents Creek County', '74066 process server'],
  robots: 'index, follow',
  openGraph: {
    title: 'Process Server Sapulpa | Professional Document Delivery | Just Legal Solutions',
    description: 'Certified process server in Sapulpa, Creek County. Fast, reliable legal document delivery. Licensed and bonded. Call (539) 367-6832 for same-day service in 74066.',
    url: 'https://justlegalsolutions.org/process-server-sapulpa',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/contactlogo.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Process Server Sapulpa | Professional Document Delivery | Just Legal Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Sapulpa | Professional Document Delivery | Just Legal Solutions',
    description: 'Certified process server in Sapulpa, Creek County. Fast, reliable legal document delivery. Licensed and bonded. Call (539) 367-6832 for same-day service in 74066.',
    images: ['/contactlogo.png']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/process-server-sapulpa'
  },
};

export default function ProcessServerSapulpa() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Sapulpa, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Sapulpa, Creek County
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Certified Legal Document Delivery in Creek County
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Sapulpa, Oklahoma (74066). 
            Our professional process servers deliver legal documents throughout Creek County and 
            surrounding areas with speed, accuracy, and complete confidentiality.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=400&fit=crop&auto=format" 
              alt="Sapulpa Oklahoma Creek County legal services and professional process server"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4">Our Sapulpa Process Serving Services</h3>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Same-day process serving in Sapulpa</li>
            <li>Court document delivery throughout 74066 area</li>
            <li>Legal courier services for attorneys and law firms</li>
            <li>Rush delivery for urgent legal matters</li>
            <li>GPS tracking and photographic documentation</li>
            <li>Professional service affidavits and detailed reports</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Why Choose Just Legal Solutions in Sapulpa?</h3>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Local Knowledge:</strong> Familiar with Sapulpa and Creek County procedures</li>
            <li><strong>Fast Turnaround:</strong> Same-day and rush services available</li>
            <li><strong>Licensed Professionals:</strong> Bonded and insured process servers</li>
            <li><strong>Reliable Documentation:</strong> Complete service records and proof of delivery</li>
            <li><strong>Competitive Pricing:</strong> Transparent rates with no hidden fees</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Our Sapulpa Process Servers
            </h3>
            <p className="text-green-700 mb-3">
              Professional document service in Sapulpa and Creek County. Call for immediate assistance!
            </p>
            <p className="text-2xl font-bold text-green-800">
              📞 (539) 367-6832
            </p>
            <p className="text-green-700 mt-2">
              📧 info@justlegalsolutions.org
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Sapulpa Service Coverage Areas</h3>
          <p className="mb-4">
            Complete process serving coverage throughout Sapulpa and surrounding communities:
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>Downtown Sapulpa (74066)</li>
            <li>Sapulpa residential neighborhoods</li>
            <li>Sapulpa business and commercial districts</li>
            <li>West Tulsa County border areas</li>
            <li>Creek County coverage</li>
            <li>Sand Springs adjacent areas</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Creek County Court Services</h3>
          <p className="mb-4">
            Our Sapulpa process servers are experienced with Creek County legal procedures:
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>Creek County District Court documents</li>
            <li>Family court papers and custody matters</li>
            <li>Small claims court summons</li>
            <li>Civil litigation documents</li>
            <li>Eviction notices and landlord documents</li>
            <li>Subpoenas and witness summons</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Sapulpa to Tulsa Court Services
            </h3>
            <p className="text-yellow-700">
              Need documents transferred between Sapulpa and Tulsa County courts? We provide 
              inter-county courier services with same-day delivery options.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Types of Documents We Serve in Sapulpa</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Family Law:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Divorce papers</li>
                <li>Custody modifications</li>
                <li>Child support documents</li>
                <li>Protective orders</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Civil & Business:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Civil lawsuit papers</li>
                <li>Business disputes</li>
                <li>Collection notices</li>
                <li>Contract disputes</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Sapulpa Service Guarantee
            </h3>
            <p className="text-blue-700">
              We guarantee professional, timely service in Sapulpa with complete documentation. 
              If we cannot complete service, you pay nothing for the attempt.
            </p>
          </div>
        </div>
      
      {/* Enhanced Schema Components for Maximum SEO */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "process server sapulpa", url: "/process-server-sapulpa" }
      ]} />
      
      <EnhancedFAQSchema 
        pageTitle="process server sapulpa in Sapulpa"
        faqs={generateProcessServingFAQs("Sapulpa", "Process Serving")}
      />
      
      <EnhancedServiceSchema 
        serviceName="process server sapulpa"
        serviceDescription="Professional Process Serving services in Sapulpa, Oklahoma"
        serviceArea="Sapulpa, Oklahoma"
        serviceType="Process Serving"
        additionalServices={["Rush Service", "Same-Day Service", "Emergency Service"]}
      />
      
      <PerformanceSchema 
        pageName="process server sapulpa - Sapulpa"
        pageUrl="/process-server-sapulpa"
        loadTime={2.0}
        mobileOptimized={true}
      />
            <ReviewSchema businessName="Just Legal Solutions" aggregateRating={4.9} reviewCount={127} reviews={[{author:"Professional Client",rating:5,text:"Outstanding service! Professional, fast, and reliable.",date:"2024-12-01"}]} />
      </div>
    </div>
  );
}





