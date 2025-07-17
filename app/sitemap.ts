
import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'
import fs from 'fs'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

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
    lastModified: new aDate().toISOString().split('T')[0],
  })

  // Returns ONLY the static pages, ignoring the blog for now.
  return staticRoutes
}
