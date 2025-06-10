import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Pricing & Packages | Just Legal Solutions',
  description: 'Transparent pricing for process serving, document delivery, and legal support services. Competitive rates with standard, rush, and same-day service options.',
  openGraph: {
    title: 'Service Pricing & Packages | Just Legal Solutions',
    description: 'Transparent pricing for process serving, document delivery, and legal support services. Competitive rates with standard, rush, and same-day service options.'
  }
};

// Data for additional services for easy management
const additionalServices = [
    { title: 'Filing Affidavits', description: 'We can file the Return of Service Affidavit with the court for you. The fee is <strong>$35 plus court costs</strong> for Tulsa County. Fees for other counties will be quoted upfront.' },
    { title: 'Printing Documents', description: 'The first 10 pages are printed free of charge. Additional pages are <strong>$0.20 per page</strong>.' },
    { title: 'Set Time of Service', description: 'If you require service at a specific time and date, an additional rush fee may apply. This will be confirmed with you beforehand.' },
    { title: 'Evasive Respondent Stakeout', description: 'For difficult-to-serve individuals, stakeout services are available at <strong>$90 per hour</strong> (one-hour minimum). This is only performed at your request.' },
    { title: 'Multiple Services at Same Address', description: 'When serving multiple individuals at the same location, each additional person is only <strong>$30</strong>.' },
    { title: 'Posting Affidavits', description: 'For services that require posting a notice (e.g., eviction notices) instead of personal delivery, the fee is <strong>$50</strong>.' },
    { title: 'Certified Mailing', description: 'We can send affidavits via certified mail for <strong>$35 plus postage costs</strong>.' },
    { title: 'Skip Tracing', description: 'Need to locate an individual? We offer skip tracing services. Please contact us for a quote.' },
];


export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Partner Section (User's Version) */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">JLS Wants to Partner with You</h2>
          <p className="text-gray-700 text-lg font-medium max-w-4xl mx-auto">
            <strong>If you don't see exactly what you're looking for</strong> in our service offerings, have a particularly complex or unique situation, or <strong>need more competitive pricing</strong>, we encourage you to reach out <strong>before exploring alternatives.</strong> We're happy to discuss your specific needs and create tailored solutions that work for you. <span className="text-blue-600 font-semibold">Bulk and volume pricing available upon request</span>—contact us directly to learn more!
          </p>
        </div>
      </section>

      {/* Service Packages (User's Version) */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Service Packages</h2>
            <p className="text-lg text-gray-600 mt-2 mb-6">
              Explore our competitive pricing plans tailored for your legal needs.
            </p>
             {/* County-Based Pricing - Subtle Callout */}
            <div className="max-w-3xl mx-auto bg-blue-50/50 border border-blue-200 rounded-lg p-3 mb-12">
                <p className="text-sm text-blue-800">
                    <span className="font-semibold">Note on Service Area:</span> Standard rates apply to <strong>Tulsa County</strong> and select parts of <strong>Creek County (Sapulpa)</strong>. A mileage surcharge applies to all other counties. Please contact us for a precise quote.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Service */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Standard Service</h3>
              <p className="text-4xl font-bold mb-4 text-gray-800">$60</p>
              <p className="text-gray-600 mb-4">First Service Attempt Within 5 Business Days (usually sooner).</p>
              <p className="text-base text-gray-500">
                Ideal for routine document delivery.
              </p>
            </div>
            {/* Rush Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Rush Service</h3>
              <p className="text-4xl font-bold mb-4 text-gray-800">$100</p>
              <p className="text-gray-600 mb-4">A JLS Agent Will Attempt Service Within 72 Hours or Sooner.</p>
              <p className="text-base text-gray-500">
                For urgent demands that need immediate attention.
              </p>
            </div>
            {/* Same Day Service */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Same Day Service</h3>
              <p className="text-4xl font-bold mb-4 text-gray-800">$150</p>
              <p className="text-gray-600 mb-4">A JLS Agent Will Attempt Service Within 24 Hours or Sooner.</p>
              <p className="text-base text-gray-500">
                For the most urgent, time-critical matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional and Optional Services (Gemini's Version) */}
       <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Additional & Optional Services</h2>
                <p className="text-lg text-gray-600 mt-2">Customize your service with these available add-ons.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {additionalServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-800">{service.title}</h3>
                            <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: service.description }}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Non-Service Policy */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Policies</h2>
          <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Non-Service Policy</h3>
                <p className="text-gray-700">
                While we strive to ensure the completion of our tasks swiftly and effectively, there may be instances when serving a respondent proves to be impossible for reasons beyond our control (e.g., incorrect addresses, evasive individuals). If we dedicate time and resources to an attempt but are unsuccessful, the standard service fee still applies. We pride ourselves on our high success rates but believe in full transparency.
                </p>
            </div>
            <div>
                 <h3 className="text-xl font-bold mb-3 text-gray-800">Due Diligence Policy</h3>
                <p className="text-gray-700">
                At Just Legal Solutions, we adhere to Oklahoma's due diligence standards. This means our process servers make multiple attempts at different times of day and on different days of the week to demonstrate a thorough and reasonable effort to effectuate personal service before considering alternatives.
                </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
