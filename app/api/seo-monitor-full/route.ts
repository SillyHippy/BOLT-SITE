import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

function getSamplePages() {
  return [
    // Core business pages
    { url: '/', name: 'Homepage', critical: true, checkImages: true },
    { url: '/services', name: 'Services Page', critical: true, checkImages: true },
    { url: '/pricing', name: 'Pricing Page', critical: true, checkImages: false },
    { url: '/card/calendar', name: 'Calendar Booking', critical: true, checkImages: false },
    
    // Primary SEO pages
    { url: '/tulsa-process-server', name: 'Main Process Server Page', critical: true, checkImages: true },
    { url: '/process-server-tulsa', name: 'Alt Process Server Page', critical: true, checkImages: true },
    { url: '/courier-services-tulsa', name: 'Courier Services Page', critical: true, checkImages: true },
    
    // Major city pages with images
    { url: '/seo/process-server-broken-arrow', name: 'Broken Arrow', critical: true, checkImages: true },
    { url: '/seo/process-server-jenks', name: 'Jenks', critical: true, checkImages: true },
    { url: '/seo/process-server-bixby', name: 'Bixby', critical: true, checkImages: true },
    { url: '/seo/process-server-owasso', name: 'Owasso', critical: true, checkImages: true },
    { url: '/seo/process-server-sand-springs', name: 'Sand Springs', critical: true, checkImages: true },
    { url: '/seo/process-server-sapulpa', name: 'Sapulpa', critical: true, checkImages: true },
    
    // Service-specific pages
    { url: '/seo/same-day-process-serving-tulsa', name: 'Same Day Service', critical: true, checkImages: false },
    { url: '/seo/eviction-process-serving', name: 'Eviction Service', critical: true, checkImages: false },
    { url: '/seo/subpoena-service', name: 'Subpoena Service', critical: true, checkImages: false },
    
    // Industry pages with images
    { url: '/seo/process-server-lawyers', name: 'Lawyers Industry', critical: true, checkImages: true },
    { url: '/seo/debt-collection-process-server', name: 'Debt Collection', critical: true, checkImages: true },
    { url: '/seo/insurance-process-server', name: 'Insurance Companies', critical: true, checkImages: true },
    { url: '/seo/real-estate-process-server', name: 'Real Estate', critical: true, checkImages: true },
    { url: '/seo/medical-office-process-server', name: 'Medical Offices', critical: true, checkImages: true },
    { url: '/seo/government-contractor-process-server', name: 'Government Contractors', critical: true, checkImages: true },
    
    // Additional location pages (sample)
    { url: '/seo/process-server-glenpool', name: 'Glenpool', critical: false, checkImages: false },
    { url: '/seo/process-server-catoosa', name: 'Catoosa', critical: false, checkImages: false },
    { url: '/seo/process-server-collinsville', name: 'Collinsville', critical: false, checkImages: false },
    { url: '/seo/process-server-skiatook', name: 'Skiatook', critical: false, checkImages: false },
    
    // Educational pages
    { url: '/seo/process-serving-faq', name: 'FAQ Page', critical: false, checkImages: false },
    { url: '/seo/oklahoma-process-server-requirements', name: 'Requirements Page', critical: false, checkImages: false },
    { url: '/seo/what-is-a-process-server', name: 'What Is Page', critical: false, checkImages: false }
  ];
}

function getAllPages() {
  return [
    // Core business pages
    { url: '/', name: 'Homepage', critical: true, checkImages: true },
    { url: '/services', name: 'Services Page', critical: true, checkImages: true },
    { url: '/pricing', name: 'Pricing Page', critical: true, checkImages: false },
    { url: '/card/calendar', name: 'Calendar Booking', critical: true, checkImages: false },
    { url: '/tulsa-process-server', name: 'Main Process Server Page', critical: true, checkImages: true },
    { url: '/process-server-tulsa', name: 'Alt Process Server Page', critical: true, checkImages: true },
    { url: '/courier-services-tulsa', name: 'Courier Services Page', critical: true, checkImages: true },
    
    // ALL SEO Pages (53 total)
    { url: '/seo/courier-delivery-service', name: 'Courier Delivery Service', critical: false, checkImages: false },
    { url: '/seo/dashboard', name: 'Dashboard', critical: false, checkImages: false },
    { url: '/seo/data-entry-services-tulsa', name: 'Data Entry Services', critical: false, checkImages: false },
    { url: '/seo/debt-collection-process-server', name: 'Debt Collection', critical: true, checkImages: true },
    { url: '/seo/eviction-process-serving', name: 'Eviction Process Serving', critical: true, checkImages: false },
    { url: '/seo/executive-assistant-services', name: 'Executive Assistant Services', critical: false, checkImages: false },
    { url: '/seo/government-contractor-process-server', name: 'Government Contractors', critical: true, checkImages: true },
    { url: '/seo/insurance-process-server', name: 'Insurance Process Server', critical: true, checkImages: true },
    { url: '/seo/loan-company-process-server', name: 'Loan Company Process Server', critical: true, checkImages: true },
    { url: '/seo/medical-office-process-server', name: 'Medical Office Process Server', critical: true, checkImages: true },
    { url: '/seo/oklahoma-process-server-requirements', name: 'OK Process Server Requirements', critical: false, checkImages: false },
    { url: '/seo/process-server-beggs', name: 'Process Server Beggs', critical: false, checkImages: false },
    { url: '/seo/process-server-bixby', name: 'Process Server Bixby', critical: true, checkImages: true },
    { url: '/seo/process-server-bristow', name: 'Process Server Bristow', critical: false, checkImages: false },
    { url: '/seo/process-server-broken-arrow', name: 'Process Server Broken Arrow', critical: true, checkImages: true },
    { url: '/seo/process-server-catoosa', name: 'Process Server Catoosa', critical: false, checkImages: false },
    { url: '/seo/process-server-claremore', name: 'Process Server Claremore', critical: false, checkImages: false },
    { url: '/seo/process-server-collinsville', name: 'Process Server Collinsville', critical: false, checkImages: false },
    { url: '/seo/process-server-coweta', name: 'Process Server Coweta', critical: false, checkImages: false },
    { url: '/seo/process-server-drumright', name: 'Process Server Drumright', critical: false, checkImages: false },
    { url: '/seo/process-server-glenpool', name: 'Process Server Glenpool', critical: false, checkImages: false },
    { url: '/seo/process-server-haskell', name: 'Process Server Haskell', critical: false, checkImages: false },
    { url: '/seo/process-server-henryetta', name: 'Process Server Henryetta', critical: false, checkImages: false },
    { url: '/seo/process-server-inola', name: 'Process Server Inola', critical: false, checkImages: false },
    { url: '/seo/process-server-jenks', name: 'Process Server Jenks', critical: true, checkImages: true },
    { url: '/seo/process-server-kellyville', name: 'Process Server Kellyville', critical: false, checkImages: false },
    { url: '/seo/process-server-kiefer', name: 'Process Server Kiefer', critical: false, checkImages: false },
    { url: '/seo/process-server-lawyers', name: 'Process Server Lawyers', critical: true, checkImages: true },
    { url: '/seo/process-server-leonard', name: 'Process Server Leonard', critical: false, checkImages: false },
    { url: '/seo/process-server-lotsee', name: 'Process Server Lotsee', critical: false, checkImages: false },
    { url: '/seo/process-server-mannford', name: 'Process Server Mannford', critical: false, checkImages: false },
    { url: '/seo/process-server-morris', name: 'Process Server Morris', critical: false, checkImages: false },
    { url: '/seo/process-server-mounds', name: 'Process Server Mounds', critical: false, checkImages: false },
    { url: '/seo/process-server-oakhurst', name: 'Process Server Oakhurst', critical: false, checkImages: false },
    { url: '/seo/process-server-okay', name: 'Process Server Okay', critical: false, checkImages: false },
    { url: '/seo/process-server-okmulgee', name: 'Process Server Okmulgee', critical: false, checkImages: false },
    { url: '/seo/process-server-owasso', name: 'Process Server Owasso', critical: true, checkImages: true },
    { url: '/seo/process-server-porter', name: 'Process Server Porter', critical: false, checkImages: false },
    { url: '/seo/process-server-sand-springs', name: 'Process Server Sand Springs', critical: true, checkImages: true },
    { url: '/seo/process-server-sapulpa', name: 'Process Server Sapulpa', critical: true, checkImages: true },
    { url: '/seo/process-server-skiatook', name: 'Process Server Skiatook', critical: false, checkImages: false },
    { url: '/seo/process-server-sperry', name: 'Process Server Sperry', critical: false, checkImages: false },
    { url: '/seo/process-server-tulsa', name: 'Process Server Tulsa', critical: false, checkImages: false },
    { url: '/seo/process-server-turley', name: 'Process Server Turley', critical: false, checkImages: false },
    { url: '/seo/process-server-verdigris', name: 'Process Server Verdigris', critical: false, checkImages: false },
    { url: '/seo/process-server-wagoner', name: 'Process Server Wagoner', critical: false, checkImages: false },
    { url: '/seo/process-serving-faq', name: 'Process Serving FAQ', critical: false, checkImages: false },
    { url: '/seo/property-management-process-server', name: 'Property Management Process Server', critical: true, checkImages: true },
    { url: '/seo/real-estate-process-server', name: 'Real Estate Process Server', critical: true, checkImages: true },
    { url: '/seo/same-day-process-serving-tulsa', name: 'Same Day Process Serving', critical: true, checkImages: false },
    { url: '/seo/small-business-courier', name: 'Small Business Courier', critical: false, checkImages: false },
    { url: '/seo/subpoena-service', name: 'Subpoena Service', critical: true, checkImages: false },
    { url: '/seo/what-is-a-process-server', name: 'What Is A Process Server', critical: false, checkImages: false }
  ];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const testLocal = searchParams.get('local') === 'true';
  const fullTest = searchParams.get('full') === 'true';
  
  const statusChecks = fullTest ? getAllPages() : getSamplePages();
  const baseUrl = testLocal ? 'http://localhost:3000' : 'https://www.justlegalsolutions.org';
  const results = [];
  const errors = [];
  
  // Check each page
  for (const check of statusChecks) {
    try {
      const response = await fetch(`${baseUrl}${check.url}`, {
        method: 'HEAD',
        cache: 'no-store',
        headers: {
          'User-Agent': 'SEO-Monitor/1.0'
        }
      });
      
      const status = response.status;
      const responseTime = Date.now(); // Simple timing
      
      // Check for images if specified
      let imageStatus = null;
      if (check.checkImages && status === 200) {
        try {
          // Get page content to extract image URLs
          const fullResponse = await fetch(`${baseUrl}${check.url}`, {
            cache: 'no-store',
            headers: { 'User-Agent': 'SEO-Monitor/1.0' }
          });
          const pageContent = await fullResponse.text();
          
          // Extract Unsplash image URLs
          const imageUrls = pageContent.match(/https:\/\/images\.unsplash\.com\/[^"'\s]*/g) || [];
          
          if (imageUrls.length > 0 && imageUrls[0]) {
            // Test first image URL
            const firstImageUrl = imageUrls[0];
            const imageResponse = await fetch(firstImageUrl, { method: 'HEAD' });
            imageStatus = {
              found: imageUrls.length,
              firstImageStatus: imageResponse.status,
              firstImageUrl: firstImageUrl,
              working: imageResponse.status === 200
            };
            
            if (imageResponse.status !== 200) {
              errors.push(`IMAGE ERROR: ${check.name} has broken image: ${firstImageUrl} (${imageResponse.status})`);
            }
          } else {
            imageStatus = { found: 0, working: false };
            if (check.checkImages) {
              errors.push(`MISSING IMAGE: ${check.name} expected to have images but none found`);
            }
          }
        } catch (imageError) {
          const errorMessage = imageError instanceof Error ? imageError.message : 'Unknown image error';
          imageStatus = { error: errorMessage, working: false };
          errors.push(`IMAGE CHECK FAILED: ${check.name} - ${errorMessage}`);
        }
      }
      
      results.push({
        url: check.url,
        name: check.name,
        status: status,
        critical: check.critical,
        ok: status === 200,
        responseTime: responseTime,
        imageStatus: imageStatus,
        headers: {
          contentType: response.headers.get('content-type'),
          cacheControl: response.headers.get('cache-control'),
          lastModified: response.headers.get('last-modified')
        }
      });
      
      if (status !== 200 && check.critical) {
        errors.push(`CRITICAL: ${check.name} (${check.url}) returned ${status}`);
      }
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      errors.push(`ERROR: ${check.name} (${check.url}) - ${errorMessage}`);
      results.push({
        url: check.url,
        name: check.name,
        status: 'ERROR',
        critical: check.critical,
        ok: false,
        error: errorMessage
      });
    }
  }
  
  // Generate summary
  const totalPages = results.length;
  const workingPages = results.filter(r => r.ok).length;
  const criticalErrors = errors.filter(e => e.includes('CRITICAL')).length;
  const imageErrors = errors.filter(e => e.includes('IMAGE ERROR')).length;
  const missingImages = errors.filter(e => e.includes('MISSING IMAGE')).length;
  const healthScore = Math.round((workingPages / totalPages) * 100);
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPagesChecked: totalPages,
      totalSitePages: fullTest ? '60+ (Complete Test)' : '60+ (Sample of 29)',
      monitoringMode: fullTest ? 'FULL COMPREHENSIVE TEST' : 'SAMPLE MONITORING',
      workingPages: workingPages,
      failedPages: totalPages - workingPages,
      criticalErrors: criticalErrors,
      imageErrors: imageErrors,
      missingImages: missingImages,
      healthScore: healthScore,
      imageHealthScore: Math.round(((results.filter(r => !r.imageStatus || r.imageStatus.working !== false).length) / totalPages) * 100),
      status: healthScore >= 95 ? 'EXCELLENT' : healthScore >= 90 ? 'GOOD' : healthScore >= 80 ? 'WARNING' : 'CRITICAL'
    },
    errors: errors,
    pageResults: results,
    recommendations: [
      'Monitor critical pages daily for downtime',
      'Check page load speeds weekly using Cloudflare Analytics',
      'Verify sitemap updates after new page creation',
      'Monitor Google Search Console for crawl errors',
      'Test mobile responsiveness on all pages',
      'Verify schema markup is rendering correctly',
      'Check image loading status for SEO performance',
      'Replace broken Unsplash URLs with working alternatives',
      'Ensure all major city/industry pages have professional images',
      'Monitor Cloudflare Pages deployment status',
      'Check Core Web Vitals improvement from CF CDN',
      'Verify SSL certificates are active on all pages',
      fullTest ? 'Full test complete - all 60+ pages verified' : 'Use ?full=true for comprehensive testing of all pages'
    ]
  };
  
  return NextResponse.json(report, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json'
    }
  });
}
