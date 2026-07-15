import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin

pages = {
    "moodle_question_bank.png": "https://docs.moodle.org/405/en/Question_bank",
    "moodle_backup.png": "https://docs.moodle.org/405/en/Course_backup",
    "moodle_report_builder.png": "https://docs.moodle.org/405/en/Custom_reports",
    "moodle_competencies.png": "https://docs.moodle.org/405/en/Competencies",
    "moodle_gradebook.png": "https://docs.moodle.org/405/en/Grader_report",
    "moodle_course_edit.png": "https://docs.moodle.org/405/en/Course_homepage",
    "moodle_dashboard.png": "https://docs.moodle.org/405/en/Dashboard"
}

out_dir = "/home/andrevmp/Documentos/Moodle/next-moodle-tutorial/public/images"
os.makedirs(out_dir, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
}

for filename, url in pages.items():
    print(f"Scraping {url}...")
    try:
        r = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(r.text, 'html.parser')
        
        best_img = None
        images = soup.find_all('img')
        for img in images:
            src = img.get('src')
            if src and ('images' in src) and not 'logo' in src.lower() and not 'icon' in src.lower() and (src.endswith('.png') or src.endswith('.jpg')):
                best_img = urljoin(url, src)
                break
                
        if best_img:
            print(f"Found image: {best_img}")
            img_data = requests.get(best_img, headers=headers).content
            with open(os.path.join(out_dir, filename), 'wb') as f:
                f.write(img_data)
            print(f"Saved {filename}")
        else:
            print(f"No image found for {filename}")
            
    except Exception as e:
        print(f"Error for {filename}: {e}")
