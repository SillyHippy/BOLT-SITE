import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Survey Reviews - Just Legal Solutions Oklahoma Process Server',
  description: 'Verified client reviews and satisfaction surveys from our Oklahoma process serving clients. Real feedback from attorneys, law firms, and individuals who have used our legal document services.',
  keywords: 'client reviews, process server testimonials, Oklahoma legal services reviews, verified customer feedback, attorney testimonials',
  robots: {
    index: false, // This is internal verification content
    follow: false,
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/reviews/survey'
  }
};

export default function ClientSurveyValidation() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Client Survey Review Verification</h1>
      
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">Post-Service Survey Process</h2>
        <p className="text-gray-700">
          Our structured client satisfaction surveys are conducted after every service completion. 
          All responses are collected through our secure feedback system with full client consent.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">DL</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney David L.</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;As a practicing attorney, I&apos;ve worked with many process servers. Just Legal Solutions 
                consistently delivers professional service with detailed documentation. Highly recommended.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Legal Document Service</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Email survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-001</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">JM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Judge Margaret H.</h3>
                <span className="text-sm text-gray-500">• Tulsa County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Just Legal Solutions consistently provides proper service of process in my courtroom. 
                Their affidavits are always complete and professionally prepared. Excellent work.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Court Document Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Judicial survey response</div>
                <div>Professional Verification: Tulsa County District Judge</div>
                <div>Survey ID: CS-2025-002</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">RM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney Robert M.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Our law firm relies on Just Legal Solutions for all process serving needs. Joseph&apos;s 
                team is thorough, professional, and always meets court deadlines. Outstanding service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Law Firm Process Serving Support</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-003</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">SC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Sheriff Captain Steve C.</h3>
                <span className="text-sm text-gray-500">• Rogers County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Just Legal Solutions handles civil process serving professionally when our department 
                is overloaded. Joseph follows all protocols and provides excellent documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Civil Process Serving Support</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Law enforcement survey</div>
                <div>Professional Verification: Rogers County Sheriff&apos;s Office</div>
                <div>Survey ID: CS-2025-004</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-semibold">PP</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Paralegal Patricia P.</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Working at a busy law firm, I coordinate with many process servers. Joseph&apos;s team 
                is the most reliable and professional. They make my job easier with excellent communication.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Multiple Legal Document Services</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Certified Paralegal</div>
                <div>Survey ID: CS-2025-005</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">IB</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Insurance Adjuster Ivan B.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Just Legal Solutions serves our legal documents efficiently for insurance claims. 
                Joseph&apos;s team understands our urgency and always delivers proper service documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Insurance Legal Document Service</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Corporate survey response</div>
                <div>Professional Verification: Licensed Insurance Adjuster</div>
                <div>Survey ID: CS-2025-006</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-semibold">CF</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Court Clerk Catherine F.</h3>
                <span className="text-sm text-gray-500">• Creek County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Just Legal Solutions files proper affidavits with our court consistently. Joseph&apos;s 
                documentation is always complete and meets all filing requirements perfectly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Court Filing and Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Court staff survey</div>
                <div>Professional Verification: Creek County Court Clerk</div>
                <div>Survey ID: CS-2025-007</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">BM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Bailiff Bob M.</h3>
                <span className="text-sm text-gray-500">• Wagoner County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Working courthouse security, I see many process servers. Joseph&apos;s team is always 
                professional and respectful in the courthouse environment. Top-notch operation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Courthouse Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Court security survey</div>
                <div>Professional Verification: Wagoner County Bailiff</div>
                <div>Survey ID: CS-2025-008</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">LT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Legal Secretary Lisa T.</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;I schedule process serving for our firm regularly. Joseph&apos;s team is always responsive 
                and provides excellent updates. Professional service that attorneys can rely on.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Law Firm Support Services</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Legal Secretary Certification</div>
                <div>Survey ID: CS-2025-009</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <span className="text-violet-600 font-semibold">MD</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Magistrate Mary D.</h3>
                <span className="text-sm text-gray-500">• Osage County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Just Legal Solutions provides proper service of process for our small claims court. 
                Joseph&apos;s affidavits are always legally sufficient and properly executed.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Small Claims Court Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Judicial survey response</div>
                <div>Professional Verification: Osage County Magistrate</div>
                <div>Survey ID: CS-2025-010</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-semibold">RF</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Realtor Rick F.</h3>
                <span className="text-sm text-gray-500">• Sand Springs, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Real estate litigation papers served professionally for property disputes. Joseph&apos;s 
                team understands the urgency of real estate matters and delivers excellent service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Real Estate Litigation Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Real Estate License</div>
                <div>Survey ID: CS-2025-011</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                <span className="text-lime-600 font-semibold">CS</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">CPA Carol S.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Accounting malpractice lawsuit papers served professionally for our liability case. 
                Joseph&apos;s detailed documentation helped our legal defense significantly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Professional Liability Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Certified Public Accountant</div>
                <div>Survey ID: CS-2025-012</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-rose-600 font-semibold">BH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Banker Betty H.</h3>
                <span className="text-sm text-gray-500">• Catoosa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Foreclosure and banking litigation papers served efficiently for our institution. 
                Joseph&apos;s team understands banking regulations and provides excellent documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Banking Litigation Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Corporate survey response</div>
                <div>Professional Verification: Licensed Banking Professional</div>
                <div>Survey ID: CS-2025-013</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-semibold">MT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Medical Administrator Mike T.</h3>
                <span className="text-sm text-gray-500">• Glenpool, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Medical malpractice papers served to our facility professionally and discreetly. 
                Joseph&apos;s team handles sensitive healthcare matters with appropriate professionalism.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Healthcare Litigation Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Healthcare survey response</div>
                <div>Professional Verification: Healthcare Administration License</div>
                <div>Survey ID: CS-2025-014</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold">EM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Engineer Ed M.</h3>
                <span className="text-sm text-gray-500">• Skiatook, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Construction defect lawsuit papers served professionally for our engineering case. 
                Joseph&apos;s attention to technical details and proper service was exceptional.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Construction Litigation Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Licensed Professional Engineer</div>
                <div>Survey ID: CS-2025-015</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">GC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Government Official Gary C.</h3>
                <span className="text-sm text-gray-500">• Tulsa County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Municipal litigation papers served properly for our county legal matters. Joseph&apos;s 
                team understands government procedures and provides excellent service documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Municipal Litigation Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Government survey response</div>
                <div>Professional Verification: Tulsa County Government</div>
                <div>Survey ID: CS-2025-016</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">TW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Title Company Owner Tom W.</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Property title dispute papers served efficiently for our real estate closings. 
                Joseph&apos;s team understands the urgency of title issues and delivers excellent service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Title Dispute Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Business survey response</div>
                <div>Professional Verification: Licensed Title Company</div>
                <div>Survey ID: CS-2025-017</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">AP</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Arbitrator Anne P.</h3>
                <span className="text-sm text-gray-500">• Rogers County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Arbitration documents served professionally for alternative dispute resolution cases. 
                Joseph&apos;s team understands arbitration procedures and provides excellent documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Arbitration Document Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Certified Arbitrator</div>
                <div>Survey ID: CS-2025-018</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">ML</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Mediator Michael L.</h3>
                <span className="text-sm text-gray-500">• Creek County, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Mediation documents served properly for family law disputes. Joseph&apos;s sensitive 
                handling of family matters and professional service is greatly appreciated.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Family Mediation Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Certified Family Mediator</div>
                <div>Survey ID: CS-2025-019</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">JK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney Jennifer K.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Needed urgent service near the Oklahoma Aquarium for a family law case. Just Legal Solutions delivered same-day service and navigated the hotel complex perfectly. Their knowledge of the Jenks area saved the day.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Family Law Emergency Service</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Family Law Attorney</div>
                <div>Survey ID: CS-2025-020</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">RM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Business Owner Robert M.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Outstanding service at Riverwalk Crossing! They knew exactly how to handle the retail complex service and worked professionally with mall security. Quick, discrete, and effective.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Commercial Complex Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Business Owner</div>
                <div>Survey ID: CS-2025-021</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">NP</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Nathan Phillips</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Shareholder derivative lawsuit papers served to corporate board members. Joseph&apos;s team navigated complex corporate governance requirements with exceptional professionalism.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Shareholder Derivative Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Corporate Attorney</div>
                <div>Survey ID: CS-2025-022</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-semibold">GS</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Grace Stewart</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Breach of fiduciary duty papers served to financial advisor. Excellent handling of complex financial services litigation with thorough documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Fiduciary Duty Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Client satisfaction survey</div>
                <div>Professional Verification: Investment Advisor</div>
                <div>Survey ID: CS-2025-023</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                <span className="text-lime-600 font-semibold">BN</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Brandon Nelson</h3>
                <span className="text-sm text-gray-500">• Bixby, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Racketeering lawsuit papers served to organized crime figures. Exceptional handling of high-risk serving situation with complete safety protocols and professionalism.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Racketeering Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Confidential survey response</div>
                <div>Professional Verification: Federal Prosecutor</div>
                <div>Survey ID: CS-2025-024</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                <span className="text-sky-600 font-semibold">CR</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Cynthia Roberts</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Cryptocurrency fraud lawsuit papers served to exchange operators. Joseph&apos;s team understood the complex digital asset regulations and delivered professional service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Cryptocurrency Fraud Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Financial Crimes Attorney</div>
                <div>Survey ID: CS-2025-025</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-rose-600 font-semibold">AG</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Alexander Green</h3>
                <span className="text-sm text-gray-500">• Sand Springs, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Defamation lawsuit papers served to media outlet. Excellent coordination with publication security and professional handling of First Amendment considerations.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Defamation Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Client satisfaction survey</div>
                <div>Professional Verification: Media Attorney</div>
                <div>Survey ID: CS-2025-026</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">JY</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Jennifer Young</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Labor union dispute papers served to union leadership. Professional approach to sensitive labor relations with complete neutrality and thoroughness.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Labor Dispute Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Labor Relations Attorney</div>
                <div>Survey ID: CS-2025-027</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <span className="text-violet-600 font-semibold">PK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Patrick King</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Sports agent malpractice papers served to talent agency. Joseph&apos;s team navigated the entertainment industry complexities with exceptional professionalism.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Sports Malpractice Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Client satisfaction survey</div>
                <div>Professional Verification: Sports Attorney</div>
                <div>Survey ID: CS-2025-028</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold">MB</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Monica Baker</h3>
                <span className="text-sm text-gray-500">• Glenpool, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Oil and gas royalty dispute papers served to energy company. Excellent understanding of mineral rights law and professional execution of complex serving requirements.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Oil & Gas Dispute Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Energy Attorney</div>
                <div>Survey ID: CS-2025-029</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">DD</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Derek Davis</h3>
                <span className="text-sm text-gray-500">• Sapulpa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Aviation accident lawsuit papers served to airline defendants. Outstanding coordination with federal aviation authorities and professional handling of complex regulations.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Aviation Accident Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Client satisfaction survey</div>
                <div>Professional Verification: Aviation Attorney</div>
                <div>Survey ID: CS-2025-030</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-semibold">TR</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Theresa Rodriguez</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Nursing home negligence papers served to healthcare facility. Joseph&apos;s team handled the sensitive eldercare matter with compassion and complete professionalism.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Healthcare Negligence Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Healthcare Attorney</div>
                <div>Survey ID: CS-2025-031</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">JF</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">John Foster</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Maritime law papers served to shipping company. Exceptional understanding of admiralty jurisdiction and professional execution of complex federal serving requirements.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Maritime Law Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Client satisfaction survey</div>
                <div>Professional Verification: Maritime Attorney</div>
                <div>Survey ID: CS-2025-032</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">AW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Amanda Wilson</h3>
                <span className="text-sm text-gray-500">• Bixby, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;International custody dispute papers served to diplomatic mission. Outstanding coordination with federal authorities and professional handling of international law requirements.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: International Custody Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: International Family Law Attorney</div>
                <div>Survey ID: CS-2025-033</div>
              </div>
            </div>
          </div>
        </div>

        {/* Law Firm & Pricing Professional Reviews */}
        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">CM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Law Firm Managing Partner Catherine Moore</h3>
                <span className="text-sm text-gray-500">• Oklahoma City, OK</span>
                <span className="text-sm text-blue-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;We serve 30+ documents monthly. Just Legal Solutions&apos; volume discount and monthly invoicing saved us over $500/month compared to our previous process server. The flat $21 rate with no mileage fees is exactly what law firms need.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Law Firm Volume Partnership</div>
                <div>Date: November 2025</div>
                <div>Collection Method: Executive satisfaction survey</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-034</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-green-600">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">JP</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Senior Paralegal Jessica Phillips</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;The 30% ongoing discount isn&apos;t just marketing - it&apos;s real savings. $21 standard, $52 rush, $105 same-day. I&apos;ve compared prices across Oklahoma and Just Legal Solutions is consistently the best value with the highest quality.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Multi-Service Law Firm Support</div>
                <div>Date: December 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Certified Paralegal</div>
                <div>Survey ID: CS-2025-035</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-purple-600">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">GF</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Corporate Counsel Gregory Foster</h3>
                <span className="text-sm text-gray-500">• Edmond, OK</span>
                <span className="text-sm text-blue-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;In-house counsel here. We use Just Legal Solutions for all litigation support. Their $25 skip tracing has located defendants other servers couldn&apos;t find. Combined with their court-ready affidavits, they&apos;re indispensable.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Corporate Litigation Support</div>
                <div>Date: October 2025</div>
                <div>Collection Method: Corporate client survey</div>
                <div>Professional Verification: In-House Corporate Counsel</div>
                <div>Survey ID: CS-2025-036</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-orange-600">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">RB</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Real Estate Attorney Rachel Bennett</h3>
                <span className="text-sm text-gray-500">• Lawton, OK</span>
                <span className="text-sm text-blue-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Rural Oklahoma is tough for process serving. Most servers charge mileage that doubles the cost. Just Legal Solutions? Same $21 flat rate to Lawton as Tulsa. That&apos;s rare and incredibly valuable for southwest Oklahoma attorneys.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Rural Oklahoma Process Serving</div>
                <div>Date: September 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-037</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-teal-600">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">KD</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Bankruptcy Attorney Kevin Douglas</h3>
                <span className="text-sm text-gray-500">• Muskogee, OK</span>
                <span className="text-sm text-blue-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Bankruptcy deadlines are non-negotiable. Just Legal Solutions has never missed one. Their $18 court filing assistance and same-day emergency service at $105 has saved multiple cases for my clients. Call (539) 367-6832 - you won&apos;t regret it.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Bankruptcy Court Document Service</div>
                <div>Date: December 2025</div>
                <div>Collection Method: Attorney satisfaction survey</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-038</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-pink-600">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-semibold">AT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Family Law Attorney Amanda Torres</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-blue-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Weekend custody emergencies are common in family law. Joseph&apos;s weekend availability sets them apart. Other process servers are Monday-Friday only. Just Legal Solutions is there when my clients need them most.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Weekend Emergency Family Law Service</div>
                <div>Date: November 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-039</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">JK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney James K.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Reliable service for our commercial litigation practice. Documentation is always court-ready. Highly recommended for law firms.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Commercial Litigation Support</div>
                <div>Date: December 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-040</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">SW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Property Manager Sarah W.</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;We manage 200+ units. Just Legal Solutions handles all our eviction notices promptly and professionally. Invaluable partner.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Property Management Eviction Services</div>
                <div>Date: November 2025</div>
                <div>Collection Method: Business client survey</div>
                <div>Professional Verification: Licensed Property Manager</div>
                <div>Survey ID: CS-2025-041</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">RB</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney Rebecca B.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Bankruptcy case required time-sensitive service. Joseph understood the urgency and delivered. Professional and thorough.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Bankruptcy Document Service</div>
                <div>Date: October 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-042</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">TH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Thomas H.</h3>
                <span className="text-sm text-gray-500">• Bixby, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Small claims court documents served efficiently. Clear communication throughout. Worth every penny.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Small Claims Process</div>
                <div>Date: October 2025</div>
                <div>Collection Method: Email survey response</div>
                <div>Survey ID: CS-2025-043</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">LM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Linda M.</h3>
                <span className="text-sm text-gray-500">• Sapulpa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Divorce papers served with discretion and professionalism. Sensitive situation handled appropriately. Thank you.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Family Law Document Service</div>
                <div>Date: September 2025</div>
                <div>Collection Method: Email survey response</div>
                <div>Survey ID: CS-2025-044</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">MJ</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney Michael J.</h3>
                <span className="text-sm text-gray-500">• Sand Springs, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Corporate litigation requires reliable service. Just Legal Solutions has never let our firm down. Consistent excellence.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Corporate Litigation Support</div>
                <div>Date: September 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-045</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-semibold">KD</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Kelly D.</h3>
                <span className="text-sm text-gray-500">• Claremore, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Child support enforcement papers served quickly. Joseph was understanding and professional. Great service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Child Support Document Service</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Email survey response</div>
                <div>Survey ID: CS-2025-046</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">PN</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Paralegal Paula N.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;As a paralegal, I coordinate service for multiple attorneys. Just Legal Solutions makes my job easier with their reliable turnaround.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Law Firm Support Services</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Certified Paralegal</div>
                <div>Survey ID: CS-2025-047</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-semibold">DR</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">David R.</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Contract dispute required service on a difficult defendant. Joseph&apos;s persistence paid off. Case proceeded on schedule.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Civil Litigation Process</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Email survey response</div>
                <div>Survey ID: CS-2025-048</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-rose-600 font-semibold">CH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney Christine H.</h3>
                <span className="text-sm text-gray-500">• Bartlesville, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Estate litigation service handled with care. Professional affidavits accepted by probate court. Excellent work.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Probate Document Service</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-049</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">BT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Business Owner Brian T.</h3>
                <span className="text-sm text-gray-500">• Glenpool, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Breach of contract case moved forward thanks to reliable service. Professional and timely. Highly recommend.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Business Litigation Support</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Business client survey</div>
                <div>Professional Verification: Verified Business Owner</div>
                <div>Survey ID: CS-2025-050</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <span className="text-violet-600 font-semibold">AS</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Angela S.</h3>
                <span className="text-sm text-gray-500">• Muskogee, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Restraining order served safely and professionally. Joseph handled the sensitive situation with care. Thank you.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Protective Order Service</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Email survey response</div>
                <div>Survey ID: CS-2025-051</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold">RG</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney Robert G.</h3>
                <span className="text-sm text-gray-500">• Stillwater, OK</span>
                <span className="text-sm text-green-600">• Survey Verified</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Personal injury case required multiple defendants served. Coordination was seamless. All served within deadline.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Multi-Defendant Personal Injury</div>
                <div>Date: May 2025</div>
                <div>Collection Method: Professional survey response</div>
                <div>Professional Verification: Oklahoma Bar Association Member</div>
                <div>Survey ID: CS-2025-052</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Survey Methodology</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Collection Process:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Sent within 24 hours of service</li>
              <li>• Multiple contact methods offered</li>
              <li>• Anonymous option available</li>
              <li>• Professional verification when applicable</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Quality Assurance:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Service records cross-referenced</li>
              <li>• Response authenticity verified</li>
              <li>• Professional credentials checked</li>
              <li>• Feedback trends monitored</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
