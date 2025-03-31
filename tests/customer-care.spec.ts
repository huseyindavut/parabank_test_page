import { test, expect } from '@playwright/test';  // Import Playwright's test and assertion functions

test('Submit Customer Care form successfully', async ({ page }) => {   // Define a test case that checks if the Customer Care form submits successfully

  await page.goto('https://parabank.parasoft.com/parabank/index.htm', { waitUntil: 'networkidle' });    // Navigate to the Parabank homepage and wait until the network is idle
  const contactLink = page.getByRole('link', { name: 'Contact Us' });    // Find the "Contact Us" link by its accessible name
  
  await contactLink.click();   // Click the "Contact Us" link to open the contact form
  await page.fill('input[name="name"]', 'Test User');   // Fill in the name input field with "Test User"
  await page.fill('input[name="email"]', 'test@example.com');   // Fill in the email input field with a test email address
  await page.fill('input[name="phone"]', '1234567890');   // Fill in the phone input field with a dummy phone number
  await page.fill('textarea[name="message"]', 'This is a test message.');  // Fill in the message textarea with a sample message
  await page.click('input[value="Send to Customer Care"]');    // Click the submit button to send the form
  await expect(page.locator('#rightPanel')).toContainText('Thank you');    // Assert that the confirmation message contains the text "Thank you"
});
