import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage.ts';
import data from "../testData/login.json"

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(data.username, data.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


});


