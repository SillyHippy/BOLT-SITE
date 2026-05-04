import Link from 'next/link';
import React from 'react';
import { ChevronRight, FileText, Shield, UserCheck, Clock, AlertTriangle, CheckCircle, BookOpen, Scale } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import JsonLd from '@/components/JsonLd';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata = {
  title: 'Power of Attorney Guide Oklahoma — Complete 2026 POA Resource',
  description: 'Complete guide to Power of Attorney in Oklahoma. Durable, medical, financial, springing & limited POA types, 58 O.S. § 3001, notarization.',
  keywords: 'how to get power of attorney oklahoma, POA requirements oklahoma, 58 O.S. § 3001, durable power of attorney oklahoma, medical power of attorney oklahoma, financial power of attorney, springing power of attorney, limited power of attorney',
  'ai-summary': 'This comprehensive guide explains Power of Attorney in Oklahoma under the Uniform Power of Attorney Act (58 O.S. § 3001 et seq.). It covers five main POA types: Durable, Medical, Financial, Springing, and Limited, with detailed notarization requirements, creation steps, revocation procedures, and common mistakes to avoid. Oklahoma requires notarization for all POA documents, with specific witnessing requirements for medical POAs.',
  'ai-key-facts': 'Oklahoma adopted the Uniform Power of Attorney Act in 2021 (58 O.S. § 3001-58 O.S. § 3046); Notarization is mandatory for all POA documents in Oklahoma; Durable POA remains effective after incapacity; Medical POA requires either notarization OR two witnesses; Springing POA activates only upon specified conditions; Revocation must be in writing and delivered to all agents; Traditional notary fees are $5 per signature; Mobile notary services available 24/7; POA does NOT allow agents to make or change a will; Agent duties include fiduciary responsibility and record-keeping',
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/power-of-attorney-guide-oklahoma'
  },
  openGraph: {
    title: 'Power of Attorney Guide Oklahoma | Complete 2025 POA Resource',
    description: 'Complete guide to Power of Attorney in Oklahoma. Learn about durable, medical, financial, springing & limited POA types, 58 O.S. § 3001 requirements, notarization & more.',
    url: 'https://justlegalsolutions.org/blog/power-of-attorney-guide-oklahoma',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
    modifiedTime: '2025-01-15T00:00:00Z',
    authors: ['Joseph Iannazzi']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': 'https://justlegalsolutions.org/blog/power-of-attorney-guide-oklahoma/#blogposting',
      headline: 'Power of Attorney Guide Oklahoma: Complete 2025 POA Resource',
      description: 'Complete guide to Power of Attorney in Oklahoma. Learn about durable, medical, financial, springing & limited POA types, 58 O.S. § 3001 requirements, notarization & more.',
      url: 'https://justlegalsolutions.org/blog/power-of-attorney-guide-oklahoma/',
      datePublished: '2025-01-15T00:00:00Z',
      dateModified: '2025-01-15T00:00:00Z',
      author: {
        '@type': 'Person',
        name: 'Joseph Iannazzi'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Just Legal Solutions',
        logo: {
          '@type': 'ImageObject',
          url: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://justlegalsolutions.org/blog/power-of-attorney-guide-oklahoma/'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://justlegalsolutions.org/blog/power-of-attorney-guide-oklahoma/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I get power of attorney in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To get power of attorney in Oklahoma, you must: 1) Choose your agent carefully, 2) Select the appropriate POA type, 3) Complete the statutory form or have one drafted, 4) Sign in the presence of a notary public, and 5) Provide copies to your agent and relevant institutions. Under 58 O.S. § 3001, all POA documents must be notarized to be valid in Oklahoma.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does a power of attorney need to be notarized in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all power of attorney documents in Oklahoma must be notarized to be legally valid. Under the Oklahoma Uniform Power of Attorney Act (58 O.S. § 3001 et seq.), notarization serves as authentication of the principal\'s signature and helps prevent fraud. Medical POAs may alternatively be witnessed by two adults instead of notarization.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between durable and springing power of attorney?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A durable power of attorney takes effect immediately upon signing and remains in effect even if the principal becomes incapacitated. A springing power of attorney only becomes effective when a specific condition occurs, typically when the principal becomes incapacitated, as certified by one or more physicians. The springing POA "springs" into action upon that triggering event.'
          }
        },
        {
          '@type': 'Question',
          name: 'How much does a power of attorney cost in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The cost of creating a power of attorney in Oklahoma varies: DIY forms are $0-50, attorney-drafted POAs range from $200-500+, and notarization costs $5 per signature for traditional notary services or $25 for remote online notarization. Mobile notary services may include additional travel fees of $25-50 depending on location.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can a power of attorney be revoked in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, a power of attorney can be revoked at any time by the principal as long as they are mentally competent. Under 58 O.S. § 3010, revocation must be in writing and delivered to the agent and any third parties who have relied on the POA. The principal should also retrieve all copies of the original POA document from the agent.'
          }
        },
        {
          '@type': 'Question',
          name: 'What powers cannot be granted through a power of attorney in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Oklahoma law, an agent cannot: make or change a will for the principal, vote in public elections on behalf of the principal, create or revoke a trust (unless specifically authorized), or perform personal services contracts that are unique to the principal. Additionally, an agent cannot make healthcare decisions unless granted specific authority in a medical POA.'
          }
        },
        {
          '@type': 'Question',
          name: 'How long does a power of attorney last in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A power of attorney in Oklahoma lasts until: 1) The principal revokes it (while competent), 2) The principal dies, 3) The agent resigns or becomes unable to serve, 4) A specific termination date stated in the document is reached, or 5) For non-durable POAs, when the principal becomes incapacitated. Durable POAs remain effective through incapacity.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the Oklahoma Uniform Power of Attorney Act?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Oklahoma Uniform Power of Attorney Act, codified in Title 58 O.S. § 3001 through § 3046, is the comprehensive legal framework governing powers of attorney in Oklahoma. Adopted in 2021, it standardizes POA requirements, provides statutory forms, defines agent duties and liabilities, and establishes protections for third parties who accept POA documents in good faith.'
          }
        }
      ]
    }
  ]
};

export default function PowerOfAttorneyGuideOklahoma() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />
      <Navbar />
      <article className="prose prose-lg prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <header className="mb-10 not-prose">
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
            <span className="bg-blue-100 px-3 py-1 rounded-full">Legal Guide</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Oklahoma Law</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Power of Attorney Guide Oklahoma: Complete 2025 POA Resource
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span>By Joseph Iannazzi</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Published: January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>15 min read</span>
            </div>
          </div>
        </header>

        {/* Quick Answer Box */}
        <div className="not-prose bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Quick Answer: How to Get Power of Attorney in Oklahoma
          </h2>
          <p className="text-blue-800 mb-4">
            To create a valid power of attorney in Oklahoma, you must: (1) Choose a trusted agent,
            (2) Select the appropriate POA type for your needs, (3) Complete the statutory form or
            have one drafted by an attorney, (4) Sign in the presence of a notary public, and
            (5) Distribute copies to your agent and relevant institutions. All POA documents in
            Oklahoma require notarization under <strong>58 O.S. § 3001</strong>.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Durable POA</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Medical POA</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Financial POA</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Springing POA</span>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <p className="lead text-xl text-gray-700 leading-relaxed">
            A <strong>Power of Attorney (POA)</strong> is a legal document that grants one person
            (the "agent" or "attorney-in-fact") the authority to act on behalf of another person
            (the "principal") in specified legal, financial, or medical matters. In Oklahoma,
            powers of attorney are governed by the <strong>Uniform Power of Attorney Act</strong>,
            codified in <strong>Title 58 O.S. § 3001 et seq.</strong>, which was adopted in 2021
            to modernize and standardize POA law across the state.
          </p>
          <p>
            Whether you are planning for potential incapacity, preparing for extended travel, or
            simply need someone to handle specific transactions on your behalf, understanding how
            to properly create and execute a power of attorney is essential. This comprehensive
            guide covers everything Oklahoma residents need to know about POA documents, including
            the five main types, statutory requirements, notarization procedures, and common pitfalls
            to avoid.
          </p>
        </section>

        {/* Oklahoma Uniform Power of Attorney Act */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Scale className="w-7 h-7 text-blue-600" />
            The Oklahoma Uniform Power of Attorney Act
          </h2>
          <p>
            In 2021, Oklahoma adopted the Uniform Power of Attorney Act (UPOAA), bringing the state's
            POA law in line with modern standards and the majority of other states. This comprehensive
            legislation, found in <strong>58 O.S. § 3001 through 58 O.S. § 3046</strong>, establishes
            clear rules for creating, executing, using, and revoking powers of attorney.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Provisions of 58 O.S. § 3001</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span><strong>Standardized Forms:</strong> The Act provides statutory forms that, when properly completed, must be accepted by third parties</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span><strong>Agent Duties:</strong> Clear fiduciary duties including acting in good faith, avoiding conflicts of interest, and maintaining records</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span><strong>Third-Party Protections:</strong> Safe harbor provisions for parties who accept POA documents in good faith</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span><strong>Notarization Requirement:</strong> Mandatory notarization for all POA documents to prevent fraud</span>
            </li>
          </ul>
        </section>

        {/* Types of Power of Attorney */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7 text-blue-600" />
            Five Types of Power of Attorney in Oklahoma
          </h2>
          <p>
            Oklahoma law recognizes several distinct types of powers of attorney, each designed for
            specific purposes and situations. Understanding the differences is crucial for selecting
            the right document for your needs.
          </p>

          {/* Durable POA */}
          <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              1. Durable Power of Attorney
            </h3>
            <p className="text-gray-700 mb-4">
              A <strong>durable power of attorney</strong> is the most common type used for estate
              planning in Oklahoma. Under <strong>58 O.S. § 3004</strong>, a durable POA contains
              specific language stating that it remains in effect even if the principal becomes
              incapacitated or disabled. This durability feature makes it essential for long-term
              planning.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Best Used For:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Estate planning and asset management</li>
                  <li>• Banking and financial transactions</li>
                  <li>• Real estate matters</li>
                  <li>• Tax filing and government benefits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Effective immediately upon signing</li>
                  <li>• Survives principal's incapacity</li>
                  <li>• Terminates upon principal's death</li>
                  <li>• Requires notarization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Medical POA */}
          <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-green-600" />
              2. Medical Power of Attorney (Healthcare Proxy)
            </h3>
            <p className="text-gray-700 mb-4">
              A <strong>medical power of attorney</strong>, also known as a healthcare proxy or
              advance directive, authorizes an agent to make healthcare decisions on the principal's
              behalf when they are unable to do so. In Oklahoma, medical POAs are governed by
              <strong>63 O.S. § 3101 et seq.</strong> (Oklahoma Advance Directive Act).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Healthcare Decisions Include:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Consenting to or refusing medical treatment</li>
                  <li>• Selecting healthcare providers and facilities</li>
                  <li>• Accessing medical records</li>
                  <li>• Making end-of-life decisions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Execution Requirements:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Signed by principal</li>
                  <li>• <strong>Notarized OR witnessed by two adults</strong></li>
                  <li>• Witnesses cannot be the agent</li>
                  <li>• One witness cannot be related to principal</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financial POA */}
          <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600" />
              3. Financial Power of Attorney
            </h3>
            <p className="text-gray-700 mb-4">
              A <strong>financial power of attorney</strong> grants an agent authority over the
              principal's financial affairs. This can be broad, covering all financial matters, or
              limited to specific transactions. Under <strong>58 O.S. § 3001</strong>, the principal
              must specifically initial each power they wish to grant from the statutory list.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Financial Powers May Include:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Banking and investment accounts</li>
                  <li>• Real estate transactions</li>
                  <li>• Tax matters and filings</li>
                  <li>• Retirement benefits</li>
                  <li>• Insurance and annuities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Important Limitations:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cannot make or change a will</li>
                  <li>• Cannot vote in elections</li>
                  <li>• Cannot create/revoke trusts (unless specified)</li>
                  <li>• Must act in principal's best interest</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Springing POA */}
          <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" />
              4. Springing Power of Attorney
            </h3>
            <p className="text-gray-700 mb-4">
              A <strong>springing power of attorney</strong> "springs" into effect only when a
              specific condition or event occurs, typically the principal's incapacity as certified
              by one or more physicians. This type provides peace of mind for principals who want
              to maintain control until they actually need assistance.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Advantages:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Principal retains control until incapacity</li>
                  <li>• Clear trigger mechanism</li>
                  <li>• Reduces concerns about premature agent action</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Considerations:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Requires physician certification</li>
                  <li>• May delay needed action</li>
                  <li>• Third parties may hesitate to accept</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limited POA */}
          <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              5. Limited (Special) Power of Attorney
            </h3>
            <p className="text-gray-700 mb-4">
              A <strong>limited or special power of attorney</strong> grants authority for a specific
              purpose or transaction, such as selling a particular property, handling a single legal
              matter, or managing affairs during a temporary absence. Once the specified task is
              complete, the POA automatically terminates.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Common Uses:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real estate closings</li>
                  <li>• Vehicle title transfers</li>
                  <li>• Business transactions</li>
                  <li>• Legal proceedings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Characteristics:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Narrow, specific scope</li>
                  <li>• Automatic termination</li>
                  <li>• Lower risk of abuse</li>
                  <li>• Ideal for temporary needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Creation Process */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <CheckCircle className="w-7 h-7 text-blue-600" />
            Step-by-Step: Creating a Power of Attorney in Oklahoma
          </h2>
          <p>
            Creating a valid power of attorney in Oklahoma requires careful attention to legal
            requirements. Follow these steps to ensure your POA document is properly executed
            and legally binding.
          </p>

          <div className="space-y-6 mt-6">
            <div className="flex gap-4 not-prose">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Choose Your Agent Carefully</h3>
                <p className="text-gray-700">
                  Select someone you trust implicitly. Your agent will have significant power over
                  your affairs, so consider their integrity, financial responsibility, and ability
                  to handle the responsibilities. You may also name successor agents in case your
                  primary agent cannot serve.
                </p>
              </div>
            </div>

            <div className="flex gap-4 not-prose">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Determine the Type of POA</h3>
                <p className="text-gray-700">
                  Based on your needs, select the appropriate type: durable for long-term planning,
                  medical for healthcare decisions, financial for money matters, springing for
                  conditional activation, or limited for specific transactions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 not-prose">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Complete the Document</h3>
                <p className="text-gray-700">
                  Use Oklahoma's statutory form (available from the Oklahoma Bar Association) or
                  have an attorney draft a custom document. Be specific about the powers you are
                  granting. Under 58 O.S. § 3001, you must initial each specific authority you
                  wish to grant your agent.
                </p>
              </div>
            </div>

            <div className="flex gap-4 not-prose">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Sign Before a Notary Public</h3>
                <p className="text-gray-700">
                  Oklahoma law requires all power of attorney documents to be notarized. The
                  principal must sign in the presence of a commissioned notary public who will
                  verify identity and witness the signature. For medical POAs, you may use two
                  witnesses instead of notarization.
                </p>
              </div>
            </div>

            <div className="flex gap-4 not-prose">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Distribute Copies</h3>
                <p className="text-gray-700">
                  Provide copies to your agent, successor agents, and any financial institutions
                  or healthcare providers that may need to rely on the document. Keep the original
                  in a safe but accessible location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notarization Requirements */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Shield className="w-7 h-7 text-blue-600" />
            Notarization Requirements by POA Type
          </h2>
          <p>
            Notarization is a critical requirement for power of attorney documents in Oklahoma.
            The notary's seal serves as authentication of the principal's signature and helps
            prevent fraud and abuse.
          </p>

          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">POA Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Notarization</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Witnesses</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Statute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Durable POA</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Required</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-500">Not required</td>
                  <td className="border border-gray-300 px-4 py-3">58 O.S. § 3001</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Financial POA</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Required</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-500">Not required</td>
                  <td className="border border-gray-300 px-4 py-3">58 O.S. § 3001</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Medical POA</td>
                  <td className="border border-gray-300 px-4 py-3 text-orange-600 font-semibold">OR 2 Witnesses</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">2 Required if not notarized</td>
                  <td className="border border-gray-300 px-4 py-3">63 O.S. § 3101</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Springing POA</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Required</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-500">Not required</td>
                  <td className="border border-gray-300 px-4 py-3">58 O.S. § 3004</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Limited POA</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Required</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-500">Not required</td>
                  <td className="border border-gray-300 px-4 py-3">58 O.S. § 3001</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6 not-prose">
            <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Important Note on Notary Fees
            </h4>
            <p className="text-yellow-800 text-sm">
              Oklahoma law sets maximum notary fees at <strong>$5 per signature</strong> for
              traditional in-person notarization. Remote Online Notarization (RON) fees are
              typically <strong>$25 per notarization</strong>. Mobile notary services may
              charge additional travel fees ranging from $25-50 depending on distance.
            </p>
          </div>

          <p>
            For professional notarization services throughout Oklahoma, including mobile and
            remote online options, visit our{' '}
            <Link href="/power-of-attorney-notary-oklahoma/" className="text-blue-600 hover:underline font-medium">
              Power of Attorney Notary Oklahoma
            </Link>{' '}
            service page.
          </p>
        </section>

        {/* Revocation Procedures */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-blue-600" />
            Revoking a Power of Attorney in Oklahoma
          </h2>
          <p>
            A principal may revoke a power of attorney at any time, provided they are mentally
            competent. Under <strong>58 O.S. § 3010</strong>, revocation must follow specific
            procedures to be effective.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How to Revoke a POA</h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <span><strong>Put it in writing:</strong> Create a written revocation document stating your intent to revoke the POA, including the date of the original POA and the agent's name.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <span><strong>Sign and notarize:</strong> Sign the revocation and have it notarized to authenticate your signature.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <span><strong>Notify your agent:</strong> Deliver a copy of the revocation to your agent in person or by certified mail.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <span><strong>Notify third parties:</strong> Send copies to banks, healthcare providers, and any institutions that had the original POA on file.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <span><strong>Retrieve original documents:</strong> If possible, collect all original copies of the POA from your agent.</span>
            </li>
          </ol>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-6 not-prose">
            <h4 className="font-bold text-red-800 mb-2">Automatic Termination Events</h4>
            <p className="text-red-800 text-sm">
              A power of attorney automatically terminates upon: (1) The principal's death,
              (2) The principal's revocation (while competent), (3) The agent's resignation,
              (4) The agent's death or incapacity (unless a successor is named), (5) A court
              order terminating the POA, or (6) The occurrence of a termination event specified
              in the document itself.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-blue-600" />
            Common Power of Attorney Mistakes to Avoid
          </h2>
          <p>
            Even with the best intentions, mistakes in creating or executing a power of attorney
            can render the document invalid or create unintended consequences. Here are the most
            common pitfalls Oklahoma residents should avoid.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Failing to Notarize
              </h4>
              <p className="text-red-800 text-sm">
                An unnotarized POA is not legally valid in Oklahoma. Banks, healthcare providers,
                and courts will not accept it. Always have your POA properly notarized.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Choosing the Wrong Agent
              </h4>
              <p className="text-red-800 text-sm">
                Selecting an untrustworthy or financially irresponsible agent can lead to abuse,
                theft, or mismanagement of your affairs. Choose carefully and consider naming
                co-agents or successor agents.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Vague or Unclear Language
              </h4>
              <p className="text-red-800 text-sm">
                Ambiguous language can lead to disputes about what powers were actually granted.
                Be specific and use the statutory form language when possible.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Not Updating the Document
              </h4>
              <p className="text-red-800 text-sm">
                Life changes such as divorce, death of an agent, or relocation may require updating
                your POA. Review your documents regularly and update as needed.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-10 not-prose">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-blue-600" />
            Frequently Asked Questions About Oklahoma Power of Attorney
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900">How do I get power of attorney in Oklahoma?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-gray-700">
                To get power of attorney in Oklahoma, you must: (1) Choose your agent carefully,
                (2) Select the appropriate POA type, (3) Complete the statutory form or have one
                drafted, (4) Sign in the presence of a notary public, and (5) Provide copies to
                your agent and relevant institutions. All POA documents must be notarized under
                58 O.S. § 3001.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900">Does a power of attorney need to be notarized in Oklahoma?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-gray-700">
                Yes, all power of attorney documents in Oklahoma must be notarized to be legally
                valid. Under the Oklahoma Uniform Power of Attorney Act (58 O.S. § 3001 et seq.),
                notarization serves as authentication of the principal's signature and helps prevent
                fraud. Medical POAs may alternatively be witnessed by two adults instead of notarization.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900">What is the difference between durable and springing power of attorney?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-gray-700">
                A durable power of attorney takes effect immediately upon signing and remains in
                effect even if the principal becomes incapacitated. A springing power of attorney
                only becomes effective when a specific condition occurs, typically when the principal
                becomes incapacitated, as certified by one or more physicians. The springing POA
                "springs" into action upon that triggering event.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900">How much does a power of attorney cost in Oklahoma?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-gray-700">
                The cost of creating a power of attorney in Oklahoma varies: DIY forms are $0-50,
                attorney-drafted POAs range from $200-500+, and notarization costs $5 per signature
                for traditional notary services or $25 for remote online notarization. Mobile notary
                services may include additional travel fees of $25-50 depending on location.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900">Can a power of attorney be revoked in Oklahoma?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-gray-700">
                Yes, a power of attorney can be revoked at any time by the principal as long as
                they are mentally competent. Under 58 O.S. § 3010, revocation must be in writing
                and delivered to the agent and any third parties who have relied on the POA. The
                principal should also retrieve all copies of the original POA document from the agent.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900">What powers cannot be granted through a power of attorney in Oklahoma?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-gray-700">
                Under Oklahoma law, an agent cannot: make or change a will for the principal, vote
                in public elections on behalf of the principal, create or revoke a trust (unless
                specifically authorized), or perform personal services contracts that are unique
                to the principal. Additionally, an agent cannot make healthcare decisions unless
                granted specific authority in a medical POA.
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900">How long does a power of attorney last in Oklahoma?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-gray-700">
                A power of attorney in Oklahoma lasts until: (1) The principal revokes it (while
                competent), (2) The principal dies, (3) The agent resigns or becomes unable to serve,
                (4) A specific termination date stated in the document is reached, or (5) For
                non-durable POAs, when the principal becomes incapacitated. Durable POAs remain
                effective through incapacity.
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900">What is the Oklahoma Uniform Power of Attorney Act?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-gray-700">
                The Oklahoma Uniform Power of Attorney Act, codified in Title 58 O.S. § 3001 through
                § 3046, is the comprehensive legal framework governing powers of attorney in Oklahoma.
                Adopted in 2021, it standardizes POA requirements, provides statutory forms, defines
                agent duties and liabilities, and establishes protections for third parties who accept
                POA documents in good faith.
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900">Can I have more than one power of attorney in Oklahoma?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-gray-700">
                Yes, you can have multiple powers of attorney in Oklahoma. Many people have separate
                POAs for different purposes—such as a durable financial POA for asset management and
                a medical POA for healthcare decisions. You can also name different agents for different
                responsibilities. However, having multiple POAs for the same purpose can create conflicts,
                so it's important to clearly specify the scope of each document.
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group border border-gray-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="font-semibold text-gray-900">What are an agent's fiduciary duties under Oklahoma law?</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-4 text-gray-700">
                Under 58 O.S. § 3014, an agent has several fiduciary duties including: acting in good
                faith, acting within the scope of authority granted, acting loyally for the principal's
                benefit, avoiding conflicts of interest, keeping accurate records of all transactions,
                cooperating with the principal, and preserving the principal's estate plan if known.
                Violation of these duties can result in civil liability and criminal penalties.
              </div>
            </details>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: Protecting Your Future with a Power of Attorney</h2>
          <p>
            A properly executed power of attorney is one of the most important legal documents you
            can create. It ensures that your affairs will be managed according to your wishes if you
            become unable to handle them yourself. By understanding the different types of POA available
            in Oklahoma, following the statutory requirements under 58 O.S. § 3001 et seq., and avoiding
            common mistakes, you can create a document that provides peace of mind for you and your loved ones.
          </p>
          <p>
            Remember that creating a power of attorney is not a one-time event. Life circumstances
            change, and your POA should be reviewed periodically to ensure it still reflects your wishes
            and current situation. If you have questions about creating, executing, or revoking a power
            of attorney in Oklahoma, consult with a qualified estate planning attorney who can provide
            personalized guidance based on your specific needs.
          </p>
          <p>
            For professional notarization services for your power of attorney documents, including
            mobile notary and remote online notarization options, contact Just Legal Solutions. Our
            experienced team is available 24/7 to help ensure your POA documents are properly executed
            and legally valid.
          </p>
        </section>

        {/* Author Bio */}
        <footer className="border-t border-gray-200 pt-8 not-prose">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                JI
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">About the Author</h3>
                <p className="font-semibold text-blue-600">Joseph Iannazzi</p>
                <p className="text-gray-600 text-sm mt-2">
                  Joseph Iannazzi is the founder of Just Legal Solutions, providing professional
                  notary, process serving, and legal support services throughout Oklahoma. With
                  extensive experience in document execution and Oklahoma legal procedures, Joseph
                  helps individuals and businesses navigate the complexities of power of attorney
                  documents and other important legal instruments.
                </p>
                <div className="mt-3 text-sm text-gray-500">
                  <span>Last Modified: January 15, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>
      <div className="mt-12">
        <AuthorBox />
      </div>
      <LocalPromoBanner zips={[]} />
      {/* Related Guides */}
      <section className="mt-12 mb-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides &amp; Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/tulsa-process-server" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
            <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Tulsa Process Server — Same-Day, starts at $35</span>
            <p className="text-sm text-gray-600 mt-1">Licensed Tulsa process server for all document types. GPS-tracked, court-ready affidavits.</p>
          </Link>
          <Link href="/process-serving" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
            <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Professional Process Serving Services</span>
            <p className="text-sm text-gray-600 mt-1">Complete overview of our service offerings and coverage areas across Oklahoma.</p>
          </Link>
          <Link href="/pricing" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
            <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Process Server Pricing in Oklahoma</span>
            <p className="text-sm text-gray-600 mt-1">Transparent flat-rate pricing starting at $60 — no mileage fees, no hidden charges.</p>
          </Link>
          <Link href="/oklahoma-process-server-faq" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
            <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Oklahoma Process Server FAQ</span>
            <p className="text-sm text-gray-600 mt-1">Answers to the most common questions about process serving in Oklahoma.</p>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
