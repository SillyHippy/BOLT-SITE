// Speakable Schema for voice search optimization
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Legal Posting Process Server',
  'speakable': {
    '@type': 'SpeakableSpecification',
    'cssSelector': ['h1', 'h2', '.important-info', '.contact-info']
  },
  'url': 'https://justlegalsolutions.org/seo/legal-posting-process-server'
};
import type { Metadata } from 'next';
import Image from 'next/image';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Legal Notice Posting Service | Tulsa County, Oklahoma',
  description: 'Expert in legal notice posting for when personal service is not possible. We ensure full compliance with Oklahoma\'s posting and mailing requirements for evictions, foreclosures, and more.',
  keywords: 'legal notice posting tulsa, posting and mailing service, oklahoma rules of civil procedure, alternative service, process server tulsa',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/legal-posting-process-server'
  }
};

import UnifiedSchema from '@/components/UnifiedSchema';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Legal Notice Posting Service',
  description: 'Professional legal notice posting service for Tulsa County when personal service is not possible. Court-approved alternative service including conspicuous posting and certified mailing for evictions, foreclosures, and property notices with full Oklahoma law compliance.',
  url: 'https://justlegalsolutions.org/seo/legal-posting-process-server',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [{ '@type': 'AdministrativeArea', name: 'Tulsa County' }],
  serviceType: ['Legal Notice Posting', 'Alternative Service of Process'],
};

const postingData = {
    intro: `When a person cannot be served personally, Oklahoma law provides an alternative method: service by posting. This is a critical legal step that, if done incorrectly, can jeopardize an entire case. We specialize in the correct execution of legal notice posting for evictions, property notices, and other court actions throughout Tulsa County. For broader legal support, our team is part of the <a href="/counties/tulsa-county" className="text-blue-700 underline">Tulsa County Process Server</a> network, ensuring full coverage and compliance.`,
    process: {
        title: 'The Legal Requirements for Posting in Oklahoma',
        steps: [
            { name: 'Diligent Search', detail: 'Before posting is allowed, a diligent effort to locate and personally serve the individual must be made and documented. Our standard service attempts satisfy this requirement.' },
            { name: 'Court Approval', detail: 'In many cases, a judge must approve service by posting after being shown that personal service was not possible.' },
            { name: 'Conspicuous Posting', detail: 'The notice must be posted in a conspicuous (obvious) place on the property, typically the front door.' },
            { name: 'Mailing Requirement', detail: 'A copy of the notice must also be mailed to the individual\'s last known address via certified mail. We handle both the posting and the mailing to ensure full compliance.' },
            { name: 'Affidavit of Service', detail: 'We provide a detailed Affidavit of Service that documents the posting location, date, time, and includes photographic evidence, along with proof of mailing.' }
        ]
    },
    faqs: [
        {
            q: 'Where can I learn more about process serving laws and best practices in Oklahoma?',
            a: (
                <>
                  For a comprehensive overview of process serving requirements, legal tips, and updates across the state, visit our{' '}
                  <a href="/ultimate-guide-process-serving-oklahoma" className="text-blue-700 underline">Ultimate Guide to Process Serving in Oklahoma</a>.
                </>
            )
        },
        {
            q: 'What is "posting and mailing" service?',
            a: 'It is a two-part alternative to personal service where a legal notice is physically posted on a property and a second copy is sent via certified mail. Both steps are required for the service to be legally valid in Oklahoma.'
        },
        {
            q: 'When is legal notice posting typically used?',
            a: 'It is most commonly used in eviction cases after attempts to personally serve the tenant have failed. It is also used for foreclosure notices, quiet title actions, and other cases involving property where a party cannot be found.'
        },
        {
            q: 'Why should I hire a professional for posting?',
            a: 'Improper posting can cause your case to be dismissed. A professional process server ensures that all legal requirements are met, provides photographic proof, and supplies a court-admissible Affidavit of Service, protecting your legal interests.'
        }
    ]
};

export default function LegalPostingProcessServer() {
  // Transform FAQ data to match UnifiedSchema format
  const transformedFaqs = postingData.faqs.map(faq => ({
    question: faq.q,
    answer: typeof faq.a === 'string' ? faq.a : 'For a comprehensive overview of process serving requirements, legal tips, and updates across the state, visit our Ultimate Guide to Process Serving in Oklahoma at /ultimate-guide-process-serving-oklahoma.'
  }));

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-indigo-900 text-white">
          <div className="container mx-auto px-4 py-20 pt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Legal Notice Posting Service</h1>
            <p className="mt-4 text-xl text-indigo-200 max-w-3xl mx-auto">Ensuring Compliance with Oklahoma&apos;s Alternative Service Rules. If you need a process server for legal posting in Tulsa, we can help.</p>
            
            {/* SEO Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Image 
                src="/badges/court-certified-professional-badge.svg" 
                alt="Court Certified Legal Posting Service Professional" 
                width={100}
                height={64}
                className="h-16 w-auto"
              />
              <Image 
                src="/badges/privacy-guaranteed-badge.svg" 
                alt="Privacy Guaranteed Legal Notice Posting Service" 
                width={100}
                height={64}
                className="h-16 w-auto"
              />
              <Image 
                src="/badges/oklahoma-statewide-coverage-badge.svg" 
                alt="Oklahoma Statewide Legal Posting Coverage" 
                width={100}
                height={64}
                className="h-16 w-auto"
              />
              <Image 
                src="/badges/trusted-by-law-firms-badge.svg" 
                alt="Trusted by Law Firms Legal Notice Posting" 
                width={100}
                height={64}
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">When Personal Service Isn&apos;t an Option</h2>
              <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: postingData.intro }} />
            </section>
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-indigo-800 mb-6">{postingData.process.title}</h3>
              <div className="space-y-4">
                {postingData.process.steps.map((step, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-lg text-gray-900">{step.name}</h4>
                    <p className="text-gray-700">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Oklahoma Posting & Mailing Statutes</h2>
              <p className="text-lg text-gray-700 mb-4">
                Under Oklahoma law (12 O.S. &sect; 2004), service by posting is permitted when a plaintiff demonstrates to the court that personal service and substituted service have been unsuccessful. The court must approve alternative service after reviewing an affidavit that documents at least three diligent attempts to locate and serve the defendant. This requirement protects defendants&apos; due process rights while giving plaintiffs a path forward when personal service is genuinely impossible.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                In Tulsa County, judges typically require photographic evidence of the posted notice alongside certified mail tracking numbers before accepting an affidavit of service by posting. A professional process server familiar with local courthouse expectations can ensure your posting meets every requirement the first time, avoiding costly delays or case dismissals.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Common Cases Requiring Legal Notice Posting</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Eviction &amp; Forcible Entry</h4>
                  <p className="text-gray-700">When a tenant cannot be personally located, landlords must post the eviction notice on the property and mail a copy. Oklahoma&apos;s Residential Landlord Tenant Act (41 O.S. &sect; 131) sets specific timelines that must be followed.</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Foreclosure Proceedings</h4>
                  <p className="text-gray-700">Mortgage lenders often require posting when the property owner has vacated the premises. Posting ensures the legal notice is visible at the property while certified mail provides a second method of notification.</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Quiet Title Actions</h4>
                  <p className="text-gray-700">When property ownership is disputed and a party cannot be located, courts may authorize posting to establish proper notice. This is common in estate settlements and tax lien cases.</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Divorce &amp; Family Law</h4>
                  <p className="text-gray-700">When a spouse cannot be found after diligent search, posting may be authorized to allow divorce proceedings to continue. The court reviews skip tracing efforts before approval.</p>
                </div>
              </div>
            </section>

            <section className="bg-white py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {postingData.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-gray-900">{faq.q}</h3>
                    <p className="mt-2 text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-indigo-50 p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-indigo-800 mb-6">Related Services</h3>
              <ul className="list-disc list-inside text-indigo-700 space-y-2">
                <li><a href="/seo/eviction-notice-process-server" className="underline">Eviction Notice Process Server</a> &mdash; Same-day eviction notice delivery in Tulsa County</li>
                <li><a href="/oklahoma-process-server-laws" className="underline">Oklahoma Process Server Laws</a> &mdash; Complete guide to 12 O.S. &sect; 2004 service requirements</li>
                <li><a href="/service-areas/broken-arrow" className="underline">Broken Arrow Process Server</a></li>
                <li><a href="/service-areas/glenpool" className="underline">Glenpool Process Server</a></li>
                <li><a href="/service-areas/owasso" className="underline">Owasso Process Server</a></li>
                <li><a href="/pricing" className="underline">Posting &amp; Mailing Service Pricing</a> &mdash; Transparent flat-rate pricing for legal posting</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
      <UnifiedSchema
        pageType="service"
        pageTitle="Legal Posting Process Server | Public Notice & Legal Publication"
        pageDescription="Professional legal posting and public notice services throughout Oklahoma. Expert process server for legal publication requirements."
        pageUrl="https://justlegalsolutions.org/seo/legal-posting-process-server"
        siteName="Just Legal Solutions"
        organizationName="Just Legal Solutions"
        organizationUrl="https://justlegalsolutions.org"
        serviceType="Process Server"
        serviceName="Legal Posting Process Server"
        serviceDescription="Professional legal posting and public notice services throughout Oklahoma with expert process server support."
        serviceArea="Oklahoma"
        priceRange="$30-$200"
        telephone="+1-539-367-6832"
        address={{
          streetAddress: "Statewide Service",
          addressLocality: "Oklahoma",
          addressRegion: "Oklahoma",
          postalCode: "74101",
          addressCountry: "US"
        }}
        reviewCount={156}
        faqItems={transformedFaqs}
      />
    </>
  );
}

