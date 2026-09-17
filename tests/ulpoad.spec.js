import {test,expect} from '@playwright/test';

test("verify file uploaad", async ({page})=>
{

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.waitForTimeout(1000);

    await page.locator("#file-upload").setInputFiles("C:/Users/hp/Pictures/Screenshots/Screenshot 2026-06-01 103554.png");

    await page.locator("[type='submit']").click();
    
   var a= expect(await page.locator("//h3")).toHaveText("File Uploaded!");
   console.log("verified");
}
);