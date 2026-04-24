import { test, expect } from '@playwright/test';

test('Video recording', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Assertion
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

   const video = await page.video();
  const path = await video?.path();

  console.log('Video path:', path);
});