import requests
import os
from urllib.parse import urlparse
import json
from pathlib import Path

path = Path().absolute().joinpath("src/db_mock")

print(path)
def descargar_imagen(anchorImage, destination, nameFile):
    try:
        # Enviamos una solicitud GET para obtener la imagen
        respuesta = requests.get(anchorImage)
        
        # Comprobamos si la solicitud fue exitosa
        if respuesta.status_code == 200:
            # Creamos la ruta completa del archivo
            ruta_archivo = os.path.join(destination, nameFile)
            
            # Escribimos la imagen en el archivo
            with open(ruta_archivo, 'wb') as archivo:
                archivo.write(respuesta.content)
                
            print(f'La imagen ha sido descargada en: {ruta_archivo}')
        else:
            print('Error al descargar la imagen. Código de estado:', respuesta.status_code)
    except Exception as e:
        print('Ocurrió un error:', e)
with open(f"{path}/db.json", 'r', encoding="UTF-8") as file:
    data = json.loads(file.read())
    file.close()

result = data.get("exercises")
for i in result:
    enlaceImages = i.get("gifUrl")
    destination = f"{path}/images"

    name = f"{i.get('id')}.gif"
    descargar_imagen(enlaceImages, destination, name)