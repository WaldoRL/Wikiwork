<template>
    <div class="container">
      <div id="qa-introduction" class="content">
        <h1>¿Qué es Git?</h1>
        <p>Git es un sistema de control de versiones distribuido de código abierto, diseñado para gestionar y registrar cambios en archivos y proyectos de software. Fue creado por Linus Torvalds en 2005 para el desarrollo del kernel de Linux, pero desde entonces se ha convertido en una herramienta esencial en el desarrollo de software, utilizada por desarrolladores de todo el mundo.</p>
  
        <h3>Características Clave de Git</h3>
        <ul>
          <li>
            <strong>Distribuido:</strong>
            <p>A diferencia de los sistemas de control de versiones centralizados, cada copia de un repositorio Git es un repositorio completo con todo su historial y capacidades completas de seguimiento de versiones. Esto significa que los desarrolladores pueden trabajar sin conexión y todas las operaciones son locales hasta que desean compartir sus cambios con los demás.</p>
          </li>
          <li>
            <strong>Ramas y Fusiones (Branches and Merging):</strong>
            <p>Git facilita la creación, el uso y la fusión de ramas (branches). Las ramas permiten a los desarrolladores trabajar en diferentes características o correcciones de errores de manera aislada y luego fusionar sus cambios cuando estén listos. Esto promueve un flujo de trabajo más ordenado y reduce el riesgo de conflictos entre los cambios realizados por diferentes desarrolladores.</p>
          </li>
          <li>
            <strong>Snapshots y Commits:</strong>
            <p>En lugar de almacenar cambios como diferencias (deltas) de cada archivo, Git guarda instantáneas (snapshots) del contenido de los archivos en cada momento en el tiempo. Un commit en Git representa una instantánea del proyecto en un punto específico. Cada commit tiene un identificador único (hash) que facilita la trazabilidad y la reversión de cambios si es necesario.</p>
          </li>
          <li>
            <strong>Integridad:</strong>
            <p>Git asegura la integridad del contenido mediante un algoritmo de hash (SHA-1). Esto significa que es casi imposible alterar los datos de manera inadvertida o maliciosa sin que Git lo detecte. Cada archivo, commit y rama tiene un identificador único generado por SHA-1, garantizando la consistencia y confiabilidad de los datos.</p>
          </li>
          <li>
            <strong>Flujo de Trabajo Colaborativo:</strong>
            <p>Git facilita el trabajo colaborativo mediante la integración con plataformas de hosting de código como GitHub, GitLab y Bitbucket. Estas plataformas permiten a los desarrolladores compartir repositorios, gestionar colaboraciones y realizar revisiones de código.</p>
          </li>
        </ul>
  
        <h3>Comandos Básicos de Git</h3>
        <ul>
          <li>Inicializar un repositorio: <code>git init</code></li>
          <li>Clonar un repositorio: <code>git clone [url]</code></li>
          <li>Agregar cambios a la zona de preparación: <code>git add [archivo]</code></li>
          <li>Confirmar cambios: <code>git commit -m "mensaje"</code></li>
          <li>Ver el historial de commits: <code>git log</code></li>
          <li>Crear una nueva rama: <code>git branch [nombre]</code></li>
          <li>Cambiar de rama: <code>git checkout [nombre]</code></li>
          <li>Fusionar una rama: <code>git merge [nombre]</code></li>
          <li>Obtener cambios de un repositorio remoto: <code>git pull</code></li>
          <li>Enviar cambios a un repositorio remoto: <code>git push</code></li>
        </ul>
  
        <h3>Ejemplo Práctico</h3>
        <pre>
          <code>
  // Inicializar un nuevo repositorio Git
  git init
  
  // Agregar un archivo y hacer un commit
  echo "Hello, Git!" > readme.txt
  git add readme.txt
  git commit -m "Agregar archivo readme"
  
  // Crear una nueva rama y cambiar a ella
  git branch nueva-rama
  git checkout nueva-rama
  
  // Hacer cambios en la nueva rama y fusionarlos a la rama principal
  echo "Nueva característica" >> readme.txt
  git add readme.txt
  git commit -m "Agregar nueva característica en nueva-rama"
  git checkout main
  git merge nueva-rama
          </code>
        </pre>
  
        <h3>Beneficios de Aplicar Git</h3>
        <ul>
          <li><strong>Mantenibilidad:</strong> Código más fácil de entender y modificar.</li>
          <li><strong>Flexibilidad:</strong> Posibilidad de extender el código sin necesidad de modificarlo.</li>
          <li><strong>Reutilización:</strong> Componentes de software que pueden ser reutilizados en diferentes contextos.</li>
          <li><strong>Escalabilidad:</strong> Facilita la adición de nuevas funcionalidades sin comprometer las existentes.</li>
        </ul>
        <p>Git ha revolucionado el control de versiones con su enfoque distribuido, su capacidad para gestionar múltiples ramas y su sistema de snapshots. Comprender y utilizar Git es esencial para cualquier desarrollador que desee trabajar de manera efectiva en proyectos de software colaborativos.</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    background-color: #3c3c3c4a; /* Color de fondo */
  }
  
  .content {
    max-width: 800px;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
    background-color: #3c3c3c4a; /* Fondo blanco para el contenido */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  }
  
  .content h1,
  .content h3 {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 5px;
  }
  
  .content p,
  .content ul,
  .content ol {
    text-align: justify;
    margin-bottom: 15px; /* Espaciado entre párrafos y listas */
  }
  
  .content ul,
  .content ol {
    padding-left: 20px;
  }
  
  pre {
    background-color: #3c3c3c4a; /* Color de fondo del bloque de código */
    border-radius: 5px;
    overflow-x: auto;
    padding: 10px; /* Añade padding al bloque de código */
  }
  
  .content h2 {
    text-align: center;
    margin-bottom: 3px;
  }
  </style>
  