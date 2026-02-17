import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Security Policy',
  description: 'Security policy and guidelines for Just Legal Solutions website and services.',
  robots: {
    index: false,
    follow: false
  }
};

export default function SecurityPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-4 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Security Policy</h1>
          <div className="prose max-w-none">
            <p className="mb-4">
              At Just Legal Solutions, we take security seriously. As a licensed and bonded process serving company handling sensitive legal documents throughout Oklahoma, protecting client information and maintaining the integrity of legal proceedings is central to everything we do. This policy outlines our commitment to protecting our systems, your data, and the confidentiality of every case we handle.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Document Handling & Confidentiality</h2>
            <p className="mb-4">
              Every legal document entrusted to Just Legal Solutions is treated as confidential. Our process servers are trained to handle summonses, subpoenas, divorce papers, eviction notices, and all other court documents with the highest level of discretion. We never discuss case details with unauthorized parties, and all physical documents are stored securely until service is completed and proof of service is filed.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>All staff sign confidentiality and non-disclosure agreements</li>
              <li>Physical documents are stored in locked, access-controlled environments</li>
              <li>Digital copies are encrypted at rest and in transit</li>
              <li>Case information is accessible only to assigned personnel</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Website & Data Security</h2>
            <p className="mb-4">
              Our website uses HTTPS encryption (TLS 1.3) for all data transmissions, ensuring that any information you submit through our contact forms or payment systems is protected from interception. We do not store credit card numbers on our servers. All payment processing is handled by PCI-DSS compliant third-party processors.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>HTTPS encryption on every page</li>
              <li>PCI-DSS compliant payment processing</li>
              <li>No storage of payment card data on our servers</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Automated backups with encrypted off-site storage</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Access Control & Authentication</h2>
            <p className="mb-4">
              Access to client data and internal systems is restricted to authorized personnel only. We implement role-based access controls, strong password policies, and multi-factor authentication for all administrative accounts. Server access is logged and monitored for unauthorized activity.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">GPS & Photo Documentation Security</h2>
            <p className="mb-4">
              Our process servers use GPS-verified timestamps and photographic documentation to create court-admissible proof of service. This evidence is stored securely in our case management system and is only shared with the client who authorized the service and, when required, with the court. GPS data and photographs are retained for the legally required period and then securely deleted.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Reporting Security Issues</h2>
            <p className="mb-4">
              If you discover a security vulnerability on our website or have concerns about data handling, please report it immediately to <a href="mailto:info@justlegalsolutions.org" className="text-blue-600 hover:underline">info@justlegalsolutions.org</a>. We will investigate all legitimate reports promptly and do our best to resolve any issues quickly. We appreciate responsible disclosure and will not take legal action against individuals who report vulnerabilities in good faith.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Policy Updates</h2>
            <p className="mb-4">
              This security policy is reviewed and updated regularly to reflect changes in technology, legal requirements, and best practices. The most current version is always available on this page. If we make significant changes that affect how we handle client data, we will notify affected clients directly.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: February 2026 | Questions? Contact us at (539) 367-6832 or info@justlegalsolutions.org
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
