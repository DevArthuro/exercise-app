import requests
from pathlib import Path
import json
import time

pathExercises = Path().absolute().joinpath("src/db_mock")


def requestYoutubeApi(question):
    baseUrl = "https://www.googleapis.com/youtube/v3/search"
    response = requests.get(baseUrl, params = {
        "key":"AIzaSyApDF5wD2OiYgeA-gyrerqwcFWK0Tq4vmU",
        "q": question,
        "type": "video",
        "part": "snippet",
        "maxResults": "10"
    })
    print(response.json())
    if response.status_code == 200:
        data = response.json()
        return data.get("items")

        # {
        #     "kind": "youtube#searchResult",
        #     "etag": "YUmWUBRW9xcbfX963jDdFEcggLQ",
        #     "id": {
        #         "kind": "youtube#video",
        #         "videoId": "CywhB_MNJ6o"
        #     },
        #     "snippet": {
        #         "publishedAt": "2023-08-28T16:24:50Z",
        #         "channelId": "UC68TLK0mAEzUyHx5x5k-S1Q",
        #         "title": "The Worst Triceps Mistake Everyone Is Making",
        #         "description": "In this video, we're going to discuss the tiktok controversy around triceps kickbacks and see whether or not they're actually good ...",
        #         "thumbnails": {
        #             "default": {
        #                 "url": "https://i.ytimg.com/vi/CywhB_MNJ6o/default.jpg",
        #                 "width": 120,
        #                 "height": 90
        #             },
        #             "medium": {
        #                 "url": "https://i.ytimg.com/vi/CywhB_MNJ6o/mqdefault.jpg",
        #                 "width": 320,
        #                 "height": 180
        #             },
        #             "high": {
        #                 "url": "https://i.ytimg.com/vi/CywhB_MNJ6o/hqdefault.jpg",
        #                 "width": 480,
        #                 "height": 360
        #             }
        #         },
        #         "channelTitle": "Jeff Nippard",
        #         "liveBroadcastContent": "none",
        #         "publishTime": "2023-08-28T16:24:50Z"
        #     }
        # },


with open(f"{pathExercises}/db.json", "r", encoding="utf-8") as file:
    db = json.loads(file.read())
    file.close()

dataToIter = [db.get("exercises")[0]]

exrsiceNumber = 1
for data in dataToIter:
    print(f"vamos por {exrsiceNumber}")
    time.sleep(1.5)
    question = f"exercises about {data.get('name')} of body part {data.get('bodyPart')}"
    data['youtube'] = requestYoutubeApi(question)
    exrsiceNumber += 1

dataToIter = json.dumps(dataToIter)
with open(f"{pathExercises}/respaldDB.json", "w", encoding="UTF-8") as file:
    file.write(dataToIter)
    file.close()