import { test, expect } from "./fixtures/fixtures.js";

import{
    enterLoginDetails,
    clickLoginButton
} from "../tests/helpers/helpers.js";


test("SauceDemo Login Test", async ({ loginPage }) => {

    await enterLoginDetails(
        loginPage,
        "standard_user",
        "secret_sauce"
    );

    await clickLoginButton(loginPage);

    await expect(loginPage).toHaveURL(
        /inventory\.html/
    );

});