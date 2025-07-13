import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Entry Services Tulsa | Professional Data Management | Just Legal Solutions',
  description: 'Expert data entry services in Tulsa. Fast, accurate data management, database entry, digitization, and administrative support. Call (539) 367-6832.',
  keywords: ['data entry Tulsa', 'data entry services Oklahoma', 'database management Tulsa', 'document digitization', 'data processing Tulsa', 'administrative data services'],
  robots: 'index, follow'
};

export default function DataEntryServicesTulsa() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Data Entry Services in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Accurate & Efficient</strong> | Updated: {lastUpdated} | Serving Tulsa Area Businesses
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Transform your business operations with professional data entry services in Tulsa. 
            Our experienced team provides fast, accurate, and secure data management solutions 
            for businesses of all sizes throughout Oklahoma.
          </p>

          {/* Core Data Entry Services */}
          
            </div>
          </div>

          {/* Research & Analysis */}
          
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Get Started</h3>
                <div className="space-y-3">
                  <a href="/pricing" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100">
                    Free Consultation
                  </a>
                  <p className="text-green-100">
                    Discuss your data entry needs and receive a custom quote 
                    for your specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Professional Data Services:</strong> This data entry services page highlights 
              our comprehensive data management capabilities in Tulsa. Updated daily for current 
              pricing and service information. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


