"use client";

import { useState } from "react";

export function Footer() {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className="bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-6">
          For any inquiries, please reach out via phone, text, or email. We're here to assist you.
        </p>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
        >
          Fill Out Service Request Form
        </button>

        {showForm && (
          <form 
            action="https://formsubmit.co/el/gakusi" 
            method="POST" 
            className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto"
          >
            <label className="block mb-2 font-bold">Firm Name*</label>
            <input type="text" name="firm_name" required className="w-full p-2 border rounded-md mb-4" />

            {/* File Upload Removed - Added Message Instead */}
            <p className="text-red-600 font-bold mb-4">
              Please email all required files separately to{" "}
              <a href="mailto:info@JustLegalSolutions.org" className="text-blue-600 hover:text-blue-800">
                info@JustLegalSolutions.org
              </a>.
            </p>

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800">
              Submit Request
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600">
              You can reach us at{" "}
              <a href="mailto:info@JustLegalSolutions.org" className="text-blue-600 hover:text-blue-800">
                info@JustLegalSolutions.org
              </a>. We respond promptly to all inquiries.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600">
              Contact us at{" "}
              <a href="tel:539-367-6832" className="text-blue-600 hover:text-blue-800">
                539-367-6832
              </a>. We're here to assist you.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Payments</h3>
            <p className="text-gray-600">
              We accept{" "}
              <a href="https://buy.stripe.com/3cs17SbHS6h95nGaEE" className="text-blue-600 hover:text-blue-800">
                electronic payments
              </a>, cash, checks, or money orders.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
