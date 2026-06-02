from playwright.sync_api import sync_playwright

def test_focus_states():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to homepage
        page.goto("http://localhost:3000")
        page.wait_for_load_state("networkidle")

        # Focus on a primary button (e.g., Contact Us in hero or navbar)
        # We'll use the 'Contact Us' button in the navbar (hidden on mobile, visible on desktop)
        # We ensure it's a desktop viewport
        page.set_viewport_size({"width": 1280, "height": 800})

        contact_btn = page.locator("nav button:has-text('Contact Us')")
        if contact_btn.count() > 0:
            contact_btn.first.focus()
            page.screenshot(path="verify_focus_btn.png")

        # Focus on a nav link
        nav_link = page.locator("nav a:has-text('Process Serving')").first
        if nav_link.count() > 0:
            nav_link.focus()
            page.screenshot(path="verify_focus_link.png")

        # Focus on secondary button
        page.goto("http://localhost:3000/#contact")
        page.wait_for_load_state("networkidle")
        call_btn = page.locator("a.ui-btn-secondary").first
        if call_btn.count() > 0:
            call_btn.focus()
            page.screenshot(path="verify_focus_secondary.png")

        browser.close()

if __name__ == "__main__":
    test_focus_states()
