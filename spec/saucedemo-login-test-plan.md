# SauceDemo Login Test Plan

## Application Overview

SauceDemo login functionality test plan covering valid login, validation errors, locked-out user handling, and protected-page access on a fresh browser session.

## Test Scenarios

### 1. SauceDemo Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with valid standard user

**File:** `tests/saucedemo-login/successful-login.spec.ts`

**Steps:**
  1. Open the SauceDemo login page on a fresh browser session.
    - expect: The page displays the username field, password field, and login button.
  2. Enter a valid username, such as standard_user, and password secret_sauce.
    - expect: The form accepts the entered values without showing any validation message.
  3. Click the Login button.
    - expect: The browser navigates to the inventory page.
    - expect: The page shows the products catalog or inventory list.
    - expect: The current URL includes /inventory.html.

#### 1.2. Successful login for alternate valid user

**File:** `tests/saucedemo-login/alternate-user-login.spec.ts`

**Steps:**
  1. Open SauceDemo on a fresh session.
    - expect: The login screen is visible and empty by default.
  2. Log in with a different valid user, such as problem_user or visual_user, and the common password secret_sauce.
    - expect: Login completes successfully for that user.
  3. Observe the resulting inventory page.
    - expect: The products page loads without a login error.
    - expect: The app behaves normally for the alternate user role and session.

#### 1.3. Blank username and password submission

**File:** `tests/saucedemo-login/blank-fields-validation.spec.ts`

**Steps:**
  1. Launch the SauceDemo login page from a clean state.
    - expect: The fields are empty.
  2. Click the Login button without entering any username or password.
    - expect: An error message is displayed.
    - expect: The user remains on the login page.
    - expect: The app does not navigate to the inventory page.
  3. Check the error copy and styling.
    - expect: The error clearly indicates that the username and password are required or missing.

#### 1.4. Empty password validation

**File:** `tests/saucedemo-login/empty-password-validation.spec.ts`

**Steps:**
  1. Open the login screen on a fresh session.
    - expect: The username and password fields are visible.
  2. Enter a valid username such as standard_user and leave the password field empty.
    - expect: The password is blank in the form.
  3. Click Login.
    - expect: A validation error appears indicating a password is required.
    - expect: The user stays on the login page.

#### 1.5. Empty username validation

**File:** `tests/saucedemo-login/empty-username-validation.spec.ts`

**Steps:**
  1. Open the login screen from a fresh state.
    - expect: The page loads without any existing session.
  2. Leave the username empty, enter a valid password secret_sauce, and click Login.
    - expect: The user sees a required-username validation message.
    - expect: No navigation to the inventory page occurs.

#### 1.6. Invalid credentials do not grant access

**File:** `tests/saucedemo-login/invalid-credentials.spec.ts`

**Steps:**
  1. Open the SauceDemo login page.
    - expect: The login form is visible.
  2. Enter a username that does not exist, such as wrong_user, paired with an incorrect password, such as wrong_pass.
    - expect: The entered values are accepted by the field controls.
  3. Click Login.
    - expect: A login error message is displayed.
    - expect: The page remains on the login screen.
    - expect: The error states that the username and password do not match any user in the service.

#### 1.7. Locked-out user is rejected

**File:** `tests/saucedemo-login/locked-user.spec.ts`

**Steps:**
  1. Open the login page on a fresh session.
    - expect: The app is in a clean state.
  2. Enter the locked_out_user username and the valid password secret_sauce.
    - expect: The inputs are accepted without special formatting issues.
  3. Click Login.
    - expect: An error message informs the user that the account is locked out.
    - expect: The user is not redirected to the inventory page.

#### 1.8. Protected inventory page requires authentication

**File:** `tests/saucedemo-login/protected-page-access.spec.ts`

**Steps:**
  1. Open a new browser session and navigate directly to the inventory URL, for example /inventory.html.
    - expect: The application redirects the user back to the login page or blocks access.
  2. Verify the user is not allowed to view product content before authentication.
    - expect: No inventory items are visible.
    - expect: The user remains unauthenticated.
