
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <footer className="bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-8">
          For any inquiries, please reach out via phone, text, or email. We&apos;re here to assist you.
        </p>

        {/* Service Request Button */}
        <div className="flex justify-center mb-12">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-medium"
            onClick={() => setIsFormOpen(true)}
          >
            Fill Out Service Request Form
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 mr-2 text-blue-600" />
              <h3 className="text-xl font-bold">Email Us</h3>
            </div>
            <p className="text-gray-600">
              You can reach us at{' '}
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
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <Phone className="h-5 w-5 mr-2 text-blue-600" />
              <h3 className="text-xl font-bold">Call or Text Us</h3>
            </div>
            <p className="text-gray-600">
              Contact us anytime Call or Text at{' '}
              <a href="tel:539-367-6832" className="text-blue-600 hover:text-blue-800">
                539-367-6832
              </a>
              . We&apos;re here and ready to assist you with all your needs.
            </p>
            {/* --- VCF Download Link in a new paragraph --- */}
            <p className="text-gray-600 mt-2">
              Alternatively,{' '}
              <a 
                href="/contact-details.vcf" 
                download="contact-details.vcf" 
                className="text-blue-600 hover:text-blue-800"
              >
                Click here to download our contact details
              </a>
              {' '}and add us directly to your address book.
            </p>
          </div>

          {/* Payments Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 mr-2 text-blue-600" />
              <h3 className="text-xl font-bold">Payments</h3>
            </div>
            <p className="text-gray-600">
              At this time, we accept{' '}
              <a
                href="https://buy.stripe.com/3cs17SbHS6h95nGaEE"
                className="text-blue-600 hover:text-blue-800"
              >
                electronic payments
              </a>
              , cash, checks, or money orders. Payments should be made payable to Joseph Iannazzi and mailed to: 564 E 138th Pl, Glenpool, OK 74033. Please ensure that payment is made in full within 10 days of the invoice date.
            </p>
          </div>
        </div>
      </div>

      {/* Service Request Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold mb-4">Fill Out Service Request Form</DialogTitle>
          </DialogHeader>
          <form 
            action="https://formsubmit.co/info@justlegalsolutions.org" 
            method="POST" 
            className="space-y-4"
          >
            {/* Firm Name */}
            <div className="space-y-2">
              <Label htmlFor="firmName">Firm Name*</Label>
              <Input id="firmName" name="Firm Name" required />
            </div>
            
            {/* Contact First Name */}
            <div className="space-y-2">
              <Label htmlFor="contactFirstName">Contact First Name*</Label>
              <Input id="contactFirstName" name="Contact First Name" required />
            </div>
            
            {/* Contact Last Name */}
            <div className="space-y-2">
              <Label htmlFor="contactLastName">Contact Last Name*</Label>
              <Input id="contactLastName" name="Contact Last Name" required />
            </div>
            
            {/* Contact Email */}
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Contact Email*</Label>
              <Input id="contactEmail" name="Contact Email" type="email" required />
            </div>
            
            {/* Contact Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Contact Phone Number*</Label>
              <Input id="contactPhone" name="Contact Phone Number" required />
            </div>
            
            {/* Plaintiff Name */}
            <div className="space-y-2">
              <Label htmlFor="plaintiffName">Plaintiff Name*</Label>
              <Input id="plaintiffName" name="Plaintiff Name" required />
            </div>
            
            {/* Recipient/Defendant Name */}
            <div className="space-y-2">
              <Label htmlFor="defendantName">Recipient / Defendant Name*</Label>
              <Input id="defendantName" name="Recipient/Defendant Name" required />
            </div>
            
            {/* Recipient Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="recipientPhone">Recipient Phone Number</Label>
              <Input id="recipientPhone" name="Recipient Phone Number" />
            </div>
            
            {/* Recipient Email */}
            <div className="space-y-2">
              <Label htmlFor="recipientEmail">Recipient Email</Label>
              <Input id="recipientEmail" name="Recipient Email" type="email" />
            </div>
            
            {/* Recipient Street Address */}
            <div className="space-y-2">
              <Label htmlFor="recipientAddress">Recipient Street Address*</Label>
              <Input id="recipientAddress" name="Recipient Street Address" required />
            </div>
            
            {/* Recipient City */}
            <div className="space-y-2">
              <Label htmlFor="recipientCity">Recipient City*</Label>
              <Input id="recipientCity" name="Recipient City" required />
            </div>
            
            {/* Recipient State */}
            <div className="space-y-2">
              <Label htmlFor="recipientState">Recipient State*</Label>
              <Input id="recipientState" name="Recipient State" required />
            </div>
            
            {/* Recipient Zip Code */}
            <div className="space-y-2">
              <Label htmlFor="recipientZip">Recipient Zip Code*</Label>
              <Input id="recipientZip" name="Recipient Zip Code" required />
            </div>
            
            {/* Court Date */}
            <div className="space-y-2">
              <Label htmlFor="courtDate">Court Date*</Label>
              <Input id="courtDate" name="Court Date" type="date" required />
            </div>
            
            {/* Case Number */}
            <div className="space-y-2">
              <Label htmlFor="caseNumber">Case Number*</Label>
              <Input id="caseNumber" name="Case Number" required />
            </div>
            
            {/* Court Name */}
            <div className="space-y-2">
              <Label htmlFor="courtName">Court Name</Label>
              <Input id="courtName" name="Court Name" />
            </div>
            
            {/* Court State */}
            <div className="space-y-2">
              <Label htmlFor="courtState">Court State</Label>
              <Input id="courtState" name="Court State" />
            </div>
            
            {/* Court County */}
            <div className="space-y-2">
              <Label htmlFor="courtCounty">Court County</Label>
              <Input id="courtCounty" name="Court County" />
            </div>
            
            {/* Service Instruction */}
            <div className="space-y-2">
              <Label htmlFor="serviceInstruction">Service Instruction</Label>
              <Textarea id="serviceInstruction" name="Service Instruction" rows={4} />
            </div>
            
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Service Request Form Submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="pt-4 flex justify-center">
              <Button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Submit Request
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
