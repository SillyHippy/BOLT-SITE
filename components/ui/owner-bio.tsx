import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, Award, Clock, Heart, BadgeCheck, ArrowRight } from 'lucide-react';

export default function OwnerBio() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Experience Trust Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-yellow-100 text-yellow-800 font-bold rounded-lg px-4 py-2 shadow-md text-lg border border-yellow-200 mb-4">
            🏆 50+ Years&apos; Combined Experience Serving Oklahoma&apos;s Legal Community
          </div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Our certified team and professional partners bring decades of combined experience in process serving,
            legal document delivery, and court filing services across all 77 Oklahoma counties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 text-blue-600 mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900">Meet Joseph</h2>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Founder &amp; CEO</h3>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-3 mb-3">
                <p className="text-blue-800 font-semibold text-sm">
                  🎯 Licensed Oklahoma process server, commissioned Notary Public &amp; Remote Online Notary,
                  <strong> NAPPS Member ID 14801</strong>, Snapdocs-verified, NSU alumnus — leading a team
                  and partner network with 50+ years&apos; combined experience across Oklahoma.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                After a debilitating injury led to a five-year ordeal with a slow workers&apos; compensation
                system, Joseph discovered firsthand how delays in the legal process can devastate lives. That
                personal experience became the driving force behind Just Legal Solutions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                &ldquo;What should have been a one-year recovery took five years of my life away,&rdquo; said Joseph.
                &ldquo;I learned that in the legal world, delays have profound human consequences. I started this
                company to ensure no one else has their life put on hold because the system is too slow, too
                opaque, or too indifferent.&rdquo;
              </p>
              <Link
                href="/about/joseph-iannazzi"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline"
              >
                View full founder profile &amp; credentials
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">24/7 Service</div>
                  <div className="text-xs text-gray-600">Always Available</div>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-yellow-600 mr-2" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Licensed &amp; Bonded</div>
                  <div className="text-xs text-gray-600">12 O.S. § 158.1</div>
                </div>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-red-600 mr-2" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Client-Focused</div>
                  <div className="text-xs text-gray-600">Personal Mission</div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Our Mission</h4>
              <p className="text-gray-700 italic text-sm">
                &ldquo;My experience taught me that you have to be your own biggest advocate. Now, my company can be
                that advocate for others. We handle the frustrating, time-consuming tasks so our clients can focus
                on what matters most: their cases and their lives.&rdquo;
              </p>
            </div>
          </div>

          {/* Professional Image + Credentials */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-md text-center">
              <div className="relative w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden ring-4 ring-blue-100">
                <Image
                  src="/images/1Headshot.webp"
                  alt="Joseph Iannazzi, Founder & CEO of Just Legal Solutions"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Joseph Iannazzi</h3>
              <p className="text-gray-600 mb-2 text-sm">Founder &amp; CEO</p>
              <div className="text-xs text-gray-500 mb-3">
                NSU Alumnus · Disability-Owned Business
              </div>
              <Link
                href="/about/joseph-iannazzi"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
              >
                Full credentials <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>

            {/* Credential Trust Row */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://napps.org/member-info.aspx?id=14801"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition block"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <BadgeCheck className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                    NAPPS Member
                  </span>
                </div>
                <div className="text-sm font-bold text-gray-900">ID 14801</div>
                <div className="text-xs text-gray-600">Verify on napps.org</div>
              </a>
              <a
                href="https://notary.snapdocs.com/notary-public/oklahoma/glenpool/joseph-iannazzi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition block"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <BadgeCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                    Snapdocs Verified
                  </span>
                </div>
                <div className="text-sm font-bold text-gray-900">ID · Commission · E&amp;O · BG</div>
                <div className="text-xs text-gray-600">Independent verification</div>
              </a>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <div className="text-xl font-bold text-blue-600">5+</div>
                <div className="text-xs text-gray-600">Years in Business</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <div className="text-xl font-bold text-green-700">24/7</div>
                <div className="text-xs text-gray-600">Availability</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <div className="text-xl font-bold text-yellow-700">5.0★</div>
                <div className="text-xs text-gray-600">Google Rating</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-md">
                <div className="text-xl font-bold text-purple-600">77</div>
                <div className="text-xs text-gray-600">Counties Served</div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-blue-600 text-white rounded-lg p-4 text-center">
              <h4 className="text-base font-bold mb-2">Ready to Experience the Difference?</h4>
              <p className="text-white mb-3 text-sm">Let our personal mission become your advantage</p>
              <a
                href="tel:5393676832"
                className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors inline-block text-sm"
              >
                Call (539) 367-6832
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
