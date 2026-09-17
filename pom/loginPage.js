class Loginpage
{
    constructor(page)
    {
        this.page=page;
        this.username="#email1"
        this.password="#password1"
        this.loginbutton="[type='submit']"
    }

    async loginToApplication()
    {
        await this.page.fill(this.username,"kukku123@gmail.com")
        await this.page.fill(this.password,"1234567890")
        await this.page.click(this.loginbutton)
    }
}

module.exports=Loginpage;