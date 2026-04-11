import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';
import { BookOpen } from 'lucide-react';
import { AuthorBox } from '@/components/ui/author-box';

export const metadata: Metadata = {
  title: 'Legal Glossary for Process Serving',
  description: 'A comprehensive legal glossary of terms related to process serving, lawsuits, and the Oklahoma legal system.',
  alternates: { canonical: 'https://justlegalsolutions.org/legal-glossary' },
};

const glossaryTerms = [
  { term: 'Affidavit of Service', definition: 'A sworn, notarized document signed by a process server testifying that legal documents were delivered to a specific person on a specific date, time, and location.' },
  { term: 'Alias Summons', definition: 'A second summons issued by the court when the first summons was not served successfully before it expired.' },
  { term: 'Defendant', definition: 'The person, company, or entity being sued in a civil lawsuit or accused in a criminal case.' },
  { term: 'Deposition', definition: 'The out-of-court oral testimony of a witness that is reduced to writing for later use in court or for discovery purposes.' },
  { term: 'Due Process', definition: 'The legal requirement that the state must respect all legal rights that are owed to a person, fundamentally involving fair procedures and notice.' },
  { term: 'Duces Tecum', definition: 'A type of subpoena that requires the witness to bring specified documents, records, or other evidence to a deposition or hearing.' },
  { term: 'Evading Service', definition: 'The intentional act of avoiding a process server to prevent the formal delivery of legal documents.' },
  { term: 'Motion to Quash', definition: 'A formal request made to a court to render a previous decision or proceeding null or invalid, often used when challenging the validity of a subpoena or service.' },
  { term: 'Personal Service', definition: 'The physical delivery of legal documents directly to the named party by an authorized server.' },
  { term: 'Plaintiff', definition: 'The person or entity who brings a case against another in a court of law.' },
  { term: 'Process Server', definition: 'An individual licensed and authorized by the state to deliver (serve) legal documents to parties involved in court proceedings.' },
  { term: 'Service of Process', definition: 'The procedure by which a party to a lawsuit gives an appropriate notice of initial legal action to another party, court, or administrative body.' },
  { term: 'Skip Tracing', definition: 'The process of locating an individual whose whereabouts are unknown, usually for the purpose of serving them legal documents.' },
  { term: 'Subpoena', definition: 'A writ ordering a person to attend a court or deposition to testify as a witness.' },
  { term: 'Substitute Service', definition: 'Serving legal documents on a person authorized to receive them on behalf of the intended recipient (e.g., a family member at the residence or an agent).' },
  { term: 'Summons', definition: 'An official notice from the court informing the defendant that a lawsuit has been filed against them and specifying a timeframe to respond.' },
  { term: 'Warrant', definition: 'A document issued by a legal or government official authorizing the police or some other body to make an arrest, search premises, or carry out some other action relating to the administration of justice.' }
];

export default function LegalGlossaryPage() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Legal Glossary for Process Serving"
        pageDescription="A comprehensive legal glossary of terms related to process serving, lawsuits, and the Oklahoma legal system."
        pageUrl="https://justlegalsolutions.org/legal-glossary"
        siteName="Just Legal Solutions"
      />
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm flex items-center gap-4">
               <BookOpen className="text-blue-600 w-10 h-10" /> Legal Glossary
            </h1>
            
            <div className="bg-white p-4 rounded border border-blue-200 shadow-sm mb-8">
              <h2 className="text-lg font-bold text-blue-900 mb-2 flex items-center"><span className="mr-2">⚡</span> Quick Answer</h2>
              <p className="text-gray-800">
                A <strong>legal glossary</strong> defines important terms related to lawsuits, court proceedings, and process serving. Key terms include <strong>Service of Process</strong> (the proper delivery of legal paperwork), <strong>Plaintiff</strong> (the person suing), <strong>Defendant</strong> (the person being sued), and <strong>Affidavit of Service</strong> (the proof that the documents were delivered).
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              The legal system is full of terminology that can be confusing for those outside of the profession. To help our clients better navigate process serving and their court cases, we have compiled this glossary of common legal terms you may encounter. 
            </p>

            <div className="space-y-6">
              {glossaryTerms.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.term}</h3>
                  <p className="text-gray-700 text-lg">{item.definition}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="mt-12">
            <AuthorBox />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
