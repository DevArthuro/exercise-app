import os
import requests
from urllib.parse import urlparse
import json

def descargar_imagen(desde_enlace, carpeta_destino):
    try:
        # Obtenemos el nombre del archivo de la URL
        nombre_archivo = os.path.basename(urlparse(desde_enlace).path)
        
        # Enviamos una solicitud GET para obtener la imagen
        respuesta = requests.get(desde_enlace)
        
        # Comprobamos si la solicitud fue exitosa
        if respuesta.status_code == 200:
            # Creamos la ruta completa del archivo
            ruta_archivo = os.path.join(carpeta_destino, nombre_archivo)
            
            # Escribimos la imagen en el archivo
            with open(ruta_archivo, 'wb') as archivo:
                archivo.write(respuesta.content)
                
            print(f'La imagen ha sido descargada en: {ruta_archivo}')
        else:
            print('Error al descargar la imagen. Código de estado:', respuesta.status_code)
    except Exception as e:
        print('Ocurrió un error:', e)
with open('./src/db_mock/db.json', 'r', encoding="UTF-8") as file:
    data = json.loads(file.read())
    file.close()

result = data.get("exercises")
for i in result:
    print(i)

# Ejemplo de uso
# enlace_imagen = 'https://i0.wp.com/entrenandoc.com/wp-content/uploads/2024/03/oie_4uVoz6aLPqv5.gif'
# carpeta_destino = './imagenes'

# descargar_imagen(enlace_imagen, carpeta_destino)