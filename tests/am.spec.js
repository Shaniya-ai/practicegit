import { test, expect } from '@playwright/test';

test("dropdown", async function({ page }) {

    await page.goto("https://www.amazon.in");
    
    await page.waitForTimeout(2000);

    await page.locator("[aria-label='Amazon.in']").screenshot({ path:'tests/Screen/'+Date.now()+'am.png'});
})