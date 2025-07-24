import EnhancedFaqSchema from '@/components/ui/enhanced-faq-schema';
import { promises as fs } from 'fs';
import path from 'path';

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
    <div className="prose lg:prose-xl mx-auto px-4 py-8">
      <h1>{meta.title}</h1>
      <p>
        Welcome to the most comprehensive resource for understanding process serving in Oklahoma. Whether you&apos;re an attorney, a business, or an individual navigating the legal system, this guide covers everything you need to know about the laws, procedures, and best practices for legal document delivery in the Sooner State.
      </p>

      <hr className="my-8" />

      <h2>What is a Process Server?</h2>
      <p>
        A process server is a licensed professional responsible for delivering legal documents—such as summons, subpoenas, and complaints—to individuals involved in court cases. Proper service of process is a constitutional requirement that ensures the defendant is officially notified of the legal action against them, giving them the opportunity to respond. In Oklahoma, these professionals must be licensed, bonded, and adhere to strict legal standards.
      </p>

      <hr className="my-8" />

      <h2>Understanding Oklahoma&apos;s Process Serving Laws</h2>
      <p>
        Oklahoma has specific statutes governing how legal documents must be served. Failure to comply with these rules can jeopardize a case. Key points include:
      </p>
      <ul className="list-disc pl-5">
        <li><strong>Licensing is Mandatory:</strong> All private process servers in Oklahoma must be licensed by the state, be at least 18 years old, and have no felony convictions.</li>
        <li><strong>Ethical Conduct:</strong> It is illegal for a process server to impersonate a law enforcement officer or use threats and intimidation.</li>
        <li><strong>Alternative Service:</strong> If a person avoids service, Oklahoma law allows for alternative methods, such as leaving documents with another adult at the residence or, with court permission, service by mail or publication.</li>
        <li><strong>Fines & Penalties:</strong> As laws evolve, so do the penalties for violations. For instance, certain fines for improper service can be as high as $1,000 to ensure compliance and protect all parties.</li>
      </ul>

      <hr className="my-8" />

      <h2>Process Serving Services Across Oklahoma</h2>
      <p>
        While the laws are statewide, serving documents in different areas requires local knowledge. We provide professional, reliable service across the state, including these key cities:
      </p>
      <ul className="list-disc pl-5">
        <li><a href="/seo/tulsa-process-server">Process Serving in Tulsa</a></li>
        <li><a href="/seo/jenks-process-server">Process Serving in Jenks</a></li>
        <li><a href="/seo/sand-springs-process-server">Process Serving in Sand Springs</a></li>
        <li><a href="/seo/owasso-process-server">Process Serving in Owasso</a></li>
        <li><a href="/seo/claremore-process-server">Process Serving in Claremore</a></li>
        <li><a href="/seo/coweta-process-server">Process Serving in Coweta</a></li>
        <li><a href="/seo/catoosa-process-server">Process Serving in Catoosa</a></li>
      </ul>

      <hr className="my-8" />

      <h2>Frequently Asked Questions</h2>
      
      {/* This is your existing FAQ component. It will read the FAQ data from the meta.json file. */}
      <EnhancedFaqSchema faqs={meta.faq} />

    </div>
  );
}
