from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(3000) # give time for page to render

    # Scroll to the footer section
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000)

    # Click the "Contact Us" button in the footer
    try:
        page.get_by_role("button", name="Send a Message or Upload Documents").click(timeout=3000)
    except:
        # If the button name is different or missing aria-label, fallback to class
        page.locator("button.ui-btn-primary").nth(-1).click()

    page.wait_for_timeout(1000)

    # Find the newly added fieldsets and legends
    page.locator("fieldset").first.wait_for(state="visible")

    # Take screenshot at the key moment focusing on the fieldset changes
    # Locate the "Service Type" section
    service_type_legend = page.get_by_text("Service Type", exact=True)
    if service_type_legend.count() > 0:
         service_type_legend.first.scroll_into_view_if_needed()
    page.wait_for_timeout(500)

    page.screenshot(path="verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
