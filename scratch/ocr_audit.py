import os
import pytesseract
from PIL import Image

TARGET_DIR = "/home/andrevmp/Documentos/Moodle/next-moodle-tutorial/public/images"
OUTPUT_REPORT = "/home/andrevmp/Documentos/Moodle/next-moodle-tutorial/scratch/ocr_audit_report.md"

FLAG_STRINGS = [
    "log in", "login", "senha", "password", "acesso negado", "access denied",
    "falta o parâmetro", "missing required parameter", "you do not have permission",
    "não tem permissão", "this site will be reset"
]

def main():
    if not os.path.exists(TARGET_DIR):
        print(f"Error: {TARGET_DIR} does not exist.")
        return

    images = [f for f in os.listdir(TARGET_DIR) if f.endswith(".png")]
    
    report = ["# OCR Audit Report\n"]
    report.append("| Image | Verdict | Found Strings |")
    report.append("|-------|---------|---------------|")

    for img_name in sorted(images):
        img_path = os.path.join(TARGET_DIR, img_name)
        try:
            text = pytesseract.image_to_string(Image.open(img_path), config='--psm 6')
            text_lower = text.lower()
            found = []
            for flag in FLAG_STRINGS:
                if flag.lower() in text_lower:
                    found.append(flag)
            
            if found:
                verdict = "SUSPEITO"
                found_str = ", ".join(found)
            else:
                verdict = "OK"
                found_str = "None"
            
            report.append(f"| {img_name} | {verdict} | {found_str} |")
        except Exception as e:
            report.append(f"| {img_name} | ERROR | {str(e)} |")
            print(f"Error processing {img_name}: {e}")

    with open(OUTPUT_REPORT, "w") as f:
        f.write("\n".join(report))
        
    print(f"Report saved to {OUTPUT_REPORT}")

if __name__ == "__main__":
    main()
