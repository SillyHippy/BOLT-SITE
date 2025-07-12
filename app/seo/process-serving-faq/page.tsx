import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Serving FAQ | Common Questions Answered | Just Legal Solutions',
  description: 'Frequently asked questions about process serving in Oklahoma. Get expert answers about legal document delivery, costs, timelines, and requirements. Call (539) 367-6832.',
  keywords: ['process serving FAQ', 'process server questions', 'legal document service FAQ', 'Oklahoma process serving', 'how does process serving work'],
  robots: 'index, follow'
};

export default function ProcessServingFAQ() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Process Serving FAQ - Frequently Asked Questions
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Expert Answers</strong> | Last Updated: {lastUpdated} | Professional Guidance from Oklahoma Process Servers
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Get answers to the most common questions about process serving in Oklahoma. Our experienced 
            process servers provide expert guidance on legal document delivery, requirements, and procedures.
          </p>

          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. How much does process serving cost in Oklahoma?
              </h3>
              <p className="text-gray-700 mb-4">
                Process serving costs vary based on service type and urgency:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li><strong>Standard service (3-5 days):</strong> $40</li>
                <li><strong>Rush service (1-2 days):</strong> $60</li>
                <li><strong>Same-day service:</strong> $75</li>
                <li><strong>Emergency service (2 hours):</strong> $100</li>
              </ul>
              <p className="text-gray-700 mt-3">
                All pricing includes multiple service attempts, GPS tracking, and professional affidavits.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. How long does it take to serve legal documents?
              </h3>
              <p className="text-gray-700 mb-4">
                Service timeframes depend on the urgency level you choose:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li><strong>Standard service:</strong> 3-5 business days</li>
                <li><strong>Rush service:</strong> 1-2 business days</li>
                <li><strong>Same-day service:</strong> Within 8 hours</li>
                <li><strong>Emergency service:</strong> Within 2 hours</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Most standard documents are successfully served within 3 business days.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. What areas do you serve in Oklahoma?
              </h3>
              <p className="text-gray-700 mb-4">
                We provide comprehensive coverage throughout:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800">Tulsa County:</p>
                  <ul className="list-disc ml-6 text-gray-700">
                    <li>Tulsa</li>
                    <li>Broken Arrow</li>
                    <li>Bixby</li>
                    <li>Glenpool</li>
                    <li>Jenks</li>
                    <li>Sand Springs</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Surrounding Areas:</p>
                  <ul className="list-disc ml-6 text-gray-700">
                    <li>Sapulpa (Creek County)</li>
                    <li>Owasso</li>
                    <li>Catoosa (Rogers County)</li>
                    <li>Claremore</li>
                    <li>Coweta (Wagoner County)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. What types of documents can you serve?
              </h3>
              <p className="text-gray-700 mb-4">
                We serve all types of legal documents including:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Divorce and family court papers</li>
                    <li>Civil lawsuit documents</li>
                    <li>Eviction notices</li>
                    <li>Small claims court papers</li>
                    <li>Restraining orders</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Subpoenas and witness summons</li>
                    <li>Business litigation papers</li>
                    <li>Debt collection documents</li>
                    <li>Landlord-tenant notices</li>
                    <li>Court orders and judgments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. What happens if the person cannot be found?
              </h3>
              <p className="text-gray-700 mb-4">
                If initial service attempts are unsuccessful, we offer several solutions:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li><strong>Multiple attempts:</strong> We make several attempts at different times and locations</li>
                <li><strong>Skip tracing:</strong> Investigation services to locate individuals</li>
                <li><strong>Substitute service:</strong> Service to household members or at workplace (when legally allowed)</li>
                <li><strong>Posted service:</strong> Court-approved posting as a last resort</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We work closely with attorneys to explore all legal service options.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Do you provide proof of service?
              </h3>
              <p className="text-gray-700 mb-4">
                Yes! We provide comprehensive documentation including:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li><strong>Professional affidavit of service:</strong> Legal document for court filing</li>
                <li><strong>Photo documentation:</strong> Pictures of service completion</li>
                <li><strong>GPS tracking data:</strong> Time and location verification</li>
                <li><strong>Detailed service report:</strong> Complete record of all attempts</li>
                <li><strong>Digital delivery:</strong> Electronic copies for immediate use</li>
              </ul>
            </div>

            {/* FAQ Item 7 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Can anyone serve legal documents?
              </h3>
              <p className="text-gray-700 mb-4">
                While Oklahoma law allows certain individuals to serve documents, professional service is recommended:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Who Can Serve:</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Licensed process servers</li>
                    <li>Sheriff&apos;s deputies</li>
                    <li>Adults not party to the case</li>
                    <li>Court-appointed officials</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Why Choose Professionals:</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Legal expertise and compliance</li>
                    <li>Higher success rates</li>
                    <li>Proper documentation</li>
                    <li>Time and stress savings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Item 8 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8. What information do you need to serve documents?
              </h3>
              <p className="text-gray-700 mb-4">
                To ensure successful service, please provide:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li><strong>Complete documents to be served</strong></li>
                <li><strong>Full name of person to be served</strong></li>
                <li><strong>Current address (home and/or work)</strong></li>
                <li><strong>Physical description if available</strong></li>
                <li><strong>Best times to attempt service</strong></li>
                <li><strong>Any special instructions or concerns</strong></li>
              </ul>
            </div>

            {/* FAQ Item 9 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                9. Do you serve documents on weekends and holidays?
              </h3>
              <p className="text-gray-700 mb-4">
                Yes! We offer flexible scheduling including:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li><strong>Weekend service:</strong> Saturday and Sunday availability</li>
                <li><strong>Holiday service:</strong> Most major holidays covered</li>
                <li><strong>Emergency service:</strong> 24/7 availability for urgent matters</li>
                <li><strong>Evening service:</strong> After-hours attempts when needed</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Weekend and holiday service may include additional fees.
              </p>
            </div>

            {/* FAQ Item 10 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                10. How do I get started with process serving?
              </h3>
              <p className="text-gray-700 mb-4">
                Getting started is easy:
              </p>
              <ol className="list-decimal ml-6 text-gray-700 space-y-2">
                <li><strong>Call (539) 367-6832</strong> or email info@justlegalsolutions.org</li>
                <li><strong>Provide document details</strong> and service requirements</li>
                <li><strong>Receive instant quote</strong> based on service type needed</li>
                <li><strong>Submit documents</strong> via email, mail, or in-person pickup</li>
                <li><strong>Track progress</strong> with real-time updates</li>
                <li><strong>Receive completion</strong> documentation for your records</li>
              </ol>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-green-700 mb-4">
              Our experienced process serving team is ready to answer your questions and provide 
              professional legal document delivery throughout Oklahoma.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/calendar" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>FAQ Updates:</strong> This process serving FAQ page updates regularly with new questions 
              and current Oklahoma legal requirements. Professional consultation available: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
