from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Using a mobile viewport to trigger StickyMobileCTA
        context = browser.new_context(
            viewport={'width': 375, 'height': 667},
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
        )
        page = context.new_page()
        page.goto('http://localhost:3000')
        page.wait_for_timeout(2000)

        # Scroll down to trigger the sticky CTA
        page.evaluate('window.scrollTo(0, 1000)')
        page.wait_for_timeout(1000)

        # Focus the first CTA button (Call Now) to trigger focus styles
        call_btn = page.locator('a:has-text("📞 Call Now")')
        call_btn.focus()
        page.wait_for_timeout(500)
        page.screenshot(path="verification-focus-1.png")

        text_btn = page.locator('a:has-text("💬 Text Us")')
        text_btn.focus()
        page.wait_for_timeout(500)
        page.screenshot(path="verification-focus-2.png")

        quote_btn = page.locator('a:has-text("📋 Quote")')
        quote_btn.focus()
        page.wait_for_timeout(500)
        page.screenshot(path="verification-focus-3.png")

        # Now test the mobile menu focus state
        # Open the mobile menu
        page.evaluate('window.scrollTo(0, 0)')
        menu_btn = page.locator('button[aria-label="Open main menu"]')
        menu_btn.click()
        page.wait_for_timeout(1000)

        # Ensure we have the close menu button and it has focus
        close_menu_btn = page.locator('button[aria-label="Close menu"]')
        close_menu_btn.focus()
        page.wait_for_timeout(500)
        page.screenshot(path="verification-menu-focus.png")

        browser.close()

if __name__ == '__main__':
    verify()
