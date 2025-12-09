
"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

// ============ CONFIGURATION ============
// Replace with your deployed Google Apps Script web app URL after deployment
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkYzKCdBUhcg0VsZ8KlsFjlXFpHA09I5q2cRL5F9KmJYdUd17XOaqXCrnW3WJDjC-e/exec";
// ========================================

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB (Google Apps Script limit)
const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx", "jpg", "jpeg", "png"];

interface UploadFile {
  file: File;
  id: string;
  progress: number;
  status: "pending" | "uploading" | "success" | "error";
  error?: string;
}

export function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  const [honeypot, setHoneypot] = useState(""); // Spam protection - should stay empty
  
  // File upload states
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [uploadMessage, setUploadMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    setSubmissionStatus("idle"); // Reset status when toggling form
    setUploadFiles([]);
    setUploadStatus("idle");
    setUploadMessage("");
    setHoneypot(""); // Reset honeypot
  };

  // File upload helper functions
  const validateFile = (file: File): string | null => {
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return `File type .${ext} not allowed. Accepted: PDF, DOC, DOCX, JPG, PNG`;
    }
    // Individual file size check (single file can't be larger than total limit)
    if (file.size > MAX_FILE_SIZE) {
      return `Single file exceeds 50MB limit`;
    }
    return null;
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const addFiles = useCallback((newFiles: FileList | File[]) => {
    const validFiles: UploadFile[] = [];
    
    // Calculate current total size
    const currentTotalSize = uploadFiles.reduce((sum, f) => sum + f.file.size, 0);
    let newTotalSize = currentTotalSize;
    
    Array.from(newFiles).forEach((file) => {
      const error = validateFile(file);
      if (error) {
        alert(`${file.name}: ${error}`);
        return;
      }
      
      // Check if adding this file would exceed total limit
      if (newTotalSize + file.size > MAX_FILE_SIZE) {
        alert(`Cannot add ${file.name}: Total upload size would exceed 50MB limit.\n\nCurrent: ${formatBytes(newTotalSize)}\nThis file: ${formatBytes(file.size)}\nMax allowed: 50MB`);
        return;
      }
      
      // Check if file already exists
      const exists = uploadFiles.some(
        (f) => f.file.name === file.name && f.file.size === file.size
      );
      if (!exists) {
        validFiles.push({
          file,
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          progress: 0,
          status: "pending",
        });
        newTotalSize += file.size;
      }
    });
    
    setUploadFiles((prev) => [...prev, ...validFiles]);
  }, [uploadFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  }, [addFiles]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(e.target.files);
      e.target.value = "";
    }
  };

  const removeUploadFile = (id: string) => {
    setUploadFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Upload files to Google Drive
  const uploadFilesToDrive = async (clientName: string, caseNumber: string, email: string, notes: string) => {
    if (uploadFiles.length === 0) return { success: true, message: "No files to upload" };
    
    // Spam check - if honeypot field is filled, silently reject
    if (honeypot) {
      console.log("Spam detected via honeypot");
      // Pretend success to not alert spammers
      setUploadStatus("success");
      setUploadMessage("Files uploaded successfully!");
      setUploadFiles([]);
      return { success: true, message: "Files uploaded" };
    }
    
    setUploadStatus("uploading");
    
    try {
      // Convert files to base64
      const filesData: Array<{ name: string; type: string; data: string }> = [];
      for (const fileItem of uploadFiles) {
        const base64 = await fileToBase64(fileItem.file);
        filesData.push({
          name: fileItem.file.name,
          type: fileItem.file.type,
          data: base64,
        });
      }
      
      const payload = JSON.stringify({
        clientName,
        caseNumber,
        email,
        notes,
        website: honeypot, // honeypot field - should be empty for real users
        files: filesData,
      });
      
      console.log("Sending upload request to Google Apps Script...");
      console.log("Payload size:", (payload.length / 1024 / 1024).toFixed(2), "MB");
      
      // Use fetch with specific settings for Google Apps Script
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: payload,
      });
      
      console.log("Response status:", response.status);
      const responseText = await response.text();
      console.log("Response text:", responseText);
      
      try {
        const result = JSON.parse(responseText);
        if (result.success) {
          setUploadStatus("success");
          setUploadMessage(`${filesData.length} file(s) uploaded successfully!`);
          setUploadFiles([]);
          return { success: true, message: result.message };
        } else {
          setUploadStatus("error");
          setUploadMessage(result.error || "Upload failed");
          return { success: false, error: result.error };
        }
      } catch {
        // If we can't parse JSON but got a response, might still be okay
        if (response.ok) {
          setUploadStatus("success");
          setUploadMessage(`${filesData.length} file(s) uploaded!`);
          setUploadFiles([]);
          return { success: true, message: "Files uploaded" };
        }
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("error");
      setUploadMessage("Upload failed. Please email files to info@justlegalsolutions.org");
      return { success: false, error: "Upload failed" };
    }
  };
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to a plain object for JSON
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    
    // Handle checkboxes explicitly - convert "on" to readable values
    const checkboxMappings: Record<string, string> = {
      'service_type_personal': 'Personal Service Required',
      'service_type_sub': 'Sub Service at Residence Allowed',
      'service_type_designee': 'Authorized Designee Allowed',
      'addr_type_home': 'Home Address',
      'addr_type_biz': 'Business Address',
      'addr_type_other': 'Other Address Type'
    };
    
    // Build readable checkbox selections
    const serviceTypes: string[] = [];
    const addressTypes: string[] = [];
    
    Object.keys(checkboxMappings).forEach(key => {
      if (data[key] === 'on') {
        if (key.startsWith('service_type_')) {
          serviceTypes.push(checkboxMappings[key]);
        } else if (key.startsWith('addr_type_')) {
          addressTypes.push(checkboxMappings[key]);
        }
        delete data[key]; // Remove the "on" value
      }
    });
    
    if (serviceTypes.length > 0) {
      data['service_requirements'] = serviceTypes.join(', ');
    }
    if (addressTypes.length > 0) {
      data['address_type'] = addressTypes.join(', ');
    }

    try {
      // Upload files to Google Drive if any files selected
      if (uploadFiles.length > 0) {
        const clientName = data['firm_or_company_name'] || '';
        const caseNumber = data['case_number'] || '';
        const email = data['your_email_address'] || '';
        const notes = data['service_instructions'] || '';
        
        await uploadFilesToDrive(clientName, caseNumber, email, notes);
      }

      console.log("Submitting form data:", JSON.stringify(data, null, 2));
      
      // Use FormSubmit's AJAX endpoint with JSON data
      const response = await fetch('https://formsubmit.co/ajax/info@justlegalsolutions.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseText = await response.text();
      console.log("FormSubmit Response Status:", response.status);
      console.log("FormSubmit Response:", responseText);

      if (response.ok) {
        try {
          const result = JSON.parse(responseText);
          console.log("Form submitted successfully:", result);
          if (result.success === "true" || result.success === true) {
            setSubmissionStatus("success");
            form.reset();
          } else {
            console.error("FormSubmit returned unexpected response:", result);
            setSubmissionStatus("error");
          }
        } catch {
          // Response was OK but not JSON
          console.log("Non-JSON success response");
          setSubmissionStatus("success");
          form.reset();
        }
      } else {
        console.error("Form submission failed with status:", response.status, responseText);
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <footer className="bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-6">
        {/* Experience Trust Badge */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 font-bold rounded-lg px-6 py-3 shadow-md border border-blue-200">
            🏆 50+ Years&apos; Combined Experience • Oklahoma&apos;s Trusted Legal Document Experts
          </div>
        </div>
        
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
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Hidden Fields - included in JSON payload */}
                <input type="hidden" name="_subject" value="New Service Request from Website Form" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                {/* Honeypot spam protection - hidden from users, bots will fill it */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0 }} aria-hidden="true">
                  <label htmlFor="website_url">Website</label>
                  <input 
                    type="text" 
                    id="website_url" 
                    name="website_url" 
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                
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
              
                {/* New Service Type Section */}
                <div>
                  <label className="block text-sm font-bold text-gray-700">Service Type</label>
                  <div className="mt-2 space-y-4">
                      <div className="flex items-start"><div className="flex items-center h-5"><input id="service-standard" name="service_type" type="radio" value="Standard - $60" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></div><div className="ml-3 text-sm"><label htmlFor="service-standard" className="font-medium text-gray-900">Standard Service <span className="text-xs italic text-gray-600">starting at</span> $60</label><p className="text-gray-500">Ideal for routine document delivery. First Service Attempt Within 5 Business Days (usually sooner)</p></div></div>
                      <div className="flex items-start"><div className="flex items-center h-5"><input id="service-rush" name="service_type" type="radio" value="Rush - $100" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></div><div className="ml-3 text-sm"><label htmlFor="service-rush" className="font-medium text-gray-900">Rush Service <span className="text-xs italic text-gray-600">starting at</span> $100</label><p className="text-gray-500">For urgent demands that need immediate attention. A JLS Agent Will Attempt Service Within 72 Hours or Sooner based on availability</p></div></div>
                      <div className="flex items-start"><div className="flex items-center h-5"><input id="service-same-day" name="service_type" type="radio" value="Same Day - $150" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></div><div className="ml-3 text-sm"><label htmlFor="service-same-day" className="font-medium text-gray-900">Same Day Service <span className="text-xs italic text-gray-600">starting at</span> $150</label><p className="text-gray-500">For urgent time-critical matters. A JLS Agent Will Attempt Service Within 24 Hours or Sooner based on availability</p></div></div>
                      <div className="flex items-start"><div className="flex items-center h-5"><input id="service-other" name="service_type" type="radio" value="Other" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></div><div className="ml-3 text-sm flex-grow"><label htmlFor="service-other" className="font-medium text-gray-900">Other</label><input type="text" name="service_type_other_details" placeholder="Please specify" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div></div>
                  </div>
                </div>

                {/* Your Information Section */}
                <h3 className="text-lg font-semibold leading-6 text-gray-900 border-b pb-2">Your Information</h3>
                <div>
                  <label htmlFor="firm-name" className="block text-sm font-bold text-gray-700">Your Firm or Company Name (Your Name if Pro Se) <span className="text-red-500">*</span></label>
                  <input type="text" id="firm-name" name="firm_or_company_name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
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
                  <div><label htmlFor="deadline" className="block text-sm font-bold text-gray-700">Deadline for Service</label><input type="date" id="deadline" name="service_deadline" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                  <div><label htmlFor="court-date" className="block text-sm font-bold text-gray-700">Court Date (if any)</label><input type="date" id="court-date" name="court_date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                  <div><label htmlFor="court-state" className="block text-sm font-bold text-gray-700">Originating Court - State <span className="text-red-500">*</span></label><input type="text" id="court-state" name="originating_court_state" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                  <div><label htmlFor="court-county" className="block text-sm font-bold text-gray-700">County</label><input type="text" id="court-county" name="county" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                  <div><label htmlFor="court-type" className="block text-sm font-bold text-gray-700">Type of Court <span className="text-xs font-normal text-gray-500">(e.g. Circuit, District, Superior)</span></label><input type="text" id="court-type" name="type_of_court" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
                </div>
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
                    <textarea id="docs-to-be-served" name="documents_to_be_served" rows={4} required placeholder="e.g., Summons; Complaint; Notice of Hearing" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                    <p className="mt-1 text-xs text-gray-500">This information will be copied and pasted for the affidavit. Please list it accordingly.</p>
                </div>
                <div><label htmlFor="servee-name" className="block text-sm font-bold text-gray-700">Name of Individual or Business to Be Served <span className="text-red-500">*</span></label><input type="text" id="servee-name" name="name_of_servee" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/></div>
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
                  <textarea id="instructions" name="service_instructions" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Will the servee be cooperative to be served if we were to contact them in advance of service?</label>
                  <div className="mt-2 flex items-center gap-6">
                      <div className="flex items-center"><input id="cooperative-yes" name="is_servee_cooperative" type="radio" value="Yes" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /><label htmlFor="cooperative-yes" className="ml-2 block text-sm text-gray-900">Yes</label></div>
                      <div className="flex items-center"><input id="cooperative-no" name="is_servee_cooperative" type="radio" value="No" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /><label htmlFor="cooperative-no" className="ml-2 block text-sm text-gray-900">No</label></div>
                      <div className="flex items-center"><input id="cooperative-unknown" name="is_servee_cooperative" type="radio" value="Unknown" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /><label htmlFor="cooperative-unknown" className="ml-2 block text-sm text-gray-900">Unknown</label></div>
                  </div>
                </div>

                {/* Submit Documents Section - Drag & Drop Upload */}
                <h3 className="text-lg font-semibold leading-6 text-gray-900 border-b pb-2">Submit Documents</h3>
                
                {/* Drop Zone */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-3 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-300 ${
                    isDragging
                      ? "border-blue-500 bg-blue-100 scale-[1.01]"
                      : "border-gray-300 bg-blue-50 hover:border-blue-400 hover:bg-blue-100"
                  }`}
                >
                  <svg
                    className={`w-10 h-10 mx-auto mb-2 transition-colors ${
                      isDragging ? "text-blue-600" : "text-blue-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-gray-700 font-semibold">Drag & drop files here</p>
                  <p className="text-gray-500 text-sm">or click to browse</p>
                  <span className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Browse Files
                  </span>
                  <p className="text-xs text-gray-400 mt-2">
                    Accepted: PDF, DOC, DOCX, JPG, PNG • Max 50MB total
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Or email documents to <a href="mailto:info@justlegalsolutions.org" className="text-blue-600 hover:underline font-medium">info@justlegalsolutions.org</a>
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                {/* File List */}
                {uploadFiles.length > 0 && (
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold text-gray-700">{uploadFiles.length} file(s) selected:</p>
                      <p className={`text-xs font-medium ${
                        uploadFiles.reduce((sum, f) => sum + f.file.size, 0) > MAX_FILE_SIZE * 0.8 
                          ? 'text-orange-600' 
                          : 'text-gray-500'
                      }`}>
                        Total: {formatBytes(uploadFiles.reduce((sum, f) => sum + f.file.size, 0))} / 50MB
                      </p>
                    </div>
                    {uploadFiles.map((fileItem) => (
                      <div
                        key={fileItem.id}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm"
                      >
                        <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {fileItem.file.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatBytes(fileItem.file.size)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); removeUploadFile(fileItem.id); }}
                          className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Upload Status Messages */}
                {uploadStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-md text-center">
                    <strong>✅ Files uploaded successfully!</strong>
                    <p className="text-sm">{uploadMessage}</p>
                  </div>
                )}
                {uploadStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-md text-center">
                    <strong>❌ Upload failed</strong>
                    <p className="text-sm">{uploadMessage}</p>
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  Files will be securely uploaded to our system. You&apos;ll receive a confirmation email.
                </p>

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
          {/* Email Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-600">
              You can reach us at{" "}
              <a
                href="mailto:info@justlegalsolutions.org"
                className="text-blue-600 hover:text-blue-800"
              >
                info@justlegalsolutions.org
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
                href="tel:5393676832"
                className="text-blue-600 hover:text-blue-800"
              >
                (539) 367-6832
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
                href="https://just-legal-solutions.myhelcim.com/hosted/?token=0fd078f392944cc6c4184f"
                className="text-blue-600 hover:text-blue-800"
              >
                electronic payments
              </a>
              , cash, checks, or money orders. Payments should be made payable
              to Just Legal Solutions and mailed to: 564 E 138th Pl, Glenpool, OK
              74033. Past-due invoices are subject to our{' '}
              <a href="/pricing#policies" className="text-blue-600 hover:text-blue-800 underline">
                Payment & Late Fee Policy
              </a>. Existing customers can access the{' '}
              <a
                href="https://just-legal-solutions.helcim.app/dashboard/main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Customer Portal
              </a>.
            </p>
          </div>
        </div>

        {/* Trust & Credentials Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-6">Trust & Credentials</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto">
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <Image 
                src="/badges/same-day-service-available-badge.svg" 
                alt="Same Day Service Available - Process Server Oklahoma" 
                width={112}
                height={112}
                className="object-contain hover:scale-105 transition-transform duration-200"
                title="Same Day Service Available"
              />
            </div>
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <Image 
                src="/badges/99-9-percent-success-rate-badge.svg" 
                alt="99.9% Success Rate Process Server" 
                width={112}
                height={112}
                className="object-contain hover:scale-105 transition-transform duration-200"
                title="99.9% Success Rate"
              />
            </div>
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <Image 
                src="/badges/5-star-google-rating-badge.svg" 
                alt="5 Star Google Rating Process Server" 
                width={112}
                height={112}
                className="object-contain hover:scale-105 transition-transform duration-200"
                title="5 Star Google Rating"
              />
            </div>
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <Image 
                src="/badges/24-7-emergency-service-badge.svg" 
                alt="24/7 Emergency Service Process Server" 
                width={112}
                height={112}
                className="object-contain hover:scale-105 transition-transform duration-200"
                title="24/7 Emergency Service"
              />
            </div>
            <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <Image 
                src="/badges/ai-optimized-service-badge.svg" 
                alt="AI-Optimized Process Server Service" 
                width={112}
                height={112}
                className="object-contain hover:scale-105 transition-transform duration-200"
                title="AI-Optimized Service"
              />
            </div>
            {/* NAPPS Member Logo */}
            <a
              href="https://napps.org/member-info.aspx?id=14801"
              target="_blank"
              rel="noopener noreferrer"
              className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-lg p-2 hover:shadow-lg transition-shadow duration-200"
              title="Proud Member of NAPPS - National Association of Professional Process Servers"
            >
              <Image
                src="https://napps.org/images/NAPPS4.png"
                alt="NAPPS Member - National Association of Professional Process Servers"
                width={112}
                height={112}
                className="object-contain hover:scale-105 transition-transform duration-200"
                priority={false}
              />
            </a>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Sitemap Link - left side */}
            <div className="order-1 md:order-1 w-full md:w-auto text-center md:text-left">
              <a
                href="/sitemap"
                className="text-blue-600 hover:text-blue-800 underline font-semibold text-sm"
              >
                Sitemap
              </a>
            </div>
            {/* Disclaimer - center */}
            <p className="text-center text-sm text-gray-500 order-2 md:order-2 w-full md:w-auto">
              Disclaimer: Just Legal Solutions is not a law firm. For legal questions, please consult a licensed attorney.
            </p>
            {/* Social Media Links - right side */}
            <div className="flex space-x-4 order-3 md:order-3">
              <a
                href="https://www.facebook.com/people/Just-Legal-Solutions/61574881736527/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/justlegalsolutionsok/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://g.co/kgs/vMgnxex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Google My Business"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/just-legal-solutions-glenpool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Yelp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 8.5h-4v4c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4v-4c0-.276.224-.5.5-.5s.5.224.5.5v4h4c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Default export for compatibility
export default Footer;
