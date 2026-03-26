import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, FileText, CheckCircle, Shield, AlertTriangle } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Understanding the Affidavit of Service in Oklahoma | Just Legal Solutions',
  description: 'Learn what an Affidavit of Service (Proof of Service) is, why it is critical for your court case, and what must be included under Oklahoma law.',
  keywords: 'Oklahoma Affidavit of Service, Proof of Service Oklahoma, process server return of service, legal document proof',
  openGraph: {
    title: 'Understanding the Affidavit of Service in Oklahoma',
    description: 'Learn what an Affidavit of Service (Proof of Service) is, why it is critical for your court case, and what must be included.',
    url: 'https://justlegalsolutions.org/blog/understanding-the-affidavit-of-service',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/understanding-the-affidavit-of-service',
  },
};

export default function AffidavitGuide() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Understanding the Affidavit of Service in Oklahoma"
        pageDescription="Learn what an Affidavit of Service (Proof of Service) is, why it is critical for your court case, and what must be included under Oklahoma law."
        pageUrl="https://justlegalsolutions.org/blog/understanding-the-affidavit-of-service"
        siteName="Just Legal Solutions"
        articleDetails={{
          headline: "Understanding the Affidavit of Service in Oklahoma",
          author: "Joseph Iannazzi",
          datePublished: "2025-06-01",
          dateModified: "2025-06-01",
          image: "https://justlegalsolutions.org/images/hero.webp"
        }}
        faqItems={[
          {
            question: "What is an Affidavit of Service?",
            answer: "An Affidavit of Service, also known as Proof of Service or Return of Service, is a sworn legal document signed by a process server detailing exactly how, when, and where legal documents were delivered to a party."
          },
          {
            question: "Why is an Affidavit of Service important?",
            answer: "It proves to the court that the defendant was properly notified of the legal action against them, fulfilling their constitutional right to due process. Without a valid affidavit filed with the court, the judge cannot proceed with the case."
          }
        ]}
      />
      <Navbar />
      <LocalPromoBanner zips={[]} />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Blog</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate">Affidavit of Service Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Understanding the Affidavit of Service in Oklahoma
            </h1>
            <div className="flex items-center text-gray-600 space-x-4">
              <span className="font-medium text-blue-600">By Joseph Iannazzi</span>
              <span>•</span>
              <span>Published: June 1, 2025</span>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">

            <p className="lead text-xl text-gray-700 mb-8">
              You&apos;ve hired a process server, they&apos;ve successfully delivered your legal documents, and now they hand you a document called an &quot;Affidavit of Service&quot; (sometimes called a Return of Service). What is this document, and why is it arguably the most important piece of paper in your lawsuit?
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What is an Affidavit of Service?</h2>
            <p>
              An Affidavit of Service is a sworn legal document signed by the process server under penalty of perjury. It serves as documentary evidence for the court, proving that the defendant or respondent was properly notified of the legal action against them, as required by Oklahoma law.
            </p>
            <p>
              In short, it tells the judge the <strong>Who, What, When, Where, and How</strong> of the document delivery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why is it Critical? (Due Process)</h2>
            <p>
              Under the U.S. Constitution and Oklahoma law, a person cannot have their property, liberty, or rights taken away without &quot;due process of law.&quot; Notice of the lawsuit is the fundamental requirement of due process.
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <p className="m-0 text-red-900 font-medium">
                  If you fail to file a valid Affidavit of Service with the court clerk, the judge will not allow your case to proceed. Any judgments obtained without proper proof of service can be overturned on appeal.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Must Be Included in an Oklahoma Affidavit?</h2>
            <p>
              According to the Oklahoma Pleading Code (Title 12), a valid Affidavit of Service completed by a private process server must include:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>The Server&apos;s Information:</strong> Name, county of license, and process server license number.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>The Documents Served:</strong> A specific list of every document handed to the recipient (e.g., Summons, Petition for Dissolution of Marriage).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>The Recipient:</strong> The name of the person who received the documents.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Date and Time:</strong> Exactly when the service occurred.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Location:</strong> The precise address where service was completed.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Method of Service:</strong> Whether it was &quot;Personal Service&quot; (handed directly to the named defendant) or &quot;Substitute Service&quot; (handed to a co-resident over age 15).</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Just Legal Solutions Difference</h2>
            <p>
              Not all affidavits are created equal. A poorly drafted affidavit can invite a legal challenge from the defendant&apos;s attorney, claiming they were never served.
            </p>
            <p>
              At Just Legal Solutions, our process servers utilize modern technology to create bulletproof Affidavits of Service. We include:
            </p>
            <ul>
              <li><strong>GPS Coordinates:</strong> Proving the exact location of the server at the time of delivery.</li>
              <li><strong>Photographic Evidence:</strong> When applicable, photos of the property or the service (from a distance).</li>
              <li><strong>Detailed Physical Descriptions:</strong> Documenting the height, weight, hair color, and estimated age of the person served to prevent &quot;mistaken identity&quot; claims.</li>
            </ul>

            {/* CTA */}
            <div className="bg-blue-900 text-white p-10 rounded-2xl text-center mt-12">
              <Shield className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Don&apos;t Risk Your Case on Bad Service</h3>
              <p className="text-blue-100 mb-8 text-lg">
                Ensure your documents are served correctly and your Affidavit of Service is unassailable. Just Legal Solutions provides professional process serving starting at $21 (30% off!).
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-colors">
                  Hire a Professional Process Server Today
                </Link>
              </div>
            </div>

          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}