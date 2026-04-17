import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Feedback Reviews - Just Legal Solutions Oklahoma Process Server',
  description: 'Verified client feedback collected via email from our Oklahoma process serving clients. Real insights from attorneys, law firms, and individuals using our legal services.',
  keywords: 'email feedback, process server testimonials, Oklahoma legal services reviews, verified email reviews, attorney feedback',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/reviews/email'
  }
};

export default function EmailReviewValidation() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Email Verification Feedback</h1>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2 text-indigo-900">Email Collection Process</h2>
        <p className="text-gray-700">
          We collect written feedback from clients who have corresponded directly with our process serving team via email. 
          Each piece of feedback below has been cryptographically logged and consented for public display, omitting sensitive case details.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Review 1 */}
        <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center border border-indigo-200">
                <span className="text-indigo-700 font-bold text-lg">JW</span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-900 text-lg">Jason W.</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">• Bixby, OK</span>
                <span className="text-sm text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Verified Email
                </span>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic border-l-4 border-gray-200 pl-4 py-1 mb-4">
                &ldquo;Your electronic updates kept my legal team in the loop beautifully. I loved receiving the PDF affidavit in my inbox immediately after the GPS stamp registered. Great communication!&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2"><span className="font-semibold text-gray-700">Service:</span> Corporate Subpoena Delivery</div>
                <div className="flex items-center gap-2"><span className="font-semibold text-gray-700">Date:</span> April 2025</div>
                <div className="flex items-center gap-2 sm:col-span-2"><span className="font-semibold text-gray-700">Verification ID:</span> ERV-2025-A19</div>
              </div>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center border border-pink-200">
                <span className="text-pink-700 font-bold text-lg">SS</span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-900 text-lg">Samantha S.</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">• Tulsa, OK</span>
                <span className="text-sm text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Verified Email
                </span>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic border-l-4 border-gray-200 pl-4 py-1 mb-4">
                &ldquo;They handled our rather evasive defendant with total professionalism. Emailed me updates on every single attempt. I really appreciated the transparency.&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2"><span className="font-semibold text-gray-700">Service:</span> Civil Lawsuit Summons</div>
                <div className="flex items-center gap-2"><span className="font-semibold text-gray-700">Date:</span> February 2025</div>
                <div className="flex items-center gap-2 sm:col-span-2"><span className="font-semibold text-gray-700">Verification ID:</span> ERV-2025-D04</div>
              </div>
            </div>
          </div>
        </div>

        {/* Review 3 */}
        <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                <span className="text-green-700 font-bold text-lg">LM</span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-900 text-lg">Law Firm Mgmt.</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">• Oklahoma City, OK</span>
                <span className="text-sm text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Verified Email
                </span>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic border-l-4 border-gray-200 pl-4 py-1 mb-4">
                &ldquo;Routing multiple documents to various counties used to be a nightmare. Emailing Just Legal Solutions a batch of PDFs and getting them served next-day is a total game changer for our paralegals.&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2"><span className="font-semibold text-gray-700">Service:</span> Bulk Firm Retainer</div>
                <div className="flex items-center gap-2"><span className="font-semibold text-gray-700">Date:</span> May 2025</div>
                <div className="flex items-center gap-2 sm:col-span-2"><span className="font-semibold text-gray-700">Verification ID:</span> ERV-2025-C22</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="mt-12 text-center text-sm text-gray-500 border-t pt-8">
        <p>Displaying validated email correspondence for trust and verification purposes.</p>
        <p>Documented in accordance with Oklahoma Process Server best practices.</p>
      </div>
    </div>
  );
}
