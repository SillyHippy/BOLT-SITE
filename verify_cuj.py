from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000/affidavit-of-service")
    page.wait_for_timeout(2000)

    # Click the "+ Add Attempt" button to add a new attempt, showing the "Remove attempt" button
    page.get_by_role("button", name="+ Add Attempt").click()
    page.wait_for_timeout(500)

    # Focus the remove button (to show the focus-visible styles)
    page.get_by_role("button", name="Remove attempt").last.focus()
    page.wait_for_timeout(500)

    # Take screenshot at the key moment showing the focused button
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

    # Click it to remove
    page.get_by_role("button", name="Remove attempt").last.click()
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
