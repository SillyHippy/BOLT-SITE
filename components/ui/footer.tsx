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
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Service Request Form Submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="document_url" value={fileUrl} />

            <label className="block mb-2 font-bold">Upload Document</label>
            <input type="file" onChange={handleFileUpload} className="w-full p-2 border rounded-md mb-4" />
            {fileUrl && (
              <p className="text-green-600 font-bold mb-4">
                File uploaded successfully! <a href={fileUrl} target="_blank" className="text-blue-600">View file</a>
              </p>
            )}

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800">
              Submit Request
            </button>
          </form>
        )}
      </div>
    </footer>
  );
}
