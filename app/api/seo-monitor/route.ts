import { NextResponse } from 'next/server';

// Removed force-dynamic for static export compatibility

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const testLocal = searchParams.get('local') === 'true';
  
  // Simple status check for main pages
  const statusChecks = [
    { url: '/', name: 'Homepage', critical: true },
    { url: '/services', name: 'Services Page', critical: true },
    { url: '/pricing', name: 'Pricing Page', critical: true },
    { url: '/tulsa-process-server', name: 'Main Process Server Page', critical: true },
    { url: '/process-server-tulsa', name: 'Alt Process Server Page', critical: true },
    { url: '/seo/process-server-broken-arrow', name: 'Broken Arrow', critical: true },
    { url: '/seo/process-server-jenks', name: 'Jenks', critical: true },
    { url: '/seo/process-server-bixby', name: 'Bixby', critical: true }
  ];

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
      
      results.push({
        url: check.url,
        name: check.name,
        status: status,
        critical: check.critical,
        ok: status === 200
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
  const healthScore = Math.round((workingPages / totalPages) * 100);
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPagesChecked: totalPages,
      workingPages: workingPages,
      failedPages: totalPages - workingPages,
      healthScore: healthScore,
      status: healthScore >= 95 ? 'EXCELLENT' : healthScore >= 90 ? 'GOOD' : 'WARNING'
    },
    errors: errors,
    pageResults: results
  };
  
  return NextResponse.json(report, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json'
    }
  });
}
