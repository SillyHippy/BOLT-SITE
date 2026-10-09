import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileText, 
  Download, 
  ClipboardCheck, 
  Search, 
  Receipt, 
  Users, 
  MapPin, 
  Database,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Phone,
  Mail,
  Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oklahoma Process Server Forms & Templates | Free Downloads',
  description: 'Download blank and fillable Oklahoma process server affidavits, declarations, field sheets, attempt logs, and client intake forms. No signup required.',
  keywords: 'affidavit of service template oklahoma, process server forms oklahoma, declaration of service template, fillable affidavit PDF, client intake forms, field sheet template',
  authors: [{ name: 'Joseph Iannazzi' }],
  openGraph: {
    url: 'https://justlegalsolutions.org/oklahoma-process-server-forms-templates',
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions — professional process serving in Oklahoma',
    }],
    title: 'Oklahoma Process Server Forms & Templates | Free Downloads',
    description: 'Professional forms and templates for Oklahoma process servers. Download affidavit of service, proof of service, and more.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Process Server Forms & Templates | Free Downloads',
    description: 'Download blank and fillable Oklahoma process server affidavits, declarations, field sheets, attempt logs, and client intake forms. No signup required.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/oklahoma-process-server-forms-templates',
  },
};

// JSON-LD Schema Markup
const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://justlegalsolutions.org/oklahoma-process-server-forms-templates/#webpage',
      url: 'https://justlegalsolutions.org/oklahoma-process-server-forms-templates/',
      name: 'Oklahoma Process Server Forms & Templates | Free Downloads',
      description: 'Download blank affidavits and declarations, fillable PDFs, field sheets and attempt logs.',
      isPartOf: {
        '@id': 'https://justlegalsolutions.org/#website',
      },
      about: {
        '@id': 'https://justlegalsolutions.org/#organization',
      },
      author: {
        '@id': 'https://justlegalsolutions.org/#joseph-iannazzi',
      },
      datePublished: '2024-01-15',
      dateModified: '2024-01-15',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://justlegalsolutions.org/oklahoma-process-server-forms-templates/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What forms do Oklahoma process servers need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Process servers can use a field sheet and attempt log during field work, then prepare a return of service as the filing court requires. Counsel handles the showing for alternative service.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is an affidavit of service required in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, an affidavit of service (also called Return of Service) is required in Oklahoma. According to Oklahoma law, process servers must provide written proof of service that is sworn or affirmed before a notary public. This document becomes part of the court record.',
          },
        },
        {
          '@type': 'Question',
          name: 'What information must be included in an Oklahoma affidavit of service?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An Oklahoma affidavit of service must include: case number and court information, names of parties, description of documents served, date and time of service, location of service, name and description of person served, method of identification, any special circumstances, server\'s signature, and notarization.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a diligent search affidavit in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A diligent search affidavit documents the efforts made to locate a defendant when personal service cannot be accomplished. In Oklahoma, this affidavit is required when seeking court approval for service by publication under § 2004(C)(3). Residential substituted service under § 2004(C)(1) at a dwelling with a resident 15+ does not require a fixed number of prior attempts, though documentation supports any challenged service.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long must Oklahoma process servers keep records?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Retain accurate records of service attempts, documents, and outcomes; follow the requirements applicable to your license and court.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use digital forms and electronic signatures in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Oklahoma accepts electronic signatures on affidavits of service under the Oklahoma Electronic Transactions Act. A sworn affidavit requires notarization; an unsworn declaration requires the appropriate penalty-of-perjury statement. Some courts have specific electronic submission requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I download free Oklahoma process server forms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Download blank and fillable affidavits, attempt logs, client intake forms, and field sheets from Just Legal Solutions at /downloads.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do Oklahoma process server forms need to be notarized?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A sworn affidavit requires a notary. An unsworn declaration uses a penalty-of-perjury closing and may have different acceptance rules. Some courts have additional requirements.',
          },
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://justlegalsolutions.org/#joseph-iannazzi',
      name: 'Joseph Iannazzi',
      jobTitle: 'Licensed Process Server',
      description: 'Licensed Oklahoma Process Server with CLEET Licensed Professional',
      worksFor: {
        '@id': 'https://justlegalsolutions.org/#organization',
      },
    },
  ],
};

// Honest form library: every card opens its own document or the matching generator.
const formCategories = [
  { id: 'affidavit-service', title: 'Affidavits & Declarations', icon: <FileText className="w-8 h-8 text-blue-600" />, description: 'Blank court-return templates. Verify the filing court accepts your selected form.', forms: [
    { name: 'Affidavit of Service', description: 'Sworn return with notary block', filename: 'JLS-Blank-Affidavit-of-Service-v1.0.pdf' },
    { name: 'Declaration of Service', description: 'Unsworn return; verify acceptance with the filing court', filename: 'JLS-Blank-Declaration-of-Service-v1.0.pdf' },
    { name: 'Affidavit of Non-Service', description: 'Sworn return of unsuccessful service attempts', filename: 'JLS-Blank-Affidavit-of-Non-Service-v1.0.pdf' },
    { name: 'Declaration of Non-Service', description: 'Unsworn non-service return; verify acceptance', filename: 'JLS-Blank-Declaration-of-Non-Service-v1.0.pdf' },
    { name: 'Fillable Affidavit of Service', description: 'Type directly into this PDF using a compatible viewer', filename: 'JLS-Fillable-Affidavit-of-Service-v1.0.pdf' },
  ] },
  { id: 'field-sheets', title: 'Field & Attempt Forms', icon: <MapPin className="w-8 h-8 text-red-600" />, description: 'Prepare before dispatch and document actual field work.', forms: [
    { name: 'Blank Field Sheet', description: 'Print-ready street sheet', filename: 'JLS-Blank-Field-Sheet-v1.0.pdf' },
    { name: 'Fillable Field Sheet', description: 'Type directly into this PDF', filename: 'JLS-Fillable-Field-Sheet-v1.0.pdf' },
    { name: 'Service Attempt Log', description: 'Record each date, time, and outcome', filename: 'JLS-Service-Attempt-Log-v1.0.pdf' },
    { name: 'GPS Service Log', description: 'Document location and timestamp for service attempts', filename: 'JLS-GPS-Service-Log-v1.0.pdf' },
  ] },
  { id: 'client-intake', title: 'Intake & Other Records', icon: <Users className="w-8 h-8 text-teal-600" />, description: 'Only documents actually available in the download library.', forms: [
    { name: 'Client Intake Form', description: 'Case and client information', filename: 'JLS-Client-Intake-Form-v1.0.pdf' },
    { name: 'Skip Trace Checklist', description: 'A checklist, not an attorney\'s diligent-search affidavit', filename: 'JLS-Skip-Trace-Checklist-v1.0.pdf' },
    { name: 'Process Server Safety Checklist', description: 'Field safety reference', filename: 'JLS-Server-Safety-Checklist-v1.0.pdf' },
    { name: 'Chain of Custody Form', description: 'Document pickup and handoff', filename: 'JLS-Chain-Of-Custody-Form-v1.0.pdf' },
  ] },
];

// FAQ data
const faqs = [
  {
    question: 'What forms do Oklahoma process servers need?',
    answer: 'Process servers can use a field sheet and attempt log during field work, and prepare an affidavit or declaration afterward as the court requires. The hiring attorney handles motions for alternative service and the diligence showing.',
  },
  {
    question: 'Is an affidavit of service required in Oklahoma?',
    answer: 'Yes, an affidavit of service (also called Return of Service) is required in Oklahoma. According to Oklahoma law, process servers must provide written proof of service that is sworn or affirmed before a notary public. This document becomes part of the court record and is essential for the legal proceeding to move forward. Without a properly executed affidavit, the service may be challenged and potentially invalidated.',
  },
  {
    question: 'What information must be included in an Oklahoma affidavit of service?',
    answer: 'An Oklahoma affidavit of service must include: case number and court information, names of parties involved, description of documents served, exact date and time of service, location of service (full address), name and physical description of person served, method used to verify identity, any special circumstances or observations, process server\'s signature, and notarization. Additional requirements may apply depending on the type of service and local court rules.',
  },
  {
    question: 'What is a diligent search affidavit in Oklahoma?',
    answer: 'A diligent-search affidavit is part of the attorney’s court filing when requesting certain alternative methods. Servers should provide factual attempt notes and investigation results to counsel. The linked skip trace file is only a checklist, not a sworn affidavit.',
  },
  {
    question: 'How long must Oklahoma process servers keep records?',
    answer: 'Keep complete, accurate service and attempt records. Check the rules that apply to your license, case, and court before choosing a retention period; this template library does not prescribe one.',
  },
  {
    question: 'Can I use digital forms and electronic signatures in Oklahoma?',
    answer: 'Yes, Oklahoma accepts electronic signatures on affidavits of service under the Oklahoma Electronic Transactions Act. A sworn affidavit requires notarization; an unsworn declaration requires the appropriate penalty-of-perjury statement. Some courts have specific electronic submission requirements. Always verify with the specific court where the case is filed, as acceptance of electronic documents can vary by jurisdiction within Oklahoma.',
  },
  {
    question: 'Where can I download free Oklahoma process server forms?',
    answer: 'Free Oklahoma process server forms are available for download from Just Legal Solutions. Our library includes blank and fillable affidavits, attempt logs, client intake forms, and field sheets. All forms are designed to meet Oklahoma legal requirements and are regularly updated to reflect current standards.',
  },
  {
    question: 'Do Oklahoma process server forms need to be notarized?',
    answer: 'A sworn affidavit requires notarization. A declaration uses an unsworn penalty-of-perjury closing. Confirm which document type the filing court accepts in your case.',
  },
  {
    question: 'What is the difference between an affidavit of service and proof of service?',
    answer: 'While often used interchangeably, there is a technical distinction. An affidavit of service is a sworn statement notarized and filed with the court, making it a formal legal document. Proof of service is a broader term that can include the affidavit plus any supporting documentation such as photographs, GPS records, or witness statements. Both serve to document that service was completed according to legal requirements.',
  },
  {
    question: 'Are these forms acceptable in all Oklahoma counties?',
    answer: 'These are general-purpose blank templates, not an assurance that a particular filing court will accept them. However, some counties may have specific local rules or formatting preferences. We recommend verifying with the court clerk in the county where service will be filed if you have any concerns about form acceptance. Tulsa County, Oklahoma County, and Cleveland County may have specific requirements.',
  },
];

export default function OklahomaProcessServerFormsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-blue-300" />
              <span className="text-blue-200 text-sm font-medium uppercase tracking-wide">
                Free Professional Resources
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Oklahoma Process Server Forms & Templates
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Download professional, court-ready forms and templates designed specifically for Oklahoma process servers. From affidavits of service to client intake forms, everything you need to run a compliant and efficient operation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#form-library"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Download className="w-5 h-5" />
                Browse Forms
              </Link>
              <Link
                href="/resources/"
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-600"
              >
                <ExternalLink className="w-5 h-5" />
                All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Essential Forms for Oklahoma Process Servers
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Operating as a professional process server in Oklahoma requires maintaining proper documentation at every stage of the service process. From the moment you receive a service request to the final filing of your return of service, having the right forms ensures compliance with state law, protects your professional standing, and provides the documentation courts require.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Just Legal Solutions, we understand the challenges process servers face in maintaining accurate records while working efficiently in the field. That is why we have created this comprehensive library of free, downloadable forms and templates specifically designed for Oklahoma process servers. Check the filing court’s current requirements before using a template.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you are just starting your process serving career or are an experienced professional looking to streamline your documentation, these forms will help you maintain the professional standards that clients and courts expect.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                What You Will Find Here
              </h3>
              <ul className="space-y-3">
                {[
                  'Court-ready affidavit of service templates',
                  'Blank PDF and editable DOCX forms',
                  'A skip trace checklist (not a court affidavit)',
                  'Fillable PDF forms for offline use',
                  'Client intake and service request forms',
                  'Field documentation sheets',
                  'Attempt and GPS documentation logs',
                  'Regular updates to reflect legal changes',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Proper Forms Matter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Proper Documentation Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Legal Compliance
              </h3>
              <p className="text-gray-700">
                Oklahoma law requires specific documentation for service of process. Proper forms ensure you meet all statutory requirements and protect the validity of your service.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Professional Credibility
              </h3>
              <p className="text-gray-700">
                Well-documented service builds trust with attorneys, courts, and clients. Professional forms demonstrate your commitment to quality work.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dispute Protection
              </h3>
              <p className="text-gray-700">
                Comprehensive documentation protects you if service is ever challenged. Detailed records can be the difference between a successful defense and professional liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Library Section */}
      <section id="form-library" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Form Library
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse our comprehensive collection of Oklahoma process server forms. All templates are free to download and use in your professional practice.
            </p>
          </div>

          <div className="space-y-12">
            {formCategories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-700">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {category.forms.map((form, formIndex) => (
                    <div
                      key={formIndex}
                      className="bg-white rounded-lg p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {form.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">
                            {form.description}
                          </p>
                        </div>
                        <Link
                          href={`/downloads/${form.filename}`}
                          className="flex-shrink-0 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          <Download className="w-4 h-4" />
                          PDF
                        </Link>
                        {form.filename.startsWith('JLS-Blank-') && (
                          <Link href={`/downloads/${form.filename.replace(/\.pdf$/, '.docx')}`} className="ml-2 text-blue-600 text-sm font-medium hover:underline">DOCX</Link>
                        )}
                        {form.filename.includes('Affidavit') || form.filename.includes('Declaration') ? (
                          <Link href="/affidavit-of-service" className="ml-2 text-blue-600 text-sm font-medium hover:underline">Generate online</Link>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affidavit of Service Deep Dive */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Understanding the Affidavit of Service
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                The affidavit of service, also known as the Return of Service, is the most critical document in the process serving profession. This sworn statement provides official proof that legal documents were properly delivered to the intended recipient according to Oklahoma law.
              </p>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                The server who made the service should describe what actually happened. A sworn affidavit requires a notary; an unsworn declaration has different execution language and may not be accepted in every matter. Confirm the filing court’s requirements before submitting.
              </p>
              <h3 className="text-xl font-semibold mb-4">Required Elements</h3>
              <ul className="space-y-2 text-blue-100">
                {[
                  'Full case caption including court name and case number',
                  'Names of all parties to the action',
                  'Description of documents served',
                  'Exact date and time of service',
                  'Complete address where service occurred',
                  'Name and physical description of person served',
                  'Method used to verify recipient\'s identity',
                  'Process server\'s signature and contact information',
                  'Notary jurat and seal for a sworn affidavit',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-300 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Common Mistakes to Avoid
              </h3>
              <div className="space-y-4">
                {[
                  {
                    mistake: 'Incomplete recipient description',
                    solution: 'Always include age estimate, height, weight, hair color, and distinguishing features',
                  },
                  {
                    mistake: 'Vague location description',
                    solution: 'Provide complete address including apartment number, floor, or suite',
                  },
                  {
                    mistake: 'Missing execution block',
                    solution: 'Use a notary for a sworn affidavit; never backdate any document',
                  },
                  {
                    mistake: 'Incorrect case information',
                    solution: 'Double-check case number and party names against the original documents',
                  },
                  {
                    mistake: 'Delayed filing',
                    solution: 'File the affidavit promptly, typically within required timeframes',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-blue-700 rounded-lg p-4">
                    <p className="font-semibold text-red-300 mb-1">
                      ✗ {item.mistake}
                    </p>
                    <p className="text-blue-100 text-sm">
                      ✓ {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diligent Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Diligent Search Requirement
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When a defendant cannot be found, document your actual field attempts and give the results to the hiring attorney. Counsel decides whether to seek alternative service and what sworn showing the court requires.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Do not put unverified database claims on a return of service. The field sheet and attempt log help record the date, time, location, observation, and outcome of each physical visit.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Possible Research Leads for Counsel
              </h3>
              <ol className="space-y-3 text-gray-700">
                {[
                  'Verify address through postal database and property records',
                  'Check voter registration and motor vehicle records',
                  'Contact neighbors at last known address',
                  'Attempt service at known workplace or employer',
                  'Search online directories and social media',
                  'Contact family members or known associates',
                  'Check with utility companies',
                  'Review court records for other pending cases',
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-amber-600" />
                <h3 className="text-xl font-bold text-amber-900">
                  Important Note
                </h3>
              </div>
              <p className="text-amber-800 mb-4">
                Counsel is responsible for the court filing. Your field records should be factual, dated, and limited to the work you actually performed.
              </p>
              <p className="text-amber-800 mb-4">
                Maintain dated records of attempts and outcomes. They may be important if service is challenged.
              </p>
              <p className="text-amber-800">
                Consult with the attorney who hired you if you encounter difficulties locating the defendant. They may have additional information or resources to assist with the search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Use These Forms
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Download',
                description: 'Click the download link for any form to save the PDF to your device. All forms are free and unrestricted.',
              },
              {
                step: '2',
                title: 'Customize',
                description: 'Add your business name, logo, and contact information to personalize the forms for your operation.',
              },
              {
                step: '3',
                title: 'Print or Digital',
                description: 'Use printed forms in the field or fill digitally on a tablet. Choose the method that works best for your workflow.',
              },
              {
                step: '4',
                title: 'Stay Updated',
                description: 'Check back periodically for updated versions. We revise forms to reflect changes in Oklahoma law and court requirements.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3
                  className="text-lg font-semibold text-gray-900 mb-3"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-gray-700" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/oklahoma-process-server-licensing/"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Licensing Guide
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete guide to obtaining and maintaining your Oklahoma process server license through CLEET.
              </p>
              <span className="text-blue-600 font-medium text-sm">
                Learn more →
              </span>
            </Link>
            <Link
              href="/oklahoma-process-server-training/"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Training Programs
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Find approved training programs and continuing education opportunities in Oklahoma.
              </p>
              <span className="text-blue-600 font-medium text-sm">
                Learn more →
              </span>
            </Link>
            <Link
              href="/oklahoma-process-server-requirements/"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                State Requirements
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Detailed overview of all Oklahoma requirements for process servers including fees and deadlines.
              </p>
              <span className="text-blue-600 font-medium text-sm">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional Process Serving Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Just Legal Solutions provides reliable, professional process serving throughout Oklahoma. Licensed, bonded, and committed to excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/request-service/"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <ClipboardCheck className="w-5 h-5" />
              Request Service
            </Link>
            <a
              href="tel:539-367-6832"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-600"
            >
              <Phone className="w-5 h-5" />
              (539) 367-6832
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Disclaimer</p>
              <p>
                The forms and templates provided on this page are for educational and informational purposes only. While we strive to ensure accuracy and compliance with Oklahoma law, these forms do not constitute legal advice. Laws and court requirements may change, and local jurisdictions may have specific rules. We recommend consulting with an attorney or court clerk if you have questions about specific requirements. Just Legal Solutions is not responsible for any issues arising from the use of these forms. Always verify current requirements with the appropriate court or legal authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author & Contact */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">JI</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Joseph Iannazzi</p>
                <p className="text-sm text-gray-600">
                  Licensed Oklahoma Process Server
                </p>
                <p className="text-sm text-gray-600">
                  CLEET License: Licensed
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="tel:539-367-6832"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Phone className="w-4 h-4" />
                (539) 367-6832
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Mail className="w-4 h-4" />
                info@JustLegalSolutions.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
