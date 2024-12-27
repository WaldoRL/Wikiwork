<template>
  <div class="container">
    <div id="qa-introduction" class="content">
      <h1>Software</h1>
      <p>En el área de software se usan distintos programas para las diferentes áreas.</p>
      <p>A continuación te explico algunos de los programas que se usan en el área de software:</p>
      <ol>
        <li>IntelliJ</li>
        <li>Putty (si tienes windows)</li>
        <li>Harmony sase (más en específico la VPN Perimeter 81)</li>
        <li>Un navegador. Para utilizar la plataforma de Pluto TV</li>
      </ol>
      <ul>
        <li>
          <h2>IntelliJ</h2>
        </li>
        <p>Es un IDE (Integrated Development Environment) que proporciona una amplia gama de herramientas para desarrollar software. Se caracteriza por su parecido a VSCode, además permite conectar de forma más fácil a los repositorios de github.</p>
        <p>Así se ve su interfaz:</p>
        <img src="@/assets/intellij.png" alt="intellijInterfacex" class="imagen" @click="zoomIn($event)">

        <li>
          <h2>Putty</h2>
        </li>
        <p>Si tienes windows es un programa que te permite conectar a una computadora remota linux para ingresar a una base de datos.</p>
        <p>Así se ve su interfaz:</p>
        <img src="@/assets/putty.png" alt="puttyInterfacex" class="imagen" @click="zoomIn($event)">
        <li>
          <h2>Harmony sase</h2>
        </li>
        <p>Es una VPN que te permite ingresar a la plataforma de Pluto TV.</p>
        <p>Así se ve su interfaz:</p>
        <img src="@/assets/Secure-Access.png" alt="harmonyInterfacex" class="imagen" @click="zoomIn($event)">
        <li>
          <h2>Pluto TV</h2>
        </li>
        <p>Es una plataforma de streaming que te permite ver series y películas de diferentes plataformas. Aquí también como un tester podrás ingresar contenido para hacer las pruebas a los casos dados.</p>
        <p>Así se ve su interfaz:</p>
        <img src="@/assets/PlutoTV.png" alt="plutoInterfacex" class="imagen" @click="zoomIn($event)">
      </ul>
      <p>Estos programas son esenciales para suplir las tareas de backend</p>
    </div>

    <!-- Contenedor para la imagen ampliada -->
    <div v-if="zoomedImageSrc" class="zoomed-image-container" @click="zoomOut">
      <img :src="zoomedImageSrc" class="zoomed-image">
    </div>
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
  background-color: #3c3c3c4a; /* Color de fondo */
  position: relative; /* Contenedor relativo para manejar posiciones absolutas y z-index */
  z-index: 1; /* Nivel de apilamiento base */
}

.content {
  max-width: 800px;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  background-color: #3c3c3c4a; /* Fondo blanco para el contenido */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  z-index: 2; /* Asegura que el contenido está por encima del contenedor base */
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
  z-index: 3; /* Asegura que las imágenes están por encima del contenido */
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
  z-index: 100; /* Asegura que la imagen ampliada está por encima de todo */
}

.zoomed-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}
</style>
