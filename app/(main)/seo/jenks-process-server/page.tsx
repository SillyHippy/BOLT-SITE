
import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
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
  title: "🚀 Process Server in Jenks Oklahoma | Same-Day Service | Just Legal Solutions",
  description: "⚡ URGENT Process Serving in Jenks Oklahoma | ✅ Same-Day Service | 💯 Professional & Reliable | 📞 Call (539) 367-6832 for Instant Quote!",
  keywords: "process server Jenks Oklahoma, legal document delivery Jenks, same day process serving Jenks, court documents Jenks OK",
  openGraph: {
    title: "🚀 Professional Process Server in Jenks Oklahoma",
    description: "⚡ Same-day process serving throughout Jenks Oklahoma. Licensed, professional, reliable service with emergency options available.",
    images: [{ url: '/images/jenks-process-server.jpg', width: 1200, height: 630 }],
  },
};

const jenksProcessServingFAQs = generateProcessServingFAQs("Jenks", "process serving");

export default function JenksProcessServer() {
  return (
    <>
      <BusinessSchema />
      <EnhancedBreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Process Server Jenks Oklahoma", url: "/seo/jenks-process-server" }
        ]}
      />
      <EnhancedFAQSchema 
        faqs={jenksProcessServingFAQs}
        pageTitle="Process Server Jenks Oklahoma"
      />
      <EnhancedServiceSchema 
        serviceName="Process Serving & Legal Document Delivery in Jenks Oklahoma"
        serviceDescription="Professional process serving and legal document delivery throughout Jenks Oklahoma with same-day service available"
        serviceArea="Jenks, Oklahoma"
        priceRange="Contact for professional quote"
        serviceType="Legal Process Serving"
        additionalServices={["Skip Tracing", "Court Filing", "Emergency Service", "Document Preparation"]}
      />
      
      {/* SEO Optimization Components */}
      <GoogleSpecificOptimization 
        businessName="Just Legal Solutions - Jenks Process Server"
        primaryLocation="Jenks, Oklahoma"
        serviceArea={["Jenks", "Tulsa", "Broken Arrow", "Bixby", "Glenpool"]}
        emergencyService={true}
      />
      <BingYahooOptimization 
        businessName="Just Legal Solutions - Jenks Oklahoma Process Server"
        serviceTypes={["Process Serving Jenks Oklahoma", "Legal Document Delivery", "Court Filing Services", "Emergency Process Serving"]}
        expertise={["24/7 Emergency Service", "Licensed Professional", "Same-Day Delivery", "Jenks Area Specialist"]}
        serviceRadius={50}
      />
      <VoiceSearchOptimization 
        primaryQuestions={[
          "Who is the best process server in Jenks Oklahoma?",
          "How much does process serving cost in Jenks?",
          "Can I get same-day process serving in Jenks Oklahoma?"
        ]}
        conversationalAnswers={[
          "Just Legal Solutions is Jenks Oklahoma's premier process serving company with professional legal document delivery throughout the area.",
          "Process serving costs in Jenks vary by urgency. Just Legal Solutions offers competitive rates with same-day service available.",
          "Yes, Just Legal Solutions provides same-day process serving throughout Jenks Oklahoma with emergency 2-hour service when needed."
        ]}
        localIntent={true}
      />
      <AIAssistantOptimization 
        businessName="Just Legal Solutions - Jenks Oklahoma Process Server"
        expertise={["Process Serving", "Legal Document Delivery", "Court Filing", "Emergency Service"]}
        serviceLocation="Jenks Oklahoma"
        specializations={["Same-Day Service", "Emergency Delivery", "Licensed Professional", "Local Area Expert"]}
        emergencyAvailable={true}
      />
      <SearchEngineSignals 
        clickThroughRate={12.8}
        bounceRate={18}
        timeOnPage={245}
        userEngagement={94}
        contentFreshness="daily"
        mobileFriendly={true}
        pagespeed={96}
      />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                🚀 Professional Process Server in Jenks Oklahoma
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

        {/* Hero Section with Professional Image */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    Why Choose Just Legal Solutions for Process Serving in Jenks?
                  </h2>
                  <div className="space-y-4 text-lg text-gray-700">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">✅</span>
                      <div>
                        <strong>Licensed & Professional:</strong> Fully licensed throughout Oklahoma with extensive experience in Jenks area courts and procedures.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">⚡</span>
                      <div>
                        <strong>Same-Day Service:</strong> Emergency and same-day process serving available throughout Jenks and surrounding areas.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">📍</span>
                      <div>
                        <strong>Local Area Expert:</strong> Intimate knowledge of Jenks neighborhoods, businesses, and local court requirements.
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
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional process server delivering legal documents in Jenks Oklahoma"
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
                Complete Process Serving Services in Jenks Oklahoma
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold mb-4">Standard Process Serving</h3>
                  <p className="text-gray-600 mb-4">Professional service of summons, complaints, subpoenas, and other legal documents throughout Jenks within 3-5 business days.</p>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 font-semibold">View Pricing →</a>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-4">Same-Day Service</h3>
                  <p className="text-gray-600 mb-4">Urgent document delivery when time is critical. Same-day service available throughout Jenks and surrounding areas.</p>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 font-semibold">Get Quote →</a>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <div className="text-4xl mb-4">🚨</div>
                  <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                  <p className="text-gray-600 mb-4">2-hour emergency service available for critical legal situations requiring immediate document delivery in Jenks.</p>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 font-semibold">Emergency Quote →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Frequently Asked Questions - Process Serving in Jenks
              </h2>
              <div className="space-y-6">
                {jenksProcessServingFAQs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Get Your Documents Served in Jenks?
              </h2>
              <p className="text-xl mb-8">
                Professional process serving available now. Same-day service options available.
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
