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
        let changed = false;
        
        // Fix authors metadata
        if (content.includes("name: 'Joseph Iannazzi'")) {
            content = content.replace(/name: 'Joseph Iannazzi'/g, "name: 'Just Legal Solutions Team'");
            changed = true;
        }
        
        // Fix creator metadata
        if (content.includes("creator: 'Joseph Iannazzi'")) {
            content = content.replace(/creator: 'Joseph Iannazzi'/g, "creator: 'Just Legal Solutions Team'");
            changed = true;
        }
        
        // Fix article:author metadata
        if (content.includes("'article:author': 'Joseph Iannazzi'")) {
            content = content.replace(/'article:author': 'Joseph Iannazzi'/g, "'article:author': 'Just Legal Solutions Team'");
            changed = true;
        }
        
        // Fix UnifiedSchema author prop
        if (content.includes("author: 'Joseph Iannazzi'")) {
            content = content.replace(/author: 'Joseph Iannazzi'/g, "author: 'Just Legal Solutions Team'");
            changed = true;
        }
        
        // Fix authorName if any remain  
        if (content.includes("authorName: 'Joseph Iannazzi'")) {
            content = content.replace(/authorName: 'Joseph Iannazzi'/g, "authorName: 'Just Legal Solutions Team'");
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(filePath, content);
            fixedCount++;
        }
    }
}

console.log(`Fixed author to "Just Legal Solutions Team" in ${fixedCount} files.`);
