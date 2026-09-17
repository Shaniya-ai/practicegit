import{test,expect} from '@playwright/test';

test("Handling Autosuggestion",async ({page})=>
{
    await page.goto("https://www.google.com");

    await page.locator("#ti6dpd").fill("Playwright");

    await page.waitForSelector("//li[@role='presentation']");

    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowDown");
     await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowDown");
     await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowDown");
     await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowDown");
     await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowDown");
     await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowDown");
     await page.waitForTimeout(2000);

     await page.keyboard.press("Enter");
    
    
    
    


})