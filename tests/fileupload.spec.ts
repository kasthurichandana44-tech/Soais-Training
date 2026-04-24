import { test, expect } from '@playwright/test';

test.only('fileupload', async ({ page }) => {

    test.setTimeout(12000);
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
   page.setDefaultNavigationTimeout(6000);
//page.locator('//input[@id="filesToUpload"]').setInputFiles('C:/Users/SOAIS.DESKTOP-QOODOMD/Desktop/Playwright Training/tests/Free_Test_Data_100KB_PDF.pdf');
 

 page.locator('//input[@id="filesToUpload"]').setInputFiles(['C:/Users/SOAIS.DESKTOP-QOODOMD/Desktop/Playwright Training/tests/Free_Test_Data_100KB_PDF.pdf',
  'C:/Users/SOAIS.DESKTOP-QOODOMD/Desktop/Playwright Training/tests/Sample File.pdf'])

 await page.waitForTimeout(3000);
})