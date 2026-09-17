import { test, expect } from '@playwright/test';

test("full page screenshot", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.locator("[type='submit']").click();

    // Wait until dashboard is loaded
    await page.waitForLoadState("networkidle");

    // Extra wait for UI rendering
    await page.waitForTimeout(2000);

    // Full page screenshot
    await page.screenshot({
        path: "tests/Screen/" + Date.now() + "fullpage23.png",
        fullPage: true
    });

});