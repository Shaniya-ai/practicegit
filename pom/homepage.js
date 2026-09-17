class HomePage
{
    constructor(page)
    {
        this.page = page;

        this.addtocart = page.getByRole("button", { name: "Add to Cart" }).first();
        this.menubar = page.locator("[alt='menu']");
        this.logoutopt = page.getByRole("button", { name: "Sign out" });
    }

    async logout()
    {
        await this.addtocart.click();

        await this.page.waitForTimeout(1000);

        await this.menubar.click();

        await this.page.waitForTimeout(1000);

        await this.logoutopt.click();

        await this.page.waitForTimeout(1000);
    }
}

module.exports = HomePage;