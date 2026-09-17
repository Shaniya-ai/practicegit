import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
});

test("Login Test", async ({ page }) => {
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
});

test("Check Login Page", async ({ page }) => {
    await expect(page.locator("#user-name")).toBeVisible();
});