# Invernadero Inteligente IoT

Sitio estático de monitoreo para un invernadero con ESP32. Incluye un diagrama interactivo de cuatro capas y once capturas históricas de la presentación.

## Publicación

Sube `index.html`, `diagrama.css`, `diagrama.js` y la carpeta `imagenes/` a la raíz del alojamiento. En GitHub Pages puedes servir la raíz de la rama `main`. El sitio también se puede abrir localmente para usar el diagrama, la galería y la demostración.

En «Conectar canal público de ThingSpeak», introduce el ID del canal y verifica el mapeo. La configuración inicial asigna humedad ambiental al campo 1, suelo al 2, temperatura al 3, flotador al 4 e iluminación al 7. Para el flotador, 0 representa nivel bajo y 1 o 100 representa nivel suficiente. La consulta real requiere conexión y un canal público. El navegador solo realiza solicitudes de lectura.

## Alcance

El ESP32 debe ejecutar el control de la bomba con aspersores, el ventilador y la iluminación LED UV mediante su lógica local. El diagrama permite explorar los componentes y simular la pérdida de la conexión del ESP32 con la nube. La demostración del panel usa datos simulados y las capturas preservan registros históricos.

El repositorio contiene la web. La configuración de firmware, la programación de las reglas de ThingSpeak, el envío de correos con Google Apps Script y la app de MIT App Inventor se gestionan en sus respectivos entornos.

[MATLAB Analysis y disparadores en ThingSpeak](https://www.mathworks.com/help/thingspeak/matlab-analysis-app.html)
