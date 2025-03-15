import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/security-policy'],
    },
    sitemap: 'https://justlegalsolutions.org/sitemap.xml',
  };
}