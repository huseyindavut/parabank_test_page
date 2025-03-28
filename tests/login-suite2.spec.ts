import { test, expect } from '@playwright/test';

const username = 'testuser2025';
const password = 'Test1234';

test.beforeEach(async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('input[value="Log In"]');
});

test.afterEach(async ({ page }) => {
  const logoutLink = page.locator('a[href="/parabank/logout.htm"]');
  if (await logoutLink.isVisible()) {
    await logoutLink.click();
  }
});

test('User should be able to log in successfully', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
});

test('User should be able to view account summary', async ({ page }) => {
  await expect(page.locator('#accountTable')).toBeVisible();
});

test('User should be able to view Transfer Funds form', async ({ page }) => {
  await page.click('a[href="transfer.htm"]');
  await expect(page.getByRole('heading', { name: 'Transfer Funds' })).toBeVisible();
});
