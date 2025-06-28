"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

export function Footer() {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleNav = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-6">
        <h2 className="text-3xl font-bold mb-6">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-6">
          For any inquiries, please reach out via phone, text, or email. We&apos;re here to assist you.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={toggleForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showForm ? "Close Form" : "Service Request Form"}
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
            <h3 className="text-2xl font-bold mb-4 text-center">Process Service E-Z Intake Information</h3>
            <form
              action="https://formsubmit.co/info@JustLegalSolutions.org"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit Hidden Fields */}
              <input type="hidden" name="_subject" value="New Service Request from Website Form" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://justlegalsolutions.org/thank-you" />

              {/* Service Type */}
              <div>
                <label className="block text-sm font-bold text-gray-700">Is Personal Service required instead of a designee or sub service? <span className="text-xs font-normal text-gray-500">(Select all that apply)</span></label>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                  <div className="flex items-center"><input id="personal-service-opt" name="service_type_personal" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="personal-service-opt" className="ml-2 block text-sm text-gray-900">Personal Service</label></div>
                  <div className="flex items-center"><input id="sub-service-opt" name="service_type_sub" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="sub-service-opt" className="ml-2 block text-sm text-gray-900">Sub Service at a Residence Allowed</label></div>
                  <div className="flex items-center"><input id="designee-service-opt" name="service_type_designee" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="designee-service-opt" className="ml-2 block text-sm text-gray-900">Authorized Designee</label></div>
                </div>
              </div>

              <hr/>

              {/* Your Information Section */}
              <h3 className="text-lg font-semibold leading-6 text-gray-900 border-b pb-2">Your Information</h3>
              <div>
                <label htmlFor="firm-name" className="block text-sm font-bold text-gray-700">Your Firm or Company Name (Your Name if Pro Se) <span className="text-red-500">*</span></label>
                <input type="text" id="firm-name" name="firm_or_company_name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                <p className="mt-1 text-xs text-gray-500">If you are submitting multiple requests, you only have to fill this out on the first request.</p>
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700">Your Address</label>
                 <input type="text" name="your_address_street" placeholder="Street Address" className="mt-1 mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" name="your_address_city" placeholder="City" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    <input type="text" name="your_address_state" placeholder="State/Region/Province" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    <input type="text" name="your_address_zip" placeholder="Postal / Zip Code" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label htmlFor="phone" className="block text-sm font-bold text-gray-700">Your Phone Number <span className="text-red-500">*</span></label><input type="tel" id="phone" name="your_phone_number" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                <div><label htmlFor="email" className="block text-sm font-bold text-gray-700">Your Email Address <span className="text-red-500">*</span></label><input type="email" id="email" name="your_email_address" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
              </div>
              
              {/* Case Information Section */}
              <h3 className="text-lg font-semibold leading-6 text-gray-900 border-b pb-2">Case Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label htmlFor="case-number" className="block text-sm font-bold text-gray-700">Case Number <span className="text-red-500">*</span></label><input type="text" id="case-number" name="case_number" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                <div><label htmlFor="your-file-number" className="block text-sm font-bold text-gray-700">Your File Number</label><input type="text" id="your-file-number" name="your_file_number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                <div><label htmlFor="deadline" className="block text-sm font-bold text-gray-700">Deadline for Service</label><input type="date" id="deadline" name="service_deadline" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                <div><label htmlFor="court-date" className="block text-sm font-bold text-gray-700">Court Date (if any)</label><input type="date" id="court-date" name="court_date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                <div><label htmlFor="court-state" className="block text-sm font-bold text-gray-700">Originating Court - State <span className="text-red-500">*</span></label><input type="text" id="court-state" name="originating_court_state" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                <div><label htmlFor="court-county" className="block text-sm font-bold text-gray-700">County</label><input type="text" id="court-county" name="county" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
              </div>
              <div><label htmlFor="court-type" className="block text-sm font-bold text-gray-700">Type of Court <span className="text-xs font-normal text-gray-500">(e.g. Circuit, District, Superior)</span></label><input type="text" id="court-type" name="type_of_court" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
              <div>
                <label htmlFor="serving-for" className="block text-sm font-bold text-gray-700">We Are Serving This FOR/On Behalf of Plaintiff or Defendant</label>
                <select id="serving-for" name="serving_for_plaintiff_or_defendant" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="">-Select-</option><option value="Plaintiff/Petitioner">Plaintiff/Petitioner</option><option value="Defendant/Respondent">Defendant/Respondent</option><option value="Other">Other</option>
                </select>
              </div>
              <div><label htmlFor="plaintiff" className="block text-sm font-bold text-gray-700">Plaintiff/ Petitioner <span className="text-red-500">*</span></label><input type="text" id="plaintiff" name="plaintiff_petitioner" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
              <div><label htmlFor="defendant" className="block text-sm font-bold text-gray-700">Defendant/ Respondent <span className="text-red-500">*</span></label><input type="text" id="defendant" name="defendant_respondent" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>

              {/* Service Details Section */}
              <h3 className="text-lg font-semibold leading-6 text-gray-900 border-b pb-2">Service Details</h3>
              <div>
                  <label htmlFor="docs-to-be-served" className="block text-sm font-bold text-gray-700">List Documents to Be Served <span className="bg-yellow-200 px-1 rounded">As To Be Listed on Affidavit</span> <span className="text-xs font-normal text-gray-500">(separated by semi-colons)</span> <span className="text-red-500">*</span></label>
                  <textarea id="docs-to-be-served" name="documents_to_be_served" rows="4" required placeholder="e.g., Summons; Complaint; Notice of Hearing" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                  <p className="mt-1 text-xs text-gray-500">This information will be copied and pasted for the affidavit. Please list it accordingly.</p>
              </div>
              <div><label htmlFor="servee-name" className="block text-sm font-bold text-gray-700">Name of Individual or Business to Be Served <span className="text-xs font-normal text-gray-500">(do not type all caps)</span> <span className="text-red-500">*</span></label><input type="text" id="servee-name" name="name_of_servee" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
              <div><label htmlFor="agent-name" className="block text-sm font-bold text-gray-700">If Serving a Business, Agent to Be Served/Title</label><input type="text" id="agent-name" name="agent_to_be_served" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Type of Address</label>
                <div className="mt-2 flex items-center gap-6">
                  <div className="flex items-center"><input id="addr-home" name="addr_type_home" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="addr-home" className="ml-2 block text-sm text-gray-900">Home</label></div>
                  <div className="flex items-center"><input id="addr-biz" name="addr_type_biz" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="addr-biz" className="ml-2 block text-sm text-gray-900">Business</label></div>
                  <div className="flex items-center"><input id="addr-other" name="addr_type_other" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" /><label htmlFor="addr-other" className="ml-2 block text-sm text-gray-900">Other</label></div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Service Address <span className="text-red-500">*</span></label>
                <input type="text" name="service_address_street" placeholder="Street Address" required className="mt-1 mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                <input type="text" name="service_address_line2" placeholder="Address Line 2 (Apt, Suite, etc.)" className="mb-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input type="text" name="service_address_city" placeholder="City" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                  <input type="text" name="service_address_state" placeholder="State/Region/Province" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                  <input type="text" name="service_address_zip" placeholder="Postal / Zip Code" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>
              </div>
              <div>
                <label htmlFor="instructions" className="block text-sm font-bold text-gray-700">Service Instructions and/or Notes? <span className="text-xs font-normal text-gray-500">(If any. Do not attach special instructions. Enter them here.)</span></label>
                <textarea id="instructions" name="service_instructions" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700">Will the servee be cooperative to be served if we were to contact them in advance of service?</label>
                <div className="mt-2 flex items-center gap-6">
                    <div className="flex items-center"><input id="cooperative-yes" name="is_servee_cooperative" type="radio" value="Yes" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /><label htmlFor="cooperative-yes" className="ml-2 block text-sm text-gray-900">Yes</label></div>
                    <div className="flex items-center"><input id="cooperative-no" name="is_servee_cooperative" type="radio" value="No" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /><label htmlFor="cooperative-no" className="ml-2 block text-sm text-gray-900">No</label></div>
                    <div className="flex items-center"><input id="cooperative-unknown" name="is_servee_cooperative" type="radio" value="Unknown" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /><label htmlFor="cooperative-unknown" className="ml-2 block text-sm text-gray-900">Unknown</label></div>
                </div>
              </div>

              {/* Submit Documents Section */}
              <h3 className="text-lg font-semibold leading-6 text-gray-900 border-b pb-2">Submit Documents</h3>
              <div className="bg-blue-50 border border-blue-200 text-blue-800 text-center p-4 rounded-md">
                  Please email all documents to:<br/>
                  <a href="mailto:info@JustLegalSolutions.org" className="font-bold underline">info@JustLegalSolutions.org</a>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">Submit Your Job</button>
            </form>
          </div>
        )}

        {/* --- NEW SECTION FOR OTHER SERVICES --- */}
        <div className="text-center mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4">Other Business Solutions</h3>
            <p className="text-gray-600">
                For Courier Services or other business needs, please call, text if urgent, or email.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
              <a href="/pricing#policies" className="text-blue-600 hover:text-blue-800 underline">
                Payment & Late Fee Policy
              </a>.
            </p>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            Disclaimer: Just Legal Solutions is not a law firm For legal questions, please consult a licensed attorney.
          </p>
        </div>
      </div>
    </footer>
  );
}
