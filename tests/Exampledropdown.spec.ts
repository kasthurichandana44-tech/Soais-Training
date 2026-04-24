
import { test, expect } from '@playwright/test';

test.only('Login to Sauce demo', async ({ page }) => {

    test.setTimeout(12000);

  await page.goto("https://www.saucedemo.com/");

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();


  await page.locator('.product_sort_container').selectOption('Price (low to high)');

})
