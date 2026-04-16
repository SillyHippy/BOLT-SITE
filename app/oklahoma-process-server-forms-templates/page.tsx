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
  description: 'Download free Oklahoma process server forms and templates. Affidavit of service, proof of service, diligent search affidavit, invoice templates, client intake forms, and field sheets. Professional forms by Joseph Iannazzi, CLEET Licensed Professional.',
  keywords: 'affidavit of service template oklahoma, process server forms oklahoma, proof of service template, diligent search affidavit oklahoma, process server invoice template, client intake forms, field sheet template',
  authors: [{ name: 'Joseph Iannazzi' }],
  openGraph: {
    title: 'Oklahoma Process Server Forms & Templates | Free Downloads',
    description: 'Professional forms and templates for Oklahoma process servers. Download affidavit of service, proof of service, and more.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/oklahoma-process-server-forms-templates/',
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
      description: 'Download free Oklahoma process server forms and templates. Affidavit of service, proof of service, diligent search affidavit, and more.',
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
            text: 'Oklahoma process servers need several essential forms including: Affidavit of Service (Return of Service), Proof of Service forms, Diligent Search Affidavit for substitute service, client intake forms, invoice templates, field sheets for documentation, and record-keeping forms for CLEET compliance.',
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
            text: 'A diligent search affidavit documents the efforts made to locate a defendant when personal service cannot be accomplished. In Oklahoma, this affidavit is required when seeking court approval for substitute service methods such as publication or service on a resident family member.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long must Oklahoma process servers keep records?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oklahoma process servers must maintain service records for a minimum of three years according to CLEET requirements. This includes affidavits of service, field notes, photographs, GPS data, and all documentation related to service attempts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use digital forms and electronic signatures in Oklahoma?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Oklahoma accepts electronic signatures on affidavits of service under the Oklahoma Electronic Transactions Act. However, the affidavit must still be properly notarized, and some courts may have specific requirements for electronic submissions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I download free Oklahoma process server forms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Free Oklahoma process server forms are available for download from Just Legal Solutions at /resources/. Forms include affidavit of service templates, proof of service forms, diligent search affidavits, invoice templates, client intake forms, and field sheets.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do Oklahoma process server forms need to be notarized?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, affidavits of service in Oklahoma must be notarized. The process server must sign the affidavit in the presence of a notary public who will administer the oath and affix their seal. Some counties may have additional requirements.',
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

// Form categories data
const formCategories = [
  {
    id: 'affidavit-service',
    title: 'Affidavit of Service Templates',
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    description: 'The cornerstone document for every service. Our affidavit of service templates comply with Oklahoma court requirements and include all mandatory fields.',
    forms: [
      {
        name: 'Standard Affidavit of Service',
        description: 'General-purpose affidavit for personal service of legal documents',
        filename: 'oklahoma-affidavit-of-service.pdf',
      },
      {
        name: 'Substitute Service Affidavit',
        description: 'For service on a family member or resident of suitable age',
        filename: 'oklahoma-substitute-service-affidavit.pdf',
      },
      {
        name: 'Service by Publication Affidavit',
        description: 'Required when serving via newspaper publication',
        filename: 'oklahoma-publication-service-affidavit.pdf',
      },
      {
        name: 'Corporate Service Affidavit',
        description: 'For service on registered agents or corporate officers',
        filename: 'oklahoma-corporate-service-affidavit.pdf',
      },
    ],
  },
  {
    id: 'proof-service',
    title: 'Proof of Service Forms',
    icon: <ClipboardCheck className="w-8 h-8 text-green-600" />,
    description: 'Documentation forms that provide evidence of successful service attempts and completions. Essential for court records and client reporting.',
    forms: [
      {
        name: 'Proof of Personal Service',
        description: 'Documents direct service on the named defendant',
        filename: 'oklahoma-proof-personal-service.pdf',
      },
      {
        name: 'Proof of Certified Mail Service',
        description: 'For service completed via certified mail with return receipt',
        filename: 'oklahoma-proof-certified-mail.pdf',
      },
      {
        name: 'Proof of Service by Posting',
        description: 'Documents service by posting at the last known address',
        filename: 'oklahoma-proof-posting-service.pdf',
      },
    ],
  },
  {
    id: 'diligent-search',
    title: 'Diligent Search Affidavits',
    icon: <Search className="w-8 h-8 text-purple-600" />,
    description: 'Required when standard service methods fail. These affidavits document your exhaustive efforts to locate defendants before requesting alternative service methods.',
    forms: [
      {
        name: 'Diligent Search Checklist',
        description: 'Comprehensive checklist of search efforts required by Oklahoma courts',
        filename: 'oklahoma-diligent-search-checklist.pdf',
      },
      {
        name: 'Diligent Search Affidavit',
        description: 'Sworn statement documenting all search attempts',
        filename: 'oklahoma-diligent-search-affidavit.pdf',
      },
      {
        name: 'Skip Trace Documentation Form',
        description: 'Record database searches and investigative efforts',
        filename: 'oklahoma-skip-trace-form.pdf',
      },
    ],
  },
  {
    id: 'invoice-templates',
    title: 'Invoice & Billing Templates',
    icon: <Receipt className="w-8 h-8 text-orange-600" />,
    description: 'Professional invoice templates designed specifically for process serving businesses. Include all necessary details for client billing and accounting.',
    forms: [
      {
        name: 'Service Invoice Template',
        description: 'Standard invoice for completed service of process',
        filename: 'oklahoma-service-invoice.pdf',
      },
      {
        name: 'Rush Service Invoice',
        description: 'Invoice template for expedited or same-day service',
        filename: 'oklahoma-rush-service-invoice.pdf',
      },
      {
        name: 'Attempt Invoice Template',
        description: 'For billing unsuccessful service attempts',
        filename: 'oklahoma-attempt-invoice.pdf',
      },
      {
        name: 'Monthly Statement Template',
        description: 'Consolidated billing for regular clients',
        filename: 'oklahoma-monthly-statement.pdf',
      },
    ],
  },
  {
    id: 'client-intake',
    title: 'Client Intake Forms',
    icon: <Users className="w-8 h-8 text-teal-600" />,
    description: 'Streamline your client onboarding with professional intake forms that capture all necessary information for efficient service.',
    forms: [
      {
        name: 'New Client Intake Form',
        description: 'Comprehensive form for first-time clients',
        filename: 'oklahoma-client-intake-form.pdf',
      },
      {
        name: 'Service Request Form',
        description: 'Quick form for repeat client service requests',
        filename: 'oklahoma-service-request-form.pdf',
      },
      {
        name: 'Subject Information Sheet',
        description: 'Detailed information about the person to be served',
        filename: 'oklahoma-subject-info-sheet.pdf',
      },
    ],
  },
  {
    id: 'field-sheets',
    title: 'Field Sheet Templates',
    icon: <MapPin className="w-8 h-8 text-red-600" />,
    description: 'Mobile-friendly forms for documenting service attempts in the field. Essential for maintaining accurate records and supporting affidavits.',
    forms: [
      {
        name: 'Service Attempt Log',
        description: 'Record each attempt with date, time, and outcome',
        filename: 'oklahoma-attempt-log.pdf',
      },
      {
        name: 'Field Notes Template',
        description: 'Detailed narrative documentation of service attempts',
        filename: 'oklahoma-field-notes.pdf',
      },
      {
        name: 'Vehicle Description Form',
        description: 'Document vehicles at service location',
        filename: 'oklahoma-vehicle-description.pdf',
      },
      {
        name: 'Witness Information Form',
        description: 'Record witness details when present during service',
        filename: 'oklahoma-witness-form.pdf',
      },
    ],
  },
  {
    id: 'record-keeping',
    title: 'Record-Keeping Forms',
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    description: 'Forms to help maintain organized records that meet CLEET requirements and support your business operations.',
    forms: [
      {
        name: 'Service Log Spreadsheet',
        description: 'Excel template for tracking all services',
        filename: 'oklahoma-service-log.xlsx',
      },
      {
        name: 'Mileage Log Template',
        description: 'Track business mileage for tax purposes',
        filename: 'oklahoma-mileage-log.pdf',
      },
      {
        name: 'Expense Report Form',
        description: 'Document business expenses for reimbursement',
        filename: 'oklahoma-expense-report.pdf',
      },
      {
        name: 'CLEET Compliance Checklist',
        description: 'Ensure your records meet licensing requirements',
        filename: 'oklahoma-cleet-compliance-checklist.pdf',
      },
    ],
  },
];

// FAQ data
const faqs = [
  {
    question: 'What forms do Oklahoma process servers need?',
    answer: 'Oklahoma process servers need several essential forms including: Affidavit of Service (Return of Service), Proof of Service forms, Diligent Search Affidavit for substitute service, client intake forms, invoice templates, field sheets for documentation, and record-keeping forms for CLEET compliance. Each form serves a specific purpose in the service of process workflow and helps ensure legal compliance.',
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
    answer: 'A diligent search affidavit documents the efforts made to locate a defendant when personal service cannot be accomplished. In Oklahoma, this affidavit is required when seeking court approval for substitute service methods such as publication or service on a resident family member. The affidavit must detail all reasonable efforts made to locate the defendant, including database searches, address verification, contact with neighbors, workplace visits, and other investigative steps.',
  },
  {
    question: 'How long must Oklahoma process servers keep records?',
    answer: 'Oklahoma process servers must maintain service records for a minimum of three years according to CLEET (Council on Law Enforcement Education and Training) requirements. This includes affidavits of service, field notes, photographs, GPS data, client communications, and all documentation related to service attempts. Proper record retention protects both the process server and ensures compliance with professional standards.',
  },
  {
    question: 'Can I use digital forms and electronic signatures in Oklahoma?',
    answer: 'Yes, Oklahoma accepts electronic signatures on affidavits of service under the Oklahoma Electronic Transactions Act. However, the affidavit must still be properly notarized, and some courts may have specific requirements for electronic submissions. Always verify with the specific court where the case is filed, as acceptance of electronic documents can vary by jurisdiction within Oklahoma.',
  },
  {
    question: 'Where can I download free Oklahoma process server forms?',
    answer: 'Free Oklahoma process server forms are available for download from Just Legal Solutions. Our comprehensive library includes affidavit of service templates, proof of service forms, diligent search affidavits, invoice templates, client intake forms, and field sheets. All forms are designed to meet Oklahoma legal requirements and are regularly updated to reflect current standards.',
  },
  {
    question: 'Do Oklahoma process server forms need to be notarized?',
    answer: 'Yes, affidavits of service in Oklahoma must be notarized. The process server must sign the affidavit in the presence of a notary public who will administer the oath and affix their seal. Some counties may have additional requirements, such as specific notary wording or formatting. Always check local court rules to ensure compliance with all notarization requirements.',
  },
  {
    question: 'What is the difference between an affidavit of service and proof of service?',
    answer: 'While often used interchangeably, there is a technical distinction. An affidavit of service is a sworn statement notarized and filed with the court, making it a formal legal document. Proof of service is a broader term that can include the affidavit plus any supporting documentation such as photographs, GPS records, or witness statements. Both serve to document that service was completed according to legal requirements.',
  },
  {
    question: 'Are these forms acceptable in all Oklahoma counties?',
    answer: 'Our forms are designed to meet statewide Oklahoma requirements and are generally accepted in all counties. However, some counties may have specific local rules or formatting preferences. We recommend verifying with the court clerk in the county where service will be filed if you have any concerns about form acceptance. Tulsa County, Oklahoma County, and Cleveland County may have specific requirements.',
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
                At Just Legal Solutions, we understand the challenges process servers face in maintaining accurate records while working efficiently in the field. That is why we have created this comprehensive library of free, downloadable forms and templates specifically designed for Oklahoma process servers. Each form has been reviewed for compliance with Oklahoma statutes and CLEET requirements.
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
                  'Proof of service forms for all service types',
                  'Diligent search affidavits for substitute service',
                  'Professional invoice templates',
                  'Client intake and service request forms',
                  'Field documentation sheets',
                  'CLEET-compliant record-keeping forms',
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
                          href={`/resources/${form.filename}`}
                          className="flex-shrink-0 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          <Download className="w-4 h-4" />
                          PDF
                        </Link>
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
                In Oklahoma, the affidavit of service must be completed by the process server who personally made the service. It must then be sworn or affirmed before a notary public and filed with the court where the case is pending. Without a properly executed affidavit, the service may be deemed invalid, potentially delaying or jeopardizing the legal proceedings.
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
                  'Notary acknowledgment with seal',
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
                    mistake: 'Missing notarization',
                    solution: 'Have affidavit notarized immediately after signing, never backdate',
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
                When personal service cannot be accomplished because the defendant cannot be located, Oklahoma law requires a diligent search before alternative service methods can be authorized. The diligent search affidavit documents your exhaustive efforts to find the defendant and demonstrates to the court that reasonable attempts have been made.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Oklahoma courts expect process servers to conduct a thorough investigation that may include database searches, address verification, contact with neighbors and associates, workplace inquiries, and other reasonable efforts. The diligent search affidavit must detail each attempt made, when it occurred, and the results.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Standard Diligent Search Steps
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
                The diligent search standard varies by jurisdiction within Oklahoma. Some judges require more extensive efforts than others. When in doubt, document more efforts rather than fewer.
              </p>
              <p className="text-amber-800 mb-4">
                Always maintain detailed records of your search efforts including dates, times, and outcomes. These records support your affidavit and may be required if the service is challenged.
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
                href="mailto:info@justlegalsolutions.org"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Mail className="w-4 h-4" />
                info@justlegalsolutions.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
