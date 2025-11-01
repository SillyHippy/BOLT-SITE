# How to Restore the Original Services Page

This guide explains how to revert from the maintenance page back to the original services page.

## Quick Restoration Steps

### Option 1: Simple File Rename (Recommended)

1. **Delete the maintenance page:**
   ```powershell
   Remove-Item "c:\Users\ianna\OneDrive\Desktop\GitHub\BOLT-SITE\app\services\page.tsx"
   ```

2. **Restore the original file:**
   ```powershell
   Rename-Item "c:\Users\ianna\OneDrive\Desktop\GitHub\BOLT-SITE\app\services\page.tsx.SAVEFORLATER" "page.tsx"
   ```

That's it! The original services page is now live again.

---

### Option 2: Manual Restoration

If you prefer to do it manually:

1. Open the `app/services` folder in VS Code
2. Delete `page.tsx` (the maintenance page)
3. Rename `page.tsx.SAVEFORLATER` to `page.tsx`
4. Save and refresh your browser

---

## What Gets Restored

When you restore the original page, you'll get back:

- ✅ Full business services showcase
- ✅ Executive support details
- ✅ Event coordination information
- ✅ HR & Payroll services
- ✅ Travel management details
- ✅ Customer service offerings
- ✅ Data entry services
- ✅ Complete SEO optimizations
- ✅ Schema markup
- ✅ All metadata and OpenGraph tags

---

## File Overview

- **`page.tsx`** - Currently the maintenance page (safe to delete when ready)
- **`page.tsx.SAVEFORLATER`** - Your original services page (rename to `page.tsx`)
- **`layout.tsx`** - Services layout (keep as is)
- **`RESTORE-INSTRUCTIONS.md`** - This file (can delete after restoration)

---

## PowerShell One-Liner Restoration

Run this single command in PowerShell from the project root to restore everything:

```powershell
Remove-Item ".\app\services\page.tsx"; Rename-Item ".\app\services\page.tsx.SAVEFORLATER" "page.tsx"
```

---

## Verification Steps

After restoration:

1. Navigate to `/services` in your browser
2. Verify all 6 service cards are displaying
3. Check that images are loading properly
4. Confirm the hero section displays correctly
5. Test the "Download Resume" button

---

## Troubleshooting

**Issue: "File not found" error**
- Make sure you're in the correct directory
- Verify `page.tsx.SAVEFORLATER` exists before renaming

**Issue: Page not updating after restoration**
- Clear your browser cache (Ctrl + Shift + R)
- Restart the Next.js dev server if running locally

**Issue: TypeScript errors**
- Run `npm run build` to check for any issues
- Ensure all dependencies are installed (`npm install`)

---

## Need to Go Back to Maintenance?

If you need to put the maintenance page back up:

```powershell
# Rename current page back to backup
Rename-Item ".\app\services\page.tsx" "page.tsx.ORIGINAL"

# Create a simple maintenance page (or copy from this commit)
# Then rename it to page.tsx
```

---

## Questions?

If you encounter any issues during restoration, check:
- File permissions in the directory
- That no other process has the files locked
- Your Next.js build cache (try clearing `.next` folder)

**Last Updated:** October 31, 2025
