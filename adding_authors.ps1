$files = Get-ChildItem -Path "c:\Users\ianna\OneDrive\Desktop\GitHub\BOLT-SITE\app\blog" -Directory | ForEach-Object { Get-ChildItem -Path $_.FullName -Filter "page.tsx" }

foreach ($file in $files) {
    # Skip if file already has AuthorBox
    $content = Get-Content $file.FullName -Raw
    if ($content -notmatch "AuthorBox") {
        # 1. Add import
        $content = $content -replace "import \{ Navbar \} from '@/components/ui/navbar';", "import { Navbar } from '@/components/ui/navbar';`nimport { AuthorBox } from '@/components/ui/author-box';"
        
        # 2. Add AuthorBox component
        $content = $content -replace "</article>", "</article>`n          <div className=`"mt-12`">`n            <AuthorBox />`n          </div>"
        
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated $($file.Name) in $($file.Directory.Name)"
    }
}
