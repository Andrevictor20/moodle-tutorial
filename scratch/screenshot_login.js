const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://moodle.rasppi.cloud/login/index.php', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'scratch/login_page.png' });
    
    // Check if there are values in username/password
    const userVal = await page.$eval('#username', el => el.value).catch(()=>'');
    const passVal = await page.$eval('#password', el => el.value).catch(()=>'');
    console.log(`Username field: ${userVal}`);
    console.log(`Password field: ${passVal}`);
    
    await browser.close();
})();
