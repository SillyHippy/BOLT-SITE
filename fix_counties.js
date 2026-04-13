const fs = require('fs');
const execSync = require('child_process').execSync;

const cmd = 'dir app\\counties\\page.tsx /s /b';
const files = execSync(cmd).toString().split('\r\n').filter(Boolean);

let updated = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // Look for the exact literal backtick and n
  const searchStr = 'pageType=\"location\"`n        image=';
  const replaceStr = 'pageType=\"location\"\n        image=';
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(file, content);
    updated++;
  }
}
console.log('Updated ' + updated + ' files');
