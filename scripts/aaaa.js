const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../app/(main)/seo');

// List of directories created by the faulty script, based on your logs
const brokenDirs = [
    'tulsa-county-process-server',
    'creek-county-process-server',
    'rogers-county-process-server',
    'wagoner-county-process-server',
    'oklahoma-county-process-server',
    'cleveland-county-process-server',
    'canadian-county-process-server',
    'pottawatomie-county-process-server',
    'comanche-county-process-server',
    'muskogee-county-process-server',
    'washington-county-process-server',
    'mayes-county-process-server',
    'okmulgee-county-process-server',
    'cherokee-county-process-server',
    'payne-county-process-server',
    'carter-county-process-server',
    'kay-county-process-server',
    'tulsa-process-server',
    'sapulpa-process-server',
    'catoosa-process-server',
    'collinsville-process-server',
    'claremore-process-server',
    'coweta-process-server',
    'skiatook-process-server',
    'oklahoma-city-process-server',
    'edmond-process-server',
    'norman-process-server',
    'moore-process-server',
    'midwest-city-process-server',
    'yukon-process-server',
    'shawnee-process-server',
    'lawton-process-server',
    'muskogee-process-server',
    'bartlesville-process-server',
    'pryor-creek-process-server',
    'okmulgee-process-server',
    'tahlequah-process-server',
    'stillwater-process-server',
    'wagoner-process-server',
    'ardmore-process-server',
    'ponca-city-process-server'
];

function cleanup() {
    console.log('🧹 Starting cleanup of broken pages...');
    let cleanedCount = 0;

    brokenDirs.forEach(dir => {
        const dirPath = path.join(pagesDir, dir);
        if (fs.existsSync(dirPath)) {
            fs.rmSync(dirPath, { recursive: true, force: true });
            console.log(`🗑️ Removed: ${dir}`);
            cleanedCount++;
        }
    });

    if (cleanedCount > 0) {
        console.log(`✅ Cleanup complete. Removed ${cleanedCount} directories.`);
    } else {
        console.log('👍 No broken pages found to clean up.');
    }
}

cleanup();
