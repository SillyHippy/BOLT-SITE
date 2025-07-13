import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subpoena Service Tulsa | Professional Witness Summons Delivery | Just Legal Solutions',
  description: 'Expert subpoena service in Tulsa, Oklahoma. Fast, reliable delivery of witness summons, court subpoenas, and legal notices. Call (539) 367-6832 for professional service.',
  keywords: ['subpoena service Tulsa', 'witness summons delivery', 'court subpoena serving', 'legal subpoena service Oklahoma', 'witness subpoena Tulsa'],
  robots: 'index, follow'
};

export default function SubpoenaService() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Subpoena Service in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-8">
          <p className="text-lg text-purple-800">
            <strong>Expert Witness Service!</strong> Last Updated: {lastUpdated} | Specialized Subpoena Delivery
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Specialized Subpoena and Witness Summons Delivery
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Just Legal Solutions provides expert subpoena service throughout Tulsa County and surrounding areas. 
            Our experienced process servers understand the critical importance of proper subpoena delivery and 
            ensure compliance with all Oklahoma court requirements for witness summons.
          </p>

          
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Legal Expertise:</strong> This subpoena service page updates daily with current Oklahoma 
              court requirements. Professional witness service available statewide: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


