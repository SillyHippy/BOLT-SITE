import EnhancedFaqSchema from '@/components/ui/enhanced-faq-schema';
import { promises as fs } from 'fs';
import path from 'path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Book, Users, Briefcase } from 'lucide-react';
import MinimalSocialProof from '@/components/MinimalSocialProof';

interface FaqItem {
  question: string;
  answer: string;
}

interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  faq: FaqItem[];
}

export default async function UltimateGuidePage() {
  const metaPath = path.join(process.cwd(), 'app', '(main)', 'ultimate-guide-process-serving-oklahoma', 'meta.json');
  const metaFile = await fs.readFile(metaPath, 'utf8');
  const meta: PageMeta = JSON.parse(metaFile);

  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
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
          <CardHeader><CardTitle>What is a Process Server?</CardTitle></CardHeader>
          <CardContent><p>A process server is a licensed professional responsible for delivering legal documents to individuals involved in court cases. Proper service of process is a constitutional requirement that ensures the defendant&apos;s officially notified of the legal action against them, giving them the opportunity to respond. In Oklahoma, these professionals must be licensed, bonded, and adhere to strict legal standards.</p></CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle className="flex items-center"><Briefcase className="mr-2 h-6 w-6" />Types of Documents We Serve</CardTitle></CardHeader>
          <CardContent>
            <p>Our expertise covers all forms of legal document delivery. We handle each with the specific care and legal diligence it requires.</p>
            <ul className="list-disc pl-5 my-4">
                <li><strong>Summons and Complaints:</strong> The initial documents that begin a lawsuit.</li>
                <li><strong>Subpoenas:</strong> A writ ordering a person to attend a court proceeding or produce documents.</li>
                <li><strong>Eviction Notices:</strong> Time-critical delivery of eviction notices and forcible entry actions.</li>
                <li><strong>Court Filings:</strong> Reliable courier services for filing documents directly with the court clerk.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader><CardTitle>Understanding Oklahoma&apos;s Process Serving Laws</CardTitle></CardHeader>
          <CardContent>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Critical Legal Information</AlertTitle>
              <AlertDescription>
                <p>Oklahoma has specific statutes governing how legal documents must be served. Key points include:</p>
                <ul className="list-disc pl-5 my-4">
                  <li><strong>Licensing is Mandatory:</strong> Process servers must be licensed, at least 18, with no felony convictions.</li>
                  <li><strong>Ethical Conduct:</strong> Impersonating a law enforcement officer is illegal.</li>
                  <li><strong>Alternative Service:</strong> Allowed with court permission if a person avoids service.</li>
                  <li><strong>Fines & Penalties:</strong> Can be as high as $1,000 for improper service.</li>
                </ul>
              </AlertDescription>
            </Alert>
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
          <CardContent><EnhancedFaqSchema faqs={meta.faq} /></CardContent>
        </Card>

      </div>
    </div>
  );
}
