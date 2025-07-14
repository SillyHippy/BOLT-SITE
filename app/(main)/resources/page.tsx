import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import BreadcrumbSchema, { VisualBreadcrumbs } from '@/components/ui/breadcrumb-schema';
import ServiceSchema from '@/components/ui/service-schema';

export const metadata: Metadata = {
  title: 'Resources | Just Legal Solutions',
  description: 'Explore legal resources, guides, and FAQs for Oklahoma process serving and legal document delivery.',
  keywords: ['legal resources', 'oklahoma process server guides', 'document delivery faqs', 'court papers info'],
  robots: 'index, follow'
};

  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    month: 'numeric', 
    day: 'numeric', 
    year: 'numeric',
    timeZone: 'America/Chicago' 
  });

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' }
  ];

  const resourceCategories = [
    {
      title: "Process Serving Guides",
      description: "Everything you need to know about legal document delivery",
      articles: [
        { title: "What is a Process Server?", url: null, preview: "Complete guide to process servers and legal document delivery" },
        { title: "Oklahoma Process Server Requirements", url: null, preview: "Legal requirements for process servers in Oklahoma" },
        { title: "Process Serving FAQ", url: null, preview: "Frequently asked questions about process serving" }
      ]
    },
    {
      title: "Court Document Types",
      description: "Understanding different legal documents and their service requirements",
      articles: [
        { title: "Divorce Papers Service", url: null, preview: "Professional divorce document delivery in Tulsa" },
        { title: "Eviction Process Serving", url: null, preview: "Landlord document delivery and eviction notices" },
        { title: "Subpoena Service", url: null, preview: "Court-ordered document delivery and witness service" }
      ]
    },
    {
      title: "Service Areas",
      description: "Process serving coverage throughout Oklahoma",
      articles: [
        { title: "Tulsa County Process Server", url: null, preview: "Professional service throughout Tulsa County" },
        { title: "Broken Arrow Process Server", url: null, preview: "Document delivery in Broken Arrow and Wagoner County" },
        { title: "Sapulpa Process Server", url: null, preview: "Legal document service in Sapulpa and Creek County" }
      ]
    },
    {
      title: "Business Services",
      description: "Specialized services for legal professionals and businesses",
      articles: [
        { title: "Skip Tracing Services", url: null, preview: "Professional people location and investigation services" },
        { title: "Court Document Filing", url: null, preview: "Professional courthouse filing assistance" }
      ]
    }
  ];

const ResourcesPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Process Serving Resources & Legal Guides</h1>
            <p className="text-xl text-gray-600 mb-6">Expert legal guides, process serving tips, and Oklahoma legal resources. Professional insights from licensed process servers in Tulsa County.</p>
          </div>
        </div>
        {/* Pricing Button Instead of List */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Service Rates</h3>
          <a 
            href="/pricing" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full text-center font-bold text-lg"
          >
            View Pricing
          </a>
          <p className="text-sm text-gray-600 mt-4">
            Rates vary by distance and urgency. Court filing services include additional handling fees.
          </p>
        </div>
        {/* Service Hours Updated to 24/7 */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Service Hours</h3>
          <div className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <span>Open:</span>
              <span>24/7 Emergency Service Available</span>
            </div>
          </div>
        </div>
        {/* Contact Info Updated */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div>
              <strong className="text-gray-900">Phone:</strong>
              <p className="text-gray-600">(539) 367-6832</p>
            </div>
            <div>
              <strong className="text-gray-900">Email:</strong>
              <p className="text-gray-600">info@justlegalsolutions.org</p>
            </div>
            <div>
              <strong className="text-gray-900">Coverage:</strong>
              <p className="text-gray-600">Tulsa County & Statewide Oklahoma</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ResourcesPage;


