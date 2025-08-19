# Master Automation Controller for UnifiedSchema-based SEO
# Run this script to execute all updated automation scripts in proper order

Write-Host "🎯 UNIFIED SCHEMA AUTOMATION CONTROLLER" -ForegroundColor Magenta
Write-Host "=========================================" -ForegroundColor Gray

# Available automation scripts (updated for UnifiedSchema)
$automations = @(
    @{
        Name = "cleanup-seo-components.ps1"
        Description = "Remove legacy SEO components and optimize for UnifiedSchema"
        Type = "Cleanup"
        SafetyLevel = "High"
    },
    @{
        Name = "deploy-ai-seo-enhancements.ps1"
        Description = "Add AI optimization to high-value pages via UnifiedSchema"
        Type = "Enhancement"
        SafetyLevel = "Medium"
    },
    @{
        Name = "deploy-complete-seo-domination.ps1"
        Description = "Deploy comprehensive SEO to all pages using UnifiedSchema"
        Type = "Full Deployment"
        SafetyLevel = "Low"
    },
    @{
        Name = "fix-breadcrumbs-emergency.ps1"
        Description = "Emergency fix for breadcrumb compatibility issues"
        Type = "Fix"
        SafetyLevel = "High"
    }
)

Write-Host "`n📋 Available Automations:" -ForegroundColor Cyan
for ($i = 0; $i -lt $automations.Count; $i++) {
    $auto = $automations[$i]
    $safetyColor = switch ($auto.SafetyLevel) {
        "High" { "Green" }
        "Medium" { "Yellow" }
        "Low" { "Red" }
    }
    Write-Host "  [$($i+1)] $($auto.Name)" -ForegroundColor White
    Write-Host "      $($auto.Description)" -ForegroundColor Gray
    Write-Host "      Type: $($auto.Type) | Safety: $($auto.SafetyLevel)" -ForegroundColor $safetyColor
    Write-Host ""
}

Write-Host "🔧 Recommended Order:" -ForegroundColor Yellow
Write-Host "  1. cleanup-seo-components.ps1 (if you have build issues)"
Write-Host "  2. deploy-ai-seo-enhancements.ps1 (for key pages)"
Write-Host "  3. deploy-complete-seo-domination.ps1 (for full site)"
Write-Host ""

# Interactive menu
do {
    Write-Host "Select automation to run (1-$($automations.Count)), 'A' for all, or 'Q' to quit:" -ForegroundColor Cyan -NoNewline
    $choice = Read-Host " "
    
    if ($choice -eq 'Q' -or $choice -eq 'q') {
        Write-Host "Goodbye!" -ForegroundColor Green
        break
    }
    
    if ($choice -eq 'A' -or $choice -eq 'a') {
        Write-Host "`n🚀 Running ALL automations in recommended order..." -ForegroundColor Magenta
        
        # Run in safe order
        $safeOrder = @(4, 1, 2, 3)  # Fix, Cleanup, AI Enhancement, Full Deployment
        
        foreach ($index in $safeOrder) {
            $script = $automations[$index - 1].Name
            Write-Host "`n⚡ Running: $script" -ForegroundColor Yellow
            
            if (Test-Path $script) {
                try {
                    & ".\$script"
                    Write-Host "✅ Completed: $script" -ForegroundColor Green
                } catch {
                    Write-Host "❌ Error in $script`: $($_.Exception.Message)" -ForegroundColor Red
                }
            } else {
                Write-Host "❌ Script not found: $script" -ForegroundColor Red
            }
            
            Start-Sleep -Seconds 2
        }
        
        Write-Host "`n🎉 ALL AUTOMATIONS COMPLETE!" -ForegroundColor Magenta
        break
    }
    
    if ($choice -match '^\d+$' -and [int]$choice -ge 1 -and [int]$choice -le $automations.Count) {
        $selectedScript = $automations[[int]$choice - 1].Name
        Write-Host "`n⚡ Running: $selectedScript" -ForegroundColor Yellow
        
        if (Test-Path $selectedScript) {
            try {
                & ".\$selectedScript"
                Write-Host "`n✅ Completed: $selectedScript" -ForegroundColor Green
            } catch {
                Write-Host "`n❌ Error: $($_.Exception.Message)" -ForegroundColor Red
            }
        } else {
            Write-Host "❌ Script not found: $selectedScript" -ForegroundColor Red
        }
    } else {
        Write-Host "Invalid choice. Please try again." -ForegroundColor Red
    }
    
    Write-Host ""
} while ($true)
