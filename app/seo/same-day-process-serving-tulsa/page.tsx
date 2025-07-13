import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Same Day Process Serving Tulsa | Emergency Document Delivery | Just Legal Solutions',
  description: 'Same-day process serving in Tulsa, Oklahoma. Emergency legal document delivery throughout Tulsa County. Licensed and bonded. Call (539) 367-6832 for immediate service.',
  keywords: ['same day process serving Tulsa', 'emergency document delivery', 'rush process serving', 'urgent legal service Tulsa', 'fast process server'],
  robots: 'index, follow'
};

export default function SameDayProcessServingTulsa() {
  const lastUpdated = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Same-Day Process Serving in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <p className="text-lg text-red-800">
            <strong>Emergency Service Available!</strong> Last Updated: {lastUpdated} at {currentTime}
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Emergency Legal Document Delivery Throughout Tulsa County
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            When you need urgent legal document delivery, Just Legal Solutions provides same-day 
            process serving throughout Tulsa, Oklahoma. Our emergency response team is ready to 
            handle time-sensitive legal matters with speed and professionalism.
          </p>

          
      </div>
    </div>
  );
}


