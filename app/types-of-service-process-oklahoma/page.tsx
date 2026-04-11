import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Shield, Clock, MapPin, Users, Mail, Compass } from 'lucide-react';
import { AuthorBox } from '@/components/ui/author-box';

export const metadata: Metadata = {
  title: 'Types of Service of Process in Oklahoma | Just Legal Solutions',
  description: 'Understand the different types of service of process in Oklahoma, including personal service, substitute service, and service by publication.',
  alternates: { canonical: 'https://justlegalsolutions.org/types-of-service-process-oklahoma' },
};

export default function TypesOfServicePage() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Types of Service of Process in Oklahoma"
        pageDescription="A comprehensive guide to the different methods of legal document service allowed under Oklahoma state law."
        pageUrl="https://justlegalsolutions.org/types-of-service-process-oklahoma"
        siteName="Just Legal Solutions"
      />
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">Types of Service of Process in Oklahoma</h1>
            
            <div className="bg-white p-4 rounded border border-blue-200 shadow-sm mb-8">
              <h2 className="text-lg font-bold text-blue-900 mb-2 flex items-center"><span className="mr-2">⚡</span> Quick Answer</h2>
              <p className="text-gray-800">
                The primary types of service of process in Oklahoma are <strong>Personal Service</strong> (handing documents directly to the individual), <strong>Substitute Service</strong> (leaving documents with an authorized resident aged 15 or older), <strong>Certified Mail</strong> (with return receipt), and <strong>Service by Publication</strong> (as a last resort when the defendant cannot be found).
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Oklahoma law (12 O.S. § 2004) dictates very specific rules for how someone can be formally notified of a lawsuit or legal proceeding. Choosing the right method ensures the court asserts proper jurisdiction and prevents defendants from easily dismissing the case. Below are the details regarding the primary types of service recognized by Oklahoma courts.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="text-blue-600 w-8 h-8" /> Personal Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is the gold standard for process serving. It involves a licensed process server, sheriff, or authorized individual physically handing the legal documents directly to the named defendant. Personal service establishes undeniably that the defendant received notice of the legal action.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Pros:</strong> Safest and most reliable method; difficult for defendants to contest.</li>
                <li><strong>Cons:</strong> Can be difficult if the defendant is actively evading service.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="text-blue-600 w-8 h-8" /> Substitute (Abode) Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If the defendant is not available, Oklahoma law permits leaving the documents at the defendant&apos;s "usual place of residence" with a family member or co-resident who is at least 15 years old. The server must verify that the person accepting the papers actually resides at the home.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Mail className="text-blue-600 w-8 h-8" /> Certified Mail, Return Receipt Requested
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many civil actions in Oklahoma authorize service by certified mail. The documents are mailed with restricted delivery so only the named individual can sign for them.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Compass className="text-blue-600 w-8 h-8" /> Service by Publication
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When all other methods fail and the defendant&apos;s whereabouts are truly unknown, courts may authorize service by publication in a newspaper of general circulation. This requires a diligent search affidavit proving that personal service was impossible.
              </p>
            </section>
          </article>
          <div className="mt-12">
            <AuthorBox />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
