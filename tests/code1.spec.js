import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  await page.locator('[data-test="about-sidebar-link"]').click();
  await page.getByRole('button', { name: 'Why SauceLabs' }).click();
  await page.getByRole('button', { name: 'Products' }).click();
  await page.getByRole('button', { name: 'Solutions' }).click();
  await page.getByRole('button', { name: 'Developers' }).click();
  await page.getByRole('button', { name: 'Resources' }).click();
  await page.locator('div').filter({ hasText: 'WHY SAUCELABSWhy SauceYour' }).nth(1).click();
  await page.locator("(//button[@type='button'])[1]").click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await page.goto('https://www.saucedemo.com/');
});