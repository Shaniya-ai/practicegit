const { test, expect } = require('@playwright/test');
//const { log } = require('node:console');

test("verify error message",async function({page})
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("username").fill("username");
    await page.getByPlaceholder("password").fill("password");
    await page.locator("[type='submit']").click();
    // const errormessage=await page.locator("[class='oxd-text oxd-text--p oxd-alert-content-text']").textContent();

    // console.log("the error message is"+errormessage);

})