import { MetadataRoute } from 'next'
import { allPages } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import fs from 'fs' // Import the Node.js File System module

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  // This part for your blog posts remains the same (it's already automatic)
  const blogRoutes = allPages
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  // --- NEW AUTOMATIC CODE ---
  // This code reads your 'app/(main)' directory to find all static pages
  const staticPageFiles = fs.readdirSync('./app/(main)', { withFileTypes: true })
  const staticRoutes = staticPageFiles
    .filter((file) => file.isDirectory()) // Find all folders
    .map((file) => ({
      url: `${siteUrl}/${file.name}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))

  // Manually add the homepage route ('/')
  staticRoutes.push({
    url: siteUrl,
    lastModified: new Date().toISOString().split('T')[0],
  })
  // --- END OF NEW CODE ---

  // Combine the automatically found static pages with your blog pages
  return [...staticRoutes, ...blogRoutes]
}
