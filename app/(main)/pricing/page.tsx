"use client"; // This is required for the scrolling logic to work

import React, { useEffect } from 'react';
import { CheckCircle, Truck } from 'lucide-react';

// Data for additional services for easy management
const additionalServices = [
    { title: 'Filing Affidavits', description: 'We can file the Return of Service Affidavit with the court for you. The fee is <strong>$35 plus court costs</strong> for Tulsa County. Fees for other counties will be quoted upfront.' },
    { title: 'Printing Documents', description: 'The first 10 pages are printed free of charge. Additional pages are <strong>$0.20 per page</strong>.' },
    { title: 'Set Time of Service', description: 'If you require service at a specific time and date, an additional rush fee may apply. This will be confirmed with you beforehand.' },
    { title: 'Evasive Respondent Stakeout', description: 'For difficult-to-serve individuals, stakeout services are available at <strong>$90 per hour</strong> (one-hour minimum). This is only performed at your request.' },
    { title: 'Multiple Services at Same Address', description: 'When serving multiple individuals at the same location, each additional person is only <strong>$30</strong>.' },
    { title: 'Posting Affidavits', description: 'For services that require posting a notice (e.g., eviction notices) instead of personal delivery, the fee is <strong>$40</strong>.' },
    { title: 'Certified Mailing', description: 'We can send affidavits via certified mail for <strong>$35 plus postage costs</strong>.' },
    { title: 'Skip Tracing', description: 'Need to locate an individual? We offer skip tracing services. Please contact us for a quote.' },
];


export default function PricingPage() {
  
  // Scrolling logic from previous step
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []); 

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* --- EDITED --- Reduced bottom padding (pb-16 to pb-10) */}
      <section className="pt-24 pb-10 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">JLS Wants to Partner with You</h2>
          <p className="text-gray-700 text-lg font-medium max-w-4xl mx-auto">
            <strong>If you don't see exactly what you're looking for</strong> in our service offerings, have a particularly complex or unique situation, or <strong>need more competitive pricing</strong>, we encourage you to reach out <strong>before exploring alternatives.</strong> We're happy to discuss your specific needs and create tailored solutions that work for you. <span className="text-blue-600 font-semibold">Bulk and volume pricing available upon request</span>—contact us directly to learn more!
          </p>
        </div>
      </section>

      {/* --- EDITED --- Reduced vertical padding (py-12 to py-10) */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Process Service Packages</h2>
            <p className="text-lg text-gray-600 mt-2 mb-6">
              Explore our competitive pricing plans tailored for your legal needs.
            </p>
            <div className="max-w-3xl mx-auto bg-blue-50/50 border border-blue-200 rounded-lg p-3 mb-12">
                <p className="text-sm text-blue-800">
                    <span className="font-semibold">Note on Service Area:</span> Standard rates apply to <strong>Tulsa County</strong> and select parts of <strong>Creek County (Sapulpa)</strong> & <strong>Wagoner County (Broken Arrow)</strong>. A surcharge applies to all other areas. Please contact us for a precise quote.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards remain the same */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Standard Service</h3>
              <p className="text-4xl font-bold mb-4 text-gray-800">$60</p>
              <p className="text-gray-600 mb-4">First Service Attempt Within 5 Business Days (usually sooner).</p>
              <p className="text-base text-gray-500">
                Ideal for routine document delivery.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Rush Service</h3>
              <p className="text-4xl font-bold mb-4 text-gray-800">$100</p>
              <p className="text-gray-600 mb-4">A JLS Agent Will Attempt Service Within 72 Hours or Sooner.</p>
              <p className="text-base text-gray-500">
                For urgent demands that need immediate attention.
              </p>
            </div>
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

      {/* --- EDITED --- Reduced vertical padding (py-12 to py-10) */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center bg-blue-100 rounded-full p-3 mb-4">
                    <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Courier Service Pricing</h2>
                <p className="text-lg text-gray-600 mt-2">
                    For fast and reliable document transportation.
                </p>
            </div>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Cards remain the same */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Standard Courier</h3>
                    <p className="text-4xl font-bold mb-4 text-gray-800">$35</p>
                    <p className="text-gray-600">Delivery within the same business day or next morning for non-urgent items.</p>
                </div>
                 <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Rush Courier</h3>
                    <p className="text-4xl font-bold mb-4 text-gray-800">$55</p>
                    <p className="text-gray-600">Priority delivery guaranteed within 2-3 hours for time-sensitive documents.</p>
                </div>
            </div>
             <p className="text-center text-sm text-gray-500 mt-8">
                Courier pricing applies to Tulsa County, Broken Arrow, & the Sapulpa area. A surcharge applies to other locations.
            </p>
        </div>
      </section>

      {/* --- EDITED --- Reduced vertical padding (py-16 md:py-20 to py-10) */}
       <section className="py-10 bg-gray-50">
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

      {/* --- EDITED --- Reduced vertical padding (py-16 to py-12) */}
      <section id="policies" className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Policies</h2>
          <div className="text-left grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Policy content remains the same */}
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
            <div>
                 <h3 className="text-xl font-bold mb-3 text-gray-800">Payment & Late Fee Policy</h3>
                <p className="text-gray-700">
                    For new clients, prepayment is required to ensure we can dedicate our resources to your case without delay.
                    <br /><br />
                    For established clients, payment is due on the date specified on the invoice. If payment is not received in full by the due date, a one-time late fee of <strong>$40.00</strong> will be assessed. Furthermore, a service charge of <strong>0.5%</strong> of the total outstanding balance will be applied for each day the payment is late, beginning the day after the due date, until the balance is paid in full.
                </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
