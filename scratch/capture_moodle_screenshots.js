const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outDir = "/home/andrevmp/Documentos/Moodle/next-moodle-tutorial/public/images";

async function delay(time) {
    return new Promise(function(resolve) { setTimeout(resolve, time) });
}

async function closeTour(page) {
    try {
        await page.evaluate(() => {
            const endTourBtn = document.querySelector('[data-role="end"]');
            if (endTourBtn) endTourBtn.click();
            const closeBtns = document.querySelectorAll('.modal .close, [data-dismiss="modal"], .modal-header .btn-close');
            closeBtns.forEach(b => b.click());
            const backdrops = document.querySelectorAll('.modal-backdrop');
            backdrops.forEach(b => b.remove());
        });
        await delay(1000);
    } catch (e) {}
}

(async () => {
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const browser = await puppeteer.launch({ 
        headless: true, 
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,800'],
        defaultViewport: { width: 1280, height: 800 }
    });
    
    try {
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(60000); 
        
        console.log("Navigating to login...");
        await page.goto('https://moodle.rasppi.cloud/login/index.php', { waitUntil: 'domcontentloaded' });
        
        console.log("Logging in as admin (who is also a teacher)...");
        await delay(1000);
        await page.type('#username', 'admin');
        await page.type('#password', 'admin');
        
        // Wait for navigation after click
        const navPromise = page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.click('#loginbtn');
        await navPromise;
        console.log("Logged in!");
        await delay(3000);
        await closeTour(page);

        const options = { waitUntil: 'domcontentloaded' };

        // a) moodle_dashboard.png
        console.log("Screenshotting Dashboard...");
        await page.goto('https://moodle.rasppi.cloud/my/', options);
        await delay(3000);
        await closeTour(page);
        await page.screenshot({ path: path.join(outDir, 'moodle_dashboard.png') });

        // b) moodle_course_edit.png
        console.log("Screenshotting Course Edit...");
        await page.goto('https://moodle.rasppi.cloud/course/view.php?id=2', options);
        await delay(3000);
        await closeTour(page);
        // Turn on edit mode
        try {
            await page.evaluate(() => {
                const form = document.querySelector('.editmode-switch-form');
                if(form) {
                    const toggle = form.querySelector('button, input[type="checkbox"]');
                    if (toggle) toggle.click();
                } else {
                    const btn = document.querySelector('input[name="setmode"]');
                    if (btn) btn.click();
                }
            });
            await delay(3000);
        } catch (e) {}
        await closeTour(page);
        await page.screenshot({ path: path.join(outDir, 'moodle_course_edit.png') });

        // c) moodle_gradebook.png
        console.log("Screenshotting Gradebook...");
        await page.goto('https://moodle.rasppi.cloud/grade/edit/tree/index.php?id=2', options);
        await delay(3000);
        await closeTour(page);
        await page.screenshot({ path: path.join(outDir, 'moodle_gradebook.png') });

        // d) moodle_question_bank.png
        console.log("Screenshotting Question Bank...");
        await page.goto('https://moodle.rasppi.cloud/question/edit.php?courseid=2', options);
        await delay(3000);
        await closeTour(page);
        await page.screenshot({ path: path.join(outDir, 'moodle_question_bank.png') });

        // e) moodle_competencies.png
        console.log("Screenshotting Competencies...");
        await page.goto('https://moodle.rasppi.cloud/admin/tool/lp/competencyframeworks.php', options);
        await delay(3000);
        await closeTour(page);
        await page.screenshot({ path: path.join(outDir, 'moodle_competencies.png') });

        // f) moodle_backup.png
        console.log("Screenshotting Backup...");
        await page.goto('https://moodle.rasppi.cloud/backup/backup.php?id=2', options);
        await delay(3000);
        await closeTour(page);
        await page.screenshot({ path: path.join(outDir, 'moodle_backup.png') });

        // g) moodle_report_builder.png
        console.log("Screenshotting Report Builder...");
        await page.goto('https://moodle.rasppi.cloud/reportbuilder/index.php', options);
        await delay(3000);
        await closeTour(page);
        await page.screenshot({ path: path.join(outDir, 'moodle_report_builder.png') });

        // Extra: cap03 and cap05 screenshots
        console.log("Screenshotting Extra: H5P Quiz...");
        await page.goto('https://moodle.rasppi.cloud/question/edit.php?courseid=2', options).catch(()=>{});
        await delay(3000);
        await closeTour(page);
        await page.screenshot({ path: path.join(outDir, 'moodle_h5p_quiz.png') });

        console.log("Screenshotting Extra: AI Providers...");
        await page.goto('https://moodle.rasppi.cloud/admin/settings.php?section=aiproviders', options).catch(()=>{});
        await delay(3000);
        await closeTour(page);
        await page.screenshot({ path: path.join(outDir, 'moodle_ai_providers.png') });

        console.log("All screenshots taken successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        await browser.close();
    }
})();
