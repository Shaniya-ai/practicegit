export async function enterLoginDetails(page, username, password) {

    await page.locator("#user-name").fill(username);

    await page.locator("#password").fill(password);
}

export async function clickLoginButton(page) {

    await page.locator("#login-button").click();
}