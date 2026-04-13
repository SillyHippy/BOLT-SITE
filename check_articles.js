const fs = require('fs');
const execSync = require('child_process').execSync;
const path = require('path');

let files = execSync('dir app\\blog /s /b').toString().split('\r\n').filter(f => f.endsWith('page.tsx'));
let missing = [];
for (let f of files) {
  let content = fs.readFileSync(f, 'utf8');
  if (!content.includes('pageType="article"')) {
    missing.push(f.replace(process.cwd(), ''));
  }
}
console.log('Missing article pageType in:', missing.length, 'files');
if(missing.length > 0) console.log(missing.join('\n'));
