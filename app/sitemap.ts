import { MetadataRoute } from 'next'
// FIX 1: Use a direct relative path instead of the '@/' alias.
import siteMetadata from '../data/siteMetadata'
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
    // FIX 2: Corrected the "new aDate()" typo to "new Date()"
    lastModified: new Date().toISOString().split('T')[0],
  })

  // Returns ONLY the static pages
  return staticRoutes
}
