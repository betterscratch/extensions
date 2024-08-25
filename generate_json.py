import requests
import json
import os

with open("generated-metadata/extensions-v0.json", 'r') as w:
    current = json.loads("{\"extensions\":" + w.read() + "}")

def is_current_extension(slug):
    for ext in current["extensions"]:
        if ext["slug"] == slug:
            return True
    return False
    
tw = requests.get("https://extensions.turbowarp.org/generated-metadata/extensions-v0.json").json()["extensions"]

for ext in tw:
    if not is_current_extension(ext["slug"]) and ext["slug"] != "Lily/McUtils":
        print(ext["slug"])
        
        if "/" in ext["slug"]:
            dir_name = ext["slug"].split("/")[0]
            if not os.path.exists(dir_name):
                os.makedirs(dir_name)
        
        js_content = requests.get(f"https://extensions.turbowarp.org/{ext['slug']}.js").text
        with open(f"{ext['slug']}.js", "w") as f:
            f.write(js_content)
        
        if ext.get("image"):
            image_path_parts = ext["image"].split("/")
            if len(image_path_parts) > 2:
                dird = image_path_parts[1]
                if not os.path.exists(f"images/{dird}"):
                    os.makedirs(f"images/{dird}")
            
            image_content = requests.get(f"https://extensions.turbowarp.org/{ext['image']}").content
            with open(ext["image"], "wb") as f:
                f.write(image_content)
           
    if not "McUtils" in ext["slug"] and not is_current_extension(ext["slug"]):   
        tmp = ext
        tmp["tags"] = "tw"
        current["extensions"].append(tmp)
    
with open("generated-metadata/1.4.0.json", "w") as w:
    json.dump(current, w, indent=4)