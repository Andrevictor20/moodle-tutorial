const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://moodle.rasppi.cloud/login/index.php', { waitUntil: 'networkidle2' });
    await page.type('#username', 'admin');
    await page.type('#password', 'moodle');
    await page.click('#loginbtn');
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    console.log(await page.title());
    await browser.close();
})();
