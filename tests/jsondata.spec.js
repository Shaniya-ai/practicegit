import{test,expect} from '@playwright/test'
const testdata=JSON.parse(JSON.stringify(require("../data.json")))

test("read the data from json file",async function({page})
{
 
    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill(testdata.address.area);

    await page.pause();
})