import{test,expect} from '@playwright/test';

test(" frame handling",async function({page})
{

    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    const iframe=await page.frameLocator("[name='packageListFrame']");

    await iframe.locator("(//a[@target='packageFrame'])[7]").click();

    await page.pause();

})