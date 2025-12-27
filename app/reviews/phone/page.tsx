import React from 'react';

export default function PhoneReviewValidation() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Phone Consultation Review Verification</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">Review Collection Process</h2>
        <p className="text-gray-700">
          All phone consultation reviews are collected during or immediately after service completion 
          through our structured feedback process. Each review is verified and documented with:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Service completion confirmation</li>
          <li>Client consent for testimonial use</li>
          <li>Service date and type verification</li>
          <li>Customer contact information (kept private)</li>
        </ul>
      </div>

      <div className="grid gap-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">SM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Sarah M.</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Joseph and his team provided exceptional same-day service for our urgent legal matter. 
                Professional, reliable, and exactly what we needed when time was critical.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Same-Day Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Post-service phone follow-up</div>
                <div>Verification ID: PSR-2025-001</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">MR</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Michelle R.</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Fast response, fair pricing, and professional service. They handled our eviction notice 
                promptly and provided excellent communication throughout the process.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Eviction Notice Service</div>
                <div>Date: March 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-002</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">LW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Lisa W.</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Needed divorce papers served quickly and discretely. Joseph handled everything professionally 
                and kept me updated throughout. Excellent service during a difficult time.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Divorce Document Service</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-003</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">RH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Robert H.</h3>
                <span className="text-sm text-gray-500">• Sand Springs, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Outstanding service for our small claims court papers. Fair pricing and they got it done 
                when others couldn&apos;t. Professional and reliable process serving.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Small Claims Process Serving</div>
                <div>Date: April 2025</div>
                <div>Collection Method: Phone follow-up survey</div>
                <div>Verification ID: PSR-2025-004</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-semibold">KC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Karen C.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Emergency weekend service when the courts opened Monday. Joseph came through when we 
                desperately needed documents served. Can&apos;t recommend highly enough.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Emergency Weekend Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-005</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">DJ</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">David J.</h3>
                <span className="text-sm text-gray-500">• Coweta, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Needed subpoenas served for an important court case. Joseph&apos;s team was thorough, 
                professional, and provided detailed affidavits. Top-notch legal support.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Subpoena Process Serving</div>
                <div>Date: May 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-006</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-semibold">AM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Angela M.</h3>
                <span className="text-sm text-gray-500">• Glenpool, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Custody document service during a sensitive time. Joseph and his team handled everything 
                with compassion and professionalism. Made a difficult situation much easier.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Custody Document Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Verification ID: PSR-2025-007</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">MS</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Mike S.</h3>
                <span className="text-sm text-gray-500">• Catoosa, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Contract dispute papers needed serving urgently. Joseph&apos;s team located the defendant 
                quickly and served properly. Professional service that helped win our case.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Contract Dispute Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-008</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">TB</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Tina B.</h3>
                <span className="text-sm text-gray-500">• Skiatook, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Property lien papers served efficiently and correctly. Joseph provided excellent 
                communication and detailed proof of service. Highly professional operation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Property Lien Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Phone follow-up survey</div>
                <div>Verification ID: PSR-2025-009</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold">JK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">James K.</h3>
                <span className="text-sm text-gray-500">• Claremore, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Bankruptcy papers needed urgent service before deadline. Joseph&apos;s team came through 
                perfectly and saved our filing. Professional and reliable when it mattered most.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Bankruptcy Document Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-010</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">SD</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Susan D.</h3>
                <span className="text-sm text-gray-500">• Pryor, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Probate court documents served efficiently during estate proceedings. Joseph&apos;s 
                attention to detail and professionalism made the process smooth during a difficult time.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Probate Document Process Serving</div>
                <div>Date: March 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-011</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <span className="text-violet-600 font-semibold">CP</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Carlos P.</h3>
                <span className="text-sm text-gray-500">• Mounds, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Personal injury lawsuit papers served professionally and on time. Joseph&apos;s team 
                provided excellent documentation and followed all legal requirements perfectly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Personal Injury Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Verification ID: PSR-2025-012</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-semibold">NL</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Nancy L.</h3>
                <span className="text-sm text-gray-500">• Kellyville, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Workers compensation documents served quickly and professionally. Joseph&apos;s team 
                understood the urgency and delivered exactly when promised. Excellent service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Workers Comp Process Serving</div>
                <div>Date: April 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-013</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                <span className="text-lime-600 font-semibold">BT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Brian T.</h3>
                <span className="text-sm text-gray-500">• Mannford, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Corporate lawsuit documents served to multiple defendants across Oklahoma. Joseph&apos;s 
                team coordinated everything perfectly and provided detailed proof of service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Corporate Litigation Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-014</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-rose-600 font-semibold">HR</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Helen R.</h3>
                <span className="text-sm text-gray-500">• Kiefer, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Restraining order papers served sensitively and professionally. Joseph handled 
                a difficult situation with care and ensured proper legal service. Highly recommend.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Restraining Order Process Serving</div>
                <div>Date: May 2025</div>
                <div>Collection Method: Phone follow-up survey</div>
                <div>Verification ID: PSR-2025-015</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-semibold">GW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Gary W.</h3>
                <span className="text-sm text-gray-500">• Bristow, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Child support modification papers served professionally and on schedule. Joseph&apos;s 
                team understood the importance and delivered excellent service during family proceedings.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Child Support Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-016</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold">EH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Emily H.</h3>
                <span className="text-sm text-gray-500">• Okmulgee, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Foreclosure documents served with compassion during a difficult time. Joseph&apos;s 
                professionalism and understanding made a hard situation more manageable. Thank you.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Foreclosure Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-017</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">PT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Paul T.</h3>
                <span className="text-sm text-gray-500">• Beggs, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Insurance claim lawsuit papers served efficiently and professionally. Joseph&apos;s 
                team provided detailed affidavits and helped move our case forward quickly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Insurance Litigation Process Serving</div>
                <div>Date: January 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Verification ID: PSR-2025-018</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">CM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Carol M.</h3>
                <span className="text-sm text-gray-500">• Morris, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Medical malpractice lawsuit documents served professionally to multiple medical 
                facilities. Joseph&apos;s team handled complex serving requirements perfectly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Medical Malpractice Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-019</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">JK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Jennifer K.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
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
                <div>Service: Family Law Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-020</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">RM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Robert M.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
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
                <div>Service: Commercial Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Verification ID: PSR-2025-021</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold">SL</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Sarah L.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Impressed by their local knowledge of Jenks neighborhoods. They served papers during the antique festival weekend and handled the Main Street crowds like pros. Highly recommend!&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Civil Document Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-022</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-semibold">MD</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Michael D.</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Needed papers served at The Reserve at Stonebrooke. They handled the gated community protocols perfectly and completed service efficiently. Professional and courteous throughout.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Residential Complex Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-023</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">RM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Rebecca Martinez</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Divorce documents needed serving at Gathering Place park area. They handled the sensitive location with complete discretion and professionalism. Highly recommend their services.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Divorce Document Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-024</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-semibold">JS</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">James Sullivan</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Construction lien papers served to general contractor downtown. Joseph&apos;s team knew exactly how to navigate the busy construction site safely and efficiently.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Construction Lien Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Verification ID: PSR-2025-025</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                <span className="text-lime-600 font-semibold">AL</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Angela Lewis</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Workers compensation claim papers served to insurance adjuster. Professional service with detailed documentation that helped strengthen our case significantly.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Workers Compensation Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-026</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                <span className="text-sky-600 font-semibold">DH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Daniel Hughes</h3>
                <span className="text-sm text-gray-500">• Bixby, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Bankruptcy papers served to creditors across multiple locations. Just Legal Solutions coordinated everything perfectly and provided excellent proof of service documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Bankruptcy Document Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-027</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-rose-600 font-semibold">KT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Katherine Torres</h3>
                <span className="text-sm text-gray-500">• Sand Springs, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Employment discrimination lawsuit papers served to corporate headquarters. Joseph&apos;s team handled the high-profile serving with complete professionalism and discretion.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Employment Law Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Phone follow-up survey</div>
                <div>Verification ID: PSR-2025-028</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">MW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Marcus Williams</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Product liability lawsuit papers served to manufacturer. Excellent coordination with our legal team and timely delivery of all required documentation.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Product Liability Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-029</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <span className="text-violet-600 font-semibold">NK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Nicole Kim</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Real estate dispute papers served to property management company. Joseph&apos;s knowledge of complex property laws and attention to detail was impressive.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Real Estate Dispute Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-030</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold">BB</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Brian Baker</h3>
                <span className="text-sm text-gray-500">• Owasso, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Insurance fraud investigation papers served to multiple parties. Professional handling of sensitive legal matter with excellent documentation and follow-up.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Insurance Fraud Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Verification ID: PSR-2025-031</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">SC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Sarah Cooper</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Environmental lawsuit papers served to industrial facility. Joseph&apos;s team navigated security protocols professionally and ensured proper service completion.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Environmental Law Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-032</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-semibold">RG</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Robert Garcia</h3>
                <span className="text-sm text-gray-500">• Glenpool, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Class action lawsuit papers served to corporate defendants. Excellent coordination across multiple locations and outstanding attention to legal requirements.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Class Action Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-033</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">LD</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Lisa Davis</h3>
                <span className="text-sm text-gray-500">• Sapulpa, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Intellectual property lawsuit papers served to tech company. Joseph&apos;s team understood the urgency and complexity, delivering exceptional service under tight deadlines.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Intellectual Property Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Phone follow-up survey</div>
                <div>Verification ID: PSR-2025-034</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">AJ</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Anthony Johnson</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Securities fraud lawsuit papers served to investment firm. Professional approach to high-stakes legal serving with impeccable documentation and timing.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Securities Fraud Process Serving</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-035</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">MM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Michelle Moore</h3>
                <span className="text-sm text-gray-500">• Bixby, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Toxic tort lawsuit papers served to chemical company. Joseph&apos;s team handled the complex industrial serving requirements with expertise and professionalism.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Toxic Tort Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Verification ID: PSR-2025-036</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">CT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Christopher Taylor</h3>
                <span className="text-sm text-gray-500">• Jenks, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;RICO lawsuit papers served to organized crime defendants. Exceptional handling of high-risk serving situation with complete safety and professionalism.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: RICO Investigation Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Verification ID: PSR-2025-037</div>
              </div>
            </div>
          </div>
        </div>

        {/* Law Firm & Pricing Reviews */}
        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-blue-500">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">RT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney Rebecca Torres</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-blue-600">• Law Firm Partner</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Our law firm uses Just Legal Solutions exclusively for all process serving needs in Oklahoma. Their 30% discount and flat-rate $21 pricing makes budgeting predictable. Professional, reliable, and always on time.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Law Firm Partnership Process Serving</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Professional Verification: Oklahoma Bar Member</div>
                <div>Verification ID: PSR-2025-038</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-green-500">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">MT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Marcus Thompson</h3>
                <span className="text-sm text-gray-500">• Oklahoma City, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Called at 8am needing urgent service before noon. Joseph personally handled it and had proof of service to me by 11:30am. The $52 rush service rate is extremely fair. Will use again!&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Rush Process Serving (24-48 Hour)</div>
                <div>Date: September 2025</div>
                <div>Collection Method: Post-service phone follow-up</div>
                <div>Verification ID: PSR-2025-039</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-purple-500">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">JL</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Property Manager Janet Lewis</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;As a property manager, I deal with evictions regularly. Their $25 skip tracing found a tenant who skipped out, and their $21 standard service is unbeatable. No mileage fees anywhere in Oklahoma!&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Skip Tracing + Eviction Notice Service</div>
                <div>Date: October 2025</div>
                <div>Collection Method: Phone consultation review</div>
                <div>Business Verification: Verified Property Management</div>
                <div>Verification ID: PSR-2025-040</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-orange-500">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">DK</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Corporate Attorney Daniel Kim</h3>
                <span className="text-sm text-gray-500">• Tulsa, OK</span>
                <span className="text-sm text-blue-600">• Law Firm Partner</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Needed emergency service for a time-sensitive filing. Called (539) 367-6832 and Joseph answered immediately. Documents served within 2 hours. The $105 for emergency same-day service saved our case.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Emergency Same-Day Process Serving</div>
                <div>Date: November 2025</div>
                <div>Collection Method: Phone follow-up feedback</div>
                <div>Professional Verification: Oklahoma Bar Member</div>
                <div>Verification ID: PSR-2025-041</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-teal-500">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">SW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Paralegal Susan Wright</h3>
                <span className="text-sm text-gray-500">• Norman, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Their $18 court filing assistance is a lifesaver for our firm. They understand all 77 Oklahoma county court requirements. Highly recommend for any law office dealing with complex filings.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Court Filing Assistance + E-Filing</div>
                <div>Date: December 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Professional Verification: Certified Paralegal</div>
                <div>Verification ID: PSR-2025-042</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-indigo-500">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">WC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Attorney William Chen</h3>
                <span className="text-sm text-gray-500">• Norman, OK</span>
                <span className="text-sm text-blue-600">• Law Firm Partner</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;What sets Just Legal Solutions apart is their TRUE flat-rate pricing - $21 anywhere in Oklahoma with no hidden mileage fees. Other servers quoted me $80+ for rural counties. Joseph drove 2 hours for the same $21 rate.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Statewide Rural Process Serving</div>
                <div>Date: December 2025</div>
                <div>Collection Method: Phone follow-up review</div>
                <div>Professional Verification: Oklahoma Bar Member</div>
                <div>Verification ID: PSR-2025-043</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm border-l-4 border-l-pink-500">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-semibold">MS</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Family Law Attorney Michelle Santos</h3>
                <span className="text-sm text-gray-500">• Broken Arrow, OK</span>
                <span className="text-sm text-blue-600">• Law Firm Partner</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Saturday emergency for a custody case. Found them through Google, called immediately, and Joseph served papers that same day. Their weekend availability is crucial for family law cases.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Weekend Emergency Custody Papers</div>
                <div>Date: December 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Professional Verification: Oklahoma Bar Member</div>
                <div>Verification ID: PSR-2025-044</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">RJ</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Robert J.</h3>
                <span className="text-sm text-gray-500">• Sand Springs, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Needed emergency service for a civil matter. Joseph answered on the first ring and had papers served within 4 hours. Exceptional professionalism.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Emergency Civil Process</div>
                <div>Date: December 2025</div>
                <div>Collection Method: Post-service phone follow-up</div>
                <div>Verification ID: PSR-2025-045</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">AC</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Amanda C.</h3>
                <span className="text-sm text-gray-500">• Claremore, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Third time using Just Legal Solutions. Always reliable, always professional. Their flat-rate pricing is transparent and fair.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Standard Process Serving</div>
                <div>Date: December 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-046</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">DM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Daniel M.</h3>
                <span className="text-sm text-gray-500">• Bartlesville, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Weekend service when no one else was available. Joseph drove 45 minutes to complete our serve. Above and beyond service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Weekend Rural Service</div>
                <div>Date: November 2025</div>
                <div>Collection Method: Post-service phone follow-up</div>
                <div>Verification ID: PSR-2025-047</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">KT</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Karen T.</h3>
                <span className="text-sm text-gray-500">• Muskogee, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;GPS tracking gave me peace of mind. I could see exactly when service was completed. Modern technology combined with personal service.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: GPS-Tracked Delivery</div>
                <div>Date: November 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-048</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-semibold">BH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Brian H.</h3>
                <span className="text-sm text-gray-500">• Stillwater, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Difficult serve completed on the first attempt. The defendant had been evading service for weeks with other companies. Joseph got it done.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Evasive Defendant Service</div>
                <div>Date: October 2025</div>
                <div>Collection Method: Post-service phone follow-up</div>
                <div>Verification ID: PSR-2025-049</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">LP</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Laura P.</h3>
                <span className="text-sm text-gray-500">• Glenpool, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Fair pricing and no hidden fees. Other companies quoted me double. Just Legal Solutions was honest and upfront about costs.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Standard Process Serving</div>
                <div>Date: October 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-050</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-semibold">MW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Mark W.</h3>
                <span className="text-sm text-gray-500">• Coweta, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Professional affidavit completed same day. Court accepted it without any issues. Detailed documentation made my attorney happy.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Court Document Service</div>
                <div>Date: September 2025</div>
                <div>Collection Method: Post-service phone follow-up</div>
                <div>Verification ID: PSR-2025-051</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">SG</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Sandra G.</h3>
                <span className="text-sm text-gray-500">• Catoosa, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Skip tracing service found our defendant within 24 hours. Other companies had given up. Just Legal Solutions went the extra mile.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Skip Tracing & Service</div>
                <div>Date: September 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-052</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-semibold">TL</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Timothy L.</h3>
                <span className="text-sm text-gray-500">• Pryor, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Holiday service when I thought it was impossible. Joseph worked Christmas week to help with my urgent legal matter. Incredible dedication.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Holiday Emergency Service</div>
                <div>Date: December 2025</div>
                <div>Collection Method: Post-service phone follow-up</div>
                <div>Verification ID: PSR-2025-053</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-rose-600 font-semibold">JB</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Jennifer B.</h3>
                <span className="text-sm text-gray-500">• Wagoner, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Multiple documents served to multiple locations in one day. Coordination was flawless. Saved me time and money.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Multi-Location Service</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-054</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">CH</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Christopher H.</h3>
                <span className="text-sm text-gray-500">• Collinsville, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Quick response to my inquiry, clear pricing, fast service. Everything a busy professional needs. Will recommend to colleagues.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Business Document Service</div>
                <div>Date: August 2025</div>
                <div>Collection Method: Post-service phone follow-up</div>
                <div>Verification ID: PSR-2025-055</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <span className="text-violet-600 font-semibold">NS</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Nancy S.</h3>
                <span className="text-sm text-gray-500">• Skiatook, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Rural area service with no extra charges. Other companies wanted to charge mileage fees. Joseph included it in the flat rate.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Rural Process Serving</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-056</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold">GR</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Gary R.</h3>
                <span className="text-sm text-gray-500">• Okmulgee, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Subpoena service completed professionally. Witness was served at their workplace without any issues. Discreet and efficient.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Subpoena Service</div>
                <div>Date: July 2025</div>
                <div>Collection Method: Post-service phone follow-up</div>
                <div>Verification ID: PSR-2025-057</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                <span className="text-lime-600 font-semibold">PM</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Patricia M.</h3>
                <span className="text-sm text-gray-500">• Miami, OK</span>
                <span className="text-sm text-green-600">• Verified Client</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                &ldquo;Traveled far to complete service in Ottawa County. No complaints about distance, just professional service at a fair price.&rdquo;
              </p>
              <div className="text-sm text-gray-500">
                <div>Service: Out-of-County Service</div>
                <div>Date: June 2025</div>
                <div>Collection Method: Phone consultation feedback</div>
                <div>Verification ID: PSR-2025-058</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Review Verification Standards</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Collection Requirements:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Service must be completed</li>
              <li>• Client verbal consent obtained</li>
              <li>• Review recorded within 48 hours</li>
              <li>• Contact information verified</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Documentation Process:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Unique verification ID assigned</li>
              <li>• Service details cross-referenced</li>
              <li>• Date and time stamps recorded</li>
              <li>• Internal audit trail maintained</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
