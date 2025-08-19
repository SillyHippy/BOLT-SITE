# AI-Powered SEO Enhancement Deployment using UnifiedSchema
# Enhances high        # Find and enhance existing UnifiedSchema component
        if ($content -match "UnifiedSchema") {
            # Add speakable property for voice search optimization
            if ($content -notmatch "speakable=") {
                $speakableArray = "[`r`n          " + ($voiceSearchPaths -join ",`r`n          ") + "`r`n        ]"
                $content = $content -replace "(\s+)(reviewCount={\d+})", "`$1speakable=$speakableArray`r`n`$1`$2"
            }
            
            # Add knowsAbout property for AI optimization
            if ($content -notmatch "knowsAbout=") {
                $knowledgeArray = "[`r`n          " + ($knowledgeAreas | ForEach-Object { "'$_'" } | Join-String -Separator ",`r`n          ") + "`r`n        ]"
                $content = $content -replace "(\s+)(aggregateRating=)", "`$1knowsAbout=$knowledgeArray`r`n`$1`$2"
            }ith advanced AI optimization through UnifiedSchema

Write-Host "🤖 Deploying AI-Enhanced SEO using UnifiedSchema..." -ForegroundColor Cyan

$highValuePages = @(
    "process-serving-faq\page.tsx",
    "divorce-papers-tulsa\page.tsx", 
    "court-document-filing\page.tsx",
    "what-is-a-process-server\page.tsx",
    "process-server-tulsa\page.tsx",
    "same-day-process-serving-tulsa\page.tsx",
    "subpoena-service\page.tsx",
    "eviction-process-serving\page.tsx",
    "skip-tracing-services\page.tsx",
    "legal-courier-service\page.tsx"
)

$enhancedAICount = 0

foreach ($page in $highValuePages) {
    $filePath = "app\(main)\seo\$page"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Skip if already enhanced with UnifiedSchema
        if ($content -match "speakable=|knowsAbout=|voice.*search") {
            Write-Host "Skipping $page - already AI enhanced" -ForegroundColor Yellow
            continue
        }
        
        # Check if page uses UnifiedSchema
        if ($content -notmatch "UnifiedSchema") {
            Write-Host "Skipping $page - no UnifiedSchema found" -ForegroundColor Red
            continue
        }
        
        # Extract page info
        $pageName = ($page -replace "page\.tsx", "" -replace "\\", " " -replace "-", " ").Trim()
        $city = if ($page -match "tulsa") { "Tulsa" } else { "Oklahoma" }
        
        # Determine service type and keywords
        $serviceType = "Process Serving"
        $keywords = @("process serving", "legal documents", "Oklahoma")
        $semanticKeywords = @("summons", "subpoena", "court papers", "legal service")
        
        if ($page -match "divorce") { 
            $serviceType = "Divorce Papers Service"
            $keywords += @("divorce papers", "family court")
            $semanticKeywords += @("divorce decree", "custody papers", "support documents")
        }
        if ($page -match "eviction") { 
            $serviceType = "Eviction Service"
            $keywords += @("eviction notice", "landlord tenant")
            $semanticKeywords += @("rental property", "tenant removal", "notice to quit")
        }
        if ($page -match "subpoena") { 
            $keywords += @("subpoena service", "witness summons")
            $semanticKeywords += @("court appearance", "testimony", "legal witness")
        }
        
        # Enhance UnifiedSchema with AI optimization properties
        $voiceSearchPaths = @(
            "'/html/head/title'",
            "'/html/body//h1'", 
            "'/html/body//h2[contains(@class, \"service\")]'",
            "'/html/body//section[contains(@class, \"faq\")]//h3'"
        )
        
        $knowledgeAreas = switch -Regex ($page) {
            "divorce" { @("Divorce Proceedings", "Family Law", "Court Documents", "Legal Service") }
            "eviction" { @("Eviction Law", "Landlord Tenant Law", "Property Management", "Legal Notice Service") }
            "subpoena" { @("Court Procedures", "Witness Service", "Legal Process", "Judicial System") }
            default { @("Process Serving", "Legal Documents", "Court Procedures", "Oklahoma Law") }
        }
        
            
            # Save the enhanced content
            Set-Content $filePath -Value $content
            $enhancedAICount++
            Write-Host "✅ Enhanced $page with AI optimization via UnifiedSchema" -ForegroundColor Green
        } else {
            Write-Host "❌ Could not find UnifiedSchema in $page" -ForegroundColor Red
        }
    } else {
        Write-Host "⚠️  File not found: $filePath" -ForegroundColor Yellow
    }
}

Write-Host "`n🎯 AI Enhancement Complete!" -ForegroundColor Green
Write-Host "Enhanced $enhancedAICount pages with UnifiedSchema AI optimization" -ForegroundColor Cyan
Write-Host "Features added: Voice search optimization, Knowledge areas, Enhanced schema properties" -ForegroundColor Gray
