import { test, expect } from '@playwright/test';

test.only('Keyboard', async ({ page }) => {

    test.setTimeout(12000);
    await page.goto("https://gotranscript.com/text-compare");

   page.setDefaultNavigationTimeout(6000);
   await page.locator('//textarea[@name="text1"]').fill('Automation Training');
   // Control+A 
   await page.keyboard.press('Control+A');
   //Control+C
   await page.keyboard.press('Control+C');
   //Tab to move between fields
   await page.keyboard.down('Tab');
   await page.keyboard.up('Tab');

   //Control+V to Paste
   await page.keyboard.press('Control+V');
   await page.waitForTimeout(2000);
   //Backspace
   await page.keyboard.press('Backspace');
   //Delete
   await page.keyboard.press('Control+A');
   await page.keyboard.press('Delete');
   await page.waitForTimeout(2000);

   await expect(page.locator('//textarea[@name="text1"]')).toHaveValue('Automation Training');


})

