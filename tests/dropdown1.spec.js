const { test, expect } = require('@playwright/test');

test("dropdown", async function({ page }) {

    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.waitForTimeout(3000);

    // Select Kerala using label
    await page.locator("#state").selectOption({ label: "Kerala" });

    await page.waitForTimeout(3000);

    // Select Haryana using value
    await page.locator("#state").selectOption({ value: "Haryana" });
    await page.waitForTimeout(3000);
    // Select option using index
    await page.locator("#state").selectOption({ index: 4 });
    await page.waitForTimeout(3000);
const value = await page.locator("#state option").allTextContents();
console.log("The all dropdown values are:\n" + value.join("\n"));
 await expect(value.includes("Ashithaashi")).toBeFalsy();
    await page.close();
});