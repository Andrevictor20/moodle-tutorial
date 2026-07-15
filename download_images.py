import os
import requests
from duckduckgo_search import DDGS
from urllib.parse import urlparse

QUERIES = {
    "moodle_question_bank.png": "Moodle 4 question bank screenshot",
    "moodle_backup.png": "Moodle 4 course backup screenshot",
    "moodle_report_builder.png": "Moodle 4 custom report builder screenshot",
    "moodle_competencies.png": "Moodle 4 competency framework screenshot",
    "moodle_gradebook.png": "Moodle 4 grader report gradebook setup screenshot",
    "moodle_course_edit.png": "Moodle 4 course edit mode screenshot",
    "moodle_dashboard.png": "Moodle 4 dashboard interface screenshot"
}

OUT_DIR = "/home/andrevmp/Documentos/Moodle/next-moodle-tutorial/public/images"

def download_image(url, filepath):
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"Successfully downloaded to {filepath}")
            return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
    return False

def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    with DDGS() as ddgs:
        for filename, query in QUERIES.items():
            filepath = os.path.join(OUT_DIR, filename)
            print(f"Searching for {filename} with query: '{query}'")
            try:
                results = list(ddgs.images(keywords=query, max_results=5))
                for res in results:
                    url = res.get('image')
                    if url:
                        print(f"Found URL: {url}")
                        if download_image(url, filepath):
                            break
            except Exception as e:
                print(f"Search failed for {filename}: {e}")

if __name__ == "__main__":
    main()
