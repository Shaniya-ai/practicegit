import { test, expect } from '@playwright/test';

test('SauceDemo login success', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const credentialsText = await page.locator('.login_credentials').textContent();
  const passwordText = await page.locator('.login_password').textContent();

  const username = credentialsText?.match(/standard_user|locked_out_user|problem_user|performance_glitch_user|error_user|visual_user/)?.[0] ?? 'standard_user';
  const password = passwordText?.replace(/Password for all users:/i, '').trim() ?? 'secret_sauce';

  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/.*inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});
