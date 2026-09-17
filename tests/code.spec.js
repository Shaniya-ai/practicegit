import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sause');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('svg').first().click();
  await page.locator('svg').first().click();
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('path').nth(1).click();
  await page.goto('https://www.saucedemo.com/inventory.html');
});