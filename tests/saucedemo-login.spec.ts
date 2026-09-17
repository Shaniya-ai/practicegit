import { test, expect } from '@playwright/test';

test.describe('SauceDemo login flow', () => {
  test('Successful login reaches the Products page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page).toHaveURL(/\/inventory\.html/);
  });
});
