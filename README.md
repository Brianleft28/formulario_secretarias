# Memo Project

Este proyecto es una aplicación web desarrollada con Svelte y SvelteKit para la gestión de memos.

## Tecnologías y Librerías Utilizadas

- Svelte
- SvelteKit
- Chart.js
- Bootstrap
- Vite
- TypeScript

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```sh
git clone https://bitbucket.org/municipio-ituzaingo/memo-app.git
cd memo-app
npm install
npm run dev
```

# Estructura del Proyecto

## Directorios y Archivos

### src/

- **actions/**
  - `charRender.js`
- **components/**
  - **common/**
    - `ButtonDelete.svelte`
    - `ButtonDeleteMemo.svelte`
    - `ButtonEdit.svelte`
    - `Dropdown.svelte`
  - **features/**
    - **fechaDropdown/**
      - `FechaDropdown.svelte`
    - **secretariasDropdown/**
      - `SecretariaDropdown.svelte`
  - **layouts/**
    - `Header.svelte`
- **lib/**
  - `index.js`
  - **memos/**
    - `memosServices.ts`
  - **secretaria/**
    - `secretariaServices.ts`
- **routes/**
  - `+page.svelte`
  - `+page.server.ts`
  - `+layout.svelte`
  - `+layout.server.ts`
  - **informes/**
    - `+page.svelte`
    - `+page.server.ts`
  - **secretarias/**
    - `+page.svelte`
    - `+page.server.ts`
  - **memos/**
    - `+page.svelte`
    - `+page.server.ts`
- **services/**
  - **memos/**
    - `memosServices.ts`
    - `memosTypes.ts`
  - **secretarias/**
    - `secretariasService.ts`
    - `secretarias.type.ts`

## Explicación

### actions/

- **charRender.js**: Acción de Svelte para renderizar gráficos con Chart.js en un elemento canvas.

### components/

- **common/**: Componentes reutilizables.

  - **ButtonDelete.svelte**: Botón de eliminación.
  - **ButtonDeleteMemo.svelte**: Botón de eliminación para memos.
  - **ButtonEdit.svelte**: Botón de edición.
  - **Dropdown.svelte**: Menú desplegable.

- **features/**: Componentes específicos de características.

  - **fechaDropdown/**
    - **FechaDropdown.svelte**: Selección de fechas.
  - **secretariasDropdown/**
    - **SecretariaDropdown.svelte**: Selección de secretarías.

- **layouts/**: Componentes de diseño y estructura.
  - **Header.svelte**: Encabezado de la aplicación.

### lib/

- **index.js**: Funciones utilitarias generales (`formatDate`, `switchEstadoStyle`, `estadoIntToString`).
- **memos/**: Servicios y utilidades para memos.
  - **memosServices.ts**: Funciones y servicios para memos.
- **secretaria/**: Servicios y utilidades para secretarías.
  - **secretariaServices.ts**: Funciones y servicios para secretarías.

### routes/

Este directorio define las rutas de la aplicación. Cada subdirectorio o archivo dentro de `src/routes` define una ruta específica.

#### Archivos y Subdirectorios

- **+page.svelte**: Componente Svelte para la interfaz de usuario de la ruta.
- **+page.server.ts**: Lógica del lado del servidor para la ruta.
- **+layout.svelte**: Diseño compartido para las rutas dentro del subdirectorio.
- **+layout.server.ts**: Lógica del lado del servidor para el diseño compartido.

#### Ejemplos de Subdirectorios

- **informes/**: Define la ruta `/informes`.
  - **+page.svelte**: Interfaz de usuario.
  - **+page.server.ts**: Lógica del servidor.
- **secretarias/**: Define la ruta `/secretarias`.
  - **+page.svelte**: Interfaz de usuario.
  - **+page.server.ts**: Lógica del servidor.
- **memos/**: Define la ruta `/memos`.
  - **+page.svelte**: Interfaz de usuario.
  - **+page.server.ts**: Lógica del servidor.

### services/

Este directorio contiene los servicios que se encargan de la lógica de negocio y la comunicación con el servidor. Aquí se definen las funciones que realizan peticiones HTTP para obtener, crear, actualizar y eliminar datos.

#### Estructura del Directorio

- **memos/**
  - **memosServices.ts**: Contiene funciones y servicios relacionados con los memos.
  - **memosTypes.ts**: Define los tipos e interfaces utilizados en los servicios de memos.
- **secretarias/**
  - **secretariasService.ts**: Contiene funciones para realizar peticiones al servidor relacionadas con la creación, actualización y eliminación de secretarías.
  - **secretarias.type.ts**: Define la interfaz `Secretaria` que representa una secretaria.

#### Descripción de Archivos

- **memosServices.ts**: Este archivo contiene funciones que interactúan con la API para gestionar los memos. Incluye funciones para obtener, crear, actualizar y eliminar memos.
- **memosTypes.ts**: Define los tipos e interfaces necesarios para los servicios de memos, asegurando que los datos manipulados cumplan con las estructuras esperadas.
- **secretariasService.ts**: Este archivo contiene funciones que realizan peticiones HTTP para gestionar las secretarías. Incluye funciones para obtener, crear, actualizar y eliminar secretarías.
- **secretarias.type.ts**: Define la interfaz `Secretaria`, que especifica la estructura de los objetos de tipo secretaria, incluyendo propiedades como id y nombre.

### Propósito

El directorio `src/services` organiza y centraliza la lógica de negocio y las interacciones con la API, facilitando el mantenimiento y la escalabilidad del proyecto. Al separar estas funciones en servicios, se promueve una arquitectura modular y reutilizable.
