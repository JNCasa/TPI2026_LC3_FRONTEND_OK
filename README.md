# Dietética BeGreen — Frontend

Aplicación web para Dietética BeGreen, desarrollada con React y Vite. Permite conocer el negocio y sus productos, crear una cuenta e iniciar sesión, y ofrece funciones de tienda y administración según el rol del usuario.

## Tecnologías

- React
- React Router para la navegación entre páginas
- Vite para el desarrollo y la compilación
- Bootstrap y CSS para estilos y componentes visuales

## Estructura del proyecto

El proyecto frontend está dentro de la carpeta `Dietetica2026/`.

- `src/Pages/`: páginas de inicio, Nosotros, preguntas frecuentes, login, creación de cuenta, tienda, carrito, ticket y administración.
- `src/components/`: elementos compartidos de la interfaz, como el encabezado, pie de página, protección de rutas y componentes de productos.
- `src/context/`: contexto y hook para manejar el tema visual.
- `src/services/`: funciones para registrarse, iniciar sesión, consultar la sesión actual y cerrar sesión.
- `src/data/`: datos locales usados por la aplicación.
- `src/assets/css/`: estilos generales y de algunas vistas.
- `public/images/`: imágenes utilizadas en la interfaz.

## Rutas

| Ruta | Página | Acceso |
| --- | --- | --- |
| `/` | Nosotros | Público |
| `/AboutUs` | Nosotros | Público |
| `/FrequentQuestions` | Preguntas frecuentes y formulario de contacto | Público |
| `/CreateAccount` | Crear cuenta | Público |
| `/LogIn` | Iniciar sesión | Público |
| `/Store` | Tienda | Cliente |
| `/Cart` | Carrito | Cliente |
| `/Ticket` | Ticket y confirmación de compra | Cliente |
| `/ListProducts` | Administración de productos | Vendedor |
| `/ListUsers` | Administración de usuarios | Administrador |

Las rutas privadas verifican el rol del usuario. Si no hay una sesión válida o el rol no corresponde, la aplicación redirige al usuario.

## Funciones principales

- Navegación entre las páginas públicas y privadas.
- Registro e inicio de sesión.
- Persistencia del token de sesión en `localStorage` y validación de la sesión al recargar la aplicación.
- Visualización del catálogo, selección de productos y flujo de carrito y ticket.
- Vistas de administración para productos y usuarios.
- Cambio entre tema claro y oscuro.
- Formulario de contacto desde preguntas frecuentes.

## Comunicación con el backend

El frontend se comunica con el backend mediante rutas `/api`. En desarrollo, Vite reenvía esas solicitudes a `http://localhost:3000`.

- `/api/auth/register`: registro de cuenta.
- `/api/auth/login`: autenticación y obtención del token.
- `/api/auth/me`: validación del token y consulta del usuario actual.
- `/api/Productos`: consulta del catálogo y operaciones de productos.
- `/api/Tickets`: registro de compras.

Las solicitudes protegidas envían el token de sesión en el encabezado `Authorization`. Para usar todas las funciones, el backend debe estar ejecutándose en el puerto `3000`.

## Ejecutar en desarrollo

Desde la carpeta del proyecto:

```bash
cd Dietetica2026
npm ci
npm run dev
.
