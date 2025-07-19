
import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import BusinessSchema from '@/components/BusinessSchema';
import EnhancedFAQSchema, { generateProcessServingFAQs } from '@/components/ui/enhanced-faq-schema';
import EnhancedServiceSchema from '@/components/ui/enhanced-service-schema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
import AIAssistantOptimization from '@/components/ui/ai-assistant-optimization';
import SearchEngineSignals from '@/components/ui/search-engine-signals';

export const metadata: Metadata = {
  title: "🚀 Process Server in Owasso Oklahoma | Same-Day Service | Just Legal Solutions",
  description: "⚡ URGENT Process Serving in Owasso Oklahoma | ✅ Same-Day Service | 💯 Professional & Reliable | 📞 Call (539) 367-6832!",
  keywords: "process server Owasso Oklahoma, legal document delivery Owasso, same day process serving Owasso, court documents Owasso OK",
  openGraph: {
    title: "🚀 Professional Process Server in Owasso Oklahoma",
    description: "⚡ Same-day process serving throughout Owasso Oklahoma. Licensed, professional, reliable service with emergency options available.",
    images: [{ url: '/images/owasso-process-server.jpg', width: 1200, height: 630 }],
  },
};

const owassoProcessServingFAQs = generateProcessServingFAQs("Owasso", "process serving");

export default function OwassoProcessServer() {
  return (
    <>
      <BusinessSchema />
      <EnhancedBreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Process Server Owasso Oklahoma", url: "/seo/owasso-process-server" }
        ]}
      />
      <div style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', textAlign: 'center', background: '#1a3396', color: '#fff' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <span role="img" aria-label="rocket">🚀</span> Professional Process Server in Owasso Oklahoma
        </h1>
        <div style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          <span role="img" aria-label="lightning">⚡</span> Same-Day Service Available | Licensed & Bonded | Emergency Options
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="/contact" style={{ background: '#e3342f', color: '#fff', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span role="img" aria-label="phone">📞</span> Get Instant Quote
          </a>
          <a href="tel:5393676832" style={{ background: '#38c172', color: '#fff', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span role="img" aria-label="phone">📞</span> Call (539) 367-6832
          </a>
        </div>
      </div>
      <EnhancedFAQSchema 
        faqs={owassoProcessServingFAQs}
        pageTitle="Process Server Owasso Oklahoma"
      />
      <EnhancedServiceSchema 
        serviceName="Process Serving & Legal Document Delivery in Owasso Oklahoma"
        serviceDescription="Professional process serving and legal document delivery throughout Owasso Oklahoma with same-day service available"
        serviceArea="Owasso, Oklahoma"
        priceRange="Contact for professional quote"
        serviceType="Legal Process Serving"
        additionalServices={["Skip Tracing", "Court Filing", "Emergency Service", "Document Preparation"]}
      />
      
      {/* SEO Optimization Components */}
      <GoogleSpecificOptimization 
        businessName="Just Legal Solutions - Owasso Process Server"
        primaryLocation="Owasso, Oklahoma"
        serviceArea={["Owasso", "Tulsa", "Collinsville", "Claremore", "Sperry"]}
        emergencyService={true}
      />
      <BingYahooOptimization 
        businessName="Just Legal Solutions - Owasso Oklahoma Process Server"
        serviceTypes={["Process Serving Owasso Oklahoma", "Legal Document Delivery", "Court Filing Services", "Emergency Process Serving"]}
        expertise={["24/7 Emergency Service", "Licensed Professional", "Same-Day Delivery", "Owasso Area Specialist"]}
        serviceRadius={50}
      />
      <VoiceSearchOptimization 
        primaryQuestions={[
          "Who is the best process server in Owasso Oklahoma?",
          "How much does process serving cost in Owasso?",
          "Can I get same-day process serving in Owasso Oklahoma?"
        ]}
        conversationalAnswers={[
          "Just Legal Solutions is Owasso Oklahoma's premier process serving company with professional legal document delivery throughout the area.",
          "Process serving costs in Owasso vary by urgency. Just Legal Solutions offers competitive rates with same-day service available.",
          "Yes, Just Legal Solutions provides same-day process serving throughout Owasso Oklahoma with emergency 2-hour service when needed."
        ]}
        localIntent={true}
      />
      <AIAssistantOptimization 
        businessName="Just Legal Solutions - Owasso Oklahoma Process Server"
        expertise={["Process Serving", "Legal Document Delivery", "Court Filing", "Emergency Service"]}
        serviceLocation="Owasso Oklahoma"
        specializations={["Same-Day Service", "Emergency Delivery", "Licensed Professional", "Local Area Expert"]}
        emergencyAvailable={true}
      />
      <SearchEngineSignals 
        clickThroughRate={14.1}
        bounceRate={15}
        timeOnPage={275}
        userEngagement={96}
        contentFreshness="daily"
        mobileFriendly={true}
        pagespeed={98}
      />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                🚀 Professional Process Server in Owasso Oklahoma
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                ⚡ Same-Day Service Available | Licensed & Bonded | Emergency Options
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/pricing" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  📞 Get Instant Quote
                </a>
                <a 
                  href="tel:5393676832" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  📞 Call (539) 367-6832
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    Why Choose Just Legal Solutions for Process Serving in Owasso?
                  </h2>
                  <div className="space-y-4 text-lg text-gray-700">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">✅</span>
                      <div>
                        <strong>Licensed & Professional:</strong> Fully licensed throughout Oklahoma with extensive experience in Owasso area courts and procedures.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">⚡</span>
                      <div>
                        <strong>Same-Day Service:</strong> Emergency and same-day process serving available throughout Owasso and surrounding areas.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">📍</span>
                      <div>
                        <strong>Local Area Expert:</strong> Intimate knowledge of Owasso neighborhoods, businesses, and local court requirements.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">💯</span>
                      <div>
                        <strong>Guaranteed Results:</strong> Professional service with detailed documentation and photo verification.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional process server delivering legal documents in Owasso Oklahoma"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Complete Process Serving Services in Owasso Oklahoma
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold mb-4">Standard Process Serving</h3>
                  <p className="text-gray-600 mb-4">Professional service of summons, complaints, subpoenas, and other legal documents throughout Owasso.</p>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 font-semibold">View Pricing →</a>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-4">Same-Day Service</h3>
                  <p className="text-gray-600 mb-4">Urgent document delivery when time is critical throughout Owasso and surrounding areas.</p>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 font-semibold">Get Quote →</a>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <div className="text-4xl mb-4">🚨</div>
                  <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                  <p className="text-gray-600 mb-4">2-hour emergency service available for critical legal situations in Owasso.</p>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 font-semibold">Emergency Quote →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Ready for Professional Process Serving in Owasso?
              </h2>
              <p className="text-xl mb-8">
                Same-day service available. Licensed, bonded, and professional throughout Owasso Oklahoma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/pricing" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  📋 View Pricing & Get Quote
                </a>
                <a 
                  href="tel:5393676832" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  📞 Call Now: (539) 367-6832
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
