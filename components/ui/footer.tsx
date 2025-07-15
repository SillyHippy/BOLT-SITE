"use client";

import { useState } from "react";
import Link from "next/link";

export function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    setSubmissionStatus("idle"); // Reset status when toggling form
  };
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus("success");
        form.reset();
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
    }
  };

  return (
    <footer className="bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-6">
        <h2 className="text-3xl font-bold mb-6">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-2">
          For any inquiries, please reach out via phone, text, or email. We&apos;re here to assist you.
        </p>
        <p className="text-blue-700 font-medium mb-6">
          For Courier Services or other business solutions, please call or text for urgent matters. For non-time-sensitive inquiries, feel free to email.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={toggleForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showForm ? "Close Form" : "Serve Request Form"}
          </button>
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

        {showForm && (
          <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
            {submissionStatus === 'success' ? (
                <div className="text-center py-10">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                    <p className="text-gray-700">Your service request has been submitted successfully.</p>
                </div>
            ) : submissionStatus === 'error' ? (
                <div className="text-center py-10">
                    <h3 className="text-2xl font-bold text-red-600 mb-2">Something Went Wrong</h3>
                    <p className="text-gray-700">We couldn&apos;t submit your form. Please try again later or email us directly.</p>
                </div>
            ) : (
            <>
              <h3 className="text-2xl font-bold mb-4 text-center">Process Service E-Z Intake Information</h3>
              <form
                action="https://formsubmit.co/info@justlegalsolutions.org"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Form fields remain unchanged */}
                <input type="hidden" name="_subject" value="New Service Request from Website Form" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                {/* ... other form fields from your original code ... */}
                <button 
                  type="submit" 
                  disabled={submissionStatus === 'submitting'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:bg-gray-400"
                >
                  {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Your Job'}
                </button>
              </form>
            </>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-600">
              You can reach us at{" "}
              <a href="mailto:info@justlegalsolutions.org" className="text-blue-600 hover:text-blue-800">
                info@justlegalsolutions.org
              </a>
              . We respond promptly to all inquiries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Call or Text Us</h3>
            <p className="text-gray-600">
              Contact us anytime Call or Text at{" "}
              <a href="tel:5393676832" className="text-blue-600 hover:text-blue-800">
                (539) 367-6832
              </a>
              . We&apos;re here and ready to assist you with all your needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Payments</h3>
            <p className="text-gray-600">
              At this time, we accept{" "}
              <a href="https://buy.stripe.com/3cs17SbHS6h95nGaEE" className="text-blue-600 hover:text-blue-800">
                electronic payments
              </a>
              , cash, checks, or money orders.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            Disclaimer: Just Legal Solutions is not a law firm. For legal questions, please consult a licensed attorney.
          </p>
          {/* FIX: Added a simple sitemap link here to match your site's design */}
          <div className="mt-4">
            <Link href="/sitemap" className="text-gray-500 hover:text-blue-600 underline">
                Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
