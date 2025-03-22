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
            If you find that you do not see exactly what you&apos;re looking for in our service offerings, if your specific situation is particularly complex or unique, or if you feel that our prices might not be competitive enough for your needs, please do not hesitate to reach out, instead of seeking alternatives elsewhere. Simply contact us directly, and we&apos;ll work together closely to understand your requirements and develop tailored solutions to meet your process serving needs effectively.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Service Packages</h2>
          <p className="text-center text-gray-600 mb-12">
            Explore our competitive pricing plans tailored for your legal needs. 75 Dollars per Service, 30 Miles Included, 70 Cents per Mile Over
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Standard Service</h3>
              <p className="text-3xl font-bold mb-4">$75</p>
              <p className="text-gray-600 mb-4">Ideal for routine document delivery.</p>
              <p className="text-sm text-gray-500">
                First Service Attempt Within 7 Business Days (usually sooner)
              </p>
            </div>

            {/* Rush Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Rush Service</h3>
              <p className="text-3xl font-bold mb-4">$100</p>
              <p className="text-gray-600 mb-4">For urgent demands that need immediate attention.</p>
              <p className="text-sm text-gray-500">
                A JLS Agent Will Attempt Service Within 72 Hours
              </p>
            </div>

            {/* Same Day Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Same Day Service</h3>
              <p className="text-3xl font-bold mb-4">$160</p>
              <p className="text-gray-600 mb-4">For urgent time-critical matters.</p>
              <p className="text-sm text-gray-500">
                A JLS Agent Will Attempt Service Within 24 Hours
              </p>
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
              <h3 className="font-bold mb-2">EVASIVE RESPONDENT:</h3>
              <p className="text-gray-600">Staking out an evasive respondent will incur a $90.00 per hour additional fee with a one-hour minimum. This is an additional fee and will only be used at your request.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">MULTIPLE SERVICES AT SAME ADDRESS:</h3>
              <p className="text-gray-600">If more than one person needs to be served at an address (i.e. husband and wife), then it is only $35.00 per extra person served.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">FILING AFFIDAVITS:</h3>
              <p className="text-gray-600">If court is in Tulsa County, PPS can file at the courthouse for you for an additional $40 (other counties will be an additional charge and discussed with the client beforehand). If you would like this additional service, please discuss it when setting up your process service. Otherwise, the original Return of Service Affidavit will be mailed to you with the invoice once completed.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">POSTING AFFIDAVITS:</h3>
              <p className="text-gray-600">If you require us to post an affidavit and not personally serve the respondent, such as an eviction notice, then this service will still incur the same fee of $80.00.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">CERTIFIED MAILING OF AFFIDAVITS:</h3>
              <p className="text-gray-600">If you require us to send the affidavit to the respondent via certified mail, then this service incurs a fee of $40.00 plus the price of the certified mail. This fee is in addition to any other services we provide to you.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">SKIP TRACING SERVICES:</h3>
              <p className="text-gray-600">Can be provided at an additional fee discussed beforehand.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
