import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '../../components/ui/navbar';
import { Footer } from '../../components/ui/footer';
import { CheckCircle2, AlertCircle, Users, FileText, Clock, Shield, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What to Bring to Your Notary Appointment | Just Legal Solutions',
  description: 'Complete checklist of what to bring for a successful notary appointment. Valid ID requirements, document prep, and special situation guides.',
  keywords: 'notary appointment, what to bring, valid ID, notarization checklist, document preparation',
};

export default function WhatToBringPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">What to Bring to Your Notary Appointment</h1>
          <p className="text-xl opacity-90">Your Complete Checklist for a Smooth, Successful Notarization</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 mb-6">
          A successful notary appointment requires proper preparation. Missing a required item means rescheduling—costing you time and potentially money. This comprehensive guide ensures you arrive fully prepared, whether you&apos;re signing a simple affidavit or a complex real estate closing.
        </p>
      </section>

      {/* Valid ID Requirements */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="text-blue-600" />
          Valid ID Requirements
        </h2>
        <p className="text-gray-700 mb-6">
          Oklahoma notaries must verify signer identity through acceptable identification. Here&apos;s what works—and what doesn&apos;t:
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-green-600" size={20} />
              Acceptable Primary ID (unexpired)
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Oklahoma Driver&apos;s License</li>
              <li>• Oklahoma State ID Card</li>
              <li>• U.S. Passport or Passport Card</li>
              <li>• Military ID (active duty or dependent)</li>
              <li>• Permanent Resident Card (Green Card)</li>
              <li>• Other state driver&apos;s license or ID</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertCircle className="text-red-600" size={20} />
              NOT Acceptable
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Expired driver&apos;s license (over 90 days)</li>
              <li>• Student ID cards</li>
              <li>• Work badges without government backing</li>
              <li>• Social Security cards</li>
              <li>• Credit/debit cards</li>
              <li>• Library cards or store memberships</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-blue-900 mb-4">Secondary ID (if primary is unavailable)</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• U.S. Passport (even if expired within 3 years)</li>
            <li>• Foreign passport with valid U.S. visa</li>
            <li>• Tribal ID card</li>
            <li>• Government-issued employee ID</li>
          </ul>
        </div>
      </section>

      {/* Name Matching */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Name Matching Requirements</h2>
        <p className="text-gray-700 mb-6">
          Your ID name must match the document name exactly, or close enough with acceptable variations:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2 text-left">Document Name</th>
                <th className="border px-4 py-2 text-left">ID Name</th>
                <th className="border px-4 py-2 text-left">Acceptable?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">John Smith</td>
                <td className="border px-4 py-2">John Smith</td>
                <td className="border px-4 py-2 text-green-600 font-bold">✓ Yes</td>
              </tr>
              <tr className="bg-white">
                <td className="border px-4 py-2">John A. Smith</td>
                <td className="border px-4 py-2">John Smith</td>
                <td className="border px-4 py-2 text-green-600 font-bold">✓ Yes</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">John Smith</td>
                <td className="border px-4 py-2">John Andrew Smith</td>
                <td className="border px-4 py-2 text-green-600 font-bold">✓ Yes</td>
              </tr>
              <tr className="bg-white">
                <td className="border px-4 py-2">John Smith</td>
                <td className="border px-4 py-2">J. Smith</td>
                <td className="border px-4 py-2 text-red-600 font-bold">✗ No</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Maria Garcia-Lopez</td>
                <td className="border px-4 py-2">Maria Garcia</td>
                <td className="border px-4 py-2 text-red-600 font-bold">✗ No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-100 p-4 rounded mt-6 border-l-4 border-blue-600">
          <p className="text-gray-800">
            <strong>For recent name changes:</strong> Bring marriage certificate (certified copy), divorce decree with name change provision, or court order for legal name change.
          </p>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FileText className="text-blue-600" />
          Document Preparation Checklist
        </h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-blue-600 flex gap-4">
            <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
            <div>
              <p className="font-bold">All documents requiring notarization</p>
              <p className="text-gray-600 text-sm">Printed, not electronic • Leave signature lines blank • Review before appointment</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-blue-600 flex gap-4">
            <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
            <div>
              <p className="font-bold">Supporting documents (if applicable)</p>
              <p className="text-gray-600 text-sm">Powers of attorney • Trust certificates • Corporate resolutions • Guardianship papers</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-blue-600 flex gap-4">
            <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
            <div>
              <p className="font-bold">Blue or black ink pens</p>
              <p className="text-gray-600 text-sm">Some documents specify ink color • We provide pens, but your preferred pen helps</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-blue-600 flex gap-4">
            <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
            <div>
              <p className="font-bold">Payment method</p>
              <p className="text-gray-600 text-sm">Cash, check, or card accepted • Confirm fee in advance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Related Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/mobile-notary" className="bg-white p-4 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors group">
            <p className="font-bold group-hover:text-blue-600">Mobile Notary</p>
            <p className="text-sm text-gray-600">We come to you</p>
          </Link>
          <Link href="/remote-online-notary" className="bg-white p-4 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors group">
            <p className="font-bold group-hover:text-blue-600">Remote Online Notary</p>
            <p className="text-sm text-gray-600">Video notarization</p>
          </Link>
          <Link href="/real-estate-notary" className="bg-white p-4 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors group">
            <p className="font-bold group-hover:text-blue-600">Real Estate Closings</p>
            <p className="text-sm text-gray-600">Loan signing agent</p>
          </Link>
          <Link href="/hospital-notary" className="bg-white p-4 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors group">
            <p className="font-bold group-hover:text-blue-600">Hospital Notary</p>
            <p className="text-sm text-gray-600">Medical facilities</p>
          </Link>
        </div>
        <p className="text-center mt-6">
          <Link href="/notary/joseph" className="text-blue-600 hover:underline inline-flex items-center gap-1">
            Meet Your Notary <ArrowRight size={16} />
          </Link>
        </p>
      </section>

      {/* External Resources */}
      <section className="max-w-4xl mx-auto px-4 py-8 bg-gray-50">
        <h3 className="font-bold mb-4">Official Resources</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="https://www.sos.ok.gov/business/notary" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
              Oklahoma Secretary of State - Notary Division <ExternalLink size={14} />
            </a>
          </li>
          <li>
            <a href="https://www.nationalnotary.org/knowledge-center" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
              National Notary Association - Knowledge Center <ExternalLink size={14} />
            </a>
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl mb-8 opacity-90">We&apos;ll confirm exactly what you need for your specific documents.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+15393676832" className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
              (539) 367-6832
            </a>
            <a href="mailto:info@justlegalsolutions.org" className="bg-blue-700 text-white px-8 py-3 rounded font-bold hover:bg-blue-800">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
