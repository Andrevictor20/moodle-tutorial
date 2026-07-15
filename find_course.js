const puppeteer = require('puppeteer');

async function getCourseUrl() {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://sandbox.moodledemo.net/login/index.php', { waitUntil: 'domcontentloaded' });
    await page.type('#username', 'admin');
    await page.type('#password', 'sandbox');
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
        page.click('#loginbtn')
    ]);
    
    // go to courses page
    await page.goto('https://sandbox.moodledemo.net/my/courses.php', { waitUntil: 'domcontentloaded' });
    
    // find a course link
    const courseUrl = await page.evaluate(() => {
        const link = document.querySelector('a[href*="/course/view.php?id="]');
        return link ? link.href : null;
    });
    
    console.log("COURSE_URL=" + courseUrl);
    await browser.close();
}

getCourseUrl();
