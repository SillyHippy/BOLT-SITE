import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Process Server Oklahoma City, OK | Same-Day Service from $60 | Just Legal Solutions',
  description:
    'Licensed process server in Oklahoma City, OK. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
  keywords: 'process server oklahoma city, OKC process serving, oklahoma city process server, oklahoma county process serving, serve papers OKC, process server OKC, licensed process server Oklahoma County',
  openGraph: {
    title: 'Process Server Oklahoma City, OK | Same-Day Service from $60 | Just Legal Solutions',
    description:
    'Licensed process server in Oklahoma City, OK. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
    type: 'website',
    url: 'https://justlegalsolutions.org/service-areas/oklahoma-city/',
  },
};

const faqs = [
  {
    question: 'How much does a process server cost in Oklahoma City?',
    answer: 'Process server rates in Oklahoma City typically range from $60 to $150 for standard service, depending on urgency and location. At Just Legal Solutions, our Standard Service is $60 (first attempt within 72 hours), Rush Service is $150 (first attempt within 24 hours), and Same-Day Service is $265 (attempts within hours). These rates cover all of Oklahoma County including downtown OKC, Nichols Hills, The Village, Midwest City, Del City, and Moore. Additional fees may apply for multiple defendants, difficult addresses, or service outside normal hours.'
  },
  {
    question: 'How long does process serving take in Oklahoma County?',
    answer: 'Under Oklahoma law (12 O.S. § 2004(I)), service must be completed within 180 days of filing the petition. However, most serves in Oklahoma County are completed much faster. Standard service typically takes 2-5 business days, rush service within 24 hours, and same-day service within hours of receiving documents. Factors affecting timeline include defendant availability, address accuracy, and whether the defendant is attempting to avoid service. Our experienced OKC process servers know the local area and can often complete service faster than the statutory minimum.'
  },
  {
    question: 'Where is the Oklahoma County Courthouse located and what are the hours?',
    answer: 'The Oklahoma County Courthouse is located at 321 Park Avenue, Oklahoma City, OK 73102. The courthouse is open Monday through Friday from 8:00 AM to 5:00 PM, closed weekends and state holidays. The Court Clerk\'s Office can be reached at (405) 713-1705. For civil filings, the Civil Department is located in the County Office Building at 320 Robert S. Kerr Avenue and can be reached at (405) 713-1725. Parking is available at metered spaces on Park Avenue and in the parking garage on Harvey Avenue. The courthouse handles civil, criminal, family, juvenile, and probate divisions.'
  },
  {
    question: 'Can a process server serve papers at Tinker Air Force Base?',
    answer: 'Yes, but serving process on Tinker Air Force Base requires special coordination. Military installations have strict security protocols, and process servers must coordinate with the base\'s legal office and security personnel. Our licensed process servers have experience working with military bases and understand the procedures for serving active duty military personnel, civilian employees, and contractors on federal property. We recommend allowing additional time for base service and providing as much information as possible about the defendant\'s work location and schedule. Contact us at (539) 367-6832 to discuss serving papers at Tinker AFB.'
  },
  {
    question: 'What neighborhoods in Oklahoma City do you serve?',
    answer: 'We provide process serving throughout all Oklahoma City neighborhoods including Downtown OKC, Bricktown, Deep Deuce, Midtown, Automobile Alley, Heritage Hills, Mesta Park, Crown Heights, Edgemere Park, Nichols Hills, The Village, Gaillardia, Quail Creek, Edmond (near UCO), Paseo Arts District, Plaza District, Uptown 23rd, Capitol Hill, Stockyards City, Meridian Corridor, and all surrounding areas. We also serve Midwest City, Del City, Moore, Bethany, Warr Acres, Yukon, Mustang, and Choctaw. Our statewide license allows us to serve process anywhere in Oklahoma County and beyond.'
  },
  {
    question: 'How do I serve papers to someone in a gated community or apartment complex in OKC?',
    answer: 'Serving papers in gated communities and apartment complexes requires knowledge of access procedures and Oklahoma law. For gated communities, we coordinate with property management or security to gain lawful entry. For apartment complexes, we understand the difference between common areas (where service is permitted) and restricted areas. Under 12 O.S. § 2004, substituted service to a person of suitable age and discretion (15+) who resides at the defendant\'s dwelling is valid if personal service cannot be reasonably accomplished. Our experienced OKC process servers have successfully served defendants at complexes like The Metropolitan, The Edge, The Hill, The Maywood, and numerous other properties throughout the metro area.'
  },
  {
    question: 'What is the difference between using the Oklahoma County Sheriff and a private process server?',
    answer: 'Both the Oklahoma County Sheriff\'s Office and licensed private process servers can legally serve process under Oklahoma law. The Sheriff\'s Office charges approximately $50 for in-state service but may take several weeks depending on their caseload. Private process servers like Just Legal Solutions offer faster turnaround times (same-day to 72 hours), more flexible scheduling, better communication, and specialized expertise in difficult serves. Private servers can also provide detailed attempt logs, GPS documentation, and real-time updates. For time-sensitive matters or difficult defendants, a private process server is often the better choice. Our license (PSL-2026-2) is recognized statewide.'
  },
  {
    question: 'Do you serve University of Central Oklahoma and OU Health Sciences Center students and staff?',
    answer: 'Yes, we regularly serve students, faculty, and staff at both the University of Central Oklahoma in Edmond and the OU Health Sciences Center in Oklahoma City. Serving individuals on university campuses requires understanding campus access policies and student privacy regulations. For UCO in Edmond, we coordinate with campus security when necessary and understand the layout of residence halls and academic buildings. For OUHSC near downtown OKC, we\'re familiar with the medical campus environment and can efficiently locate defendants at the various hospitals, research facilities, and administrative buildings. We maintain discretion and professionalism when serving on educational campuses.'
  },
  {
    question: 'What documents can a process server deliver in Oklahoma City?',
    answer: 'Licensed process servers in Oklahoma City can deliver virtually any legal document requiring personal service under Oklahoma law. Common documents include Summons and Petitions (civil lawsuits), Subpoenas (witness testimony or document production), Divorce Petitions and Family Law documents, Child Support and Custody papers, Eviction Notices and Forcible Entry and Detainer actions, Small Claims Court documents, Restraining Orders and Protective Orders, Writs of Execution and Garnishments, and Notices of Hearing. Under 12 O.S. § 2004, proper service establishes jurisdiction and ensures due process. We handle all document types with professionalism and in full compliance with Oklahoma statutes.'
  },
  {
    question: 'How do I hire a process server in Oklahoma City from Tulsa?',
    answer: 'Hiring our Tulsa-based process serving company for Oklahoma City service is simple. Just Legal Solutions maintains a statewide network of licensed process servers, meaning we can serve papers anywhere in Oklahoma including Oklahoma County. Simply call (539) 367-6832 or submit your documents electronically. We\'ll assign an experienced OKC process server to your case and provide updates throughout the process. The drive from Tulsa to Oklahoma City takes approximately 1.5 hours via the Turner Turnpike, and our network ensures local expertise without the need for you to find a separate OKC provider. We handle the logistics so you can focus on your case.'
  },
  {
    question: 'What happens if the defendant refuses to accept service in OKC?',
    answer: 'Under Oklahoma law (12 O.S. § 2004), a defendant cannot avoid service by refusing to accept papers. If the defendant refuses to take the documents, the process server can leave them in the defendant\'s immediate proximity after identifying the nature of the documents. This constitutes valid personal service. The server will document the refusal in the Return of Service affidavit, noting the date, time, location, and circumstances. If the defendant cannot be located after diligent attempts, substituted service to a co-resident 15 years or older at the dwelling may be appropriate. Our experienced OKC process servers know how to handle reluctant defendants while ensuring service is legally valid.'
  },
  {
    question: 'Is electronic service of process allowed in Oklahoma?',
    answer: 'Yes, electronic service is permitted under 12 O.S. § 2004.5, but only in specific circumstances. Electronic service requires the recipient\'s consent, which can be established through prior agreement, court order, or by the recipient designating an email address for service in a filed document. Electronic service is commonly used for subsequent pleadings after initial service has been established, but is rarely appropriate for initial service of a Summons and Petition. Our process servers can advise on whether electronic service is appropriate for your specific situation and ensure all statutory requirements are met for valid service.'
  }
];

const breadcrumbs = [
  { name: 'Home', url: 'https://justlegalsolutions.org/' },
  { name: 'Service Areas', url: 'https://justlegalsolutions.org/service-areas/' },
  { name: 'Oklahoma City', url: 'https://justlegalsolutions.org/service-areas/oklahoma-city/' }
];

export default function OklahomaCityProcessServer() {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Just Legal Solutions - Oklahoma City Process Serving',
    description:
    'Licensed process server in Oklahoma City, OK. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
    telephone: '(539) 367-6832',
    url: 'https://justlegalsolutions.org/service-areas/oklahoma-city/',
    areaServed: { '@type': 'City', name: 'Oklahoma City', addressRegion: 'OK' },
    priceRange: '$60-$265'
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.url
    }))
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <>
      <JsonLd data={localBusinessData} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />
      
      <Navbar />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-blue-200 mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap gap-2">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><span className="text-blue-400">/</span></li>
                <li><Link href="/service-areas/" className="hover:text-white transition">Service Areas</Link></li>
                <li><span className="text-blue-400">/</span></li>
                <li className="text-white font-medium">Oklahoma City</li>
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Process Server <span className="text-blue-400">Oklahoma City</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Licensed, bonded process serving throughout OKC, Nichols Hills, The Village, Midwest City, and all of Oklahoma County. Same-day service available.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:539-367-6832" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (539) 367-6832
              </a>
              <Link 
                href="/contact/" 
                className="bg-white text-slate-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition"
              >
                Request Service Online
              </Link>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                License PSL-2026-2
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                156+ Five-Star Reviews
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Statewide Coverage
              </span>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Professional Process Serving in Oklahoma City
                </h2>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  When you need a <strong>process server in Oklahoma City</strong>, you need someone who knows the metro area intimately—from the bustling streets of Downtown OKC to the quiet residential neighborhoods of Nichols Hills and The Village. Just Legal Solutions provides professional, licensed process serving throughout Oklahoma County with the speed and reliability your legal matters demand.
                </p>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  Oklahoma City, the state capital and largest city, presents unique challenges for process serving. With a population exceeding 680,000 spread across 620 square miles, serving legal documents requires local knowledge, persistence, and professional expertise. Whether you need to serve papers in the shadow of the Oklahoma County Courthouse on Park Avenue, at Tinker Air Force Base, or in a gated community in Gaillardia, our experienced team gets the job done right.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Our founder, Joseph Iannazzi, has built a statewide network of licensed process servers who understand the nuances of Oklahoma law and the specific characteristics of each OKC neighborhood. From the Paseo Arts District to the Meridian Corridor, we navigate the city efficiently to complete service quickly and legally.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our OKC Service Coverage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Downtown OKC & Bricktown</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Nichols Hills & The Village</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Midwest City & Del City</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Moore & South OKC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Heritage Hills & Mesta Park</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Paseo Arts & Plaza Districts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Tinker AFB & FAA Center</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">OU Health Sciences Center</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">OKC Process Server Pricing</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Transparent, flat-rate pricing for all of Oklahoma County. No hidden fees, no surprises.</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Standard Service</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$60</div>
                <p className="text-slate-600 mb-6">First attempt within 72 hours. Ideal for routine service with flexible timing.</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 3 attempts
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    GPS documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Electronic proof of service
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl border-2 border-blue-600 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Rush Service</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$150</div>
                <p className="text-slate-600 mb-6">First attempt within 24 hours. Perfect for time-sensitive legal matters.</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Real-time updates
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Weekend attempts available
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Same-Day Service</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$265</div>
                <p className="text-slate-600 mb-6">Attempts within hours of receiving documents. Emergency service when every minute counts.</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Immediate dispatch
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Multiple attempts same day
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Direct attorney notification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Oklahoma County Courthouse Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Oklahoma County Courthouse Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Courthouse Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-900">Address:</p>
                    <p className="text-slate-700">321 Park Avenue<br />Oklahoma City, OK 73102</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Hours:</p>
                    <p className="text-slate-700">Monday – Friday: 8:00 AM – 5:00 PM<br />Saturday – Sunday: Closed</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Court Clerk:</p>
                    <p className="text-slate-700">Rick Warren<br />Phone: (405) 713-1705</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Civil Department:</p>
                    <p className="text-slate-700">320 Robert S. Kerr Avenue, Room 409<br />Phone: (405) 713-1725</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Parking & Access</h3>
                <div className="space-y-4 text-slate-700">
                  <p>
                    <strong>Metered Parking:</strong> Available along Park Avenue and surrounding streets. Meters typically accept coins and credit cards with time limits ranging from 30 minutes to 2 hours.
                  </p>
                  <p>
                    <strong>Parking Garage:</strong> The main parking garage is located on Harvey Avenue, just west of the courthouse. This is the most reliable option for extended visits.
                  </p>
                  <p>
                    <strong>Accessibility:</strong> The courthouse is fully ADA compliant with wheelchair access, elevators, and accessible restrooms on all floors.
                  </p>
                  <p>
                    <strong>Security:</strong> All visitors must pass through metal detectors. Leave large bags and prohibited items in your vehicle to expedite entry.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Civil Division Case Types</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">CJ Cases (Claims over $10,000)</h4>
                  <p className="text-slate-700 mb-4">General civil litigation including contract disputes, personal injury, property disputes, and other matters seeking monetary damages exceeding $10,000. Filing fee: $232.14 plus service costs.</p>
                  
                  <h4 className="font-semibold text-slate-900 mb-2">CS Cases (Claims under $10,000)</h4>
                  <p className="text-slate-700">Small claims and limited civil matters. Filing fee: $219.14 plus service costs.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">CV Cases (Non-monetary)</h4>
                  <p className="text-slate-700 mb-4">Cases not seeking monetary damages, including declaratory judgments, injunctions, and other equitable relief. Filing fee: $154.14.</p>
                  
                  <h4 className="font-semibold text-slate-900 mb-2">Special Proceedings</h4>
                  <p className="text-slate-700">Name changes ($184.14), driver's license appeals ($167.14 plus $250 bond), and foreclosure confirmations (held Thursdays at 2:00 PM in Room 513).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">OKC Neighborhoods We Serve</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Central OKC</h3>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Downtown OKC</strong> – Business district, high-rise residences, Devon Energy Center</li>
                  <li><strong>Bricktown</strong> – Entertainment district, restaurants, canal walk</li>
                  <li><strong>Deep Deuce</strong> – Historic jazz district, modern apartments</li>
                  <li><strong>Midtown</strong> – Mixed-use development, restaurants, shops</li>
                  <li><strong>Automobile Alley</strong> – Historic district along Broadway</li>
                  <li><strong>Paseo Arts District</strong> – Gallery district, Spanish Village</li>
                  <li><strong>Plaza District</strong> – Independent shops, restaurants along NW 16th</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">North OKC</h3>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Nichols Hills</strong> – Affluent residential, country club</li>
                  <li><strong>The Village</strong> – Established neighborhood, tree-lined streets</li>
                  <li><strong>Gaillardia</strong> – Gated community, golf course homes</li>
                  <li><strong>Quail Creek</strong> – Upscale residential area</li>
                  <li><strong>Heritage Hills</strong> – Historic homes, Mesta Park</li>
                  <li><strong>Crown Heights</strong> – Historic district, diverse architecture</li>
                  <li><strong>Edgemere Park</strong> – Historic homes near Lake Hefner</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Suburban OKC Metro</h3>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Midwest City</strong> – Tinker AFB adjacent, residential</li>
                  <li><strong>Del City</strong> – Family neighborhoods, established community</li>
                  <li><strong>Moore</strong> – Rapidly growing suburban area</li>
                  <li><strong>Bethany</strong> – Residential, Southern Nazarene University</li>
                  <li><strong>Warr Acres</strong> – Diverse residential community</li>
                  <li><strong>Yukon</strong> – Western suburb, Czech Hall area</li>
                  <li><strong>Mustang</strong> – Growing suburban community</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Major Employers Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Major OKC Employers & Service Locations</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Tinker Air Force Base</h3>
                <p className="text-slate-700 mb-3">
                  One of the largest air logistics complexes in the world, Tinker AFB employs over 26,000 military and civilian personnel. Serving process on base requires coordination with base security and legal offices. Our team has experience navigating the unique requirements for military service.
                </p>
                <p className="text-slate-600 text-sm">
                  <strong>Address:</strong> 7601 SE 59th St, Oklahoma City, OK 73145
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">FAA Mike Monroney Center</h3>
                <p className="text-slate-700 mb-3">
                  The FAA's primary training and logistics center employs thousands of federal workers. We understand the procedures for serving federal employees at government facilities, including security clearance requirements and proper channels.
                </p>
                <p className="text-slate-600 text-sm">
                  <strong>Address:</strong> 6500 S MacArthur Blvd, Oklahoma City, OK 73169
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">OU Health Sciences Center</h3>
                <p className="text-slate-700 mb-3">
                  Oklahoma's premier academic health center includes OU Medical Center, Children's Hospital, and numerous research facilities. We serve medical professionals, students, and staff throughout the campus while maintaining professionalism and discretion.
                </p>
                <p className="text-slate-600 text-sm">
                  <strong>Address:</strong> 1100 N Lindsay Ave, Oklahoma City, OK 73104
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Paycom Center (OKC Thunder)</h3>
                <p className="text-slate-700 mb-3">
                  Downtown's premier entertainment venue hosts the Oklahoma City Thunder and major concerts. We can coordinate service for venue employees, athletes, and event staff, understanding the unique scheduling challenges of entertainment industry professionals.
                </p>
                <p className="text-slate-600 text-sm">
                  <strong>Address:</strong> 100 W Reno Ave, Oklahoma City, OK 73102
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">University of Central Oklahoma (Edmond)</h3>
              <p className="text-slate-700">
                Located just north of Oklahoma City in Edmond, UCO serves over 13,000 students. Our <Link href="/service-areas/edmond/" className="text-blue-600 hover:underline">Edmond process servers</Link> are familiar with campus layout, residence halls, and student schedules. We maintain discretion when serving students and university personnel, understanding the sensitive nature of legal proceedings involving young adults.
              </p>
            </div>
          </div>
        </section>

        {/* Apartment Complexes Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">OKC Apartment & Gated Community Service</h2>
            
            <p className="text-lg text-slate-700 mb-8">
              Serving legal documents in apartment complexes and gated communities requires specialized knowledge of access procedures, Oklahoma law, and property management coordination. Our experienced OKC process servers have successfully completed service at properties throughout the metro area.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Downtown/Midtown Apartments</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>The Metropolitan – High-rise luxury living</li>
                  <li>The Edge – Midtown mixed-use</li>
                  <li>The Hill – Modern urban apartments</li>
                  <li>The Maywood – Historic renovation</li>
                  <li>Level – Deep Deuce apartments</li>
                  <li>The Montgomery – Bricktown living</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Gated Communities</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>Gaillardia Country Club – North OKC</li>
                  <li>Rose Creek – Edmond/OKC border</li>
                  <li>Oak Tree – Edmond area</li>
                  <li>Coffee Creek – Edmond</li>
                  <li>Bridgestone – South OKC</li>
                  <li>Val Verde – Nichols Hills area</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Approach to Restricted Access Properties</h3>
              <p className="text-slate-700 mb-4">
                Under <strong>12 O.S. § 2004</strong>, process servers must have lawful access to complete service. For gated communities and secured apartment buildings, we employ several strategies:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Property Management Coordination:</strong> We work professionally with property managers and security personnel to gain lawful entry.</li>
                <li><strong>Stakeout Expertise:</strong> Our servers know the best times and locations to intercept defendants as they enter or exit the property.</li>
                <li><strong>Substituted Service:</strong> When personal service cannot be reasonably accomplished, we can serve co-residents 15 years or older at the defendant's dwelling.</li>
                <li><strong>Documentation:</strong> Every attempt is thoroughly documented with timestamps, GPS coordinates, and detailed notes for court presentation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Oklahoma County Sheriff Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Working with Oklahoma County Sheriff</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-slate-700 mb-4">
                  The Oklahoma County Sheriff's Office plays a vital role in the civil process ecosystem. Under Oklahoma law, the Sheriff is responsible for serving warrants, subpoenas, civil lawsuits, evictions, and executing property seizures through Sheriff's sales.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  While the Sheriff's Office provides civil process services, many attorneys and individuals choose licensed private process servers for faster turnaround times and more personalized service. The Sheriff typically charges around $50 for in-state service but may have longer processing times depending on caseload.
                </p>
                <p className="text-lg text-slate-700">
                  Our licensed process servers work cooperatively with the Oklahoma County Sheriff's Office when necessary, particularly for complex serves or situations requiring law enforcement presence. We maintain professional relationships with civil process deputies to ensure smooth coordination.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Oklahoma County Sheriff Contact</h3>
                <div className="space-y-3 text-slate-700">
                  <p><strong>Address:</strong> 201 N Shartel Ave, Oklahoma City, OK 73102</p>
                  <p><strong>Civil Process:</strong> (405) 713-1000</p>
                  <p><strong>Sheriff's Sales:</strong> Held twice monthly, Thursdays at 2:00 PM</p>
                  <p><strong>Location:</strong> 320 Robert S. Kerr, Room 513 (Jury Assembly Room)</p>
                </div>
                
                <h4 className="font-bold text-slate-900 mt-6 mb-3">When to Choose Private vs. Sheriff Service</h4>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Choose Private Server:</strong> Time-sensitive matters, difficult defendants, need for detailed updates, weekend/evening attempts</li>
                  <li><strong>Choose Sheriff:</strong> Budget constraints, non-urgent matters, preference for government service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tulsa Connection Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tul-Based Service for Oklahoma City</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-slate-700 mb-4">
                  Just Legal Solutions is headquartered in the Tulsa metropolitan area, but our statewide license and network of process servers allow us to serve legal documents anywhere in Oklahoma—including all of Oklahoma County and the Oklahoma City metro area.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  The drive from Tulsa to Oklahoma City takes approximately <strong>1.5 hours via the Turner Turnpike</strong> (I-44 to I-35), making it feasible for our team to handle OKC serves efficiently. However, our network of local OKC process servers means we can often dispatch someone already in the area for faster service.
                </p>
                <p className="text-lg text-slate-700">
                  Whether you're a Tulsa attorney with an OKC case, an out-of-state firm needing Oklahoma service, or an individual anywhere in the country, we provide seamless, professional process serving throughout the Sooner State.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose Our Tulsa-Based Firm?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Statewide licensing and coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Local OKC process server network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">156+ five-star reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Same-day service available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Electronic document handling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Real-time status updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Areas Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Related Service Areas</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/service-areas/edmond/" className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Edmond</h3>
                <p className="text-slate-600 text-sm">Process serving in Edmond, including UCO campus and surrounding neighborhoods.</p>
              </Link>
              
              <Link href="/service-areas/norman/" className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Norman</h3>
                <p className="text-slate-600 text-sm">OU campus service and Cleveland County process serving.</p>
              </Link>
              
              <Link href="/service-areas/moore/" className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Moore</h3>
                <p className="text-slate-600 text-sm">South OKC metro process serving in Moore and surrounding areas.</p>
              </Link>
              
              <Link href="/counties/oklahoma-county/" className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Oklahoma County</h3>
                <p className="text-slate-600 text-sm">Complete county-wide process serving coverage.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden group">
                  <summary className="p-6 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50 transition flex justify-between items-center">
                    {faq.question}
                    <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-slate-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Serve Papers in Oklahoma City?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Licensed, bonded, and experienced. Same-day service available throughout OKC and all of Oklahoma County.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:539-367-6832" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (539) 367-6832
              </a>
              <Link 
                href="/contact/" 
                className="bg-white text-slate-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition"
              >
                Request Service Online
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              License PSL-2026-2 • 156+ Five-Star Reviews • Serving All 77 Oklahoma Counties
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 px-4 bg-slate-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-slate-500 text-center">
              <strong>Disclaimer:</strong> This information is provided for educational purposes only and does not constitute legal advice. Oklahoma statutes change; always consult 12 O.S. § 2004 or a qualified attorney for specific legal guidance regarding your situation. Just Legal Solutions is a licensed private process server company, not a law firm.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
