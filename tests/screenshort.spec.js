import { test, expect } from '@playwright/test';

// test("page screenshort",async({page}) =>
// {

 

//      await page.goto("https://www.saucedemo.com/inventory.html");
//      await page.locator("#user-name").fill("standard_user");
//      await page.locator("#password").fill("secret_sauce");
//      await page.locator("[type='submit']").click();

//      await page.waitForTimeout(2000);

//     await page.screenshot({ path:'tests/Screen/'+Date.now()+'Fullpage3.png',fullPage:true});
// })


test("page screenshort",async({page}) =>
{
 await page.goto("https://www.saucedemo.com/inventory.html");
     await page.locator("#user-name").fill("standard_user");
     await page.locator("#password").fill("secret_sauce");
     await page.locator("[type='submit']").click();

     await page.waitForTimeout(2000);

   await page.locator("[alt='Sauce Labs Backpack']").screenshot({ path:'tests/Screen/'+Date.now()+'page.png'})

    
})
