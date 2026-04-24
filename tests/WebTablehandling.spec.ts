import {test,expect}from '@playwright/test'
test('webtables',async({page})=>{
    await page.waitForTimeout(3000);
    //navigate the website
    await page.goto("https://www.tutorialspoint.com/selenium/practice/webtables.php");
    //identify the table
    const table=page.locator('[class="table table-striped mt-3"]');
    //verify the table headers
    const tableheader = table.locator('thead tr th');
    const Theaders = ['First Name','Last Name','Age','Email','Salary','Department','Action'];
    await expect(tableheader).toHaveCount(Theaders.length);
    for (let i = 0; i < Theaders.length; i++) {
    await expect(tableheader.nth(i)).toHaveText(Theaders[i]);
   
  }
  //fetch and print all the rows and columns
  const rows=table.locator('tbody tr')
  const rowCount = await rows.count();
 for(let i=0;i<rowCount;i++){
    const cols = rows.nth(i).locator('td');
    const colCount = await cols.count();
    let rowData: string[] = [];
    for (let j = 0; j < colCount; j++){
        //await cols.nth(j).innerText()
        rowData.push(await cols.nth(j).innerText());
  }
 
  console.log(`Row ${i + 1}:`, rowData);
    }
 //count total:no of rows and columns
 console.log('Total Rows:', rowCount);
  const colCount = await tableheader.count();
  console.log('Total Columns:', colCount);
  //validate specific record exists
  await expect(table).toContainText('Cierra Vega')
 
//fetch the specific row
for (let i = 0; i < rowCount; i++) {
    const row = rows.nth(i);
 
    const firstName = await row.locator('td').nth(0).innerText();
    const lastName = await row.locator('td').nth(1).innerText();
 
    if (firstName === 'Alden' && lastName === 'Cantrell') {
      const salary = await row.locator('td').nth(4).innerText();
      console.log('Alden Salary:', salary);
    }
  }
  //verify duplicate records
  const allRows: string[] = [];
 
  for (let i = 0; i < rowCount; i++) {
    const text = await rows.nth(i).innerText();
    allRows.push(text);
  }
 
  const duplicates = allRows.filter((item, index) => allRows.indexOf(item) !== index);
  console.log('Duplicate Rows:', duplicates);
  //add new record
  await page.click('button:has-text("Add")');
 
  await page.fill('#firstname', 'John');
  await page.fill('#lastname', 'Doe');
  await page.fill('#age', '30');
  await page.fill('#email', 'john@example.com');
  await page.fill('#salary', '50000');
  await page.fill('#deparment', 'IT');
 
  await page.click('input[type="submit"]');
   // Verify new record
  await expect(table).toContainText('John');
})
 