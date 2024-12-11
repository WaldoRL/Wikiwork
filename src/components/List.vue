<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="content">
    <h2>Contenido</h2>
    <ul>
      <li><RouterLink to="/QA Introduction">QA Introduction</RouterLink></li>
      <li><RouterLink to="/Msoftware">Metodología de Software</RouterLink></li>
      <li><RouterLink to="/POO">POO</RouterLink></li>
      <li><RouterLink to="/Progra Funcional">Programación funcional</RouterLink></li>
      <li><RouterLink to="/Patrones de Diseño">Patrones de diseño</RouterLink></li>
      <li><RouterLink to="/SOLID">Principios SOLID</RouterLink></li>
      <li><RouterLink to="/Git">Git</RouterLink></li>
      <li><a href="#">Inglés</a></li>
      <li><a href="#">Tech</a></li>
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
</template>

<style scoped>
.content {
  position: fixed;
  top: 0;
  right: 0;
  width: 200px; /* Ajusta el ancho según tus necesidades */
  height: 100%;
  padding: 10px;
  overflow-y: auto; /* Añadir scroll si el contenido es largo */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px; /* Añade espacio entre las opciones */
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
