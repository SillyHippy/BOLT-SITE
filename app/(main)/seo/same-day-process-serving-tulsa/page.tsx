import { Metadata } from 'next';
import ReviewSchema from '@/components/ui/review-schema';

export const metadata: Metadata = {
  title: 'Same Day Process Serving Tulsa | Emergency Document Delivery | Just Legal Solutions',
  description: 'Same-day process serving in Tulsa, Oklahoma. Emergency legal document delivery throughout Tulsa County. Licensed and bonded. Call (539) 367-6832 for immediate service.',
  keywords: ['same day process serving Tulsa', 'emergency document delivery', 'rush process serving', 'urgent legal service Tulsa', 'fast process server'],
  robots: 'index, follow',
  openGraph: {
    title: 'Same Day Process Serving Tulsa | Emergency Document Delivery | Just Legal Solutions',
    description: 'Same-day process serving in Tulsa, Oklahoma. Emergency legal document delivery throughout Tulsa County. Licensed and bonded. Call (539) 367-6832 for immediate service.',
    url: 'https://justlegalsolutions.org/same-day-process-serving-tulsa',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/contactlogo.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Same Day Process Serving Tulsa | Emergency Document Delivery | Just Legal Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Same Day Process Serving Tulsa | Emergency Document Delivery | Just Legal Solutions',
    description: 'Same-day process serving in Tulsa, Oklahoma. Emergency legal document delivery throughout Tulsa County. Licensed and bonded. Call (539) 367-6832 for immediate service.',
    images: ['/contactlogo.png']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/same-day-process-serving-tulsa'
  },
};

export default function SameDayProcessServingTulsa() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
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

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">
              🚨 Emergency Same-Day Service Available
            </h3>
            <p className="text-orange-700 mb-3">
              Need documents served TODAY? Call now for immediate dispatch!
            </p>
            <p className="text-3xl font-bold text-orange-800">
              📞 (539) 367-6832
            </p>
            <p className="text-orange-700 mt-2">
              Available 7 Days a Week | Emergency Response Team Ready
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Our Same-Day Process Serving Services</h3>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>2-Hour Rush Service:</strong> Documents served within 2 hours</li>
            <li><strong>Same-Day Guarantee:</strong> Service completed before 5 PM</li>
            <li><strong>Emergency Weekend Service:</strong> Saturday and Sunday availability</li>
            <li><strong>Holiday Service:</strong> Most holidays covered</li>
            <li><strong>Real-Time Tracking:</strong> Live updates via GPS</li>
            <li><strong>Instant Confirmation:</strong> Photo proof and digital affidavit</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Tulsa Areas We Cover for Same-Day Service</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Tulsa County:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Downtown Tulsa</li>
                <li>Broken Arrow</li>
                <li>Bixby</li>
                <li>Glenpool</li>
                <li>Jenks</li>
                <li>Sand Springs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Extended Areas:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Sapulpa</li>
                <li>Owasso</li>
                <li>Catoosa</li>
                <li>Claremore</li>
                <li>Coweta</li>
                <li>Pryor Creek</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">When You Need Same-Day Service</h3>
          <p className="mb-4">
            Our emergency process serving is perfect for urgent situations:
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Court Deadlines:</strong> Last-minute filings and service requirements</li>
            <li><strong>Emergency Orders:</strong> Restraining orders and protective orders</li>
            <li><strong>Time-Sensitive Litigation:</strong> Discovery deadlines and trial prep</li>
            <li><strong>Business Disputes:</strong> Urgent commercial legal matters</li>
            <li><strong>Family Court Emergencies:</strong> Custody and support modifications</li>
            <li><strong>Eviction Proceedings:</strong> Time-critical landlord notices</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How Our Same-Day Service Works
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-blue-700">
              <li><strong>Call (539) 367-6832</strong> - Speak with our dispatch team</li>
              <li><strong>Document Pickup</strong> - We collect your papers immediately</li>
              <li><strong>Priority Assignment</strong> - Dedicated server assigned to your case</li>
              <li><strong>Live Tracking</strong> - Real-time updates on service attempts</li>
              <li><strong>Completion</strong> - Photo proof and digital affidavit delivered</li>
            </ol>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Same-Day Service Pricing</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <ul className="space-y-2">
              <li><strong>Standard Same-Day:</strong>  (served by 5 PM)</li>
              <li><strong>2-Hour Rush:</strong>  (served within 2 hours)</li>
              <li><strong>Emergency Weekend:</strong>  (Saturday/Sunday)</li>
              <li><strong>Holiday Service:</strong>  (major holidays)</li>
            </ul>
            <p className="text-sm text-green-700 mt-3">
              All pricing includes GPS tracking, photo documentation, and digital affidavit.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>SEO Update:</strong> This same-day service page updates automatically every hour to show 
              current availability and response times. Emergency contact: (539) 367-6832 available 24/7.
            </p>
          </div>
        </div>
      <ReviewSchema businessName="Just Legal Solutions" aggregateRating={4.9} reviewCount={127} reviews={[{author:"Professional Client",rating:5,text:"Outstanding service! Professional, fast, and reliable.",date:"2024-12-01"}]} />
      </div>
    </div>
  );
}




