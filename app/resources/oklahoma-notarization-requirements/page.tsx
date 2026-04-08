import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Download, 
  FileCheck, 
  Shield, 
  DollarSign, 
  BookOpen, 
  Laptop,
  CheckCircle,
  Phone,
  ArrowRight,
  FileText,
  Clock,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oklahoma Notarization Requirements Cheat Sheet (Free PDF)',
  description: 'Download our free Oklahoma Notarization Requirements Cheat Sheet. Complete guide to ID requirements, journal entries, certificate types, fees under 49 O.S. § 5, and RON rules.',
  keywords: [
    'Oklahoma notary requirements',
    'Oklahoma notarization guide',
    'notary ID requirements Oklahoma',
    'Oklahoma notary fees 49 O.S. § 5',
    'RON Oklahoma rules',
    'notary journal requirements Oklahoma',
    'Oklahoma notary certificate types',
    'mobile notary Oklahoma requirements',
    'free notary cheat sheet',
    'Oklahoma notary public guide'
  ],
  openGraph: {
    title: 'Oklahoma Notarization Requirements Cheat Sheet (Free PDF)',
    description: 'Complete guide to Oklahoma notary requirements, ID verification, fees, and RON rules. Download your free cheat sheet today.',
    type: 'website',
    url: 'https://justlegalsolutions.org/resources/oklahoma-notarization-requirements/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Notarization Requirements Cheat Sheet',
    description: 'Free PDF guide covering all Oklahoma notary requirements, fees, and procedures.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/resources/oklahoma-notarization-requirements/',
  },
  authors: [{ name: 'Joseph Iannazzi' }],
  creator: 'Joseph Iannazzi',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
  },
};

export default function OklahomaNotarizationRequirementsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileCheck className="w-4 h-4" />
                <span>Free Downloadable Resource</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Oklahoma Notarization Requirements Cheat Sheet
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Your complete quick-reference guide to Oklahoma notary laws, ID requirements, 
                fees, and procedures. Perfect for notaries and anyone getting documents notarized.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/downloads/oklahoma-notarization-requirements.pdf" 
                  download
                  className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
                >
                  <Download className="w-5 h-5" />
                  Download Free PDF
                </a>
                <Link 
                  href="/notary/" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Need a Notary?
                </Link>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                By Joseph Iannazzi, Licensed Oklahoma Notary Public
              </p>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-2xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Cheat Sheet Preview</h3>
                      <p className="text-sm text-gray-500">2-Page Quick Reference</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      'ID Requirements Checklist',
                      'Fee Schedule (49 O.S. § 5)',
                      'Journal Entry Template',
                      'Certificate Types Guide',
                      'RON Quick Rules'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Inside This Cheat Sheet
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Oklahoma notarization requirements in one 
              easy-to-reference PDF document.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ID Requirements */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ID Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Acceptable ID types in Oklahoma</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Credible witness procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">ID verification checklist</span>
                </li>
              </ul>
            </div>

            {/* Fee Schedule */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fee Schedule (49 O.S. § 5)</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Traditional notary: $5 per signature</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">RON (Remote Online): $25</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Travel fees and additional charges</span>
                </li>
              </ul>
            </div>

            {/* Journal Entries */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Journal Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Required journal entries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Thumbprint requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Record retention rules</span>
                </li>
              </ul>
            </div>

            {/* Certificate Types */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certificate Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Acknowledgments vs. Jurats</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Copy certifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Oaths and affirmations</span>
                </li>
              </ul>
            </div>

            {/* RON Rules */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">RON Rules</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Remote online notarization basics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Technology requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Identity verification for RON</span>
                </li>
              </ul>
            </div>

            {/* Common Documents */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Common Documents</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Wills, trusts, and POAs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Real estate documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Vehicle titles and affidavits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who Is This Cheat Sheet For?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Oklahoma Notaries Public</h4>
                    <p className="text-gray-600">
                      Keep this handy reference at your desk or in your mobile notary kit 
                      for quick access to requirements and procedures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">People Getting Documents Notarized</h4>
                    <p className="text-gray-600">
                      Know what to bring, what to expect, and what fees are legitimate 
                      before your notary appointment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">New Notary Applicants</h4>
                    <p className="text-gray-600">
                      Study guide for the Oklahoma notary exam and reference for your 
                      first notarizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Download This Cheat Sheet?
              </h3>
              <ul className="space-y-4">
                {[
                  'Save time looking up Oklahoma notary laws (49 O.S. § 6-101 et seq.)',
                  'Avoid mistakes that could invalidate your notarizations',
                  'Know the exact fees you can charge or expect to pay',
                  'Understand RON requirements for remote notarizations',
                  'Reference proper procedures for any document type'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-16 md:py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileCheck className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download Your Free Cheat Sheet Now
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get instant access to the complete Oklahoma Notarization Requirements Cheat Sheet. 
            No email required—just click and download.
          </p>
          <a 
            href="/downloads/oklahoma-notarization-requirements.pdf" 
            download
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-lg transition-colors text-lg"
          >
            <Download className="w-5 h-5" />
            Download PDF (Free)
          </a>
          <p className="text-blue-200 text-sm mt-4">
            PDF Format • 2 Pages • Instant Download
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link 
              href="/notary/"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <FileCheck className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    Mobile Notary Services
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Professional notary services that come to you. Available throughout 
                    Oklahoma for individuals and businesses.
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue-700 font-medium">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            <Link 
              href="/notary-faqs/"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <BookOpen className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    Notary FAQs
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Answers to common questions about notarization, acceptable IDs, 
                    fees, and what to expect during your appointment.
                  </p>
                  <span className="inline-flex items-center gap-1 text-green-700 font-medium">
                    Read FAQs <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Professional Notary Services?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Just Legal Solutions provides mobile notary services throughout Oklahoma. 
            We come to your home, office, or any convenient location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:539-367-6832"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              (539) 367-6832
            </a>
            <Link 
              href="/notary/"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              View Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Owned and operated by <strong className="text-gray-700">Joseph Iannazzi</strong>, 
              Licensed Oklahoma Notary Public
            </p>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Just Legal Solutions. All rights reserved.
            </p>
            <p>
              Notary fees: $5 traditional | $25 RON (as per 49 O.S. § 5)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
