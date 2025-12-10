import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
import AIAssistantOptimization from '@/components/ui/ai-assistant-optimization';
import AIOptimizedContentSchema from '@/components/ui/ai-optimized-content-schema';
import AIVoiceSupremacy from '@/components/ui/ai-voice-supremacy';

export const metadata: Metadata = {
  title: 'Oklahoma Process Server Laws & Legal Requirements Guide 2025',
  description: 'Complete guide to Oklahoma process serving laws, regulations, and legal requirements. Essential information for attorneys, legal professionals, and process servers operating in Oklahoma.',
  keywords: 'oklahoma process server laws, oklahoma service of process rules, oklahoma legal requirements process serving, oklahoma court rules process service',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/oklahoma-process-server-laws'
  }
};

export default function OklahomaProcessServerLaws() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Oklahoma Process Server Laws', url: '/oklahoma-process-server-laws' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="article"
          title="Oklahoma Process Server Laws & Legal Requirements Guide 2025"
          description="Complete guide to Oklahoma process serving laws, regulations, and legal requirements for legal professionals."
          url="https://justlegalsolutions.org/oklahoma-process-server-laws"
          breadcrumbItems={breadcrumbItems}
          faqItems={[
            {
              question: "What are the basic legal requirements to be a process server in Oklahoma?",
              answer: "In Oklahoma, process servers must be over 18, not a party to the case, and in some counties must be licensed or appointed by the county clerk. They must also maintain proper bonding and insurance."
            },
            {
              question: "How many attempts must be made before alternative service in Oklahoma?",
              answer: "Oklahoma law typically requires at least three separate attempts at personal service before seeking court approval for alternative methods like posting and mailing or publication."
            },
            {
              question: "What constitutes proper service of process in Oklahoma?",
              answer: "Proper service in Oklahoma requires personal delivery to the defendant, or if that&apos;s not possible, service to someone of suitable age at the defendant&apos;s residence or workplace, followed by mailing."
            }
          ]}
        />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Oklahoma Process Server Laws
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
                Complete Legal Requirements & Regulations for Process Serving in Oklahoma
              </p>
            </div>
          </div>
        </div>

        {/* Content continues with detailed legal information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-8">Oklahoma Process Serving Legal Framework</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Legal Disclaimer:</strong> This information is for educational purposes only and should not be considered legal advice. 
                  Always consult with a qualified attorney for specific legal questions.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4">Statutory Requirements</h3>
              <p className="mb-6">
                Oklahoma process serving is governed by both state statutes and individual county regulations. 
                The primary legal framework includes:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Oklahoma Statutes Title 12 - Civil Procedure</li>
                <li>Individual County Court Rules</li>
                <li>Oklahoma Rules of Civil Procedure</li>
                <li>Federal Rules for Federal Court Services</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Service Methods Recognized in Oklahoma</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 border rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Personal Service</h4>
                  <p className="text-gray-700 mb-3">
                    Direct delivery to the individual named in the documents.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Must be served personally</li>
                    <li>• Identification required</li>
                    <li>• Immediate completion</li>
                    <li>• Strongest legal standing</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 border rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Substituted Service</h4>
                  <p className="text-gray-700 mb-3">
                    Service to another person when direct service isn&apos;t possible.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Person of suitable age (14+)</li>
                    <li>• At residence or workplace</li>
                    <li>• Must mail copy</li>
                    <li>• Requires multiple attempts first</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">County-Specific Requirements</h3>
              <p className="mb-6">
                While Oklahoma has statewide rules, individual counties may have additional requirements:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold mb-3">Common County Variations:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Tulsa County:</strong> Requires registration with County Clerk</li>
                  <li>• <strong>Oklahoma County:</strong> Specific bonding requirements</li>
                  <li>• <strong>Cleveland County:</strong> Additional documentation standards</li>
                  <li>• <strong>Comanche County:</strong> Enhanced military service protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
