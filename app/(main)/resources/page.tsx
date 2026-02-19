import React from 'react';
import Link from 'next/link';
import { BookOpen, Gavel, MapPin, FileText, Scale, Shield, Clock, ExternalLink } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oklahoma Process Serving Resources & Legal Guides | Just Legal Solutions',
  description: 'Oklahoma process serving resources—legal guides, FAQs, and expert advice for court filing and document delivery in Tulsa County and across Oklahoma.',
  keywords: ['legal resources oklahoma', 'oklahoma process server guides', 'tulsa document delivery faqs', 'court papers info', 'legal guides tulsa', 'oklahoma civil procedure', 'tulsa county court rules', 'process server training oklahoma'],
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  category: 'Legal Services',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Oklahoma Process Serving Resources & Legal Guides | Just Legal Solutions',
    description: 'Comprehensive legal resources, guides, and FAQs for Oklahoma process serving, court filing, and legal document delivery. Expert guidance for Tulsa County and statewide Oklahoma.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/resources',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/legal-resources-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Legal Resources and Process Serving Guides'
      }
    ]
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/resources'
  }
};

const ResourcesPage = () => {
  const processServingBasics = [
    {
      title: "What is a Process Server?",
      url: "/seo/what-is-a-process-server",
      preview: "Learn what a process server does, why courts require formal service of process, and how professional servers protect your legal rights under Oklahoma law."
    },
    {
      title: "Oklahoma Process Serving Laws",
      url: "/oklahoma-process-server-laws",
      preview: "Comprehensive guide to Oklahoma process server licensing requirements under 12 O.S. § 158.1, service methods under 12 O.S. § 2004, and the 180-day service deadline. Covers personal, substituted (resident age 15+), and publication methods."
    },
    {
      title: "Complete Tulsa Process Server Guide",
      url: "/process-server-tulsa-guide",
      preview: "Your 2026 guide to selecting and working with a Tulsa process server—covering Tulsa County courthouse procedures, pricing expectations, and what to look for in a licensed server."
    },
    {
      title: "Ultimate Guide to Process Serving in Oklahoma",
      url: "/ultimate-guide-process-serving-oklahoma",
      preview: "Everything attorneys and individuals need to know about Oklahoma process serving, from initial filing through proof of service. Covers all 77 counties."
    },
    {
      title: "Process Server Best Practices Checklist 2026",
      url: "/oklahoma-process-server-best-practices-checklist-2026",
      preview: "Professional checklist for Oklahoma process servers to ensure legal compliance—covering documentation, attempt logging, affidavit preparation, and court filing standards."
    },
    {
      title: "Common Process Serving Mistakes to Avoid",
      url: "/process-serving-mistakes-guide",
      preview: "The most frequent errors in process serving that can lead to case dismissal—and how to prevent them. Essential reading for attorneys and pro se litigants."
    },
    {
      title: "Serving an Evasive Defendant",
      url: "/ai-skip-tracing-guide-oklahoma",
      preview: "When a defendant can't be found, Oklahoma law requires due diligence—not a fixed number of attempts. Learn about skip tracing, varying service times and days, and when the court may authorize service by publication."
    },
    {
      title: "Oklahoma Process Server FAQ 2026",
      url: "/oklahoma-process-server-faq-2026",
      preview: "Frequently asked questions about process serving in Oklahoma—costs, timelines, licensing, who can serve papers, and what happens when a defendant avoids service."
    }
  ];

  const familyLawDivorce = [
    {
      title: "Serving Divorce Papers in Tulsa",
      url: "/family-law-service-guide-tulsa",
      preview: "Practical guide to serving divorce petitions in Tulsa County under 43 O.S. § 113. Covers personal service, respondent acknowledgment, publication in the Tulsa World when the respondent can't be located, and working with family law attorneys."
    },
    {
      title: "Family Law Service Guide — Tulsa 2025",
      url: "/family-law-service-guide-tulsa-2025",
      preview: "Updated guide covering protective orders, divorce filings, and custody document service in Tulsa County. Includes EPO procedures (served by law enforcement under 22 O.S. § 60.4) and permanent order service protocols."
    },
    {
      title: "Serving an Eviction Notice in Oklahoma",
      url: "/seo/eviction-notice-process-server",
      preview: "How eviction notices are properly served in Oklahoma—including notice-to-quit timelines, landlord requirements, and why professional service creates court-admissible proof of delivery."
    },
    {
      title: "High-Profile Service Protocols in Tulsa",
      url: "/high-profile-service-protocols-tulsa",
      preview: "Specialized service protocols for sensitive and high-profile cases requiring discretion, safety planning, and enhanced documentation."
    },
    {
      title: "Oklahoma Electronic Service Guide",
      url: "/oklahoma-electronic-service-guide",
      preview: "When electronic service is permitted under Oklahoma law (12 O.S. § 2004.5), consent requirements, and how to document electronic delivery for court acceptance."
    }
  ];

  const countyLocalGuides = [
    {
      title: "Tulsa County Process Serving",
      url: "/counties/tulsa-county",
      preview: "Navigating the busiest judicial district in Oklahoma—courthouse hours, filing procedures, and urban service considerations for the Tulsa metro area."
    },
    {
      title: "Tulsa Process Server",
      url: "/tulsa-process-server",
      preview: "Dedicated Tulsa County process serving with same-day availability. Covers apartments, gated communities, downtown offices, and every Tulsa neighborhood."
    },
    {
      title: "Statewide Service Areas",
      url: "/service-areas",
      preview: "Find professional process serving in your Oklahoma city or county. We cover all 77 counties with competitive flat-rate pricing."
    },
    {
      title: "Oklahoma Legal Service Areas Map",
      url: "/oklahoma-legal-service-areas",
      preview: "Comprehensive coverage map of all Oklahoma cities and counties served by Just Legal Solutions."
    },
    {
      title: "Oklahoma Process Server Authority",
      url: "/oklahoma-process-server-authority",
      preview: "Understanding who has the legal authority to serve process in Oklahoma—sheriffs, licensed private servers, and court-appointed persons."
    },
    {
      title: "Oklahoma vs. Texas Process Serving",
      url: "/oklahoma-vs-texas-process-server",
      preview: "Key differences in process serving laws between Oklahoma and Texas—useful for cross-border litigation or attorneys practicing in both states."
    },
    {
      title: "Serving Legal Papers on Tribal Land",
      url: "/serving-legal-papers-on-tribal-land",
      preview: "Navigating tribal sovereignty requirements for process serving in Oklahoma. Covers when tribal court coordination is necessary and jurisdiction boundaries."
    },
    {
      title: "Oklahoma Case Law on Service of Process",
      url: "/oklahoma-case-law-service-process",
      preview: "Key Oklahoma court decisions that shape process serving requirements, including rulings on diligent search, substituted service, and procedural compliance."
    }
  ];

  const toolsPricingTemplates = [
    {
      title: "Field Sheet Generator",
      url: "/field-sheet",
      preview: "Generate, fill out, and print professional field sheets for service of process—or save as PDF. Free tool for process servers and legal professionals."
    },
    {
      title: "Affidavit of Service Generator",
      url: "/affidavit-of-service",
      preview: "Create professional Affidavit of Service or Non-Service forms with a notary section. Court-ready formatting for Oklahoma filings."
    },
    {
      title: "Free PDF Tools for Legal Professionals",
      url: "/pdf-tools",
      preview: "Merge, compress, split, convert, protect, and OCR PDFs right in your browser. 14 embedded tools plus OCR—built for process servers, notaries, and legal staff."
    },
    {
      title: "Oklahoma Process Server Pricing",
      url: "/oklahoma-process-server-pricing",
      preview: "Transparent pricing guide for process serving across Oklahoma—standard, rush, same-day, and stakeout rates for all 77 counties."
    },
    {
      title: "Oklahoma Process Serving Costs Comparison",
      url: "/oklahoma-process-serving-costs-comparison",
      preview: "Compare process serving costs across different Oklahoma providers. Understand what you should expect to pay for standard and rush service."
    },
    {
      title: "AI Skip Tracing Guide for Oklahoma",
      url: "/ai-skip-tracing-guide-oklahoma",
      preview: "How AI-powered skip tracing helps locate hard-to-find individuals using database searching, public records analysis, and investigative techniques."
    },
    {
      title: "Process Server Technology 2026",
      url: "/oklahoma-process-server-technology",
      preview: "GPS tracking, electronic filing, digital affidavits, and other modern tools used by professional Oklahoma process servers."
    }
  ];

  const resourceSections = [
    { icon: BookOpen, title: "Process Serving Basics", description: "Foundational guides on how process serving works in Oklahoma—laws, methods, and professional standards.", articles: processServingBasics },
    { icon: Gavel, title: "Family Law, Divorce & Specialized Service", description: "Guides for family law cases, evictions, protective orders, and sensitive service situations in Tulsa County and statewide.", articles: familyLawDivorce },
    { icon: MapPin, title: "County & Local Guides", description: "County-specific courthouse procedures, coverage maps, and jurisdiction guides for Oklahoma process serving.", articles: countyLocalGuides },
    { icon: FileText, title: "Tools, Pricing & Templates", description: "Free tools, pricing guides, and professional templates for process servers, attorneys, and legal staff.", articles: toolsPricingTemplates }
  ];

  const keyStatutes = [
    {
      cite: "12 O.S. § 2004",
      title: "Service of Process",
      description: "The primary Oklahoma statute governing how legal documents are served. Covers personal service, substituted service (on a household resident age 15 or older), service by mail, service by publication, and court-ordered alternative service. Includes the 180-day deadline for serving a summons.",
      oscnUrl: "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=93858"
    },
    {
      cite: "12 O.S. § 158.1",
      title: "Private Process Server Licensing",
      description: "Establishes the requirements for private process server licensing in Oklahoma: age 18+, Oklahoma residency, good moral character, $5,000 bond, and a license issued by a district judge after public notice and hearing. The license grants statewide service authority.",
      oscnUrl: "https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=94614"
    },
    {
      cite: "12 O.S. § 2004.5",
      title: "Electronic Service",
      description: "Governs when and how electronic service of legal documents is permitted in Oklahoma courts. Requires specific consent or court authorization and strict documentation of delivery.",
      oscnUrl: "https://www.oscn.net/applications/oscn/index.asp"
    },
    {
      cite: "22 O.S. § 60.4",
      title: "Protective Orders",
      description: "Governs emergency and final protective orders in Oklahoma. Emergency protective orders (EPOs) must be served by law enforcement. Final/permanent protective orders may be served by licensed process servers.",
      oscnUrl: "https://www.oscn.net/applications/oscn/index.asp"
    },
    {
      cite: "43 O.S. § 113",
      title: "Divorce Filing & Service",
      description: "Covers service requirements for divorce petitions in Oklahoma—personal service, voluntary acceptance by the respondent, and service by publication when the respondent cannot be located after diligent search.",
      oscnUrl: "https://www.oscn.net/applications/oscn/index.asp"
    }
  ];

  const externalResources = [
    { name: "Oklahoma State Courts Network (OSCN)", url: "https://www.oscn.net", description: "Free access to Oklahoma statutes, case law, court dockets, and filing information." },
    { name: "Oklahoma Supreme Court", url: "https://www.oscn.net/applications/oscn/index.asp", description: "Official court rules, opinions, and administrative orders." },
    { name: "Oklahoma Bar Association", url: "https://www.okbar.org", description: "Attorney resources, legal forms, CLE materials, and public legal information." },
    { name: "Oklahoma Legislature — Title 12", url: "https://www.oklegislature.gov/osStatuesTitle.aspx?title=12", description: "Full text of Oklahoma civil procedure statutes including §§ 2004, 158.1, and 2004.5." },
    { name: "Tulsa County District Court", url: "https://www.tulsacounty.org/Tulsa-County-Courts.aspx", description: "Tulsa County courthouse information, filing hours, and local court rules." }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Legal Resources & Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your expert source for navigating the complexities of process serving in Oklahoma.</p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-4">
            Whether you are an attorney preparing to file a lawsuit, a landlord serving an eviction notice, or an individual who needs divorce papers delivered properly, understanding <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma&apos;s process serving laws</Link> is essential. Our resource library covers everything from <Link href="/seo/what-is-a-process-server" className="text-blue-600 hover:underline">what a process server does</Link> to advanced topics like <Link href="/oklahoma-electronic-service-guide" className="text-blue-600 hover:underline">electronic service requirements</Link>, <Link href="/ai-skip-tracing-guide-oklahoma" className="text-blue-600 hover:underline">skip tracing technology</Link>, and county-specific courthouse procedures. Each guide is written by our licensed process serving team and updated regularly to reflect the latest Oklahoma statutes and court rules.
          </p>
          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="#basics" className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition">Process Serving Basics</a>
            <a href="#family-law" className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition">Family Law & Divorce</a>
            <a href="#county-guides" className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition">County & Local Guides</a>
            <a href="#tools" className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-200 transition">Tools & Pricing</a>
            <a href="#statutes" className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-200 transition">Key Statutes</a>
            <a href="#external" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition">External Resources</a>
          </div>
        </div>

        {/* Resource Sections */}
        <div className="space-y-16">
          {resourceSections.map((category, catIndex) => {
            const sectionIds = ['basics', 'family-law', 'county-guides', 'tools'];
            return (
              <section key={category.title} id={sectionIds[catIndex]}>
                <div className="flex items-center mb-4">
                  <category.icon className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                  <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 ml-12">{category.description}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-12">
                  {category.articles.map((article) => (
                    <Link key={article.title} href={article.url} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group">
                      <h3 className="font-semibold text-xl mb-2 text-blue-800 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{article.preview}</p>
                      <span className="text-blue-600 font-semibold text-sm group-hover:underline">Read More &rarr;</span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Key Oklahoma Statutes */}
        <section id="statutes" className="mt-16">
          <div className="flex items-center mb-4">
            <Scale className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
            <h2 className="text-3xl font-bold text-gray-800">Key Oklahoma Statutes</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8 ml-12">The primary statutes governing process serving, licensing, and family law service in Oklahoma. Links open to the Oklahoma State Courts Network (OSCN).</p>
          <div className="space-y-4 ml-0 md:ml-12">
            {keyStatutes.map((statute) => (
              <div key={statute.cite} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg text-gray-900">
                    <span className="text-red-700 font-mono text-base">{statute.cite}</span>
                    <span className="mx-2 text-gray-400">—</span>
                    {statute.title}
                  </h3>
                  <a href={statute.oscnUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline whitespace-nowrap flex-shrink-0">
                    <ExternalLink className="w-3.5 h-3.5" />
                    View on OSCN
                  </a>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{statute.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* External Resources */}
        <section id="external" className="mt-16">
          <div className="flex items-center mb-4">
            <ExternalLink className="h-8 w-8 text-gray-600 mr-4 flex-shrink-0" />
            <h2 className="text-3xl font-bold text-gray-800">External Resources</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8 ml-12">Official Oklahoma legal resources and courts. These links open in a new tab.</p>
          <ul className="space-y-3 ml-0 md:ml-12">
            {externalResources.map((resource) => (
              <li key={resource.name} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-2">
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5 flex-shrink-0">
                  <ExternalLink className="w-4 h-4" />
                  {resource.name}
                </a>
                <span className="text-gray-400 hidden sm:block">—</span>
                <span className="text-gray-600 text-sm">{resource.description}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Quick Internal Links */}
        <section className="mt-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            <Link href="/tulsa-process-server" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Tulsa Process Server</Link>
            <Link href="/urgent-process-server" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Emergency Process Serving</Link>
            <Link href="/weekend-emergency" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Weekend &amp; After-Hours Service</Link>
            <Link href="/courier-services-tulsa" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Tulsa Legal Courier</Link>
            <Link href="/service-areas" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">All 77 Counties</Link>
            <Link href="/oklahoma-process-server-faq-2026" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Process Server FAQ</Link>
            <Link href="/oklahoma-process-server-laws" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Oklahoma Process Serving Laws</Link>
            <Link href="/family-law-service-guide-tulsa-2025" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Family Law Service in Tulsa</Link>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help With Your Legal Documents?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">Our <Link href="/oklahoma-process-server-laws" className="text-blue-200 underline hover:text-white">licensed and bonded</Link> process servers are ready to handle your service of process throughout Oklahoma. From routine civil filings in <Link href="/tulsa-process-server" className="text-blue-200 underline hover:text-white">Tulsa County</Link> to <Link href="/weekend-emergency" className="text-blue-200 underline hover:text-white">emergency statewide service</Link>, we deliver court-admissible proof of service with every job. Call us today for a free consultation and <Link href="/urgent-process-server" className="text-blue-200 underline hover:text-white">same-day service options</Link>.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Get a Free Quote</Link>
            <a href="tel:5393676832" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">Call (539) 367-6832</a>
          </div>
        </div>

        {/* Last Updated */}
        <p className="text-center text-sm text-gray-400 mt-8">Resources last updated: February 2026.</p>
      </div>
      <UnifiedSchema
        pageType="generic"
        url="https://justlegalsolutions.org/resources"
        title="Oklahoma Process Serving Resources & Legal Guides | Just Legal Solutions"
        description="Oklahoma process serving resources—legal guides, FAQs, and expert advice for court filing and document delivery in Tulsa County and across Oklahoma."
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 156
        }}
      />
    </main>
  );
};

export default ResourcesPage;
