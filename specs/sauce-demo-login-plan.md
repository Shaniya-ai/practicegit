# SauceDemo Login Test Plan

## Application Overview

Validate the standard SauceDemo login flow and confirm that successful authentication lands on the Products page with the expected URL and heading.

## Test Scenarios

### 1. SauceDemo login flow

**Seed:** `tests/saucedemonew-login.spec.ts`

#### 1.1. Successful login reaches the Products page

**File:** `specs/sauce-demo-login-plan.md`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser context.
    - expect: The login page loads and the login form is visible. The page title is Swag Labs.
  2. Locate the username field with #user-name and enter the valid username standard_user.
    - expect: The username input contains the value standard_user.
  3. Locate the password field with #password and enter the valid password secret_sauce.
    - expect: The password input contains the value secret_sauce.
  4. Click the Login button using #login-button.
    - expect: The browser navigates to the inventory/products screen without any validation error.
  5. Verify the Products page is displayed.
    - expect: The page heading text is Products, typically identified by .title.
  6. Verify the URL after login.
    - expect: The current URL contains /inventory.html.
