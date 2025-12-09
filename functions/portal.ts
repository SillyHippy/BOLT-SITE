// Cloudflare Pages Function to proxy portal requests
// This keeps justlegalsolutions.org in the URL bar instead of showing script.google.com

export async function onRequest(context: { request: Request }) {
  const { searchParams } = new URL(context.request.url);
  const caseId = searchParams.get('case');
  const key = searchParams.get('key');
  
  if (!caseId || !key) {
    return new Response(
      `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invalid Portal Link</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem; margin: 0; }
    .container { background: white; border-radius: 12px; padding: 2rem; max-width: 28rem; text-align: center; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
    h1 { color: #1f2937; font-size: 1.5rem; font-weight: bold; margin: 0 0 1rem; }
    p { color: #6b7280; margin: 0 0 1.5rem; }
    a { display: inline-block; background: #2563eb; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; text-decoration: none; transition: background 0.2s; }
    a:hover { background: #1d4ed8; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Invalid Portal Link</h1>
    <p>Please use the link provided in your confirmation email to access your case portal.</p>
    <a href="mailto:info@justlegalsolutions.org">Contact Support</a>
  </div>
</body>
</html>`,
      { 
        status: 400,
        headers: { 'Content-Type': 'text/html' }
      }
    );
  }
  
  // Proxy to Google Apps Script
  const scriptUrl = `https://script.google.com/macros/s/AKfycbwkYzKCdBUhcg0VsZ8KlsFjlXFpHA09I5q2cRL5F9KmJYdUd17XOaqXCrnW3WJDjC-e/exec?action=portal&caseId=${encodeURIComponent(caseId)}&key=${encodeURIComponent(key)}`;
  
  try {
    const response = await fetch(scriptUrl, {
      method: 'GET',
      redirect: 'follow'
    });
    
    // Get the response as text to ensure proper handling
    const content = await response.text();
    
    // Create new headers with mobile-friendly settings
    const headers = new Headers();
    headers.set('Content-Type', 'text/html; charset=utf-8');
    headers.set('Cache-Control', 'no-cache');
    headers.set('X-Frame-Options', 'SAMEORIGIN');
    
    // Copy important headers from the original response
    const contentType = response.headers.get('content-type');
    if (contentType) {
      headers.set('Content-Type', contentType);
    }
    
    // Return the proxied response
    return new Response(content, {
      status: response.status,
      statusText: response.statusText,
      headers: headers
    });
  } catch (error) {
    return new Response(
      `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal Error</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem; margin: 0; }
    .container { background: white; border-radius: 12px; padding: 2rem; max-width: 28rem; text-align: center; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
    h1 { color: #1f2937; font-size: 1.5rem; font-weight: bold; margin: 0 0 1rem; }
    p { color: #6b7280; margin: 0 0 1.5rem; }
    a { display: inline-block; background: #2563eb; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; text-decoration: none; transition: background 0.2s; }
    a:hover { background: #1d4ed8; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Error Loading Portal</h1>
    <p>There was an error connecting to your case portal. Please try again or contact support.</p>
    <a href="mailto:info@justlegalsolutions.org">Contact Support</a>
  </div>
</body>
</html>`,
      { 
        status: 500,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      }
    );
  }
}
