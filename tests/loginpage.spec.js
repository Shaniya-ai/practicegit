import { test, expect } from '@playwright/test';

const Loginpage = require('../pom/loginPage');
const Homepage = require('../pom/homepage');

test("login page", async function ({ page }) {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const loginPage = new Loginpage(page);

    await loginPage.loginToApplication();

    const homePage = new Homepage(page);

    await homePage.logout();

    await page.close();
});