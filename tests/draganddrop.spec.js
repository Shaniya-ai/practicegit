import {test,expect} from '@playwright/test';

test("drag and drop action",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

    await page.waitForTimeout(2000);

    await page.locator("[id='column-a']").dragTo(await page.locator("[id='column-b']"));

        await page.waitForTimeout(2000);

})
