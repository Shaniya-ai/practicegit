import { test, expect } from '@playwright/test';

test("validate login page",async function({page})
{
    await page.goto("https://www.saucedemo.com/");

    // await page.locator("#email1").fill("haseeb@gmail.com");

    // await page.waitForTimeout(2000);

    // await page.locator("#password1").fill("1234567890");

    // await page.waitForTimeout(2000);

    // await page.locator("[class='submit-btn']").click();

    // await page.waitForTimeout(2000);

    // await page.close();
    await page.waitForTimeout(2000);

    await page.locator("#user-name").fill("standard_user");
        await page.waitForTimeout(2000);

    await page.locator("#password").fill("secret_sauce");
        await page.waitForTimeout(2000);

        await page.locator("[type='submit']").click();



   
})

