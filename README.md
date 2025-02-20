# PokeAPI - Versión 1.0

Esta es la primera versión de PokeAPI. Se trata de una versión bastante limitada y apresurada, enfocada en proporcionar funcionalidades básicas.

> **Nota:** Se pueden encontrar imagenes y videos sobre el funcionamiento actual de esta V1 en la carpeta Demos dentro del codigo

## Funcionalidades

- Listado de Pokémons.
- Búsqueda de Pokémons.
- Implementación básica de Local Storage.

Al iniciar, si hay datos guardados localmente, la aplicación cargará esa información. En caso contrario, se realizará una petición remota para obtener los datos, que posteriormente se almacenarán localmente para futuras consultas.

Para cada Pokémon, se mostrará un pequeño modal con información básica y una imagen.

## Puntos a mejorar

A continuación, se listan algunas mejoras potenciales para futuras versiones:

### Arquitectura y Código
- Separación de la lógica en capas: **data, dominio y UI**.
- Implementación de navegación y casos de uso.
- Mejor organización del código.
- Agregar comentarios explicativos sobre la lógica del código, aunque actualmente sea simple.

### UI/UX
- Separación de componentes para mejorar la reutilización.
- Creación de un tema local para estandarizar el diseño.
- Agregar internacionalización para soportar múltiples idiomas.
- Mejoras visuales para proporcionar feedback al usuario, como **loading spinners** y animaciones.
- Funcionalidades adicionales que agreguen valor al aplicativo. 
- Mejor soporte para temas dark y ligth (actualmente solamente el background color tiene este soporte)

> **Nota:** Este repositorio muestra una versión básica de la aplicación. Para una estructura mejor organizada y alineada con buenas prácticas, puede revisar [HackerDigest](https://github.com/hikarisaotom/HackerDigest), que refleja mejor la estructura deseada si se hubiera contado con más tiempo.
---

Esta versión es solo un punto de partida y se espera seguir evolucionando con mejoras y nuevas funcionalidades en futuras versiones.
