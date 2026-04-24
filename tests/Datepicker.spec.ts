import { test, expect } from '@playwright/test';

test.only('Datepicker', async ({ page }) => {

  test.setTimeout(20000);

  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator('#datepicker').click();

  const year = "2026";
  const month = "June";
  const date = "4";

  while (true) {

    const currentMonth = await page.locator('.ui-datepicker-month').textContent();
    const currentYear = await page.locator('.ui-datepicker-year').textContent();

    if (currentYear == year && currentMonth == month) {
      break;
    }

    await page.locator('.ui-datepicker-next').click();
  }

  await page.locator("//a[text()='"+date+"')").click();

});


