import {test,expect, chromium}from '@playwright/test'
test('Pdf generation',async({page})=>{
    //launch the browser
    const browser=await chromium.launch();
    //navigate the website
    await page.goto("https://www.saucedemo.com/");
//     //generate the pdf
//     const filePath = 'output.pdf';
//   await page.pdf({path: filePath,format: 'A4'});
 
    //save the Pdf file
    const a=await page.pdf({path:'saucedemo.pdf'})
    if(a)
    {
        console.log("pdf is created")
    }else{
        console.log("pdf is not created")
    }
    await browser.close();
 
})
 