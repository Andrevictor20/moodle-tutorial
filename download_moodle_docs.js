const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

const pages = {
    "moodle_question_bank.png": "https://docs.moodle.org/405/en/Question_bank",
    "moodle_backup.png": "https://docs.moodle.org/405/en/Course_backup",
    "moodle_report_builder.png": "https://docs.moodle.org/405/en/Custom_reports",
    "moodle_competencies.png": "https://docs.moodle.org/405/en/Competencies",
    "moodle_gradebook.png": "https://docs.moodle.org/405/en/Grader_report",
    "moodle_course_edit.png": "https://docs.moodle.org/405/en/Course_homepage",
    "moodle_dashboard.png": "https://docs.moodle.org/405/en/Dashboard"
};

const outDir = "/home/andrevmp/Documentos/Moodle/next-moodle-tutorial/public/images";

async function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                reject(`Status ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err.message));
        });
    });
}

(async () => {
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();

    for (const [filename, url] of Object.entries(pages)) {
        console.log(`Navigating to ${url}...`);
        try {
            await page.goto(url, { waitUntil: 'domcontentloaded' });
            
            // Find all images inside the main content area
            const imgUrls = await page.evaluate(() => {
                const images = Array.from(document.querySelectorAll('#mw-content-text img'));
                return images.map(img => img.src).filter(src => src.includes('.png') && !src.includes('icon'));
            });

            if (imgUrls.length > 0) {
                const targetUrl = imgUrls[0];
                const dest = path.join(outDir, filename);
                console.log(`Downloading ${targetUrl} to ${dest}...`);
                await download(targetUrl, dest);
            } else {
                console.log(`No images found for ${filename}`);
            }
        } catch (e) {
            console.error(`Error processing ${filename}:`, e);
        }
    }

    await browser.close();
})();
