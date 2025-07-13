import Image from 'next/image';
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';

export default function TulsaProcessServer() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Process Server in Tulsa, Oklahoma
          </h1>
          <p className="text-xl mb-8">
            Fast, reliable legal document delivery throughout Tulsa County, Broken Arrow, Glenpool, and surrounding communities. Same-day service available.
          </p>
          
          {/* Professional Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop&auto=format"
              alt="Professional legal document delivery service in Tulsa Oklahoma"
              width={600}
              height={300}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 p-3 rounded-lg">
              <div className="font-bold">Same-Day</div>
              <div className="text-blue-200">4-6 hours</div>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <div className="font-bold">Rush Service</div>
              <div className="text-blue-200">2-3 hours</div>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <div className="font-bold">Standard</div>
              <div className="text-blue-200">1-3 days</div>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <div className="font-bold">Starting at</div>
              <div className="text-blue-200">$65</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tulsa Metro Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Tulsa', 'Broken Arrow', 'Glenpool', 'Sapulpa',
              'Bixby', 'Jenks', 'Sand Springs', 'Owasso',
              'Catoosa', 'Claremore', 'Bartlesville', 'Skiatook'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold text-gray-800">{city}</h3>
                <p className="text-sm text-gray-600">Full Service Available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Process Serving in Tulsa Today?</h2>
          <p className="text-xl mb-8">
            Contact Just Legal Solutions for fast, professional service throughout the Tulsa metropolitan area.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="tel:5393676832" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call (539) 367-6832
            </a>
            <a href="mailto:Joseph@JustLegalSolutions.org" className="bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
              Email Joseph@JustLegalSolutions.org
            </a>
          </div>
        </div>
      </section>

      <GoogleSpecificOptimization 
        businessName="Just Legal Solutions - Tulsa Process Server"
        primaryLocation="Tulsa, Oklahoma"
        serviceArea={["Tulsa County", "Broken Arrow", "Glenpool", "Bixby", "Sapulpa"]}
        emergencyService={true}
      />
      <BingYahooOptimization 
        businessName="Just Legal Solutions - Tulsa Process Server"
        serviceTypes={["Process Serving Tulsa", "Legal Document Delivery", "Same-Day Service", "Emergency Process Serving"]}
        expertise={["Tulsa County Coverage", "Professional Delivery", "Same-Day Service", "Licensed Process Server"]}
        serviceRadius={50}
      />
      <DuckDuckGoOptimization 
        businessName="Just Legal Solutions - Tulsa Process Server"
        focusKeywords={["tulsa process server", "process serving tulsa", "legal document delivery tulsa", "same day process server"]}
        privacyFocused={true}
        quickAnswers={true}
      />
      <SearchEngineUniversalOptimization 
        businessName="Just Legal Solutions - Tulsa Process Server"
        primaryService="Process Serving"
        location="Tulsa, Oklahoma"
        emergencyAvailable={true}
      />
    </main>
  );
}
