<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="sidebar">
    <h2>Contenido</h2>
    <ul>
      <li><RouterLink to="/TECH">Technologies</RouterLink></li>
      <li><RouterLink to="/QA Introduction">QA Introduction</RouterLink></li>
      <li><RouterLink to="/Msoftware">Metodología de Software</RouterLink></li>
      <li><RouterLink to="/POO">POO</RouterLink></li>
      <li><RouterLink to="/Progra Funcional">Programación funcional</RouterLink></li>
      <li><RouterLink to="/Patrones de Diseño">Patrones de diseño</RouterLink></li>
      <li><RouterLink to="/SOLID">Principios SOLID</RouterLink></li>
      <li><RouterLink to="/Git">Git</RouterLink></li>
      <li><a href="#">Inglés</a></li>
      <li><a href="#">Pr</a></li>
      <li><a href="#">Branches</a></li>
      <li><a href="#">Estructura de datos</a></li>
      <li><a href="#">BD</a></li>
      <li><a href="#">Lambdas</a></li>
      <li><a href="#">Scrum</a></li>
      <li><a href="#">GTAA</a></li>
      <li><a href="#">IA</a></li>
      <li><a href="#">Habilidades blandas</a></li>
      <li><a href="#">Redacción de CV</a></li>
      <li><a href="#">Psicología del Tester</a></li>
      <li><a href="#">Peer Programming First Task</a></li>
      <li><a href="#">CI/CD</a></li>
    </ul>
  </div>

  <!-- Contenedor para la imagen ampliada -->
  <div v-if="zoomedImageSrc" class="zoomed-image-container" @click="zoomOut">
    <img :src="zoomedImageSrc" class="zoomed-image">
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoomedImageSrc: null,
    };
  },
  methods: {
    zoomIn(event) {
      this.zoomedImageSrc = event.target.src;
    },
    zoomOut() {
      this.zoomedImageSrc = null;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
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

.imagen {
  display: block;
  margin: 20px auto; /* Centrar la imagen */
  max-width: 100%; /* Asegura que la imagen no sobrepase el contenedor */
  max-height: 300px; /* Ajusta este valor según sea necesario */
  width: auto; /* Mantiene la proporción de la imagen */
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 10px;
  cursor: pointer; /* Indica que la imagen es interactiva */
  z-index: 1; /* Asegura que la imagen tenga un nivel superior a la barra lateral */
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 200px; /* Ajusta el ancho según tus necesidades */
  height: 100%;
  padding: 10px;
  overflow-y: auto; /* Añadir scroll si el contenido es largo */
  background-color: #282828; /* Fondo con el color especificado */
  z-index: 0; /* Asegura que el menú esté detrás del zoom */
}

.zoomed-image-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8); /* Fondo semi-transparente */
  z-index: 100; /* Asegura que la imagen ampliada está por encima del menú */
}

.zoomed-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}
</style>
