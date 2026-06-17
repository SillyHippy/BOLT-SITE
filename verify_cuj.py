from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Scroll down to the footer where the contact form is
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000)

    contact_btn = page.locator('button:has-text("Serve Request Form")')
    if contact_btn.is_visible():
        contact_btn.click()
        page.wait_for_timeout(1000)

    # Interact with the newly wrapped radio groups to show they are accessible and clickable
    page.locator('label[for="service-rush"]').click()
    page.wait_for_timeout(500)

    page.locator('label[for="addr-biz"]').click()
    page.wait_for_timeout(500)

    page.locator('label[for="cooperative-yes"]').click()
    page.wait_for_timeout(500)

    # Take a screenshot showing the expanded form and the clicked radio options
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={'width': 1280, 'height': 800}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
