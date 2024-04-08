# Tarea: Uso de comandos Git

### Objetivo:

Practicar el uso básico de Git para crear un repositorio, subir un proyecto existente y compartir un enlace a un archivo en línea.

### Pasos a seguir:

- Crear un repositorio en GitHub:

  Utiliza tu cuenta de GitHub para crear un nuevo repositorio con el nombre "Clase-1-Github".
  Asegúrate de que el repositorio esté inicializado con un archivo README.md (puedes dejarlo vacío por ahora).

- Subir un proyecto existente:

  Elije un proyecto existente en tu computadora que desees versionar con Git.
  Abre una terminal o línea de comandos y navega hasta el directorio raíz de tu proyecto.
  Utiliza los siguientes comandos de Git para vincular tu proyecto al repositorio que creaste en GitHub y subir los archivos:

  ```
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin <URL_del_repositorio_en_GitHub>
  git push -u origin master
  ```

- Subir el enlace del archivo:

  - comparte el enlace del repositorio con tu instructor/a para su revisión.
