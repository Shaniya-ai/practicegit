const { test, expect } = require('@playwright/test');

test("test login page", async function ({ page }) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.locator("[type='submit']").click();

    await page.waitForLoadState('networkidle');

    await page.waitForTimeout(2000);

    const date = new Date();

    await page.screenshot({
        path: `tests/Screenshots/${date.toLocaleString()
            .replace(/[/:, ]/g, '-')}-OrangeHRM2.png`,
        fullPage: true
    });

});