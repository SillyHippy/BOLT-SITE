"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { CreditCard, DollarSign, ArrowRight } from 'lucide-react';

export default function PaymentsPage() {
  const router = useRouter(); // Initialize the router

  // Function to handle navigation and scrolling
  const handleNav = (path: string) => {
    router.push(path);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="pt-24 pb-16">
        {/* Header */}
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Make a Payment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            We offer several convenient ways to pay your invoice. Please note that payment is due on the date specified on the invoice. For our full payment terms, please see our{' '}
            {/* --- EDITED --- */}
            <button onClick={() => handleNav('/pricing#policies')} className="text-blue-600 hover:underline font-medium">
              Payment & Late Fee Policy
            </button>.
            <br/><br/>
            For new clients, we require payment in advance. If you have any questions about your balance, please contact us.
          </p>
        </div>

        {/* Payment Options Grid... (no changes here) */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* ... cards ... */}
        </div>

      </div>
    </main>
  );
}

