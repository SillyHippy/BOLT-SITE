from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000/videos")
    page.wait_for_timeout(3000)

    # Focus the first video embed
    # Using locator for the first element with role='button' and aria-label containing 'Play YouTube video'
    first_video = page.locator("div[role='button'][aria-label^='Play YouTube video']").first
    first_video.focus()
    page.wait_for_timeout(1000)

    # Take screenshot of the focused element to verify focus-visible styling
    page.screenshot(path="verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="verification/videos",
            viewport={'width': 1280, 'height': 720}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
