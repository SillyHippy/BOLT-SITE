param(
    [string]$outputPath = "schema-validation-report.json"
)

# Define the schema validation rules
$schemaRules = @{
    # Required fields for various schema types
    Required = @{
        LocalBusiness = @("name", "image", "address", "telephone")
        Organization = @("name", "image", "url")
        FAQPage = @("mainEntity")
        WebSite = @("name", "url")
    }
    # Optional but recommended fields
    Optional = @{
        LocalBusiness = @("priceRange", "description", "openingHours", "geo", "aggregateRating")
        Organization = @("logo", "description", "contactPoint")
        WebSite = @("description", "publisher")
    }
}

# Function to extract schema data from a file
function Extract-SchemaData {
    param (
        [string]$filePath
    )
    
    $content = Get-Content -Path $filePath -Raw
    $schemas = @()
    
    # Look for UnifiedSchema component
    if ($content -match '<UnifiedSchema[^>]*>') {
        $schema = @{
            Type = "UnifiedSchema"
            Path = $filePath
            Properties = @{}
        }
        
        # Check for image property
        if ($content -match 'image="([^"]*)"') {
            $schema.Properties["image"] = $matches[1]
        }
        else {
            $schema.Properties["image"] = "MISSING"
        }
        
        # Check for other important properties
        foreach ($prop in @("pageType", "title", "description", "url")) {
            if ($content -match "$prop=`"([^`"]*)`"") {
                $schema.Properties[$prop] = $matches[1]
            }
        }
        
        $schemas += $schema
    }
    
    # Look for FAQ schema
    if ($content -match 'FAQAccordion') {
        $schema = @{
            Type = "FAQAccordion"
            Path = $filePath
            Properties = @{}
        }
        
        # Check for meta itemProp="image"
        if ($content -match '<meta\s+itemProp="image"\s+content="([^"]*)"') {
            $schema.Properties["image"] = $matches[1]
        }
        else {
            $schema.Properties["image"] = "MISSING"
        }
        
        $schemas += $schema
    }
    
    # Look for other schema types
    foreach ($schemaType in @("WebsiteSchema", "LocalBusinessSchema", "ArticleSchema")) {
        if ($content -match "<$schemaType") {
            $schema = @{
                Type = $schemaType
                Path = $filePath
                Properties = @{}
            }
            
            # Simple check for image
            if ($content -match '"image"\s*:\s*"([^"]*)"') {
                $schema.Properties["image"] = $matches[1]
            }
            else {
                $schema.Properties["image"] = "MISSING"
            }
            
            $schemas += $schema
        }
    }
    
    return $schemas
}

# Find all service area pages
$serviceAreaPages = Get-ChildItem -Path "app/service-areas/**/page.tsx" -Recurse

$validationResults = @()

foreach ($page in $serviceAreaPages) {
    $pageUrl = $page.FullName -replace "^.*app", "/app"
    $schemas = Extract-SchemaData -filePath $page.FullName
    
    $pageResult = @{
        PagePath = $pageUrl
        SchemaCount = $schemas.Count
        MissingFields = @()
        Duplicates = @{}
        Schemas = $schemas
    }
    
    # Check for missing fields
    foreach ($schema in $schemas) {
        if ($schema.Properties.ContainsKey("image") -and $schema.Properties["image"] -eq "MISSING") {
            $pageResult.MissingFields += "Image field missing in $($schema.Type)"
        }
    }
    
    # Check for duplicates (basic check for multiple schemas of same type)
    $schemaTypes = $schemas | ForEach-Object { $_.Type }
    $counts = $schemaTypes | Group-Object | Where-Object { $_.Count -gt 1 }
    
    foreach ($count in $counts) {
        $pageResult.Duplicates[$count.Name] = $count.Count
    }
    
    $validationResults += $pageResult
}

# Generate report
$report = @{
    TotalPagesChecked = $serviceAreaPages.Count
    PagesWithIssues = ($validationResults | Where-Object { 
        $_.MissingFields.Count -gt 0 -or $_.Duplicates.Count -gt 0 
    }).Count
    Results = $validationResults
    GeneratedDate = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
}

# Save the report
$report | ConvertTo-Json -Depth 10 | Out-File -FilePath $outputPath
Write-Host "Schema validation completed. Report saved to $outputPath"

# Output a summary
Write-Host "Summary:"
Write-Host "  Total pages checked: $($report.TotalPagesChecked)"
Write-Host "  Pages with issues: $($report.PagesWithIssues)"

# List pages with missing image fields
$pagesWithMissingImages = $validationResults | Where-Object { 
    $_.MissingFields | Where-Object { $_ -like "*Image field missing*" }
}
if ($pagesWithMissingImages) {
    Write-Host "`nPages with missing image fields:"
    foreach ($page in $pagesWithMissingImages) {
        Write-Host "  $($page.PagePath)"
        foreach ($missingField in $page.MissingFields) {
            Write-Host "    - $missingField"
        }
    }
}

# List pages with duplicate schemas
$pagesWithDuplicates = $validationResults | Where-Object { $_.Duplicates.Count -gt 0 }
if ($pagesWithDuplicates) {
    Write-Host "`nPages with potential duplicate schemas:"
    foreach ($page in $pagesWithDuplicates) {
        Write-Host "  $($page.PagePath)"
        foreach ($duplicate in $page.Duplicates.GetEnumerator()) {
            Write-Host "    - $($duplicate.Key): $($duplicate.Value) instances"
        }
    }
}
