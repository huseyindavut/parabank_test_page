import { test, expect } from '@playwright/test';  // Import Playwright's test and assertion tools

const username = 'testuser2025';  // Define reusable test username
const password = 'Test1234';  // Define reusable test password

test.beforeEach(async ({ page }) => {  // Hook that runs before each test — sets up login process
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');  // Navigate to the Parabank login page
  await page.fill('input[name="username"]', username);  // Enter the username in the login form
  await page.fill('input[name="password"]', password);  // Enter the password in the login form
  await page.click('input[value="Log In"]');  // Submit the login form
});

test.afterEach(async ({ page }) => {  // Hook that runs after each test — logs the user out if possible
  const logoutLink = page.locator('a[href="/parabank/logout.htm"]');  // Select the logout link
  if (await logoutLink.isVisible()) {  // If the logout link is visible...
    await logoutLink.click();  // ...then click it to log out
  }
});

test('User should be able to log in successfully', async ({ page }) => {  // Test to verify login was successful
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();  // Expect the "Accounts Overview" heading to be visible
});

test('User should be able to view account summary', async ({ page }) => {  // Test to verify user can see account summary
  await expect(page.locator('#accountTable')).toBeVisible();  // Expect the account summary table to be visible
});

test('User should be able to view Transfer Funds form', async ({ page }) => {  // Test to verify user can access the Transfer Funds page
  await page.click('a[href="transfer.htm"]');  // Click the "Transfer Funds" link
  await expect(page.getByRole('heading', { name: 'Transfer Funds' })).toBeVisible();  // Expect the "Transfer Funds" heading to be visible
});
