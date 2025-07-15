"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Star, ExternalLink } from "lucide-react";

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
        const errorData = await response.json();
        console.error("Form submission failed:", errorData);
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <footer className="bg-gray-800 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        
        {/* Top section with form toggle and contact info */}
        <div className="bg-gray-700 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">GET IN TOUCH</h2>
            <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
              For any inquiries, please reach out via phone, text, or email. For non-time-sensitive inquiries, please feel free to use the form below.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <button
                onClick={toggleForm}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
              >
                {showForm ? "Close Service Request Form" : "Open Service Request Form"}
              </button>
              <a
                href="https://g.page/r/Cb81H1j9UTYxEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-transform transform hover:scale-105"
              >
                <Star className="h-5 w-5 mr-2" />
                Leave a Google Review
              </a>
            </div>

            {showForm && (
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
                {submissionStatus === 'success' ? (
                    <div className="text-center py-10">
                        <h3 className="text-2xl font-bold text-green-500 mb-2">Thank You!</h3>
                        <p className="text-gray-300">Your service request has been submitted successfully.</p>
                    </div>
                ) : submissionStatus === 'error' ? (
                    <div className="text-center py-10">
                        <h3 className="text-2xl font-bold text-red-500 mb-2">Something Went Wrong</h3>
                        <p className="text-gray-300">We couldn&apos;t submit your form. Please try again later or email us directly.</p>
                    </div>
                ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Process Service E-Z Intake Information</h3>
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
                    <div>
                        <label className="block text-sm font-bold text-gray-300">Is Personal Service required? <span className="text-xs font-normal text-gray-400">(Select all that apply)</span></label>
                        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                            <div className="flex items-center"><input id="personal-service-opt" name="service_type_personal" type="checkbox" className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-500 rounded focus:ring-blue-500" /><label htmlFor="personal-service-opt" className="ml-2 block text-sm text-gray-200">Personal Service</label></div>
                            <div className="flex items-center"><input id="sub-service-opt" name="service_type_sub" type="checkbox" className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-500 rounded focus:ring-blue-500" /><label htmlFor="sub-service-opt" className="ml-2 block text-sm text-gray-200">Sub Service at Residence</label></div>
                            <div className="flex items-center"><input id="designee-service-opt" name="service_type_designee" type="checkbox" className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-500 rounded focus:ring-blue-500" /><label htmlFor="designee-service-opt" className="ml-2 block text-sm text-gray-200">Authorized Designee</label></div>
                        </div>
                    </div>
                    {/* ... other form fields ... */}
                    <button 
                      type="submit" 
                      disabled={submissionStatus === 'submitting'}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:bg-gray-500"
                    >
                      {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Your Job'}
                    </button>
                  </form>
                </>
                )}
              </div>
            )}
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Just Legal Solutions</h3>
            <p className="text-gray-400 text-sm">
              Oklahoma's premier choice for fast, reliable, and professional process serving and legal support services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
              {/* FIX: Added Sitemap Link */}
              <li><Link href="/sitemap" className="text-gray-400 hover:text-white">Sitemap</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
                <li>Phone: <a href="tel:5393676832" className="hover:text-white">(539) 367-6832</a></li>
                <li>Email: <a href="mailto:info@justlegalsolutions.org" className="hover:text-white">info@justlegalsolutions.org</a></li>
                <li className="pt-2">
                    <p>Mailing Address:</p>
                    <p>564 E 138th Pl, Glenpool, OK 74033</p>
                </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Just-Legal-Solutions/61574881736527/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="https://www.linkedin.com/company/justlegalsolutionsok/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Just Legal Solutions. All Rights Reserved.</p>
          <p className="mt-2">Disclaimer: Just Legal Solutions is not a law firm. For legal questions, please consult a licensed attorney.</p>
        </div>
      </div>
    </footer>
  );
}
