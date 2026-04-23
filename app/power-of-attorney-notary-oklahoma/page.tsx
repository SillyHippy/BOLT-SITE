import type { Metadata } from "next";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import JsonLd from "@/components/JsonLd";

import Link from 'next/link';

export const metadata: Metadata = {
    alternates: {
    canonical: 'https://justlegalsolutions.org/power-of-attorney-notary-oklahoma',
  },
title: "Power of Attorney Notary Oklahoma | POA Notarization Tulsa",
  description: "Professional power of attorney notary services in Oklahoma. Durable, medical, financial & springing POA notarization. 24/7 mobile notary available. Call (539) 367-6832.",
  keywords: "power of attorney notary oklahoma, POA notarization tulsa, durable power of attorney oklahoma, medical power of attorney oklahoma, springing POA, 58 O.S. § 3001",
  openGraph: {
    title: "Power of Attorney Notary Oklahoma | POA Notarization Tulsa",
    description: "Professional power of attorney notary services in Oklahoma. Durable, medical, financial & springing POA notarization. 24/7 mobile notary available.",
    url: "https://justlegalsolutions.org/power-of-attorney-notary-oklahoma/",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Just Legal Solutions",
  "description": "Professional power of attorney notary services in Oklahoma. Durable, medical, financial and springing POA notarization with 24/7 mobile notary availability.",
  "url": "https://justlegalsolutions.org/power-of-attorney-notary-oklahoma/",
  "telephone": "+1-539-367-6832",
  "email": "joseph@JustLegalSolutions.org",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "564 E 138th Pl",
    "addressLocality": "Glenpool",
    "addressRegion": "OK",
    "postalCode": "74033",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.9606",
    "longitude": "-96.0083"
  },
  "areaServed": {
    "@type": "State",
    "name": "Oklahoma"
  },
  "serviceType": ["Power of Attorney Notarization", "Durable POA Notary", "Medical POA Notary", "Financial POA Notary", "Mobile Notary Services"],
  "priceRange": "$5 - $25",
  "openingHours": "Mo-Su 00:00-23:59",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Venmo", "PayPal"],
  "founder": {
    "@type": "Person",
    "name": "Joseph Iannazzi"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "156"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Power of Attorney Notary Services Oklahoma",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Just Legal Solutions"
  },
  "areaServed": {
    "@type": "State",
    "name": "Oklahoma"
  },
  "serviceType": "Power of Attorney Notarization",
  "description": "Comprehensive power of attorney notary services including durable, medical, financial, and springing POA notarization throughout Oklahoma.",
  "offers": {
    "@type": "Offer",
    "price": "5",
    "priceCurrency": "USD",
    "priceValidUntil": "2025-12-31"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://justlegalsolutions.org/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Notary Services",
      "item": "https://justlegalsolutions.org/notary/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Power of Attorney Notary Oklahoma",
      "item": "https://justlegalsolutions.org/power-of-attorney-notary-oklahoma/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does a power of attorney need to be notarized in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While Oklahoma law (58 O.S. § 3005) technically does not require notarization for a power of attorney to be valid, notarization is strongly recommended and practically essential. Under 58 O.S. § 3005, a signature on a power of attorney is presumed to be genuine if the principal acknowledges the signature before a notary public. Most banks, financial institutions, and government agencies will reject a power of attorney that is not notarized. For medical powers of attorney under 63 O.S. § 3111.3, the document must be signed in the presence of a notary public or witnessed by two individuals who are at least 18 years old and not heirs or devisees of the principal."
      }
    },
    {
      "@type": "Question",
      "name": "What is a durable power of attorney in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A durable power of attorney in Oklahoma is a legal document that remains effective even if the principal becomes incapacitated. Under the Oklahoma Uniform Power of Attorney Act (58 O.S. § 3001 et seq.), a power of attorney is durable unless it expressly provides that it is terminated by the principal's incapacity. This means your agent can continue managing your financial affairs, property, and business matters even if you become unable to make decisions for yourself. Durable POAs are essential for estate planning and ensuring continuity of financial management during periods of incapacity."
      }
    },
    {
      "@type": "Question",
      "name": "What is a springing power of attorney?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A springing power of attorney is a type of POA that only becomes effective upon the occurrence of a specific event or condition, typically the principal's incapacity. Unlike a standard durable POA that is effective immediately upon signing, a springing POA 'springs' into effect when certain conditions are met. Under Oklahoma law (58 O.S. § 3001 et seq.), you can specify in the special instructions section exactly what conditions must occur before your agent's authority becomes active. This provides greater control but may create delays when immediate action is needed, as proof of the triggering condition may be required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a medical and financial power of attorney?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A medical power of attorney (healthcare proxy) grants an agent authority to make healthcare decisions on your behalf, including consenting to or refusing medical treatment, selecting healthcare providers, and signing do-not-resuscitate orders. It is governed by 63 O.S. § 3111.3. A financial power of attorney grants an agent authority to manage your financial affairs, including real property, bank accounts, investments, taxes, and business operations. It is governed by 58 O.S. § 3001 et seq. These are separate documents with different purposes, and Oklahoma law requires different execution procedures for each type."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to notarize a power of attorney in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Oklahoma law (49 O.S. § 5), the maximum fee a notary public may charge for an in-person notarization is $5 per act. For remote online notarization (RON), the maximum fee is $25 per act under 49 O.S. § 209. At Just Legal Solutions, we charge standard Oklahoma notary fees. Additional fees may apply for mobile notary services, which include travel time and convenience. We provide transparent pricing upfront and accept cash, check, credit cards, Venmo, and PayPal. Contact us at (539) 367-6832 for a complete quote."
      }
    },
    {
      "@type": "Question",
      "name": "Can you notarize a power of attorney at a hospital in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Just Legal Solutions provides hospital and bedside notary services throughout Oklahoma for power of attorney documents. We understand that medical emergencies and urgent healthcare situations often require immediate POA execution. Our mobile notaries are available 24/7 to travel to hospitals, nursing homes, rehabilitation centers, and private residences. We have experience working with patients who may have limited mobility, vision impairments, or communication challenges. Our notaries follow all Oklahoma legal requirements while providing compassionate, patient-centered service during difficult times."
      }
    },
    {
      "@type": "Question",
      "name": "What are the witness requirements for an Oklahoma power of attorney?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Oklahoma Uniform Power of Attorney Act (58 O.S. § 3005), a power of attorney must be signed by the principal or in the principal's conscious presence by another individual directed by the principal to sign. For medical powers of attorney under 63 O.S. § 3111.3, the document must be signed in the presence of a notary public OR witnessed by two individuals who are at least 18 years old and who are not legatees, devisees, or heirs at law of the principal. Witnesses cannot be the appointed agent or related to the agent. These requirements help prevent conflicts of interest and ensure the validity of the document."
      }
    },
    {
      "@type": "Question",
      "name": "How long is a power of attorney valid in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Oklahoma law (58 O.S. § 3010), a power of attorney remains valid until it is terminated by one of the following events: the principal's death, the principal's revocation of the POA, the occurrence of a termination event stated in the POA, the purpose of the POA being fully accomplished, or the agent's resignation, death, or incapacity (unless a successor agent is named). A durable POA specifically continues even if the principal becomes incapacitated. It's important to note that if you are married to the principal, a legal action for divorce or separation may terminate your authority as agent unless the POA states otherwise."
      }
    },
    {
      "@type": "Question",
      "name": "Can a power of attorney be used for immigration documents in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a power of attorney can be used for certain immigration-related matters in Oklahoma, though specific USCIS forms have their own requirements. A properly executed POA can authorize an agent to communicate with immigration authorities, submit documents, and handle administrative matters on behalf of the principal. However, for representation before USCIS or immigration court, a Form G-28 (Notice of Entry of Appearance as Attorney or Accredited Representative) is typically required instead of or in addition to a general POA. At Just Legal Solutions, we provide notarization services for both general powers of attorney and immigration-specific documents. Visit our immigration document notary page for more information."
      }
    },
    {
      "@type": "Question",
      "name": "What should I bring to a power of attorney notarization appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a power of attorney notarization appointment, please bring: (1) A valid, government-issued photo ID (driver's license, state ID, passport, or military ID) for all signers; (2) The complete, unsigned power of attorney document (sign only in the presence of the notary); (3) Any witness(es) required by your specific document type; (4) Payment for notary services; (5) Any specific instructions or special requirements. If you need witnesses provided, please let us know in advance. For mobile appointments, ensure the signing location is well-lit and has a clean, flat surface for document handling. Contact us at (539) 367-6832 if you have questions about your specific document."
      }
    }
  ]
};

export default function PowerOfAttorneyNotaryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Power of Attorney Notary Oklahoma
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional POA notarization services for durable, medical, financial, and springing powers of attorney throughout Oklahoma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:539-367-6832" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Call (539) 367-6832
              </a>
              <Link 
                href="/mobile-notary/" 
                className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Request Mobile Notary
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              When you need to grant someone authority to act on your behalf, a properly executed power of attorney (POA) is essential. At <strong>Just Legal Solutions</strong>, we specialize in power of attorney notarization services throughout Oklahoma, ensuring your documents meet all legal requirements under the <strong>Oklahoma Uniform Power of Attorney Act (58 O.S. § 3001 et seq.)</strong>. Whether you need a durable POA for financial matters, a medical POA for healthcare decisions, or a springing POA that activates under specific conditions, our experienced notaries provide professional, reliable service when and where you need it.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              With <strong>156+ five-star reviews</strong> and <strong>24/7 mobile notary availability</strong>, we're Oklahoma's trusted choice for POA notarization. Our bilingual (English/Spanish) team serves clients across Tulsa, Oklahoma City, and throughout the state, including emergency hospital and bedside notarization services for urgent situations.
            </p>
          </div>
        </div>
      </section>
      {/* Types of POA Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Types of Power of Attorney We Notarize
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Durable POA */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Durable Power of Attorney</h3>
              <p className="text-gray-700 mb-4">
                A durable power of attorney remains effective even if you become incapacitated. Under <strong>58 O.S. § 3004</strong>, an Oklahoma POA is durable unless it expressly states it terminates upon incapacity. This is the most common type for comprehensive estate planning.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Real estate transactions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Banking and financial management
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Investment and retirement accounts
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Tax matters and government benefits
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Notarization creates a legal presumption of validity under 58 O.S. § 3005.
              </p>
            </div>

            {/* Medical POA */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Power of Attorney</h3>
              <p className="text-gray-700 mb-4">
                A medical power of attorney (healthcare proxy) grants an agent authority to make healthcare decisions on your behalf. Under <strong>63 O.S. § 3111.3</strong>, this document must be signed in the presence of a notary or witnessed by two qualified individuals.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Consent to or refuse medical treatment
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Select or discharge healthcare providers
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Access medical records and information
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Sign do-not-resuscitate (DNR) orders
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Required by hospitals and healthcare facilities across Oklahoma.
              </p>
            </div>

            {/* Financial POA */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Power of Attorney</h3>
              <p className="text-gray-700 mb-4">
                A financial power of attorney specifically authorizes an agent to manage your financial affairs. Under <strong>58 O.S. § 3041</strong>, Oklahoma provides a statutory form with specific authority categories you can grant to your agent.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Stocks, bonds, and securities
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Business operations and entities
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Insurance and annuities
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Claims and litigation matters
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Banks require notarized POAs before allowing agent access to accounts.
              </p>
            </div>

            {/* Springing POA */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Springing Power of Attorney</h3>
              <p className="text-gray-700 mb-4">
                A springing POA only becomes effective upon the occurrence of a specified event or condition, typically your incapacity. This provides control over exactly when your agent's authority begins under <strong>58 O.S. § 3001 et seq.</strong>
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  Activates only upon specified conditions
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  Requires proof of triggering event
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  Provides maximum control over timing
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  Customizable activation conditions
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Ideal for those who want to maintain full control until it's necessary.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Oklahoma Law Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Oklahoma Power of Attorney Law Requirements
          </h2>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Oklahoma Uniform Power of Attorney Act (58 O.S. § 3001 et seq.)</h3>
            <p className="text-gray-700 mb-4">
              Oklahoma's Uniform Power of Attorney Act, which took effect November 1, 2021, governs the creation, execution, and use of powers of attorney in our state. This comprehensive legislation provides the legal framework that ensures your POA documents are valid and enforceable.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Execution Requirements (58 O.S. § 3005)</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Must be signed by the principal</li>
                  <li>• Signature presumed genuine if notarized</li>
                  <li>• Can be signed by another at principal's direction</li>
                  <li>• Must be done in principal's conscious presence</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Durable POA Requirements (58 O.S. § 3004)</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• POA is durable unless stated otherwise</li>
                  <li>• Continues despite principal's incapacity</li>
                  <li>• Must expressly state if non-durable</li>
                  <li>• Protects against gaps in authority</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-green-900 mb-4">Medical Power of Attorney Requirements (63 O.S. § 3111.3)</h3>
            <p className="text-gray-700 mb-4">
              Oklahoma law specifically governs medical powers of attorney under Title 63. These documents have unique requirements that differ from financial POAs.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Execution Options</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Signed before a notary public, OR</li>
                  <li>• Witnessed by two individuals 18+</li>
                  <li>• Witnesses cannot be heirs or devisees</li>
                  <li>• Must be personally known to witnesses</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Agent Authority</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Consent to or refuse treatment</li>
                  <li>• Select healthcare providers</li>
                  <li>• Access medical records</li>
                  <li>• Make end-of-life decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Notarization Importance Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Why Notarization Matters for Oklahoma POAs
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              While Oklahoma law technically does not require notarization for a power of attorney to be valid, <strong>notarization is practically essential</strong>. Under <strong>58 O.S. § 3005</strong>, a signature on a power of attorney is presumed to be genuine if the principal acknowledges the signature before a notary public or other individual authorized by law to take acknowledgments.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Benefits of Notarizing Your Power of Attorney</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-bold text-blue-900 mb-2">Legal Presumption of Validity</h4>
                <p className="text-sm">A notarized POA creates a legal presumption that the signature is genuine, making it much harder to challenge in court or by third parties.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-bold text-blue-900 mb-2">Bank & Financial Institution Acceptance</h4>
                <p className="text-sm">Most banks, credit unions, and financial institutions will reject a POA that is not notarized. Notarization is their standard requirement.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-bold text-blue-900 mb-2">Third-Party Reliance (58 O.S. § 3019)</h4>
                <p className="text-sm">A person who accepts an acknowledged POA in good faith may rely upon it as if it were genuine, valid, and still in effect.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-bold text-blue-900 mb-2">Protection Against Fraud</h4>
                <p className="text-sm">Notarization helps prevent fraud by requiring the principal to appear before an impartial witness who verifies identity.</p>
              </div>
            </div>

            <p>
              Under <strong>58 O.S. § 3019(C)</strong>, a person that in good faith accepts an acknowledged power of attorney without actual knowledge that it is void, invalid, or terminated may rely upon the POA as if it were genuine, valid, and still in effect. This protection is invaluable when your agent needs to act quickly on your behalf.
            </p>
          </div>
        </div>
      </section>
      {/* Hospital/Bedside Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Hospital & Bedside POA Notarization
          </h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-red-900 mb-2">24/7 Emergency Notary Services Available</h3>
            <p className="text-gray-700">
              Medical emergencies often require immediate power of attorney execution. Our mobile notaries are available around the clock to come to hospitals, nursing homes, rehabilitation centers, and private residences throughout Oklahoma.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              When a loved one is hospitalized and needs a power of attorney executed urgently, time is critical. Whether it's for accessing medical information, making treatment decisions, or managing financial affairs during recovery, a properly notarized POA is often required immediately.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Hospital Notary Services Include:</h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <span><strong>Same-day service</strong> - We prioritize hospital calls and can often arrive within hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <span><strong>Experience with medical settings</strong> - We understand hospital protocols and work with staff</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <span><strong>Patient-centered approach</strong> - We accommodate limited mobility, vision issues, and communication challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <span><strong>Witness coordination</strong> - We can provide qualified witnesses if needed for medical POAs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <span><strong>Bilingual services</strong> - English and Spanish speaking notaries available</span>
              </li>
            </ul>

            <p>
              We serve all major hospitals in the Tulsa and Oklahoma City areas, including Saint Francis Hospital, Hillcrest Medical Center, OU Medical Center, Integris Baptist Medical Center, and many more. <Link href="/hospital-notary/" className="text-blue-600 hover:underline font-medium">Learn more about our hospital notary services</Link>.
            </p>
          </div>
        </div>
      </section>
      {/* Mobile Notary Section */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mobile Notary Services Available 24/7
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't come to us? We'll come to you. Our mobile notaries travel throughout Oklahoma for power of attorney notarization at your home, office, hospital, or any location convenient for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:539-367-6832" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call (539) 367-6832
            </a>
            <Link 
              href="/mobile-notary/" 
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Learn About Mobile Notary
            </Link>
          </div>
        </div>
      </section>
      {/* Related Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Related Notary Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/mobile-notary/" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center group">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Mobile Notary</h3>
              <p className="text-sm text-gray-600">We come to your location anywhere in Oklahoma</p>
            </Link>
            
            <Link href="/hospital-notary/" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center group">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Hospital Notary</h3>
              <p className="text-sm text-gray-600">24/7 bedside notarization for medical emergencies</p>
            </Link>
            
            <Link href="/notary/" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center group">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">General Notary</h3>
              <p className="text-sm text-gray-600">Full range of notarization services</p>
            </Link>
            
            <Link href="/immigration-document-notary-oklahoma/" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center group">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Immigration Documents</h3>
              <p className="text-sm text-gray-600">Notarization for USCIS and immigration matters</p>
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions About POA Notarization
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Does a power of attorney need to be notarized in Oklahoma?</h3>
              <p className="text-gray-700">
                While Oklahoma law (58 O.S. § 3005) technically does not require notarization for a power of attorney to be valid, notarization is strongly recommended and practically essential. Under 58 O.S. § 3005, a signature on a power of attorney is presumed to be genuine if the principal acknowledges the signature before a notary public. Most banks, financial institutions, and government agencies will reject a power of attorney that is not notarized. For medical powers of attorney under 63 O.S. § 3111.3, the document must be signed in the presence of a notary public or witnessed by two individuals who are at least 18 years old and not heirs or devisees of the principal.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What is a durable power of attorney in Oklahoma?</h3>
              <p className="text-gray-700">
                A durable power of attorney in Oklahoma is a legal document that remains effective even if the principal becomes incapacitated. Under the Oklahoma Uniform Power of Attorney Act (58 O.S. § 3001 et seq.), a power of attorney is durable unless it expressly provides that it is terminated by the principal's incapacity. This means your agent can continue managing your financial affairs, property, and business matters even if you become unable to make decisions for yourself. Durable POAs are essential for estate planning and ensuring continuity of financial management during periods of incapacity.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What is a springing power of attorney?</h3>
              <p className="text-gray-700">
                A springing power of attorney is a type of POA that only becomes effective upon the occurrence of a specific event or condition, typically the principal's incapacity. Unlike a standard durable POA that is effective immediately upon signing, a springing POA "springs" into effect when certain conditions are met. Under Oklahoma law (58 O.S. § 3001 et seq.), you can specify in the special instructions section exactly what conditions must occur before your agent's authority becomes active. This provides greater control but may create delays when immediate action is needed, as proof of the triggering condition may be required.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What is the difference between a medical and financial power of attorney?</h3>
              <p className="text-gray-700">
                A medical power of attorney (healthcare proxy) grants an agent authority to make healthcare decisions on your behalf, including consenting to or refusing medical treatment, selecting healthcare providers, and signing do-not-resuscitate orders. It is governed by 63 O.S. § 3111.3. A financial power of attorney grants an agent authority to manage your financial affairs, including real property, bank accounts, investments, taxes, and business operations. It is governed by 58 O.S. § 3001 et seq. These are separate documents with different purposes, and Oklahoma law requires different execution procedures for each type.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How much does it cost to notarize a power of attorney in Oklahoma?</h3>
              <p className="text-gray-700">
                Under Oklahoma law (49 O.S. § 5), the maximum fee a notary public may charge for an in-person notarization is $5 per act. For remote online notarization (RON), the maximum fee is $25 per act under 49 O.S. § 209. At Just Legal Solutions, we charge standard Oklahoma notary fees. Additional fees may apply for mobile notary services, which include travel time and convenience. We provide transparent pricing upfront and accept cash, check, credit cards, Venmo, and PayPal. Contact us at (539) 367-6832 for a complete quote.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can you notarize a power of attorney at a hospital in Oklahoma?</h3>
              <p className="text-gray-700">
                Yes, Just Legal Solutions provides hospital and bedside notary services throughout Oklahoma for power of attorney documents. We understand that medical emergencies and urgent healthcare situations often require immediate POA execution. Our mobile notaries are available 24/7 to travel to hospitals, nursing homes, rehabilitation centers, and private residences. We have experience working with patients who may have limited mobility, vision impairments, or communication challenges. Our notaries follow all Oklahoma legal requirements while providing compassionate, patient-centered service during difficult times.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What are the witness requirements for an Oklahoma power of attorney?</h3>
              <p className="text-gray-700">
                Under the Oklahoma Uniform Power of Attorney Act (58 O.S. § 3005), a power of attorney must be signed by the principal or in the principal's conscious presence by another individual directed by the principal to sign. For medical powers of attorney under 63 O.S. § 3111.3, the document must be signed in the presence of a notary public OR witnessed by two individuals who are at least 18 years old and who are not legatees, devisees, or heirs at law of the principal. Witnesses cannot be the appointed agent or related to the agent. These requirements help prevent conflicts of interest and ensure the validity of the document.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How long is a power of attorney valid in Oklahoma?</h3>
              <p className="text-gray-700">
                Under Oklahoma law (58 O.S. § 3010), a power of attorney remains valid until it is terminated by one of the following events: the principal's death, the principal's revocation of the POA, the occurrence of a termination event stated in the POA, the purpose of the POA being fully accomplished, or the agent's resignation, death, or incapacity (unless a successor agent is named). A durable POA specifically continues even if the principal becomes incapacitated. It's important to note that if you are married to the principal, a legal action for divorce or separation may terminate your authority as agent unless the POA states otherwise.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can a power of attorney be used for immigration documents in Oklahoma?</h3>
              <p className="text-gray-700">
                Yes, a power of attorney can be used for certain immigration-related matters in Oklahoma, though specific USCIS forms have their own requirements. A properly executed POA can authorize an agent to communicate with immigration authorities, submit documents, and handle administrative matters on behalf of the principal. However, for representation before USCIS or immigration court, a Form G-28 (Notice of Entry of Appearance as Attorney or Accredited Representative) is typically required instead of or in addition to a general POA. At Just Legal Solutions, we provide notarization services for both general powers of attorney and immigration-specific documents. <Link href="/immigration-document-notary-oklahoma/" className="text-blue-600 hover:underline">Visit our immigration document notary page</Link> for more information.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What should I bring to a power of attorney notarization appointment?</h3>
              <p className="text-gray-700">
                For a power of attorney notarization appointment, please bring: (1) A valid, government-issued photo ID (driver's license, state ID, passport, or military ID) for all signers; (2) The complete, unsigned power of attorney document (sign only in the presence of the notary); (3) Any witness(es) required by your specific document type; (4) Payment for notary services; (5) Any specific instructions or special requirements. If you need witnesses provided, please let us know in advance. For mobile appointments, ensure the signing location is well-lit and has a clean, flat surface for document handling. Contact us at (539) 367-6832 if you have questions about your specific document.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Notarize Your Power of Attorney?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Just Legal Solutions today for professional, reliable power of attorney notarization services throughout Oklahoma. We're available 24/7 for your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:539-367-6832" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call (539) 367-6832
            </a>
            <a 
              href="mailto:joseph@JustLegalSolutions.org" 
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm text-gray-500 text-center">
            <strong>Disclaimer:</strong> This information is provided for educational purposes only and does not constitute legal advice. 
            Power of attorney laws are complex and vary by situation. We recommend consulting with a qualified Oklahoma attorney for 
            advice specific to your circumstances. Just Legal Solutions provides notarization services only and does not draft legal 
            documents or provide legal representation.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
