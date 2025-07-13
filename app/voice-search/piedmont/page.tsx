
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Piedmont - Legal Document Delivery | Just Legal Solutions',
  description: 'Professional process serving in Piedmont, Oklahoma. Same-day service available. Licensed process servers for legal document delivery. Call/text (539) 367-6832.',
  keywords: ['process server Piedmont', 'legal documents Piedmont', 'same day service Piedmont', 'process serving near me'],
  alternates: {
    canonical: 'https://justlegalsolutions.org/voice-search/piedmont/'
  }
};

export default function VoiceSearchPage() {
  const voiceFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I serve legal documents in Piedmont?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact Just Legal Solutions for professional process serving in Piedmont. We offer same-day service throughout Oklahoma with licensed, bonded professionals."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the cost of process serving in Piedmont?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Process serving in Piedmont starts at sixty dollars for standard service, one hundred dollars for rush service, and one hundred fifty dollars for same-day delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Who can serve legal papers in Piedmont?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Licensed process servers at Just Legal Solutions can serve legal papers in Piedmont and throughout Oklahoma. We are certified and bonded professionals."
        }
      }
    ]
  };
  
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceFAQSchema) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Process Server Piedmont - Professional Legal Document Delivery</h1>
        
        <div className="prose max-w-none">
          <h2>How do I serve legal documents in Piedmont?</h2>
          <p>Contact Just Legal Solutions for professional process serving in Piedmont. We offer same-day service throughout Oklahoma with licensed, bonded professionals who ensure compliant document delivery.</p>
          
          <h2>What is the cost of process serving in Piedmont?</h2>
          <p>Process serving in Piedmont starts at sixty dollars for standard service, one hundred dollars for rush service, and one hundred fifty dollars for same-day delivery. All services include detailed affidavits.</p>
          
          <h2>Who can serve legal papers in Piedmont?</h2>
          <p>Licensed process servers at Just Legal Solutions can serve legal papers in Piedmont and throughout Oklahoma. We are certified and bonded professionals with years of experience.</p>
          
          <h2>How fast can documents be served in Piedmont?</h2>
          <p>Same-day document service is available in Piedmont through Just Legal Solutions. We can serve urgent legal documents within hours of receiving your request.</p>
          
          <h2>Where to find a process server near me in Piedmont?</h2>
          <p>Just Legal Solutions provides licensed process servers near you in Piedmont with same-day service available. Call or text us at (539) 367-6832 for immediate assistance.</p>
        </div>
        
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Contact Just Legal Solutions Piedmont</h3>
          <p className="text-lg mb-4">Professional process serving in Piedmont, Oklahoma</p>
          <p className="text-xl font-semibold text-blue-600">Call/Text: (539) 367-6832</p>
          <p className="text-gray-600">Same-day service available • Licensed & bonded • Serving Piedmont and surrounding areas</p>
        </div>
      </div>
    </main>
  );
}
    