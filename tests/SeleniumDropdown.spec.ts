import { test, expect } from '@playwright/test';

test.only('dropdown', async ({ page }) => {

    test.setTimeout(12000);
    await page.goto("https://www.tutorialspoint.com/selenium/practice/select-menu.php");
    
   page.setDefaultNavigationTimeout(6000);
   
   await page.locator('#inputGroupSelect03').selectOption('Dr.');//Visible Text(value)
   await page.locator('#inputGroupSelect03').selectOption({label:'Dr.'});//Label
   await page.locator('#inputGroupSelect03').selectOption({index:0});//Index
   
await page.waitForTimeout(3000);
//assertion
await expect(page.locator('#inputGroupSelect03')).toHaveValue('1');
});