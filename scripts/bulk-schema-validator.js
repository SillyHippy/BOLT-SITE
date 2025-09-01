#!/usr/bin/env node

/**
 * Bulk Schema Validator
 * Tests all pages for Google Rich Results compliance
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('🔍 BULK SCHEMA VALIDATOR');
console.log('========================');

// Read sitemap to get all URLs
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
let urls = [];

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const urlMatches = sitemap.match(/<loc>(.*?)<\/loc>/g);
  
  if (urlMatches) {
    urls = urlMatches.map(match => 
      match.replace('<loc>', '').replace('</loc>', '')
    );
  }
}

console.log(`📋 Found ${urls.length} URLs to validate`);

// Function to test single URL with Google Rich Results Test
async function testRichResults(url) {
  return new Promise((resolve) => {
    const apiUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`;
    
    // Simple check - in practice you'd use Google's API
    console.log(`🧪 Testing: ${url}`);
    
    // Simulate API response (replace with actual Google API call)
    setTimeout(() => {
      resolve({
        url: url,
        status: 'needs_check',
        issues: ['Manual validation required']
      });
    }, 100);
  });
}

// Function to validate local schema files
function validateLocalSchemas() {
  const schemaErrors = [];
  
  // Check component files for common schema issues
  const componentDir = path.join(process.cwd(), 'components');
  const uiDir = path.join(process.cwd(), 'components', 'ui');
  
  const checkDirs = [componentDir, uiDir];
  
  checkDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter(file => 
        file.endsWith('.tsx') || file.endsWith('.ts')
      );
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for common schema issues
        const issues = [];
        
        // Missing address fields
        if (content.includes('@type": "LocalBusiness') && !content.includes('streetAddress')) {
          issues.push('LocalBusiness missing streetAddress');
        }
        
        if (content.includes('@type": "ProfessionalService') && !content.includes('address')) {
          issues.push('ProfessionalService missing address');
        }
        
        // Missing required FAQ fields
        if (content.includes('@type": "Question') && !content.includes('answerCount')) {
          issues.push('Question missing answerCount');
        }
        
        // Missing URLs in answers
        if (content.includes('@type": "Answer') && !content.includes('"url"')) {
          issues.push('Answer missing url field');
        }
        
        if (issues.length > 0) {
          schemaErrors.push({
            file: path.relative(process.cwd(), filePath),
            issues: issues
          });
        }
      });
    }
  });
  
  return schemaErrors;
}

// Generate validation report
async function generateValidationReport() {
  console.log('\n📊 SCHEMA VALIDATION REPORT');
  console.log('===========================');
  
  // Local schema validation
  const localErrors = validateLocalSchemas();
  
  if (localErrors.length > 0) {
    console.log('\n🚨 LOCAL SCHEMA ISSUES:');
    localErrors.forEach(error => {
      console.log(`\n📄 ${error.file}:`);
      error.issues.forEach(issue => {
        console.log(`   ⚠️  ${issue}`);
      });
    });
  } else {
    console.log('\n✅ No local schema issues detected');
  }
  
  // URLs that need manual Google testing
  console.log('\n🌐 URLS FOR GOOGLE RICH RESULTS TESTING:');
  console.log('Copy these URLs to Google Rich Results Test Tool:');
  console.log('https://search.google.com/test/rich-results\n');
  
  // Group URLs by priority
  const priorityUrls = urls.filter(url => 
    url.includes('oklahoma-process-server') || 
    url === 'https://justlegalsolutions.org/' ||
    url.includes('tulsa-process-server')
  );
  
  const serviceUrls = urls.filter(url => 
    url.includes('service-areas') || 
    url.includes('counties')
  );
  
  console.log('🎯 HIGH PRIORITY PAGES (Test these first):');
  priorityUrls.slice(0, 10).forEach(url => {
    console.log(`   ${url}`);
  });
  
  console.log('\n📍 SERVICE AREA PAGES:');
  serviceUrls.slice(0, 10).forEach(url => {
    console.log(`   ${url}`);
  });
  
  console.log('\n🔧 AUTOMATED TESTING OPTIONS:');
  console.log('1. Google Search Console → Enhancement → Structured Data');
  console.log('2. Screaming Frog SEO Spider (Free for 500 URLs)');
  console.log('3. Sitebulb (Paid but comprehensive)');
  
  // Save report to file
  const report = {
    timestamp: new Date().toISOString(),
    totalUrls: urls.length,
    localSchemaErrors: localErrors,
    priorityUrls: priorityUrls,
    allUrls: urls
  };
  
  fs.writeFileSync('schema-validation-report.json', JSON.stringify(report, null, 2));
  console.log('\n💾 Report saved to: schema-validation-report.json');
  
  return report;
}

// Run the validation
generateValidationReport().catch(console.error);
