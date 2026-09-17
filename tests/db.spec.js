import { test, expect } from '@playwright/test';

test("double click", async function ({ page }) {

    await page.goto("https://freelance-learn-automation.vercel.app/practise");

    await page.waitForTimeout(2000);

    await page.getByRole("button", {name:"Double Click me to see magic"}).dblclick();
await page.waitForTimeout(5000);


await page.getByRole("button", {name: "Right Click me to see magic"}).click({ button: "right" });

await page.waitForTimeout(5000);

});