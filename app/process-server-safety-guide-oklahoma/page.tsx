import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Phone, 
  Car, 
  Users, 
  FileText,
  CheckCircle,
  XCircle,
  MapPin,
  Clock,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Process Server Safety Guide Oklahoma | Risk Management & Protection',
  description: 'Comprehensive safety guide for Oklahoma process servers. Learn risk assessment, situational awareness, de-escalation techniques, and emergency procedures to stay safe while serving legal documents.',
  keywords: 'process server safety, is process serving dangerous, process server self defense, Oklahoma process server safety, legal document server protection',
  openGraph: {
    title: 'Process Server Safety Guide Oklahoma | Risk Management & Protection',
    description: 'Essential safety protocols and risk management strategies for Oklahoma process servers. Protect yourself while serving legal documents effectively.',
    type: 'article',
    authors: ['Joseph Iannazzi'],
    publishedTime: '2024-01-15',
    modifiedTime: '2024-01-15',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Process Server Safety Guide Oklahoma: Risk Management & Protection',
  description: 'Comprehensive safety guide for Oklahoma process servers covering risk assessment, situational awareness, de-escalation techniques, and emergency procedures.',
  author: {
    '@type': 'Person',
    name: 'Joseph Iannazzi',
    jobTitle: 'Owner, Just Legal Solutions',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Just Legal Solutions',
    telephone: '+1-539-367-6832',
  },
  datePublished: '2024-01-15',
  dateModified: '2024-01-15',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://justlegalsolutions.org/process-server-safety-guide-oklahoma/',
  },
  articleSection: 'Safety & Training',
  wordCount: 3200,
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is process serving a dangerous job in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Process serving carries inherent risks but is generally safe when proper safety protocols are followed. Most recipients accept documents without incident. The key is situational awareness, proper training, and knowing when to walk away from potentially dangerous situations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can process servers carry weapons in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oklahoma has constitutional carry laws allowing law-abiding citizens to carry firearms without a permit. However, process servers must evaluate whether carrying a weapon is appropriate for their specific situation and comply with all federal and state restrictions on where firearms may be carried.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if someone threatens me while serving papers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If threatened while serving papers, immediately de-escalate by remaining calm, backing away, and leaving the situation. Do not argue or try to force service. Document the incident, notify your supervisor or client, and if the threat is credible, contact law enforcement.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should a process server walk away from a service attempt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Process servers should walk away when encountering aggressive animals, multiple hostile individuals, signs of intoxication or drug use, visible weapons, or any situation where personal safety is compromised. No document service is worth risking your safety.',
      },
    },
    {
      '@type': 'Question',
      name: 'What personal safety equipment should process servers carry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential safety equipment includes a fully charged cell phone, pepper spray (where legal), a flashlight, first aid kit, GPS or navigation device, emergency contact list, and appropriate clothing for the environment. Some servers also carry body cameras for documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are process servers allowed to defend themselves in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Process servers have the same right to self-defense as any citizen under Oklahoma law. This includes the right to use reasonable force to protect themselves from imminent harm. However, the primary goal should always be avoidance and de-escalation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What communication protocols should process servers follow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Process servers should check in before and after each service attempt, maintain regular contact with their office, have an emergency contact system in place, use coded phrases for distress situations, and ensure someone always knows their location and expected return time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can process servers improve their situational awareness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Improve situational awareness by conducting pre-service research on the location and recipient, observing the environment before approaching, identifying multiple exit routes, watching for unusual behavior, avoiding distractions like phone use, and trusting your instincts when something feels wrong.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most high-risk scenarios for process servers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'High-risk scenarios include serving domestic violence-related documents, foreclosure and eviction notices, child custody papers, serving at night or in isolated areas, multiple prior failed attempts, known violent individuals, and services at bars or locations where alcohol is consumed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What vehicle safety measures should process servers take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vehicle safety measures include parking for quick exit, keeping doors locked, not leaving documents visible, having keys readily accessible, maintaining your vehicle properly, parking in well-lit areas, and being aware of your surroundings when entering and exiting your vehicle.',
      },
    },
  ],
};

export default function ProcessServerSafetyGuide() {
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-emerald-400" />
            <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">
              Safety & Risk Management
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Process Server Safety Guide for Oklahoma
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Essential safety protocols, risk assessment strategies, and protection measures 
            for process servers working throughout Oklahoma. Learn how to stay safe while 
            effectively serving legal documents.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Written by Joseph Iannazzi
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              50+ Years Combined Experience
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              Safety-Trained Professionals
            </span>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="bg-amber-50 border-l-4 border-amber-500 py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Important Safety Disclaimer</h3>
              <p className="text-amber-700 text-sm">
                This guide provides general safety information for educational purposes only. 
                It does not constitute legal advice or professional security training. Process 
                servers should seek professional safety training and consult with legal counsel 
                regarding specific situations. Your safety is always the top priority—when in 
                doubt, walk away and seek assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Understanding Process Server Safety in Oklahoma
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Process serving is an essential component of the legal system, ensuring that individuals 
            receive proper notification of legal actions against them. While the majority of document 
            services occur without incident, process servers must be prepared for situations where 
            recipients react negatively or circumstances become unsafe.
          </p>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            At <Link href="/" className="text-blue-600 hover:text-blue-800 underline">Just Legal Solutions</Link>, 
            we have over 50 years of combined experience serving legal documents throughout Oklahoma. 
            Our team has developed comprehensive safety protocols that protect our servers while 
            maintaining the highest standards of professional service. This guide shares those 
            proven strategies with aspiring and current process servers.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Whether you are considering a career in process serving or are an experienced professional 
            looking to enhance your safety practices, this guide provides actionable advice for 
            staying safe while performing your duties.
          </p>
        </div>
      </section>

      {/* Risk Assessment Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-slate-900">Risk Assessment for Process Serving</h2>
          </div>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Effective safety begins with thorough risk assessment. Before attempting any service, 
            process servers should evaluate potential risks and plan accordingly. This proactive 
            approach significantly reduces the likelihood of dangerous encounters.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Pre-Service Risk Factors to Consider</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Document Type Risks
              </h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Domestic violence protective orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Child custody and divorce papers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Foreclosure and eviction notices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Criminal court documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Debt collection lawsuits</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Location Risk Factors
              </h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Isolated or rural areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>High-crime neighborhoods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Businesses selling alcohol</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Properties with aggressive dogs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>After-hours or nighttime service</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">The Risk Assessment Checklist</h3>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-8">
            <p className="text-slate-700 mb-4">
              Before each service attempt, complete this mental checklist:
            </p>
            <div className="space-y-3">
              {[
                'Have I researched the recipient and location?',
                'What type of document am I serving?',
                'Are there prior failed attempts that suggest hostility?',
                'What time of day am I attempting service?',
                'Is the location isolated or in a high-traffic area?',
                'Are there potential escape routes if needed?',
                'Does anyone know my location and expected return time?',
                'Is my phone charged and do I have emergency contacts ready?',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" readOnly />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Situational Awareness Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Situational Awareness Techniques</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Situational awareness is the foundation of process server safety. It involves being 
            consciously aware of your environment, recognizing potential threats, and maintaining 
            the ability to respond appropriately to changing circumstances.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">The OODA Loop for Process Servers</h3>
          
          <p className="text-slate-700 mb-6">
            The OODA Loop (Observe, Orient, Decide, Act) is a decision-making framework originally 
            developed for military combat but highly applicable to process serving safety:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">1. OBSERVE</h4>
              <p className="text-blue-800 text-sm">
                Continuously scan your environment. Notice vehicles, people, animals, exits, 
                lighting conditions, and anything unusual. Use all your senses—listen for 
                raised voices, dogs barking, or other warning signs.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-900 mb-2">2. ORIENT</h4>
              <p className="text-green-800 text-sm">
                Process what you observe through the lens of your training and experience. 
                Consider the context: time of day, type of document, recipient's known history, 
                and environmental factors.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h4 className="font-bold text-amber-900 mb-2">3. DECIDE</h4>
              <p className="text-amber-800 text-sm">
                Based on your observations and orientation, make a decision. Should you proceed 
                with service, wait for a better time, or leave the situation entirely? Trust 
                your instincts.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-900 mb-2">4. ACT</h4>
              <p className="text-red-800 text-sm">
                Execute your decision confidently. If serving, do so professionally and exit 
                promptly. If leaving, do so calmly without escalating the situation. Then 
                document everything.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Environmental Scanning Techniques</h3>
          
          <div className="bg-slate-50 p-6 rounded-lg mb-8">
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>360-Degree Awareness:</strong> Before exiting your vehicle, scan the 
                  entire area including behind you, across the street, and in nearby vehicles.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Identify Exits:</strong> Always note multiple exit routes before 
                  approaching a door or entering a building.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Watch for Cues:</strong> Look for signs of recent activity, multiple 
                  vehicles, open windows, or people watching from nearby properties.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Maintain Distance:</strong> Keep a safe buffer zone between yourself 
                  and others. This gives you time to react if someone becomes aggressive.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* De-escalation Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-slate-900">De-escalation Strategies</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            De-escalation is the art of reducing tension and preventing confrontations from 
            becoming dangerous. These techniques are essential skills for every process server 
            and can mean the difference between a successful service and a dangerous situation.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Core De-escalation Principles</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Maintain Calm and Professional Demeanor</h4>
              <p className="text-slate-700">
                Your emotional state directly influences the recipient's reaction. Speak slowly 
                and clearly, maintain a neutral facial expression, and avoid aggressive body 
                language. Even if the recipient becomes angry, your calm presence can prevent 
                the situation from escalating.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Use Non-Threatening Body Language</h4>
              <p className="text-slate-700">
                Keep your hands visible and open, avoid pointing, maintain appropriate distance 
                (at least 6 feet), and position yourself at an angle rather than directly facing 
                the recipient. These subtle cues communicate that you are not a threat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Practice Active Listening</h4>
              <p className="text-slate-700">
                Allow the recipient to express their feelings without interruption. Often, people 
                simply need to vent their frustration. Acknowledge their emotions with phrases 
                like "I understand this is difficult" without agreeing with their position or 
                engaging in arguments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Avoid Trigger Words and Phrases</h4>
              <p className="text-slate-700">
                Certain words can escalate tensions quickly. Avoid saying "You have to," "I don't care," 
                or "That's not my problem." Instead, use neutral language: "I'm required to deliver 
                these documents" or "I understand your frustration."
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">The LEAPS De-escalation Model</h3>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200 mb-8">
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-purple-700 mb-2">L</div>
                <div className="font-semibold text-slate-900">Listen</div>
                <div className="text-sm text-slate-600 mt-1">Hear them out fully</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-purple-700 mb-2">E</div>
                <div className="font-semibold text-slate-900">Empathize</div>
                <div className="text-sm text-slate-600 mt-1">Acknowledge feelings</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-purple-700 mb-2">A</div>
                <div className="font-semibold text-slate-900">Ask</div>
                <div className="text-sm text-slate-600 mt-1">Clarify concerns</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-purple-700 mb-2">P</div>
                <div className="font-semibold text-slate-900">Paraphrase</div>
                <div className="text-sm text-slate-600 mt-1">Show understanding</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-purple-700 mb-2">S</div>
                <div className="font-semibold text-slate-900">Summarize</div>
                <div className="text-sm text-slate-600 mt-1">Confirm next steps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Walk Away Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-slate-900">When to Walk Away</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Knowing when to leave a situation is one of the most important safety skills a 
            process server can develop. No document service is worth risking your personal 
            safety. Recognizing the signs that indicate it's time to walk away can prevent 
            dangerous encounters.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Immediate Departure Indicators
            </h3>
            <ul className="space-y-3 text-red-800">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Any verbal threat of violence or physical harm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Visible weapons or indication that weapons are present</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Signs of severe intoxication or drug impairment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Multiple hostile individuals converging on your position</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Aggressive dogs that cannot be controlled</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Physical barriers preventing quick exit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Your instincts telling you something is wrong</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">How to Exit Safely</h3>

          <div className="bg-slate-50 p-6 rounded-lg mb-8">
            <ol className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                <div>
                  <strong>Stay Calm:</strong> Do not show fear or panic, but do not engage further either.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                <div>
                  <strong>Use Neutral Language:</strong> Say something like "I'll come back another time" or simply "I need to go."
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                <div>
                  <strong>Back Away:</strong> Do not turn your back on the recipient. Back away while keeping them in view.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                <div>
                  <strong>Get to Your Vehicle:</strong> Move quickly but calmly to your vehicle and lock the doors immediately.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
                <div>
                  <strong>Document Immediately:</strong> Record all details while they are fresh in your memory.
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Vehicle Safety Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Car className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Vehicle Safety for Process Servers</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Your vehicle is both your transportation and potential safe haven. Proper vehicle 
            safety practices can protect you before, during, and after service attempts.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Parking Strategies
              </h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Park facing your exit route</li>
                <li>• Leave room to pull forward without backing up</li>
                <li>• Choose well-lit, visible areas</li>
                <li>• Avoid blocking driveways or other vehicles</li>
                <li>• Note landmarks for quick location reference</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Vehicle Security
              </h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Keep doors locked when not entering/exiting</li>
                <li>• Never leave documents visible</li>
                <li>• Have keys ready before approaching</li>
                <li>• Check back seat before entering</li>
                <li>• Keep windows up in unfamiliar areas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Maintenance Essentials
              </h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Regular oil and fluid checks</li>
                <li>• Maintain proper tire pressure</li>
                <li>• Keep fuel tank at least half full</li>
                <li>• Working headlights and brake lights</li>
                <li>• Functional door locks and windows</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Emergency Supplies
              </h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• First aid kit</li>
                <li>• Flashlight with extra batteries</li>
                <li>• Jumper cables</li>
                <li>• Water and non-perishable snacks</li>
                <li>• Emergency contact list</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Safety Equipment Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-slate-900">Personal Safety Equipment</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Having the right safety equipment can provide peace of mind and practical protection 
            in challenging situations. Here are the essential items every Oklahoma process server 
            should consider carrying.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Essential Safety Equipment</h3>

          <div className="space-y-4 mb-8">
            {[
              {
                item: 'Fully Charged Cell Phone',
                description: 'Your primary lifeline. Keep it charged and have emergency contacts programmed. Consider a portable charger for long days.',
                priority: 'Critical',
              },
              {
                item: 'Pepper Spray',
                description: 'Legal in Oklahoma for self-defense. Ensure you know how to use it and check expiration dates regularly.',
                priority: 'High',
              },
              {
                item: 'Flashlight',
                description: 'Essential for early morning or evening services. Choose a bright, reliable model with long battery life.',
                priority: 'High',
              },
              {
                item: 'First Aid Kit',
                description: 'Basic supplies for minor injuries. Include bandages, antiseptic wipes, pain relievers, and any personal medications.',
                priority: 'Medium',
              },
              {
                item: 'GPS/Navigation Device',
                description: 'Know your location at all times. GPS also helps others locate you in an emergency.',
                priority: 'High',
              },
              {
                item: 'Body Camera',
                description: 'Documents interactions and can deter aggressive behavior. Check local laws regarding recording consent.',
                priority: 'Medium',
              },
              {
                item: 'Whistle or Personal Alarm',
                description: 'Can attract attention and deter attackers. Lightweight and easy to carry.',
                priority: 'Medium',
              },
              {
                item: 'Appropriate Footwear',
                description: 'Closed-toe shoes suitable for running if necessary. Avoid heels or slippery soles.',
                priority: 'High',
              },
            ].map((equipment, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-lg flex items-start gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
                  equipment.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                  equipment.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {equipment.priority}
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">{equipment.item}</h4>
                  <p className="text-slate-600 text-sm">{equipment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Protocols Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Communication Protocols</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Establishing clear communication protocols ensures that someone always knows where 
            you are and can send help if needed. These systems are essential for solo process 
            servers who work independently in the field.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Check-In Procedures</h3>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Before Service</h4>
                  <p className="text-slate-700 text-sm">
                    Notify your office or contact person of your destination, recipient name, 
                    expected arrival time, and estimated completion time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">After Service</h4>
                  <p className="text-slate-700 text-sm">
                    Check in immediately after completing service or leaving the location. 
                    Report success, failure, or any incidents that occurred.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Overdue Protocol</h4>
                  <p className="text-slate-700 text-sm">
                    Establish what happens if you don't check in within a specified timeframe. 
                    Your contact should attempt to reach you and have a plan for escalating 
                    to emergency services if necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Emergency Codes and Signals</h3>

          <p className="text-slate-700 mb-4">
            Develop coded phrases that communicate distress without alerting the recipient:
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-amber-200">
                  <th className="text-left py-2 text-amber-900">Code Phrase</th>
                  <th className="text-left py-2 text-amber-900">Meaning</th>
                </tr>
              </thead>
              <tbody className="text-amber-800">
                <tr className="border-b border-amber-100">
                  <td className="py-2 font-mono">"I need to call the office about file 911"</td>
                  <td className="py-2">Emergency - send help</td>
                </tr>
                <tr className="border-b border-amber-100">
                  <td className="py-2 font-mono">"The file needs additional documentation"</td>
                  <td className="py-2">Hostile situation - monitoring</td>
                </tr>
                <tr className="border-b border-amber-100">
                  <td className="py-2 font-mono">"I'll need to return with more information"</td>
                  <td className="py-2">Leaving situation - no service</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">"The weather is getting bad here"</td>
                  <td className="py-2">Environment unsafe - leaving</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Handling Hostile Recipients Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-slate-900">Handling Hostile Recipients</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Despite your best efforts at de-escalation, you may encounter recipients who are 
            openly hostile or aggressive. Knowing how to respond can protect you from harm 
            while maintaining your professional obligations.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Types of Hostile Reactions</h3>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">Verbally Hostile</h4>
              <p className="text-orange-800 text-sm">
                Yelling, cursing, threats, or aggressive language. Often the recipient is 
                venting frustration rather than posing physical danger.
              </p>
            </div>
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Physically Intimidating</h4>
              <p className="text-red-800 text-sm">
                Approaching aggressively, blocking exit, pounding fists, or throwing objects. 
                Requires immediate de-escalation or departure.
              </p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Refusing to Accept</h4>
              <p className="text-purple-800 text-sm">
                Refusing documents, closing doors, or walking away. In Oklahoma, you may 
                be able to drop-serve depending on document type.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Response Strategies by Threat Level</h3>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-5">
              <h4 className="font-semibold text-green-900 mb-2">Low Threat: Verbal Hostility Only</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Maintain professional composure</li>
                <li>• Do not engage in argument</li>
                <li>• State your purpose calmly and clearly</li>
                <li>• Attempt to complete service if safe</li>
                <li>• Document the interaction thoroughly</li>
              </ul>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5">
              <h4 className="font-semibold text-amber-900 mb-2">Medium Threat: Physical Intimidation</h4>
              <ul className="text-amber-800 text-sm space-y-1">
                <li>• Create distance immediately</li>
                <li>• Use de-escalation techniques</li>
                <li>• Position yourself near an exit</li>
                <li>• Be prepared to leave without serving</li>
                <li>• Contact supervisor or law enforcement if needed</li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-5">
              <h4 className="font-semibold text-red-900 mb-2">High Threat: Imminent Violence</h4>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Leave immediately without engaging</li>
                <li>• Call 911 if threatened with violence</li>
                <li>• Do not return without law enforcement</li>
                <li>• Document everything for legal and safety records</li>
                <li>• Report to your employer and consider refusing future service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* High-Risk Scenarios Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-slate-900">High-Risk Scenarios</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Certain situations present elevated risks for process servers. Recognizing these 
            scenarios allows you to take additional precautions or decline service when 
            appropriate.
          </p>

          <div className="space-y-6 mb-8">
            {[
              {
                scenario: 'Domestic Violence Cases',
                risks: 'Recipients may be emotionally volatile, have substance abuse issues, or be actively violent.',
                precautions: 'Consider law enforcement accompaniment, serve during daylight hours, have escape route planned.',
              },
              {
                scenario: 'Foreclosure and Eviction Notices',
                risks: 'Recipients facing loss of home may be desperate, angry, or financially devastated.',
                precautions: 'Serve early in the day, avoid weekends when stress may be higher, maintain extra distance.',
              },
              {
                scenario: 'Child Custody Disputes',
                risks: 'High emotional stakes, potential for parental alienation claims, volatile family dynamics.',
                precautions: 'Serve at neutral locations when possible, avoid school pickups, document everything.',
              },
              {
                scenario: 'Multiple Failed Attempts',
                risks: 'Recipient may be actively avoiding service, increasing hostility with each attempt.',
                precautions: 'Research alternative addresses, consider stakeout with partner, inform client of difficulties.',
              },
              {
                scenario: 'Night or Early Morning Service',
                risks: 'Reduced visibility, fewer witnesses, recipients more likely to be alarmed or intoxicated.',
                precautions: 'Use extra lighting, park in well-lit areas, consider postponing until daylight.',
              },
              {
                scenario: 'Bars and Alcohol-Serving Establishments',
                risks: 'Intoxicated patrons, reduced inhibitions, unpredictable behavior.',
                precautions: 'Serve during slower hours, request manager assistance, leave immediately if situation escalates.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  {item.scenario}
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-red-700">Risks:</span>
                    <p className="text-slate-600 mt-1">{item.risks}</p>
                  </div>
                  <div>
                    <span className="font-medium text-green-700">Precautions:</span>
                    <p className="text-slate-600 mt-1">{item.precautions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Defense Considerations Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Self-Defense Considerations</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Understanding your legal rights regarding self-defense is essential for process 
            servers in Oklahoma. This section covers the legal framework and practical 
            considerations for protecting yourself.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Oklahoma Self-Defense Laws</h3>
            <p className="text-blue-800 mb-4">
              Oklahoma recognizes the right to self-defense under several legal doctrines:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Stand Your Ground:</strong> Oklahoma law does not require retreat before using force if you are in a place you have a right to be.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Castle Doctrine:</strong> Enhanced protections for self-defense in your home or vehicle.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>Reasonable Force:</strong> Force used must be proportional to the threat faced.</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Important Legal Considerations</h3>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
            <h4 className="font-semibold text-amber-900 mb-3">Disclaimer</h4>
            <p className="text-amber-800 text-sm mb-4">
              This information is for educational purposes only and does not constitute legal 
              advice. Self-defense laws are complex and fact-specific. Consult with an Oklahoma 
              attorney for guidance on your specific situation.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-slate-50 p-5 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">Duty to Retreat vs. Stand Your Ground</h4>
              <p className="text-slate-700 text-sm">
                Oklahoma is a Stand Your Ground state, meaning you generally have no duty to 
                retreat before using force if you are in a place where you have a legal right 
                to be and are not engaged in illegal activity. However, the best self-defense 
                is always avoiding dangerous situations when possible.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">Use of Deadly Force</h4>
              <p className="text-slate-700 text-sm">
                Deadly force is only justified when facing imminent threat of death or serious 
                bodily harm. Process servers should prioritize de-escalation and retreat over 
                confrontation. The use of deadly force carries severe legal consequences and 
                should be an absolute last resort.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">Non-Lethal Options</h4>
              <p className="text-slate-700 text-sm">
                Consider non-lethal self-defense options such as pepper spray, personal alarms, 
                or self-defense training. These tools can help you escape dangerous situations 
                without the legal complications of using lethal force.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Self-Defense Training Recommendations</h3>

          <p className="text-slate-700 mb-4">
            Professional self-defense training can provide valuable skills and confidence. 
            Consider the following options:
          </p>

          <ul className="space-y-2 text-slate-700 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Basic self-defense courses at local martial arts studios or community centers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Situational awareness and de-escalation workshops</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Pepper spray certification courses</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Firearms training if you choose to carry (strongly recommended even with constitutional carry)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Emergency Procedures Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-slate-900">Emergency Procedures</h2>
          </div>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Despite all precautions, emergencies can still occur. Having clear procedures in 
            place ensures you can respond effectively when seconds count.
          </p>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Emergency Contact List</h3>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-8">
            <p className="text-slate-700 mb-4">
              Program these numbers into your phone and keep a written copy in your vehicle:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="font-semibold text-red-900">911</div>
                <div className="text-red-700 text-sm">Emergency Services</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-900">Office/Supervisor</div>
                <div className="text-blue-700 text-sm">Your primary contact</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-900">Family Member</div>
                <div className="text-green-700 text-sm">Emergency contact</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="font-semibold text-purple-900">Legal Counsel</div>
                <div className="text-purple-700 text-sm">If applicable</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Emergency Response Steps</h3>

          <div className="space-y-4 mb-8">
            {[
              {
                step: 1,
                title: 'Ensure Immediate Safety',
                action: 'Get to a safe location. Your vehicle is often the best option. Lock doors and start the engine.',
              },
              {
                step: 2,
                title: 'Call for Help',
                action: 'Dial 911 if there is any threat to your safety. Provide your location clearly and describe the situation.',
              },
              {
                step: 3,
                title: 'Notify Your Office',
                action: 'Contact your supervisor or dispatcher to inform them of the emergency and your location.',
              },
              {
                step: 4,
                title: 'Document Everything',
                action: 'Once safe, write down all details while they are fresh: time, location, description of individuals, what was said, and any witnesses.',
              },
              {
                step: 5,
                title: 'Follow Up',
                action: 'File any necessary reports, seek medical attention if needed, and participate in any investigations.',
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-slate-700 text-sm">{item.action}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-100 border border-amber-300 rounded-lg p-6">
            <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Remember
            </h4>
            <p className="text-amber-800">
              Your safety is always more important than completing a service. No document is 
              worth risking your life or health. When in doubt, leave the situation and seek help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions About Process Server Safety
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'Is process serving a dangerous job in Oklahoma?',
                answer: 'Process serving carries inherent risks but is generally safe when proper safety protocols are followed. Most recipients accept documents without incident. The key is situational awareness, proper training, and knowing when to walk away from potentially dangerous situations. At Just Legal Solutions, our 50+ years of combined experience show that safety-conscious servers rarely encounter serious problems.',
              },
              {
                question: 'Can process servers carry weapons in Oklahoma?',
                answer: 'Oklahoma has constitutional carry laws allowing law-abiding citizens to carry firearms without a permit. However, process servers must evaluate whether carrying a weapon is appropriate for their specific situation and comply with all federal and state restrictions on where firearms may be carried. Many experienced servers prefer non-lethal options like pepper spray and focus on avoidance and de-escalation techniques.',
              },
              {
                question: 'What should I do if someone threatens me while serving papers?',
                answer: 'If threatened while serving papers, immediately de-escalate by remaining calm, backing away, and leaving the situation. Do not argue or try to force service. Document the incident, notify your supervisor or client, and if the threat is credible, contact law enforcement. Your safety is always the priority—no service is worth risking harm.',
              },
              {
                question: 'When should a process server walk away from a service attempt?',
                answer: 'Process servers should walk away when encountering aggressive animals, multiple hostile individuals, signs of intoxication or drug use, visible weapons, verbal threats, or any situation where personal safety is compromised. Trust your instincts—if something feels wrong, it probably is. No document service is worth risking your safety.',
              },
              {
                question: 'What personal safety equipment should process servers carry?',
                answer: 'Essential safety equipment includes a fully charged cell phone, pepper spray (where legal), a flashlight, first aid kit, GPS or navigation device, emergency contact list, and appropriate clothing for the environment. Some servers also carry body cameras for documentation. Always ensure your equipment is in working order before heading out.',
              },
              {
                question: 'Are process servers allowed to defend themselves in Oklahoma?',
                answer: 'Process servers have the same right to self-defense as any citizen under Oklahoma law. This includes the right to use reasonable force to protect themselves from imminent harm. Oklahoma is a Stand Your Ground state, meaning you generally have no duty to retreat if you are in a place you have a legal right to be. However, the primary goal should always be avoidance and de-escalation.',
              },
              {
                question: 'What communication protocols should process servers follow?',
                answer: 'Process servers should check in before and after each service attempt, maintain regular contact with their office, have an emergency contact system in place, use coded phrases for distress situations, and ensure someone always knows their location and expected return time. Establish clear check-in procedures and overdue protocols with your employer or designated contact person.',
              },
              {
                question: 'How can process servers improve their situational awareness?',
                answer: 'Improve situational awareness by conducting pre-service research on the location and recipient, observing the environment before approaching, identifying multiple exit routes, watching for unusual behavior, avoiding distractions like phone use, and trusting your instincts when something feels wrong. Practice the OODA Loop (Observe, Orient, Decide, Act) decision-making framework.',
              },
              {
                question: 'What are the most high-risk scenarios for process servers?',
                answer: 'High-risk scenarios include serving domestic violence-related documents, foreclosure and eviction notices, child custody papers, serving at night or in isolated areas, multiple prior failed attempts, known violent individuals, and services at bars or locations where alcohol is consumed. Extra precautions should be taken in these situations, including considering law enforcement accompaniment.',
              },
              {
                question: 'What vehicle safety measures should process servers take?',
                answer: 'Vehicle safety measures include parking for quick exit, keeping doors locked, not leaving documents visible, having keys readily accessible, maintaining your vehicle properly, parking in well-lit areas, and being aware of your surroundings when entering and exiting your vehicle. Your vehicle should be considered both transportation and a potential safe haven.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-slate-700 pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Training CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Professional Safety-Trained Process Servers</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            At Just Legal Solutions, all our process servers undergo comprehensive safety training 
            and follow strict protocols to ensure every service is completed safely and professionally.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Our Services
            </Link>
            <Link 
              href="/contact/"
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-slate-400">
            Questions about process serving safety? Call us at{' '}
            <a href="tel:539-367-6832" className="text-emerald-400 hover:text-emerald-300">
              (539) 367-6832
            </a>
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/how-to-become-process-server-oklahoma/"
              className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-slate-900 mb-2">Become a Process Server</h3>
              <p className="text-slate-600 text-sm">Complete guide to starting your career in Oklahoma</p>
            </Link>
            <Link 
              href="/oklahoma-process-server-requirements/"
              className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-slate-900 mb-2">Oklahoma Requirements</h3>
              <p className="text-slate-600 text-sm">CLEET licensing and state requirements</p>
            </Link>
            <Link 
              href="/process-server-training-oklahoma/"
              className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-slate-900 mb-2">Training Programs</h3>
              <p className="text-slate-600 text-sm">Find approved training courses in Oklahoma</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 px-4 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-slate-500">JI</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">About the Author</h3>
              <p className="text-slate-600 font-medium mb-2">Joseph Iannazzi, Owner - Just Legal Solutions</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Joseph Iannazzi has been serving legal documents throughout Oklahoma for over two decades. 
                As the owner of Just Legal Solutions, he has built a team of safety-trained professionals 
                with 50+ years of combined experience. Joseph is committed to promoting safety awareness 
                and professional standards in the process serving industry. For questions about this guide 
                or professional process serving services, contact Just Legal Solutions at{' '}
                <a href="tel:539-367-6832" className="text-blue-600 hover:underline">(539) 367-6832</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Disclaimer */}
      <section className="py-8 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-500 text-xs text-center">
            Disclaimer: This guide is provided for educational purposes only and does not constitute 
            legal advice or professional security training. Process servers should seek professional 
            safety training and consult with legal counsel regarding specific situations. Laws and 
            regulations may change; always verify current requirements with appropriate authorities. 
            Just Legal Solutions and the author disclaim any liability for actions taken based on 
            the information provided in this guide.
          </p>
        </div>
      </section>
    </main>
  );
}
