from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the Affidavit of Service page
    page.goto("http://localhost:3000/affidavit-of-service")
    page.wait_for_timeout(2000)

    # Focus the Print button to verify focus rings
    page.locator('button:has-text("Print / Save PDF")').focus()
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/affidavit-focus-print.png")

    page.locator('button:has-text("Share")').focus()
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/affidavit-focus-share.png")

    page.locator('button:has-text("Clear")').focus()
    page.wait_for_timeout(500)

    # Navigate to Field Sheet page
    page.goto("http://localhost:3000/field-sheet")
    page.wait_for_timeout(2000)

    page.locator('button:has-text("Prefill JLS Info")').focus()
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/fieldsheet-focus-prefill.png")

    page.locator('button:has-text("Print / Save PDF")').focus()
    page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
