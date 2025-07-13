
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Hominy, Oklahoma | Just Legal Solutions',
  description: 'Professional process server in Hominy, Oklahoma. Licensed, bonded, and insured. Same-day service available. Call (539) 367-6832.',
  keywords: 'process server Hominy, legal document delivery Hominy',
  openGraph: {
    title: 'Process Server Hominy, Oklahoma | Just Legal Solutions',
    description: 'Professional process server in Hominy, Oklahoma. Licensed, bonded, and insured. Same-day service available. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/locations/hominy',
    type: 'website',
  },
};

export default function HominyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      
          <h1>Professional Process Server in Hominy, Oklahoma</h1>
          <p>Just Legal Solutions provides professional process serving throughout Hominy and the surrounding Osage County area. Our licensed, bonded, and insured process servers deliver legal documents with reliability and discretion.</p>
          
          <h2>Process Serving Services in Hominy</h2>
          <ul>
            <li>Summons and Complaints</li>
            <li>Subpoenas</li>
            <li>Court Orders</li>
            <li>Divorce Papers</li>
            <li>Eviction Notices</li>
            <li>Small Claims Documents</li>
          </ul>
          
          <h2>Service Area Coverage</h2>
          <p>Regional service area with 2-day availability. We serve all of Sand Springs, Skiatook, Hominy, Pawhuska and surrounding areas.</p>
          
          <h2>Contact Information</h2>
          <p>Phone: <a href="tel:(539) 367-6832">(539) 367-6832</a></p>
          <p>Email: <a href="mailto:info@justlegalsolutions.org">info@justlegalsolutions.org</a></p>
          <p>Service Area: Hominy, Osage County, Oklahoma</p>
          
          <h2>Business Hours</h2>
          <p><strong>24/7 Emergency Service Available</strong></p>
          <p>Regular Hours: Monday - Friday: 8:00 AM - 5:00 PM</p>
          <p>Saturday: 9:00 AM - 3:00 PM</p>
          <p>Sunday: Emergency service available</p>
          <p><strong>After-hours and weekend emergency service available by calling (539) 367-6832</strong></p>
        
    </div>
  );
}
