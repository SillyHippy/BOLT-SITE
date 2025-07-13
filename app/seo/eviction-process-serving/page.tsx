import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eviction Process Serving Tulsa | Landlord Document Delivery | Just Legal Solutions',
  description: 'Professional eviction process serving in Tulsa, Oklahoma. Fast, reliable service of eviction notices, unlawful detainer, and landlord documents. Call (539) 367-6832.',
  keywords: ['eviction process serving Tulsa', 'eviction notice service', 'landlord document delivery', 'unlawful detainer service', 'tenant eviction papers'],
  robots: 'index, follow'
};

export default function EvictionProcessServing() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Eviction Process Serving in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <p className="text-lg text-red-800">
            <strong>Urgent Service Available!</strong> Last Updated: {lastUpdated} | Same-Day Eviction Notice Service
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Professional Eviction Document Delivery for Landlords
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Just Legal Solutions specializes in eviction process serving throughout Tulsa County. We understand 
            the time-sensitive nature of eviction proceedings and provide fast, professional service of all 
            landlord-tenant documents with complete legal compliance.
          </p>

          
      </div>
    </div>
  );
}


