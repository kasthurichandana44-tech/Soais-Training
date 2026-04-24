
import { test, expect } from '@playwright/test';

test('Tracing', async ({ page }) => {
  
  
    test.setTimeout(12000);
  await page.goto('https://www.saucedemo.com/');
  page.setDefaultNavigationTimeout(6000);

  // Login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Add first item to cart
  await page.locator('.inventory_item button').first().click();

  // Verify item count in cart
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});