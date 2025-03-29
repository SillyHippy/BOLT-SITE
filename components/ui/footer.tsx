"use client";

import { useState } from "react";

export function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [fileUrl, setFileUrl] = useState("");

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "File upload"); // Replace with actual Cloudinary preset

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/ddhzufnqe/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.secure_url) {
        setFileUrl(data.secure_url);
      } else {
        alert("File upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred while uploading.");
    }
  };

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
            action="https://formsubmit.co/info@JustLegalSolutions.org"
            method="POST"
            className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto"
          >
            {/* Hidden Fields for FormSubmit.co */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Service Request Form Submission" />
            <input type="hidden" name="_template" value="table" />

            {/* Form Fields */}
            {[ 
              { label: "Firm Name*", name: "firm_name", type: "text", required: true },
              { label: "Contact First Name*", name: "contact_first_name", type: "text", required: true },
              { label: "Contact Last Name*", name: "contact_last_name", type: "text", required: true },
              { label: "Contact Email*", name: "contact_email", type: "email", required: true },
              { label: "Contact Phone Number*", name: "contact_phone", type: "text", required: true },
              { label: "Plaintiff Name*", name: "plaintiff_name", type: "text", required: true },
              { label: "Recipient / Defendant Name*", name: "recipient_name", type: "text", required: true },
              { label: "Recipient Phone Number", name: "recipient_phone", type: "text" },
              { label: "Recipient Email", name: "recipient_email", type: "email" },
              { label: "Recipient Street Address*", name: "recipient_address", type: "text", required: true },
              { label: "Recipient City*", name: "recipient_city", type: "text", required: true },
              { label: "Recipient State*", name: "recipient_state", type: "text", required: true },
              { label: "Recipient Zip Code*", name: "recipient_zip", type: "text", required: true },
              { label: "Court Date*", name: "court_date", type: "date", required: true },
              { label: "Case Number*", name: "case_number", type: "text", required: true },
              { label: "Court Name", name: "court_name", type: "text" },
              { label: "Court State", name: "court_state", type: "text" },
              { label: "Court County", name: "court_county", type: "text" },
            ].map(({ label, name, type, required }) => (
              <div key={name}>
                <label className="block mb-2 font-bold">{label}</label>
                <input type={type} name={name} required={required} className="w-full p-2 border rounded-md mb-4" />
              </div>
            ))}

            <label className="block mb-2 font-bold">Service Instruction</label>
            <textarea name="service_instruction" className="w-full p-2 border rounded-md mb-4"></textarea>

            <p className="text-gray-600 font-bold mb-4">
              Please email any relevant documents to {" "}
              <a href="mailto:info@JustLegalSolutions.org" className="text-blue-600">info@JustLegalSolutions.org</a>
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
              You can reach us at {" "}
              <a href="mailto:info@JustLegalSolutions.org" className="text-blue-600 hover:text-blue-800">
                info@JustLegalSolutions.org
              </a>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600">
              <a href="tel:539-367-6832" className="text-blue-600 hover:text-blue-800">
                539-367-6832
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
