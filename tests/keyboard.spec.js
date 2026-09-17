import { test, expect } from '@playwright/test';

test("keyboard events", async function({page})
{
    await page.goto("https://www.google.com/");

//     await page.waitForTimeout(2000);

//     await page.locator("#ti6dpd").fill("dark fantasy");

//     await page.waitForTimeout(2000);

  

//     await page.keyboard.press("Control+A");

//     await page.waitForTimeout(2000);

//     await page.keyboard.press("Control+C");

//     await page.waitForTimeout(2000);

//     await page.keyboard.press("Control+Z");

// await page.waitForTimeout(2000);

//     await page.keyboard.press("Control+V");

//       await page.keyboard.press("Enter");

//       await page.waitForTimeout(5000);

        await page.locator("#ti6dpd").focus();

        await page.keyboard.type(" Ashitha Deepak!");

 
        await page.keyboard.press("ArrowLeft");

        await page.keyboard.down("Shift");

        for(let i=0;i<7;i++)
        {
            await page.keyboard.press("ArrowLeft");

        }
await page.keyboard.up("Shift");
await page.keyboard.press("Backspace");









        














});