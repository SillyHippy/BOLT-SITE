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

        {/* Button to Show Form */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
        >
          Fill Out Service Request Form
        </button>

        {/* Form (Hidden Until Clicked) */}
        {showForm && (
          <form 
            action="https://formsubmit.co/el/gakusi" 
            method="POST" 
            className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto"
          >
            {/* Required Hidden Email Field */}
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
            <input type="hidden" name="_captcha" value="false" />

            <label className="block mb-2 font-bold">Firm Name*</label>
            <input type="text" name="firm_name" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Contact First Name*</label>
            <input type="text" name="contact_first_name" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Contact Last Name*</label>
            <input type="text" name="contact_last_name" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Contact Email*</label>
            <input type="email" name="contact_email" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Contact Phone Number*</label>
            <input type="text" name="contact_phone" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Plaintiff Name*</label>
            <input type="text" name="plaintiff_name" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Recipient / Defendant Name*</label>
            <input type="text" name="recipient_name" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Recipient Phone Number</label>
            <input type="text" name="recipient_phone" className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Recipient Email</label>
            <input type="email" name="recipient_email" className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Recipient Street Address*</label>
            <input type="text" name="recipient_address" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Recipient City*</label>
            <input type="text" name="recipient_city" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Recipient State*</label>
            <input type="text" name="recipient_state" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Recipient Zip Code*</label>
            <input type="text" name="recipient_zip" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Court Date*</label>
            <input type="date" name="court_date" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Case Number*</label>
            <input type="text" name="case_number" required className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Court Name</label>
            <input type="text" name="court_name" className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Court State</label>
            <input type="text" name="court_state" className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Court County</label>
            <input type="text" name="court_county" className="w-full p-2 border rounded-md mb-4" />

            <label className="block mb-2 font-bold">Service Instruction</label>
            <textarea name="service_instruction" className="w-full p-2 border rounded-md mb-4"></textarea>

            <label className="block mb-2 font-bold">Upload Document*</label>
            <input type="file" name="document" required className="w-full p-2 border rounded-md mb-4" />

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800">
              Submit Request
            </button>
          </form>
        )}

        {/* Contact Sections */}
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
