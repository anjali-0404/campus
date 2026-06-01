import re

with open('d:/campus/campus_placement_portal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract CSS
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if style_match:
    css_content = style_match.group(1)
    with open('d:/campus/apps/web/src/campus-styles.css', 'w', encoding='utf-8') as f:
        f.write(css_content.strip())
    print("Extracted CSS.")

# 2. Extract JS
script_match = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
if script_match:
    js_content = script_match.group(1)
    
    # We need to expose functions to window so inline onclick handlers work in React.
    # Find all function definitions: function foo(...)
    functions = re.findall(r'function\s+([a-zA-Z0-9_]+)\s*\(', js_content)
    
    export_code = "\n// Expose to window\n"
    for func in functions:
        export_code += f"window.{func} = {func};\n"
    
    js_content += export_code
    
    with open('d:/campus/apps/web/src/campus-script.js', 'w', encoding='utf-8') as f:
        f.write(js_content.strip())
    print("Extracted JS.")

# 3. Extract Body
body_match = re.search(r'<body>(.*?)<script>', content, re.DOTALL)
if body_match:
    body_content = body_match.group(1).strip()
    
    # Escape backticks and $ for template literals
    body_content = body_content.replace('`', '\\`').replace('$', '\\$')
    
    with open('d:/campus/apps/web/src/campus-body.js', 'w', encoding='utf-8') as f:
        f.write(f"export const campusHtml = `{body_content}`;\n")
    print("Extracted Body HTML.")
