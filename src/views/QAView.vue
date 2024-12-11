<template>
  <div class="container">
    <div id="qa-introduction" class="content">
      <h1>QA Introduction</h1>
      <p>
        El Aseguramiento de la Calidad (QA) es un proceso de gestión de calidad que se enfoca en establecer estándares, directrices y procedimientos para prevenir problemas de calidad y mantener la integridad del producto o servicio durante su desarrollo. El objetivo principal de QA es garantizar que el producto final cumpla con las expectativas del cliente y sea de alta calidad.
      </p>
      <h3>Principales Funciones de QA:</h3>
      <ul>
        <li>Establecimiento de Estándares: Definir los estándares y requisitos que el producto debe cumplir.</li>
        <li>Monitoreo y Evaluación: Supervisar y evaluar continuamente el proceso de desarrollo para asegurar que se sigan los estándares establecidos.</li>
        <li>Identificación y Resolución de Problemas: Detectar y abordar problemas y defectos temprano en el proceso de desarrollo para evitar costos adicionales y retrasos.</li>
        <li>Mejora Continua: Implementar mejoras constantes en los procesos y productos para mantener y aumentar la calidad.</li>
      </ul>
      <h3>Beneficios de Implementar QA:</h3>
      <ul>
        <li>Reducción de Costos: Detectar y corregir errores temprano en el desarrollo reduce los costos asociados con reparaciones posteriores.</li>
        <li>Mayor Satisfacción del Cliente: Un producto de alta calidad mejora la satisfacción del cliente y fortalece la reputación de la marca.</li>
        <li>Mitigación de Riesgos: Identificar y resolver problemas antes de que el producto sea lanzado reduce el riesgo de fallos y problemas de seguridad.</li>
      </ul>
      <p>
        El QA es esencial en cualquier proyecto de desarrollo de software, ya que ayuda a garantizar que el producto final sea confiable, eficiente y libre de defectos.
      </p>
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
</style>
