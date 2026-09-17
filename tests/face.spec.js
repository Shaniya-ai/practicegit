import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('link', { name: 'Create new account' }).click();
  await page.getByRole('textbox', { name: 'Name First name Surname' }).click();
  await page.getByRole('textbox', { name: 'Name First name Surname' }).fill('shaniya');
  await page.getByRole('textbox', { name: 'Surname', exact: true }).click();
  await page.getByRole('textbox', { name: 'Surname', exact: true }).fill('shnaiyashaniya');
  await page.getByLabel('Select day').locator('div').filter({ hasText: /^Day$/ }).click();
  await page.locator('div').filter({ hasText: /^1$/ }).nth(1).click();
  await page.getByLabel('Select month').locator('div').filter({ hasText: /^Month$/ }).click();
  await page.getByText('January').click();
  await page.getByLabel('Select year').locator('div').filter({ hasText: /^Year$/ }).click();
  await page.getByText('2026').click();
  await page.locator('div').filter({ hasText: /^Select your gender$/ }).nth(1).click();
  await page.getByText('Female').click();
  await page.locator('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.x1l7klhg > div > .xjhjgkd').first().click();
  await page.getByRole('textbox', { name: 'Mobile number or email' }).fill('1234567890');
  await page.getByRole('textbox', { name: 'Password Password' }).click();
  await page.getByRole('textbox', { name: 'Password Password' }).fill('eguyefuwgfuysgfuyyfyuu');
  await page.getByRole('textbox', { name: 'Mobile number or email' }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email' }).fill('12345678904');
});