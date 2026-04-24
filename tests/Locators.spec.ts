import { test, expect } from '@playwright/test';

test.only('Locators', async ({ page }) => {

    test.setTimeout(12000);
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
   page.setDefaultNavigationTimeout(6000);

   //1.ID-unique
   const firstname = page.locator('id=input-firstname');
   const lastname = page.locator('#input-lastname');
   
   await firstname.fill('Chandana');
   await lastname.fill('Kasthuri');

   //2.Class
   const Continue = page.locator('.btn.btn-primary');
   const ContinueExist = await Continue.isEnabled();
   console.log(ContinueExist);
   expect(ContinueExist).toBeTruthy();

   //3.Text
   const header = page.locator('text= Register Account');
   expect (await header.isVisible()).toBeTruthy();
   console.log(await header.isVisible());

   const  continueBtn = page.locator('text= Continue');
   const continueEnable = await continueBtn.isEnabled();
   console.log('continueEnable');

   //4.CSSLocator
   const Email = page.locator('input#input-email'); //ID
   const Telephone = page.locator('input#input-telephone') 
   const checkbox = page.locator('input[type="checkbox"]');//placeholder,text,value

   await Email.fill('chandanak4@gmail.com');
   await Telephone.fill('8978878001');
   await checkbox.click();

   //5.X-path
   const password = page.locator('//input[@id="input-password"]');
   await password.fill('Soais@123');

})

   

