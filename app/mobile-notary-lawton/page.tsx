import Link from 'next/link';
import { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import SearchDominance2026 from '../../components/ui/2026-search-dominance';
import AIVoiceSupremacy from '../../components/ui/ai-voice-supremacy';
import RankingSupremacy2026 from '../../components/ui/2026-ranking-supremacy';
import MobileVoiceOptimization from '../../components/ui/mobile-voice-optimization';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  FileText,
  Stamp,
  DollarSign,
  Building2,
  Users,
  Hospital,
  Lock,
  Star,
  Award,
  Compass,
  AlertTriangle
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/mobile-notary-lawton';

export const metadata: Metadata = {
  title: 'Mobile Notary Lawton | 24/7 Traveling Notary',
  description:
    'Lawton mobile notary for hospitals (Comanche County Memorial Hospital and Southwestern Medical Center), jails (Comanche County Detention Center), and loan signings. Licensed, bonded, same-day appointments in Comanche County. Call (539) 367-6832.',
  keywords:
    'mobile notary Lawton, Lawton mobile notary, hospital notary Lawton, jail notarization Lawton, loan signing agent Lawton, 24/7 notary Lawton, Comanche County notary, emergency notary Lawton',
  authors: [{ name: 'Just Legal Solutions' }],
  openGraph: {
    title: 'Mobile Notary Lawton | 24/7 Emergency Signing Team',
    description:
      'Licensed Oklahoma mobile notaries for hospitals, detention centers, real estate closings, and corporate matters across Lawton and Comanche County.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/notary-mobile-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Lawton Mobile Notary Team'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: canonicalUrl
  },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Mobile notary services in Lawton, Oklahoma (Comanche County). Licensed notaries travel to homes, offices, hospitals like Comanche County Memorial Hospital and Southwestern Medical Center, and jails like Comanche County Detention Center. Notary fee cap: $5/act traditional (49 O.S. § 5), $25/act RON (49 O.S. § 209). $10,000 surety bond. Same-day availability.',
    'ai-key-facts': 'Lawton mobile notary: $5/act max fee (49 O.S. § 5), $25/act max RON (49 O.S. § 209). Required $10,000 surety bond (49 O.S. § 2). Covers Comanche County and landmarks like Fort Sill, Museum of the Great Plains, and Medicine Park.',
  }
};

const notaryServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Lawton Mobile Notary - Just Legal Solutions',
  url: canonicalUrl,
  image: 'https://justlegalsolutions.org/images/notary-mobile-og.jpg',
  telephone: '+1-539-367-6832',
  email: 'info@justlegalsolutions.org',
  description: 'Professional mobile notary services throughout Lawton and Comanche County. Licensed, bonded Oklahoma notaries come to your location.',
  areaServed: {
    '@type': 'City',
    name: 'Lawton'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '156'
  }
};

export default function LawtonMobileNotaryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <JsonLd data={notaryServiceSchema} />

        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="uppercase tracking-widest text-blue-200 mb-4">Lawton Mobile Notary | 24/7 Dispatch</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Hospital, Jail, and Loan Signing Specialists Serving Lawton
                </h1>
                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                  Just Legal Solutions delivers on-demand mobile notarizations throughout Lawton and all of Comanche County. Clients rely on us for hospital signings at Comanche County Memorial Hospital and Southwestern Medical Center, detention center notarizations at Comanche County Detention Center, high-stakes real estate loan closings, and compassionate late-night visits. Call (539) 367-6832 to reach a commissioned Oklahoma notary.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href="tel:5393676832"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" /> Call (539) 367-6832
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border border-white/30"
                  >
                    <MapPin className="w-5 h-5 mr-2" /> Book in Lawton
                  </a>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-sm uppercase text-blue-200">Hospital Signings</p>
                    <p className="text-3xl font-bold">Daily</p>
                    <p className="text-xs text-blue-100">Comanche County Memorial Hospital and Southwestern Medical Center & More</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase text-blue-200">Detention</p>
                    <p className="text-3xl font-bold">Cleared</p>
                    <p className="text-xs text-blue-100">Comanche County Detention Center</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase text-blue-200">Loan Closings</p>
                    <p className="text-3xl font-bold">Specialists</p>
                    <p className="text-xs text-blue-100">Title & Lender Trained</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase text-blue-200">RON Ready</p>
                    <p className="text-3xl font-bold">Local</p>
                    <p className="text-xs text-blue-100">Secure & Recorded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Dedicated Lawton Notary Dispatch</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  A mobile notary is a commissioned professional who travels to your location—home, hospital, detention center, business, or courthouse—to execute notarizations. In Lawton, we frequently visit Fort Sill, Museum of the Great Plains, and Medicine Park to assist with critical legal paperwork. We understand the specific rules for executing documents across Comanche County.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Beyond stamping paper, our role is to create certainty. That means calmly guiding a family through a power of attorney, ensuring a buyer understands their refinance packet, or helping an incarcerated signer near Lawton understand every line of a settlement release. We collaborate with attorneys, real estate agents, and social workers.
                </p>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-100">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Oklahoma Notary Facts</h3>
                <p className="text-slate-600 mb-4">
                  Oklahoma commissioned notaries are regulated under <strong>49 O.S. § 111 et seq.</strong> by the Secretary of State. We comply with 2026 Oklahoma notary law requirements including <strong>SB 1028</strong> (background screening and $10,000 surety bond) and <strong>HB 2265</strong> (updated identification standards).
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Stamp className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-slate-600"><strong>Statutory fee caps:</strong> $5 per traditional notarial act, $25 per remote online notarization.</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-slate-600"><strong>$10,000 Surety Bond (SB 1028):</strong> Fully bonded and insured to protect your transactions in Comanche County.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Hospital & Jail Notarization in Lawton</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <Hospital className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Healthcare Facilities</h3>
                <p className="text-slate-600 mb-4">
                  Hospital social workers and hospice directors call us because we respect infection control, patient privacy, and family dynamics. We frequently operate at Comanche County Memorial Hospital and Southwestern Medical Center within Lawton to complete powers of attorney, healthcare directives, and wills right at the bedside.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <Lock className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Detention Centers</h3>
                <p className="text-slate-600 mb-4">
                  We submit pre-approval packets, respect lockdown schedules, and patiently move through security at Comanche County Detention Center and other Comanche County facilities. Because our team is background-checked, we clear security faster, enabling crucial legal documents to be finalized before court deadlines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 SEO Dominance Components tailored for Lawton */}
        <SearchDominance2026
          pageTitle="Lawton Mobile Notary & Loan Signings | Just Legal Solutions"
          primaryKeywords={['Lawton mobile notary', 'hospital notary Lawton', 'jail notary Lawton', 'loan signing agent Lawton', 'Comanche County notary']}
          location="Lawton, Oklahoma"
          businessType="Mobile Notary"
          skipSchema={true}
        />
        <AIVoiceSupremacy
          businessName="Just Legal Solutions Notary"
          location="Lawton, Oklahoma"
          services={['Mobile Notary', 'Hospital Signings', 'Jail Signings', 'Real Estate Loan Closings', 'Remote Online Notarization']}
          phone="(539) 367-6832"
          skipSchema={true}
        />
        <RankingSupremacy2026
          targetKeywords={['mobile notary Lawton', 'traveling notary Lawton ok', 'hospital notary Lawton', 'notary public Lawton']}
          location="Lawton, Oklahoma"
          businessName="Just Legal Solutions Notary"
          skipSchema={true}
        />
        <MobileVoiceOptimization
          businessName="Just Legal Solutions Notary"
          phone="(539) 367-6832"
          primaryService="mobile notary and loan closings"
          location="Lawton, Oklahoma"
        />

      </main>
      <Footer />
    </div>
  );
}
