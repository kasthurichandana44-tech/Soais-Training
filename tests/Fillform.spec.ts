import { test, expect } from '@playwright/test';

test('Upload Download', async ({ page }) => {
  //test.setTimeout(12000);
  // Navigate to website
  await page.goto('https://demoqa.com/automation-practice-form/');

  // Enter Name
  await page.locator('#firstName').fill('Chandana');
  await page.locator('#lastName').fill('K');
  // Enter Email
  await page.locator('#userEmail').fill('chandanak@gmail.com');

  // Select Gender (Female)
  await page.locator('input[value="Female"]').check();
  await page.locator('#userNumber').fill('8978878789');
  await page.locator('#dateOfBirthInput').fill('23 Jan 2026');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');

  // Select Hobbies,Subject
  await page.locator('#subjectsInput').fill('Maths');
  await page.keyboard.press('Enter');
  // Close dropdown
await page.keyboard.press('Tab');
//Hobbies
  await page.locator('label[for="hobbies-checkbox-1"]').click();
  await expect(await page.locator('label[for="hobbies-checkbox-1"]')).toBeChecked();
  await page.locator('label[for="hobbies-checkbox-3"]').click();
  await expect(await page.locator('label[for="hobbies-checkbox-3"]')).toBeChecked();
  //Input files
await page.locator('#uploadPicture').setInputFiles(
  'C:/Users/SOAIS.DESKTOP-QOODOMD/Desktop/Playwright Training/tests/Free_Test_Data_100KB_PDF.pdf');
  // Verify filename is displayed on the page
  //await expect('#uploadPicture').toContain('Free_Test_Data_100KB_PDF.pdf');
   await page.locator('#currentAddress').fill('Bangalore');
 

  // Select State
  await page.locator('#state').scrollIntoViewIfNeeded();
  await page.locator('#state').click();
  await page.locator('#react-select-3-input').fill('NCR');
  await page.keyboard.press('Enter');

  // Select City
  await page.locator('#city').click();
  await page.locator('#react-select-4-input').fill('Delhi');
  await page.keyboard.press('Enter');

  // Verify selections
  await expect(page.locator('#state')).toContainText('NCR', { timeout: 10000 });
  await expect(page.locator('#city')).toContainText('Delhi', { timeout: 10000 });
  await page.locator('#submit').click();

  
});
