import { test, expect } from '@playwright/test';

test("dropdown", async function({ page }) {

    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.waitForTimeout(3000);

     await page.locator("#state").selectOption({ label: "Jharkhand" });

        await page.waitForTimeout(3000);

        //await page.close();

        //2. select by value

           await page.locator("#state").selectOption({ value: "Himachal Pradesh"});
        //  await page.close();

        //3. select by index
 await page.waitForTimeout(3000);
          await page.locator("#state").selectOption({ index: 13});
         await page.close();
        
});