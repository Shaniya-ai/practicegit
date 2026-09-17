import { test, expect } from '@playwright/test';

test("working with multiple tabs", async function ({ browser }) {

    const context = await browser.newContext();

    // Tab 1
    const page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // Open Tab 2
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("(//a[@target='_blank'])[4]").click()
    ]);

    // Tab 2-ൽ email enter ചെയ്യുന്നു
    await newPage.locator("(//input[@name='email'])[2]")
        .fill("shaniya@gmail.com");

    // Tab 2 close ചെയ്യുന്നു
    await newPage.close();

    // Tab 1-ലേക്ക് തിരിച്ച് വന്ന് action ചെയ്യുന്നു
    await page.getByPlaceholder("Enter Email").fill("shaniya@gmail.com");
});