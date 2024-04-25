import json

# Load the JSON file
with open("extensions-v0.json", "r") as file:
    data = json.load(file)
    data = data["extensions"]

# Flag to indicate if the specified slug is found
found_slug = False

# Iterate through the items
for item in data:
    # If the slug is found, set tags to "tw" and update the flag
    if item.get("slug") == "obviousAlexC/newgroundsIO":
        item["tags"] = "tw"
        found_slug = True
    # If the specified slug is not found yet, set tags to "tw"
    elif not found_slug:
        item["tags"] = "tw"
    # If the specified slug is found and the flag is updated, set tags to "betterscratch"
    else:
        item["tags"] = "betterscratch"

# Write the modified data back to the file
with open("extensions-v0.json", "w") as file:
    json.dump(data, file, indent=4)
