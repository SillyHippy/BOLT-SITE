from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to the reviews page
        page.goto('http://localhost:3000/reviews')

        # Wait for the clear filters button to load
        page.wait_for_selector('button:has-text("Clear filters")')

        # Focus on the Source dropdown
        source_select = page.locator('select').first
        source_select.focus()
        page.wait_for_timeout(500) # Wait a tiny bit for focus style to apply visually
        page.screenshot(path='verification/reviews_focus_source.png')

        # Focus on the Clear filters button
        clear_btn = page.locator('button:has-text("Clear filters")')
        clear_btn.focus()
        page.wait_for_timeout(500)
        page.screenshot(path='verification/reviews_focus_clear_btn.png')

        # Focus on the Next pagination button
        next_btn = page.locator('button:has-text("Next →")')
        next_btn.focus()
        page.wait_for_timeout(500)
        page.screenshot(path='verification/reviews_focus_next_btn.png')

        browser.close()

if __name__ == "__main__":
    verify()
