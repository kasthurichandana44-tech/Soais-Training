import { test, expect } from '@playwright/test';


test('Links Page', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/links.php');

  // Task 1 - Created
  await page.getByRole('link', { name: 'Created' }).click();

  const response = page.locator('#linkResponse');

  await expect(response).toContainText('201');
  await expect(response).toContainText('Created');

  // Task 2 - Bad Request
  await page.getByText('Bad').click();

  await expect(response).toContainText('400');
  await expect(response).toContainText('Bad Request');

  // Task 3 - Count links
  const count = await page.locator('a').count();
  console.log('Total links:', count);
});
