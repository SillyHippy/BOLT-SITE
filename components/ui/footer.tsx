"use client";

import { useState } from "react";
import Link from 'next/link'; // Import the Link component

// Reverted to a named export to match the import statement in your layout files.
export function Footer() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <footer className="bg-white" id="contact">
      {/* The pb-8 (padding-bottom) was changed to pb-4 to reduce the space below the disclaimer. */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-1">
        <h2 className="text-3xl font-bold mb-6">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-6">
          For any inquiries, please reach out via phone, text, or email. We&apos;re here to assist you.
        </p>

        {/* Buttons for Service Request and Google Review */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={toggleForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showForm ? "Close Form" : "Service Request Form"}
          </button>
          {/* Updated Google Review button with a star icon and new colors */}
          <a
            href="https://g.page/r/Cb81H1j9UTYxEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Leave a Google Review
          </a>
        </div>

        {/* Dropdown Form */}
        {showForm && (
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Service Request Form</h3>
            <p className="text-red-600 font-bold mb-4">
              PLEASE SUBMIT ANY DOCUMENTS VIA EMAIL TO{" "}
              <a
                href="mailto:info@JustLegalSolutions.org"
                className="text-blue-600 hover:text-blue-800"
              >
                info@JustLegalSolutions.org
              </a>
            </p>
            <form
              action="https://formsubmit.co/info@justlegalsolutions.org"
              method="POST"
              className="space-y-4"
            >
              {/* Form content... (no changes here) */}
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-600">
              You can reach us at{" "}
              <a
                href="mailto:info@JustLegalSolutions.org"
                className="text-blue-600 hover:text-blue-800"
              >
                info@JustLegalSolutions.org
              </a>
              . We respond promptly to all inquiries.
            </p>
          </div>

          {/* Call Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Call or Text Us</h3>
            <p className="text-gray-600">
              Contact us anytime Call or Text at{" "}
              <a
                href="tel:539-367-6832"
                className="text-blue-600 hover:text-blue-800"
              >
                539-367-6832
              </a>
              . We&apos;re here and ready to assist you with all your needs.
            </p>
          </div>

          {/* Payments Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Payments</h3>
            <p className="text-gray-600">
              At this time, we accept{" "}
              <a
                href="https://buy.stripe.com/3cs17SbHS6h95nGaEE"
                className="text-blue-600 hover:text-blue-800"
              >
                electronic payments
              </a>
              , cash, checks, or money orders. Payments should be made payable
              to Joseph Iannazzi and mailed to: 564 E 138th Pl, Glenpool, OK
              74033. Past-due invoices are subject to our{' '}
              <Link href="/pricing#policies" className="text-blue-600 hover:text-blue-800">
                Payment & Late Fee Policy
              </Link>.
            </p>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-6 pt-8 border-t border-gray-200">
            <div className="text-center text-sm text-gray-500 mb-2">
                <Link href="/pricing#policies" className="text-gray-500 hover:text-gray-700 hover:underline">
                    Payment & Late Fee Policy
                </Link>
            </div>
            <p className="text-center text-sm text-gray-500">
                Disclaimer: Just Legal Solutions is not a law firm For legal questions, please consult a licensed attorney.
            </p>
        </div>
      </div>
    </footer>
  );
}

