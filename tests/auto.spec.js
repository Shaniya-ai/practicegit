// import { test, expect } from '@playwright/test'

// test ("auto suggestion",async ({page})=>
// {

//     await page.goto("https://www.google.com/")
//     await page.locator("#ti6dpd").fill("playwright");
//     await page.waitForSelector("//li[@role='presentation']");
//     await page.keyboard.press("ArrowDown");
    
//        await page.keyboard.press("ArrowDown");

//        await page.keyboard.press("Enter");
// }
// );



import { test, expect } from '@playwright/test';

test("Handle all JavaScript alerts", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");


    // 1. JS Alert
    page.once("dialog", async dialog => {

        console.log("Alert:", dialog.message());

        await dialog.accept();

    });

    await page.getByRole("button", { name: "Click for JS Alert" }).click();


    // 2. JS Confirm
    page.once("dialog", async dialog => {

        console.log("Confirm:", dialog.message());

        await dialog.accept();

    });

    await page.getByRole("button", { name: "Click for JS Confirm" }).click();


    // 3. JS Prompt
    page.once("dialog", async dialog => {

        console.log("Prompt:", dialog.message());

        await dialog.accept("Shaniya");

    });

    await page.getByRole("button", { name: "Click for JS Prompt" }).click();

});

