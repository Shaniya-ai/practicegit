import { test, expect } from '@playwright/test';
const Loginpage =require( '../tests/poms/loginpage');

test("page object model using login page", async function ({ page }) {

    const login = new Loginpage(page);

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.waitForTimeout(2000)
    await login.loginapplication();

    await page.pause()

});