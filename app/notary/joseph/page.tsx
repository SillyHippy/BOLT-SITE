import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '../../../components/ui/navbar';
import Footer from '../../../components/ui/footer';
import JsonLd from '../../../components/JsonLd';
import {
  Phone, Mail, Shield, FileText, Award, Star, CheckCircle,
  Download, ExternalLink, Building2, Calendar, MapPin, Stamp,
  GraduationCap, BadgeCheck, Globe, Lock, FileCheck
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/notary/joseph';

export const metadata: Metadata = {
  title: 'Joseph William Iannazzi | Professional Notary Credentials | Just Legal Solutions',
  description: 'View the professional credentials and certifications of Joseph William Iannazzi, Founder & CEO of Just Legal Solutions. Oklahoma Commissioned Notary Public, RON certified, NNA member, background verified, E&O insured, and bonded.',
  keywords: 'Joseph Iannazzi, notary credentials, Oklahoma notary, RON certified, NNA member, Proof Academy certified, Just Legal Solutions founder, Tulsa notary, background check, E&O insurance, notary bond, errors and omissions',
  authors: [{ name: 'Just Legal Solutions' }],
  openGraph: {
    title: 'Joseph William Iannazzi | Professional Notary Credentials',
    description: 'View the professional credentials and certifications of Joseph William Iannazzi, licensed Oklahoma Notary Public and RON certified.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/joseph-credentials-og.png',
        width: 1200,
        height: 630,
        alt: 'Joseph William Iannazzi - Professional Notary Credentials'
      }
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph William Iannazzi | Professional Notary Credentials',
    description: 'Licensed Oklahoma Notary Public, RON certified, NNA member. View credentials and certifications.',
    images: ['https://justlegalsolutions.org/images/joseph-credentials-og.png'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: canonicalUrl,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Joseph William Iannazzi",
  "jobTitle": "Founder & CEO",
  "worksFor": {
    "@type": "Organization",
    "name": "Just Legal Solutions",
    "url": "https://justlegalsolutions.org"
  },
  "url": canonicalUrl,
  "sameAs": [
    "https://justlegalsolutions.org/about"
  ],
  "knowsAbout": [
    "Notary Public Services",
    "Remote Online Notarization",
    "Legal Document Services",
    "Process Serving"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "Oklahoma Notary Public Commission"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "Remote Online Notarization (RON) Certification"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "Proof Academy - Notarize Network Platform Training NST"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Membership",
      "name": "National Notary Association Member"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Verification",
      "name": "Background Check Verified"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Insurance",
      "name": "Errors & Omissions Insurance"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Bond",
      "name": "Surety Bond"
    }
  ]
};

const credentials = [
  {
    title: "Oklahoma Notary Public Commission",
    icon: Stamp,
    description: "State of Oklahoma commissioned Notary Public, authorized to perform notarial acts throughout all 77 counties.",
    status: "Active",
    downloadUrl: "/notary-credentials/joseph/Joseph-Iannazzi-Notary-Commission.pdf",
    color: "blue"
  },
  {
    title: "Remote Online Notarization (RON)",
    icon: Globe,
    description: "Certified to perform Remote Online Notarizations, allowing signers from anywhere in the world to notarize documents via secure video conference.",
    status: "Certified",
    downloadUrl: "/notary-credentials/joseph/Joseph-Iannazzi-RON-Certificate.pdf",
    color: "green"
  },
  {
    title: "Proof Academy Certified",
    icon: GraduationCap,
    description: "Notarize Network Platform Training - NST Certification. Trained and certified on the Proof platform for professional remote notarization services.",
    status: "Certified",
    downloadUrl: "/notary-credentials/joseph/Joseph-Iannazzi-Proof-Academy-Certificate.png",
    color: "purple"
  },
  {
    title: "National Notary Association Member",
    icon: BadgeCheck,
    description: "Active member of the National Notary Association, the nation's leading authority on notarization, committed to best practices and continuing education.",
    status: "Active Member",
    downloadUrl: "/notary-credentials/joseph/Joseph-Iannazzi-NNA-Membership.pdf",
    color: "amber"
  },
  {
    title: "Background Screening Verified",
    icon: Shield,
    description: "Comprehensive background check completed and verified. Clean record ensuring trust and reliability for all notarization services.",
    status: "Verified",
    downloadUrl: "/notary-credentials/joseph/Joseph-Iannazzi-Background-Check.pdf",
    color: "slate"
  },
  {
    title: "Errors & Omissions Insurance",
    icon: FileCheck,
    description: "Professional liability coverage protecting clients against errors or omissions during notarization. E&O insurance documentation included in the notary information package.",
    status: "Insured",
    downloadUrl: "/notary-credentials/joseph/Joseph-Iannazzi-Notary-Information-Package.pdf",
    color: "teal"
  },
  {
    title: "Surety Bond",
    icon: Lock,
    description: "Fully bonded as required by Oklahoma law. Surety bond protects the public and ensures compliance with state notary requirements.",
    status: "Bonded",
    downloadUrl: "/notary-credentials/joseph/Joseph-Iannazzi-Notary-Information-Package.pdf",
    color: "indigo"
  }
];

const trustSignals = [
  { icon: Shield, text: "Licensed & Bonded", description: "Fully bonded as required by Oklahoma law" },
  { icon: Lock, text: "Secure & Confidential", description: "Your documents handled with strict confidentiality" },
  { icon: CheckCircle, text: "Background Checked", description: "Verified and trusted professional" },
  { icon: Star, text: "5-Star Service", description: "Committed to excellence in every notarization" }
];

export default function JosephCredentialsPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={personSchema} />

      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-28 pb-20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <FileCheck className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-blue-200">Verified Professional Credentials</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Joseph William Iannazzi
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-200 mb-6">
                Founder & CEO | Licensed Oklahoma Notary Public
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
                <span className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Just Legal Solutions
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Glenpool, Oklahoma
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Bar */}
        <section className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <signal.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{signal.text}</p>
                    <p className="text-xs text-gray-500 hidden md:block">{signal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              This page provides verification of the professional credentials and certifications held by 
              Joseph William Iannazzi. All documents are available for download and verification by 
              authorized parties, notary platforms, and signing services.
            </p>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Credentials & Certifications
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Click on any credential below to view and download the official documentation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`p-6 ${
                    credential.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-700' :
                    credential.color === 'green' ? 'bg-gradient-to-r from-green-600 to-green-700' :
                    credential.color === 'purple' ? 'bg-gradient-to-r from-purple-600 to-purple-700' :
                    credential.color === 'amber' ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
                    credential.color === 'slate' ? 'bg-gradient-to-r from-slate-600 to-slate-700' :
                    credential.color === 'teal' ? 'bg-gradient-to-r from-teal-600 to-teal-700' :
                    credential.color === 'indigo' ? 'bg-gradient-to-r from-indigo-600 to-indigo-700' :
                    'bg-gradient-to-r from-gray-600 to-gray-700'
                  } text-white`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-lg">
                          <credential.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{credential.title}</h3>
                          <span className="inline-flex items-center gap-1 text-sm opacity-90">
                            <CheckCircle className="w-4 h-4" />
                            {credential.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{credential.description}</p>
                    <div className="flex gap-3">
                      <a
                        href={credential.downloadUrl}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                      <a
                        href={credential.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signed Notary Information Document */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Complete Notary Information Package
              </h2>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Download the comprehensive signed notary information document containing commission details, 
                E&O insurance, bond information, and all relevant credentials for notary platforms and signing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/notary-credentials/joseph/Joseph-Iannazzi-Notary-Information-Package.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Full Package
                </a>
                <a
                  href="/notary-credentials/joseph/Joseph-Iannazzi-Notary-Information-Package.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Document
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Academy Certificate Image */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Proof Academy Certification
              </h2>
              <p className="text-gray-600">
                Notarize Network Platform Training - NST Certification
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <img
                src="/notary-credentials/joseph/Joseph-Iannazzi-Proof-Academy-Certificate.png"
                alt="Joseph William Iannazzi - Proof Academy Certified - Notarize Network Platform Training NST Certification - Earned 03/30/2026"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Notary Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Just Legal Solutions for professional notary services throughout Oklahoma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (539) 367-6832
              </a>
              <a
                href="mailto:info@justlegalsolutions.org"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Link
              href="/notary"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Notary Services
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
