import json
from pathlib import Path
from requests import get


path = Path().absolute().joinpath("src/db_mock/")
baseUrl = "https://www.googleapis.com/youtube/v3/playlistItems"
print(path)

print(f"La ruta especificada es {path}")

with open(path.joinpath("dbPlaylist.json"), 'r', encoding="utf-8") as file:
    data: list = json.loads(file.read()).get('items')
    file.close()



playListIds: list = list(map(lambda item: item.get("id") , data))

def getAllVideosToPlayList(playlistId: str):
    requestAPI = get(baseUrl, params={
        "key": "AIzaSyApDF5wD2OiYgeA-gyrerqwcFWK0Tq4vmU",
        "maxResults": "50",
        "playlistId": playlistId,
        "part": "snippet"
    })
    return requestAPI.json()

for id in playListIds:
    response = getAllVideosToPlayList(id)
    dataToSave = {
        "id": id,
        "information": response
    }
    jsonToSave = json.dumps(dataToSave)
    with open(path.joinpath(f"byPlayList/{id}.json"), "+a", encoding="UTF-8") as file:
        file.write(jsonToSave)
        file.close()
