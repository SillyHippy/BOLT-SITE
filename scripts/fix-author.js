const fs = require('fs');
const path = require('path');

const dirsToProcess = [
    'c:\\Users\\ianna\\OneDrive\\Desktop\\GitHub\\BOLT-SITE\\app\\blog',
    'c:\\Users\\ianna\\OneDrive\\Desktop\\GitHub\\BOLT-SITE\\content\\blog-queue\\app\\blog'
];

let fixedCount = 0;

for (const baseDir of dirsToProcess) {
    if (!fs.existsSync(baseDir)) continue;
    const slugs = fs.readdirSync(baseDir);
    for (const slug of slugs) {
        const filePath = path.join(baseDir, slug, 'page.tsx');
        if (!fs.existsSync(filePath)) continue;
        
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('authorName:')) {
            content = content.replace(/authorName:\s*'([^']+)',/g, "author: '$1',");
            content = content.replace(/authorUrl:\s*'[^']+',?/g, '');
            fs.writeFileSync(filePath, content);
            fixedCount++;
        }
    }
}

console.log(`Fixed UnifiedSchema types in ${fixedCount} files.`);
