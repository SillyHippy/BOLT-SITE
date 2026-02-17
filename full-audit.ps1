$basePath = 'c:\Users\ianna\OneDrive\Desktop\GitHub\BOLT-SITE\app'
$pages = Get-ChildItem -Recurse -Filter 'page.tsx' -Path $basePath

function Get-Slug($filePath) {
    $rel = $filePath.Replace($basePath, '').Replace('\', '/')
    $s = $rel -replace '/page\.tsx$', ''
    $s = $s -replace '^\(main\)/', '/'
    $s = $s -replace '^/', '/'
    if ($s -eq '' -or $s -eq '/') { $s = '/' }
    return $s
}

$results = @()

foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    
    $slug = Get-Slug $page.FullName
    
    # Skip redirects (pages that just call redirect())
    $isRedirect = $content -match 'redirect\s*\('
    
    # Extract metadata title using regex class
    $metaTitle = ''
    $tm1 = [regex]::Match($content, 'title:\s*''([^'']+)''')
    $tm2 = [regex]::Match($content, 'title:\s*"([^"]+)"')
    $tm3 = [regex]::Match($content, 'title:\s*\{\s*absolute:\s*''([^'']+)''')
    $tm4 = [regex]::Match($content, 'title:\s*\{\s*absolute:\s*"([^"]+)"')
    if ($tm1.Success) { $metaTitle = $tm1.Groups[1].Value }
    elseif ($tm2.Success) { $metaTitle = $tm2.Groups[1].Value }
    elseif ($tm3.Success) { $metaTitle = $tm3.Groups[1].Value }
    elseif ($tm4.Success) { $metaTitle = $tm4.Groups[1].Value }
    
    # Extract H1 text
    $h1 = ''
    $h1m = [regex]::Match($content, '<h1[^>]*>\s*([A-Za-z][^<]{3,}?)\s*</h1>')
    if ($h1m.Success) { $h1 = $h1m.Groups[1].Value.Trim() }
    else {
        $h1m2 = [regex]::Match($content, '<h1[^>]*className=[^>]*>\s*([A-Za-z][^<]{3,})')
        if ($h1m2.Success) { $h1 = $h1m2.Groups[1].Value.Trim() }
    }
    
    # Simple word count: extract visible text between > and <
    $textParts = [regex]::Matches($content, '>([^<>{]+)<') | ForEach-Object { $_.Groups[1].Value }
    $allText = ($textParts -join ' ') -replace '\s+', ' '
    # Also add FAQ answer text from data arrays
    $faqText = [regex]::Matches($content, 'answer:\s*[''"]([^''"]+)') | ForEach-Object { $_.Groups[1].Value }
    $allText += ' ' + ($faqText -join ' ')
    # Also add description text from data arrays  
    $descText = [regex]::Matches($content, 'description:\s*[''"]([^''"]{20,})') | ForEach-Object { $_.Groups[1].Value }
    $allText += ' ' + ($descText -join ' ')
    # Also add preview text
    $prevText = [regex]::Matches($content, 'preview:\s*[''"]([^''"]+)') | ForEach-Object { $_.Groups[1].Value }
    $allText += ' ' + ($prevText -join ' ')
    # Count words (only strings with letters)
    $wordArr = ($allText -split '\s+') | Where-Object { $_ -match '[a-zA-Z]' -and $_.Length -gt 1 }
    $words = $wordArr.Count
    
    # Extract internal links
    $links = @()
    $linkMatches = [regex]::Matches($content, 'href="(/[^"#]*?)["#]')
    foreach ($m in $linkMatches) {
        $lnk = $m.Groups[1].Value
        if ($lnk -ne '/contact-details.vcf' -and $lnk -notmatch '^\/(images|resume)') {
            $links += $lnk
        }
    }
    
    $results += [PSCustomObject]@{
        Slug = $slug
        File = $page.FullName.Replace('c:\Users\ianna\OneDrive\Desktop\GitHub\BOLT-SITE\', '')
        Title = $metaTitle
        H1 = $h1
        Words = $words
        IsRedirect = $isRedirect
        OutLinks = ($links | Sort-Object -Unique) -join '|'
        OutLinkCount = ($links | Sort-Object -Unique).Count
    }
}

# Build inbound map
$inbound = @{}
foreach ($r in $results) {
    if (-not $inbound.ContainsKey($r.Slug)) { $inbound[$r.Slug] = @() }
}
foreach ($r in $results) {
    if ($r.OutLinks) {
        foreach ($lnk in ($r.OutLinks -split '\|')) {
            if (-not $inbound.ContainsKey($lnk)) { $inbound[$lnk] = @() }
            $inbound[$lnk] += $r.Slug
        }
    }
}

Write-Host '============================================='
Write-Host "FULL PAGE AUDIT - $($results.Count) pages"
Write-Host '============================================='

Write-Host ''
Write-Host '--- PAGES UNDER 400 WORDS (non-redirect) ---'
$lowWord = $results | Where-Object { $_.Words -lt 400 -and -not $_.IsRedirect } | Sort-Object Words
foreach ($r in $lowWord) {
    $inCount = if ($inbound.ContainsKey($r.Slug)) { ($inbound[$r.Slug] | Where-Object { $_ }).Count } else { 0 }
    Write-Host "  $($r.Slug) | words=$($r.Words) | inbound=$inCount | title=$($r.Title)"
}
Write-Host "  Total under-400: $($lowWord.Count)"

Write-Host ''
Write-Host '--- ORPHANED PAGES (0 inbound, non-redirect) ---'
$orphans = @()
foreach ($r in ($results | Where-Object { -not $_.IsRedirect } | Sort-Object Slug)) {
    $inCount = if ($inbound.ContainsKey($r.Slug)) { ($inbound[$r.Slug] | Where-Object { $_ }).Count } else { 0 }
    if ($inCount -eq 0) {
        $orphans += $r
        Write-Host "  $($r.Slug) | words=$($r.Words) | title=$($r.Title)"
    }
}
Write-Host "  Total orphans: $($orphans.Count)"

Write-Host ''
Write-Host '--- ALL TITLES (sorted for near-duplicate detection) ---'
foreach ($r in ($results | Where-Object { $_.Title -and -not $_.IsRedirect } | Sort-Object Title)) {
    $inCount = if ($inbound.ContainsKey($r.Slug)) { ($inbound[$r.Slug] | Where-Object { $_ }).Count } else { 0 }
    Write-Host "  $($r.Slug) | in=$inCount | title=[$($r.Title)]"
}

Write-Host ''
Write-Host '--- ALL H1s (sorted for near-duplicate detection) ---'
foreach ($r in ($results | Where-Object { $_.H1 -and -not $_.IsRedirect } | Sort-Object H1)) {
    Write-Host "  $($r.Slug) | h1=[$($r.H1)]"
}

Write-Host ''
Write-Host '--- REDIRECT PAGES ---'
foreach ($r in ($results | Where-Object { $_.IsRedirect } | Sort-Object Slug)) {
    Write-Host "  $($r.Slug)"
}

Write-Host ''
Write-Host '--- COMPLETE DATA (word-sorted, non-redirect) ---'
foreach ($r in ($results | Where-Object { -not $_.IsRedirect } | Sort-Object Words)) {
    $inCount = if ($inbound.ContainsKey($r.Slug)) { ($inbound[$r.Slug] | Where-Object { $_ }).Count } else { 0 }
    Write-Host "W=$($r.Words.ToString().PadLeft(5)) | IN=$($inCount.ToString().PadLeft(3)) | OUT=$($r.OutLinkCount.ToString().PadLeft(3)) | $($r.Slug) | $($r.Title)"
}
