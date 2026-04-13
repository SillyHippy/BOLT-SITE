const fs = require('fs');
const execSync = require('child_process').execSync;
const path = require('path');

const cmd = 'dir app\\page.tsx /s /b';
const files = execSync(cmd).toString().split('\r\n').filter(Boolean);

let updated = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Ensure the file has a metadata export but lacks alternates
  if (content.includes('export const metadata') || content.includes('export const metadata: Metadata = {')) {
    if (!content.includes('alternates:')) {
      // Calculate canonical URL from file path
      // Extract the route path relative to app folder
      let relPath = file.split('\\app\\')[1].replace(/\\/g, '/').replace('/page.tsx', '').replace('page.tsx', '');
      
      // Handle (main) directory mapping: pages inside app/(main) are just /route
      relPath = relPath.replace(/^\(main\)\/?/, '');
      
      const canonicalUrl = relPath ? `https://justlegalsolutions.org/${relPath}` : 'https://justlegalsolutions.org';
      
      const alternatesBlock = `  alternates: {\n    canonical: '${canonicalUrl}',\n  },\n`;
      
      // Inject right after export const metadata... = {
      content = content.replace(/(export const metadata(: Metadata)? = \{\s*)/g, `$1${alternatesBlock}`);
      fs.writeFileSync(file, content);
      updated++;
    }
  }
}
console.log('Added canonical tags to ' + updated + ' pages');
