export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname.replace(/^\/ingest/, '');
  const search = url.search;

  const isStatic = pathname.startsWith('/static/');
  const origin = isStatic
    ? 'https://us-assets.i.posthog.com'
    : 'https://us.i.posthog.com';

  const headers = new Headers(request.headers);
  headers.set('host', new URL(origin).host);

  const response = await fetch(`${origin}${pathname}${search}`, {
    method: request.method,
    headers,
    body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body,
  });

  const responseHeaders = new Headers(response.headers);
  responseHeaders.set('Access-Control-Allow-Origin', '*');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
};
