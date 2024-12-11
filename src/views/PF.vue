<template>
    <div class="container">
      <div id="qa-introduction" class="content">
        <h1>Programacion Funcional</h1>
        <p>
          La Programación Funcional es un paradigma de programación que trata de construir software aplicando y componiendo funciones. Es diferente de la programación imperativa porque se centra en describir lo que se quiere lograr con funciones puras en lugar de especificar los pasos para lograrlo. Aquí tienes algunos conceptos clave y una lista de pasos básicos para aplicar la programación funcional:
        </p>
        <h3>Conceptos Clave de la Programación Funcional:</h3>
        <ul>
          <li><strong>Funciones Puras:</strong> Funciones que siempre producen el mismo resultado para los mismos argumentos y no tienen efectos secundarios.</li>
          <li><strong>Inmutabilidad:</strong> Los datos no cambian una vez creados. En lugar de modificar los datos, se crean nuevas versiones con los cambios.</li>
          <li><strong>Funciones de Orden Superior:</strong> Funciones que toman otras funciones como argumentos o devuelven funciones como resultado.</li>
          <li><strong>Composición de Funciones:</strong> Combinar funciones simples para construir funciones más complejas.</li>
          <li><strong>Recursión:</strong> Utilizar funciones que se llaman a sí mismas para iterar en lugar de bucles.</li>
        </ul>
        <h3>Pasos Básicos para Aplicar la Programación Funcional:</h3>
        <ol>
          <li>
            <strong>Comprender las Funciones Puras:</strong>
            <ul>
              <li>Asegúrate de que las funciones no dependan del estado externo ni modifiquen datos externos.</li>
              <li>Cada llamada a la función con los mismos argumentos debe producir el mismo resultado.</li>
            </ul>
          </li>
          <li>
            <strong>Adoptar la Inmutabilidad:</strong>
            <ul>
              <li>Utiliza estructuras de datos inmutables.</li>
              <li>Evita cambios en los datos una vez creados; en su lugar, crea nuevos datos con las modificaciones.</li>
            </ul>
          </li>
          <li>
            <strong>Utilizar Funciones de Orden Superior:</strong>
            <ul>
              <li>Crea funciones que tomen otras funciones como argumentos.</li>
              <li>Devuelve funciones desde otras funciones cuando sea necesario.</li>
            </ul>
          </li>
          <li>
            <strong>Practicar la Composición de Funciones:</strong>
            <ul>
              <li>Combina funciones simples para formar funciones más complejas.</li>
              <li>Utiliza operadores de composición para encadenar funciones.</li>
            </ul>
          </li>
          <li>
            <strong>Implementar Recursión:</strong>
            <ul>
              <li>Utiliza recursión para iterar en lugar de bucles for o while.</li>
              <li>Asegúrate de tener una condición base para terminar la recursión.</li>
            </ul>
          </li>
          <li>
            <strong>Evitar Efectos Secundarios:</strong>
            <ul>
              <li>Evita modificar el estado global o las variables fuera del ámbito de la función.</li>
              <li>Mantén las funciones independientes y libres de efectos colaterales.</li>
            </ul>
          </li>
        </ol>
        <h3>Ejemplo en JavaScript:</h3>
        <pre>
          <code>
  // Función pura
  const sum = (a, b) => a + b;
  
  // Inmutabilidad
  const addElement = (array, element) => [...array, element];
  
  // Función de orden superior
  const map = (fn, array) => array.map(fn);
  
  // Composición de funciones
  const compose = (f, g) => x => f(g(x));
  
  // Recursión
  const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
  
  // Evitar efectos secundarios
  const printMessage = message => {
    console.log(message);
    return message;
  };
          </code>
        </pre>
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
  
  