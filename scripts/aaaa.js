const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../app/(main)/seo');

// List of flat files created by the faulty script, based on your logs
const brokenFiles = [
    'tulsa-county-process-server.tsx',
    'creek-county-process-server.tsx',
    'rogers-county-process-server.tsx',
    'wagoner-county-process-server.tsx',
    'oklahoma-county-process-server.tsx',
    'cleveland-county-process-server.tsx',
    'canadian-county-process-server.tsx',
    'pottawatomie-county-process-server.tsx',
    'comanche-county-process-server.tsx',
    'muskogee-county-process-server.tsx',
    'washington-county-process-server.tsx',
    'mayes-county-process-server.tsx',
    'okmulgee-county-process-server.tsx',
    'cherokee-county-process-server.tsx',
    'payne-county-process-server.tsx',
    'carter-county-process-server.tsx',
    'kay-county-process-server.tsx',
    'tulsa-process-server.tsx',
    'sapulpa-process-server.tsx',
    'catoosa-process-server.tsx',
    'collinsville-process-server.tsx',
    'claremore-process-server.tsx',
    'coweta-process-server.tsx',
    'skiatook-process-server.tsx',
    'oklahoma-city-process-server.tsx',
    'edmond-process-server.tsx',
    'norman-process-server.tsx',
    'moore-process-server.tsx',
    'midwest-city-process-server.tsx',
    'yukon-process-server.tsx',
    'shawnee-process-server.tsx',
    'lawton-process-server.tsx',
    'muskogee-process-server.tsx',
    'bartlesville-process-server.tsx',
    'pryor-creek-process-server.tsx',
    'okmulgee-process-server.tsx',
    'tahlequah-process-server.tsx',
    'stillwater-process-server.tsx',
    'wagoner-process-server.tsx',
    'ardmore-process-server.tsx',
    'ponca-city-process-server.tsx'
];

function cleanup() {
    console.log('🧹 Starting cleanup of broken pages...');
    let cleanedCount = 0;

    brokenFiles.forEach(file => {
        const filePath = path.join(pagesDir, file);
        if (fs.existsSync(filePath)) {
            // Check if it's a file before trying to delete
            if (fs.lstatSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
                console.log(`🗑️ Removed file: ${file}`);
                cleanedCount++;
            }
        }
    });

    if (cleanedCount > 0) {
        console.log(`✅ Cleanup complete. Removed ${cleanedCount} files.`);
    } else {
        console.log('👍 No broken files found to clean up.');
    }
}

cleanup();
