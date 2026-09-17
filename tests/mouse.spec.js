import{test,expect} from '@playwright/test';

test('mouse hover action',async function ({page})
{


await page.goto("https://www.amazon.in/");

await page.waitForTimeout(2000);

await page.locator("#icp-nav-flyout").hover();

await page.waitForTimeout(2000);

await page.locator("(//span[@dir='ltr'])[4]").click();


await page.waitForTimeout(2000);

await page.close();
});