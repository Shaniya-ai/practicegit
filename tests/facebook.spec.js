import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('link', { name: 'Create new account' }).click();
  await page.getByRole('textbox', { name: 'Name First name Surname' }).click();
  await page.getByRole('textbox', { name: 'Name First name Surname' }).fill('shaniya');
  await page.getByRole('textbox', { name: 'Surname', exact: true }).click();
  await page.getByRole('textbox', { name: 'Surname', exact: true }).fill('shaniya shaniya');
  await page.getByLabel('Select day').locator('div').filter({ hasText: /^Day$/ }).click();
  await page.getByText('1', { exact: true }).click();
  await page.getByLabel('Select month').locator('div').filter({ hasText: /^Month$/ }).click();
  await page.getByText('January').click();
  await page.getByLabel('Select year').locator('div').filter({ hasText: /^Year$/ }).click();
  await page.getByText('2019').click();
  await page.locator('div').filter({ hasText: /^Select your gender$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Female$/ }).nth(1).click();
  await page.getByRole('textbox', { name: 'Mobile number or email' }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email' }).fill('1234567890');
  await page.getByRole('textbox', { name: 'Password Password' }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email' }).fill('1234567890g');
  await page.getByRole('textbox', { name: 'Password Password' }).fill('ysgsjhfwidfgsyidgf');
  await page.getByRole('textbox', { name: 'Mobile number or email' }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email' }).fill('1234567890');
});