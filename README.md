# Workshop Abre tu Ciencia

Sitio web para el workshop "Open Science in a Nutshell: Tools, Theory, and Practice for Reproducible Research" organizado en la Escuela de Gobierno, Pontificia Universidad Católica de Chile.

## Estructura del Sitio

- **Inicio** (`index.qmd`): Página principal con animación Vanta.NET de fondo
- **Equipo** (`equipo.qmd`): Presentación del equipo organizador con imágenes circulares (3 por fila)
- **Invitados** (`invitados.qmd`): Presentación de los expertos invitados con imágenes circulares (3 por fila)
- **Programa** (`programa.qmd`): Integración con Google Sheets para mostrar la agenda y mapa de ubicación

## Tecnologías

- **Quarto**: Sistema de publicación científica y técnica
- **Markdown (.qmd)**: Archivos fuente en formato Quarto Markdown
- **CSS3**: Estilos personalizados con tipografía Lato (tipografía por defecto de Quarto)
- **JavaScript**: Animación Vanta.NET para la página de inicio
- **Google Sheets**: Integración para el programa del workshop
- **Google Maps**: Mapa interactivo con la ubicación del Metro San Joaquín

## Requisitos

- [Quarto](https://quarto.org/docs/get-started/) instalado en tu sistema

## Desarrollo Local

Para renderizar y previsualizar el sitio localmente:

```bash
# Renderizar el sitio
quarto render

# Previsualizar el sitio (se abrirá en el navegador)
quarto preview
```

El sitio se renderizará en la carpeta `_site/`.

## Despliegue

### GitHub Pages

El sitio está configurado para renderizarse y desplegarse automáticamente en GitHub Pages mediante GitHub Actions.

1. Ve a la configuración del repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Cada push a la rama `main` renderizará el sitio con Quarto y lo desplegará automáticamente

### Netlify

Para desplegar en Netlify:

#### Paso 1: Obtener el Token de Netlify

1. Inicia sesión en [Netlify](https://www.netlify.com/)
2. Ve a tu perfil (click en tu avatar en la esquina superior derecha)
3. Selecciona **User settings**
4. En el menú lateral, ve a **Applications**
5. Haz click en **New access token**
6. Dale un nombre descriptivo (ej: "abre-tu-ciencia-deploy")
7. Copia el token generado (solo se muestra una vez, guárdalo de forma segura)

#### Paso 2: Configurar el Token en GitHub

1. En tu repositorio de GitHub, ve a **Settings** > **Secrets and variables** > **Actions**
2. Click en **New repository secret**
3. Nombre: `NETLIFY_AUTH_TOKEN`
4. Valor: Pega el token que copiaste en el paso anterior
5. Click en **Add secret**

#### Paso 3: Obtener el Site ID de Netlify

1. En Netlify, crea un nuevo sitio o selecciona uno existente
2. Ve a **Site settings** > **General**
3. En la sección **Site details**, copia el **Site ID**

#### Paso 4: Agregar el Site ID a GitHub Secrets

1. En GitHub, ve a **Settings** > **Secrets and variables** > **Actions**
2. Click en **New repository secret**
3. Nombre: `NETLIFY_SITE_ID`
4. Valor: Pega el Site ID que copiaste
5. Click en **Add secret**

#### Paso 5: Conectar el Repositorio en Netlify

1. En Netlify, ve a **Add new site** > **Import an existing project**
2. Selecciona **GitHub** como proveedor
3. Autoriza Netlify si es necesario
4. Selecciona el repositorio `abre-tu-ciencia`
5. Configuración de build:
   - **Build command**: `quarto render`
   - **Publish directory**: `_site`
6. Click en **Deploy site**

**Nota:** Netlify necesita tener Quarto instalado. Puedes usar el buildpack de Quarto o configurar un script de build que instale Quarto.

#### Paso 6: Configurar el Dominio (Opcional)

1. En Netlify, ve a **Site settings** > **Domain management**
2. Puedes usar el dominio generado automáticamente o agregar un dominio personalizado

## Edición de Contenido

### Agregar Miembros del Equipo

Edita `equipo.qmd` y agrega nuevas tarjetas siguiendo este formato:

```markdown
::: {.speaker-card}
::: {.speaker-photo}
![Nombre Completo](ruta/a/foto.jpg){.img-circle}
:::

::: {.speaker-info}
### Nombre Completo
**Rol en el Workshop**

Descripción breve...

::: {.team-links}
[Email](mailto:email@example.com){.team-link} | [Sitio Web](https://website.com){.team-link} | [GitHub](https://github.com/username){.team-link}
:::
:::
:::
```

### Agregar Invitados

Edita `invitados.qmd` y agrega nuevas tarjetas:

```markdown
::: {.speaker-card}
::: {.speaker-photo}
![Nombre Completo](ruta/a/foto.jpg){.img-circle}
:::

::: {.speaker-info}
### Nombre Completo
**Institución / Cargo**

Biografía breve...
:::
:::
```

### Actualizar el Programa

El programa se actualiza automáticamente desde Google Sheets. Para que el embed funcione correctamente:

1. **Compartir la hoja de cálculo:**
   - En Google Sheets, haz click en **Share** (Compartir)
   - Cambia los permisos a **"Anyone with the link"** (Cualquiera con el enlace)
   - Selecciona **"Viewer"** (Lector)

2. **Publicar para web (opcional pero recomendado):**
   - Ve a **File** > **Share** > **Publish to the web**
   - Selecciona la pestaña que quieres publicar
   - Haz click en **Publish**
   - Copia la URL generada si necesitas usar un formato diferente

3. **Verificar el embed:**
   - El iframe en `programa.qmd` usa la URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/preview`
   - Si el embed no funciona, verifica que la hoja esté compartida públicamente
   - Como alternativa, puedes usar la URL de publicación: `https://docs.google.com/spreadsheets/d/e/SHEET_ID/pubhtml?widget=true&headers=false`

### Actualizar el Mapa

Para actualizar el mapa con la ubicación correcta del Metro San Joaquín:

1. Busca "Estación San Joaquín Metro" en [Google Maps](https://www.google.com/maps)
2. Haz clic en **Compartir** > **Insertar un mapa**
3. Copia el código HTML del iframe
4. Reemplaza el iframe en `programa.qmd` con el código copiado

## Licencia

Ver archivo LICENSE para más detalles.
