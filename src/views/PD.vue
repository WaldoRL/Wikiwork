<template>
    <div class="container">
      <div id="qa-introduction" class="content">
        <h1>Patrones de diseño</h1>
        <p>
            Los Patrones de Diseño son soluciones reutilizables y probadas para problemas comunes en el diseño de software. Surgieron como una manera de documentar las mejores prácticas y experiencias acumuladas por desarrolladores a lo largo del tiempo. Los patrones de diseño facilitan la creación de software robusto, mantenible y escalable, y promueven la reutilización del código.
        </p>
        <h3>Los patrones de diseño se dividen principalmente en tres categorías:</h3>
        <h2>Patrones Creacionales:</h2>
        <p>
            Estos patrones se ocupan de la creación de objetos y permiten crear objetos de manera que se adapte a la situación. Ejemplos: Singleton, Factory Method, Abstract Factory.
        </p>  
        <h2>Patrones Estructurales:</h2>
        <p>
            Estos patrones se centran en la composición de clases u objetos para formar estructuras más grandes. Ejemplos: Adapter, Composite, Decorator.
        </p>
        <h2>Patrones de Comportamiento:</h2>
        <p>
            Estos patrones tratan con la interacción y responsabilidad entre los objetos. Ejemplos: Observer, Strategy, Command.
        </p>
        <h2>Pasos para Implementar Patrones de Diseño</h2>
        <ol>
            <li>Definir el problema a resolver.</li>
            <ul>
                <li>Analiza el problema que estás enfrentando y entiende las necesidades y restricciones</li>
                <li>Identifica si el problema es recurrente y se ha encontrado en otras partes del sistema o en proyectos anteriores.</li>
            </ul>
            <li>Seleccionar el Patrón Apropiado:</li>
            <ul>
                    <li>Revisa las categorías de patrones de diseño y elige el que mejor se adapte a la situación.</li>
                    <li>Asegúrate de entender el propósito y la aplicabilidad del patrón seleccionado.</li>
            </ul>
            <li>Entender el Patrón:</li>
            <ul>
                    <li>Estudia la estructura y los componentes del patrón.</li>
                    <li>Revisa ejemplos y casos de uso del patrón para entender cómo se implementa y cuándo se aplica.</li>
            </ul>
            <li>Diseñar la Solución:</li>
            <ul>
                <li>Diseña la solución siguiendo la estructura del patrón seleccionado.</li>
                <li>Define las clases, interfaces y métodos necesarios.</li>
            </ul>
                <li>Implementar el Patrón:</li>
                <ul>
                    <li>Escribe el código siguiendo el diseño planificado.</li>
                    <li>Asegúrate de que la implementación respete los principios del patrón de diseño.</li>
                </ul>
                <li>Pruebas y Validación:</li>
                <ul>
                    <li>Prueba la implementación para verificar que resuelve el problema identificado.</li>
                    <li>Realiza pruebas unitarias y de integración para asegurar que el patrón funciona correctamente en el contexto del sistema.</li>
                </ul>
                <li>Documentación:</li>
                <ul>
                    <li>Documenta el patrón de diseño y su implementación para facilitar su uso y mantenimiento en el futuro.</li>
                    <li>Describe cómo el patrón resuelve el problema y proporciona beneficios a largo plazo.</li>
                </ul>
        </ol>
        <h2>Ejemplo de Implementación: Singleton en JavaScript</h2>
        <CODE>
            <pre>
                class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.data = [];
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

instance1.addData("Item 1");
console.log(instance2.getData()); // ["Item 1"]

// Las dos instancias son iguales
console.log(instance1 === instance2); // true
            </pre>
        </CODE>
        <p>Este ejemplo muestra cómo implementar el patrón Singleton para asegurarse de que solo exista una instancia de la clase Singleton.</p>
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
  