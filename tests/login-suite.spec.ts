import { test, expect } from '@playwright/test';
// Import Playwright's test and assertion functions

const username = 'testuser2025';
const password = 'Test1234';
// Define login credentials to be reused in all tests

test('User should be able to log in successfully', async ({ page }) => {
// Test case to verify successful user login

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  // Navigate to the Parabank login page

  await page.fill('input[name="username"]', username);
  // Fill in the username input with the test username

  await page.fill('input[name="password"]', password);
  // Fill in the password input with the test password

  await page.click('input[value="Log In"]');
  // Click the login button

  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  // Assert that the "Accounts Overview" heading is visible after login
});

test('User should be able to view account summary', async ({ page }) => {
// Test case to verify if the user can view the account summary table after logging in

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  // Navigate to the login page again

  await page.fill('input[name="username"]', username);
  // Enter username

  await page.fill('input[name="password"]', password);
  // Enter password

  await page.click('input[value="Log In"]');
  // Submit the login form

  await expect(page.locator('#accountTable')).toBeVisible();
  // Assert that the account table is visible (account summary is shown)
});

test('User should be able to view Transfer Funds form', async ({ page }) => {
// Test case to verify if the user can access the "Transfer Funds" form

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  // Go to the login page

  await page.fill('input[name="username"]', username);
  // Fill in the username

  await page.fill('input[name="password"]', password);
  // Fill in the password

  await page.click('input[value="Log In"]');
  // Click login

  await page.click('a[href="transfer.htm"]');
  // Click the "Transfer Funds" link

  await expect(page.getByRole('heading', { name: 'Transfer Funds' })).toBeVisible();
  // Assert that the "Transfer Funds" heading is visible on the page
});
