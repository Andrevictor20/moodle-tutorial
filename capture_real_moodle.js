const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outDir = "/home/andrevmp/Documentos/Moodle/next-moodle-tutorial/public/images";
const url = 'https://moodle.rasppi.cloud';

async function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function capture(page, filename) {
    console.log(`[+] Taking screenshot: ${filename}`);
    await page.screenshot({ path: path.join(outDir, filename) });
}

(async () => {
    console.log("Starting Moodle Capture Script...");
    const browser = await puppeteer.launch({ 
        headless: true, 
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'] 
    });
    
    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
        
        console.log("-> Navigating to login...");
        await page.goto(`${url}/login/index.php`, { waitUntil: 'networkidle2' });
        
        console.log("-> Logging in as admin...");
        await page.type('#username', 'admin');
        await page.type('#password', 'admin');
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
            page.click('#loginbtn')
        ]);
        
        console.log("-> Logged in! Taking Dashboard screenshot...");
        await delay(2000);
        await capture(page, 'moodle_dashboard.png');

        console.log("-> Creating test course...");
        await page.goto(`${url}/course/edit.php?category=1`, { waitUntil: 'networkidle2' });
        await page.type('#id_fullname', 'TESTE-TUTORIAL-DELETAR');
        await page.type('#id_shortname', 'TESTE-TUTORIAL');
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
            page.click('#id_saveanddisplay')
        ]);
        
        const currentUrl = page.url();
        const courseIdMatch = currentUrl.match(/id=(\d+)/);
        if (!courseIdMatch) throw new Error("Could not find course ID in URL: " + currentUrl);
        const courseId = courseIdMatch[1];
        console.log(`-> Course created with ID: ${courseId}`);
        
        console.log("-> Turning on Edit mode...");
        try {
            await page.evaluate(() => {
                const editSwitch = document.querySelector('input[name="setmode"]');
                if (editSwitch) editSwitch.click();
            });
            await delay(2000);
        } catch (e) { console.log("Edit mode toggle failed or already on."); }
        await capture(page, 'moodle_course_edit.png');

        console.log("-> Navigating to Gradebook setup...");
        await page.goto(`${url}/grade/edit/tree/index.php?id=${courseId}`, { waitUntil: 'networkidle2' });
        await delay(2000);
        await capture(page, 'moodle_gradebook.png');

        console.log("-> Navigating to Question Bank...");
        await page.goto(`${url}/question/edit.php?courseid=${courseId}`, { waitUntil: 'networkidle2' });
        await delay(2000);
        await capture(page, 'moodle_question_bank.png');
        
        console.log("-> Navigating to Backup Wizard...");
        await page.goto(`${url}/backup/backup.php?id=${courseId}`, { waitUntil: 'networkidle2' });
        await delay(2000);
        await capture(page, 'moodle_backup.png');
        
        console.log("-> Navigating to Quiz Config...");
        await page.goto(`${url}/course/modedit.php?add=quiz&type=&course=${courseId}&section=1&return=0&sr=0`, { waitUntil: 'networkidle2' });
        await delay(2000);
        await capture(page, 'moodle_quiz_config.png');
        
        console.log("-> Navigating to Badge Create...");
        await page.goto(`${url}/badges/newbadge.php?type=2&id=${courseId}`, { waitUntil: 'networkidle2' });
        await delay(2000);
        await capture(page, 'moodle_badge_create.png');
        
        console.log("-> Navigating to H5P Activity Config...");
        await page.goto(`${url}/course/modedit.php?add=h5pactivity&type=&course=${courseId}&section=1&return=0&sr=0`, { waitUntil: 'networkidle2' });
        await delay(2000);
        await capture(page, 'moodle_h5p_quiz.png');

        console.log("-> Navigating to AI Providers...");
        await page.goto(`${url}/admin/search.php?query=ai`, { waitUntil: 'networkidle2' });
        await delay(2000);
        await capture(page, 'moodle_ai_providers.png');

        console.log("-> Navigating to Competencies...");
        await page.goto(`${url}/admin/tool/lp/competencyframeworks.php`, { waitUntil: 'networkidle2' });
        await delay(2000);
        await capture(page, 'moodle_competencies.png');
        
        console.log("-> Navigating to Learning Plans...");
        await page.goto(`${url}/admin/tool/lp/plans.php`, { waitUntil: 'networkidle2' });
        await delay(2000);
        await capture(page, 'moodle_learning_plan.png');

        console.log("-> Navigating to Report Builder...");
        await page.goto(`${url}/reportbuilder/index.php`, { waitUntil: 'networkidle2' });
        await delay(2000);
        await capture(page, 'moodle_report_builder.png');
        
        console.log("-> Deleting test course...");
        await page.goto(`${url}/course/delete.php?id=${courseId}`, { waitUntil: 'networkidle2' });
        await delay(1000);
        try {
            await Promise.all([
                page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
                page.click('button[type="submit"]') // Confirm delete
            ]);
            console.log("-> Course deleted.");
        } catch(e) { console.log("Could not auto-confirm delete."); }

        console.log("All done!");
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await browser.close();
    }
})();
