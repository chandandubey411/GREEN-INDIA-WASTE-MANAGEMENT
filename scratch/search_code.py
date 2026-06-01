import os

search_terms = ["doorstep", "preferred date", "pickup", "cable wire", "cylinder"]
src_dir = r"c:\Users\asus\OneDrive\Desktop\Chand\GREEN-INDIA-WASTE-MANAGEMENT\src"

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith((".js", ".jsx", ".css", ".html")):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                    for term in search_terms:
                        if term.lower() in content.lower():
                            print(f"Found '{term}' in {file_path}")
            except Exception as e:
                pass
