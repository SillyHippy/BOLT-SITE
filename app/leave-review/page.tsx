'use client';

import { useEffect } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export default function LeaveReviewPage() {
  useEffect(() => {
    // Add robots meta tag to prevent indexing and crawling
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow, noarchive, nosnippet';
    document.head.appendChild(metaRobots);

    // Fetch visitor info and send to Google Apps Script
    const trackVisitor = async () => {
      try {
        // Fetch IP and location data
        const geoResponse = await fetch('https://ipapi.co/json/');
        const geoData = await geoResponse.json();

        // Prepare tracking data
        const trackingData = {
          ip: geoData.ip || 'unknown',
          country: geoData.country_name || 'unknown',
          city: geoData.city || 'unknown',
          ua: navigator.userAgent,
          ref: document.referrer || 'direct'
        };

        // Send to Google Apps Script
        await fetch('https://script.google.com/macros/s/AKfycbywzt5luyvH22kWu0F8k8boLSG8-HQ0EH7MnEwmGt0zQP98MJ0-ij90BLIzslFKOQmT/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(trackingData)
        });
      } catch (error) {
        console.error('Tracking error:', error);
      }
    };

    trackVisitor();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Share Your Experience
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">
            Your feedback helps us serve you better
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Introduction */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 sm:w-10 sm:h-10 fill-yellow-400 text-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            We Value Your Feedback
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Thank you for choosing Just Legal Solutions. Your review helps others in our community 
            make informed decisions and helps us continue to improve our services.
          </p>
        </div>

        {/* Review Platform Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8">
          {/* Google Review Card */}
          <a
            href="https://g.page/r/Cb81H1j9UTYxEBM/review"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Google</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Business Review</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                Share your experience with our process serving services on Google to help others in the community.
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs sm:text-sm font-medium text-blue-600 group-hover:text-blue-700">
                  Leave a Google Review
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>

          {/* Yelp Review Card */}
          <a
            href="https://www.yelp.com/biz/just-legal-solutions-glenpool"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 13.5l-1.9-.6-.6 1.9c-.4 1.2-1.9 1.6-2.9.9l-1.1-.8-1.1.8c-1 .7-2.5.3-2.9-.9l-.6-1.9-1.9-.6c-1.2-.4-1.6-1.9-.9-2.9l.8-1.1-.8-1.1c-.7-1-.3-2.5.9-2.9l1.9-.6.6-1.9c.4-1.2 1.9-1.6 2.9-.9l1.1.8 1.1-.8c1-.7 2.5-.3 2.9.9l.6 1.9 1.9.6c1.2.4 1.6 1.9.9 2.9l-.8 1.1.8 1.1c.7 1 .3 2.5-.9 2.9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Yelp</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Business Review</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                Write a review on Yelp to let others know about your experience with Just Legal Solutions.
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs sm:text-sm font-medium text-red-600 group-hover:text-red-700">
                  Leave a Yelp Review
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Why Your Review Matters
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-gray-600">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Helps other clients make informed decisions about process serving services</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Provides valuable feedback to improve our services</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Supports our local business and helps us grow</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8 sm:mt-12 text-sm text-gray-500">
          <p>Thank you for your business and taking the time to share your experience!</p>
          <p className="mt-2">
            <strong className="text-gray-700">Just Legal Solutions</strong> | Process Serving Excellence in Oklahoma
          </p>
        </div>
      </main>
    </div>
    <Footer />
    </>
  );
}
