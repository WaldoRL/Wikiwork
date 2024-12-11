<template>
  <div class="container">
    <div class="content">
      <h1>Bienvenido a la Wiki de Aprendizaje de Incorporación</h1>
      <p>{{ author }}</p>
      <p>Elige alguno de los temas para empezar a repasar.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      author: 'Walter Rosales'
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: top;
  align-items: top;
  min-height: 100vh;
  padding: 20px;
  background-color: #3c3c3c4a; /* Color de fondo */
}

.content {
  max-width: 800px;
  text-align: center;
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
  text-align: center;
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
