test{test, expect}= require('@playwright/test');

test(' Hello world - Basic test'. async({page})=>{

    //Navigate to the URL
    await page.goto('https://app.thetestingacademy.com');
    // Verify the title of the page
    const title =await expect(page).toHaveTitle('The Testing Academy');
    console.log('Title of the page is: '+title);

    // Verify the URL of the page
    const url = await expect(page).toHaveURL('https://app.thetestingacademy.com');
    console.log('URL of the page is: '+url);
    // Verify the text of the content
    const content = await page.locator('div').filter({ hasText: 'SeleniumPlaywrightAI' }).nth(2).textContent();
    console.log('Content of the page is: '+content);

    await expect(page).toHaveContent("Example Domain");

    // Simple Assertion
    expect(title).tobeTruthy();
    console.log("PLAYWRIGHT is the best automation tool in the world")


 });