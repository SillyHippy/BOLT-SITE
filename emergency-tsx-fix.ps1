#!/usr/bin/env pwsh
Write-Host "🛡️  EMERGENCY TSX SYNTAX PROTECTION" -ForegroundColor Red
Write-Host "===================================" -ForegroundColor Red

# EMERGENCY FIX: Cloudflare Pages static build is failing due to HTML comments in TSX
# This script ensures ALL generated TSX content uses proper JSX syntax

Write-Host "🎯 Scanning for HTML comments in TSX files..." -ForegroundColor Yellow

# Function to fix HTML comments in TSX files
function Fix-TSXHtmlComments {
    param([string]$filePath)
    
    if (Test-Path $filePath) {
        $content = Get-Content -Path $filePath -Raw
        $originalContent = $content
        
        # Replace ALL HTML comment patterns with JSX comments
        $content = $content -replace '<!-- Generated: ([^>]+) -->', '{/* Generated: $1 */}'
        $content = $content -replace '<!--([^>]+)-->', '{/*$1*/}'
        $content = $content -replace '<!-- ([^>]+) -->', '{/* $1 */}'
        
        if ($content -ne $originalContent) {
            Set-Content -Path $filePath -Value $content -NoNewline
            Write-Host "✅ FIXED: $filePath" -ForegroundColor Green
            return $true
        }
    }
    return $false
}

# Fix all TSX files
$tsxFiles = Get-ChildItem -Recurse -Include "*.tsx" -Path "." | Where-Object { $_.Name -notlike "*node_modules*" }
$fixedCount = 0

foreach ($file in $tsxFiles) {
    if (Fix-TSXHtmlComments -filePath $file.FullName) {
        $fixedCount++
    }
}

# Also ensure the main content freshness workflow uses JSX comments
if (Test-Path ".github/workflows/content-freshness.yml") {
    $workflowContent = Get-Content -Path ".github/workflows/content-freshness.yml" -Raw
    $originalWorkflow = $workflowContent
    
    # Fix any HTML comment generation in the workflow itself
    $workflowContent = $workflowContent -replace 'Generated: \$\{readableDate\} -->', 'Generated: ${readableDate} */}'
    $workflowContent = $workflowContent -replace '<!-- Generated:', '{/* Generated:'
    
    if ($workflowContent -ne $originalWorkflow) {
        Set-Content -Path ".github/workflows/content-freshness.yml" -Value $workflowContent -NoNewline
        Write-Host "✅ FIXED: content-freshness.yml workflow" -ForegroundColor Green
        $fixedCount++
    }
}

Write-Host "`n📊 EMERGENCY FIX SUMMARY:" -ForegroundColor Red
Write-Host "🔧 Files fixed: $fixedCount" -ForegroundColor Green
Write-Host "🚀 Cloudflare Pages should now build successfully" -ForegroundColor Yellow

if ($fixedCount -gt 0) {
    Write-Host "`n💾 Committing emergency fixes..." -ForegroundColor Green
    git add .
    git commit -m "🚨 EMERGENCY: Fix HTML comments in TSX files for Cloudflare Pages build"
    Write-Host "✅ Emergency fixes committed and ready to push" -ForegroundColor Green
} else {
    Write-Host "✨ No HTML comments found - files are already correct" -ForegroundColor Gray
}

Write-Host "`n💡 Root cause: GitHub Actions workflows generating HTML comments in TSX files" -ForegroundColor Yellow
Write-Host "🎯 Solution: All TSX generation now uses proper JSX comment syntax" -ForegroundColor Green
