const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processImages() {
  console.log('Finding images in public directory...');
  // Use native fs recursive read which doesn't hit buffer limits
  const publicDir = path.join(process.cwd(), 'public');
  const allFiles = fs.readdirSync(publicDir, { recursive: true })
    .map(f => path.join(publicDir, f))
    .filter(f => fs.statSync(f).isFile() && f.match(/\.(png|jpg|jpeg)$/i));
  
  const images = allFiles;
  console.log(`Found ${images.length} images to convert.`);
  
  let conversions = [];
  
  for (let file of images) {
    if (!fs.existsSync(file)) continue;
    
    const dir = path.dirname(file);
    const ext = path.extname(file);
    const base = path.basename(file, ext);
    const newFile = path.join(dir, `${base}.webp`);
    
    const relativeOld = '/' + path.relative(publicDir, file).replace(/\\/g, '/');
    const relativeNew = '/' + path.relative(publicDir, newFile).replace(/\\/g, '/');
    
    const filenameOld = path.basename(file);
    const filenameNew = `${base}.webp`;
    
    conversions.push({
      oldPath: file,
      newPath: newFile,
      relativeOld,
      relativeNew,
      filenameOld,
      filenameNew
    });
    
    try {
      console.log(`Converting ${relativeOld}...`);
      await sharp(file)
        .webp({ quality: 80, effort: 6 })
        .toFile(newFile);
      console.log(`Successfully converted to WebP: ${relativeNew}`);
    } catch (e) {
      console.error(`Failed to convert ${file}:`, e.message);
    }
  }

  console.log('Finding codebase files to update references (excluding node_modules and .next)...');
  const allCodeFiles = fs.readdirSync(process.cwd(), { recursive: true })
    .filter(f => {
      if (f.includes('node_modules') || f.includes('.next') || f.includes('.git')) return false;
      return f.match(/\.(tsx|ts|js|jsx|json|md|css|html)$/i);
    })
    .map(f => path.join(process.cwd(), f))
    .filter(f => {
      try { return fs.statSync(f).isFile(); } catch(e){ return false; }
    });
  
  for (let file of allCodeFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let dirty = false;
    
    for (const conv of conversions) {
      if (content.includes(conv.relativeOld)) {
        content = content.split(conv.relativeOld).join(conv.relativeNew);
        dirty = true;
      }
      
      const noSlashOld = conv.relativeOld.substring(1);
      const noSlashNew = conv.relativeNew.substring(1);
      
      if (content.includes(conv.filenameOld)) {
        content = content.split(conv.filenameOld).join(conv.filenameNew);
        dirty = true;
      }
    }
    
    if (dirty) {
      console.log(`Updating references in ${file.replace(process.cwd(), '')}`);
      fs.writeFileSync(file, content);
    }
  }
  
  console.log('References updated. Deleting old images...');
  for (const conv of conversions) {
    if (fs.existsSync(conv.newPath) && fs.existsSync(conv.oldPath)) {
      try {
        fs.unlinkSync(conv.oldPath);
      } catch (e) {
        console.error(`Failed to delete ${conv.oldPath}:`, e.message);
      }
    }
  }
  
  console.log('Complete!');
}

processImages();
