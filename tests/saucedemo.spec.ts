import { test, expect } from '@playwright/test';

test.only('Login to Sauce demo', async ({ page }) => {

    test.setTimeout(12000);

  await page.goto("https://www.saucedemo.com/");
   page.setDefaultNavigationTimeout(6000); //Implicit

  await page.waitForTimeout(3000); //Explicit
  await expect(page).toHaveTitle('Swag Labs');

  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');

  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');

  //await page.getByText('Password').fill('secret_sauce');

  await page.getByRole('button',{name: 'Login'}).click();

  const productText = page.locator("//span[@class='title']").textContent();
  console.log(productText);
  expect(productText).toBeTruthy();


})


