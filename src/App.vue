<script setup>
import { RouterLink, RouterView } from 'vue-router';
import List from './views/ListView.vue';
import audioFile from './assets/WikiWork.wav'; // Asegúrate de la ruta correcta al archivo de audio

const playAudio = () => {
  const audio = new Audio(audioFile);
  audio.play();
};
</script>

<template>
  <header>
    <div class="row">
      <nav class="Navbar">
        <RouterLink to="/" id="home">Home</RouterLink>
        <p @click="playAudio">WikiWork</p>
      </nav>
    </div>
  </header>

  <main>
    <div class="content-container">
      <RouterView />
      <List />
    </div>
  </main>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  font-size: x-large;
  padding: 10px;
}
.home {
  justify-items: start;
}
p {
  cursor: pointer; /* Indica que el texto es interactivo */
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  width: 100%;
}

.row {
  margin-bottom: 2rem;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Ajusta este valor según sea necesario */
  padding: 20px;
}

ol {
  padding: 0;
  margin: 0;
  list-style-position: inside;
  width: 100%;
}

ol li {
  margin: 1rem 0;
}

ol li::marker {
  font-weight: bold;
}

h1, h2, p {
  margin: 0.5rem 0;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
}
</style>
