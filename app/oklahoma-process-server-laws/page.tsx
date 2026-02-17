
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import AIVoiceSupremacy from '@/components/ui/ai-voice-supremacy';

export const metadata: Metadata = {
  title: 'Oklahoma Process Server Laws 2026 | Rules & Requirements Guide',
  description: 'Acurate guide to Oklahoma process serving laws (Title 12 O.S. § 2004). Explains substituted service (age 15+), licensing under § 158.1, time limits, and service by mail rules.',
  keywords: 'oklahoma process server laws, 12 O.S. 2004, oklahoma substituted service age, process server license oklahoma, oklahoma service by publication, civil procedure oklahoma',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/oklahoma-process-server-laws'
  },
  other: {
    'ai-content-type': 'legal-guide',
    'ai-summary': 'Oklahoma process serving is governed by 12 O.S. § 2004. Service may be made by a sheriff or licensed private process server. Personal service is primary. Substituted service is permitted at the dwelling on a resident aged 15 or older; no mailing is required for this specific method. Service must typically be made within 180 days of filing.',
    'ai-key-facts': 'Substituted service age is 15+, Private Process Server License requires bond and residency, Service time limit is 180 days, Certified mail allowed for specific defendants, Just Legal Solutions offers statewide service.',
  },
};

export default function OklahomaProcessServerLaws() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Oklahoma Process Server Laws', url: '/oklahoma-process-server-laws' }
  ];

  // Updated FAQ to reflect accurate Title 12 statutes
  const faqItems = [
    {
      question: "Who is authorized to serve process in Oklahoma?",
      answer: "Under 12 O.S. § 2004, process may be served by a sheriff, a deputy sheriff, or a person licensed as a private process server in Oklahoma. A person specially appointed by the court for a specific case may also serve process. The server must be at least 18 years old and not a party to the case."
    },
    {
      question: "What is the minimum age to accept substituted service at a residence?",
      answer: "In Oklahoma, you may leave copies of the summons and petition at the defendant's dwelling house or usual place of abode with a person who resides there and is at least 15 years of age. (12 O.S. § 2004(C)(1)(c)(1))."
    },
    {
      question: "Is there a 'three attempt' rule in Oklahoma law?",
      answer: "No. Oklahoma Statute 12 O.S. § 2004 does not explicitly require a specific number of attempts before utilizing substituted service at a residence (leaving with a resident 15+). However, if you are seeking 'Service by Publication' (a last resort), you must prove due diligence to the court, which often implies multiple failed attempts."
    },
    {
      question: "When is service by mail allowed?",
      answer: "Service by mail is permitted for certain defendants and usually requires Certified Mail, Return Receipt Requested. Delivery must be restricted to the addressee in many cases. Acceptance or refusal by a resident 15+ at the address is generally sufficient for service by mail."
    },
    {
      question: "How long do I have to serve a defendant in Oklahoma?",
      answer: "Generally, a plaintiff has 180 days from the date the petition is filed to serve the summons and petition. If service is not made within this time, the action may be dismissed without prejudice unless the plaintiff can show good cause."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="article"
          title="Oklahoma Process Server Laws & Requirements 2026"
          description="Comprehensive guide to Oklahoma civil procedure for process serving, including 12 O.S. § 2004, substituted service rules, and licensing."
          url="https://justlegalsolutions.org/oklahoma-process-server-laws"
          breadcrumbItems={breadcrumbItems}
          faqItems={faqItems}
        />

        {/* LocalBusiness Schema */}
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Just Legal Solutions",
          "description": "Licensed Oklahoma process server and legal support handling service of process under Title 12 O.S. guidelines.",
          "url": "https://justlegalsolutions.org",
          "telephone": "(539) 367-6832",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Glenpool",
            "addressRegion": "OK",
            "postalCode": "74033",
            "addressCountry": "US"
          },
          "areaServed": "Oklahoma",
          "priceRange": "$$"
        })}} />

        {/* Hero Section */}
        <div className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Oklahoma Process Server Laws
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl">
              A plain-English guide to <strong>12 O.S. § 2004</strong>, substituted service, and process server licensing requirements for 2026.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Legal Disclaimer */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-10 rounded-r-lg">
              <p className="text-sm text-yellow-800 font-medium">
                <strong>LEGAL DISCLAIMER:</strong> Just Legal Solutions provides this information for educational purposes only. This guide is not legal advice and does not create an attorney-client relationship. Oklahoma statutes change; always consult 12 O.S. § 2004 or a qualified attorney for specific legal guidance.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-800">
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Statutory Framework: Title 12</h2>
              <p>
                In Oklahoma, the rules for serving legal documents are primarily found in <strong>Title 12 of the Oklahoma Statutes (Civil Procedure)</strong>. The most critical section is <strong>§ 2004</strong>, which outlines how process must be served, who can serve it, and how proof of service must be filed.
              </p>
              <p>
                Unlike some states where rules vary wildly by city, these statutes are <strong>statewide laws</strong>. While individual counties (like Tulsa or Oklahoma County) handle the <em>administrative</em> licensing of servers, the laws governing <em>how</em> you serve a defendant remain consistent across the state.
              </p>

              <hr className="my-8 border-gray-200" />

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Can Serve Process?</h2>
              <p>
                Under Oklahoma law, service of process generally cannot be performed by a party to the lawsuit. It must be performed by one of the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>The Sheriff or Deputy Sheriff:</strong> Of the county where the service is to be made.</li>
                <li><strong>A Licensed Private Process Server:</strong> An individual licensed under <strong>12 O.S. § 158.1</strong>. Once licensed in their home county, a private process server has <strong>statewide authority</strong> to serve process throughout Oklahoma.</li>
                <li><strong>A Court-Appointed Person:</strong> A judge may specially appoint a specific person to serve process in a specific case.</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-md text-sm text-blue-800 mb-6">
                <strong>Note on Licensing:</strong> To be a licensed private process server, an applicant must be 18+, a resident of Oklahoma, of good moral character, and must post a $5,000 bond. They carry a license/ID card issued by the court clerk.
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Service on Individuals: Personal & Substituted</h2>
              <p>
                Serving an individual defendant is the most common task. Oklahoma law provides a hierarchy of methods.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. Personal Delivery</h3>
              <p>
                This is the gold standard. The server hands the Summons and Petition directly to the defendant. The defendant does not need to "accept" or touch the papers; if they refuse them, the server may leave them in their immediate proximity after identifying the nature of the documents.
              </p>
              {/*  */}

              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. Substituted Service (At the Dwelling)</h3>
              <p>
                If the defendant is not home, Oklahoma law allows "substituted service." This is frequently misunderstood. <strong>You do not need a court order</strong> to use this method if the criteria are met.
              </p>
              <p>Service is valid if copies are left at the defendant's <strong>dwelling house or usual place of abode</strong> with a person who:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Resides therein (lives at the house), AND</li>
                <li>Is <strong>15 years of age or older</strong>.</li>
              </ul>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                <h4 className="font-bold text-red-700 text-sm uppercase mb-2">Common Misconceptions</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-red-900">
                  <li><strong>Myth:</strong> You must try 3 times before using substituted service.<br/><strong>Fact:</strong> 12 O.S. § 2004 does not impose a "three attempt" requirement for leaving papers with a resident at the dwelling.</li>
                  <li><strong>Myth:</strong> The resident must be 18.<br/><strong>Fact:</strong> The statute explicitly sets the age at <strong>15 years or older</strong>.</li>
                  <li><strong>Myth:</strong> You must mail a copy after leaving it with a resident.<br/><strong>Fact:</strong> While some states require this, Oklahoma's general statute for residence service does <em>not</em> automatically require a follow-up mailing.</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. Service by Mail</h3>
              <p>
                Service by mail is permitted for certain defendants. It generally requires <strong>Certified Mail, Return Receipt Requested</strong>.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>The return receipt ("green card") must be signed.</li>
                <li>Acceptance by a person residing at the address who is 15+ usually constitutes valid service.</li>
                <li>Under <strong>12 O.S. § 2004.3</strong>, authorized commercial couriers (like FedEx or UPS) may be used in lieu of certified mail if they generate a signed receipt.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Service on Entities (LLCs & Corporations)</h2>
              <p>
                You cannot generally "sub-serve" an entity by leaving papers with a random employee. Service must be made on:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>An officer, director, or managing agent of the company.</li>
                <li>The <strong>Registered Agent</strong> designated with the Oklahoma Secretary of State.</li>
                <li>If the registered agent cannot be found, service may sometimes be made on the Secretary of State (requires specific legal steps).</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Time Limits: The 180-Day Rule</h2>
              <p>
                Service is not open-ended. Under <strong>12 O.S. § 2004(I)</strong>, service of the summons and petition must be made within <strong>180 days</strong> after the filing of the petition.
              </p>
              <p>
                If service is not made within this window, the court may dismiss the action without prejudice (meaning it can be refiled, but filing fees and time are lost) unless the plaintiff can show "good cause" for the delay.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Proof of Service</h2>
              <p>
                The job isn't done until the "Return of Service" or affidavit is filed.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>For Personal/Substituted Service:</strong> The server files an affidavit stating the name of the person served, the date, the place, and the method of service.</li>
                <li><strong>For Certified Mail:</strong> The return must include the sender's receipt and the signed return receipt (green card).</li>
              </ul>

              <div className="mt-12 p-8 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Need a Licensed Oklahoma Process Server?</h3>
                <p className="mb-6">
                  At <strong>Just Legal Solutions</strong>, we understand the nuances of Title 12. We ensure every serve is performed legally, whether it's personal delivery or substituted service on a co-resident, so your case moves forward without procedural hiccups.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                    Request Service
                  </Link>
                  <a href="tel:5393676832" className="inline-block bg-white text-blue-600 border border-blue-200 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition">
                    Call (539) 367-6832
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <AIVoiceSupremacy
        businessName="Just Legal Solutions"
        location="Oklahoma"
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Document Retrieval']}
        phone="(539) 367-6832"
        skipSchema={true}
      />
      <Footer />
    </div>
  );
}
