#!/usr/bin/env pwsh
Write-Host "🔧 FIXING ALL TSX GENERATION WORKFLOWS" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan

# The issue: GitHub Actions workflows generate TSX files with HTML comments
# Cloudflare Pages static build fails because HTML comments are invalid in JSX
# Solution: Convert ALL HTML comments to JSX comments in workflow-generated content

Write-Host "🎯 Target: Workflows that write to .tsx files" -ForegroundColor Yellow

# Function to fix HTML comments in a workflow file
function Fix-WorkflowTSXComments {
    param(
        [string]$workflowPath,
        [string]$workflowName
    )
    
    Write-Host "🔍 Checking $workflowName..." -ForegroundColor Blue
    
    $content = Get-Content -Path $workflowPath -Raw
    $originalContent = $content
    
    # Replace HTML comment patterns with JSX comment patterns
    $patterns = @(
        @{ Search = '<!-- Generated: \$\{([^}]+)\} -->'; Replace = '{/* Generated: ${$1} */}' },
        @{ Search = '<!--([^>]+)-->'; Replace = '{/*$1*/}' },
        @{ Search = '<!-- ([^>]+) -->'; Replace = '{/* $1 */}' }
    )
    
    $changes = 0
    foreach ($pattern in $patterns) {
        $newContent = $content -replace $pattern.Search, $pattern.Replace
        if ($newContent -ne $content) {
            $content = $newContent
            $changes++
            Write-Host "  ✅ Fixed HTML comment pattern: $($pattern.Search)" -ForegroundColor Green
        }
    }
    
    if ($changes -gt 0) {
        Set-Content -Path $workflowPath -Value $content -NoNewline
        Write-Host "  💾 Saved $changes fixes to $workflowName" -ForegroundColor Green
        return $true
    } else {
        Write-Host "  ✨ No HTML comments found in $workflowName" -ForegroundColor Gray
        return $false
    }
}

# Fix all workflows that write TSX files
$workflowsToFix = @(
    @{ Path = ".github/workflows/content-freshness.yml"; Name = "Content Freshness" },
    @{ Path = ".github/workflows/voice-search-optimization.yml"; Name = "Voice Search" },
    @{ Path = ".github/workflows/rapid-ranking-boost.yml"; Name = "Rapid Ranking" }
)

$totalFixed = 0
foreach ($workflow in $workflowsToFix) {
    if (Test-Path $workflow.Path) {
        if (Fix-WorkflowTSXComments -workflowPath $workflow.Path -workflowName $workflow.Name) {
            $totalFixed++
        }
    } else {
        Write-Host "⚠️  Workflow not found: $($workflow.Path)" -ForegroundColor Yellow
    }
}

Write-Host "`n📊 SUMMARY:" -ForegroundColor Cyan
Write-Host "🔧 Workflows fixed: $totalFixed" -ForegroundColor Green
Write-Host "🎯 TypeScript compilation should now work in Cloudflare Pages" -ForegroundColor Yellow

# Also fix any standalone JavaScript files that might be affecting builds
Write-Host "`n🔍 Checking standalone files..." -ForegroundColor Blue

if (Test-Path "freshness-boost.js") {
    $jsContent = Get-Content -Path "freshness-boost.js" -Raw
    $fixedJsContent = $jsContent -replace '<!-- Generated: \$\{([^}]+)\} -->', '{/* Generated: ${$1} */}'
    
    if ($fixedJsContent -ne $jsContent) {
        Set-Content -Path "freshness-boost.js" -Value $fixedJsContent -NoNewline
        Write-Host "✅ Fixed freshness-boost.js" -ForegroundColor Green
    }
}

Write-Host "`n🚀 Ready to commit and test..." -ForegroundColor Green
Write-Host "💡 This should resolve Cloudflare Pages TypeScript compilation errors" -ForegroundColor Yellow
