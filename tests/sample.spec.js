const { test, expect } = require('@playwright/test');

test('OrangeHRM Login', async ({ page }) => {

    // Open OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // console.log(await page.viewportSize().width);
    // console.log(await page.viewportSize().height);
    // Enter Username
    await page.getByPlaceholder('Username').fill('Adminhuyguyguygyu');
    await page.waitForTimeout(2000);

    // Enter Password
    await page.getByPlaceholder('Password').fill('auyfuygiuhiuahskuhsiuh');
     await page.waitForTimeout(2000);

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click();
   //  await page.waitForTimeout(2000);

    // Verify successful login
    // await expect(page).toHaveURL(/dashboard/);

    // // Verify Dashboard is displayed
    // await expect(
    //     page.getByRole('heading', { name: 'Dashboard' })
    // ).toBeVisible();
});