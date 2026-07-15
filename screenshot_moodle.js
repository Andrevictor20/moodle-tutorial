const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outDir = "/home/andrevmp/Documentos/Moodle/next-moodle-tutorial/public/images";

async function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

(async () => {
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    const browser = await puppeteer.launch({ 
        headless: true, 
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,800'] 
    });
    
    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        
        console.log("Navigating to login...");
        await page.goto('https://sandbox.moodledemo.net/login/index.php', { waitUntil: 'networkidle2' });
        
        console.log("Logging in as admin...");
        await page.type('#username', 'admin');
        await page.type('#password', 'sandbox');
        await page.click('#loginbtn');
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        
        console.log("Logged in!");

        // 1. Dashboard
        console.log("Screenshotting Dashboard...");
        await page.goto('https://sandbox.moodledemo.net/my/', { waitUntil: 'networkidle2' });
        await delay(1000);
        await page.screenshot({ path: path.join(outDir, 'moodle_dashboard.png') });

        // 2. Question Bank
        console.log("Screenshotting Question Bank...");
        await page.goto('https://sandbox.moodledemo.net/question/edit.php?courseid=2', { waitUntil: 'networkidle2' });
        await delay(1000);
        await page.screenshot({ path: path.join(outDir, 'moodle_question_bank.png') });

        // 3. Backup
        console.log("Screenshotting Backup...");
        await page.goto('https://sandbox.moodledemo.net/backup/backup.php?id=2', { waitUntil: 'networkidle2' });
        await delay(1000);
        await page.screenshot({ path: path.join(outDir, 'moodle_backup.png') });

        // 4. Report Builder
        console.log("Screenshotting Report Builder...");
        await page.goto('https://sandbox.moodledemo.net/reportbuilder/index.php', { waitUntil: 'networkidle2' });
        await delay(1000);
        await page.screenshot({ path: path.join(outDir, 'moodle_report_builder.png') });

        // 5. Competencies
        console.log("Screenshotting Competencies...");
        await page.goto('https://sandbox.moodledemo.net/admin/tool/lp/competencyframeworks.php', { waitUntil: 'networkidle2' });
        await delay(1000);
        await page.screenshot({ path: path.join(outDir, 'moodle_competencies.png') });

        // 6. Gradebook
        console.log("Screenshotting Gradebook...");
        await page.goto('https://sandbox.moodledemo.net/grade/report/grader/index.php?id=2', { waitUntil: 'networkidle2' });
        await delay(1000);
        await page.screenshot({ path: path.join(outDir, 'moodle_gradebook.png') });

        // 7. Course Edit
        console.log("Screenshotting Course Edit...");
        await page.goto('https://sandbox.moodledemo.net/course/view.php?id=2', { waitUntil: 'networkidle2' });
        await delay(1000);
        
        // Turn on edit mode if there is a button
        try {
            const editBtn = await page.$('input[name="setmode"]');
            if(editBtn) await editBtn.click();
            await delay(2000);
        } catch (e) {
            // maybe it's a toggle in moodle 4+
            try {
                await page.evaluate(() => {
                    const toggle = document.querySelector('.editmode-switch-form button');
                    if(toggle) toggle.click();
                });
                await delay(2000);
            } catch(e2) {}
        }
        await page.screenshot({ path: path.join(outDir, 'moodle_course_edit.png') });
        
        console.log("All screenshots taken successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        await browser.close();
    }
})();
