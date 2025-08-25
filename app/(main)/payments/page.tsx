import React from 'react';
import Image from 'next/image';
import { CreditCard, DollarSign, ArrowRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

export { metadata } from './metadata';

export default function PaymentsPage() {
  return (
    // --- EDITED --- Removed the "min-h-screen" class to fix the large gap
    <main className="bg-gray-50 font-sans">
      {/* --- EDITED --- Adjusted bottom padding for better spacing */}
      <div className="pt-24 pb-20">
        {/* Header */}
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Make a Payment</h1>
          {/* --- EDITED --- Reduced bottom margin (mb-16 to mb-12) */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We offer several convenient ways to pay your invoice. Please note that payment is due on the date specified on the invoice. For our full payment terms, please see our{' '}
            <a href="/pricing#policies" className="text-blue-600 hover:underline font-medium">
              Payment & Late Fee Policy
            </a>.
            <br/><br/>
            For new clients, we require payment in advance. If you have any questions about your balance, please contact us.
          </p>

          {/* Trust Badges for Payment Security */}
          <div className="flex justify-center items-center gap-6 mb-12 flex-wrap">
            <div className="flex flex-col items-center">
              <Image 
                src="/badges/privacy-guaranteed-badge.svg" 
                alt="Privacy Guaranteed - Your Information is Protected" 
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <span className="text-xs text-gray-600 mt-1">Privacy Protected</span>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src="/badges/licensed-bonded-badge.svg" 
                alt="Licensed & Bonded Professional Service" 
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <span className="text-xs text-gray-600 mt-1">Licensed & Bonded</span>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src="/badges/5-star-google-rating-badge.svg" 
                alt="5 Star Google Rating - Trusted Service" 
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <span className="text-xs text-gray-600 mt-1">5-Star Rated</span>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src="/badges/secure-payment-processing-badge.svg" 
                alt="Secure Payment Processing with Bank-Level Encryption" 
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <span className="text-xs text-gray-600 mt-1">Secure Payments</span>
            </div>
          </div>
        </div>

        {/* Payment Options Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          
          {/* Card 1: Electronic Payment */}
          <div 
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            itemScope 
            itemType="https://schema.org/PaymentMethod"
          >
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-4 mb-6">
              <CreditCard className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3" itemProp="name">Pay Online</h2>
            <p className="text-gray-600 mb-6 flex-grow" itemProp="description">
              Securely pay your invoice online using a credit or debit card. Please have your case number ready.
            </p>
            <a 
              href="https://buy.stripe.com/3cs17SbHS6h95nGaEE" 
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pay with Card <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Card 2: Cash/Check Option */}
           <div 
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            itemScope 
            itemType="https://schema.org/PaymentMethod"
          >
            <div className="flex-shrink-0 bg-green-100 rounded-full p-4 mb-6">
              <DollarSign className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3" itemProp="name">Cash, Check, or Money Order</h2>
            <p className="text-gray-600 mb-6 flex-grow" itemProp="description">
              Checks and money orders can be made out to Joseph Iannazzi and mailed to the address below.
            </p>
            <div className="w-full bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-800 font-medium" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">564 E 138th Pl</span><br/>
                  <span itemProp="addressLocality">Glenpool</span>, <span itemProp="addressRegion">OK</span> <span itemProp="postalCode">74033</span>
                </p>
            </div>
          </div>

        </div>
      </div>
      <UnifiedSchema
        pageType="generic"
        url="https://justlegalsolutions.org/payments"
        title="Make a Payment | Just Legal Solutions"
        description="Convenient payment options for Just Legal Solutions' process server and legal document delivery services in Tulsa, Oklahoma."
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 146
        }}
      />
    </main>
  );
}
