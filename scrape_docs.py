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
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

for filename, url in pages.items():
    print(f"Scraping {url}...")
    try:
        r = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(r.text, 'html.parser')
        content = soup.find(id='mw-content-text')
        
        # Find the first image that is likely a screenshot (not a small icon)
        img_url = None
        if content:
            images = content.find_all('img')
            for img in images:
                src = img.get('src')
                # Ignore small icons, look for typical image thumbs
                if src and ('thumb' in src or 'images_en' in src) and not 'icon' in src:
                    # try to get the original image link if it's wrapped in an <a>
                    parent = img.parent
                    if parent.name == 'a' and parent.get('href') and (parent['href'].endswith('.png') or parent['href'].endswith('.jpg')):
                        # Get full image from the a href
                        img_url = urljoin(url, parent['href'])
                    else:
                        img_url = urljoin(url, src)
                        # Remove /thumb/ from url if possible to get higher res, but let's just use the thumb if it's big enough
                    break
        
        if img_url:
            print(f"Found image: {img_url}")
            # If the image is a wikipedia File: page, we need to fetch the actual image URL from there
            if '/File:' in img_url:
                r2 = requests.get(img_url, headers=headers)
                soup2 = BeautifulSoup(r2.text, 'html.parser')
                full_media = soup2.find('div', class_='fullMedia')
                if full_media and full_media.find('a'):
                    img_url = urljoin(url, full_media.find('a').get('href'))
                    
            print(f"Downloading {img_url}...")
            img_data = requests.get(img_url, headers=headers).content
            with open(os.path.join(out_dir, filename), 'wb') as f:
                f.write(img_data)
            print(f"Saved {filename}")
        else:
            print(f"No image found for {filename}")
            
    except Exception as e:
        print(f"Error for {filename}: {e}")
