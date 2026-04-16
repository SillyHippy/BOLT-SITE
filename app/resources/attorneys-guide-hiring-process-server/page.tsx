import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Scale, 
  CheckCircle, 
  AlertTriangle, 
  DollarSign, 
  FileText, 
  Shield, 
  Clock, 
  Users,
  Download,
  Phone,
  Star,
  Briefcase,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Attorney's Guide to Hiring a Process Server | Free PDF Download",
  description: "Download our free Attorney's Guide to Hiring a Process Server. Learn how to vet process servers, avoid red flags, compare pricing, and protect your law firm's reputation. Written by Joseph Iannazzi.",
  keywords: "attorney guide process server, hiring process server law firm, process server vetting checklist, legal process service, Oklahoma process server, attorney services",
  openGraph: {
    title: "Attorney's Guide to Hiring a Process Server | Free PDF",
    description: "Essential guide for attorneys on vetting, hiring, and working with professional process servers. Protect your cases and your firm's reputation.",
    type: 'article',
    authors: ['Joseph Iannazzi'],
  },
  alternates: {
    canonical: '/resources/attorneys-guide-hiring-process-server/',
  },
};

export default function AttorneysGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                <span>Free Resource for Legal Professionals</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                The Attorney's Guide to{' '}
                <span className="text-blue-400">Hiring a Process Server</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Essential insights for law firms on vetting, hiring, and working with 
                professional process servers. Protect your cases and your firm's reputation 
                with this comprehensive guide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="/downloads/attorneys-guide-hiring-process-server.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-blue-600/25"
                >
                  <Download className="w-5 h-5" />
                  Download Free PDF
                </a>
                <Link 
                  href="/attorney-services/"
                  className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  <Scale className="w-5 h-5" />
                  View Attorney Services
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>24 Pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15 Min Read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Licensed Licensed</span>
                </div>
              </div>
            </div>
            
            {/* Right - PDF Preview Card */}
            <div className="flex-1 max-w-md">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-10 h-10" />
                    <div>
                      <p className="text-sm opacity-80">Just Legal Solutions</p>
                      <p className="font-bold">Professional Guide</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">
                    Attorney's Guide to Hiring a Process Server
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Vetting Checklist Included</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Red Flags to Watch For</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Pricing Comparison Guide</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Service Level Analysis</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-500 text-center">
                    Written by <strong className="text-slate-700">Joseph Iannazzi</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-700">156+ Five-Star Reviews</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-300" />
            <div className="flex items-center gap-2 text-slate-700">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Licensed & Bonded</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-300" />
            <div className="flex items-center gap-2 text-slate-700">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Trusted by 500+ Attorneys</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What's Inside the Guide
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything your law firm needs to know about selecting and working with 
              professional process servers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Process Server Vetting Checklist
              </h3>
              <p className="text-slate-600">
                A comprehensive 15-point checklist to evaluate potential process servers. 
                Verify credentials, insurance, experience, and track record before you hire.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Essential Questions to Ask
              </h3>
              <p className="text-slate-600">
                The critical questions every attorney should ask before engaging a process 
                server. Learn what separates professionals from amateurs.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Red Flags to Avoid
              </h3>
              <p className="text-slate-600">
                Warning signs that indicate a process server may put your cases at risk. 
                Protect your firm from service failures and malpractice exposure.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Pricing Guide & Comparison
              </h3>
              <p className="text-slate-600">
                Understand fair market rates for process serving services. Compare 
                pricing structures and learn what factors affect costs.
              </p>
            </div>
            
            {/* Card 5 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Service Level Comparison
              </h3>
              <p className="text-slate-600">
                Compare routine, rush, and same-day service options. Understand 
                when each service level is appropriate for your cases.
              </p>
            </div>
            
            {/* Card 6 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Professional Standards
              </h3>
              <p className="text-slate-600">
                Learn the industry standards and best practices that define 
                professional process serving. Ensure compliance and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Guide Matters */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why This Guide Matters for Law Firms
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Protect Your Cases</h4>
                    <p className="text-slate-600">
                      Improper service can derail cases, delay judgments, and expose your 
                      firm to malpractice claims. Learn how to ensure proper service every time.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Save Time & Money</h4>
                    <p className="text-slate-600">
                      Avoid costly service failures and re-serves. A reliable process server 
                      saves your firm time and reduces unnecessary expenses.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Maintain Professional Standards</h4>
                    <p className="text-slate-600">
                      Your process server is an extension of your firm. Ensure they represent 
                      your practice with the professionalism your clients expect.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Ensure Court Compliance</h4>
                    <p className="text-slate-600">
                      Different courts have different requirements. Learn what documentation 
                      and procedures are necessary for your jurisdiction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-6">
                "Working with the right process server has transformed how we handle service 
                of process. This guide contains everything I wish I'd known when I started 
                my practice."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JI</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Joseph Iannazzi</p>
                  <p className="text-slate-600">Owner, Just Legal Solutions</p>
                  <p className="text-sm text-slate-500">Licensed Process Server Licensed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Professional Standards to Look For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The guide covers essential qualifications that separate professional 
              process servers from the rest
            </p>
          </div>
          
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Proper Licensing</h4>
                    <p className="text-slate-400 text-sm">
                      Valid state license and bonding requirements
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">E&O Insurance</h4>
                    <p className="text-slate-400 text-sm">
                      Errors and omissions coverage for protection
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Timely Updates</h4>
                    <p className="text-slate-400 text-sm">
                      Real-time status reporting and communication
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Professional Affiliations</h4>
                    <p className="text-slate-400 text-sm">
                      Membership in NAPPS or state associations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Proof of Service</h4>
                    <p className="text-slate-400 text-sm">
                      Properly executed affidavits and documentation
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Skip Tracing Capability</h4>
                    <p className="text-slate-400 text-sm">
                      Ability to locate hard-to-find defendants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download Your Free Copy Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get instant access to the complete Attorney's Guide to Hiring a Process Server
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-lg font-semibold text-slate-700">
                attorneys-guide-hiring-process-server.pdf
              </span>
            </div>
            
            <a 
              href="/downloads/attorneys-guide-hiring-process-server.pdf"
              download
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download PDF Now
            </a>
            
            <p className="mt-4 text-sm text-slate-500">
              No email required. Instant download. 100% free.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No Registration Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Updated for 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Related Services & Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/attorney-services/"
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Briefcase className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Attorney Services
                  </h3>
                  <p className="text-slate-600 mb-3">
                    Specialized process serving solutions for law firms. Rush service, 
                    same-day delivery, and comprehensive case management support.
                  </p>
                  <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                    Learn More 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/resources/"
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <FileText className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                    Resource Library
                  </h3>
                  <p className="text-slate-600 mb-3">
                    Browse our complete collection of legal guides, checklists, and 
                    resources for attorneys and legal professionals.
                  </p>
                  <span className="text-green-600 font-medium inline-flex items-center gap-1">
                    View All Resources
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Process Serving Services?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Just Legal Solutions provides professional process serving throughout Oklahoma. 
              Licensed, bonded, and trusted by hundreds of attorneys statewide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:539-367-6832"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                (539) 367-6832
              </a>
              <Link 
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Contact Us Online
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-700 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>License: Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>156+ Five-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Licensed & Bonded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-12 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
            Download Instructions
          </h3>
          <ol className="space-y-3 text-slate-600">
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <span>Click the "Download PDF Now" button above</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <span>The PDF will automatically download to your device's default download folder</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <span>Open the file with any PDF reader to access the complete guide</span>
            </li>
          </ol>
          <p className="mt-6 text-sm text-slate-500 text-center">
            File size: ~2.5 MB | Format: PDF | Compatible with all devices
          </p>
        </div>
      </section>
    </main>
  );
}
