import { test, expect } from '@playwright/test';

test('Submit Customer Care form successfully', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm', { waitUntil: 'networkidle' });

  const contactLink = page.getByRole('link', { name: 'Contact Us' });
  await contactLink.click();

  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="phone"]', '1234567890');
  await page.fill('textarea[name="message"]', 'This is a test message.');

  await page.click('input[value="Send to Customer Care"]');
  await expect(page.locator('#rightPanel')).toContainText('Thank you');
});
