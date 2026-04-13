import { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileText, 
  CheckCircle, 
  Download, 
  Shield, 
  ClipboardList, 
  MapPin, 
  User,
  Clock,
  AlertTriangle,
  ArrowRight,
  Phone,
  Mail,
  FileCheck
} from 'lucide-react';

export const metadata: Metadata = {
    alternates: {
    canonical: 'https://justlegalsolutions.org/resources/process-server-field-sheet-template',
  },
title: 'Free Process Server Field Sheet Template',
  description: 'Download our free Process Server Field Sheet Template. Track service attempts, document recipient information, and maintain legal compliance with professional field documentation.',
  keywords: [
    'process server field sheet',
    'service of process template',
    'process server documentation',
    'legal field sheet',
    'service attempt log',
    'Oklahoma process server forms',
    'process serving template',
    'legal documentation template'
  ],
  authors: [{ name: 'Joseph Iannazzi' }],
  openGraph: {
    title: 'Free Process Server Field Sheet Template',
    description: 'Professional field documentation template for process servers. Track attempts, document recipients, and maintain legal compliance.',
    type: 'website',
    url: 'https://justlegalsolutions.org/resources/process-server-field-sheet-template/',
  },
};

export default function ProcessServerFieldSheetTemplate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                <span>Free Downloadable Resource</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Process Server Field Sheet Template
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional documentation tool for process servers. Track every service attempt with precision, 
                maintain legal compliance, and protect your work with thorough field records.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/downloads/process-server-field-sheet-template.pdf" 
                  download
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Free Template
                </a>
                <Link 
                  href="/oklahoma-process-server-forms-templates/"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Templates
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                    <ClipboardList className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">File Format</p>
                    <p className="text-lg font-semibold">PDF Template</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Print-ready format</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Professional layout</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Legally compliant fields</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Instant download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Inside the Template
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive field sheet includes all essential sections for thorough service documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Attempt Tracking</h3>
              <p className="text-gray-600 text-sm">
                Date, time, and sequential attempt numbers for each service effort with clear tracking fields.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recipient Information</h3>
              <p className="text-gray-600 text-sm">
                Complete fields for recipient name, description, relationship to case, and identification details.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location Details</h3>
              <p className="text-gray-600 text-sm">
                Address verification, property type, access conditions, and GPS coordinates for accuracy.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Notes Section</h3>
              <p className="text-gray-600 text-sm">
                Ample space for detailed observations, witness information, and special circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Documentation Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Proper Field Documentation Matters
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Legal Protection</h3>
                    <p className="text-gray-600">
                      Detailed documentation protects you from liability and provides evidence of due diligence 
                      in case of service challenges or court inquiries.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Court Acceptance</h3>
                    <p className="text-gray-600">
                      Courts require thorough documentation to validate service. Proper field sheets ensure 
                      your affidavits of service are accepted without question.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dispute Resolution</h3>
                    <p className="text-gray-600">
                      When service is contested, your field notes become critical evidence. Complete 
                      documentation can make the difference in legal proceedings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "The difference between a successful service and a challenged one often comes down to the 
                quality of field documentation. Every detail matters in court."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JI
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Joseph Iannazzi</p>
                  <p className="text-sm text-gray-600">Licensed Process Server, PSL-2026-2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Use the Template Effectively
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these best practices to maximize the value of your field documentation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <div className="bg-gray-50 rounded-xl p-6 pt-8 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete All Fields</h3>
                <p className="text-gray-600">
                  Fill out every applicable field immediately after each attempt. Memory fades quickly, 
                  and contemporaneous notes carry more weight in court than recollections.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <div className="bg-gray-50 rounded-xl p-6 pt-8 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Be Specific & Objective</h3>
                <p className="text-gray-600">
                  Record observable facts rather than opinions. Note what you saw, heard, and did—not 
                  what you assumed or inferred about the situation.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
              <div className="bg-gray-50 rounded-xl p-6 pt-8 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Document Immediately</h3>
                <p className="text-gray-600">
                  Complete your field sheet before leaving the location. Use your vehicle as a mobile 
                  office if needed. Timely documentation is more credible and accurate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance Benefits */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Legal Compliance Benefits
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Our template is designed to meet Oklahoma legal standards and professional best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-700">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Oklahoma Compliant</h3>
              <p className="text-blue-100 text-sm">
                Fields align with Oklahoma process serving requirements and court expectations for documentation.
              </p>
            </div>

            <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-700">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Chain of Custody</h3>
              <p className="text-blue-100 text-sm">
                Clear documentation supports the chain of custody for legal documents from service to filing.
              </p>
            </div>

            <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-700">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Due Diligence Proof</h3>
              <p className="text-blue-100 text-sm">
                Comprehensive records demonstrate the reasonable efforts required for substituted service.
              </p>
            </div>

            <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-700">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Professional Standards</h3>
              <p className="text-blue-100 text-sm">
                Meets industry standards for process server documentation and professional practice.
              </p>
            </div>

            <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-700">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Audit Ready</h3>
              <p className="text-blue-100 text-sm">
                Documentation format supports internal audits and external reviews of service practices.
              </p>
            </div>

            <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-700">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Evidence Quality</h3>
              <p className="text-blue-100 text-sm">
                Properly documented field notes serve as quality evidence if service is later challenged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Download Your Free Template Now
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Get instant access to our professional Process Server Field Sheet Template. 
              No email required—just click and download.
            </p>
            
            <a 
              href="/downloads/process-server-field-sheet-template.pdf" 
              download
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors mb-6"
            >
              <Download className="w-5 h-5" />
              Download PDF Template
            </a>

            <div className="text-sm text-gray-500">
              <p>File: process-server-field-sheet-template.pdf</p>
              <p>Format: Print-ready PDF | Size: Letter (8.5" x 11")</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
            <p className="text-lg text-gray-600">
              Explore more tools and information for process servers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/oklahoma-process-server-forms-templates/"
              className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Oklahoma Process Server Forms
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete collection of forms and templates for Oklahoma process servers.
              </p>
              <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm">
                View All Forms <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link 
              href="/resources/"
              className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <ClipboardList className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Resource Library
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Browse our full collection of legal resources, guides, and templates.
              </p>
              <span className="inline-flex items-center gap-1 text-green-600 font-medium text-sm">
                Browse Resources <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link 
              href="/services/process-serving/"
              className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                Process Serving Services
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional process serving with GPS tracking and same-day attempts.
              </p>
              <span className="inline-flex items-center gap-1 text-purple-600 font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              JI
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Resource Created By</p>
              <h3 className="text-xl font-bold text-gray-900">Joseph Iannazzi</h3>
              <p className="text-gray-600">
                Licensed Oklahoma Process Server (PSL-2026-2) | Owner, Just Legal Solutions
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 text-sm text-gray-600">
                <a href="tel:539-367-6832" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  (539) 367-6832
                </a>
                <a href="mailto:info@justlegalsolutions.org" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                  info@justlegalsolutions.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
