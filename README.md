# Pokedex App Next.js
La Pokedex App es una aplicación web interactiva desarrollada con Next.js y React, que permite a los usuarios explorar el mundo de los Pokemón. Esta aplicación proporciona una interfaz intuitiva para visualizar una lista de Pokemones, acceder a sus detalles y estadísticas, y buscarlos por su nombre.

## Pre-requisitos
Antes de comenzar asegurate de tener lo siguiente en tu sistema:

1. **Node.js**:
- Instalar [Node.js](https://nodejs.org/en), ya que Next.js depende de Node para su ejecución y desarrollo.
- Asegúrate de tener instalada la versión 14 o superior, ya que Next.js requiere una versión actual de Node.js para funcionar correctamente.
- Para verificar la instalación, ejecuta el siguiente comando en tu terminal:
 ```bash
     node -v
 ```
2. **npm**:
- Node.js incluye npm (Node Package Manager) de forma predeterminada.
- Verifica la instalación ejecutando:
 ```bash
     npm -v
 ```
## 🚀 Ejecución
Sigue estos pasos para configurar y ejecutar el proyecto:

1. **Clonar el repositorio**:
- Ejecuta el siguiente comando en tu terminal para clonar el repositorio:
   ```bash
       git clone https://github.com/dolorusso/prueba-tecnica-pokedex.git
   ```
2. **Navega a la carpeta del proyecto**:
- Ejecuta el siguiente comando en tu terminal para cambiar al directorio del proyecto:
  ```bash
     cd prueba-tecnica-pokedex
  ```
3. **Instalar dependencias**:
- Una vez en el directorio del proyecto, instala las dependencias utilizando npm:
    ```bash
        npm install
    ```
4. **Ejecutar la aplicación**:
- Finalmente, ejecuta el servidor de desarrollo de Next.js:
    ```bash
        npm run dev
    ```
- Ahora puedes acceder a la aplicación en  `http://localhost:3000`

## Tecnologías utilizadas
- Next.js: Framework de React que permite la creación de aplicaciones web optimizadas y con renderizado del lado del servidor.
- React: Biblioteca de JavaScript para construir interfaces de usuario.

## API 
Este proyecto utiliza la [PokeAPI](https://pokeapi.co/) para obtener los datos de los Pokemón. La API es consumida en tiempo real para actualizar la lista de Pokemón y mostrar sus detalles.

## Funcionalidades
- Visualización de Pokemon en tarjetas con su imagen y tipo.
- Búsqueda en tiempo real de Pokemon por nombre.
- Carga infinita para ver una lista extensa de Pokemón sin recargar la página: se implementó para gestionar los más de 1.000 Pokemón de la PokeAPI. En lugar de cargar todos los datos de una vez, se traen grupos de 40 Pokemón a medida que el usuario se desplaza hacia abajo, garantizando un rendimiento óptimo y una experiencia de navegación fluida.
- Página con información detallada, estadísticas y habilidades de cada Pokemón.
- Animaciones interactivas.
