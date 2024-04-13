import json
from pathlib import Path

path = Path().absolute().joinpath("src/db_mock/db.json")

with open(path, "r", encoding="UTF-8") as file:
    original = json.loads(file.read())
    db = original.get("exercises")
    file.close()

for exercise in db:
    id = exercise.get("id")
    exercise["gifUrl"] = f"/images/{id}.gif"

convertToJosn = json.dumps(original)
with open(path, "w", encoding="utf-8") as file:
    file.write(convertToJosn)
    file.close()
