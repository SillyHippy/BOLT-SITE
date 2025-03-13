"use client";

import React from 'react';
import Image from 'next/image';

export default function CardPage() {
  const basePath = process.env.NODE_ENV === 'production' ? '/BOLT-SITE' : '';
  
  return (
    <div className="min-h-screen bg-[#0B132B] flex items-center justify-center p-4">
      <div className="bg-[#1C2541] rounded-[15px] p-6 max-w-[420px] w-full shadow-lg">
        {/* Top Profile Section */}
        <div className="flex items-center mb-4">
          <div className="w-[90px] h-[90px] bg-white rounded-full flex-shrink-0 mr-4 flex items-center justify-center overflow-hidden">
            <img
              src="https://github.com/SillyHippy/website1/raw/main/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/favicon1.svg"
              alt="Just Legal Solutions Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-[26px] font-bold text-white -mb-1">Just Legal Solutions</h2>
          </div>
        </div>

        {/* Info Section */}
        <div className="pl-1 mb-3">
          <h1 className="text-[28px] text-white mb-3">Joseph Iannazzi</h1>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1.5 bg-[#374151] text-[#E5E7EB] rounded-full text-sm">
              Process Server
            </span>
            <span className="inline-block px-3 py-1.5 bg-[#374151] text-[#E5E7EB] rounded-full text-sm">
              Legal Support
            </span>
          </div>
        </div>

        {/* Button Section */}
        <div className="space-y-3 mt-6">
          {/* Contact Details Button */}
          <a href={`${basePath}/contact-details.vcf`} download className="relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors group">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[65px] h-[65px]">
              <img
                src="https://github.com/SillyHippy/website1/raw/main/landingpage%20icons/contact.svg"
                alt="Contact"
                className="w-full h-full"
              />
            </div>
            <span className="pl-12 text-base">Download my contact details</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>

          {/* Email Button */}
          <a href="mailto:Info@JustLegalSolutions.org" className="relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors group">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[60px] h-[60px]">
              <img
                src="https://github.com/SillyHippy/website1/raw/main/landingpage%20icons/mail.svg"
                alt="Email"
                className="w-full h-full"
              />
            </div>
            <span className="pl-12 text-base">Email</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>

          {/* Phone Button */}
          <a href="tel:+15393676832" className="relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors group">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[56px] h-[66px]">
              <img
                src="https://github.com/SillyHippy/website1/raw/main/landingpage%20icons/phone.svg"
                alt="Phone"
                className="w-full h-full"
              />
            </div>
            <span className="pl-12 text-base">Call</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>

          {/* Calendar Button */}
          <a href={`${basePath}/card/calendar`} className="relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors group">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[62px] h-[62px]">
              <img
                src="https://github.com/SillyHippy/website1/raw/main/landingpage%20icons/calendar-reminder-icon.svg"
                alt="Calendar"
                className="w-full h-full"
              />
            </div>
            <span className="pl-12 text-base">Add a Reminder</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>

          {/* Website Button */}
          <a href="https://justlegalsolutions.org" className="relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors group">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[65px] h-[65px]">
              <img
                src="https://github.com/SillyHippy/website1/raw/main/landingpage%20icons/website1.svg"
                alt="Website"
                className="w-full h-full"
              />
            </div>
            <span className="pl-12 text-base">Website</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}