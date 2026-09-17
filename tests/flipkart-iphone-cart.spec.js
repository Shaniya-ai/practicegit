const { test, expect } = require('@playwright/test');

async function closeLoginPopup(page) {

    const closeButtons = [
        'button[aria-label="Close"]',
        'button:has-text("✕")',
        'span:has-text("✕")'
    ];

    for (const selector of closeButtons) {
        const button = page.locator(selector).first();

        if (await button.isVisible().catch(() => false)) {
            await button.click();
            break;
        }
    }
}

test('Flipkart iPhone Add to Cart and Remove', async ({ page }) => {

    // 1. Open Flipkart
    await page.goto('https://www.flipkart.com/', {
        waitUntil: 'domcontentloaded'
    });

    await closeLoginPopup(page);

    // 2. Search iPhone
    const searchBox = page.locator(
        'input[title="Search for Products, Brands and More"], input[placeholder*="Search for Products"]'
    ).first();

    await expect(searchBox).toBeVisible({ timeout: 15000 });

    await searchBox.fill('iPhone');
    await searchBox.press('Enter');

    // 3. Wait for search results
    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('body')).toContainText(/iphone/i, {
        timeout: 20000
    });

    // 4. Select first iPhone product
    const product = page.locator('a[href*="/p/"]').filter({
        hasText: /iphone/i
    }).first();

    await expect(product).toBeVisible({
        timeout: 20000
    });

    // Get product name
    const productName = (await product.innerText()).trim();

    console.log('Selected product:', productName);

    // 5. Click product
    await product.click();

    // 6. Wait for product page
    await page.waitForLoadState('domcontentloaded');

    // await expect(page).toHaveURL(/\/p\//, {
    //     timeout: 20000
    });

    // 7. Find Add to Cart button
    const addToCart = page.getByRole('button', {
        name: /add to cart/i
    }).first();

    await expect(addToCart).toBeVisible({
        timeout: 30000
    });

    await expect(addToCart).toBeEnabled({
        timeout: 30000
    });

    console.log('Add to Cart button found');

    // 8. Click Add to Cart
    await addToCart.click();

    // 9. Open Cart
    const goToCart = page.getByText(/go to cart/i).first();

    if (await goToCart.isVisible().catch(() => false)) {

        await goToCart.click();

    } else {

        await page.goto(
            'https://www.flipkart.com/viewcart?exploreMode=true',
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }

    // 10. Verify Cart page
    await expect(page).toHaveURL(/viewcart|cart/i, {
        timeout: 20000
    });

    console.log('Cart opened');

    // 11. Verify product exists in cart
    await expect(page.locator('body')).toContainText(/iphone/i, {
        timeout: 20000
    });

    // 12. Remove product
    const removeButton = page.getByText(
        /remove/i,
        { exact: true }
    ).first();

    await expect(removeButton).toBeVisible({
        timeout: 20000
    });

    await removeButton.click();

    // 13. Confirm removal if popup appears
    const confirmRemove = page.getByText(
        /remove/i,
        { exact: true }
    ).last();

    if (await confirmRemove.isVisible().catch(() => false)) {
        await confirmRemove.click();
    }

    // 14. Verify cart is empty
    await expect(page.locator('body')).toContainText(
        /cart is empty|your cart is empty/i,
        {
            timeout: 20000
        }
    );

    console.log('Product removed successfully');

    // 15. Go back to Home
    await page.goto('https://www.flipkart.com/', {
        waitUntil: 'domcontentloaded'
    });

    await closeLoginPopup(page);

    // 16. Verify Home page
    await expect(
        page.locator(
            'input[title="Search for Products, Brands and More"]'
        ).first()
    ).toBeVisible({
        timeout: 20000
    });

    await expect(page).toHaveURL(/flipkart\.com\/?$/i);

    console.log('Returned to Flipkart Home Page');

    // 17. Close page
    await page.close();
});