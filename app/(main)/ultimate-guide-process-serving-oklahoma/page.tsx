import EnhancedFaqSchema from '@/components/ui/enhanced-faq-schema';
import { promises as fs } from 'fs';
import path from 'path';
// Remove the 'next/image' import as we are no longer using it
// import Image from 'next/image'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Book, Users, Briefcase } from 'lucide-react';
import MinimalSocialProof from '@/components/MinimalSocialProof';

// Define the type for our FAQ items
interface FaqItem {
  question: string;
  answer: string;
}

// Define the type for our meta data
interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  faq: FaqItem[];
}

// Main component for the Pillar Page
export default async function UltimateGuidePage() {
  // Load the metadata for this page
  const metaPath = path.join(process.cwd(), 'app', '(main)', 'ultimate-guide-process-serving-oklahoma', 'meta.json');
  const metaFile = await fs.readFile(metaPath, 'utf8');
  const meta: PageMeta = JSON.parse(metaFile);

  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* --- Hero Image using a standard HTML <img> tag --- */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
        {/* We are using a standard img tag here to ensure the external URL works on a static site */}
        <img
          src="http://googleusercontent.com/image_collection/image_retrieval/6331469264717875101_0"
          alt="The Ultimate Guide to Process Serving in Oklahoma"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4">{meta.title}</h1>
        </div>
      </div>

      <div className="prose lg:prose-xl max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Welcome to the most comprehensive resource for understanding process serving in Oklahoma. Whether you&apos;re an attorney, a business, or an individual navigating the legal system, this guide covers everything you need to know about the laws, procedures, and best practices for legal document delivery in the Sooner State.
        </p>

        <MinimalSocialProof />
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is a Process Server?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A process server is a licensed professional responsible for delivering legal documents to individuals involved in court cases. Proper service of process is a constitutional requirement that ensures the defendant&apos;s officially notified of the legal action against them, giving them the opportunity to respond. In Oklahoma, these professionals must be licensed, bonded, and adhere to strict legal standards.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center"><Briefcase className="mr-2 h-6 w-6" />Types of Documents We Serve</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our expertise covers all forms of legal document delivery. We handle each with the specific care and legal diligence it requires.</p>
            <ul className="list-disc pl-5 my-4">
                <li><strong>Summons and Complaints:</strong> The initial documents that begin a lawsuit, officially notifying a person or entity they are being sued.</li>
                <li><strong>Subpoenas:</strong> A writ ordering a person to attend a court proceeding or produce documents. We handle subpoenas for depositions, trials, and record production.</li>
                <li><strong>Eviction Notices:</strong> We manage the sensitive and time-critical delivery of eviction notices and forcible entry and detainer actions.</li>
                <li><strong>Court Filings:</strong> We offer reliable courier services for filing documents directly with the court clerk, saving you valuable time.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Oklahoma&apos;s Process Serving Laws</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Critical Legal Information</AlertTitle>
              <AlertDescription>
                <p>Oklahoma has specific statutes governing how legal documents must be served. Failure to comply with these rules can jeopardize a case. Key points include:</p>
                <ul className="list-disc pl-5 my-4">
                  <li><strong>Licensing is Mandatory:</strong> All private process servers in Oklahoma must be licensed, be at least 18 years old, and have no felony convictions.</li>
                  <li><strong>Ethical Conduct:</strong> It is illegal for a process server to impersonate a law enforcement officer.</li>
                  <li><strong>Alternative Service:</strong> If a person avoids service, Oklahoma law allows for alternative methods with court permission.</li>
                  <li><strong>Fines & Penalties:</strong> Fines for improper service can be as high as $1,000 to ensure compliance.</li>
                </ul>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center"><Users className="mr-2 h-6 w-6" />Who We Serve</CardTitle>
          </CardHeader>
          <<CardContent>
            <p>We provide professional services tailored to the unique needs of our diverse clientele.</p>
            <ul className="list-disc pl-5 my-4">
                <li><strong>Attorneys and Law Firms:</strong> We act as a reliable extension of your firm, providing fast, accurate service you can trust.</li>
                <li><strong>Businesses and Corporations:</strong> From subpoenas to contract disputes, we handle corporate legal service with professionalism and discretion.</li>
                <li><strong>Property Management Companies:</strong> Our expertise in eviction notices and landlord/tenant disputes makes us a key partner for property managers.</li>
                <li><strong>Individuals:</strong> We assist private citizens with serving documents for divorce, child support, and small claims cases with sensitivity and respect.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center"><Book className="mr-2 h-6 w-6" />Glossary of Common Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-none my-4">
                <li><strong>Affidavit of Service:</strong> A sworn legal document signed by the process server that details the time, date, and manner of service. This is your proof of service.</li>
                <li><strong>Due Diligence:</strong> The reasonable effort a process server must make to locate and serve a person, which must be documented before alternative service is requested.</li>
                <li><strong>Personal Service:</strong> Physically handing the legal documents directly to the person named on the documents. This is the preferred method of service.</li>
                <li><strong>Substituted Service:</strong> An alternative method of service, such as leaving documents with a competent adult at the defendant’s home, used when personal service is not possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Process Serving Services Across Oklahoma</CardTitle>
          </CardHeader>
          <CardContent>
            <p>While the laws are statewide, serving documents in different areas requires local knowledge. We serve across the state, including:</p>
            <ul className="list-disc pl-5 my-4">
              <li><a href="/seo/tulsa-process-server">Process Serving in Tulsa</a></li>
              <li><a href="/seo/jenks-process-server">Process Serving in Jenks</a></li>
              <li><a href="/seo/sand-springs-process-server">Process Serving in Sand Springs</a></li>
              <li><a href="/seo/owasso-process-server">Process Serving in Owasso</a></li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <EnhancedFaqSchema faqs={meta.faq} />
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
