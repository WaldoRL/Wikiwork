<template>
  <div class="container">
    <div id="qa-introduction" class="content">
      <h1>Que es el POO</h1>
      <p>
        La Programación Orientada a Objetos (POO) es un paradigma de programación que utiliza "objetos" para diseñar aplicaciones y programas. 
        Un objeto es una instancia de una clase, que es una estructura que define las propiedades (datos) y métodos (funciones) que el objeto puede 
        tener y realizar. Aquí tienes los conceptos clave de la POO:
      </p>
      <p>
        <strong>Clases:</strong> Son plantillas para crear objetos. Una clase define un conjunto de atributos y métodos que los objetos creados a partir de la clase tendrán.
      </p>
      <p>
        <strong>Objetos:</strong> Son instancias de clases. Cada objeto tiene su propio estado representado por los atributos de la clase y su comportamiento definido por los métodos de la clase.
      </p>
      <p>
        <strong>Encapsulamiento:</strong> Es la práctica de mantener los detalles internos de un objeto ocultos del exterior. Los atributos de un objeto se mantienen privados y solo se pueden modificar a través de métodos públicos.
      </p>
      <p>
        <strong>Herencia:</strong> Permite crear nuevas clases basadas en clases existentes, heredando sus propiedades y métodos. Esto promueve la reutilización del código y la creación de jerarquías de clases.
      </p>
      <p>
        <strong>Polimorfismo:</strong> Es la capacidad de que diferentes clases respondan de manera distinta al mismo método. En otras palabras, el mismo nombre de método puede generar comportamientos diferentes en distintas clases.
      </p>
      <p>
        <strong>Abstracción:</strong> Es el proceso de ocultar los detalles complejos del sistema y mostrar solo las características esenciales. Esto permite a los desarrolladores centrarse en un nivel más alto de la implementación.
      </p>
      <p>
        Estos conceptos se utilizan juntos para construir sistemas modulares y reutilizables que son más fáciles de entender, mantener y extender. La POO es un enfoque poderoso y ampliamente utilizado en el desarrollo de software moderno.
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
