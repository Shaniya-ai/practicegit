import { test, expect } from '@playwright/test';

test('SauceDemo login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(2000);

  await page.locator('#user-name').fill('standard_user');
  await page.waitForTimeout(2000);
  await page.locator('#password').fill('secret_sauce');
  await page.waitForTimeout(2000);
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/\/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});
