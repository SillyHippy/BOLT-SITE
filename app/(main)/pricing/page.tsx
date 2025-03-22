import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Pricing & Packages',
  description: 'Transparent pricing for process serving, document delivery, and legal support services. Competitive rates with standard, rush, and same-day service options.',
  openGraph: {
    title: 'Service Pricing & Packages | Just Legal Solutions',
    description: 'Transparent pricing for process serving, document delivery, and legal support services. Competitive rates with standard, rush, and same-day service options.'
  }
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Partner Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">JLS Wants to Partner with You:</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            If you find that you do not see exactly what you&apos;re looking for in our service offerings, if your specific situation is particularly complex or unique, or if you feel that our prices might not be competitive enough for your needs, please do not hesitate to reach out. Simply contact us directly, and we&apos;ll work together closely to understand your requirements and develop tailored solutions to meet your process serving needs effectively.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Service Packages</h2>
          <p className="text-center text-gray-600 mb-12">
            Explore our competitive pricing plans tailored for your legal needs. 75 Dollars per Service, 30 Miles Included, 70 Cents per Mile Over.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Standard Service</h3>
              <p className="text-3xl font-bold mb-4">$75</p>
              <p className="text-gray-600 mb-4">Ideal for routine document delivery.</p>
              <p className="text-sm text-gray-500">First Service Attempt Within 7 Business Days (usually sooner).</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Rush Service</h3>
              <p className="text-3xl font-bold mb-4">$100</p>
              <p className="text-gray-600 mb-4">For urgent demands that need immediate attention.</p>
              <p className="text-sm text-gray-500">A JLS Agent Will Attempt Service Within 72 Hours.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Same Day Service</h3>
              <p className="text-3xl font-bold mb-4">$160</p>
              <p className="text-gray-600 mb-4">For urgent time-critical matters.</p>
              <p className="text-sm text-gray-500">A JLS Agent Will Attempt Service Within 24 Hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Additional and Optional Services</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">SAME-DAY/RUSH:</h3>
              <p className="text-gray-600">This specific service, which requires prompt action, requires an additional fee. This charge is strictly applied when you or your client requests that the respondent be served on the same day we receive your court documents or, alternatively, within a specific timeframe of 24 hours.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">30 MILES INCLUDED:</h3>
              <p className="text-gray-600">As part of our service fee, the first 30 miles of travel are included. If travel beyond this 30-mile range becomes necessary, it will be charged at the rate of $0.70 per mile for the excess distance.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Evasive Respondent Stakeout:</h3>
              <p className="text-gray-600">If a respondent is actively evading service, we can conduct a stakeout for an additional $90.00 per hour, with a one-hour minimum. This service is only provided upon your request.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Multiple Services at Same Address:</h3>
              <p className="text-gray-600">If more than one individual needs to be served at the same address (e.g., husband and wife), the additional service costs only $35.00 per extra person.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Filing Affidavits:</h3>
              <p className="text-gray-600">For Tulsa County cases, we can file affidavits at the courthouse for an additional $40.00. Filing in other counties may incur additional fees, which will be discussed beforehand.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Certified Mailing of Affidavits:</h3>
              <p className="text-gray-600">If an affidavit needs to be sent via certified mail, the service fee is $40.00 plus the cost of certified mail. This charge is in addition to other services provided.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Skip Tracing Services:</h3>
              <p className="text-gray-600">If a respondent cannot be located, we offer skip tracing services at an additional fee, which will be discussed beforehand.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">PRINTING OF DOCUMENTS:</h3>
              <p className="text-gray-600">The first 10 pages are printed free when documents are emailed to us. Each additional page is $0.20.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">SET TIME OF SERVICE:</h3>
              <p className="text-gray-600">If service is required at a specific time and date, this request may incur an additional fee, similar to a rush service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Service Policy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Non-Service Policy</h2>
          <p className="text-gray-600">
            While we strive to complete all service requests efficiently, some respondents may be unlocatable or actively evade service. If service is attempted but unsuccessful, the standard $75.00 service fee still applies.
          </p>
        </div>
      </section>
    </main>
  );
}
