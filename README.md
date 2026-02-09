# CV moderno — Juan Pérez

Proyecto estático con un currículum moderno y elegante listo para subir a Git.

Cómo usar

- Edita el contenido en `index.html` (nombre, experiencia, enlaces, foto).
- Cambia estilos en `styles.css` (paleta, tipografía, tamaños).
- Para generar PDF: abrir `index.html` en el navegador y usar imprimir (Ctrl/Cmd+P) → "Guardar como PDF".

Edición rápida (recomendado)

- Para editar el contenido más fácilmente abre `script.js` y modifica el objeto `resume` al inicio del archivo. El HTML se actualizará automáticamente al recargar la página.
- También puedes abrir la consola y modificar `resume` en tiempo real (exportado como módulo):

```js
// desde consola del navegador (DevTools)
resume.name = 'Tu Nombre'
// luego recarga la página o re-evalúa la función render() si la llamas manualmente
```

Despliegue a GitHub Pages

1. Inicializa git y sube al repositorio remoto:

```bash
git init
git add .
git commit -m "Add CV website"
git branch -M main
git remote add origin <tu-repo-url>
git push -u origin main
```

2. En GitHub: Settings → Pages → seleccionar rama `main` y carpeta `/ (root)`.

Personalización avanzada

- Para usar Tailwind o alguna librería, crea un proyecto con Node.js y configura build.
- Puedes usar `print` styles en `styles.css` para ajustar el PDF.

React + Vite (opcional)

He añadido una versión en React + Vite dentro de la carpeta `cv-app`. Pasos para ejecutarla:

```bash
cd cv-app
npm install
npm run dev
```

Esto abrirá un servidor de desarrollo en `http://localhost:5173` por defecto. Para crear la versión lista para producción:

```bash
npm run build
npm run preview
```

Atajos de teclado (dentro de `cv-app`)

- `T` — alterna tema claro/oscuro
- `P` — imprimir / guardar como PDF
- `J` — descargar JSON con los datos del CV
- `S` — colapsar/expandir la barra lateral

Cómo cambiar la foto

- Reemplaza la URL en `cv-app/src/resume.js` (campo `photo`).
- Para usar una imagen local en producción muévela a `public/` y apunta a `/tu-imagen.jpg`.


Si quieres que convierta todo el repositorio a este proyecto (mover archivos al root, añadir GitHub Actions o configurar Tailwind), dímelo y lo hago.


Qué se agregó en esta versión

- `script.js`: contiene los datos del CV (`resume`) y un pequeño renderer que inyecta el contenido en el HTML.
- Botón de tema (claro/oscuro) y botón para imprimir/guardar PDF.

