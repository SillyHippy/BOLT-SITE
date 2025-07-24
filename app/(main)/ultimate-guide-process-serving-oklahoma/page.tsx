import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Book, Users, Briefcase, Award, Scale } from 'lucide-react';
import MinimalSocialProof from '@/components/MinimalSocialProof';

// We are keeping the FAQ data directly in this file for simplicity and reliability
const pageFaqs = [
  {
    "question": "Do I have to accept papers from a process server in Oklahoma?",
    "answer": "While you can refuse to physically take the papers, it does not stop the legal process. The server can note your refusal and may be permitted to leave the documents nearby, and the service is still considered valid."
  },
  {
    "question": "What is an Affidavit of Service and why is it important?",
    "answer": "An Affidavit of Service is a notarized document signed by the process server that proves the legal documents were delivered. It details the date, time, location, and manner of service. This document is filed with the court and serves as your official proof that the other party was notified."
  },
  {
    "question": "What is the fastest way to get legal documents served?",
    "answer": "Most professional process servers offer 'Rush' or 'Same-Day' service for an additional fee. This prioritizes your case to ensure the quickest possible delivery, often within a few hours."
  },
  {
    "question": "How much does it cost to hire a process server?",
    "answer": "Pricing varies based on location, type of service, and attempts required. For a detailed breakdown, please see our centralized <a href='/pricing'>Pricing Page</a>."
  }
];

export default function UltimateGuidePage() {
  const pageTitle = "The Ultimate Guide to Process Serving in Oklahoma";

  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
        <Image
          src="https://www.okbar.org/wp-content/uploads/2019/02/Fotolia_173531621_Subscription_Monthly_M-gavel-books.jpg"
          alt="Oklahoma Bar Association Gavel and Books - Legal Guide"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4">{pageTitle}</h1>
        </div>
      </div>

      <div className="prose lg:prose-xl max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Welcome to the most comprehensive resource for understanding process serving in Oklahoma. Whether you&apos;re an attorney, a business, or an individual navigating the legal system, this guide covers everything you need to know about the laws, procedures, and best practices for legal document delivery in the Sooner State.
        </p>

        <MinimalSocialProof />
        
        <Card className="mb-8">
          <CardHeader><CardTitle>What is a Process Server?</CardTitle></CardHeader>
          <CardContent><p>A process server is a licensed professional responsible for delivering legal documents to individuals involved in court cases. Proper service of process is a constitutional requirement that ensures the defendant&apos;s officially notified of the legal action against them, giving them the opportunity to respond. In Oklahoma, these professionals must be licensed, bonded, and adhere to strict legal standards.</p></CardContent>
        </Card>

        {/* --- NEW SECTION: Key Oklahoma Statutes --- */}
        <Card className="mb-8">
          <CardHeader><CardTitle className="flex items-center"><Scale className="mr-2 h-6 w-6" />Key Oklahoma Statutes for Process Serving</CardTitle></CardHeader>
          <CardContent>
            <p>Oklahoma's rules for civil procedure directly govern the service of process. Understanding these statutes is critical for ensuring service is valid. Here are the most important ones:</p>
            <ul className="list-disc pl-5 my-4">
                <li>
                  <strong><a href="https://law.justia.com/codes/oklahoma/2022/title-12/section-2004/" target="_blank" rel="noopener noreferrer">Title 12, § 2004 - Process</a>:</strong> This is the core statute, detailing who can be served and how (personal delivery, leaving at dwelling, etc.). It outlines the methods for serving individuals, corporations, and other entities.
                </li>
                <li>
                  <strong><a href="https://law.justia.com/codes/oklahoma/2014/title-12/section-158.1/" target="_blank" rel="noopener noreferrer">Title 12, § 158.1 - Licensing of Private Process Servers</a>:</strong> This statute mandates that all private process servers must be licensed by the district court. It sets the requirements, including age (18+), residency, and the necessity of a bond.
                </li>
                <li>
                  <strong>Fines and Penalties:</strong> You are correct, fines can be significant. Impersonating an officer of the court or failing to comply with statutes can lead to fines up to $1,000 and the invalidation of the service. These penalties ensure the integrity of the legal process.
                </li>
                <li>
                  <strong>Affidavit of Service:</strong> After service is complete, the process server must file a sworn "Affidavit of Service" with the court. This document, required by law, serves as the official proof that the documents were delivered according to legal standards.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle className="flex items-center"><Briefcase className="mr-2 h-6 w-6" />Types of Documents We Serve</CardTitle></CardHeader>
          <CardContent>
            <p>Our expertise covers all forms of legal document delivery. We handle each with the specific care and legal diligence it requires, including:</p>
            <ul className="list-disc pl-5 my-4">
                <li><strong>Summons and Complaints:</strong> The initial documents that begin a lawsuit.</li>
                <li><strong>Subpoenas:</strong> A writ ordering a person to attend a court proceeding or produce documents.</li>
                <li><strong><a href="/seo/eviction-notice-process-server">Eviction Notices</a>:</strong> Time-critical delivery of eviction notices and forcible entry actions.</li>
                <li><strong>Court Filings:</strong> Reliable courier services for filing documents directly with the court clerk.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader><CardTitle className="flex items-center"><Award className="mr-2 h-6 w-6" />Expert Insights From Our Blog</CardTitle></CardHeader>
          <CardContent>
            <p>We believe in educating our clients. For a deeper dive into specific topics, read our expert articles on Medium:</p>
            <ul className="list-disc pl-5 my-4">
                <li>
                  <strong><a href="https://medium.com/@justlegalsolutionsok/why-you-need-a-professional-process-server-in-oklahoma-fast-reliable-service-from-just-legal-195dc334cc8e" target="_blank" rel="noopener noreferrer">Why You Need a Professional Process Server in Oklahoma</a></strong>
                </li>
                <li>
                  <strong><a href="https://medium.com/@justlegalsolutionsok/my-doctor-or-theirs-the-workers-comp-choice-that-defined-my-life-after-injury-b3f1a53b4e9b" target="_blank" rel="noopener noreferrer">My Doctor or Theirs? The Workers’ Comp Choice That Defined My Life</a></strong>
                </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader><CardTitle className="flex items-center"><Users className="mr-2 h-6 w-6" />Who We Serve</CardTitle></CardHeader>
          <CardContent>
            <p>We provide services tailored to the needs of our diverse clientele.</p>
            <ul className="list-disc pl-5 my-4">
                <li><strong>Attorneys and Law Firms:</strong> A reliable extension of your firm for fast, accurate service.</li>
                <li><strong>Businesses and Corporations:</strong> Professional and discreet handling of corporate legal service.</li>
                <li><strong>Property Management Companies:</strong> A key partner for eviction notices and landlord/tenant disputes.</li>
                <li><strong>Individuals:</strong> Assisting private citizens with sensitivity and respect.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle className="flex items-center"><Book className="mr-2 h-6 w-6" />Glossary of Common Terms</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-none my-4">
                <li><strong>Affidavit of Service:</strong> Your sworn, official proof that documents were delivered.</li>
                <li><strong>Due Diligence:</strong> The reasonable effort required to locate and serve a person.</li>
                <li><strong>Personal Service:</strong> Physically handing the documents directly to the named person.</li>
                <li><strong>Substituted Service:</strong> Leaving documents with a competent adult at the defendant’s home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle>Process Serving Services Across Oklahoma</CardTitle></CardHeader>
          <CardContent>
            <p>We serve across the state, including:</p>
            <ul className="list-disc pl-5 my-4">
              <li><a href="/seo/tulsa-process-server">Process Serving in Tulsa</a></li>
              <li><a href="/seo/jenks-process-server">Process Serving in Jenks</a></li>
              <li><a href="/seo/sand-springs-process-server">Process Serving in Sand Springs</a></li>
              <li><a href="/seo/owasso-process-server">Process Serving in Owasso</a></li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader><CardTitle>Frequently Asked Questions</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pageFaqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <p className="font-semibold">{faq.question}</p>
                  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
