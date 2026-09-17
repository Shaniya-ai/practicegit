const {test,expect}=require('@playwright/test');
test("checks the registration page",async function ({page}) {
    


    await page.goto("file:///C:/Users/hp/Downloads/registration.html");
    // Textboxes
await page.getByLabel('First Name').fill('Rahul');
await page.getByLabel('Last Name').fill('Kumar');
await page.getByLabel('Email').fill('rahul@gmail.com');
await page.getByLabel('Password').fill('Rahul@123');
await page.getByLabel('Phone Number').fill('9876543210');

// Radio Button
await page.getByLabel('Female').check();

// Checkboxess
//await page.getByLabel('Reading').check();
await page.locator('#sports').check();
//await page.getByLabel('Music').check();

// Date
await page.getByLabel('Date of Birth').fill('2002-05-15');

// Textarea
await page.getByLabel('Address').fill('Kochi, Kerala');

// Button
await page.getByRole('button').click();

// Assertion
await expect(page.locator('#message'))
    .toHaveText('Student Registration Successful!');

    
    
})