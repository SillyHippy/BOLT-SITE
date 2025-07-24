import EnhancedFaqSchema from '@/components/ui/enhanced-faq-schema';
import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
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

      {/* --- Hero Image using Direct URL --- */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8">
        <Image
          src="http://googleusercontent.com/image_collection/image_retrieval/6331469264717875101_0"
          alt="The Ultimate Guide to Process Serving in Oklahoma"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4">{meta.title}</h1>
        </div>
      </div>

      <div className="prose lg:prose-xl max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Welcome to the most comprehensive resource for understanding process serving in Oklahoma. Whether you&apos;re an attorney, a business, or an individual navigating the legal system, this guide covers everything you need to know about the laws, procedures, and best practices for legal document delivery in the Sooner State.
        </p>

        {/* --- Social Proof --- */}
        <MinimalSocialProof />

        {/* --- What is a Process Server? --- */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is a Process Server?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              A process server is a licensed professional responsible for delivering legal documents—such as summons, subpoenas, and complaints—to individuals involved in court cases. Proper service of process is a constitutional requirement that ensures the defendant&apos;s officially notified of the legal action against them, giving them the opportunity to respond. In Oklahoma, these professionals must be licensed, bonded, and adhere to strict legal standards.
            </p>
          </CardContent>
        </Card>

        {/* --- Oklahoma's Laws --- */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Oklahoma&apos;s Process Serving Laws</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Critical Legal Information</AlertTitle>
              <AlertDescription>
                <p>
                  Oklahoma has specific statutes governing how legal documents must be served. Failure to comply with these rules can jeopardize a case. Key points include:
                </p>
                <ul className="list-disc pl-5 my-4">
                  <li><strong>Licensing is Mandatory:</strong> All private process servers in Oklahoma must be licensed by the state, be at least 18 years old, and have no felony convictions.</li>
                  <li><strong>Ethical Conduct:</strong> It is illegal for a process server to impersonate a law enforcement officer or use threats and intimidation.</li>
                  <li><strong>Alternative Service:</strong> If a person avoids service, Oklahoma law allows for alternative methods, such as leaving documents with another adult at the residence or, with court permission, service by mail or publication.</li>
                  <li><strong>Fines & Penalties:</strong> As laws evolve, so do the penalties for violations. For instance, certain fines for improper service can be as high as $1,000 to ensure compliance and protect all parties.</li>
                </ul>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* --- Services Across Oklahoma --- */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Process Serving Services Across Oklahoma</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              While the laws are statewide, serving documents in different areas requires local knowledge. We provide professional, reliable service across the state, including these key cities:
            </p>
            <ul className="list-disc pl-5 my-4">
              <li><a href="/seo/tulsa-process-server">Process Serving in Tulsa</a></li>
              <li><a href="/seo/jenks-process-server">Process Serving in Jenks</a></li>
              <li><a href="/seo/sand-springs-process-server">Process Serving in Sand Springs</a></li>
              <li><a href="/seo/owasso-process-server">Process Serving in Owasso</a></li>
              <li><a href="/seo/claremore-process-server">Process Serving in Claremore</a></li>
              <li><a href="/seo/coweta-process-server">Process Serving in Coweta</a></li>
              <li><a href="/seo/catoosa-process-server">Process Serving in Catoosa</a></li>
            </ul>
          </CardContent>
        </Card>

        {/* --- FAQ Section --- */}
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
