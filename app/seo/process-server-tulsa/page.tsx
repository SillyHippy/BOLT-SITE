import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Tulsa Oklahoma | Professional Legal Document Delivery | Just Legal Solutions',
  description: 'Expert process server in Tulsa, Oklahoma. Complete legal document delivery services throughout Tulsa County. Licensed, bonded, insured. Call (539) 367-6832 for all process serving needs.',
  keywords: ['process server Tulsa', 'Tulsa process server', 'legal document delivery Tulsa', 'process serving Tulsa Oklahoma', 'court documents Tulsa', 'professional process server'],
  robots: 'index, follow'
};

export default function ProcessServerTulsaPage() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Full Service Coverage:</strong> Tulsa County & Beyond
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Complete Legal Document Delivery Services in Tulsa
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Just Legal Solutions is Tulsa&apos;s premier process serving company, providing comprehensive legal document 
            delivery throughout Tulsa County and surrounding areas. Our experienced, licensed process servers handle 
            all types of legal documents with professionalism, speed, and complete accuracy.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-block font-semibold">
              View Complete Pricing & Packages
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>SEO Optimization:</strong> This comprehensive Tulsa process server page updates daily with fresh 
              content and current availability. We serve all Tulsa County zip codes with professional legal document delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


