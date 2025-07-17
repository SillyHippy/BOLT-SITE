import { MetadataRoute } from 'next'
// We are removing the import that was causing the error.
import fs from 'fs'

export default function sitemap(): MetadataRoute.Sitemap {
  // We are hardcoding your site URL directly here.
  const siteUrl = 'https://justlegalsolutions.org'

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

  // Returns ONLY the static pages
  return staticRoutes
}
