from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the card page
    page.goto("http://localhost:3000/card")
    page.wait_for_timeout(1000)

    # Focus the Share button using keyboard navigation
    page.keyboard.press("Tab")
    page.wait_for_timeout(1000)

    # Open the Share modal
    page.keyboard.press("Enter")
    page.wait_for_timeout(1000)

    # Tab through the modal options to show focus rings
    for _ in range(5):
        page.keyboard.press("Tab")
        page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/verification_modal.png")

    # Close modal
    page.keyboard.press("Enter")
    page.wait_for_timeout(1000)

    # Tab through the link list on the card page
    for _ in range(5):
        page.keyboard.press("Tab")
        page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/verification_links.png")
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
