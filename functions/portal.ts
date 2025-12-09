// Cloudflare Pages Function to proxy portal requests
// This keeps justlegalsolutions.org in the URL bar instead of showing script.google.com
// Note: This approach has limitations - Google Apps Script loads resources dynamically
// that can't be easily proxied. Consider using an iframe or direct redirect instead.

export async function onRequest(context: { request: Request }) {
  const url = new URL(context.request.url);
  const caseId = url.searchParams.get('case');
  const key = url.searchParams.get('key');
  
  // If no valid credentials, show error
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
  
  // Redirect to Google Apps Script
  // Using redirect instead of proxy because Google Apps Script pages load resources
  // dynamically that can't be properly proxied without breaking functionality
  const scriptUrl = `https://script.google.com/macros/s/AKfycbwkYzKCdBUhcg0VsZ8KlsFjlXFpHA09I5q2cRL5F9KmJYdUd17XOaqXCrnW3WJDjC-e/exec?action=portal&caseId=${encodeURIComponent(caseId)}&key=${encodeURIComponent(key)}`;
  
  return Response.redirect(scriptUrl, 302);
}
