import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import AIVoiceSupremacy from '../../components/ui/ai-voice-supremacy';
import {
  Phone, Mail, Clock, Shield, MapPin, FileText, Scale, Users,
  CheckCircle, HelpCircle, DollarSign, Award, Star, Briefcase,
  Home, Car, Monitor, Globe, Heart, Lock, Gavel, Building2,
  AlertTriangle, CreditCard, Calendar, Zap, Smartphone, Eye
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/notary-faqs';

export const metadata: Metadata = {
  title: 'Notary FAQ: 50+ Oklahoma Notary Questions Answered',
  description: 'Complete notary FAQ with 50+ questions covering Oklahoma notary laws, fees, requirements, what can be notarized, ID requirements, remote notarization, mobile service, and more.',
  keywords: 'notary FAQ, Oklahoma notary questions, notary fees OK, what can be notarized, notary ID requirements, remote notary Oklahoma, mobile notary Tulsa, notary near me FAQ',
  authors: [{ name: 'Just Legal Solutions Team' }],
  openGraph: {
    title: 'Notary FAQ: 50+ Oklahoma Notary Questions Answered',
    description: 'Complete notary FAQ with 50+ questions covering Oklahoma notary laws, fees, requirements, ID requirements, remote notarization, mobile service, and more.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [{ url: 'https://justlegalsolutions.org/images/hero.webp', width: 1200, height: 630, alt: 'Oklahoma Notary FAQ' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notary FAQ: 50+ Oklahoma Notary Questions Answered',
    description: 'Complete notary FAQ covering Oklahoma notary laws, fees, requirements, and more.',
    images: ['https://justlegalsolutions.org/images/hero.webp'],
    creator: '@ServeOK',
    site: '@ServeOK',
  },
  robots: 'index, follow',
  alternates: { canonical: canonicalUrl },
  other: {
    'article:author': 'Just Legal Solutions Team',
    'article:published_time': '2026-03-22',
    'article:modified_time': '2026-03-22',
    'ai-content-type': 'faq',
    'ai-summary': 'Complete Oklahoma notary FAQ. In-office starts at $20, mobile notary travels statewide, RON $25/act. Oklahoma law caps fees at $5 traditional/$25 RON per act. Valid government ID required. Documents must be unsigned. RON authorized since 2019. Just Legal Solutions: (539) 367-6832.',
    'ai-key-facts': 'Notary fees: $5 traditional, $25 RON per act (state max). In-office starting at $20. $10,000 surety bond required. Journal required for RON. Commission term: 4 years. All 77 Oklahoma counties served. (539) 367-6832.',
  },
};

// Define FAQ categories with all 50 questions
const faqCategories = [
  {
    id: 'general',
    title: 'General Notary Questions',
    intro: 'Essential information about what notaries do and how notarization works in Oklahoma.',
    icon: HelpCircle,
    color: 'blue',
    faqs: [
      {
        question: 'What exactly does a notary do?',
        answer: 'A notary public is an official witness appointed by the state to verify your identity using government-issued photo ID, confirm you\'re signing willingly (not under duress or coercion), witness your signature on legal documents, and apply their official seal to certify the notarization.',
        details: ['Notaries do NOT verify the truthfulness of document contents', 'Notaries do NOT provide legal advice or draft legal documents', 'Think of a notary as an impartial third party who prevents fraud by confirming identity and willingness']
      },
      {
        question: 'Why do documents need to be notarized?',
        answer: 'Notarization serves several important purposes:',
        details: ['Fraud Prevention — Verifies the signer\'s identity and prevents forged signatures', 'Legal Validity — Many documents (deeds, powers of attorney, wills) require notarization to be valid', 'Deterrent Effect — The presence of a notary discourages fraudulent signing', 'Record Keeping — Notaries maintain journals creating a paper trail', 'Interstate Recognition — Notarized documents are recognized across state lines']
      },
      {
        question: 'Is notarization the same as authentication or apostille?',
        answer: 'No. These are different processes. Notarization is basic verification of identity and signature by a notary public. Authentication is verification that the notary\'s commission is valid, done by the Oklahoma Secretary of State. An apostille is international authentication for documents used in countries that are part of the Hague Convention.',
        details: ['Documents going to foreign countries → Need apostille', 'Documents going to other U.S. states → May need authentication', 'We can guide you on what your specific document needs']
      },
      {
        question: 'How long does a notarization take?',
        answer: 'Timing varies by service type:',
        details: ['In-office: 15-30 minutes for simple documents', 'Mobile: 20-45 minutes on-site (plus travel time)', 'Remote Online (RON): 30-60 minutes (includes upload, verification, and video session)', 'Complex documents (loan packages, multiple signers): 1-2 hours', 'Tip: Arrive with your document COMPLETE but UNSIGNED for fastest service']
      },
      {
        question: 'Do I need to make an appointment?',
        answer: 'It depends on the service type:',
        details: ['In-office: Appointments recommended but walk-ins welcome (based on availability)', 'Mobile: Appointment required (we need to schedule travel)', 'RON: Appointment required (scheduling system books video sessions)', 'Same-day service available for all types — call (539) 367-6832']
      },
      {
        question: 'Can a notary refuse to notarize my document?',
        answer: 'Yes. Notaries can (and should) refuse if:',
        details: ['You don\'t have proper ID', 'The document is incomplete (blank spaces)', 'You appear confused, intoxicated, or under duress', 'The signer isn\'t physically present (for traditional notarization)', 'They suspect fraud or coercion', 'The document type is outside their scope (birth certificates, etc.)', 'You signed the document before arriving', 'The notary has a financial interest in the document', 'Refusal isn\'t personal — it protects you and the integrity of the process']
      },
      {
        question: 'What happens if I make a mistake on my document?',
        answer: 'Don\'t panic. Here\'s what to do:',
        details: ['Minor errors (typos, dates): Cross out with a single line, write correction nearby, initial and date it', 'Major errors: Get a new copy and start over', 'After notarization: The notary can issue a corrected certificate if the error is in the notarial certificate', 'Never use white-out or correction fluid on legal documents — many institutions reject them']
      },
      {
        question: 'How long is a notarization valid?',
        answer: 'Notarizations don\'t expire. Once properly notarized, the notarization is valid indefinitely. However, some institutions have their own rules:',
        details: ['Banks may require notarizations within 90 days', 'Courts may want recent notarizations', 'Government agencies vary by type', 'Best practice: If your document is time-sensitive, get it notarized close to submission date']
      },
      {
        question: 'Can a notary testify about what they witnessed?',
        answer: 'Yes. If subpoenaed, a notary can testify about the notarization they performed, the signer\'s identity, whether the signer appeared willing, and any unusual circumstances. This is why notaries keep journals.',
      },
      {
        question: 'What\'s the difference between a notary public and a notary signing agent?',
        answer: 'A Notary Public is a general notary who can notarize any document type. A Notary Signing Agent (NSA) has additional training to handle loan documents. NSAs understand mortgage documents, closing procedures, and lender requirements, and often carry additional E&O insurance.',
      },
    ]
  },
  {
    id: 'oklahoma',
    title: 'Oklahoma-Specific Questions',
    intro: 'Questions specific to Oklahoma notary laws and regulations.',
    icon: MapPin,
    color: 'green',
    faqs: [
      {
        question: 'Who oversees notaries in Oklahoma?',
        answer: 'The Oklahoma Secretary of State oversees all notaries public. They handle applications, renewals, background checks, commission approvals, complaints, and notary database verification.',
        details: ['Website: sos.ok.gov/notary', 'Phone: (405) 521-2516', 'You can verify any notary\'s commission at sos.ok.gov/notary/verify.aspx']
      },
      {
        question: 'How can I verify a notary\'s commission in Oklahoma?',
        answer: 'Use the Secretary of State\'s online verification tool: Go to sos.ok.gov/notary/verify.aspx, search by notary name or commission number, and view commission status, expiration date, and county.',
      },
      {
        question: 'Can an Oklahoma notary notarize documents for use in other states?',
        answer: 'Yes! Oklahoma notarizations are valid nationwide. The document must comply with Oklahoma notary law during signing, and the notary must be physically in Oklahoma. For international use, an apostille may be needed in addition to notarization.',
      },
      {
        question: 'What are the current Oklahoma notary requirements?',
        answer: 'Current Oklahoma notary requirements include:',
        details: ['Background check through OSBI ($50, paid by notary)', '$10,000 surety bond — protects the public', 'Journal required for RON, recommended for traditional', 'Application fee: $50 new, $45 renewal, $25 bond filing', 'Notary fees capped at $5 per act ($25 for RON)', 'Commission term: 4 years', 'Absentee ballot affidavits: FREE (required by law)']
      },
      {
        question: 'Can non-Oklahoma residents become Oklahoma notaries?',
        answer: 'Yes, if employed in Oklahoma. Non-resident notaries must meet all standard requirements (18+, U.S. citizen, no felonies), be employed within Oklahoma state boundaries, and provide proof of Oklahoma employment.',
      },
      {
        question: 'What if a notary moves or changes their name?',
        answer: 'For address changes, the notary must notify the Secretary of State within 30 days. For name changes, the notary must resign their current commission, reapply with the new name, and purchase a new bond and seal.',
      },
    ]
  },
  {
    id: 'fees',
    title: 'Fees & Pricing',
    intro: 'Understanding notary costs in Oklahoma — what\'s regulated by law and what to expect.',
    icon: DollarSign,
    color: 'emerald',
    faqs: [
      {
        question: 'How much does notarization cost in Oklahoma?',
        answer: 'Maximum fees are set by Oklahoma law (49 O.S. § 5):',
        details: ['Traditional notarization: $5.00 per act maximum', 'Remote Online Notarization: $25.00 per act maximum', 'Absentee ballot affidavits: FREE (required by law)', 'Our in-office service starts at $20', 'Mobile notary: $5/act + travel fee (varies by distance)', 'A platform fee may apply for RON sessions']
      },
      {
        question: 'What\'s a "notarial act"?',
        answer: 'A notarial act is each signature that requires notarization. For example: one signature on a deed = 1 act, three signatures on a contract = 3 acts. Common notarial acts include acknowledgments, oaths and affirmations, jurats, signature witnessing, and copy certification.',
      },
      {
        question: 'Why do some places offer free notarization?',
        answer: 'Banks and credit unions often offer free notarization to account holders as a customer service perk. They can afford it because notary fees are low and employees may already be commissioned. However, they usually have limited hours and may not handle complex documents.',
      },
      {
        question: 'Can notaries charge less than the maximum?',
        answer: 'Yes! The $5 and $25 fees are MAXIMUMS, not minimums. Notaries can charge less, provide free service, offer volume discounts, or waive fees for certain clients. Most charge the maximum because it covers time, expertise, and overhead.',
      },
      {
        question: 'Are travel fees regulated?',
        answer: 'No. Oklahoma law doesn\'t cap travel fees for mobile notaries. Travel fees cover gas, vehicle wear, time, scheduling complexity, and after-hours availability. Always ask for a quote upfront before scheduling mobile service. Call (539) 367-6832 for a transparent quote.',
      },
    ]
  },
  {
    id: 'id',
    title: 'ID & Signer Requirements',
    intro: 'What you need to bring and who can sign — the #1 question we get.',
    icon: Shield,
    color: 'purple',
    faqs: [
      {
        question: 'What ID do I need for notarization?',
        answer: 'You must have one valid, government-issued photo ID:',
        details: ['Driver\'s license (any U.S. state or Canadian province)', 'State ID card (any U.S. state)', 'U.S. Passport (current or expired within 5 years)', 'U.S. Military ID', 'Foreign passport with USCIS stamp', 'Tribal ID card (federally recognized tribe)', 'ID must be: current, government-issued, include photo, signature, and physical description']
      },
      {
        question: 'What if I don\'t have ID?',
        answer: 'You have three options:',
        details: ['Credible Witness — Bring someone who has valid ID, is personally known to the notary, and is NOT named in the document', 'Get ID — Visit Oklahoma DPS for a state ID (quick and inexpensive)', 'Personally Known — If the notary personally knows you, ID may be waived (rare)']
      },
      {
        question: 'Can I use an expired ID?',
        answer: 'Generally no, except for U.S. Passports expired less than 5 years. All other expired IDs (driver\'s license, state ID, etc.) are NOT acceptable. Solution: Renew your ID before scheduling notarization.',
      },
      {
        question: 'What if my name on the ID doesn\'t match the document?',
        answer: 'Minor differences (Robert vs. Bob, middle initial vs. full name) are usually fine — the notary will note it. Major differences require documentation such as a marriage certificate, court order, or Social Security card showing the new name.',
      },
      {
        question: 'Does the signer have to be physically present?',
        answer: 'For traditional notarization: YES. Oklahoma law requires the signer to be in the same room, able to see and communicate with the notary. Exception: Remote Online Notarization (RON) allows virtual presence via video call.',
      },
      {
        question: 'Can someone sign on behalf of another person?',
        answer: 'Yes, with proper authority. A Power of Attorney agent can sign for the principal (must bring the original POA document). Other authorized signers include corporate officers, executors for estates, and guardians. Documentation proving authority is required.',
      },
    ]
  },
  {
    id: 'documents',
    title: 'Document Types',
    intro: 'What can and cannot be notarized in Oklahoma.',
    icon: FileText,
    color: 'red',
    faqs: [
      {
        question: 'What documents can you notarize?',
        answer: 'We can notarize most legal documents, including:',
        details: ['Estate planning: Wills, living wills, powers of attorney, trust documents', 'Real estate: Deeds, mortgages, refinance documents, lease agreements, title transfers', 'Business: Contracts, corporate resolutions, partnership agreements, business licenses', 'Personal: Vehicle titles, bills of sale, permission to travel with minor, name change affidavits', 'Court & government: Affidavits, depositions, verification forms, government applications']
      },
      {
        question: 'What documents CANNOT be notarized?',
        answer: 'We cannot notarize:',
        details: ['Birth, death, and marriage certificates (must be certified by issuing agency)', 'Passports — only authorized passport acceptance agents', 'Immigration forms (I-9, etc.)', 'University diplomas, transcripts, professional certifications', 'Documents signed before you arrive', 'Incomplete documents with blank spaces', 'Documents without proper ID verification']
      },
      {
        question: 'Can you notarize a photocopy?',
        answer: 'Yes, with limitations. A notary can certify that a photocopy is a "true and correct copy" of an original you present. However, they cannot certify copies of vital records (birth/death certificates, marriage licenses, court records) — only the issuing agency can do that.',
      },
      {
        question: 'Can you notarize documents in another language?',
        answer: 'Technically yes, but most notaries won\'t. Oklahoma law doesn\'t prohibit it, but notaries should understand what they\'re witnessing. Solutions: bring a translated copy, ensure the notarial certificate is in English, or find a notary who speaks the document\'s language.',
      },
      {
        question: 'Can minors sign documents with notarization?',
        answer: 'Yes, but with caveats. Minors can sign documents they have legal right to sign, usually with a parent/guardian present. Minors generally can\'t enter binding contracts. For important documents involving minors, consult an attorney about legal capacity.',
      },
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Notary Services',
    intro: 'Everything about having a notary come to your location in Oklahoma.',
    icon: Car,
    color: 'orange',
    faqs: [
      {
        question: 'Where can you meet me for mobile notary?',
        answer: 'We come to you anywhere in Oklahoma:',
        details: ['Your home or office', 'Coffee shops and libraries', 'Hospitals and nursing homes', 'Jails and detention centers', 'Real estate closing offices', 'Public parks (weather permitting)', 'Requirements: Adequate lighting, flat surface, privacy, safe environment']
      },
      {
        question: 'How far will you travel?',
        answer: 'We serve all 77 Oklahoma counties. For areas outside Tulsa County, travel fees vary by distance and urgency. Contact us at (539) 367-6832 for a quote.',
      },
      {
        question: 'How quickly can you get here?',
        answer: 'Same-day service is available in most cases. Typical scheduling: Tulsa metro 1-4 hours notice, suburbs 2-6 hours, distant locations 24+ hours. Emergency service available 24/7 — an emergency surcharge may apply. Tip: Schedule in advance when possible.',
      },
      {
        question: 'What if I need multiple people to sign?',
        answer: 'Perfect use case for mobile notary! Benefits: Everyone signs at the same location, no coordinating multiple appointments, often cheaper than separate trips, we bring all supplies. Notary fees are $5 per signature (state max). Travel fee is the same as a single signer — no upcharge for multiple signers at one location.',
      },
    ]
  },
  {
    id: 'ron',
    title: 'Remote Online Notarization',
    intro: 'How RON works, technology requirements, and what to expect.',
    icon: Monitor,
    color: 'indigo',
    faqs: [
      {
        question: 'What is Remote Online Notarization?',
        answer: 'RON is a legally authorized method where signer and notary connect via secure video call. Identity is verified digitally, documents are signed electronically, the session is audio-video recorded, and the notary applies an electronic seal and signature. Authorized in Oklahoma since 2019.',
      },
      {
        question: 'How does RON work?',
        answer: 'The step-by-step process:',
        details: ['Upload your unsigned document to the secure platform', 'Schedule your appointment (available 24/7)', 'Identity verification: Knowledge-based authentication + ID credential analysis + facial recognition', 'Video call with notary: Confirm identity, verify willingness, watch you sign', 'Receive your notarized document instantly with digital certificate and link to recorded session']
      },
      {
        question: 'Is RON legal and accepted?',
        answer: 'Yes! RON is authorized by Oklahoma law (49 O.S. § 1-101 et seq.), accepted by courts, banks, and government agencies, valid nationwide, and often MORE secure than traditional notarization due to recording, encryption, and multiple ID checks. Some institutions may still prefer traditional — check with the receiving party if unsure.',
      },
      {
        question: 'What technology do I need for RON?',
        answer: 'Requirements:',
        details: ['Computer, tablet, or smartphone with camera and microphone', 'Stable internet connection (broadband recommended)', 'Valid government-issued photo ID', 'Email address', 'Ability to upload documents (PDF format preferred)', 'Works on Windows, Mac, iOS, Android — no download needed', 'Chrome or Firefox recommended']
      },
      {
        question: 'Can I use RON if I\'m outside the United States?',
        answer: 'Yes! You can be anywhere in the world — the notary must be physically in Oklahoma. Common use cases include military overseas, expats, international adoptions, foreign property transactions, and study abroad documents. Just ensure you have internet connection and valid ID.',
      },
      {
        question: 'Is RON secure?',
        answer: 'Yes, often more secure than traditional notarization. Security features include:',
        details: ['Encrypted video transmission (256-bit SSL)', 'Tamper-evident document technology', 'Multi-factor identity verification', 'Audio-video recording stored 10 years', 'Electronic journals with audit trail', 'Recordings accessible only via court order or official investigation']
      },
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting & Special Situations',
    intro: 'Answers for unusual circumstances and edge cases.',
    icon: AlertTriangle,
    color: 'amber',
    faqs: [
      {
        question: 'What if I lose my notarized document?',
        answer: 'You have options: Request a copy from the notary (journal records can be referenced, $10 fee for certified copy). You can also re-sign and re-notarize with a new copy. Contact the receiving party, as some institutions accept copies or may have the original on file.',
      },
      {
        question: 'Can a notarization be challenged or reversed?',
        answer: 'Yes, but it\'s difficult. Grounds include fraudulent identity, duress/coercion, expired/invalid commission, failure to follow legal requirements, or forgery. The process involves filing a complaint with the Secretary of State and may involve court proceedings.',
      },
      {
        question: 'What if the notary made a mistake?',
        answer: 'For minor errors (wrong certificate wording), the notary can issue a corrected certificate. For major errors, re-sign and re-notarize. Always review the notarization before leaving — check that the seal is clear and complete, and verify the commission is current.',
      },
      {
        question: 'Can I get a notarization done if I\'m in the hospital?',
        answer: 'Yes! This is a common mobile notary request. The patient must be mentally competent, doctor confirmation may be needed, and infection control protocols are followed. Common hospital documents: Power of attorney, living will, medical directives, will and testament. Call ahead to coordinate with hospital staff.',
      },
      {
        question: 'Can you notarize documents for someone in a nursing home?',
        answer: 'Yes, similar to hospital visits. The notary must verify the signer understands the document — a doctor\'s letter confirming capacity may be required for dementia/Alzheimer\'s patients. Call ahead to coordinate with the facility. We handle nursing home visits sensitively and professionally.',
      },
      {
        question: 'What if I\'m deaf or hard of hearing?',
        answer: 'Notaries must provide reasonable accommodation. Options include bringing your own interpreter, written communication if literate, or using RON platform accessibility features. The notary must be able to communicate with you to verify understanding and willingness.',
      },
      {
        question: 'Can you notarize documents for someone who doesn\'t speak English?',
        answer: 'Yes, with an interpreter. The interpreter cannot be named in the document or have financial interest. The notarial certificate is in English. You can bring your own interpreter or we can arrange one (additional fee). The notary communicates through the interpreter.',
      },
      {
        question: 'What if I need a notarization on a holiday?',
        answer: 'We\'re available 24/7, including holidays. An emergency surcharge may apply for holidays and after-hours. Major holidays have limited availability — book as far in advance as possible. Call (539) 367-6832 for holiday availability.',
      },
    ]
  }
];

const colorClasses: { [key: string]: { bg: string; border: string; text: string; light: string; gradient: string } } = {
  blue: { bg: 'bg-blue-600', border: 'border-blue-500', text: 'text-blue-600', light: 'bg-blue-50', gradient: 'from-blue-600 to-blue-700' },
  green: { bg: 'bg-green-600', border: 'border-green-500', text: 'text-green-600', light: 'bg-green-50', gradient: 'from-green-600 to-green-700' },
  emerald: { bg: 'bg-emerald-600', border: 'border-emerald-500', text: 'text-emerald-600', light: 'bg-emerald-50', gradient: 'from-emerald-600 to-emerald-700' },
  purple: { bg: 'bg-purple-600', border: 'border-purple-500', text: 'text-purple-600', light: 'bg-purple-50', gradient: 'from-purple-600 to-purple-700' },
  red: { bg: 'bg-red-600', border: 'border-red-500', text: 'text-red-600', light: 'bg-red-50', gradient: 'from-red-600 to-red-700' },
  orange: { bg: 'bg-orange-600', border: 'border-orange-500', text: 'text-orange-600', light: 'bg-orange-50', gradient: 'from-orange-600 to-orange-700' },
  indigo: { bg: 'bg-indigo-600', border: 'border-indigo-500', text: 'text-indigo-600', light: 'bg-indigo-50', gradient: 'from-indigo-600 to-indigo-700' },
  amber: { bg: 'bg-amber-600', border: 'border-amber-500', text: 'text-amber-600', light: 'bg-amber-50', gradient: 'from-amber-600 to-amber-700' },
};

// Build FAQ schema dynamically from all categories
const allFaqSchemaEntities = faqCategories.flatMap(cat =>
  cat.faqs.map(faq => ({
    "@type": "Question" as const,
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer" as const,
      "text": faq.answer + (faq.details ? ' ' + faq.details.join('. ') : '')
    }
  }))
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": allFaqSchemaEntities
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://justlegalsolutions.org/" },
    { "@type": "ListItem", "position": 2, "name": "Notary Services", "item": "https://justlegalsolutions.org/notary" },
    { "@type": "ListItem", "position": 3, "name": "Notary FAQ", "item": canonicalUrl }
  ]
};

export default function NotaryFAQPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-blue-200 text-sm font-medium">50+ Comprehensive FAQs</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Notary FAQ:{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Your Questions, Answered</span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Everything you need to know about notary services in Oklahoma — fees, requirements, ID, documents, mobile service, remote online notarization, and more.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#faqs" className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
                  <HelpCircle className="w-5 h-5" />
                  Browse FAQs
                </a>
                <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition border border-blue-500">
                  <Phone className="w-5 h-5" />
                  Call (539) 367-6832
                </a>
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-sm text-blue-200 mb-4">Licensed Oklahoma Notaries</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-sm text-blue-200">FAQs Answered</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">8</div>
                    <div className="text-sm text-blue-200">Categories</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-blue-200">Availability</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">77</div>
                    <div className="text-sm text-blue-200">OK Counties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-blue-900">
          <strong>Looking for more answers?</strong> See our complete{' '}
          <Link href="/faq" className="text-blue-600 hover:underline font-semibold">
            Oklahoma Process Server &amp; Notary FAQ
          </Link>{' '}
          with all questions in one place.
        </p>
      </div>

      {/* Quick Navigation */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-3 scrollbar-hide">
            {faqCategories.map((cat) => {
              const IconComponent = cat.icon;
              const colors = colorClasses[cat.color];
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`flex items-center gap-2 px-2.5 py-2 sm:px-4 rounded-full whitespace-nowrap text-sm font-medium transition flex-shrink-0 ${colors.light} ${colors.text} hover:opacity-80`}
                >
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">{cat.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <main id="faqs" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            const colors = colorClasses[category.color];

            return (
              <section key={category.id} id={category.id} className="mb-16 scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${colors.bg} text-white`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                {category.intro && (
                  <p className="text-gray-600 mb-8 max-w-3xl">{category.intro}</p>
                )}

                <div className="space-y-6">
                  {category.faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                      <div className={`border-l-4 ${colors.border}`}>
                        <div className="p-6 md:p-8">
                          <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>{faq.question}</h3>
                          <p className="text-gray-700 mb-4">{faq.answer}</p>

                          {faq.details && (
                            <ul className="space-y-2 mb-4">
                              {faq.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                  <span className="text-gray-700">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                  <p className="text-green-100 mb-6">
                    Our licensed Oklahoma notaries are ready to answer your questions and help with any notarization needs.
                    With 50+ years of combined experience, we&apos;ve seen it all.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                      <Phone className="w-5 h-5" />
                      Call (539) 367-6832
                    </a>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition border border-green-500">
                      <Mail className="w-5 h-5" />
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
                    <div className="text-2xl font-bold mb-1">(539) 367-6832</div>
                    <div className="text-green-200 text-sm">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Notary Service Pages
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/notary" className="text-blue-600 hover:underline">Notary Services — Overview & Booking</Link></li>
                  <li><Link href="/notary-laws" className="text-blue-600 hover:underline">Oklahoma Notary Laws & Requirements Guide</Link></li>
                  <li><Link href="/pricing#notary" className="text-blue-600 hover:underline">Notary Pricing & Fee Schedule</Link></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-600" />
                  Other Legal Services
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/oklahoma-process-server-pricing" className="text-blue-600 hover:underline">Process Server Pricing Guide</Link></li>
                  <li><Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">Process Server FAQ 2026</Link></li>
                  <li><Link href="/service-areas" className="text-blue-600 hover:underline">Oklahoma Service Areas</Link></li>
                  <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="text-center bg-gray-100 p-6 rounded-xl">
            <p className="text-sm text-gray-600 italic">
              This FAQ is provided for informational purposes by Just Legal Solutions, licensed Oklahoma process servers and notary
              service providers with over 50 years combined experience. Last updated: March 2026. For specific legal questions,
              consult an attorney. Just Legal Solutions is not a law firm and does not provide legal advice.
            </p>
          </div>
        </div>
      </main>

      <AIVoiceSupremacy
        businessName="Just Legal Solutions"
        location="Oklahoma"
        services={['Notary Services', 'Mobile Notary', 'Remote Online Notarization', 'Process Serving']}
        phone="(539) 367-6832"
        skipSchema={true}
      />
      <Footer />
    </>
  );
}
