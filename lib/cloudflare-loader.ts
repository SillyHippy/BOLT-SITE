export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = [`width=${width}`, `format=auto`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');

  if (src.startsWith('/')) {
    return `/cdn-cgi/image/${paramsString}${src}`;
  }

  // If it's a full URL that's hosted on Cloudflare pages it can also be transformed
  // by prepending /cdn-cgi/image/... to the path, but let's stick to local images for safety.
  return src;
}
