
#!/usr/bin/env node

/**
 * Missing Cities Automation Enhancement
 * Works with existing SEO automation workflows
 * Identifies and creates content for cities not yet covered
 */

const fs = require('fs');
const path = require('path');

console.log('🏙️ MISSING CITIES AUTOMATION ENHANCEMENT');
console.log('Working with existing workflows...\n');

// Cities that need enhanced coverage (based on audit)
const targetCities = [
  {
    name: 'Bartlesville',
    county: 'Washington County',
    zip: '74003',
    population: '36,000',
    features: [
      'Oil industry hub',
      'Historic downtown district',
      'Corporate headquarters location',
      'Educational institutions'
    ],
    keywords: [
      'Bartlesville process server',
      'Washington County legal service',
      'process serving Bartlesville OK',
      'legal document delivery Bartlesville'
    ]
  },
  {
    name: 'Muskogee',
    county: 'Muskogee County',
    zip: '74401',
    population: '39,000',
    features: [
      'County seat',
      'Federal court district',
      'Military presence',
      'Transportation hub'
    ],
    keywords: [
      'Muskogee process server',
      'Muskogee County legal service',
      'federal court process serving',
      'legal documents Muskogee OK'
    ]
  },
  {
    name: 'Tahlequah',
    county: 'Cherokee County',
    zip: '74464',
    population: '17,000',
    features: [
      'Cherokee Nation capital',
      'University town',
      'Historic significance',
      'Cultural center'
    ],
    keywords: [
      'Tahlequah process server',
      'Cherokee County legal service',
      'tribal court process serving',
      'legal documents Tahlequah'
    ]
  },
  {
    name: 'Pryor',
    county: 'Mayes County',
    zip: '74361',
    population: '9,500',
    features: [
      'Industrial center',
      'Manufacturing hub',
      'Rural community',
      'Agricultural area'
    ],
    keywords: [
      'Pryor process server',
      'Mayes County legal service',
      'process serving Pryor Creek',
      'rural process server Oklahoma'
    ]
  }
];

// Function to check if city page already exists
function checkExistingCoverage(cityName) {
  const possiblePaths = [
    `app/seo/process-server-${cityName.toLowerCase()}/page.tsx`,
    `app/seo/${cityName.toLowerCase()}-process-server/page.tsx`,
    `pages/seo/process-server-${cityName.toLowerCase()}.tsx`
  ];
  
  return possiblePaths.some(pathToCheck => fs.existsSync(pathToCheck));
}

// Generate missing city content
function generateCityContent(city) {
  return `import { Metadata } from 'next';
import MissingCityPage from '@/components/ui/missing-cities-enhancer';

export const metadata: Metadata = {
  title: '${city.name} Process Server | 24/7 Legal Document Delivery Oklahoma',
  description: 'Professional process server in ${city.name}, ${city.county}. Same-day legal document delivery, court filing, and statewide Oklahoma coverage. Call (539) 367-6832.',
  keywords: [${city.keywords.map(k => `'${k}'`).join(', ')}],
  robots: 'index, follow',
  openGraph: {
    title: '${city.name} Process Server | Just Legal Solutions',
    description: 'Professional process serving in ${city.name}, Oklahoma with 24/7 availability and statewide coverage.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/process-server-${city.name.toLowerCase()}'
  }
};

export default function ${city.name}ProcessServerPage() {
  return (
    <MissingCityPage
      city="${city.name}"
      county="${city.county}"
      zipCode="${city.zip}"
      population="${city.population}"
      keyFeatures={${JSON.stringify(city.features, null, 8)}}
      targetKeywords={${JSON.stringify(city.keywords, null, 8)}}
    />
  );
}`;
}

// Main automation function
function runMissingCitiesAutomation() {
  console.log('🔍 Analyzing existing coverage...\n');
  
  const missingCities = [];
  const existingCities = [];
  
  targetCities.forEach(city => {
    if (checkExistingCoverage(city.name)) {
      existingCities.push(city.name);
      console.log(`✅ ${city.name} - Already has coverage`);
    } else {
      missingCities.push(city);
      console.log(`❌ ${city.name} - Needs coverage`);
    }
  });
  
  console.log(`\n📊 Coverage Analysis:`);
  console.log(`   Existing: ${existingCities.length} cities`);
  console.log(`   Missing: ${missingCities.length} cities`);
  
  if (missingCities.length === 0) {
    console.log('\n🎉 All target cities already have coverage!');
    console.log('Consider expanding to additional markets or enhancing existing content.');
    return;
  }
  
  console.log(`\n🏗️ Creating content for ${missingCities.length} missing cities...\n`);
  
  missingCities.forEach(city => {
    const dirPath = \`app/seo/process-server-\${city.name.toLowerCase()}\`;
    const filePath = \`\${dirPath}/page.tsx\`;
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Generate and write content
    const content = generateCityContent(city);
    fs.writeFileSync(filePath, content);
    
    console.log(`✅ Created: ${filePath}`);
  });
  
  // Update sitemap to include new cities
  updateSitemapWithNewCities(missingCities);
  
  console.log(`\n🎯 Missing Cities Automation Complete!`);
  console.log(`📈 Created ${missingCities.length} new city pages`);
  console.log(`🔗 Updated sitemap with new URLs`);
  console.log(`🚀 Ready for deployment and indexing`);
}

// Update sitemap function
function updateSitemapWithNewCities(newCities) {
  const sitemapPath = 'public/sitemap.xml';
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('⚠️ Sitemap not found, skipping sitemap update');
    return;
  }
  
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Add new city URLs before the closing </urlset> tag
  const newUrls = newCities.map(city => \`
  <url>
    <loc>https://justlegalsolutions.org/seo/process-server-\${city.name.toLowerCase()}/</loc>
    <lastmod>\${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>\`).join('');
  
  sitemap = sitemap.replace('</urlset>', newUrls + '\n</urlset>');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log('✅ Sitemap updated with new city URLs');
}

// Export for use in other scripts
module.exports = { runMissingCitiesAutomation, targetCities };

// Run if called directly
if (require.main === module) {
  runMissingCitiesAutomation();
}
