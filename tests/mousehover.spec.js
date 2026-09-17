import { test, expect } from '@playwright/test';

test("Change Amazon language from English to Malayalam", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    // EN language selector-il mouse hover
    await page.locator("#icp-nav-flyout").hover();

    await page.locator("(//span[@dir='ltr'])[15]").click(); 
});