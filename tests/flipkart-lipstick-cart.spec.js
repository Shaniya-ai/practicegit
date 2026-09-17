import { test, expect } from '@playwright/test';

async function closeLoginPopup(page) {
    const selectors = [
        'button[aria-label*="Close"]',
        'button:has-text("✕")',
        '[aria-label*="Close"]',
        'span:has-text("✕")'
    ];

    for (const selector of selectors) {
        const button = page.locator(selector).first();
        if (await button.isVisible().catch(() => false)) {
            await button.click();
            return;
        }
    }
}

test.describe('Flipkart lipstick cart scenario', () => {

    test('Add the first lipstick result to cart', async ({ page }) => {

        // 1. Open Flipkart
        await page.goto('https://www.flipkart.com/', {
            waitUntil: 'domcontentloaded'
        });

        // 2. Close login popup if it appears
        await closeLoginPopup(page);

        // 3. Find search box
        const searchBox = page
            .getByPlaceholder(/search for products, brands and more/i)
            .or(
                page.getByRole('textbox', {
                    name: /search for products/i
                })
            )
            .first();

        await expect(searchBox).toBeVisible({
            timeout: 10000
        });

        // 4. Search lipstick
        await searchBox.fill('lipstick');
        await searchBox.press('Enter');

        const firstProduct = page.locator('a[href*="/p/"]').nth(1);
        await expect(firstProduct).toBeVisible({ timeout: 30000 });

        await firstProduct.click();

        await closeLoginPopup(page);

        const addToCartButton = page
            .getByRole('button', { name: /add to cart/i })
            .first();

        await expect(addToCartButton).toBeVisible({ timeout: 30000 });
        await addToCartButton.click();

        await expect(
            page.getByText(/go to cart|view cart|item added to cart/i).first()
        ).toBeVisible({ timeout: 30000 });

    });

});