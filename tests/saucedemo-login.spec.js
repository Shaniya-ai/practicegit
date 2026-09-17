import { test, expect } from '@playwright/test';

test('SauceDemo login success', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user123456');
  await page.locator('#password').fill('secret_sauce123');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/.*inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});
