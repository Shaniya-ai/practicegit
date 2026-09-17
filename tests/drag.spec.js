import { test, expect } from '@playwright/test';

test("verify drag and drop", async function({ page }) {

    await page.goto("https://freelance-learn-automation.vercel.app/practise");

    await page.locator("[class='dragDiv']")
        .dragTo(page.locator("[id='div1']"));

});