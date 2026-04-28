import React from 'react';
import { Metadata } from 'next';
import { AuthorBox } from '@/components/ui/author-box';
import Link from 'next/link';
import { 
  CheckCircle, 
  FileText, 
  Shield, 
  DollarSign, 
  Clock, 
  Award,
  AlertTriangle,
  BookOpen,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Calendar,
  UserCheck,
  Gavel,
  ClipboardList
} from 'lucide-react';

export const metadata: Metadata = {
    alternates: {
    canonical: 'https://justlegalsolutions.org/become-process-server-oklahoma-complete-guide',
  },
title: 'Become a Process Server in Oklahoma — Complete 2026 Guide',
  description: 'Complete guide to becoming a licensed process server in Oklahoma. Learn CLEET requirements, licensing fees, application steps, surety bonds, training programs, and timeline from application to first serve.',
  keywords: 'how to become a process server in Oklahoma 2026, process server license oklahoma, CLEET requirements, Oklahoma process server training, process server bond Oklahoma',
  openGraph: {
    title: 'Become a Process Server in Oklahoma — Complete 2026 Guide',
    description: 'Everything you need to know about becoming a licensed process server in Oklahoma. Step-by-step application process, fees, requirements, and timeline.',
    type: 'article',
    authors: ['Joseph Iannazzi'],
    publishedTime: '2026-01-15T00:00:00Z',
    modifiedTime: '2026-01-15T00:00:00Z',
  },
};

// JSON-LD Schema Markup
const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://justlegalsolutions.org/become-process-server-oklahoma-complete-guide/#article',
      headline: 'Become a Process Server in Oklahoma — Complete 2026 Guide',
      description: 'Comprehensive guide covering Oklahoma process server licensing requirements, application process, fees, training, and career path.',
      author: {
        '@type': 'Person',
        name: 'Joseph Iannazzi',
        url: 'https://justlegalsolutions.org/about/'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Just Legal Solutions',
        logo: {
          '@type': 'ImageObject',
          url: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }
      },
      datePublished: '2026-01-15',
      dateModified: '2026-01-15',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://justlegalsolutions.org/become-process-server-oklahoma-complete-guide/'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://justlegalsolutions.org/become-process-server-oklahoma-complete-guide/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take to become a licensed process server in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The typical timeline is 45-60 days from application submission to receiving your license. This includes the mandatory 30-day posting period, publication requirements, background verification, and court processing time.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the total cost to become a process server in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'First-time applicants in Tulsa County can expect to pay approximately $370.16 total: $150 statewide license fee, court filing fees (~$214), $35 publication fee, plus the $5,000 surety bond which typically costs $100-150 annually.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do I need CLEET certification to be a process server in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, CLEET certification is not required for process servers in Oklahoma. Process servers are licensed through the county District Court under 12 O.S. § 158.1, not through CLEET. CLEET handles law enforcement and private security licensing.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can a felon become a process server in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Persons convicted of violent crimes as defined in 57 O.S. § 571 or crimes requiring sex offender registration are prohibited from obtaining a process server license in Oklahoma. Other felony convictions are evaluated on a case-by-case basis.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is there a test or exam required for Oklahoma process server licensing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, Oklahoma does not require a written examination for process server licensing. However, applicants must demonstrate good moral character, mental fitness, and meet all statutory requirements under 12 O.S. § 158.1.'
          }
        }
      ]
    },
    {
      '@type': 'HowTo',
      name: 'How to Become a Licensed Process Server in Oklahoma',
      description: 'Step-by-step guide to obtaining your Oklahoma process server license',
      totalTime: 'P60D',
      supply: [
        'Application form',
        'Two passport photos',
        '$5,000 surety bond',
        'Publication notice',
        'Application fees'
      ],
      tool: [
        'County court clerk office',
        'Legal newspaper',
        'Surety bond provider'
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Verify Eligibility Requirements',
          text: 'Ensure you meet all statutory requirements: 18+ years old, Oklahoma resident for 6+ months, county resident for 30+ days, good moral character, no disqualifying criminal convictions.'
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Complete Application Form',
          text: 'Obtain and complete the official process server application from your county court clerk. Forms are available at the courthouse or through the Administrative Office of the Courts.'
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Obtain Passport Photos',
          text: 'Get two 2x2 inch passport-style photographs from CVS, Walgreens, FedEx Office, or similar provider.'
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Secure Surety Bond',
          text: 'Purchase a $5,000 surety bond from a licensed surety company. Cost typically ranges from $100-150 annually with no credit check required.'
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'File Application and Pay Fees',
          text: 'Submit your completed application, photos, and fees to the county court clerk. First-time applicants pay approximately $370 including license fee, court costs, and publication.'
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Publish Legal Notice',
          text: 'Within 10 days of filing, publish notice of your application in a legal newspaper in the county where applying. File proof of publication with the court clerk.'
        },
        {
          '@type': 'HowToStep',
          position: 7,
          name: 'Wait for Posting Period',
          text: 'The court clerk posts notice for 30 days, allowing time for any citizen protests. The District Attorney, Sheriff, and OSBI are also notified.'
        },
        {
          '@type': 'HowToStep',
          position: 8,
          name: 'Attend Hearing (If Required)',
          text: 'If no protests are filed, the judge may grant the license without a hearing. If protests exist, a hearing will be scheduled within 60 days.'
        },
        {
          '@type': 'HowToStep',
          position: 9,
          name: 'Receive Your License',
          text: 'Upon approval, receive your statewide process server license card with photo. You are now authorized to serve process in all 77 Oklahoma counties.'
        }
      ]
    }
  ]
};

export default function BecomeProcessServerGuide() {
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Professional Career Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Become a Process Server in Oklahoma
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Complete 2026 Guide to Licensing, Requirements & Career Success
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                By Joseph Iannazzi
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Updated January 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                15 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-4 text-sm">
            <span className="font-semibold text-slate-700">Jump to:</span>
            {[
              ['Requirements', '#requirements'],
              ['Application Process', '#application-process'],
              ['Fees & Costs', '#fees-costs'],
              ['Timeline', '#timeline'],
              ['Training', '#training'],
              ['Equipment', '#equipment'],
              ['FAQ', '#faq'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-slate-600 leading-relaxed">
            Becoming a licensed process server in Oklahoma offers a rewarding career path with flexibility, 
            independence, and the opportunity to play a crucial role in the judicial system. Whether you are 
            seeking a full-time career change or supplemental income, this comprehensive guide provides 
            everything you need to know about obtaining your Oklahoma process server license in 2026.
          </p>
          <p className="text-slate-600">
            At <Link href="/" className="text-blue-600 hover:underline font-medium">Just Legal Solutions</Link>, 
            we have helped dozens of individuals navigate the licensing process successfully. This guide 
            distills our combined 50+ years of industry experience into actionable steps you can follow 
            to launch your process serving career in Oklahoma.
          </p>
        </div>

        {/* Video Guide Add-On */}
        <section className="mb-16">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 shadow-sm">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-900 border border-slate-200">
              <iframe
                src="https://www.youtube.com/embed/Rr5utB7OFsI"
                title="How to Become a Process Server"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center mt-3 mb-2 text-slate-600 text-sm font-medium">
              Watch: Complete step-by-step video guide to obtaining your Oklahoma license.
            </div>
          </div>
        </section>

        {/* What is a Process Server */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-600" />
            What Does a Process Server Do?
          </h2>
          <div className="bg-slate-50 rounded-xl p-6 md:p-8">
            <p className="text-slate-700 mb-4">
              A process server is an officer of the court authorized to deliver legal documents to parties 
              involved in court proceedings. This fundamental role ensures that all parties receive proper 
              notice of legal actions against them, upholding the constitutional right to due process.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Core Responsibilities</h3>
                <ul className="space-y-2">
                  {[
                    'Delivering summons, complaints, and subpoenas',
                    'Serving eviction notices and foreclosure documents',
                    'Filing proof of service affidavits',
                    'Locating hard-to-find recipients (skip tracing)',
                    'Maintaining detailed service records',
                    'Testifying in court when necessary'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Documents Served</h3>
                <ul className="space-y-2">
                  {[
                    'Civil summons and complaints',
                    'Subpoenas for testimony or records',
                    'Divorce and family court papers',
                    'Small claims court documents',
                    'Restraining orders and protective orders',
                    'Child custody and support papers'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <FileText className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section id="requirements" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <ClipboardList className="w-8 h-8 text-blue-600" />
            Oklahoma Process Server Requirements
          </h2>
          
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
              <h3 className="font-semibold text-slate-900">Statutory Requirements (12 O.S. § 158.1)</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Age Requirement',
                    description: 'Must be at least 18 years of age',
                    icon: UserCheck
                  },
                  {
                    title: 'State Residency',
                    description: 'Oklahoma resident for minimum 6 months',
                    icon: MapPin
                  },
                  {
                    title: 'County Residency',
                    description: '30+ days in county where applying',
                    icon: MapPin
                  },
                  {
                    title: 'Moral Character',
                    description: 'Must demonstrate good moral character',
                    icon: Award
                  },
                  {
                    title: 'Mental Fitness',
                    description: 'Found ethically and mentally fit',
                    icon: Shield
                  },
                  {
                    title: 'No Disqualifying Crimes',
                    description: 'No violent felonies or sex offenses',
                    icon: Gavel
                  }
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <req.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">{req.title}</h4>
                      <p className="text-slate-600 text-sm">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-900">Important Disqualifications</h4>
                <p className="text-amber-800 text-sm mt-1">
                  Under Oklahoma law, persons convicted of violent crimes as defined in 57 O.S. § 571 
                  or crimes requiring registration under the Sex Offenders Registration Act are 
                  <strong> prohibited</strong> from obtaining or renewing a process server license. 
                  This applies to convictions in Oklahoma or any other state.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLEET Clarification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            CLEET Requirements: What You Need to Know
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                i
              </div>
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-2">
                  Process Servers Are NOT Licensed Through CLEET
                </h3>
                <p className="text-blue-800 mb-4">
                  There is often confusion about CLEET (Council on Law Enforcement Education and Training) 
                  requirements for process servers. <strong>Process servers in Oklahoma are licensed through 
                  the District Court, not CLEET.</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">CLEET Handles:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Law enforcement officers</li>
                      <li>• Private investigators</li>
                      <li>• Security guards</li>
                      <li>• Bail enforcers</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Court Clerk Handles:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Process servers</li>
                      <li>• Under 12 O.S. § 158.1</li>
                      <li>• County-based licensing</li>
                      <li>• No CLEET involvement</li>
                    </ul>
                  </div>
                </div>
                <p className="text-blue-800 mt-4 text-sm">
                  While CLEET does not license process servers, many process servers choose to pursue 
                  CLEET-approved continuing education courses to enhance their professional knowledge 
                  and skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section id="application-process" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            Step-by-Step Application Process
          </h2>
          
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Verify Your Eligibility',
                description: 'Before beginning the application process, confirm you meet all statutory requirements: 18+ years old, Oklahoma resident for 6+ months, county resident for 30+ days, good moral character, and no disqualifying criminal convictions.',
                tips: ['Review your criminal history', 'Gather proof of residency', 'Check county-specific requirements']
              },
              {
                step: 2,
                title: 'Obtain Application Forms',
                description: 'Visit your county court clerk\'s office to obtain the official process server application form. The Administrative Office of the Courts provides standardized forms, but some counties may have additional local requirements.',
                tips: ['Tulsa County: Visit the Court Clerk\'s office', 'Call ahead to confirm office hours', 'Ask about county-specific addendums']
              },
              {
                step: 3,
                title: 'Get Passport Photos',
                description: 'Obtain two (2) identical 2x2 inch passport-style photographs. These can be taken at CVS, Walgreens, FedEx Office, UPS Store, or most photo centers. Photos must be recent and meet passport photo standards.',
                tips: ['Wear professional attire', 'Plain white or off-white background', 'No hats or sunglasses']
              },
              {
                step: 4,
                title: 'Secure Your $5,000 Surety Bond',
                description: 'Purchase a $5,000 surety bond from a licensed surety company. This bond protects the public and ensures faithful performance of your duties. The bond typically costs $100-150 annually with no credit check required.',
                tips: ['Shop multiple providers for best rates', 'Get bond dated for hearing date', 'Keep bond certificate safe']
              },
              {
                step: 5,
                title: 'Complete and File Application',
                description: 'Fill out the application completely and accurately. Submit it to the county court clerk along with your photos, bond certificate, and required fees. The clerk will assign a case number and schedule your hearing.',
                tips: ['Double-check all information', 'Bring photo ID', 'Get receipt for all payments']
              },
              {
                step: 6,
                title: 'Publish Legal Notice',
                description: 'Within 10 days of filing, you must publish notice of your application in a legal newspaper in the county where you are applying. The notice must run once, at least 20 days before your hearing date.',
                tips: ['The Journal Record is commonly used', 'Keep proof of publication', 'Factor in publication costs']
              },
              {
                step: 7,
                title: 'Wait for Posting Period',
                description: 'The court clerk will post notice of your application for 30 days. During this time, the District Attorney, Sheriff, and Oklahoma State Bureau of Investigation are notified. Citizens may file written protests.',
                tips: ['Use this time to study process serving laws', 'Prepare your business plan', 'Research insurance options']
              },
              {
                step: 8,
                title: 'Attend Hearing (If Required)',
                description: 'If no protests are filed and you appear qualified, the judge may grant your license without requiring your presence. If protests exist, a hearing will be scheduled within 60 days where you may present evidence.',
                tips: ['Dress professionally if attending', 'Bring all original documents', 'Be prepared to answer questions']
              },
              {
                step: 9,
                title: 'Receive Your License',
                description: 'Upon approval, you will receive your official statewide process server license card with your photo. This license authorizes you to serve process in all 77 Oklahoma counties. Your first license is valid for one year.',
                tips: ['Carry license while on duty', 'Make copies for your records', 'Note renewal date']
              }
            ].map((item) => (
              <div key={item.step} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="flex items-start gap-4 p-6">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-700 mb-4">{item.description}</p>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <span className="text-sm font-semibold text-slate-900">Pro Tips:</span>
                      <ul className="mt-2 space-y-1">
                        {item.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fees and Costs */}
        <section id="fees-costs" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-blue-600" />
            Licensing Fees & Costs Breakdown
          </h2>
          
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
              <h3 className="font-semibold text-slate-900">Tulsa County First-Time License Costs</h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 font-semibold text-slate-900">Fee Item</th>
                    <th className="text-right py-3 font-semibold text-slate-900">Amount</th>
                    <th className="text-left py-3 pl-6 font-semibold text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {[
                    { item: 'Statewide License Fee', amount: '$150.00', notes: 'Required by 12 O.S. § 158.1' },
                    { item: 'Court Filing Fees', amount: '~$179.14', notes: 'Docketing, posting, mailing fees' },
                    { item: 'Publication Fee', amount: '$35.00', notes: 'Legal newspaper notice' },
                    { item: 'Surety Bond (Annual)', amount: '$100-150', notes: '$5,000 bond premium' },
                    { item: 'Passport Photos', amount: '$15-25', notes: 'Two 2x2 photos' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="py-3">{row.item}</td>
                      <td className="text-right py-3 font-medium">{row.amount}</td>
                      <td className="py-3 pl-6 text-sm text-slate-500">{row.notes}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 font-semibold">
                    <td className="py-4">Total Estimated Cost</td>
                    <td className="text-right py-4 text-blue-600">$479-539</td>
                    <td className="py-4 pl-6 text-sm text-slate-500">First year only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h4 className="font-semibold text-green-900 mb-3">Renewal Costs (Every 3 Years)</h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li className="flex justify-between">
                  <span>License Renewal Fee:</span>
                  <span className="font-medium">$15.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Court Filing Fees:</span>
                  <span className="font-medium">~$214.14</span>
                </li>
                <li className="flex justify-between">
                  <span>Surety Bond (3-year):</span>
                  <span className="font-medium">$250-400</span>
                </li>
                <li className="flex justify-between border-t border-green-200 pt-2 mt-2">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">~$479-629</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h4 className="font-semibold text-amber-900 mb-3">Additional Costs to Consider</h4>
              <ul className="space-y-2 text-amber-800 text-sm">
                <li>• Errors & Omissions Insurance ($500-1,500/year)</li>
                <li>• General Liability Insurance ($400-800/year)</li>
                <li>• Vehicle expenses and mileage</li>
                <li>• Process serving equipment</li>
                <li>• Professional association memberships</li>
                <li>• Continuing education courses</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> Fees vary by county. Oklahoma County and other counties may have 
              different fee structures. Always contact your local court clerk for the most current 
              fee schedule before applying.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            Timeline: Application to First Serve
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            <div className="space-y-8">
              {[
                { day: 'Day 1', title: 'Submit Application', desc: 'File completed application with court clerk' },
                { day: 'Day 1-3', title: 'Publish Notice', desc: 'Legal notice published in county newspaper' },
                { day: 'Day 1-30', title: 'Posting Period', desc: 'Mandatory 30-day public notice period' },
                { day: 'Day 30-35', title: 'Background Review', desc: 'OSBI and court review of application' },
                { day: 'Day 35-45', title: 'Hearing/Approval', desc: 'Judge reviews and approves application' },
                { day: 'Day 45-60', title: 'License Issued', desc: 'Receive official license card' },
                { day: 'Day 60+', title: 'First Serve', desc: 'Begin serving process statewide' },
              ].map((item, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  <div className="ml-12 bg-white border border-slate-200 rounded-lg p-4 flex-1">
                    <span className="text-sm font-semibold text-blue-600">{item.day}</span>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-5 bg-slate-50 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Typical Total Timeline: 45-60 Days</h4>
            <p className="text-slate-600 text-sm">
              The mandatory 30-day posting period is the longest component. Delays can occur if 
              protests are filed, background check issues arise, or court schedules are backed up. 
              Plan accordingly and apply well before you intend to begin serving.
            </p>
          </div>
        </section>

        {/* Background Check */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            Background Check Process
          </h2>
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
            <p className="text-slate-700 mb-6">
              As part of the licensing process, the Oklahoma State Bureau of Investigation (OSBI) 
              conducts a background check on all process server applicants. This ensures that only 
              qualified individuals of good moral character receive licenses.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">What OSBI Checks</h4>
                <ul className="space-y-2">
                  {[
                    'Criminal history (Oklahoma and national)',
                    'Sex offender registry status',
                    'Violent crime convictions',
                    'Pending criminal charges',
                    'Warrant status',
                    'Previous license revocations'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Automatic Disqualifiers</h4>
                <ul className="space-y-2">
                  {[
                    'Violent felony convictions (57 O.S. § 571)',
                    'Sex offender registration requirements',
                    'Previous license revocation (5-year ban)',
                    'Second revocation (lifetime ban)',
                    'Current incarceration',
                    'Active parole for disqualifying offense'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-red-700 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Surety Bond */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            Surety Bond Requirements
          </h2>
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
            <div className="prose max-w-none mb-6">
              <p className="text-slate-700">
                Oklahoma law requires all licensed process servers to maintain a <strong>$5,000 surety bond</strong> 
                under 12 O.S. § 158.1. This bond runs to the State of Oklahoma and ensures faithful 
                performance of your duties as an officer of the court.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-50 rounded-lg p-5 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">$5,000</div>
                <div className="text-sm text-slate-600">Required Bond Amount</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">$100-150</div>
                <div className="text-sm text-slate-600">Typical Annual Premium</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">1-3 Years</div>
                <div className="text-sm text-slate-600">Bond Term Options</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-5">
              <h4 className="font-semibold text-blue-900 mb-3">What the Bond Covers</h4>
              <p className="text-blue-800 text-sm mb-3">
                The surety bond protects clients and the public against financial losses resulting from:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-blue-800">
                <li>• Failure to properly serve documents</li>
                <li>• Misrepresentation of service</li>
                <li>• Loss or mishandling of legal documents</li>
                <li>• Violations of Oklahoma process serving laws</li>
                <li>• Fraudulent or unethical conduct</li>
                <li>• Failure to file proof of service</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-slate-900 mb-3">Where to Obtain Your Bond</h4>
              <p className="text-slate-600 text-sm mb-3">
                Surety bonds can be purchased from licensed surety companies, insurance agencies, 
                or online bond providers. Most offer instant approval with no credit check required 
                for process server bonds.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Surety1.com', 'BondsExpress.com', 'LanceSuretyBonds.com', 'AshtonAgency.com'].map((provider) => (
                  <span key={provider} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                    {provider}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insurance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            Insurance Recommendations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Errors & Omissions (E&O) Insurance
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                Protects against claims of negligence, mistakes, or failure to perform professional duties. 
                Highly recommended for all process servers.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between text-slate-700">
                  <span>Typical Coverage:</span>
                  <span className="font-medium">$100,000 - $1,000,000</span>
                </li>
                <li className="flex justify-between text-slate-700">
                  <span>Annual Premium:</span>
                  <span className="font-medium">$500 - $1,500</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                General Liability Insurance
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                Covers bodily injury and property damage claims that may occur while performing 
                your duties. Essential for mobile professionals.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between text-slate-700">
                  <span>Typical Coverage:</span>
                  <span className="font-medium">$1,000,000 per occurrence</span>
                </li>
                <li className="flex justify-between text-slate-700">
                  <span>Annual Premium:</span>
                  <span className="font-medium">$400 - $800</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 text-sm">
              <strong>Important:</strong> While insurance is not legally required for Oklahoma process 
              servers, it is strongly recommended. Many law firms and corporate clients require 
              process servers to carry E&O insurance before they will assign work. Consider insurance 
              an essential business investment.
            </p>
          </div>
        </section>

        {/* Training */}
        <section id="training" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            Training Programs & Education
          </h2>
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
            <p className="text-slate-700 mb-6">
              While Oklahoma does not require formal training or education to become a licensed 
              process server, investing in professional development significantly improves your 
              success rate, reduces liability risks, and enhances your credibility with clients.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Recommended Training Topics</h4>
                <ul className="space-y-2">
                  {[
                    'Oklahoma Rules of Civil Procedure',
                    'Proper service methods and techniques',
                    'Document handling and chain of custody',
                    'Skip tracing and locate techniques',
                    'Affidavit preparation and filing',
                    'Safety and conflict de-escalation',
                    'Ethics and professional standards',
                    'Technology tools for process servers'
                  ].map((topic, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Training Resources</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'NAPPS Training', desc: 'National Association of Professional Process Servers' },
                    { name: 'ServeNow Academy', desc: 'Online process server training courses' },
                    { name: 'State Associations', desc: 'Oklahoma Judicial Process Servers' },
                    { name: 'CLEET Catalog', desc: 'Continuing education for private security' },
                    { name: 'Local Workshops', desc: 'County bar association seminars' },
                  ].map((resource, i) => (
                    <li key={i} className="text-sm">
                      <span className="font-medium text-slate-900">{resource.name}</span>
                      <p className="text-slate-500">{resource.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-5">
              <h4 className="font-semibold text-green-900 mb-2">Continuing Education Benefits</h4>
              <p className="text-green-800 text-sm">
                While not required for license renewal, continuing education helps you stay current 
                with changes in Oklahoma law, learn new techniques, and network with other professionals. 
                Many successful process servers attend annual conferences and complete 8-16 hours of 
                training per year.
              </p>
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section id="equipment" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-600" />
            Essential Equipment & Tools
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Documentation',
                items: ['Digital camera or smartphone', 'Video recording device', 'GPS device or app', 'Notary stamp (optional)']
              },
              {
                category: 'Office Supplies',
                items: ['Laptop or tablet', 'Printer/scanner', 'Filing system', 'Secure document storage']
              },
              {
                category: 'Field Equipment',
                items: ['Reliable vehicle', 'Phone charger/power bank', 'Flashlight', 'Weather-appropriate gear']
              },
              {
                category: 'Software',
                items: ['Process serving software', 'Skip tracing tools', 'GPS tracking app', 'Accounting software']
              },
              {
                category: 'Safety',
                items: ['Pepper spray (legal)', 'Personal alarm', 'First aid kit', 'Emergency contacts list']
              },
              {
                category: 'Professional',
                items: ['Business cards', 'Professional attire', 'Badge/ID holder', 'Client contracts']
              }
            ].map((cat, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="font-semibold text-slate-900 mb-3">{cat.category}</h4>
                <ul className="space-y-1">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Business Startup */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-600" />
            Starting Your Process Serving Business
          </h2>
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Business Structure Options</h4>
                <div className="space-y-4">
                  {[
                    { name: 'Sole Proprietorship', desc: 'Simplest structure, personal liability', best: 'Solo operators starting out' },
                    { name: 'LLC', desc: 'Liability protection, flexible taxation', best: 'Growing businesses with employees' },
                    { name: 'S-Corporation', desc: 'Tax advantages, more formal structure', best: 'Established businesses with significant income' },
                  ].map((structure, i) => (
                    <div key={i} className="bg-slate-50 rounded-lg p-4">
                      <div className="font-medium text-slate-900">{structure.name}</div>
                      <p className="text-sm text-slate-600">{structure.desc}</p>
                      <p className="text-xs text-blue-600 mt-1">Best for: {structure.best}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Marketing Your Services</h4>
                <ul className="space-y-3">
                  {[
                    'Build professional website with online ordering',
                    'List on process server directories (ServeNow, NAPPS)',
                    'Network with local attorneys and law firms',
                    'Join Oklahoma State Bar Association events',
                    'Create social media presence',
                    'Develop relationships with court reporters',
                    'Offer competitive rates and excellent service',
                    'Request client testimonials and referrals'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-5 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Setting Your Rates</h4>
              <p className="text-blue-800 text-sm mb-3">
                Oklahoma process server rates vary by location and service type. Typical rates include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white rounded p-3 text-center">
                  <div className="font-bold text-slate-900">$60-100</div>
                  <div className="text-slate-500">Standard Service</div>
                </div>
                <div className="bg-white rounded p-3 text-center">
                  <div className="font-bold text-slate-900">$100-150</div>
                  <div className="text-slate-500">Rush Service</div>
                </div>
                <div className="bg-white rounded p-3 text-center">
                  <div className="font-bold text-slate-900">$150-250</div>
                  <div className="text-slate-500">Same-Day Service</div>
                </div>
                <div className="bg-white rounded p-3 text-center">
                  <div className="font-bold text-slate-900">$0.50-0.70</div>
                  <div className="text-slate-500">Per Mile</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: 'How long does it take to become a licensed process server in Oklahoma?',
                answer: 'The typical timeline is 45-60 days from application submission to receiving your license. This includes the mandatory 30-day posting period, publication requirements, background verification, and court processing time. Delays can occur if protests are filed or background issues arise.'
              },
              {
                question: 'What is the total cost to become a process server in Oklahoma?',
                answer: 'First-time applicants in Tulsa County can expect to pay approximately $479-539 total: $150 statewide license fee, court filing fees (~$214), $35 publication fee, $100-150 for the surety bond premium, and $15-25 for passport photos. Additional costs include insurance, equipment, and business setup.'
              },
              {
                question: 'Do I need CLEET certification to be a process server in Oklahoma?',
                answer: 'No, CLEET certification is not required for process servers in Oklahoma. Process servers are licensed through the county District Court under 12 O.S. § 158.1, not through CLEET. CLEET handles law enforcement officers, private investigators, and security guards. There is no examination requirement for process server licensing.'
              },
              {
                question: 'Can a felon become a process server in Oklahoma?',
                answer: 'Persons convicted of violent crimes as defined in 57 O.S. § 571 or crimes requiring sex offender registration are prohibited from obtaining a process server license in Oklahoma. Other felony convictions are evaluated on a case-by-case basis during the application review process. The court considers the nature of the offense, time elapsed, and evidence of rehabilitation.'
              },
              {
                question: 'Is there a test or exam required for Oklahoma process server licensing?',
                answer: 'No, Oklahoma does not require a written examination for process server licensing. Applicants must demonstrate good moral character, mental fitness, and meet all statutory requirements under 12 O.S. § 158.1. However, many process servers choose to complete training courses to improve their knowledge and professional skills.'
              },
              {
                question: 'Can I serve process statewide with an Oklahoma license?',
                answer: 'Yes, Oklahoma issues statewide process server licenses. Once licensed in any Oklahoma county, you are authorized to serve process in all 77 counties throughout the state. Your license card will indicate statewide authority. You do not need separate licenses for each county.'
              },
              {
                question: 'How often do I need to renew my process server license?',
                answer: 'First-time licenses are valid for one year from the date of issuance. After the initial year, renewals are valid for three years each. Renewal fees are significantly lower than initial application fees. You must maintain your $5,000 surety bond continuously to keep your license active.'
              },
              {
                question: 'What happens if someone protests my application?',
                answer: 'If a citizen files a written protest against your application, the court will schedule a hearing within 60 days. You will have the opportunity to present evidence and testimony supporting your qualifications. The judge will then decide whether to grant or deny your license based on the evidence presented.'
              },
              {
                question: 'Can I serve process while my application is pending?',
                answer: 'No, you cannot serve process until you receive your official license. Serving process without a valid license is a misdemeanor offense under Oklahoma law. The only exceptions are for Oklahoma attorneys, court clerks, and sheriff\'s deputies serving within their own counties.'
              },
              {
                question: 'What insurance do I need as a process server?',
                answer: 'While not legally required, Errors & Omissions (E&O) insurance and General Liability insurance are strongly recommended. E&O insurance ($500-1,500/year) protects against professional negligence claims. General Liability ($400-800/year) covers bodily injury and property damage. Many law firms require process servers to carry E&O insurance.'
              },
              {
                question: 'How much can I earn as a process server in Oklahoma?',
                answer: 'Earnings vary based on location, volume, and service types. Entry-level process servers typically earn $25,000-35,000 annually working part-time. Full-time experienced servers in major markets like Tulsa or Oklahoma City can earn $50,000-80,000+ annually. Corporate and legal clients typically pay higher rates than individual clients.'
              },
              {
                question: 'What are the risks of being a process server?',
                answer: 'Process serving involves some inherent risks including confrontational recipients, travel hazards, and potential liability for improper service. Mitigate risks through proper training, safety awareness, appropriate insurance coverage, and following all legal requirements for service of process. Never put yourself in dangerous situations.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-5 text-slate-700">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog/become-a-process-server-oklahoma/" 
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">Getting Started Guide</h4>
              <p className="text-slate-600 text-sm">
                Read our introductory blog post for a quick overview of becoming a process server in Oklahoma.
              </p>
            </Link>
            <Link 
              href="/oklahoma-process-server-laws/" 
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">Oklahoma Process Server Laws</h4>
              <p className="text-slate-600 text-sm">
                Detailed breakdown of Oklahoma statutes governing process serving, including 12 O.S. § 158.1 and § 2004.
              </p>
            </Link>
            <Link 
              href="/process-server-tulsa/" 
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">Tulsa Process Server Services</h4>
              <p className="text-slate-600 text-sm">
                Learn about professional process serving services in Tulsa County and surrounding areas.
              </p>
            </Link>
            <Link 
              href="/resources/process-server-forms-oklahoma/" 
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">Process Server Forms</h4>
              <p className="text-slate-600 text-sm">
                Download essential forms including Return of Service affidavits and proof of service templates.
              </p>
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help With Your Application?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              At Just Legal Solutions, we have guided dozens of aspiring process servers through the 
              Oklahoma licensing process. Contact us for personalized assistance and advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:539-367-6832" 
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (539) 367-6832
              </a>
              <Link 
                href="/contact/" 
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white border border-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="border-t border-slate-200 pt-12">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-10 h-10 text-slate-400" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">About the Author</h3>
              <p className="text-slate-700 font-medium">Joseph Iannazzi</p>
              <p className="text-slate-500 text-sm mb-3">Licensed Process Server | NAPPS Member</p>
              <p className="text-slate-600 text-sm">
                Joseph Iannazzi is the founder of Just Legal Solutions and a licensed process server 
                in Oklahoma (License: Licensed). With over a decade of experience serving legal 
                documents throughout Oklahoma's 77 counties, he has helped hundreds of attorneys, 
                businesses, and individuals with their process serving needs. Joseph is a member of 
                the National Association of Professional Process Servers (NAPPS) and is committed 
                to maintaining the highest professional standards in the industry.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Legal Disclaimer
          </h4>
          <p className="text-slate-600 text-sm">
            This guide is provided for educational and informational purposes only and does not 
            constitute legal advice. Oklahoma statutes and court procedures are subject to change. 
            Always consult with the Oklahoma Administrative Office of the Courts, your local county 
            court clerk, or a qualified attorney for the most current information and specific legal 
            guidance. Just Legal Solutions makes no representations or warranties regarding the 
            accuracy or completeness of this information. Requirements may vary by county and are 
            subject to judicial discretion.
          </p>
        </section>

      </article>
          <div className="mt-12">
            <AuthorBox />
          </div>
    </main>
  );
}
