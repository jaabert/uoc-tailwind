# uoc-tailwind

Playing whit Tailwind

# Objetivos

- Elegir criterios de desarrollo adecuados al tipo de encargo.
- Aplicarlos de forma coherente realizando una revisión crítica de la PEC 2.
- (DONE) Instalar y configurar correctamente Tailwind dentro del entorno de UOC Boilerplate.
- Recrear dos págines de la PEC 2 reescribiendo el HTML y CSS para que sigan el formato Utility-first CSS.
- (DONE) Publicar el repositorio en GitHub y realizar un deployment en Netlify.

# Descripción

La PEC consta de dos partes, que básicamente se configuran en desarrollo y documentación. Es necesario realizar y entregar ambas partes de la PEC para poder ser evaluado.

En la parte de desarrollo:

- (DONE) Deberás partir de un nuevo proyecto basado en UOC Boilerplate e instalar y configurar Tailwind v3. En este proyecto no debes instalar Bootstrap o Stylelint.

- El objetivo de esta PEC es recrear dos de las páginas que desarrollaste en la PEC 2, pero siguiendo el paradigma de Atomic CSS y usando la libería de utilidades Tailwind. No se trata de realizar mejoras en el diseño o el contenido del web sino reescribir las partes de código necesarias.

- (DONE) Puedes escoger las dos páginas que prefieras, y sólo debes incluír estas dos páginas. En caso que no hagas la página de portada, puedes incluír un index.html sencillo, con enlaces o redirección hacia las páginas que realizaste, o llamar index.html a una de las páginas que hayas realizado.

- RWD. Las páginas que rehagas deberán seguir siendo perfectamente responsive.

- Deberás configurar Tailwind para que se generen las utilidades que necesiters: por ejemplo, para configurar los colores o tipografías que usaste.

- (DONE) En caso que en la PEC 2 utilizaras componentes de Bootstrap que requieran JavaScript, no es necesario que reescribas la parte de JS necesaria para que funcione correctamente (por ejemplo, si usaste un navbar, sólo debes esconder el menú desktop y mostrar el ícono de la hamburguesa, pero no es necesario que en hacer clic se despliegue o repliegue el menú).

- Deberás extraer un mínimo de 2 clases con @apply, como se explica en la documentación de Tailwind.

- (DONE) También deberás extraer un mínimo de 2 componentes con posthtml-include (que no sean ni el header ni el footer, si consideras oportuno extraerlos y/o ya lo realizaste en la PEC anterior), como ya vimos en el módulo 1.

# Documentación

En la parte de documentación, deberás documentar todo el proceso de desarrollo de esta práctica (descargar/clonar el repositorio, instalar dependencias, el entorno de desarrollo, la compilación para producción, etc), explicando los pasos que seguiste y los resultados obtenidos.

Deberás documentar todo el proceso de construcción de cada página y las decisiones tomadas y las problemáticas surgidas. También deberás explicar cualquier decisión de diseño y desarrollo que tomes. Además, asegúrate que en tu documentación abordas las siguientes cuestiones:

- ¿Qué diferencias hay entre el enfoque de tipo CSS semántico (el que usaste en las otras PEC) y el CSS de utilidades?
- ¿Cómo afectó esto a tu proceso de desarrollo? ¿Y a tu código?
- ¿Qué diferencias encontraste entre usar una libería de componentes y una libería de utilidades?
- ¿Qué clasees y componentes decidiste extraer y por qué?

También deberás incluír en la documentación la URL del despliegue de la PEC anterior, para facilitar su revisión.

El código que entregues deberá estar compilado para producción mediante el comando npm run build.
Además debes publicar el código en un nuevo repositorio GitHub y realizar un nuevo deployment en Netlify (u otros servicios similares), diferentes de los de la PEC anteiror. Las URLs del repositorio y del deployment se deberán incluír de forma clara en la documentación.

# Criterios de evaluación

Desarrollo (60%)

- Uso correcto de UOC Boilerplate (10%)
- Correcta configuración y personalización de Tailwind (15%)
- Extracción de clases y componentes (15%)
- Correcta aplicación de la metodologia utility-first CSS en el código HTML y en los estilos (20%)
- Publicación de repositorio y deployment (5%)
  Documentación (40%)
- Documentación del proceso de desarrollo (10%)
- Justificación de las decisiones tomadas en el desarrollo, dependencias instaladas y personalización, problemas resueltos… (10%)
- Preguntas específicas sobre utility-first CSS (20%)
