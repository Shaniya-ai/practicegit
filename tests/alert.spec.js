import{test,expect} from '@playwright/test';

test("alert popup handling",async ({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //1.JS Alert

    page.once("dialog",async dialog =>
    {

        console.log("Alert:", dialog.message())

        await dialog.accept();
    });

    await page.waitForTimeout(2000);

    await page.getByRole("button", {name:"Click for JS Alert"}).click();
});