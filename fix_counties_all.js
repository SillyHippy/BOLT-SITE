const fs = require('fs');
const execSync = require('child_process').execSync;

const cmd = 'dir app\\counties\\page.tsx /s /b';
const files = execSync(cmd).toString().split('\r\n').filter(Boolean);

let updated = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // Match any pageType="something"`n        image=
  // We use regex but correctly in node by escaping backtick
  const regex = /pageType="([^"]+)"`n        image=/g;
  if (regex.test(content)) {
    content = content.replace(regex, 'pageType="$1"\n        image=');
    fs.writeFileSync(file, content);
    updated++;
  }
}
console.log('Updated ' + updated + ' files');
